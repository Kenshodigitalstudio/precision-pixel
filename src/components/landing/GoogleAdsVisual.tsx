export function GoogleAdsVisual() {
  // 8 bars + trend line
  const bars = [38, 52, 44, 70, 58, 88, 76, 96];
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-electric" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
            Campagnes / ROAS
          </span>
        </div>
        <span className="rounded-full bg-ink px-2 py-0.5 font-mono text-[10px] text-paper">
          +320%
        </span>
      </div>

      <svg viewBox="0 0 320 140" className="mt-3 h-[calc(100%-2.5rem)] w-full" aria-hidden>
        {/* gridlines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="0"
            x2="320"
            y1={20 + i * 30}
            y2={20 + i * 30}
            stroke="currentColor"
            className="text-border"
            strokeDasharray="2 4"
            opacity={0.5}
          />
        ))}
        {/* bars */}
        {bars.map((h, i) => {
          const x = 14 + i * 38;
          const y = 130 - h;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width="22"
              height={h}
              rx="4"
              fill="url(#barGrad)"
              style={{
                transformOrigin: `${x + 11}px 130px`,
                animation: `bar-grow 900ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms both`,
              }}
            />
          );
        })}
        {/* trend line */}
        <path
          d={bars
            .map((h, i) => `${i === 0 ? "M" : "L"}${14 + i * 38 + 11},${130 - h - 4}`)
            .join(" ")}
          fill="none"
          stroke="var(--electric)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="400"
          strokeDashoffset="400"
          style={{ animation: "draw-line 1600ms cubic-bezier(0.22,1,0.36,1) 700ms forwards" }}
        />
        {bars.map((h, i) => (
          <circle
            key={`d-${i}`}
            cx={14 + i * 38 + 11}
            cy={130 - h - 4}
            r="2.5"
            fill="var(--electric)"
            opacity="0"
            style={{ animation: `fade-in 300ms ease ${1100 + i * 90}ms forwards` }}
          />
        ))}
        <defs>
          <linearGradient id="barGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--electric)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--electric)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`@keyframes fade-in { to { opacity: 1; } }`}</style>
    </div>
  );
}
