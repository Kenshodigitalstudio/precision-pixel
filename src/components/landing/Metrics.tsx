import { useCountUp } from "@/hooks/use-count-up";

function Stat({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const { ref, value: v } = useCountUp(value);
  const formatted = v.toLocaleString("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <div className="border-t border-border/60 pt-6">
      <div className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-600 leading-none tracking-[-0.03em] text-ink">
        <span ref={ref}>
          {prefix}
          {formatted}
          {suffix}
        </span>
      </div>
      <div className="mt-3 text-sm text-ink-soft">{label}</div>
    </div>
  );
}

export function Metrics() {
  return (
    <section id="metrics" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            03 — Résultats
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-600 leading-[1.1] tracking-[-0.02em]">
            Des chiffres, pas des promesses.
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value={320} prefix="+" suffix="%" label="ROAS moyen post-restructuration" />
          <Stat value={2.4} decimals={1} suffix=" M€" label="Budget média piloté annuellement" />
          <Stat value={8} prefix="×" label="ROI publicitaire vs. baseline" />
          <Stat value={97} suffix="%" label="Rétention client après 12 mois" />
        </div>
      </div>
    </section>
  );
}
