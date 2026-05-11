import { useReveal } from "@/hooks/use-reveal";

type Service = {
  icon: string;
  iconBg: string;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: "📣",
    iconBg: "bg-coral/70",
    title: "Google Ads",
    desc: "Audit forensique, restructuration par intention, bidding au signal. Chaque euro investi piloté comme un actif.",
  },
  {
    icon: "📊",
    iconBg: "bg-solar/80",
    title: "Tracking & Data",
    desc: "GTM server-side, GA4, Enhanced Conversions, consent mode v2. Une donnée propre, du clic à la marge.",
  },
  {
    icon: "✉️",
    iconBg: "bg-lilac/80",
    title: "Stratégie & Reporting",
    desc: "Reporting orienté P&L, attribution multi-touch, recommandations actionnables. Pas de vanity metrics.",
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              02 — Services
            </span>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
              Nos services résolvent <br className="hidden sm:block" />
              chaque problème d'acquisition.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-ink-soft">
            Notre équipe pilote vos campagnes et votre tracking comme un opérateur
            pilote une salle de marché — performance vérifiable, pas marketing à la louche.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {/* Decorative little sparkle */}
          <span aria-hidden className="absolute -top-6 left-1/2 hidden text-xl text-ink/60 md:block float-y">✦</span>

          {services.map((s, i) => (
            <article
              key={s.title}
              className={`service-card flex flex-col gap-5 p-7 sm:p-8 ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-full ${s.iconBg} text-xl shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.05)]`}
                aria-hidden
              >
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{s.desc}</p>
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
              >
                <span className="story-link">Prendre rendez-vous</span>
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
