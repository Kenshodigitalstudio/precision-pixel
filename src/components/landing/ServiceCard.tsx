import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  paragraph: string;
  bullets: string[];
  visual: ReactNode;
};

export function ServiceCard({ index, eyebrow, title, paragraph, bullets, visual }: Props) {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <div ref={reveal} className="reveal-mask">
      <article className="service-card group relative flex h-full flex-col gap-6 p-7 sm:p-9">
        <div className="card-accent-bar" />

        <header className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink">
            [ {index} ] {eyebrow}
          </span>
          <span className="inline-flex h-7 items-center border-2 border-ink bg-paper px-2 font-mono text-[10px] font-medium uppercase tracking-widest text-ink transition-colors group-hover:bg-ink group-hover:text-paper">
            ● Live
          </span>
        </header>

        <h3 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] uppercase leading-[0.95] tracking-tight text-ink">
          {title}
        </h3>

        <p className="text-[15px] leading-relaxed text-ink-soft">{paragraph}</p>

        <ul className="space-y-2.5 border-t-2 border-ink pt-5 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 font-medium text-ink">
              <span aria-hidden className="mt-2 h-2 w-2 flex-none bg-electric transition-colors group-hover:bg-ink" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">{visual}</div>

        <Link
          to="/reservation"
          className="group/cta inline-flex items-center justify-between gap-3 border-2 border-ink bg-ink px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-paper transition-all hover:bg-electric hover:text-ink"
        >
          <span>Prendre rendez-vous</span>
          <span className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
        </Link>
      </article>
    </div>
  );
}
