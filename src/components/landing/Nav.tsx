import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";


export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl bg-paper/70 border-b border-border" : "bg-transparent",
      ].join(" ")}
    >
      <div
        className="absolute left-0 bottom-0 h-px bg-ink/40"
        style={{ width: `${progress}%`, transition: "width 120ms linear" }}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="font-display text-base font-light tracking-[-0.02em] text-ink">
            Kenshō <span className="font-extralight text-ink-soft">Digital Studio</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          <li><Link to="/services/google-ads" className="hover:text-ink transition-colors">VOTRE ENTREPRISE</Link></li>
          <li><Link to="/notre-equipe" className="hover:text-ink transition-colors">Notre équipe</Link></li>
        </ul>
        <Link
          to="/reservation"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm font-semibold text-ink shadow-[0_6px_20px_-6px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/50"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky/40 via-electric/30 to-solar/40 opacity-90"
          />
          Prendre rendez-vous
          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
        </Link>
      </nav>
    </header>
  );
}
