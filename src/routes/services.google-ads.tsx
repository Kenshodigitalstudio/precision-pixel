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
      { title: "Gestion Google Ads de A à Z — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "On gère vos Google Ads, vous récoltez les résultats. Création, gestion, suivi et rapports clairs pour booster votre croissance.",
      },
      { property: "og:title", content: "Gestion Google Ads de A à Z — Kenshō Digital Studio" },
      {
        property: "og:description",
        content:
          "Création de campagnes, optimisation continue, suivi temps réel et rapports clairs. Plus de visibilité, plus de clics, plus de clients.",
      },
    ],
  }),
});

const PILLARS = [
  {
    icon: "🅰️",
    title: "Création",
    sub: "de campagnes performantes",
    gradient: "from-sky/70 via-electric/60 to-electric-soft/70",
    accent: "text-electric",
  },
  {
    icon: "🎯",
    title: "Gestion",
    sub: "et optimisation continues",
    gradient: "from-coral/80 via-pink-400/60 to-lilac/70",
    accent: "text-[color:var(--coral)]",
  },
  {
    icon: "📈",
    title: "Suivi",
    sub: "des performances en temps réel",
    gradient: "from-lilac/70 via-electric-soft/60 to-sky/70",
    accent: "text-[color:var(--lilac)]",
  },
  {
    icon: "📊",
    title: "Rapports clairs",
    sub: "et analyses régulières",
    gradient: "from-mint/80 via-emerald-300/60 to-sky/60",
    accent: "text-emerald-600",
  },
];

const STATS = [
  { label: "Conversions", value: 248, suffix: "", delta: "+35%", up: true, tint: "from-sky/40 to-electric/30" },
  { label: "CTR moyen", value: 6.75, suffix: " %", delta: "+18%", up: true, tint: "from-coral/40 to-lilac/30" },
  { label: "Coût / conversion", value: 12.45, suffix: " €", delta: "-15%", up: false, tint: "from-mint/40 to-sky/30" },
];

function useCountUp(target: number, duration = 1400) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let start = 0;
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (!e.isIntersecting) return;
          const tick = (t: number) => {
            if (!start) start = t;
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          io.disconnect();
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);
  return { ref, val };
}

