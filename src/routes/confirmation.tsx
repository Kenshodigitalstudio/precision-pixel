import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Sparkles } from "@/components/landing/Sparkles";

export const Route = createFileRoute("/confirmation")({
  component: ConfirmationPage,
  head: () => ({
    meta: [
      { title: "Rendez-vous confirmé — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Votre rendez-vous avec Kenshō Digital Studio est confirmé. Vous allez recevoir un email avec tous les détails.",
      },
    ],
  }),
});

function ConfirmationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
      <Nav />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-electric/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-solar/40 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-mint/30 blur-3xl" />
      </div>

      <Sparkles variant="dense" />

      <section className="relative mx-auto max-w-[600px] px-6 pt-32 pb-20 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-emerald-300/60 bg-emerald-50/80 text-3xl text-emerald-700 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.45)] backdrop-blur-2xl">
          ✓
        </div>

        <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-light leading-[1.05] tracking-[-0.03em] text-ink">
          Rendez-vous confirmé{" "}
          <span className="bg-gradient-to-r from-[color:var(--coral)] via-[color:var(--lilac)] to-[color:var(--electric)] bg-clip-text text-transparent">
            ✦
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
          Merci pour votre confiance. Vous allez recevoir un email de
          confirmation avec tous les détails de votre appel.
        </p>

        <div className="mt-10 rounded-[1.75rem] border border-white/50 bg-white/45 p-7 text-left backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
          <h2 className="font-display text-lg font-semibold tracking-tight text-ink">
            📅 Ce qui vous attend
          </h2>
          <ul className="mt-5 space-y-3 text-[15px] text-ink-soft">
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--electric)]" />
              <span>Un expert Kenshō dédié à votre compte</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--lilac)]" />
              <span>30 minutes pour identifier vos axes d'amélioration</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--coral)]" />
              <span>Des recommandations concrètes et actionnables dès le premier appel</span>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/70"
        >
          ← Retour à l'accueil
        </Link>

        <p className="mt-10 text-xs text-ink-soft">
          Une question ?{" "}
          <a
            href="mailto:kenshostudio@gmail.com"
            className="font-medium text-ink underline underline-offset-4 hover:text-electric"
          >
            kenshostudio@gmail.com
          </a>
        </p>
      </section>

      <Footer />
    </main>
  );
}
