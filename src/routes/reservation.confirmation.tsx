import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Sparkles } from "@/components/landing/Sparkles";

const CALENDLY_URL = "https://calendly.com/kenshodigitalstudio/30min";

const searchSchema = z.object({
  session_id: z.string().optional(),
  service: fallback(z.enum(["audit_flash", "tracking_setup"]), "audit_flash").default(
    "audit_flash",
  ),
});

export const Route = createFileRoute("/reservation/confirmation")({
  validateSearch: zodValidator(searchSchema),
  component: ConfirmationPage,
  head: () => ({
    meta: [
      { title: "Paiement confirmé — Choisissez votre créneau" },
      {
        name: "description",
        content:
          "Paiement reçu. Dernière étape : choisissez votre créneau Google Meet avec Kenshō Digital Studio.",
      },
    ],
  }),
});

function ConfirmationPage() {
  const { session_id: sessionId } = Route.useSearch();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-electric/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-solar/40 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-mint/30 blur-3xl" />
      </div>

      <Sparkles variant="dense" />

      <div className="relative mx-auto max-w-3xl px-6 pt-16 pb-8 sm:pt-24">
        <div className="text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-emerald-300/60 bg-emerald-50/80 text-2xl text-emerald-700 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.4)] backdrop-blur-2xl">
            ✓
          </span>
          <span className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.25em] text-emerald-700">
            Paiement reçu
          </span>
          <h1 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-light leading-[1.1] tracking-[-0.03em]">
            Dernière étape —
            <span className="block font-extralight text-ink-soft">
              choisissez votre créneau Google Meet
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Sélectionnez le créneau qui vous convient ci-dessous. Vous recevrez
            immédiatement un email de confirmation avec le lien Google Meet et
            l'invitation calendrier.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/40 bg-white/30 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
          <iframe
            src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=1a1a1a`}
            title="Choisir un créneau Google Meet avec Kenshō Digital Studio"
            className="block h-[720px] w-full border-0"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-center text-sm text-ink-soft">
          Le widget ne s'affiche pas&nbsp;?{" "}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline underline-offset-4 hover:text-electric"
          >
            Ouvrir Calendly dans un nouvel onglet ↗
          </a>
        </p>
      </section>

      <div className="relative mx-auto max-w-3xl px-6 pb-24 text-center">
        {sessionId && (
          <p className="font-mono text-[11px] text-ink-soft/70">
            Référence paiement : {sessionId.slice(0, 24)}…
          </p>
        )}
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/70"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
