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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-paper border-b-2 border-ink" : "bg-transparent",
      ].join(" ")}
    >
      <div
        className="absolute left-0 bottom-0 h-1 bg-electric"
        style={{ width: `${progress}%`, transition: "width 120ms linear" }}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center border-2 border-ink bg-solar font-display text-sm uppercase text-ink">
            N
          </span>
          <span className="font-display text-sm uppercase tracking-tight">
            [Nom de l'agence]
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wider md:flex">
          <li><a href="#services" className="hover:text-electric transition-colors">Services</a></li>
          <li><a href="#metrics" className="hover:text-electric transition-colors">Résultats</a></li>
          <li><a href="#approche" className="hover:text-electric transition-colors">Approche</a></li>
          <li><a href="#contact" className="hover:text-electric transition-colors">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-paper transition-all hover:bg-electric hover:text-ink"
        >
          Rendez-vous
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </nav>
    </header>
  );
}
