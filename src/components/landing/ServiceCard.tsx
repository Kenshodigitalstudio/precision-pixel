import type { ReactNode } from "react";
import { useSpotlight } from "@/hooks/use-spotlight";
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
  const spotlight = useSpotlight<HTMLElement>();
  const reveal = useReveal<HTMLDivElement>();

  return (
    <div ref={reveal} className="reveal-mask">
      <article
        ref={spotlight}
        className="service-card group flex h-full flex-col gap-7 rounded-[2rem] border border-border/60 bg-card/65 p-8 sm:p-10 backdrop-blur-xl shadow-[var(--shadow-card)]"
      >
        <header className="flex items-center justify-between">
          <span className="font-mono text-xs text-electric">{index}</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-ink-soft">{eyebrow}</span>
        </header>

        <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
          {title}
        </h3>

        <p className="text-[15px] leading-relaxed text-ink-soft">{paragraph}</p>

        <ul className="space-y-2.5 border-t border-border/60 pt-5 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-ink">
              <span
                aria-hidden
                className="mt-2 h-px w-4 flex-none bg-ink-soft/50 transition-all duration-500 group-hover:w-6 group-hover:bg-electric"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">{visual}</div>

        <a
          href="#contact"
          className="group/link inline-flex items-center gap-2 self-start text-sm font-medium text-ink"
        >
          <span className="relative">
            En savoir plus
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ink transition-all duration-500 group-hover/link:w-full" />
          </span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </a>
      </article>
    </div>
  );
}
