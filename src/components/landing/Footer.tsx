export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-card/30 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-paper font-display text-sm font-bold">
            K
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Kensho Digital Studio
          </span>
        </div>
        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} — Agence Google Ads & Tracking. Paris.
        </p>
        <div className="flex items-center gap-6 text-xs text-ink-soft">
          <a href="#contact" className="hover:text-ink">Contact</a>
          <a href="#" className="hover:text-ink">Mentions légales</a>
          <a href="#" className="hover:text-ink">RGPD</a>
        </div>
      </div>
    </footer>
  );
}
