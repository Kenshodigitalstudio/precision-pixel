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
          <Link to="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
          <Link to="/politique-confidentialite" className="hover:text-ink">Politique de confidentialité</Link>
          <Link to="/cgv" className="hover:text-ink">CGV</Link>
          
            href="https://www.instagram.com/kenshodigitalstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-ink transition-colors group"
          >
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-border/60 bg-white/20 backdrop-blur-sm group-hover:bg-white/40 transition-all group-hover:border-pink-400/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-pink-500 transition-colors">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            @kenshodigitalstudio
          </a>
        </div>
      </div>
    </footer>
  );
}
