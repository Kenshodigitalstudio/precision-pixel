import { useEffect, useState } from "react";

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent",
      ].join(" ")}
    >
      <div
        className="absolute left-0 top-0 h-px bg-electric"
        style={{ width: `${progress}%`, transition: "width 120ms linear" }}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-paper font-display text-sm font-bold">
            N
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            [Nom de l'agence]
          </span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          <li><a href="#services" className="hover:text-ink transition-colors">Services</a></li>
          <li><a href="#metrics" className="hover:text-ink transition-colors">Résultats</a></li>
          <li><a href="#approche" className="hover:text-ink transition-colors">Approche</a></li>
          <li><a href="#contact" className="hover:text-ink transition-colors">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-all hover:bg-electric hover:shadow-[var(--shadow-glow)]"
        >
          Réserver un appel
          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      </nav>
    </header>
  );
}
