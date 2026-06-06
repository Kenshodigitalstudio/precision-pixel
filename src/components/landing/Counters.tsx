import { useEffect, useRef, useState } from "react";

type Counter = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

const COUNTERS: Counter[] = [
  { prefix: "+", value: 47, label: "audits réalisés" },
  { prefix: "+", value: 230, suffix: "%", label: "ROI moyen constaté" },
  { value: 30, suffix: " min", label: "chrono" },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setV(target);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setV(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return v;
}

function Stat({ c, start }: { c: Counter; start: boolean }) {
  const v = useCountUp(c.value, 1800, start);
  return (
    <div className="flex flex-col items-center text-center">
      <div className="font-display text-[clamp(2.75rem,7vw,4.5rem)] font-extrabold leading-none tracking-tight bg-gradient-to-br from-blue-500 via-electric to-indigo-600 bg-clip-text text-transparent">
        {c.prefix}
        {Math.round(v).toLocaleString("fr-FR")}
        {c.suffix}
      </div>
      <div className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-ink-soft">
        {c.label}
      </div>
    </div>
  );
}

export function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStart(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative px-6 py-12 sm:py-16">
      <div
        ref={ref}
        className="mx-auto max-w-5xl rounded-[2rem] border border-white/40 bg-white/20 backdrop-blur-2xl shadow-[0_20px_60px_-25px_rgba(59,130,246,0.35)] px-8 py-10 sm:py-12"
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {COUNTERS.map((c) => (
            <Stat key={c.label} c={c} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}
