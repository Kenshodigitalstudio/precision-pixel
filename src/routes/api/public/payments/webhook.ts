import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { type StripeEnv, createStripeClient, verifyWebhook } from "@/lib/stripe.server";

let _supabase: ReturnType<typeof createClient> | null = null;
function getSupabase() {
  if (!_supabase) {
    _supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
  }
  return _supabase;
}

async function handleCheckoutCompleted(session: any, env: StripeEnv) {
  // Fetch line items to get price/product info reliably
  const stripe = createStripeClient(env);
  let priceId: string | null = session.metadata?.priceId ?? null;
  let productId: string | null = null;
  try {
    const items = await stripe.checkout.sessions.listLineItems(session.id, { limit: 1, expand: ["data.price"] });
    const item = items.data[0];
    if (item?.price) {
      priceId = priceId || item.price.lookup_key || (item.price.metadata as any)?.lovable_external_id || item.price.id;
      productId = typeof item.price.product === "string" ? item.price.product : (item.price.product as any)?.id ?? null;
    }
  } catch (e) {
    console.error("Failed to fetch line items:", e);
  }

  const { error } = await getSupabase().from("orders").upsert(
    {
      stripe_session_id: session.id,
      stripe_payment_intent_id: typeof session.payment_intent === "string" ? session.payment_intent : null,
      stripe_customer_id: typeof session.customer === "string" ? session.customer : null,
      customer_email: session.customer_details?.email ?? session.customer_email ?? null,
      customer_name: session.customer_details?.name ?? null,
      price_id: priceId,
      product_id: productId,
      amount_total: session.amount_total ?? null,
      currency: session.currency ?? null,
      status: session.payment_status === "paid" ? "completed" : session.payment_status ?? "completed",
      environment: env,
      metadata: session.metadata ?? {},
    },
    { onConflict: "stripe_session_id" },
  );
  if (error) console.error("Failed to upsert order:", error);
  else console.log("Order recorded:", session.id, priceId);
}

export const Route = createFileRoute("/api/public/payments/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const rawEnv = new URL(request.url).searchParams.get("env");
        if (rawEnv !== "sandbox" && rawEnv !== "live") {
          return Response.json({ received: true, ignored: "invalid env" });
        }
        const env: StripeEnv = rawEnv;
        try {
          const event = await verifyWebhook(request, env);
          console.log("Payment webhook received:", event.type);

          switch (event.type) {
            case "checkout.session.completed":
            case "checkout.session.async_payment_succeeded":
              await handleCheckoutCompleted(event.data.object, env);
              break;
            default:
              // Other events (payment_intent.*, charge.*) ignored — Stripe is the source of truth.
              break;
          }
          return Response.json({ received: true });
        } catch (e) {
          console.error("Webhook error:", e);
          return new Response("Webhook error", { status: 400 });
        }
      },
    },
  },
});
