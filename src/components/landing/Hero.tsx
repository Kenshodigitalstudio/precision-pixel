import { useMagnetic } from "@/hooks/use-magnetic";
import tile1 from "@/assets/tile-1.jpg";
import tile2 from "@/assets/tile-2.jpg";
import tile3 from "@/assets/tile-3.jpg";
import kenshoMark from "@/assets/kensho-mark.png";

export function Hero() {
  const magneticRef = useMagnetic<HTMLAnchorElement>(0.2);

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
        <h1 className="relative mx-auto max-w-4xl font-display text-[clamp(2.75rem,8vw,6rem)] font-extrabold leading-[1] tracking-[-0.035em] text-ink">
          Agence marketing
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
            href="https://calendar.app.google/qg7jgpvovovLnEoN9"
            target="_blank"
            rel="noopener noreferrer"
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

        {/* Certification badge */}
        <div className="relative mt-16 flex justify-center">
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-br from-sky via-electric to-electric-soft bg-clip-text text-transparent drop-shadow-sm">
            Experts certifiés Google Ads
          </span>
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
