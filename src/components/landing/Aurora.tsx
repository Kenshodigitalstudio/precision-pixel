export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="aurora-blob"
        style={{
          width: 720,
          height: 720,
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--electric) 70%, white), transparent 70%)",
          animation: "aurora-drift-1 22s ease-in-out infinite",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: 640,
          height: 640,
          top: "10%",
          right: "-15%",
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--mint) 75%, white), transparent 70%)",
          animation: "aurora-drift-2 26s ease-in-out infinite",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: 560,
          height: 560,
          bottom: "-10%",
          left: "30%",
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--solar) 70%, white), transparent 70%)",
          animation: "aurora-drift-3 30s ease-in-out infinite",
        }}
      />
      <div className="noise" />
    </div>
  );
}
