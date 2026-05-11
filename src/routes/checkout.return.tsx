import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const CAL_URL = "https://calendar.app.google/qg7jgpvovovLnEoN9";

export const Route = createFileRoute("/checkout/return")({
  validateSearch: (search: Record<string, unknown>): { session_id?: string; price_id?: string } => ({
    session_id: typeof search.session_id === "string" ? search.session_id : undefined,
    price_id: typeof search.price_id === "string" ? search.price_id : undefined,
  }),
  component: CheckoutReturn,
  head: () => ({
    meta: [
      { title: "Paiement confirmé — Kenshō Digital Studio" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function CheckoutReturn() {
  const { session_id } = Route.useSearch();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!session_id) return;
    const interval = setInterval(() => setCountdown((c) => c - 1), 1000);
    const redirect = setTimeout(() => {
      window.location.href = CAL_URL;
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(redirect);
    };
  }, [session_id]);

  if (!session_id) {
    return (
      <main className="grid min-h-screen place-items-center px-6 text-center">
        <div>
          <h1 className="font-display text-3xl font-semibold">Aucune session trouvée</h1>
          <p className="mt-3 text-ink-soft">
            Retournez à <a href="/" className="underline">l'accueil</a>.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="max-w-lg">
        <span aria-hidden className="text-5xl">✅</span>
        <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em]">
          Paiement confirmé&nbsp;!
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          Merci pour votre confiance. Choisissez maintenant votre créneau de rendez-vous.
        </p>
        <p className="mt-6 text-sm text-ink-soft">
          Redirection vers le calendrier dans {countdown}s…
        </p>
        <a
          href={CAL_URL}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-6 py-3 text-sm font-semibold text-ink shadow-[0_8px_30px_-8px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all hover:bg-white/50"
        >
          Choisir mon créneau maintenant <span>↗</span>
        </a>
      </div>
    </main>
  );
}
