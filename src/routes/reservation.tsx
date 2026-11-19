
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Sparkles } from "@/components/landing/Sparkles";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

const searchSchema = z.object({
  service: fallback(
    z.enum(["audit_flash", "tracking_setup"]),
    "audit_flash",
  ).default("audit_flash"),
});

export const Route = createFileRoute("/reservation")({
  validateSearch: zodValidator(searchSchema),
  component: ReservationPage,
  head: () => ({
    meta: [
      { title: "Audit Google Ads — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Réservez votre audit Google Ads individuel avec Kenshō Studio : une heure d’analyse et des recommandations concrètes pour 150 €.",
      },
    ],
  }),
});

const AUDIT_ITEMS = [
  {
    number: "01",
    title: "Structure du compte",
    description: "Organisation des campagnes et cohérence de la structure.",
  },
  {
    number: "02",
    title: "Budget & dépenses",
    description: "Répartition du budget et identification des dépenses à revoir.",
  },
  {
    number: "03",
    title: "Ciblage & mots-clés",
    description: "Pertinence des mots-clés, audiences et paramètres de ciblage.",
  },
  {
    number: "04",
    title: "Annonces & résultats",
    description: "Lecture des performances et identification des axes d’amélioration.",
  },
];

function ReservationPage() {
  const { service } = Route.useSearch();
  const isTracking = service === "tracking_setup";
  const title = isTracking ? "Installation tracking & tags" : "Audit Google Ads";
  const price = isTracking ? "100 €" : "150 €";
  const duration = isTracking ? "Prestation dédiée" : "1 heure";

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-electric/15 blur-3xl" />
        <div className="absolute -right-24 top-[35%] h-96 w-96 rounded-full bg-solar/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-mint/15 blur-3xl" />
      </div>

      <Sparkles variant="subtle" />
      <Nav />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-36 sm:px-8 sm:pt-44 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-white/60 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-electric shadow-sm backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_rgba(75,125,255,0.8)]" />
            Kenshō Digital Studio · {isTracking ? "Tracking" : "Audit Google Ads"}
          </span>

          <h1 className="mt-7 text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-[1.02] tracking-[-0.05em]">
            {isTracking ? "Un suivi fiable pour" : "Votre compte Google Ads mérite"}
            <span className="mt-2 block bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text pb-2 font-normal text-transparent">
              {isTracking ? "des décisions éclairées." : "un regard expert."}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {isTracking
              ? "Une prestation dédiée à la mise en place et à la vérification de votre suivi pour mesurer les actions importantes de votre activité."
              : "En une heure, nous analysons votre compte, identifions les points à améliorer et vous partageons des recommandations concrètes pour mieux orienter vos campagnes."}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-ink-soft">
            <span className="inline-flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/80 text-electric shadow-sm">✓</span>
              Échange individuel avec un expert
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/80 text-electric shadow-sm">✓</span>
              {duration}
            </span>
          </div>

          <a href="#details" className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(20,20,40,0.55)] transition hover:-translate-y-0.5">
            Découvrir la prestation <span aria-hidden>↓</span>
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
          <div aria-hidden className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-electric/25 via-lilac/15 to-solar/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_28px_80px_-35px_rgba(35,55,110,0.3)] backdrop-blur-2xl sm:p-8">
            <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-electric/15 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-electric">
                  Prestation ponctuelle
                </span>
                <span className="rounded-full border border-emerald-300/70 bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700">
                  Sans abonnement
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-2 text-sm text-ink-soft">
                {isTracking ? "Configuration du suivi" : "Analyse stratégique individuelle"}
              </p>

              <div className="mt-7 flex items-end gap-3">
                <span className="text-6xl font-semibold leading-none tracking-[-0.06em]">{price}</span>
                <span className="mb-1.5 text-xs text-ink-soft">Paiement unique</span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white bg-white/70 p-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink-soft">Durée</span>
                  <p className="mt-1 text-sm font-semibold">{duration}</p>
                </div>
                <div className="rounded-2xl border border-white bg-white/70 p-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink-soft">Format</span>
                  <p className="mt-1 text-sm font-semibold">{isTracking ? "À distance" : "Visioconférence"}</p>
                </div>
              </div>

              <button
                type="button"
                className="group relative mt-7 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_34px_-12px_rgba(35,50,90,0.55)] transition hover:-translate-y-0.5"
              >
                <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Payer {price}</span>
                <span className="relative">↗</span>
              </button>

              <p className="mt-4 text-center text-[10px] leading-relaxed text-ink-soft">
                Réservation et paiement prochainement disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="border-t border-ink/5 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-electric">
              {isTracking ? "La prestation" : "Le contenu de votre audit"}
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight tracking-[-0.04em]">
              {isTracking ? "Un suivi plus clair." : "Une heure pour comprendre ce qui compte."}
              {!isTracking && (
                <span className="block bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text font-normal text-transparent">
                  Et savoir quoi améliorer.
                </span>
              )}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
              {isTracking
                ? "Nous vérifions les éléments de mesure nécessaires à un suivi cohérent de votre activité."
                : "L’objectif est de prendre du recul sur votre compte, de faire ressortir les points de vigilance et de définir les actions à prioriser."}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(isTracking
              ? [
                  { number: "01", title: "Google Tag", description: "Vérification de l’installation des balises." },
                  { number: "02", title: "GA4", description: "Contrôle des éléments de mesure." },
                  { number: "03", title: "Conversions", description: "Configuration des événements utiles." },
                  { number: "04", title: "Vérifications", description: "Tests du fonctionnement du suivi." },
                ]
              : AUDIT_ITEMS
            ).map((item) => (
              <article key={item.number} className="group relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/50 p-6 shadow-[0_16px_45px_-28px_rgba(20,20,40,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/75">
                <span className="font-mono text-xs font-semibold text-electric/80">{item.number}</span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                <div aria-hidden className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-electric/10 blur-2xl transition group-hover:bg-electric/20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {!isTracking && (
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
            <div className="rounded-[1.8rem] border border-white/80 bg-gradient-to-br from-white/80 via-white/55 to-electric/10 p-7 shadow-[0_20px_60px_-32px_rgba(50,90,190,0.25)] backdrop-blur-2xl sm:p-9">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-electric">À l’issue de l’audit</span>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Vous repartez avec une vision plus claire.</h2>
              <ul className="mt-7 space-y-4 text-sm leading-relaxed text-ink-soft">
                {[
                  "Une meilleure lecture de la situation de votre compte.",
                  "Les points de friction et dépenses à surveiller.",
                  "Des recommandations concrètes, classées par priorité.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-electric/10 text-[11px] font-bold text-electric">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.8rem] border border-amber-200/70 bg-gradient-to-br from-[#fffdf6] to-[#fff7df]/80 p-7 backdrop-blur-xl sm:p-9">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">À savoir</span>
              <h2 className="mt-3 text-2xl font-semibold">Un audit, pas une gestion mensuelle.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                La prestation comprend l’analyse et les recommandations. Les modifications directement dans votre compte et le pilotage continu des campagnes ne sont pas inclus.
              </p>
              <a href="/services/google-ads" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-electric/40 underline-offset-4 transition hover:text-electric">
                Découvrir l’accompagnement mensuel <span>→</span>
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-ink/5 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-electric">Les prochaines étapes</span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-light tracking-[-0.04em]">Simple, de la réservation à l’échange.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { number: "01", title: "Découvrez la prestation", text: "Prenez connaissance du contenu de votre audit et de ses objectifs." },
              { number: "02", title: "Préparez votre compte", text: "Rassemblez les informations utiles sur vos campagnes et vos objectifs." },
              { number: "03", title: isTracking ? "Finalisez la prestation" : "Échangez pendant 1 heure", text: isTracking ? "Nous avançons sur la mise en place du suivi et les vérifications prévues." : "Retrouvez votre expert en visioconférence pour analyser votre compte et vos priorités." },
            ].map((step) => (
              <article key={step.number} className="rounded-[1.5rem] border border-white/80 bg-white/45 p-6 backdrop-blur-xl">
                <span className="font-mono text-sm font-bold text-electric">{step.number}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-4 sm:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white/80 via-white/55 to-electric/10 p-8 text-center shadow-[0_25px_80px_-35px_rgba(35,65,140,0.25)] backdrop-blur-2xl sm:p-12">
          <div aria-hidden className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-electric/15 blur-3xl" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-electric">Kenshō Digital Studio</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-[clamp(1.8rem,4vw,2.8rem)] font-light leading-tight tracking-[-0.04em]">
            Prêt à prendre du recul sur vos campagnes ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
            Découvrez notre prestation et les bénéfices de votre audit.
          </p>
          <button type="button" className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_35px_-12px_rgba(25,35,60,0.45)] transition hover:-translate-y-0.5">
            Payer {price} <span>↗</span>
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

