import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useMagnetic } from "@/hooks/use-magnetic";

type Slide = {
  tag: string;
  title: string;
  desc: string;
  price?: string;
  gradient: string;
  icon: string;
  cta?: { label: string };
};

type ServiceKey = "audit_flash" | "tracking_setup";

const slides: (Slide & { service: ServiceKey })[] = [
  {
    tag: "Audit Flash",
    title: "RDV 30 min — Audit Google Ads",
    desc: "Un appel Google Meet de 30 minutes pour passer votre compte au crible et repartir avec des actions concrètes.",
    price: "150 €",
    gradient: "from-sky/70 via-electric/60 to-electric-soft/70",
    icon: "📞",
    cta: { label: "Réserver & payer" },
    service: "audit_flash",
  },
  {
    tag: "Tracking",
    title: "Installation de tags & tracking",
    desc: "Google Tag, conversions Ads, GA4, événements clés. Une donnée propre dès le premier clic.",
    price: "100 €",
    gradient: "from-mint/70 via-emerald-400/60 to-emerald-600/70",
    icon: "⚙️",
    cta: { label: "Réserver & payer" },
    service: "tracking_setup",
  },
];

export function Hero() {
  const magneticRef = useMagnetic<HTMLAnchorElement>(0.2);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const child = c as HTMLElement;
        const mid = child.offsetLeft - el.offsetLeft + child.clientWidth / 2;
        const d = Math.abs(center - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      {/* Decorative floating sparkles */}
      <span aria-hidden className="float-y absolute left-[8%] top-[18%] text-2xl text-ink/70 hidden sm:block">✦</span>
      <span aria-hidden className="float-y absolute right-[12%] top-[22%] text-xl text-ink/70 hidden sm:block" style={{ animationDelay: "1.2s" }}>✦</span>
      <span aria-hidden className="float-y absolute left-[18%] bottom-[8%] text-lg text-ink/60 hidden sm:block" style={{ animationDelay: "2.4s" }}>✺</span>
      <span aria-hidden className="float-y absolute right-[6%] top-[55%] text-base text-ink/60 hidden sm:block" style={{ animationDelay: "0.8s" }}>✦</span>
      <span aria-hidden className="float-y absolute left-[3%] top-[55%] text-sm text-ink/55 hidden sm:block" style={{ animationDelay: "3.1s" }}>✺</span>
      <span aria-hidden className="float-y absolute right-[22%] bottom-[14%] text-lg text-ink/60 hidden sm:block" style={{ animationDelay: "1.8s" }}>✦</span>
      <span aria-hidden className="float-y absolute left-[42%] top-[6%] text-xs text-ink/60 hidden sm:block" style={{ animationDelay: "2.7s" }}>✦</span>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h1 className="relative mx-auto max-w-5xl font-display text-[clamp(3.5rem,10vw,8rem)] font-light leading-[1.05] tracking-[-0.04em] text-ink pb-2">
          Kenshō
          <span className="block font-extralight text-ink-soft">Digital Studio</span>
        </h1>

        <p className="relative mx-auto mt-10 max-w-xl text-[15px] sm:text-base text-ink-soft">
          Performance Google Ads & Tracking Server-Side. On transforme
          votre budget en revenus mesurables.
        </p>

        <div className="relative mt-8 flex justify-center">
          <Link
            ref={magneticRef}
            to="/reservation"
            className="btn-magnetic group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/40 bg-white/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-ink shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/50 hover:shadow-[0_16px_50px_-12px_rgba(0,0,0,0.32)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky/40 via-electric/30 to-solar/40 opacity-90"
            />
            <span>Prendre rendez-vous</span>
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </Link>
        </div>

        {/* Liquid glass services slider */}
        <div className="relative mt-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
            <div className="absolute -left-10 top-6 h-56 w-56 rounded-full bg-electric/30 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-solar/40 blur-3xl" />
            <div className="absolute left-1/3 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-mint/30 blur-3xl" />
          </div>

          <div
            ref={trackRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-2 py-4 sm:gap-7"
            style={{ scrollPadding: "0 1rem" }}
          >
            {slides.map((s, i) => (
              <article
                key={s.title}
                className={`snap-center shrink-0 w-[85%] sm:w-[68%] md:w-[58%] rounded-[1.75rem] border border-white/40 bg-white/25 p-7 sm:p-9 text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 ${
                  active === i ? "scale-100 opacity-100" : "scale-[0.96] opacity-80"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`grid h-14 w-14 flex-none place-items-center rounded-full bg-gradient-to-br ${s.gradient} text-2xl shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.05)] ring-1 ring-white/60 backdrop-blur-md`}
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                  {s.price && (
                    <span
                      className={`font-display text-3xl font-extrabold tracking-tight bg-gradient-to-br ${s.gradient} bg-clip-text text-transparent`}
                    >
                      {s.price}
                    </span>
                  )}
                </div>

                <span className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                  {s.tag}
                </span>
                <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {s.desc}
                </p>

                {s.cta && (
                  <Link
                    to="/reservation"
                    search={{ service: s.service }}
                    className="group/cta mt-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-5 py-2.5 text-sm font-semibold text-ink backdrop-blur-md transition-all hover:bg-white/60 hover:-translate-y-0.5"
                  >
                    {s.cta.label}
                    <span className="transition-transform group-hover/cta:translate-x-0.5">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-8 bg-ink" : "w-2 bg-ink/30 hover:bg-ink/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Précédent"
            onClick={() => goTo(Math.max(0, active - 1))}
            className="absolute left-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/40 p-3 text-ink backdrop-blur-md transition-all hover:bg-white/70 sm:flex"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Suivant"
            onClick={() => goTo(Math.min(slides.length - 1, active + 1))}
            className="absolute right-1 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/40 p-3 text-ink backdrop-blur-md transition-all hover:bg-white/70 sm:flex"
          >
            →
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <span className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/40 bg-white/30 px-5 py-2.5 font-display text-sm font-semibold tracking-tight text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-solar/40 via-amber-300/30 to-mint/30 opacity-90"
            />
            <span aria-hidden>✦</span>
            Plus de services à venir
          </span>
        </div>

        <div className="relative mt-16 flex justify-center">
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-br from-sky via-electric to-electric-soft bg-clip-text text-transparent drop-shadow-sm">
            Experts certifiés Google Ads
          </span>
        </div>
      </div>
    </section>
  );
}
