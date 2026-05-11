import { useReveal } from "@/hooks/use-reveal";

type Service = {
  icon: string;
  iconBg: string;
  title: string;
  desc: string;
  price: string;
  priceGradient: string;
};

const services: Service[] = [
  {
    icon: "🎥",
    iconBg: "bg-coral/70",
    title: "RDV 30 min — Audit & coaching Google Ads",
    desc: "Un appel Google Meet de 30 minutes pour passer votre compte au crible : réglages de base, structure des campagnes, points de friction. On vous montre quoi corriger et comment prendre la plateforme en main, sereinement.",
    price: "49 €",
    priceGradient: "bg-gradient-to-br from-sky via-electric to-electric-soft",
  },
  {
    icon: "🏷️",
    iconBg: "bg-solar/80",
    title: "Installation de tags & tracking",
    desc: "On installe et configure vos tags pour vous : Google Tag, conversions Ads, GA4, événements clés. Une donnée propre dès le premier clic, sans devoir toucher au code.",
    price: "149 €",
    priceGradient: "bg-gradient-to-br from-mint via-emerald-400 to-emerald-600",
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
            Deux offres, simples et concrètes&nbsp;: un coaching live sur votre compte
            Google Ads, et l'installation propre de votre tracking. Rien de superflu.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {/* Decorative little sparkle */}
          <span aria-hidden className="absolute -top-6 left-1/2 hidden text-xl text-ink/60 md:block float-y">✦</span>

          {services.map((s, i) => (
            <article
              key={s.title}
              className={`service-card flex flex-col gap-5 p-7 sm:p-8 ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-full ${s.iconBg} text-xl shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.05)]`}
                  aria-hidden
                >
                  {s.icon}
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-4 py-1.5 font-display text-lg font-extrabold tracking-tight text-paper shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)] ${s.priceGradient}`}
                >
                  {s.price}
                </span>
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
