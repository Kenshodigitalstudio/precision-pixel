import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/votre-entreprise")({
  head: () => ({
    meta: [
      { title: "Votre Entreprise — Gestion mensuelle Google Ads | Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Avec VOTRE ENTREPRISE, on ne vous dit pas juste quoi faire : on le fait pour vous. Création complète de vos campagnes Google Ads, optimisation continue et accompagnement réel.",
      },
      { property: "og:title", content: "Votre Entreprise — Gestion mensuelle Google Ads" },
      {
        property: "og:description",
        content:
          "Création complète de vos campagnes Google Ads, optimisation continue et accompagnement réel, pas juste des conseils.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: VotreEntreprisePage,
});

const included = [
  "Création complète de vos campagnes Google Ads",
  "Optimisation continue pour maximiser vos résultats",
  "Suivi des performances et ajustements stratégiques",
  "Accompagnement réel, pas juste des conseils",
];

function VotreEntreprisePage() {
  return (
    <main className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32">
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[8%] h-72 w-72 rounded-full bg-solar/25 blur-3xl" />
        <div className="absolute right-[8%] top-[30%] h-80 w-80 rounded-full bg-mint/20 blur-3xl" />
        <div className="absolute left-[30%] bottom-[5%] h-72 w-72 rounded-full bg-electric/15 blur-3xl" />
      </div>
      {/* Floating sparkles */}
      <span aria-hidden className="float-y absolute left-[8%] top-[18%] text-2xl text-ink/70 hidden sm:block">✦</span>
      <span aria-hidden className="float-y absolute right-[12%] top-[22%] text-xl text-ink/70 hidden sm:block" style={{ animationDelay: "1.2s" }}>✦</span>
      <span aria-hidden className="float-y absolute left-[18%] bottom-[10%] text-lg text-ink/60 hidden sm:block" style={{ animationDelay: "2.4s" }}>✺</span>
      <span aria-hidden className="float-y absolute right-[6%] top-[55%] text-base text-ink/60 hidden sm:block" style={{ animationDelay: "0.8s" }}>✦</span>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-solar via-amber-400 to-mint px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink shadow-[0_4px_14px_-2px_rgba(234,179,8,0.6)]">
          ✦ Premium
        </span>

        <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
          Votre Entreprise
          <span className="block bg-gradient-to-r from-solar via-amber-500 to-mint bg-clip-text text-transparent">
            gestion mensuelle de votre compte
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-[15px] sm:text-base leading-relaxed text-ink-soft">
          Avec <strong className="text-ink">VOTRE ENTREPRISE</strong>, on fait totalement différent :
          on ne vous dit pas juste quoi faire.
          <span className="mt-2 block font-semibold text-ink">👉 On le fait POUR vous.</span>
        </p>

        <ul className="mx-auto mt-10 max-w-xl space-y-3 text-left">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/25 px-5 py-4 text-[15px] text-ink shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
            >
              <span aria-hidden className="mt-0.5 text-mint">✔️</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Link
            to="/reservation"
            search={{ service: "tracking_setup" }}
            className="group inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-gradient-to-r from-solar/80 via-amber-300/80 to-mint/70 px-7 py-3.5 text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(234,179,8,0.55)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-8px_rgba(234,179,8,0.7)]"
          >
            Prendre rendez-vous
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
