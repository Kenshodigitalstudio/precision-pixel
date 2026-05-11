import { useReveal } from "@/hooks/use-reveal";

export function TrustStrip() {
  const ref = useReveal<HTMLDivElement>();
  const labels = ["NORDSTAR", "OBLIK", "MAISON-V", "ATELIER 9", "FORME&CO", "VANTRA", "KAIROS"];
  return (
    <section className="relative border-y border-border/60 bg-card/30 py-10 backdrop-blur-sm">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-ink-soft">
          Ils nous confient leur acquisition
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
          {labels.map((l) => (
            <div
              key={l}
              className="text-center font-display text-base font-semibold tracking-[0.18em] text-ink-soft/60 grayscale transition-all hover:text-ink hover:grayscale-0"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
