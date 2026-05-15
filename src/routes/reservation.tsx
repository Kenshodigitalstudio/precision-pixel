import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Sparkles } from "@/components/landing/Sparkles";

const CALENDLY_URL = "https://calendly.com/kenshodigitalstudio/30min";

export const Route = createFileRoute("/reservation")({
  component: ReservationPage,
  head: () => ({
    meta: [
      { title: "Réservation — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Réservez votre créneau Google Meet avec un expert Kenshō Digital Studio. Devis personnalisé envoyé par email après votre prise de rendez-vous.",
      },
      { property: "og:title", content: "Réservation — Kenshō Digital Studio" },
      {
        property: "og:description",
        content:
          "Réservez votre créneau Google Meet avec un expert Kenshō Digital Studio.",
      },
    ],
  }),
});

function ReservationPage() {
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
      {/* Ambient color blobs (same vibe as the landing) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-electric/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-solar/40 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
      </div>

      {/* Floating sparkles */}
      <Sparkles variant="dense" />

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
            Prenez rendez-vous avec
            <span className="block font-extralight text-ink-soft">
              Kenshō Digital Studio
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Bienvenue chez Kenshō Digital Studio. Remplissez les informations
            ci-dessous pour réserver votre créneau Google Meet avec l'un de nos
            experts. Suite à votre prise de rendez-vous, un devis personnalisé
            vous sera transmis par email. Un membre de notre équipe prendra
            également contact avec vous avant le rendez-vous pour confirmer
            votre créneau et répondre à vos premières questions. À très vite,
            Kenshō Digital Studio.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/40 bg-white/30 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=1a1a1a`}
            style={{ minWidth: "320px", height: "720px" }}
          />
        </div>
      </div>
    </main>
  );
}
