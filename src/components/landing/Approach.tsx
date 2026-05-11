import { useReveal } from "@/hooks/use-reveal";
import { Sparkles } from "./Sparkles";

const steps = [
  {
    k: "01",
    t: "Dépenses de budget inutiles",
    body:
      "Sans expertise, le budget part dans des mots-clés non rentables, des audiences mal ciblées et des enchères mal calibrées. Chaque euro mal dépensé est un euro qui ne reviendra pas.",
  },
  {
    k: "02",
    t: "Mauvaise utilisation des données",
    body:
      "Un tracking approximatif, ce sont des décisions prises sur des chiffres faux. Conversions doublées, événements manquants, attribution cassée : vous pilotez à l'aveugle.",
  },
  {
    k: "03",
    t: "Perte d'opportunités face à la concurrence",
    body:
      "Pendant que vous tâtonnez, vos concurrents structurent, mesurent et scalent. Chaque mois sans expertise est un mois d'avance offert à ceux qui font les choses correctement.",
  },
];

export function Approach() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="approche" className="relative overflow-hidden py-16 sm:py-20">
      <Sparkles variant="default" />
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            04 — Les risques
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Ce qu'un compte sans expertise vous coûte vraiment.
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <svg
            aria-hidden
            className="absolute inset-x-0 top-12 hidden h-px w-full md:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 2"
          >
            <line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="var(--electric)"
              strokeOpacity="0.4"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              style={{ animation: "draw-line 2200ms cubic-bezier(0.22,1,0.36,1) 200ms forwards" }}
            />
          </svg>

          {steps.map((s, i) => (
            <div key={s.k} className="relative">
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-border bg-card font-display text-sm font-semibold">
                {s.k}
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="absolute right-[-1rem] top-5 hidden text-electric md:block">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
