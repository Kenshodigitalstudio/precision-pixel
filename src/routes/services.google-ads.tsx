import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { ExtraRequest } from "@/components/landing/ExtraRequest";
import { ReportShowcase } from "@/components/landing/ReportShowcase";
import { useReveal } from "@/hooks/use-reveal";
import { useMagnetic } from "@/hooks/use-magnetic";


export const Route = createFileRoute("/services/google-ads")({
  component: GoogleAdsPage,
  head: () => ({
    meta: [
      { title: "Google Ads de A à Z — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "On gère votre Google Ads, vous récoltez les résultats. Découvrez notre service complet pour développer votre business.",
      },
    ],
  }),
});

/* ---------- Icônes (style PDF, glass bubbly) ---------- */

function GoogleAdsIcon({ className = "" }: { className?: string }) {
  // logo Google Ads stylisé
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path d="M19 6 L7 27 a4 4 0 0 0 7 4 L26 10 a4 4 0 0 0 -7 -4 Z" fill="#FBBC04" />
      <path d="M29 6 L41 27 a4 4 0 0 1 -7 4 L22 10 a4 4 0 0 1 7 -4 Z" fill="#4285F4" />
      <circle cx="13" cy="36" r="6" fill="#34A853" />
    </svg>
  );
}

function RocketIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="rk-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path d="M24 4 C32 10 36 18 36 28 L36 34 L12 34 L12 28 C12 18 16 10 24 4 Z" fill="url(#rk-grad)" />
      <circle cx="24" cy="20" r="4" fill="white" />
      <path d="M12 30 L6 36 L6 42 L14 38 Z" fill="#ff6f91" />
      <path d="M36 30 L42 36 L42 42 L34 38 Z" fill="#ff6f91" />
      <path d="M20 38 L24 46 L28 38 Z" fill="#FBBC04" />
    </svg>
  );
}

function GearsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="gr-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff6f91" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path d="M30 18 l3 -1 l-1 -4 l-4 1 l-2 -3 l-4 2 l-2 -2 l-3 3 l-3 -1 l-1 4 l-3 1 l1 4 l-2 3 l3 3 l-1 3 l4 2 l1 3 l4 -1 l3 2 l3 -3 l3 1 l1 -4 l3 -1 l-1 -4 l2 -3 l-3 -3 z" fill="url(#gr-grad)" />
      <circle cx="20" cy="22" r="5" fill="white" />
      <circle cx="34" cy="34" r="8" fill="#FBBC04" />
      <circle cx="34" cy="34" r="3" fill="white" />
    </svg>
  );
}

function PulseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="pl-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#pl-grad)" />
      <circle cx="24" cy="24" r="13" fill="white" fillOpacity="0.2" />
      <path d="M8 24 L16 24 L20 14 L26 34 L30 22 L34 28 L40 24" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="24" r="3" fill="#FBBC04" />
    </svg>
  );
}

function SparkleDocIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="sd-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <path d="M10 6 h20 l10 10 v26 a2 2 0 0 1 -2 2 H10 a2 2 0 0 1 -2 -2 V8 a2 2 0 0 1 2 -2 Z" fill="url(#sd-grad)" />
      <path d="M30 6 v10 h10" fill="white" fillOpacity="0.3" />
      <circle cx="18" cy="28" r="2" fill="white" />
      <circle cx="26" cy="28" r="2" fill="white" />
      <circle cx="34" cy="28" r="2" fill="white" />
      <rect x="14" y="34" width="20" height="2" rx="1" fill="white" fillOpacity="0.7" />
      <path d="M36 10 l1 3 l3 1 l-3 1 l-1 3 l-1 -3 l-3 -1 l3 -1 z" fill="#FBBC04" />
    </svg>
  );
}

const PILLARS = [
  {
    Icon: RocketIcon,
    title: "Création",
    sub: "de campagnes performantes",
    body: "Nous concevons vos campagnes Search, Display et Shopping de A à Z, avec une structure pensée pour maximiser votre Quality Score et minimiser vos coûts dès le lancement.",
  },
  {
    Icon: GearsIcon,
    title: "Gestion",
    sub: "et optimisation continues",
    body: "Optimisation hebdomadaire des enchères, des mots-clés et des annonces pour améliorer continuellement vos performances et votre ROAS.",
  },
  {
    Icon: PulseIcon,
    title: "Suivi",
    sub: "des performances en temps réel",
    body: "Mise en place du tracking des conversions via Google Tag Manager. Vous savez exactement ce que chaque euro dépensé vous rapporte.",
  },
  {
    Icon: SparkleDocIcon,
    title: "Rapports clairs",
    sub: "et analyses régulières",
    body: "Rapport mensuel personnalisé avec les métriques qui comptent vraiment : impressions, clics, conversions, coût/conv. et recommandations.",
  },
];

const STAT_BADGES = [
  { label: "Conversions", value: "248", delta: "+35%" },
  { label: "CTR moyen", value: "6,75 %", delta: "+18%" },
  { label: "Coût / conv.", value: "12,45 €", delta: "-15%" },
];

