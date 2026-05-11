import { useMagnetic } from "@/hooks/use-magnetic";
import tile1 from "@/assets/tile-1.jpg";
import tile2 from "@/assets/tile-2.jpg";
import tile3 from "@/assets/tile-3.jpg";
import kenshoMark from "@/assets/kensho-mark.png";

export function Hero() {
  const magneticRef = useMagnetic<HTMLAnchorElement>(0.2);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* Decorative floating sparkles */}
      <span aria-hidden className="float-y absolute left-[8%] top-[18%] text-2xl text-ink/70 hidden sm:block">✦</span>
      <span aria-hidden className="float-y absolute right-[12%] top-[22%] text-xl text-ink/70 hidden sm:block" style={{ animationDelay: "1.2s" }}>✦</span>
      <span aria-hidden className="float-y absolute left-[18%] bottom-[8%] text-lg text-ink/60 hidden sm:block" style={{ animationDelay: "2.4s" }}>✺</span>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Big squiggle behind the title */}
        <svg
          aria-hidden
          viewBox="0 0 800 320"
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[420px] w-[min(95%,800px)] -z-10 opacity-80"
          preserveAspectRatio="none"
        >
          <path
            className="squiggle-path"
            d="M120 60 C 60 120, 60 230, 180 260 C 320 290, 480 220, 620 250 C 740 275, 760 180, 700 130 C 640 80, 520 100, 420 60 C 320 20, 200 20, 120 60 Z"
            fill="none"
            stroke="var(--ink)"
            strokeOpacity="0.5"
            strokeWidth="1.4"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="relative mx-auto max-w-4xl font-display text-[clamp(2.75rem,8vw,6rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">
          <span className="relative inline-block">
            <span className="relative z-10">Agence</span>
            {/* Yellow blob behind */}
            <span
              aria-hidden
              className="absolute inset-x-[-8%] top-[8%] -z-0 h-[88%] w-[116%] rounded-[42%_58%_55%_45%/55%_45%_55%_45%] bg-solar"
            />
          </span>{" "}
          marketing
          <br />
          digital.
        </h1>

        <p className="relative mx-auto mt-6 max-w-xl text-[15px] sm:text-base text-ink-soft">
          Pilotage Google Ads & tracking server-side. On transforme
          votre budget média en croissance mesurable.
        </p>

        <div className="relative mt-8 flex justify-center">
          <a
            ref={magneticRef}
            href="#contact"
            className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper shadow-[var(--shadow-glow)] transition-colors hover:bg-electric"
          >
            <span>Prendre rendez-vous</span>
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>

        {/* Portrait tiles row with dashed connectors */}
        <div className="relative mt-14">
          <svg
            aria-hidden
            viewBox="0 0 800 220"
            className="pointer-events-none absolute inset-0 mx-auto h-full w-full -z-10"
            preserveAspectRatio="none"
          >
            <path
              className="squiggle-path"
              d="M40 80 C 140 -10, 260 30, 320 110 C 380 190, 500 200, 580 130 C 660 60, 760 70, 780 150"
              fill="none"
              stroke="var(--ink)"
              strokeOpacity="0.55"
              strokeWidth="1.4"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <Tile src={tile1} alt="Stratégie média" rotate="-rotate-2" mt="mt-0" />
            <Tile src={tile2} alt="Conversion" rotate="rotate-1" mt="mt-6 sm:mt-10" badge />
            <Tile src={tile3} alt="Data & tracking" rotate="-rotate-1" mt="mt-0" />
          </div>
        </div>

        {/* Stats row */}
        <div className="relative mt-16 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {[
            { v: "+320%", k: "ROAS moyen" },
            { v: "47", k: "Comptes pilotés" },
            { v: "12M€", k: "Budget média géré" },
            { v: "100%", k: "Conforme RGPD" },
          ].map((s) => (
            <div key={s.k} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                {s.v}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({
  src,
  alt,
  rotate,
  mt,
  badge,
}: {
  src: string;
  alt: string;
  rotate: string;
  mt: string;
  badge?: boolean;
}) {
  return (
    <div className={`portrait-tile relative aspect-square ${rotate} ${mt}`}>
      <img
        src={src}
        alt={alt}
        width={768}
        height={768}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      {badge && (
        <div className="absolute -bottom-6 left-1/2 hidden h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-ink text-paper sm:flex">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]">
            <defs>
              <path id="circle-text" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fontSize="9" fill="currentColor" fontFamily="var(--font-mono)" letterSpacing="3">
              <textPath href="#circle-text">PERFORMANCE · TRACKING · GOOGLE ADS · </textPath>
            </text>
          </svg>
          <img src={kenshoMark} alt="" aria-hidden className="relative h-9 w-9 object-contain" />
        </div>
      )}
    </div>
  );
}
