import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    k: "01",
    t: "Audit",
    d: "J+7",
    body:
      "Plongée forensique dans votre compte, votre tracking et votre funnel. Nous identifions les fuites de budget, les angles morts d'attribution et les opportunités structurelles.",
  },
  {
    k: "02",
    t: "Architecture",
    d: "J+21",
    body:
      "Refonte des campagnes, déploiement du tracking server-side, intégration GA4/BigQuery. Nous construisons l'infrastructure qui rendra l'optimisation possible.",
  },
  {
    k: "03",
    t: "Scale",
    d: "J+30",
    body:
      "Pilotage continu, expérimentation rigoureuse, reporting marge. Nous transformons la performance en routine reproductible.",
  },
];

export function Approach() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="approche" className="relative py-32 sm:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            04 — Méthode
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.5rem)] font-600 leading-[1.05] tracking-[-0.03em]">
            Une méthode courte. Une exigence longue.
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
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-xl font-600 tracking-tight">{s.t}</h3>
                  <span className="font-mono text-xs text-ink-soft">{s.d}</span>
                </div>
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
