import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Sparkles } from "@/components/landing/Sparkles";

const CALENDLY_URL = "https://calendly.com/kenshodigitalstudio/kensho-studio-premier-audit";

export const Route = createFileRoute("/services/google-ads")({
  component: GoogleAdsPage,
  head: () => ({
    meta: [
      { title: "Accompagnement Google Ads — Kenshō Digital Studio" },
      { name: "description", content: "Un accompagnement Google Ads continu pour analyser, optimiser et faire évoluer vos campagnes. Réservez votre premier rendez-vous gratuit d'une heure." },
    ],
  }),
});

const PILIERS = [
  ["01", "Suivi régulier des campagnes", "Surveillance des performances, identification des anomalies et suivi des principaux indicateurs clés.", "text-sky", "◉"],
  ["02", "Analyse des performances", "Étude des résultats, du taux de conversion, du coût par acquisition et détection des leviers de croissance.", "text-electric", "▥"],
  ["03", "Optimisations continues", "Ajustement des campagnes, exclusion de mots-clés, affinage des audiences et stratégies d'enchères.", "text-coral", "⌘"],
  ["04", "Reporting mensuel", "Un bilan clair et transparent pour comprendre l'impact de chaque euro investi.", "text-mint", "▤"],
  ["05", "Assistance par e-mail", "Un canal direct avec votre expert Kenshō Studio pendant les heures ouvrées.", "text-lilac", "✉"],
  ["06", "Deux rendez-vous de suivi par mois", "Deux échanges visio réguliers pour faire le point sur les résultats et décider des prochaines étapes.", "text-solar", "◫"],
];

const TIMELINE = [
  ["Mois 1", "Analyser", "Comprendre l'existant, auditer les campagnes, identifier les fuites de budget et définir les priorités stratégiques.", "Diagnostic & Fondations", "from-sky/20 to-electric/20"],
  ["Mois 2", "Optimiser", "Mettre en place les ajustements structurels, affiner les mots-clés rentables et améliorer progressivement le coût par acquisition.", "Itération & Rentabilité", "from-electric/20 to-lilac/20"],
  ["Mois 3", "Développer", "Évaluer les performances consolidées, identifier les opportunités de croissance et préparer le développement des investissements.", "Accélération & Croissance", "from-coral/20 to-solar/20"],
];

const TIMES = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
const DAYS = [
  ["MERCREDI", "Premier échange"],
  ["JEUDI", "Optimisations"],
  ["VENDREDI", "Bilan & reporting"],
  ["LUNDI", "Pilotage hebdomadaire"],
  ["MARDI", "Suivi & ajustements"],
];

function Event({ time, title, desc, tone = "electric", className = "" }: {
  time: string; title: string; desc: string; tone?: string; className?: string;
}) {
  const tones: Record<string, string> = {
    electric: "border-electric/25 bg-electric/10 text-electric",
    sky: "border-sky/25 bg-sky/10 text-sky",
    coral: "border-coral/25 bg-coral/10 text-coral",
    mint: "border-mint/25 bg-mint/10 text-emerald-700",
    solar: "border-solar/30 bg-solar/15 text-amber-700",
  };
  return (
    <div className={`absolute left-2 right-2 rounded-xl border p-2.5 ${tones[tone]} ${className}`}>
      <p className="font-mono text-[9px] font-semibold">{time}</p>
      <p className="mt-1 text-[10px] font-bold text-ink">{title}</p>
      <p className="mt-1 text-[9px] leading-relaxed text-ink-soft">{desc}</p>
    </div>
  );
}

function GoogleAdsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const timelineRef = useRef<HTMLElement>(null);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  useEffect(() => {
    if (!bookingOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [bookingOpen]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-paper font-display text-ink">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-electric/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-solar/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-mint/15 blur-3xl" />
      </div>
      <Sparkles variant="subtle" />
      <Nav />

      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-white/60 px-4 py-1.5 text-xs font-semibold text-electric shadow-sm backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric" />
            Accompagnement mensuel Google Ads
          </div>
          <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.75rem)] font-light leading-[1.08] tracking-[-0.03em]">
            On gère votre Google Ads,
            <span className="block bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text font-normal text-transparent">vous récoltez les résultats.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
            Découvrez concrètement notre rythme de travail hebdomadaire. Le mercredi, réservez votre premier échange gratuit d’une heure avec Kenshō.
          </p>
        </div>

        <div className="mt-14 rounded-[28px] border border-white/70 bg-white/45 p-4 shadow-[0_30px_80px_-20px_rgba(20,20,40,0.10)] backdrop-blur-2xl sm:p-7">
          <div className="flex flex-col gap-5 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-electric">Organisation & méthode</span>
              <h2 className="mt-2 text-2xl font-light tracking-tight text-ink sm:text-3xl">Votre semaine type avec Kenshō</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">Un aperçu de notre rythme de travail : analyse, optimisations et échanges réguliers pour faire progresser vos campagnes.</p>
            </div>
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <span className="rounded-full border border-electric/20 bg-white/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-electric">Premier rendez-vous offert · 1 heure</span>
              <button type="button" onClick={() => timelineRef.current?.scrollIntoView({ behavior: "smooth" })} className="text-[11px] font-semibold text-ink-soft underline decoration-electric/40 underline-offset-4 hover:text-electric">Accompagnement recommandé · 3 mois ↓</button>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="max-w-2xl text-xs leading-relaxed text-ink-soft">Faisons connaissance, parlons de vos objectifs et découvrons ensemble vos campagnes Google Ads. Ce premier échange est gratuit et sans engagement.</p>
            <span className="rounded-full border border-white/80 bg-white/65 px-3 py-1 text-[10px] text-ink-soft">Heure de Paris</span>
          </div>

          <div className="mt-6 overflow-x-auto pb-3">
            <div className="min-w-[1040px]">
              <div className="grid grid-cols-[58px_repeat(5,minmax(0,1fr))]">
                <div className="pb-3 text-right font-mono text-[9px] uppercase text-ink-soft/60">Heure</div>
                {DAYS.map(([day, subtitle], i) => (
                  <div key={day} className={`border-b border-ink/10 px-3 pb-3 ${i === 3 ? "rounded-t-2xl border-l-2 border-l-electric/30 bg-electric/[0.045]" : ""}`}>
                    <p className={`font-mono text-[10px] font-bold tracking-[0.14em] ${i === 0 || i === 3 ? "text-electric" : "text-ink-soft"}`}>{day}</p>
                    <p className={`mt-1 text-[11px] font-semibold ${i === 3 ? "text-electric" : "text-ink"}`}>{subtitle}</p>
                    {i === 0 && <span className="mt-2 inline-flex rounded-full bg-electric/10 px-2 py-0.5 text-[9px] font-bold text-electric">1H OFFERTE</span>}
                    {i === 3 && <span className="mt-2 inline-flex rounded-full bg-electric/10 px-2 py-0.5 text-[9px] font-bold text-electric">JOUR CLÉ</span>}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-[58px_repeat(5,minmax(0,1fr))]">
                <div className="grid grid-rows-8">
                  {TIMES.map(t => <div key={t} className="h-[72px] border-b border-ink/[0.06] pr-2 pt-2 text-right font-mono text-[9px] text-ink-soft/70">{t}</div>)}
                </div>
                {/* MERCREDI */}
                <div className="relative grid grid-rows-8 border-l border-ink/[0.06] bg-white/20">
                  {TIMES.map(t => <div key={t} className="h-[72px] border-b border-ink/[0.06]" />)}
                  <button type="button" onClick={openBooking} aria-label="Réserver le premier rendez-vous Kenshō mercredi de 10h à 11h" className="group absolute left-2 right-2 top-[72px] z-10 rounded-2xl border border-electric/35 bg-gradient-to-br from-white/95 to-electric/10 p-3 text-left shadow-[0_12px_30px_-12px_rgba(40,80,240,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-electric/60 hover:shadow-xl">
                    <span className="flex justify-between font-mono text-[9px] font-bold text-electric"><span>10:00 — 11:00</span><span className="transition group-hover:translate-x-1">↗</span></span>
                    <p className="mt-2 text-xs font-bold text-ink">Premier rendez-vous Kenshō</p>
                    <p className="mt-1 text-[10px] leading-relaxed text-ink-soft">Découverte de votre activité, de vos objectifs et de vos campagnes.</p>
                    <span className="mt-3 inline-flex rounded-full bg-electric px-2.5 py-1 text-[9px] font-bold text-white">Première rencontre · Réserver</span>
                  </button>
                </div>
                {/* JEUDI */}
                <div className="relative grid grid-rows-8 border-l border-ink/[0.06] bg-white/15">
                  {TIMES.map(t => <div key={t} className="h-[72px] border-b border-ink/[0.06]" />)}
                  <Event time="11:00 — 12:00" title="Optimisations des campagnes" desc="Ajustements, mots-clés et ciblages." tone="sky" className="top-[144px]" />
                  <Event time="14:30 — 15:30" title="Analyse des performances" desc="Lecture des résultats et décisions." tone="coral" className="top-[396px]" />
                </div>
                {/* VENDREDI */}
                <div className="relative grid grid-rows-8 border-l border-ink/[0.06] bg-white/15">
                  {TIMES.map(t => <div key={t} className="h-[72px] border-b border-ink/[0.06]" />)}
                  <Event time="10:00 — 11:30" title="Bilan & reporting" desc="Synthèse des résultats et préparation des prochaines actions." tone="mint" className="top-[72px]" />
                </div>
                {/* LUNDI */}
                <div className="relative grid grid-rows-8 border-x-2 border-electric/20 bg-gradient-to-b from-electric/[0.07] to-white/30 shadow-inner">
                  {TIMES.map(t => <div key={t} className="h-[72px] border-b border-electric/10" />)}
                  <Event time="09:00 — 10:00" title="Bilan hebdomadaire Kenshō Studio" desc="Analyse des résultats, priorités et décisions de la semaine." className="top-0 bg-white/90" />
                  <Event time="15:00 — 16:00" title="Rendez-vous visio Kenshō" desc="Point sur les résultats, optimisations et prochaines étapes." className="top-[432px]" />
                  <span className="absolute left-4 top-[505px] rounded-full bg-white/80 px-2 py-0.5 text-[8px] font-semibold text-electric">Toutes les 2 semaines</span>
                </div>
                {/* MARDI */}
                <div className="relative grid grid-rows-8 border-l border-ink/[0.06] bg-white/15">
                  {TIMES.map(t => <div key={t} className="h-[72px] border-b border-ink/[0.06]" />)}
                  <Event time="11:00 — 12:00" title="Suivi & veille stratégique" desc="Surveillance, opportunités et préparation des ajustements." tone="solar" className="top-[144px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[10px] text-ink-soft">
            <span>Planning illustratif : les actions s’adaptent aux besoins et aux performances de chaque compte.</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-electric" />Seul le premier rendez-vous est réservable ici.</span>
          </div>
        </div>
      </section>

      {/* LES 6 PILIERS */}
      <section className="relative mx-auto max-w-6xl border-t border-ink/5 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-electric">Notre méthode</span>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.75rem)] font-light leading-[1.12] tracking-[-0.02em]">Un accompagnement continu pour <span className="bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text font-normal text-transparent">faire évoluer vos performances.</span></h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">Nous ne nous contentons pas de lancer vos campagnes. Nous les suivons, les analysons et les optimisons dans le temps pour améliorer progressivement vos résultats.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILIERS.map(([num, title, desc, color, icon]) => (
            <div key={num} className="group relative rounded-2xl border border-white/60 bg-white/40 p-6 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/70 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-white/80 text-2xl shadow-sm ${color}`}>{icon}</span>
                <span className="font-mono text-2xl font-light text-ink-soft/40 group-hover:text-electric">{num}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACCOMPAGNEMENT 3 MOIS */}
      <section ref={timelineRef} className="relative mx-auto max-w-6xl border-t border-ink/5 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-coral">Vision stratégique</span>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.75rem)] font-light leading-[1.12] tracking-[-0.02em]">Trois mois pour construire une stratégie, <span className="block font-normal text-ink">pas seulement lancer des campagnes.</span></h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">La publicité Google Ads nécessite du temps pour analyser les données, identifier les opportunités et ajuster les stratégies. Notre objectif n’est pas de multiplier les modifications, mais de prendre les bonnes décisions au bon moment.</p>
        </div>
        <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TIMELINE.map(([mois, phase, desc, badge, color], idx) => (
            <div key={mois} className={`relative rounded-2xl border border-white/60 bg-gradient-to-b ${color} p-6 shadow-sm backdrop-blur-xl transition-all hover:shadow-lg sm:p-8`}>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white bg-white/80 px-3 py-1 font-mono text-xs font-bold text-ink shadow-sm">{mois}</span>
                <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">Étape 0{idx + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink">{phase}</h3>
              <span className="mt-1 inline-block text-xs font-semibold text-electric">{badge}</span>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL : même réservation Calendly */}
      <section className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <div className="rounded-3xl border border-white/70 bg-gradient-to-b from-white/80 to-white/40 p-8 shadow-[0_30px_90px_-20px_rgba(20,20,40,0.12)] backdrop-blur-2xl sm:p-14">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-electric">Premier échange</span>
          <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] tracking-[-0.03em]">Parlons de vos objectifs Google Ads.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">Vous souhaitez améliorer vos campagnes, mieux comprendre vos performances ou structurer votre stratégie d’acquisition ? Échangeons pendant une heure pour découvrir votre activité, vos objectifs et vos besoins.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button type="button" onClick={openBooking} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:w-auto">Réserver mon premier rendez-vous <span>→</span></button>
            <Link to="/" className="text-xs text-ink-soft underline underline-offset-4 hover:text-ink">← Retour à l'accueil</Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* PANNEAU CALENDLY : superposé à droite, sans déplacer la page */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[100]">
          <button type="button" aria-label="Fermer la fenêtre de réservation" onClick={closeBooking} className="absolute inset-0 bg-ink/20 backdrop-blur-[3px]" />
          <aside role="dialog" aria-modal="true" aria-label="Réserver votre premier rendez-vous Kenshō" className="absolute inset-y-0 right-0 flex h-[100dvh] w-full flex-col border-l border-white/70 bg-white/90 p-4 shadow-[-24px_0_80px_-24px_rgba(20,20,40,0.28)] backdrop-blur-2xl sm:inset-y-5 sm:right-5 sm:h-[calc(100dvh-2.5rem)] sm:w-[min(520px,calc(100vw-2.5rem))] sm:rounded-[28px] sm:border sm:p-5">
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-ink/10 pb-4">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-electric">Réservation en ligne · 1h offerte</span>
                <h2 className="mt-2 text-xl font-semibold text-ink">Votre premier rendez-vous Kenshō</h2>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">Choisissez votre créneau directement ici.</p>
              </div>
              <button type="button" onClick={closeBooking} aria-label="Fermer" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-lg text-ink transition hover:bg-electric/10 hover:text-electric">×</button>
            </div>
            <div className="mt-4 min-h-0 flex-1 overflow-hidden rounded-2xl border border-white bg-white shadow-inner">
              <iframe src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1b1e2b&primary_color=2850f0`} title="Réserver mon premier rendez-vous Kenshō Studio" className="block h-full min-h-[520px] w-full border-0" loading="lazy" />
            </div>
            <p className="shrink-0 pt-3 text-center text-[10px] text-ink-soft">Un lien Google Meet vous sera envoyé par e-mail après confirmation.</p>
          </aside>
        </div>
      )}
    </div>
  );
}
