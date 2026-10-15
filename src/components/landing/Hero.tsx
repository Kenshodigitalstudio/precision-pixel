import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";


type Slide = {
  tag: string;
  title: string;
  desc: React.ReactNode;
  price?: string;
  gradient: string;
  icon: string;
  cta?: { label: string };
  href?: string;
  premium?: boolean;
  colorful?: boolean;
  badge?: string;
};

type ServiceKey = "audit_flash" | "tracking_setup";

const slides: (Slide & { service?: ServiceKey })[] = [
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
    tag: "VOTRE ENTREPRISE",
    title: "Gestion mensuelle de votre compte Google Ads",
    desc: "On ne vous dit pas juste quoi faire. On le fait pour vous : création complète des campagnes, optimisation continue et suivi des performances.",
    gradient: "from-electric/70 via-lilac/60 to-coral/70",
    icon: "🚀",
    cta: { label: "Découvrir le service" },
    href: "/services/google-ads",
  },
  {
    tag: "Réseaux sociaux",
    title: "Gestion de vos réseaux sociaux",
    desc: "Instagram, TikTok, LinkedIn, YouTube… on fait rayonner votre marque là où vos clients passent du temps.",
    gradient: "from-coral/80 via-solar/70 to-lilac/80",
    icon: "📣",
    cta: { label: "Découvrir le service" },
    href: "/reseaux-sociaux",
    colorful: true,
    badge: "Sur devis",
  },
];


export function Hero() {
  
  const trackRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * 0.2;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

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
      {/* Parallax background gradient */}
      <div
        aria-hidden
        ref={parallaxRef}
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-[120%] will-change-transform"
      >
        <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute right-[8%] top-[30%] h-80 w-80 rounded-full bg-solar/25 blur-3xl" />
        <div className="absolute left-[30%] bottom-[5%] h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
      </div>
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
          L'agence digitale certifiée qui transforme votre budget en croissance mesurable.
        </p>








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
                className={`relative snap-center shrink-0 w-[85%] sm:w-[68%] md:w-[58%] rounded-[1.75rem] border p-7 sm:p-9 text-left backdrop-blur-2xl transition-all duration-500 ${
                  s.premium
                    ? "border-amber-300/60 bg-gradient-to-br from-white/40 via-amber-50/40 to-white/30 shadow-[0_30px_80px_-20px_rgba(234,179,8,0.45)] ring-1 ring-amber-200/50"
                    : s.colorful
                      ? "border-white/50 bg-gradient-to-br from-coral/35 via-lilac/30 to-sky/35 shadow-[0_30px_80px_-20px] shadow-coral/45 ring-1 ring-white/60"
                      : "border-white/40 bg-white/25 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
                } ${active === i ? "scale-100 opacity-100" : "scale-[0.96] opacity-80"}`}
              >
                {s.premium && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 rounded-[1.75rem] bg-gradient-to-br from-solar/20 via-amber-200/15 to-mint/15 blur-xl"
                  />
                )}
                {s.colorful && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 rounded-[1.75rem] bg-gradient-to-br from-coral/30 via-solar/25 to-lilac/30 blur-xl"
                  />
                )}
                {s.premium && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-solar via-amber-400 to-mint px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-[0_4px_14px_-2px_rgba(234,179,8,0.6)]">
                    ✦ Premium
                  </span>
                )}
                {s.colorful && s.badge && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-coral via-solar to-lilac px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-[0_4px_14px_-2px] shadow-coral/60">
                    ✦ {s.badge}
                  </span>
                )}
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
                    to={s.href ?? "/reservation"}
                    {...(s.href ? {} : { search: { service: s.service } })}
                    className={
                      s.premium
                        ? "group/cta mt-6 inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-gradient-to-r from-solar/80 via-amber-300/80 to-mint/70 px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(234,179,8,0.55)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-8px_rgba(234,179,8,0.7)]"
                        : "group/cta mt-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-5 py-2.5 text-sm font-semibold text-ink backdrop-blur-md transition-all hover:bg-white/60 hover:-translate-y-0.5"
                    }
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

        {/* Lien vers la page Votre Entreprise */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/votre-entreprise"
            className="group relative inline-flex items-center gap-3 rounded-full border border-amber-300/60 bg-gradient-to-r from-solar/80 via-amber-300/80 to-mint/70 px-7 py-3.5 text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(234,179,8,0.55)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-8px_rgba(234,179,8,0.7)]"
          >
            <span aria-hidden className="text-lg">✦</span>
            Votre Entreprise — gestion mensuelle de votre compte
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

