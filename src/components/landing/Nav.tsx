import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import kenshoMark from "@/assets/kensho-mark.png";

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
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={kenshoMark}
            alt=""
            aria-hidden
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain shrink-0"
          />
          <span className="font-display text-base font-light tracking-[-0.02em] text-ink">
            Kenshō <span className="font-extralight text-ink-soft">Digital Studio</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          <li><a href="#services" className="hover:text-ink transition-colors">Services</a></li>
          <li><a href="#metrics" className="hover:text-ink transition-colors">Résultats</a></li>
          <li><a href="#approche" className="hover:text-ink transition-colors">Approche</a></li>
          <li><a href="#contact" className="hover:text-ink transition-colors">Contact</a></li>
        </ul>
        <a
          href="https://calendar.app.google/qg7jgpvovovLnEoN9"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm font-semibold text-ink shadow-[0_6px_20px_-6px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/50"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky/40 via-electric/30 to-solar/40 opacity-90"
          />
          Rendez-vous
          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      </nav>
    </header>
  );
}
