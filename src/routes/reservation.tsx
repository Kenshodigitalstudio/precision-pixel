import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Sparkles } from "@/components/landing/Sparkles";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";

const SERVICES = {
  audit_flash: {
    priceId: "audit_flash_onetime",
    label: "Audit Flash Google Ads",
    tagline: "RDV 30 min — audit complet",
    price: "150 €",
    gradient: "from-sky/70 via-electric/60 to-electric-soft/70",
  },
  tracking_setup: {
    priceId: "tracking_setup_onetime",
    label: "Installation tracking & tags",
    tagline: "Google Tag, GA4, conversions",
    price: "100 €",
    gradient: "from-mint/70 via-emerald-400/60 to-emerald-600/70",
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

const searchSchema = z.object({
  service: fallback(z.enum(["audit_flash", "tracking_setup"]), "audit_flash").default(
    "audit_flash",
  ),
});

export const Route = createFileRoute("/reservation")({
  validateSearch: zodValidator(searchSchema),
  component: ReservationPage,
  head: () => ({
    meta: [
      { title: "Réservation — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Réglez votre service en ligne, puis choisissez votre créneau Google Meet juste après.",
      },
      { property: "og:title", content: "Réservation — Kenshō Digital Studio" },
      {
        property: "og:description",
        content:
          "Réglez votre service en ligne, puis choisissez votre créneau Google Meet juste après.",
      },
    ],
  }),
});

function ReservationPage() {
  const { service } = Route.useSearch();
  const { openCheckout, isOpen, checkoutElement } = useStripeCheckout();

  const current = SERVICES[service];

  const handlePay = () => {
    openCheckout({
      priceId: current.priceId,
      returnUrl: `${window.location.origin}/reservation/confirmation?session_id={CHECKOUT_SESSION_ID}&service=${service}`,
    });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-electric/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-solar/40 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
      </div>

      <Sparkles variant="dense" />

      <PaymentTestModeBanner />

      <div className="relative mx-auto max-w-3xl px-6 pt-16 pb-10 sm:pt-24">
        <Link
          to="/"
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft hover:text-ink transition-colors"
        >
          ← Retour
        </Link>

        <div className="mt-10 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            Réservation
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em]">
            Réservez votre session avec
            <span className="block font-extralight text-ink-soft">
              Kenshō Digital Studio
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Réglez votre service ci-dessous, puis choisissez votre créneau
            Google Meet juste après. Le lien de visio vous est envoyé
            automatiquement par email après la prise de rendez-vous.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="rounded-[1.75rem] border border-white/40 bg-white/30 p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/50 bg-white/40 p-6 sm:flex-row sm:items-center">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                {current.tagline}
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
                {current.label}
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`font-display text-3xl font-extrabold tracking-tight bg-gradient-to-br ${current.gradient} bg-clip-text text-transparent`}
              >
                {current.price}
              </span>
              {!isOpen && (
                <button
                  type="button"
                  onClick={handlePay}
                  className="rounded-full border border-white/50 bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:bg-ink/90"
                >
                  Payer {current.price} →
                </button>
              )}
            </div>
          </div>

          {checkoutElement && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-2 backdrop-blur-md">
              {checkoutElement}
            </div>
          )}

          <p className="mt-4 text-xs text-ink-soft">
            Paiement sécurisé par Stripe. Aucune donnée bancaire n'est stockée
            sur nos serveurs. TVA non applicable, art. 293B du CGI. Après
            paiement, vous choisirez votre créneau et recevrez le lien Google
            Meet par email.
          </p>
        </div>
      </section>
    </main>
  );
}
