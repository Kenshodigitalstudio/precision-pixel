export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Brutalist grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Solar pop block */}
      <div
        className="absolute -right-20 top-32 hidden h-72 w-72 border-2 border-ink bg-solar md:block"
        style={{ animation: "aurora-drift-1 16s ease-in-out infinite" }}
      />
      <div
        className="absolute -left-10 bottom-10 hidden h-40 w-40 border-2 border-ink bg-electric md:block"
        style={{ animation: "aurora-drift-2 20s ease-in-out infinite" }}
      />
    </div>
  );
}
