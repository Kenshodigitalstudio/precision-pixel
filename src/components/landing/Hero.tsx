import { useMagnetic } from "@/hooks/use-magnetic";
import { Aurora } from "./Aurora";

export function Hero() {
  const magneticRef = useMagnetic<HTMLAnchorElement>(0.25);

  const title1 = ["Dominez", "Google", "Ads."];
  const title2 = ["Mesurez", "chaque", "euro."];

  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24">
      <Aurora />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-ink reveal is-visible"
        >
          <span className="live-dot" />
          <span>Tracking actif · 47 comptes</span>
        </div>

        <h1 className="mt-5 font-display text-[clamp(3rem,10vw,8.5rem)] uppercase leading-[0.9] tracking-[-0.02em] text-ink">
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
                      <span aria-hidden className="absolute inset-x-[-2%] bottom-[8%] -z-0 h-[45%] w-[104%] bg-solar" />
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
            className="btn-magnetic group inline-flex items-center gap-3 border-2 border-ink bg-ink px-6 py-4 text-sm font-bold uppercase tracking-wider text-paper shadow-[var(--shadow-hard)] transition-all hover:bg-electric hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[var(--shadow-hard-lg)]"
          >
            Prendre rendez-vous
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border-2 border-ink bg-paper px-6 py-4 text-sm font-bold uppercase tracking-wider text-ink transition-all hover:bg-solar"
          >
            Voir nos services
          </a>
        </div>

        <div className="mt-20 grid max-w-3xl grid-cols-3 gap-0 border-2 border-ink text-sm">
          {[
            { k: "Certifiés", v: "Google Partner" },
            { k: "GTM SS", v: "Server-side ready" },
            { k: "GA4 / BQ", v: "Attribution propre" },
          ].map((it, i) => (
            <div key={it.k} className={`p-4 ${i < 2 ? "border-r-2 border-ink" : ""}`}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">{it.k}</div>
              <div className="mt-1 font-display text-sm uppercase text-ink">{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
