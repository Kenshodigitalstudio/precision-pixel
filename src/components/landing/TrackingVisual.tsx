export function TrackingVisual() {
  const nodes = [
    { x: 30, y: 70, label: "Site" },
    { x: 120, y: 30, label: "GTM SS" },
    { x: 120, y: 110, label: "Consent" },
    { x: 220, y: 70, label: "GA4 / BQ" },
    { x: 295, y: 70, label: "Ads API" },
  ];
  const paths = [
    "M 50 70 C 80 70, 90 30, 115 30",
    "M 50 70 C 80 70, 90 110, 115 110",
    "M 145 30 C 175 30, 190 70, 215 70",
    "M 145 110 C 175 110, 190 70, 215 70",
    "M 245 70 L 290 70",
  ];

  return (
    <div className="relative h-56 w-full overflow-hidden border-2 border-ink bg-paper p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="live-dot" style={{ width: 6, height: 6 }} />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
            Data flow — server-side
          </span>
        </div>
        <span className="border-2 border-ink bg-electric px-2 py-0.5 font-mono text-[10px] font-bold text-ink">
          ● LIVE
        </span>
      </div>

      <svg viewBox="0 0 320 140" className="mt-3 h-[calc(100%-2.5rem)] w-full" aria-hidden>
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="var(--electric)"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="200"
            strokeDashoffset="200"
            style={{ animation: `draw-line 900ms cubic-bezier(0.22,1,0.36,1) ${200 + i * 120}ms forwards` }}
          />
        ))}

        {paths.map((d, i) => (
          <circle
            key={`dot-${i}`}
            r="3"
            fill="var(--mint)"
            style={{
              offsetPath: `path('${d}')`,
              animation: `flow-dot 2400ms linear ${1200 + i * 250}ms infinite`,
            }}
          />
        ))}

        {nodes.map((n) => (
          <g key={n.label}>
            <rect
              x={n.x - 26}
              y={n.y - 12}
              width="56"
              height="24"
              rx="6"
              fill="white"
              stroke="var(--border)"
            />
            <text
              x={n.x + 2}
              y={n.y + 4}
              textAnchor="middle"
              fontSize="9"
              fontFamily="ui-monospace, monospace"
              fill="var(--ink)"
            >
              {n.label}
            </text>
            <circle cx={n.x - 18} cy={n.y} r="2.5" fill="var(--electric)" />
          </g>
        ))}
      </svg>
    </div>
  );
}
