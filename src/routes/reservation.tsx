import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Sparkles } from "@/components/landing/Sparkles";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";

const SERVICES = {
  audit_flash: {
    priceId: "audit_flash_onetime",
    label: "Audit Google Ads",
    eyebrow: "Analyse stratégique individuelle",
    price: "150 €",
    duration: "1 heure",
    description:
      "Une analyse approfondie de votre compte Google Ads pour comprendre ce qui fonctionne, repérer les points faibles et définir les optimisations à prioriser.",
  },
  tracking_setup: {
    priceId: "tracking_setup_onetime",
    label: "Installation tracking & tags",
    eyebrow: "Configuration du suivi",
    price: "100 €",
    duration: "Prestation dédiée",
    description:
      "Mise en place des éléments de suivi nécessaires pour mesurer plus clairement les actions et conversions de votre site.",
  },
} as const;

type ServiceKey = keyof typeof SERVICES;

const AUDIT_POINTS = [
  {
    number: "01",
    title: "Structure du compte",
    text: "Lecture de l’organisation de votre compte et de vos campagnes.",
  },
  {
    number: "02",
    title: "Budget & dépenses",
    text: "Repérage des dépenses peu pertinentes et des pistes de meilleure allocation.",
  },
  {
    number: "03",
    title: "Mots-clés & ciblages",
    text: "Revue des mots-clés, des enchères et des audiences utilisées.",
  },
  {
    number: "04",
    title: "Annonces & résultats",
    text: "Analyse des annonces et des performances pour identifier les priorités.",
  },
];

const AUDIT_OUTCOMES = [
  "Une meilleure lecture de la situation de votre compte.",
  "Les points de friction et dépenses à surveiller.",
  "Des recommandations concrètes, classées par priorité.",
];

const TRACKING_POINTS = [
  {
    number: "01",
    title: "Google Tag & balises",
    text: "Vérification des éléments de collecte et de leur installation.",
  },
  {
    number: "02",
    title: "GA4",
    text: "Configuration ou vérification des éléments de mesure.",
  },
  {
    number: "03",
    title: "Conversions",
    text: "Paramétrage des événements utiles au suivi de votre activité.",
  },
  {
    number: "04",
    title: "Vérifications",
    text: "Contrôle du fonctionnement général du dispositif mis en place.",
  },
];

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
      { title: "Audit Google Ads — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Réservez votre audit Google Ads individuel avec Kenshō Studio. Une heure d’analyse et des recommandations concrètes pour 150 €.",
      },
      { property: "og:title", content: "Audit Google Ads — Kenshō Digital Studio" },
      {
        property: "og:description",
        content:
          "Une heure pour comprendre vos campagnes, repérer les points faibles et définir vos priorités. Audit à 150 €.",
      },
    ],
  }),
});