function GoogleAdsPage() {
  const heroReveal = useReveal<HTMLDivElement>();
  const pillarsReveal = useReveal<HTMLDivElement>();
  const promiseReveal = useReveal<HTMLDivElement>();
  

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />

      {/* Bulles flottantes décoratives (bubbly) */}
      <Bubbles />

      <section className="relative pt-28 pb-16 sm:pt-32">
        <div ref={heroReveal} className="reveal relative mx-auto max-w-5xl px-6 text-center">
          {/* New service chip */}
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/40 px-5 py-2 backdrop-blur-xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)] animate-[bubble-pop_700ms_cubic-bezier(0.22,1.4,0.36,1)_both]">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-coral via-solar to-lilac text-white shadow-inner">
              ✦
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--coral)]">
              Nouveau service
            </span>
          </div>

          <p className="mt-8 font-display text-2xl sm:text-3xl font-light tracking-tight">
            <span className="bg-gradient-to-r from-[color:var(--coral)] via-[color:var(--lilac)] to-[color:var(--electric)] bg-clip-text text-transparent">
              Kenshō
            </span>{" "}
            <span className="text-ink-soft">Digital Studio</span>
          </p>

          {/* Headline */}
          <h1 className="mt-6 font-display text-[clamp(2rem,5.5vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink">
            On gère votre{" "}
            <span className="bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">
              Google Ads
            </span>
            ,<br />
            vous récoltez les{" "}
            <span className="bg-gradient-to-r from-[color:var(--lilac)] via-[color:var(--sky)] to-[color:var(--electric-soft)] bg-clip-text text-transparent">
              résultats.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl font-display text-lg sm:text-xl font-medium text-ink-soft">
            Découvrez{" "}
            <span className="font-extrabold bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">
              VOTRE ENTREPRISE.
            </span>
          </p>

          {/* Stats badges — apparition striking puis disparition en boucle */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {STAT_BADGES.map((b, i) => (
              <span
                key={b.label}
                className="group inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-3.5 py-1.5 text-[12.5px] font-medium text-ink backdrop-blur-xl shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] will-change-transform"
                style={{
                  animation: `striking-pop 4.5s cubic-bezier(0.22,1.5,0.36,1) ${i * 0.5}s infinite`,
                }}
              >
                <span className="text-ink-soft">{b.label}</span>
                <span className="font-display font-bold tabular-nums text-ink">{b.value}</span>
                <span className={`text-[11px] font-semibold ${b.delta.startsWith("-") ? "text-emerald-600" : "text-emerald-600"}`}>
                  {b.delta.startsWith("-") ? "↓" : "↑"} {b.delta.replace(/^[-+]/, "")}
                </span>
              </span>
            ))}
          </div>



        </div>
      </section>

      {/* Pillars — glass bubbly + icônes PDF */}
      <section className="relative pb-20">
        <div ref={pillarsReveal} className="reveal mx-auto max-w-6xl px-6">
          <div className="relative rounded-[2rem] border border-white/50 bg-white/35 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_24px_70px_-30px_rgba(0,0,0,0.25)]">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
              <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-coral/30 blur-3xl animate-[blob_9s_ease-in-out_infinite]" />
              <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-lilac/30 blur-3xl animate-[blob_11s_ease-in-out_infinite]" style={{ animationDelay: "1.5s" }} />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {PILLARS.map((p, i) => (
                <PillarCard key={p.title} p={p} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Exemples de rapports — section premium */}
      <ReportShowcase />

      {/* Promise bloc — icône cible glass bubbly */}
      <section className="relative pb-24">

        <div className="mx-auto max-w-4xl px-6">
          <div
            ref={promiseReveal}
            className="reveal relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/45 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_24px_70px_-30px_rgba(0,0,0,0.25)]"
          >
            <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-solar/40 blur-3xl animate-[blob_10s_ease-in-out_infinite]" />
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Bulle d'icône cible (PDF style) */}
              <div className="relative flex-none">
                <span aria-hidden className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-coral/40 via-pink-300/30 to-lilac/40 blur-xl" />
                <span className="relative grid h-20 w-20 place-items-center rounded-3xl bg-white/70 ring-1 ring-white/70 shadow-[inset_0_-6px_0_0_rgba(0,0,0,0.04),0_20px_40px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl animate-[float-y_6s_ease-in-out_infinite]">
                  <RocketIcon className="h-12 w-12" />
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                  <span className="block bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--lilac)] bg-clip-text text-transparent">Plus de visibilité.</span>
                  <span className="block bg-gradient-to-r from-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">Plus de clics.</span>
                  <span className="block bg-gradient-to-r from-[color:var(--coral)] to-[color:var(--solar)] bg-clip-text text-transparent">Plus de clients.</span>
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                  Confiez-nous vos Google Ads et concentrez-vous sur ce que vous faites de mieux :{" "}
                  <span className="font-semibold text-ink">votre business</span>. Nous transformons votre budget
                  publicitaire en résultats concrets et mesurables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Besoin spécifique — même bloc que la landing principale */}
      <ExtraRequest />

      {/* Note : gestion des réseaux sociaux sur devis */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/40 p-8 sm:p-10 text-center backdrop-blur-2xl shadow-[0_24px_70px_-30px_rgba(0,0,0,0.25)]">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-56 w-72 -translate-x-1/2 rounded-full bg-lilac/30 blur-3xl" />
              <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-coral/30 blur-3xl" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--lilac)]">
              Sur devis
            </span>
            <h3 className="mt-3 font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-ink">
              Gestion de vos réseaux sociaux
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Un service de <span className="font-semibold text-ink">gestion de réseaux sociaux</span>{" "}
              (création de contenus, planification, community management) peut être
              ajouté à votre accompagnement&nbsp;: contactez-nous pour un devis personnalisé.
            </p>
          </div>
        </div>
      </section>




      <Footer />

      {/* Retour à l'accueil — tout en bas */}
      <div className="flex justify-center pb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-5 py-2.5 text-sm font-medium text-ink-soft backdrop-blur-md transition hover:bg-white/50 hover:text-ink"
        >
          ← Retour à l'accueil
        </Link>
      </div>

      {/* keyframes locaux */}
      <style>{`
        @keyframes bubble-pop {
          0%   { opacity: 0; transform: translateY(8px) scale(0.85); }
          60%  { opacity: 1; transform: translateY(-2px) scale(1.04); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes striking-pop {
          0%   { opacity: 0; transform: translateY(14px) scale(0.4) rotate(-6deg); filter: blur(6px); }
          12%  { opacity: 1; transform: translateY(-4px) scale(1.18) rotate(2deg); filter: blur(0); box-shadow: 0 0 0 6px rgba(255,255,255,0.5), 0 18px 40px -12px rgba(255,77,109,0.5); }
          22%  { transform: translateY(0) scale(1) rotate(0deg); }
          70%  { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          90%  { opacity: 0; transform: translateY(-10px) scale(0.92); filter: blur(3px); }
          100% { opacity: 0; transform: translateY(-10px) scale(0.92); filter: blur(3px); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(12px,-10px) scale(1.08); }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes float-bubble {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.7; }
          50%  { transform: translateY(-22px) translateX(6px) scale(1.05); opacity: 1; }
          100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.7; }
        }
      `}</style>
    </main>
  );
}

