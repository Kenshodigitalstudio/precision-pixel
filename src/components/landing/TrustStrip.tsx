import { useReveal } from "@/hooks/use-reveal";

export function TrustStrip() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative border-y border-border/60 bg-card/30 py-16 backdrop-blur-sm">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-6 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-electric">
          Kenshō Digital Studio
        </span>
        <h2 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
          La vision de l'essentiel.
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
          Le marketing digital est souvent un brouillard technique.
          Notre rôle&nbsp;? Apporter le <em className="not-italic font-semibold text-ink">Kenshō</em> — l'illumination — à votre structure.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
          Spécialisés dans l'accompagnement stratégique et l'implémentation technique (TAG),
          nous aidons les entrepreneurs à y voir clair. Pas de gestion de compte à rallonge,
          juste de l'expertise pure&nbsp;:
        </p>
        <ul className="mt-6 flex flex-col items-center gap-3 text-[15px] text-ink">
          <li>
            <span className="font-semibold">Audit Flash (30 min)</span>{" "}
            <span className="text-ink-soft">— pour débloquer votre stratégie.</span>
          </li>
          <li>
            <span className="font-semibold">Accompagnement TAG</span>{" "}
            <span className="text-ink-soft">— pour une mesure précise de vos performances.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