function StatCard({ s, i }: { s: (typeof STATS)[number]; i: number }) {
  const isInt = Number.isInteger(s.value);
  const { ref, val } = useCountUp(s.value);
  const display = isInt ? Math.round(val).toString() : val.toFixed(2).replace(".", ",");
  return (
    <article
      className="reveal group relative overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/40 p-6 backdrop-blur-2xl shadow-[0_20px_60px_-24px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1"
      style={{ transitionDelay: `${i * 80}ms` }}
      ref={useReveal<HTMLElement>()}
    >
      <div className={`pointer-events-none absolute -inset-px -z-10 rounded-[inherit] bg-gradient-to-br ${s.tint} opacity-60`} />
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">{s.label}</span>
        <span className={`text-xs font-semibold ${s.up ? "text-emerald-600" : "text-emerald-600"}`}>
          {s.up ? "↑" : "↓"} {s.delta}
        </span>
      </div>
      <div className="mt-4 flex items-end gap-1">
        <span ref={ref} className="font-display text-4xl font-extrabold tracking-tight text-ink tabular-nums">
          {display}
        </span>
        <span className="pb-1 text-lg font-semibold text-ink-soft">{s.suffix}</span>
      </div>
      {/* mini sparkline */}
      <svg viewBox="0 0 120 40" className="mt-4 h-10 w-full">
        <defs>
          <linearGradient id={`grad-${i}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={
            s.up
              ? "M0 30 L20 26 L40 28 L60 18 L80 20 L100 10 L120 6"
              : "M0 10 L20 14 L40 12 L60 22 L80 20 L100 28 L120 32"
          }
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={s.up ? "text-electric" : "text-[color:var(--coral)]"}
          style={{
            strokeDasharray: 400,
            strokeDashoffset: 400,
            animation: "draw-line 1800ms cubic-bezier(0.22,1,0.36,1) 400ms forwards",
          }}
        />
      </svg>
    </article>
  );
}

function GoogleAdsPage() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25);
  const heroReveal = useReveal<HTMLDivElement>();
  const pillarsReveal = useReveal<HTMLDivElement>();
  const promiseReveal = useReveal<HTMLDivElement>();
  const finalReveal = useReveal<HTMLDivElement>();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />

      {/* Decorative floating accents */}
      <span aria-hidden className="float-y absolute left-[8%] top-[18%] text-2xl text-ink/60 hidden sm:block">✦</span>
      <span aria-hidden className="float-y absolute right-[10%] top-[22%] text-xl text-ink/60 hidden sm:block" style={{ animationDelay: "1.2s" }}>✦</span>
      <span aria-hidden className="float-y absolute left-[14%] bottom-[12%] text-lg text-ink/50 hidden sm:block" style={{ animationDelay: "2.4s" }}>✺</span>
      <span aria-hidden className="float-y absolute right-[18%] bottom-[20%] text-sm text-ink/50 hidden sm:block" style={{ animationDelay: "0.8s" }}>✦</span>

      <section className="relative pt-28 pb-16 sm:pt-32">
        <div ref={heroReveal} className="reveal relative mx-auto max-w-5xl px-6 text-center">
          {/* New service chip */}
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/40 px-5 py-2 backdrop-blur-xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)]">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-coral via-solar to-lilac text-white shadow-inner">
              ✦
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--coral)]">
              Nouveau service
            </span>
          </div>

          {/* Brand line */}
          <p className="mt-8 font-display text-2xl sm:text-3xl font-light tracking-tight">
            <span className="bg-gradient-to-r from-[color:var(--coral)] via-[color:var(--lilac)] to-[color:var(--electric)] bg-clip-text text-transparent">
              Kenshō
            </span>{" "}
            <span className="text-ink-soft">Digital Studio</span>
          </p>

          {/* Headline */}
          <h1 className="mt-6 font-display text-[clamp(2.4rem,6.5vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
            On gère vos{" "}
            <span className="bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">
              Google Ads
            </span>
            ,<br />
            vous récoltez les{" "}
            <span className="bg-gradient-to-r from-[color:var(--lilac)] via-[color:var(--sky)] to-[color:var(--electric-soft)] bg-clip-text text-transparent">
              résultats.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[15.5px] sm:text-base leading-relaxed text-ink-soft">
            De la <span className="font-semibold text-[color:var(--electric)]">création</span> de campagnes au{" "}
            <span className="font-semibold text-[color:var(--coral)]">suivi</span> des performances,
            on s'occupe de tout pour{" "}
            <span className="font-semibold text-[color:var(--lilac)]">booster votre croissance</span>.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              ref={ctaRef}
              to="/reservation"
              search={{ service: "audit_flash" }}
              className="btn-magnetic group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/50 bg-white/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-ink shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/60"
            >
              <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-coral/40 via-solar/30 to-lilac/40 opacity-90" />
              <span>Prêt à booster vos résultats ?</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-5 py-3 text-sm font-medium text-ink-soft backdrop-blur-md transition hover:bg-white/50 hover:text-ink"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative pb-20">
        <div ref={pillarsReveal} className="reveal mx-auto max-w-6xl px-6">
          <div className="relative rounded-[2rem] border border-white/50 bg-white/35 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_24px_70px_-30px_rgba(0,0,0,0.25)]">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
              <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-coral/30 blur-3xl" />
              <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-lilac/30 blur-3xl" />
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className="reveal group flex flex-col items-center text-center"
                  ref={useReveal<HTMLDivElement>()}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span
                    className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-3xl shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.05)] ring-1 ring-white/60 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]`}
                  >
                    {p.icon}
                  </span>
                  <h3 className={`mt-4 font-display text-base font-bold ${p.accent}`}>{p.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{p.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promise + Stats */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div
              ref={promiseReveal}
              className="reveal relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/45 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_24px_70px_-30px_rgba(0,0,0,0.25)]"
            >
              <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-solar/40 blur-3xl" />
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-gradient-to-br from-coral via-pink-400 to-lilac text-2xl shadow-inner ring-1 ring-white/60">
                  🎯
                </span>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-[color:var(--electric)] to-[color:var(--lilac)] bg-clip-text text-transparent">Plus de visibilité.</span>
                    <br />
                    <span className="bg-gradient-to-r from-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">Plus de clics.</span>
                    <br />
                    <span className="bg-gradient-to-r from-[color:var(--coral)] to-[color:var(--solar)] bg-clip-text text-transparent">Plus de clients.</span>
                  </h2>
                </div>
              </div>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                Confiez-nous vos Google Ads et concentrez-vous sur ce que vous faites de mieux :{" "}
                <span className="font-semibold text-ink">votre business</span>. Nous transformons votre budget
                publicitaire en résultats concrets et mesurables.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {STATS.map((s, i) => (
                <StatCard key={s.label} s={s} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative pb-28">
        <div ref={finalReveal} className="reveal mx-auto max-w-4xl px-6 text-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/40 p-10 backdrop-blur-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.28)]">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-coral/40 via-solar/30 to-lilac/40 blur-3xl" />
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              Prêt à booster{" "}
              <span className="bg-gradient-to-r from-[color:var(--coral)] via-[color:var(--lilac)] to-[color:var(--electric)] bg-clip-text text-transparent">
                votre business
              </span>{" "}
              ?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-ink-soft">
              Audit flash de 30 minutes pour identifier vos opportunités Google Ads. Repartez avec un plan d'action clair.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/reservation"
                search={{ service: "audit_flash" }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/50 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/70"
              >
                <span aria-hidden className="text-[color:var(--coral)]">→</span>
                Réserver mon audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
