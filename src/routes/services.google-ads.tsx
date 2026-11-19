import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Sparkles } from "@/components/landing/Sparkles";

const CALENDLY_URL = "https://calendly.com/kenshodigitalstudio/30min";

export const Route = createFileRoute("/services/google-ads")({
  component: GoogleAdsPage,
  head: () => ({
    meta: [
      { title: "Accompagnement Google Ads — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Un accompagnement mensuel Google Ads continu pour optimiser vos campagnes et faire évoluer vos performances. Réservez votre premier rendez-vous gratuit d'une heure.",
      },
    ],
  }),
});

/* ---------- Données des 6 Piliers ---------- */
const PILIERS = [
  {
    num: "01",
    title: "Suivi régulier des campagnes",
    desc: "Surveillance des performances, identification des anomalies et suivi des principaux indicateurs clés au quotidien.",
    icon: (
      <svg className="w-6 h-6 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Analyse des performances",
    desc: "Étude approfondie des résultats, du taux de conversion, du coût par acquisition et détection des leviers de croissance.",
    icon: (
      <svg className="w-6 h-6 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Optimisations continues",
    desc: "Ajustement des campagnes, exclusion de mots-clés, affinage des audiences, stratégies d'enchères intelligentes et A/B testing.",
    icon: (
      <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Reporting mensuel",
    desc: "Un bilan mensuel clair, transparent et sans jargon pour comprendre exactement l'impact de chaque euro investi.",
    icon: (
      <svg className="w-6 h-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Assistance par e-mail",
    desc: "Un canal direct avec votre expert Kenshō Studio. Réponses rapides et accompagnement réactif pendant les heures ouvrées.",
    icon: (
      <svg className="w-6 h-6 text-lilac" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Deux rendez-vous de suivi par mois",
    desc: "Deux échanges visio mensuels réguliers pour faire le point sur les résultats, débattre des priorités et décider des prochaines étapes.",
    icon: (
      <svg className="w-6 h-6 text-solar" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

/* ---------- Données de la Timeline 3 Mois ---------- */
const TIMELINE = [
  {
    mois: "Mois 1",
    phase: "Analyser",
    desc: "Comprendre l'existant, auditer les campagnes actuelles, identifier les fuites de budget et définir les priorités stratégiques.",
    color: "from-sky/20 to-electric/20",
    badge: "Diagnostic & Fondations",
  },
  {
    mois: "Mois 2",
    phase: "Optimiser",
    desc: "Mettre en place les ajustements structurels, affiner les mots-clés rentables et améliorer progressivement le coût par acquisition.",
    color: "from-electric/20 to-lilac/20",
    badge: "Itération & Rentabilité",
  },
  {
    mois: "Mois 3",
    phase: "Développer",
    desc: "Évaluer les performances consolidées, identifier les nouvelles opportunités de croissance et préparer le scaling de vos investissements.",
    color: "from-coral/20 to-solar/20",
    badge: "Accélération & Croissance",
  },
];

function GoogleAdsPage() {
  const [showCalendly, setShowCalendly] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);

  const handleOpenBooking = () => {
    setShowCalendly(true);
    setTimeout(() => {
      bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-paper text-ink font-display">
      {/* Halos d'ambiance Liquid Glass Kenshō */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-electric/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-solar/20 blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 h-80 w-80 rounded-full bg-mint/15 blur-3xl" />
      </div>

      <Sparkles variant="subtle" />
      <Nav />

      {/* ========================================================
          HERO & CALENDRIER HEBDOMADAIRE INTERACTIF
          ======================================================== */}
      <section className="relative mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 sm:pt-40">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-white/60 px-4 py-1.5 text-xs font-semibold text-electric backdrop-blur-xl shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" />
            Accompagnement Mensuel Google Ads
          </div>

          <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.75rem)] font-light leading-[1.08] tracking-[-0.03em]">
            On gère votre Google Ads,
            <span className="block font-normal bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
              vous récoltez les résultats.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            Découvrez concrètement notre rythme de travail hebdomadaire. Cliquez sur le créneau du mercredi pour réserver votre premier échange gratuit d’une heure.
          </p>
        </div>

        {/* --- LE CALENDRIER HEBDOMADAIRE --- */}
        <div className="mt-14 rounded-3xl border border-white/60 bg-white/40 p-4 sm:p-8 shadow-[0_30px_80px_-20px_rgba(20,20,40,0.08)] backdrop-blur-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-ink/5 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide text-ink">
                Semaine type — Équipe Kenshō Studio
              </span>
            </div>
            <span className="text-xs font-mono text-ink-soft bg-white/60 border border-white/80 rounded-full px-3 py-1">
              Fuseau horaire : Paris (UTC+1)
            </span>
          </div>

          {/* Grille des jours (commençant le Mercredi selon cahier des charges) */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
            
            {/* 1. MERCREDI (Point d'entrée principal - Mis en avant) */}
            <div className="md:col-span-2 relative rounded-2xl border-2 border-electric/40 bg-gradient-to-b from-white/90 to-electric/5 p-5 shadow-[0_15px_40px_-10px_rgba(40,80,240,0.15)] backdrop-blur-xl transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-electric font-bold">
                    Mercredi
                  </span>
                  <p className="text-sm font-semibold text-ink">Point d'entrée Kenshō</p>
                </div>
                <span className="rounded-full bg-electric/10 text-electric text-[11px] font-semibold px-2.5 py-1 border border-electric/20">
                  ✦ 1h offerte
                </span>
              </div>

              {/* Créneau cliquable */}
              <button
                onClick={handleOpenBooking}
                type="button"
                className="group mt-6 w-full text-left rounded-xl border border-electric/30 bg-white/80 p-4 shadow-sm hover:shadow-xl hover:border-electric transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs font-mono text-electric font-semibold">
                  <span>10:00 – 11:00</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Réserver →
                  </span>
                </div>
                <h2 className="mt-2 text-base font-bold text-ink group-hover:text-electric transition-colors">
                  Premier rendez-vous Kenshō
                </h2>
                <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                  Échange gratuit d’1h pour faire connaissance, comprendre vos enjeux et auditer vos campagnes.
                </p>
                <div className="mt-4 flex items-center gap-2 pt-3 border-t border-ink/5 text-[11px] text-emerald-600 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Créneaux disponibles cette semaine
                </div>
              </button>

              <p className="mt-3 text-center text-[11px] text-ink-soft italic">
                👆 Cliquez sur le créneau pour ouvrir le calendrier de réservation
              </p>
            </div>

            {/* SÉPARATION DISCRÈTE & AUTRES JOURS */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-3 md:border-l md:border-ink/10 md:pl-4">
              
              {/* JEUDI */}
              <div className="rounded-xl border border-white/60 bg-white/30 p-3.5 backdrop-blur-md">
                <span className="text-xs font-mono text-ink-soft">Jeudi</span>
                <p className="text-xs font-semibold text-ink">Optimisations</p>
                <div className="mt-3 rounded-lg border border-ink/5 bg-white/40 p-2.5 text-xs">
                  <span className="font-mono text-[10px] text-ink-soft">11:00 – 12:00</span>
                  <p className="font-medium text-ink-soft mt-0.5">Rendez-vous XXX</p>
                </div>
                <div className="mt-2 rounded-lg border border-ink/5 bg-white/40 p-2.5 text-xs">
                  <span className="font-mono text-[10px] text-ink-soft">14:30 – 15:30</span>
                  <p className="font-medium text-ink-soft mt-0.5">Rendez-vous XXX</p>
                </div>
              </div>

              {/* VENDREDI */}
              <div className="rounded-xl border border-white/60 bg-white/30 p-3.5 backdrop-blur-md">
                <span className="text-xs font-mono text-ink-soft">Vendredi</span>
                <p className="text-xs font-semibold text-ink">Bilan & Reporting</p>
                <div className="mt-3 rounded-lg border border-ink/5 bg-white/40 p-2.5 text-xs">
                  <span className="font-mono text-[10px] text-ink-soft">10:00 – 11:30</span>
                  <p className="font-medium text-ink-soft mt-0.5">Rendez-vous XXX</p>
                </div>
              </div>

              {/* LUNDI (Avec les notifications prévues au cahier des charges) */}
              <div className="rounded-xl border border-white/60 bg-white/30 p-3.5 backdrop-blur-md">
                <span className="text-xs font-mono text-ink-soft">Lundi</span>
                <p className="text-xs font-semibold text-ink">Organisation Kenshō</p>

                {/* Notification Lundi 09:00 */}
                <div className="mt-3 rounded-lg border border-electric/20 bg-electric/10 p-2.5 text-xs">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-electric font-semibold">
                    <span>🔔 09:00</span>
                  </div>
                  <p className="font-semibold text-ink text-[11px] mt-0.5">
                    Bilan hebdomadaire Kenshō Studio
                  </p>
                </div>

                {/* Rendez-vous Visio 15:00 - 16:00 */}
                <div className="mt-2 rounded-lg border border-ink/5 bg-white/40 p-2.5 text-xs">
                  <span className="font-mono text-[10px] text-ink-soft">15:00 – 16:00</span>
                  <p className="font-medium text-ink mt-0.5">Rendez-vous visio Kenshō</p>
                  <span className="inline-block mt-1 text-[9px] font-mono text-ink-soft bg-ink/5 rounded px-1.5 py-0.5">
                    Toutes les 2 semaines
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* --- SECTION CALENDLY INLINE EMBED (Apparition fluide au clic) --- */}
        <div ref={bookingRef} className="mt-12 transition-all duration-500">
          {showCalendly && (
            <div className="rounded-3xl border-2 border-electric/30 bg-white/70 p-4 sm:p-8 shadow-[0_30px_90px_-20px_rgba(40,80,240,0.18)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-500">
              <div className="flex items-center justify-between pb-6 border-b border-ink/10 flex-wrap gap-4">
                <div>
                  <span className="font-mono text-xs text-electric uppercase tracking-wider font-bold">
                    ✦ Réservation en ligne
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-ink mt-1">
                    Choisissez votre créneau pour le premier échange gratuit
                  </h2>
                </div>
                <button
                  onClick={() => setShowCalendly(false)}
                  className="text-xs text-ink-soft hover:text-ink underline cursor-pointer"
                >
                  Fermer le calendrier ✕
                </button>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/60 bg-white">
                <iframe
                  src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1b1e2b&primary_color=2850f0`}
                  title="Réserver mon premier rendez-vous Kenshō Studio"
                  className="block h-[720px] w-full border-0"
                  loading="lazy"
                />
              </div>

              <p className="mt-4 text-center text-xs text-ink-soft">
                Un lien Google Meet vous sera envoyé par e-mail immédiatement après votre confirmation.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          SECTION 2 : UN ACCOMPAGNEMENT QUI VA PLUS LOIN (LES 6 PILIERS)
          ======================================================== */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 border-t border-ink/5">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-electric font-semibold">
            Notre Méthode
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.75rem)] font-light leading-[1.12] tracking-[-0.02em]">
            Un accompagnement continu pour{" "}
            <span className="font-normal bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
              faire évoluer vos performances.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            Nous ne nous contentons pas de lancer vos campagnes. Nous les suivons, les analysons et les optimisons dans le temps pour améliorer progressivement vos résultats.
          </p>
        </div>

        {/* Grille des 6 piliers */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILIERS.map((pilier) => (
            <div
              key={pilier.num}
              className="group relative rounded-2xl border border-white/60 bg-white/40 p-6 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/70 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 border border-white/80 shadow-sm group-hover:scale-110 transition-transform">
                  {pilier.icon}
                </span>
                <span className="font-mono text-2xl font-light text-ink-soft/40 group-hover:text-electric transition-colors">
                  {pilier.num}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">
                {pilier.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {pilier.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 3 : POURQUOI UN ACCOMPAGNEMENT SUR TROIS MOIS ?
          ======================================================== */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 border-t border-ink/5">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-coral font-semibold">
            Vision Stratégique
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.75rem)] font-light leading-[1.12] tracking-[-0.02em]">
            Trois mois pour construire une stratégie,{" "}
            <span className="block font-normal text-ink">
              pas seulement lancer des campagnes.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            La publicité Google Ads nécessite du temps pour analyser les données, identifier les opportunités et ajuster les stratégies. Notre objectif n’est pas de multiplier les modifications, mais de prendre les bonnes décisions au bon moment.
          </p>
        </div>

        {/* Timeline des 3 mois */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {TIMELINE.map((step, idx) => (
            <div
              key={step.mois}
              className={`relative rounded-2xl border border-white/60 bg-gradient-to-b ${step.color} p-6 sm:p-8 backdrop-blur-xl shadow-sm hover:shadow-lg transition-all`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/80 border border-white px-3 py-1 font-mono text-xs font-bold text-ink shadow-xs">
                  {step.mois}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">
                  Étape 0{idx + 1}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-ink">
                {step.phase}
              </h3>
              <span className="inline-block mt-1 text-xs font-semibold text-electric">
                {step.badge}
              </span>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 4 : SECTION FINALE CALL TO ACTION
          ======================================================== */}
      <section className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6 text-center">
        <div className="rounded-3xl border border-white/70 bg-gradient-to-b from-white/80 to-white/40 p-8 sm:p-14 shadow-[0_30px_90px_-20px_rgba(20,20,40,0.12)] backdrop-blur-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-electric font-semibold">
            Premier Échange
          </span>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] tracking-[-0.03em]">
            Parlons de vos objectifs Google Ads.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            Vous souhaitez améliorer vos campagnes, mieux comprendre vos performances ou structurer votre stratégie d’acquisition ? Échangeons pendant une heure pour découvrir votre activité, vos objectifs et vos besoins.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleOpenBooking}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span>Réserver mon premier rendez-vous</span>
              <span>→</span>
            </button>
            <Link
              to="/"
              className="text-xs text-ink-soft hover:text-ink underline underline-offset-4"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