function ReservationPage() {
  const { service } = Route.useSearch() as { service: ServiceKey };
  const { openCheckout, isOpen, checkoutElement } = useStripeCheckout();

  const current = SERVICES[service];
  const isAudit = service === "audit_flash";
  const points = isAudit ? AUDIT_POINTS : TRACKING_POINTS;

  const handlePay = () => {
    openCheckout({
      priceId: current.priceId,
      returnUrl: `${window.location.origin}/reservation/confirmation?session_id={CHECKOUT_SESSION_ID}&service=${service}`,
    });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink font-display">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-24 h-[26rem] w-[26rem] rounded-full bg-electric/15 blur-3xl" />
        <div className="absolute -right-20 top-[30%] h-[30rem] w-[30rem] rounded-full bg-solar/20 blur-3xl" />
        <div className="absolute bottom-0 left-[30%] h-[25rem] w-[25rem] rounded-full bg-mint/15 blur-3xl" />
        <div className="absolute right-[18%] top-[8%] h-64 w-64 rounded-full bg-lilac/10 blur-3xl" />
      </div>

      <Sparkles variant="subtle" />
      <PaymentTestModeBanner />
      <Nav />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pt-44 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft transition hover:text-electric"
            >
              <span aria-hidden>←</span> Retour à Kenshō Studio
            </Link>

            <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-electric/25 bg-white/55 px-3.5 py-1.5 shadow-sm backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_rgba(75,125,255,0.75)]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-electric">
                {isAudit ? "Audit Google Ads · Session individuelle" : "Tracking · Configuration"}
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(2.55rem,5.3vw,4.8rem)] font-light leading-[1.02] tracking-[-0.045em]">
              {isAudit ? (
                <>
                  Votre compte Google Ads mérite
                  <span className="mt-1 block bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text pb-2 font-normal text-transparent">
                    un regard expert.
                  </span>
                </>
              ) : (
                <>
                  Mesurez ce qui compte
                  <span className="mt-1 block bg-gradient-to-r from-mint via-electric to-lilac bg-clip-text pb-2 font-normal text-transparent">
                    vraiment.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {isAudit
                ? "En une heure, nous passons votre compte au crible pour comprendre vos résultats, identifier les points faibles et vous donner une direction claire pour la suite."
                : current.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/70 text-electric shadow-sm">✓</span>
                Échange individuel avec un expert
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/70 text-electric shadow-sm">✓</span>
                {isAudit ? "1 heure en visioconférence" : "Prestation dédiée"}
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contenu-audit"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper shadow-[0_12px_30px_-14px_rgba(20,20,40,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-14px_rgba(20,20,40,0.5)]"
              >
                Découvrir la prestation <span aria-hidden>↓</span>
              </a>
              <span className="inline-flex items-center rounded-full border border-white/70 bg-white/40 px-5 py-3 text-xs font-medium text-ink-soft backdrop-blur-xl">
                Paiement sécurisé par Stripe
              </span>
            </div>
          </div>

          {/* PRICE / CHECKOUT CARD */}
          <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-electric/20 via-lilac/15 to-solar/20 opacity-90 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/65 p-6 shadow-[0_30px_90px_-35px_rgba(30,45,90,0.3)] backdrop-blur-2xl sm:p-8">
              <div aria-hidden className="absolute right-0 top-0 h-40 w-40 rounded-full bg-electric/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-electric">
                    {isAudit ? "Audit ponctuel" : "Prestation ponctuelle"}
                  </span>
                  <span className="rounded-full border border-emerald-300/60 bg-emerald-50/80 px-3 py-1 text-[10px] font-bold text-emerald-700">
                    Sans abonnement
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
                  {current.label}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">{current.eyebrow}</p>

                <div className="mt-7 flex items-end gap-3">
                  <span className="text-[clamp(3.2rem,7vw,4.4rem)] font-semibold leading-none tracking-[-0.06em] text-ink">
                    {current.price}
                  </span>
                  <span className="mb-1.5 text-xs text-ink-soft">Paiement unique</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/80 bg-white/65 p-3.5">
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft">Durée</div>
                    <div className="mt-1 text-sm font-semibold text-ink">{current.duration}</div>
                  </div>
                  <div className="rounded-2xl border border-white/80 bg-white/65 p-3.5">
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-soft">Format</div>
                    <div className="mt-1 text-sm font-semibold text-ink">{isAudit ? "Visioconférence" : "À distance"}</div>
                  </div>
                </div>

                {!isOpen && (
                  <button
                    type="button"
                    onClick={handlePay}
                    className="group relative mt-7 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_34px_-12px_rgba(35,50,90,0.55)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_-12px_rgba(35,50,90,0.55)]"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                    <span className="relative">Procéder au paiement</span>
                    <span className="relative transition-transform group-hover:translate-x-1">↗</span>
                  </button>
                )}

                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-ink-soft">
                  <svg aria-hidden className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 1 1 8 0v3" />
                  </svg>
                  Paiement sécurisé · Aucune donnée bancaire stockée par Kenshō
                </div>

                {checkoutElement && (
                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-2 shadow-inner">
                    {checkoutElement}
                  </div>
                )}

                <p className="mt-5 text-center text-[10px] leading-relaxed text-ink-soft/85">
                  TVA non applicable, art. 293B du CGI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section id="contenu-audit" className="relative border-t border-ink/5 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-electric">
              {isAudit ? "Le contenu de votre audit" : "Le contenu de la prestation"}
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.035em]">
              {isAudit ? (
                <>
                  Une heure pour voir
                  <span className="block bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text font-normal text-transparent">
                    ce qui mérite votre attention.
                  </span>
                </>
              ) : (
                <>
                  Une configuration claire,
                  <span className="block bg-gradient-to-r from-mint via-electric to-lilac bg-clip-text font-normal text-transparent">
                    pensée pour vos mesures.
                  </span>
                </>
              )}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
              {isAudit
                ? "L’objectif n’est pas de vous noyer dans des chiffres, mais de comprendre la situation et de faire ressortir les actions qui auront le plus de sens pour votre activité."
                : current.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((point) => (
              <article
                key={point.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/45 p-6 shadow-[0_16px_45px_-28px_rgba(20,20,40,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_22px_48px_-25px_rgba(55,95,190,0.22)]"
              >
                <span className="font-mono text-xs font-semibold text-electric/70">{point.number}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.text}</p>
                <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-electric/10 blur-2xl transition group-hover:bg-electric/20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME / SCOPE */}
      {isAudit && (
        <section className="relative px-5 pb-20 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-[1.8rem] border border-white/80 bg-gradient-to-br from-white/75 via-white/45 to-electric/10 p-7 shadow-[0_20px_60px_-32px_rgba(50,90,190,0.25)] backdrop-blur-2xl sm:p-9">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-electric">À l’issue de l’échange</span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Vous repartez avec une vision plus claire.</h2>
              <ul className="mt-7 space-y-4">
                {AUDIT_OUTCOMES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-electric/10 text-[11px] font-bold text-electric">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.8rem] border border-amber-200/70 bg-gradient-to-br from-[#fffdf6] to-[#fff7df]/80 p-7 shadow-[0_20px_60px_-32px_rgba(170,130,50,0.2)] backdrop-blur-xl sm:p-9">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">Périmètre de la prestation</span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">Un audit, pas une gestion mensuelle.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Cette session comprend l’analyse et les recommandations. Les modifications directement dans votre compte et le pilotage continu des campagnes ne sont pas inclus.
              </p>
              <Link
                to="/services/google-ads"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-electric/40 underline-offset-4 transition hover:text-electric"
              >
                Découvrir l’accompagnement mensuel <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      <section className="relative border-t border-ink/5 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-electric">Les prochaines étapes</span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-light tracking-[-0.035em]">
              Simple, de la réservation à l’échange.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { n: "01", title: "Réglez votre session", text: `Procédez au paiement sécurisé de ${current.price} directement sur cette page.` },
              { n: "02", title: "Choisissez votre créneau", text: "Après le paiement, vous accédez au calendrier pour sélectionner votre rendez-vous." },
              { n: "03", title: isAudit ? "Échangez pendant 1 heure" : "Finalisez la configuration", text: isAudit ? "Retrouvez votre expert en visioconférence pour analyser votre compte et vos priorités." : "Nous avançons sur la mise en place du suivi et les vérifications prévues." },
            ].map((step) => (
              <div key={step.n} className="rounded-[1.5rem] border border-white/75 bg-white/40 p-6 backdrop-blur-xl">
                <span className="font-mono text-sm font-bold text-electric">{step.n}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative px-5 pb-24 pt-4 sm:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-white/80 via-white/55 to-electric/10 p-8 text-center shadow-[0_25px_80px_-35px_rgba(35,65,140,0.25)] backdrop-blur-2xl sm:p-12">
          <div aria-hidden className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-electric/15 blur-3xl" />
          <span className="relative font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-electric">Kenshō Digital Studio</span>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-[clamp(1.8rem,4vw,2.8rem)] font-light leading-tight tracking-[-0.03em]">
            Prêt à prendre du recul sur vos campagnes ?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
            Réservez votre session et transformez vos questions en priorités claires.
          </p>
          <button
            type="button"
            onClick={handlePay}
            className="relative mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_35px_-12px_rgba(25,35,60,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_42px_-12px_rgba(25,35,60,0.5)]"
          >
            Réserver mon {isAudit ? "Audit Google Ads" : "installation tracking"} · {current.price}
            <span aria-hidden>↗</span>
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
