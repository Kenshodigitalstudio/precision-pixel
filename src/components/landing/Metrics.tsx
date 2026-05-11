import { useReveal } from "@/hooks/use-reveal";

type Promise = {
  index: string;
  title: string;
  desc: string;
};

const promises: Promise[] = [
  {
    index: "01",
    title: "Un audit clair pendant l'appel",
    desc: "30 minutes en visio pour passer votre compte au crible : structure, mots-clés, conversions. Vous repartez avec des actions concrètes, pas un rapport de 40 pages.",
  },
  {
    index: "02",
    title: "Des experts spécialisés Google Ads",
    desc: "Tous nos experts ont plusieurs années d'expérience exclusivement sur Google Ads. Pas de généralistes, pas de stagiaires — uniquement des praticiens de la plateforme.",
  },
  {
    index: "03",
    title: "Un contact humain avant le RDV",
    desc: "Dès la prise de rendez-vous, l'expert qui s'occupera de vous prend contact pour se présenter et confirmer le créneau. Pas de robot, pas de file d'attente.",
  },
];

const accents = [
  "text-coral",
  "text-electric",
  "text-mint",
];

export function Metrics() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="metrics" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            03 — Pourquoi nous
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink">
            Ce qu'on vous garantit, dès le premier appel.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {promises.map((p) => (
            <article key={p.index} className="service-card flex flex-col gap-4 p-7 sm:p-8">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink">
                [ {p.index} ]
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
