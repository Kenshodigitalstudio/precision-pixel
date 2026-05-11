import { useMagnetic } from "@/hooks/use-magnetic";
import { Aurora } from "./Aurora";

export function Hero() {
  const magneticRef = useMagnetic<HTMLAnchorElement>(0.25);

  const title1 = ["Dominez", "Google", "Ads."];
  const title2 = ["Mesurez", "chaque", "euro."];

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Aurora />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 backdrop-blur-md text-xs font-medium text-ink-soft reveal"
          style={{ animationDelay: "0ms" }}
        >
          <span className="live-dot" />
          <span>Tracking actif sur 47 comptes</span>
          <span className="text-border">•</span>
          <span className="text-ink">Paris</span>
        </div>

        <h1 className="mt-8 font-display text-[clamp(2.75rem,7vw,6rem)] font-700 leading-[1.02] tracking-[-0.035em] text-ink">
          <span className="word-reveal block">
            {title1.map((w, i) => (
              <span key={i} style={{ ["--i" as never]: i }}>
                {w}{" "}
              </span>
            ))}
          </span>
          <span className="word-reveal relative block">
            {title2.map((w, i) => {
              const isHL = w.startsWith("chaque");
              return (
                <span key={i} style={{ ["--i" as never]: title1.length + i }} className={isHL ? "relative" : ""}>
                  {isHL ? (
                    <span className="relative inline-block">
                      <span className="relative z-10">{w}</span>
                      <svg
                        aria-hidden
                        className="highlight-svg absolute inset-x-[-4%] bottom-[10%] -z-0 h-[55%] w-[108%]"
                        viewBox="0 0 200 40"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M4 28 C 40 8, 120 4, 196 22 C 180 32, 60 38, 4 28 Z"
                          fill="none"
                          stroke="var(--solar)"
                          strokeWidth="14"
                          strokeLinecap="round"
                          opacity="0.85"
                        />
                      </svg>
                    </span>
                  ) : (
                    w
                  )}{" "}
                </span>
              );
            })}
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-ink-soft leading-relaxed reveal is-visible">
          Nous pilotons vos campagnes Google Ads et industrialisons votre tracking
          pour transformer la donnée en croissance — propre, attribuée, mesurable.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            ref={magneticRef}
            href="#contact"
            className="btn-magnetic group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper shadow-[var(--shadow-glow)] transition-colors hover:bg-electric"
          >
            Réserver un appel de découverte
            <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
          <a
            href="#approche"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur-md transition-colors hover:bg-card"
          >
            Voir notre approche
          </a>
        </div>

        <div className="mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-border/60 pt-8 text-sm">
          {[
            { k: "Certifiés", v: "Google Partner" },
            { k: "GTM SS", v: "Server-side ready" },
            { k: "GA4 / BQ", v: "Attribution propre" },
          ].map((it) => (
            <div key={it.k}>
              <div className="text-xs uppercase tracking-widest text-ink-soft">{it.k}</div>
              <div className="mt-1 font-display text-base font-medium text-ink">{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