function PillarCard({ p, i }: { p: (typeof PILLARS)[number]; i: number }) {
  const ref = useReveal<HTMLDivElement>();
  const Icon = p.Icon;
  const num = String(i + 1).padStart(2, "0");
  return (
    <div
      ref={ref}
      className="reveal group relative overflow-hidden rounded-2xl p-7 pt-12 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_28px_70px_-25px_rgba(0,0,0,0.22)]"
      style={{
        background: "rgba(255,255,255,0.6)",
        border: "1px solid rgba(255,255,255,0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 18px 50px -25px rgba(0,0,0,0.18)",
        transitionDelay: `${i * 80}ms`,
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-5 top-1 select-none leading-none"
        style={{
          fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
          fontWeight: 300,
          fontSize: "80px",
          color: "rgba(0,0,0,0.08)",
        }}
      >
        {num}
      </span>
      <div className="relative flex flex-col items-start gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white/60">
          <Icon className="h-7 w-7 [&_*]:!fill-[rgba(30,30,40,0.7)] [&_path]:!stroke-[rgba(30,30,40,0.7)]" />
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
            {p.title}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            {p.sub}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            {p.body}
          </p>
        </div>

      </div>
    </div>
  );
}


function Bubbles() {
  // bulles flottantes pleines page (bubbly)
  const bubbles = [
    { left: "6%",  top: "14%", size: 10, color: "from-coral/70 to-lilac/60",   delay: 0 },
    { left: "12%", top: "32%", size: 6,  color: "from-lilac/70 to-electric/60", delay: 1.2 },
    { left: "8%",  top: "62%", size: 14, color: "from-electric/60 to-sky/60",   delay: 2.4 },
    { right: "10%", top: "20%", size: 8, color: "from-solar/70 to-coral/60",    delay: 0.6 },
    { right: "16%", top: "48%", size: 12, color: "from-lilac/60 to-electric-soft/60", delay: 1.8 },
    { right: "6%",  top: "72%", size: 7,  color: "from-mint/70 to-sky/60",      delay: 3 },
    { left: "22%", top: "82%", size: 9,   color: "from-coral/60 to-solar/60",   delay: 2 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${b.color} blur-[1px] shadow-[inset_0_-2px_4px_rgba(255,255,255,0.6)]`}
          style={{
            left: (b as any).left,
            right: (b as any).right,
            top: b.top,
            width: b.size * 4,
            height: b.size * 4,
            animation: `float-bubble ${6 + (i % 4)}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
