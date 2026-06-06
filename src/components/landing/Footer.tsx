import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-card/30 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <span className="font-display text-sm font-semibold tracking-tight">
          Kensho Digital Studio
        </span>
        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} — Agence Google Ads & Tracking. Paris.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-soft">
          <a href="/#contact" className="hover:text-ink">Contact</a>
          <a
            href="https://www.instagram.com/kenshodigitalstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-ink"
          >
            Instagram <span aria-hidden>↗</span>
          </a>
          <Link to="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          <Link to="/politique-confidentialite" className="hover:text-ink">Politique de confidentialité</Link>
          <Link to="/cgv" className="hover:text-ink">CGV</Link>
        </div>
      </div>
    </footer>
  );
}
