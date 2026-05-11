type Sparkle = {
  c: string; // class for position
  s?: string; // symbol
  d?: number; // delay seconds
  size?: string;
};

const PRESETS: Record<string, Sparkle[]> = {
  default: [
    { c: "left-[6%] top-[14%] text-xl", s: "✦", d: 0 },
    { c: "right-[8%] top-[10%] text-lg", s: "✺", d: 1.2 },
    { c: "left-[14%] bottom-[12%] text-base", s: "✦", d: 2.1 },
    { c: "right-[12%] bottom-[18%] text-xl", s: "✦", d: 0.6 },
    { c: "right-[22%] top-[48%] text-sm", s: "✺", d: 3.0 },
  ],
  dense: [
    { c: "left-[4%] top-[8%] text-xl", s: "✦", d: 0 },
    { c: "right-[6%] top-[14%] text-base", s: "✺", d: 1.4 },
    { c: "left-[10%] top-[44%] text-sm", s: "✦", d: 2.6 },
    { c: "right-[14%] top-[38%] text-lg", s: "✦", d: 0.8 },
    { c: "left-[18%] bottom-[10%] text-base", s: "✺", d: 3.2 },
    { c: "right-[10%] bottom-[14%] text-xl", s: "✦", d: 1.9 },
    { c: "left-[48%] top-[6%] text-xs", s: "✦", d: 2.3 },
    { c: "left-[52%] bottom-[6%] text-xs", s: "✺", d: 0.4 },
  ],
};

export function Sparkles({ variant = "default" }: { variant?: keyof typeof PRESETS }) {
  const items = PRESETS[variant] ?? PRESETS.default;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 hidden sm:block">
      {items.map((it, i) => (
        <span
          key={i}
          className={`float-y absolute text-ink/60 ${it.c}`}
          style={{ animationDelay: `${it.d ?? 0}s` }}
        >
          {it.s ?? "✦"}
        </span>
      ))}
    </div>
  );
}
