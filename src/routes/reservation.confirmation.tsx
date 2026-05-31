import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "@/components/landing/Sparkles";

export const Route = createFileRoute("/reservation/confirmation")({
  validateSearch: (search: Record<string, unknown>): { session_id?: string } => ({
    session_id:
      typeof search.session_id === "string" ? search.session_id : undefined,
  }),
  component: ConfirmationPage,
  head: () => ({
    meta: [
      { title: "Paiement confirmé — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Votre paiement a bien été reçu. À très vite chez Kenshō Digital Studio.",
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

      <div className="relative mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-white/50 bg-white/40 text-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
          ✓
        </span>

        <span className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-electric">
          Paiement reçu
        </span>
        <h1 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-light leading-[1.05] tracking-[-0.03em]">
          Merci, votre paiement
          <span className="block font-extralight text-ink-soft">
            est bien confirmé.
          </span>
        </h1>

        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft">
          Un email de confirmation vous est envoyé. Notre équipe vous contactera
          avant votre rendez-vous Google Meet pour préparer la session ensemble.
          À très vite, Kenshō Digital Studio.
        </p>

        {sessionId && (
          <p className="mt-6 font-mono text-[11px] text-ink-soft/70">
            Référence : {sessionId.slice(0, 24)}…
          </p>
        )}

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/70"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
