import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Sparkles } from "@/components/landing/Sparkles";

const CALENDLY_URL = "https://calendly.com/kenshodigitalstudio/rdv-kensho";

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
      { title: "Paiement confirmé — Choisissez votre créneau | Kenshō Studio" },
      {
        name: "description",
        content:
          "Votre paiement a été pris en compte. Choisissez maintenant votre créneau avec Kenshō Digital Studio.",
      },
    ],
  }),
});

function ConfirmationPage() {
  const { session_id: sessionId, service } = Route.useSearch();
  const isAudit = service === "audit_flash";

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink font-display">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-electric/25 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-solar/30 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-mint/25 blur-3xl" />
      </div>

      <Sparkles variant="subtle" />

      <div className="relative mx-auto max-w-4xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <div className="text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-emerald-300/60 bg-emerald-50/85 text-2xl font-semibold text-emerald-700 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.4)] backdrop-blur-2xl">
            ✓
          </span>

          <span className="mt-6 inline-block font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-700">
            Paiement confirmé
          </span>

          <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.3rem)] font-light leading-[1.08] tracking-[-0.04em]">
            Votre réservation avance.
            <span className="mt-1 block bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text pb-1 font-normal text-transparent">
              Choisissez votre créneau.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {isAudit
              ? "Votre Audit Google Ads est payé. Il ne vous reste plus qu’à sélectionner le moment de votre rendez-vous avec Kenshō Studio."
              : "Votre paiement a été pris en compte. Sélectionnez le créneau qui vous convient pour organiser la suite de votre prestation."}
          </p>
        </div>
      </div>

      <section className="relative mx-auto max-w-5xl px-4 pb-14 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/75 bg-white/55 p-3 shadow-[0_28px_85px_-35px_rgba(30,45,90,0.28)] backdrop-blur-2xl sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/8 px-3 pb-4 pt-2 sm:px-4">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-electric">
                Kenshō Digital Studio
              </span>
              <h2 className="mt-1 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                {isAudit ? "Réserver votre audit" : "Choisir votre rendez-vous"}
              </h2>
              <p className="mt-1 text-xs text-ink-soft">
                Sélectionnez directement une date et une heure dans le calendrier.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/8 px-3 py-1.5 text-[10px] font-semibold text-electric">
              <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_9px_rgba(75,125,255,0.8)]" />
              {isAudit ? "Audit individuel · 1 heure" : "Rendez-vous Kenshō"}
            </span>
          </div>

          <div className="mt-4 overflow-hidden rounded-[1.4rem] border border-white/80 bg-white shadow-inner">
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1b1e2b&primary_color=5685ff`}
              title="Choisir un créneau avec Kenshō Digital Studio"
              className="block h-[760px] w-full border-0 sm:h-[820px]"
              loading="lazy"
              allow="payment"
            />
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-ink-soft">
          Le calendrier ne s’affiche pas ?{" "}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-electric underline decoration-electric/40 underline-offset-4 transition hover:text-ink"
          >
            Ouvrir Calendly dans un nouvel onglet ↗
          </a>
        </p>
      </section>

      <div className="relative mx-auto max-w-4xl px-5 pb-20 text-center sm:px-8">
        {sessionId && (
          <p className="font-mono text-[10px] text-ink-soft/65">
            Référence de paiement : {sessionId.slice(0, 24)}…
          </p>
        )}
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/45 px-6 py-3 text-xs font-semibold text-ink shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/75"
        >
          ← Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
