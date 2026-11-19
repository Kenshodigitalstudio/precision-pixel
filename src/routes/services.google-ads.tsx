import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Sparkles } from "@/components/landing/Sparkles";

const CALENDLY_URL = "https://calendly.com/kenshodigitalstudio/kensho-studio-premier-audit";

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

  useEffect(() => {
    if (!showCalendly) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowCalendly(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [showCalendly]);

  const handleOpenBooking = () => setShowCalendly(true);

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
          <h1 className="mt-0 text-[clamp(2.2rem,5vw,3.75rem)] font-light leading-[1.08] tracking-[-0.03em]">
            On gère votre Google Ads,
            <span className="block font-normal bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
              vous récoltez les résultats.
            </span>
          </h1>

          <div className="mx-auto mt-7 max-w-2xl rounded-2xl border border-electric/20 bg-white/65 px-5 py-4 shadow-[0_12px_35px_-25px_rgba(67,112,255,0.45)] backdrop-blur-xl sm:px-7">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full bg-electric px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Offert</span>
              <span className="text-sm font-semibold text-ink sm:text-base">1 heure d’échange stratégique, sans frais</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Faites le point avec un expert sur vos objectifs et votre stratégie Google Ads, et repartez avec de premières pistes d’action.
            </p>
            <p className="mt-2 text-[10px] font-medium text-ink-soft/80">Sans engagement · En visioconférence</p>
          </div>
        </div>

        {/* --- CALENDRIER HEBDOMADAIRE COMPACT --- */}
        <div className="mx-auto mt-10 max-w-[1320px] overflow-hidden rounded-[26px] border border-white/80 bg-white/55 p-4 shadow-[0_24px_70px_-35px_rgba(20,20,40,0.22)] backdrop-blur-2xl sm:p-6 lg:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-ink/8 pb-4">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-electric">Organisation & méthode</p>
              <h2 className="mt-1 text-xl font-medium tracking-tight text-ink sm:text-2xl">Votre semaine type avec Kenshō</h2>
              <p className="mt-1 max-w-2xl text-xs leading-relaxed text-ink-soft sm:text-sm">
                Un aperçu concret du suivi, des optimisations et des échanges qui rythment l’accompagnement.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <span className="rounded-full border border-electric/25 bg-electric/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-electric sm:text-[11px]">
                Premier échange offert · 1 heure
              </span>
              <a href="#accompagnement-3-mois" className="text-[11px] font-semibold text-ink-soft underline decoration-electric/40 underline-offset-4 transition hover:text-electric">
                Accompagnement recommandé · 3 mois ↓
              </a>
            </div>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[1120px]">
              <div className="grid grid-cols-[42px_repeat(5,minmax(0,1fr))] gap-x-2">
                <div className="flex items-end pb-3 font-mono text-[9px] uppercase tracking-wider text-ink-soft/70">Heure</div>

                {[
                  { day: "Mercredi", subtitle: "Premier échange", tag: "1H OFFERTE", featured: true },
                  { day: "Jeudi", subtitle: "Optimisations", tag: "", featured: false },
                  { day: "Vendredi", subtitle: "Bilan & reporting", tag: "", featured: false },
                  { day: "Lundi", subtitle: "Pilotage hebdomadaire", tag: "JOUR CLÉ", featured: true },
                  { day: "Mardi", subtitle: "Suivi & ajustements", tag: "", featured: false },
                ].map((day) => (
                  <div key={day.day} className={`min-h-[62px] rounded-t-2xl px-2 pb-3 pt-1 sm:px-3 ${day.day === "Lundi" ? "border-x border-t border-electric/25 bg-electric/[0.055]" : ""}`}>
                    <div className={`font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${day.featured ? "text-electric" : "text-ink/75"}`}>{day.day}</div>
                    <div className={`mt-1 text-[11px] font-semibold leading-tight sm:text-xs ${day.day === "Lundi" ? "text-electric" : "text-ink"}`}>{day.subtitle}</div>
                    {day.tag && <span className="mt-2 inline-flex rounded-full bg-electric/10 px-2 py-1 text-[8px] font-bold tracking-wide text-electric">{day.tag}</span>}
                  </div>
                ))}

                <div className="relative grid grid-rows-8">
                  {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"].map((time) => (
                    <div key={time} className="flex h-[80px] -translate-y-2 items-start justify-end pr-1 font-mono text-[9px] text-ink-soft/75">{time}</div>
                  ))}
                </div>

                {[
                  {
                    day: "Mercredi",
                    events: [
                      { start: 1, span: 2.55, time: "10:00 – 11:30", title: "Premier rendez-vous Kenshō", desc: "Un échange pour faire le point sur votre activité, vos objectifs et vos attentes.", brand: true, tone: "blue", booking: true },
                      { start: 4.2, span: 1.45, time: "13:00 – 14:30", title: "Temps de préparation", desc: "Préparation des prochains échanges et des priorités.", brand: false },
                    ],
                  },
                  {
                    day: "Jeudi",
                    events: [
                      { start: 2.15, span: 1.55, time: "11:00 – 12:30", title: "Rendez-vous de suivi", desc: "Échange sur les sujets en cours et les prochaines étapes.", brand: false },
                      { start: 5.15, span: 1.5, time: "14:00 – 15:30", title: "Point d’avancement", desc: "Revue des actions et partage des retours.", brand: false },
                    ],
                  },
                  {
                    day: "Vendredi",
                    events: [
                      { start: 1.15, span: 1.65, time: "10:00 – 11:30", title: "Rendez-vous de coordination", desc: "Échange sur l’avancement et les sujets de la semaine.", brand: false },
                      { start: 5.15, span: 1.5, time: "14:00 – 15:30", title: "Réunion de suivi", desc: "Point régulier et prochaines étapes.", brand: false },
                    ],
                  },
                  {
                    day: "Lundi",
                    events: [
                      { start: 0.15, span: 2.25, time: "09:00 – 10:00", title: "Bilan hebdomadaire Kenshō Studio", desc: "Analyse de la semaine, priorités et organisation des prochaines actions.", brand: true, tone: "yellow" },
                      { start: 5.9, span: 2.15, time: "15:00 – 16:00", title: "Rendez-vous visio Kenshō", desc: "Un temps d’échange pour faire le point et décider des prochaines étapes.", note: "Toutes les 2 semaines", brand: true, tone: "green" },
                    ],
                  },
                  {
                    day: "Mardi",
                    events: [
                      { start: 2.15, span: 1.55, time: "11:00 – 12:30", title: "Rendez-vous de suivi", desc: "Échange sur les sujets en cours et les points à traiter.", brand: false },
                      { start: 5.15, span: 1.5, time: "14:00 – 15:30", title: "Réunion de travail", desc: "Avancement des actions et prochaines étapes.", brand: false },
                    ],
                  },
                ].map((column) => (
                  <div key={column.day} className={`relative h-[640px] border-l border-t border-ink/[0.08] ${column.day === "Lundi" ? "border-x border-electric/25 bg-electric/[0.035]" : ""}`}>
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="pointer-events-none absolute inset-x-0 border-t border-ink/[0.07]" style={{ top: `${i * 12.5}%` }} />
                    ))}
                    {column.events.map((event, i) => (
                      <div
                        key={`${column.day}-${i}`}
                        className={`absolute left-1 right-1 z-10 overflow-hidden rounded-[21px] border p-3 shadow-[0_10px_26px_-16px_rgba(20,20,40,0.25)] transition duration-300 sm:left-2 sm:right-2 sm:p-4 ${
                          event.tone === "blue"
                            ? "border-[#91adff] bg-gradient-to-br from-white via-[#eef3ff] to-[#c5d6ff] shadow-[0_16px_34px_-16px_rgba(67,112,255,0.55)]"
                            : event.tone === "yellow"
                              ? "border-[#e7cf78] bg-gradient-to-br from-white via-[#fff8dc] to-[#ffe58a] shadow-[0_14px_30px_-16px_rgba(204,169,70,0.4)]"
                              : event.tone === "green"
                                ? "border-[#9bd2ae] bg-gradient-to-br from-white via-[#effaf2] to-[#bfe8cb] shadow-[0_14px_30px_-16px_rgba(85,163,112,0.38)]"
                                : "border-ink/[0.09] bg-white/90"
                        } ${event.booking ? "group cursor-pointer text-left ring-1 ring-electric/10 hover:-translate-y-1 hover:border-electric/60 hover:shadow-[0_20px_36px_-18px_rgba(67,112,255,0.55)]" : ""}`}
                        style={{
                          top: `${event.start * 12.5}%`,
                          height: `${event.span * 12.5}%`,
                          minHeight: event.booking ? "220px" : event.brand ? "190px" : "150px",
                        }}
                        onClick={event.booking ? handleOpenBooking : undefined}
                        role={event.booking ? "button" : undefined}
                        tabIndex={event.booking ? 0 : undefined}
                        onKeyDown={event.booking ? (e) => { if (e.key === "Enter" || e.key === " ") handleOpenBooking(); } : undefined}
                      >
                        <div className={`font-mono text-[10px] font-bold sm:text-[11px] ${
                          event.tone === "blue" ? "text-[#4777f5]" :
                          event.tone === "yellow" ? "text-[#a77b08]" :
                          event.tone === "green" ? "text-[#318553]" : "text-ink-soft"
                        }`}>{event.time}</div>
                        <div className={`mt-1 font-bold leading-snug text-ink ${event.booking ? "text-[13px] sm:text-[15px]" : "text-[11px] sm:text-[13px]"}`}>{event.title}</div>
                        <p className={`mt-1 text-[10px] leading-[1.5] text-ink-soft ${event.booking ? "line-clamp-4 text-[11px]" : "line-clamp-3 text-[11px]"} `}>{event.desc}</p>
                        {event.note && <span className="mt-1 inline-block rounded-full bg-electric/8 px-1.5 py-0.5 text-[8px] font-semibold text-electric">{event.note}</span>}
                        {event.booking && <div className="mt-2 inline-flex rounded-full bg-electric px-2.5 py-1.5 text-[9px] font-semibold text-white shadow-sm transition group-hover:bg-[#3f70f5]">Réserver mon échange gratuit ↗</div>}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-ink/8 pt-3 text-[9px] text-ink-soft">
                <span>Planning hebdomadaire indicatif · Les créneaux peuvent varier selon les besoins.</span>
                <span className="font-semibold text-electric">Créneau Kenshō cliquable : mercredi</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- PANNEAU DE RÉSERVATION FLOTTANT --- */}
        {showCalendly && (
          <div
            className="fixed inset-0 z-[100] flex justify-end bg-ink/20 backdrop-blur-[3px]"
            role="dialog"
            aria-modal="true"
            aria-label="Réserver votre premier échange Kenshō"
            onMouseDown={(e) => { if (e.target === e.currentTarget) setShowCalendly(false); }}
          >
            <div className="relative flex h-full w-full max-w-[620px] flex-col border-l border-white/70 bg-[#fffdf8]/95 p-4 shadow-[-24px_0_80px_-30px_rgba(20,20,40,0.3)] backdrop-blur-2xl sm:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-4">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-electric">Premier échange · Offert</span>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-ink">Réservez votre heure avec Kenshō</h2>
                  <p className="mt-1 text-xs text-ink-soft">Choisissez le créneau qui vous convient.</p>
                </div>
                <button type="button" onClick={() => setShowCalendly(false)} aria-label="Fermer" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-lg text-ink-soft transition hover:border-electric/30 hover:text-electric">×</button>
              </div>
              <div className="mt-4 min-h-0 flex-1 overflow-hidden rounded-2xl border border-white bg-white">
                <iframe
                  src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1b1e2b&primary_color=5685ff`}
                  title="Réserver mon premier rendez-vous Kenshō Studio"
                  className="block h-full min-h-[560px] w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}
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
      <section id="accompagnement-3-mois" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 border-t border-ink/5">
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


  );
}
