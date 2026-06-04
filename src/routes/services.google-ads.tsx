import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
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

function TargetIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="tg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff6f91" />
          <stop offset="60%" stopColor="#ff4d6d" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="26" r="16" fill="url(#tg-grad)" />
      <circle cx="22" cy="26" r="10" fill="white" fillOpacity="0.15" />
      <circle cx="22" cy="26" r="4" fill="white" />
      <path d="M22 26 L42 6" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 6 L42 6 L42 12" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function BarChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="bc-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect x="8" y="28" width="7" height="14" rx="2" fill="url(#bc-grad)" />
      <rect x="18" y="22" width="7" height="20" rx="2" fill="url(#bc-grad)" />
      <rect x="28" y="14" width="7" height="28" rx="2" fill="url(#bc-grad)" />
      <path d="M6 22 L18 14 L28 18 L42 6" stroke="#a855f7" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 6 L42 6 L42 12" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ReportIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="rp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path d="M12 6 h18 l8 8 v26 a2 2 0 0 1 -2 2 H12 a2 2 0 0 1 -2 -2 V8 a2 2 0 0 1 2 -2 Z" fill="white" stroke="url(#rp-grad)" strokeWidth="2" />
      <path d="M30 6 v8 h8" fill="none" stroke="url(#rp-grad)" strokeWidth="2" />
      <rect x="16" y="28" width="3" height="8" rx="1" fill="#34d399" />
      <rect x="22" y="24" width="3" height="12" rx="1" fill="#10b981" />
      <rect x="28" y="20" width="3" height="16" rx="1" fill="#059669" />
      <path d="M16 22 L22 18 L28 20 L34 14" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const PILLARS = [
  {
    Icon: GoogleAdsIcon,
    title: "Création",
    sub: "de campagnes performantes",
    halo: "from-sky/60 via-electric/40 to-electric-soft/60",
    accent: "text-electric",
  },
  {
    Icon: TargetIcon,
    title: "Gestion",
    sub: "et optimisation continues",
    halo: "from-coral/60 via-pink-300/50 to-lilac/60",
    accent: "text-[color:var(--coral)]",
  },
  {
    Icon: BarChartIcon,
    title: "Suivi",
    sub: "des performances en temps réel",
    halo: "from-lilac/60 via-electric-soft/50 to-sky/60",
    accent: "text-[color:var(--lilac)]",
  },
  {
    Icon: ReportIcon,
    title: "Rapports clairs",
    sub: "et analyses régulières",
    halo: "from-mint/60 via-emerald-200/50 to-sky/50",
    accent: "text-emerald-600",
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
  const finalReveal = useReveal<HTMLDivElement>();

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

          <div className="mt-10 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-5 py-2.5 text-sm font-medium text-ink-soft backdrop-blur-md transition hover:bg-white/50 hover:text-ink"
            >
              ← Retour à l'accueil
            </Link>
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
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {PILLARS.map((p, i) => (
                <PillarCard key={p.title} p={p} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

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
                  <TargetIcon className="h-12 w-12" />
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--lilac)] bg-clip-text text-transparent">Plus de visibilité.</span>{" "}
                  <span className="bg-gradient-to-r from-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">Plus de clics.</span>{" "}
                  <span className="bg-gradient-to-r from-[color:var(--coral)] to-[color:var(--solar)] bg-clip-text text-transparent">Plus de clients.</span>
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

      {/* Final CTA — Service disponible cet été (pas de lien) */}
      <section className="relative pb-28">
        <div ref={finalReveal} className="reveal mx-auto max-w-4xl px-6 text-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/40 p-10 backdrop-blur-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.28)]">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-coral/40 via-solar/30 to-lilac/40 blur-3xl animate-[blob_12s_ease-in-out_infinite]" />
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/60 px-6 py-3 backdrop-blur-xl shadow-[0_12px_30px_-12px_rgba(0,0,0,0.2)] animate-[bubble-pop_700ms_cubic-bezier(0.22,1.5,0.36,1)_both]">
              <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-coral via-solar to-lilac text-white text-sm">☀</span>
              <span className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
                Service disponible cet été
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
  return (
    <div
      ref={ref}
      className="reveal group relative flex flex-col items-center text-center"
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      <div className="relative">
        <span aria-hidden className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${p.halo} blur-lg opacity-80`} />
        <span
          className="relative grid h-20 w-20 place-items-center rounded-3xl bg-white/80 ring-1 ring-white/70 shadow-[inset_0_-6px_0_0_rgba(0,0,0,0.05),0_18px_38px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]"
          style={{ animation: `float-y 6s ease-in-out ${i * 0.4}s infinite` }}
        >
          <Icon className="h-11 w-11" />
        </span>
      </div>
      <h3 className={`mt-5 font-display text-base font-bold ${p.accent}`}>{p.title}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{p.sub}</p>
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
