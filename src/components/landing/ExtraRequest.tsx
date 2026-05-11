import { useReveal } from "@/hooks/use-reveal";
import { Sparkles } from "./Sparkles";

const EMAIL = "kenshodigitalstudio@gmail.com";

export function ExtraRequest() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="besoin" className="relative overflow-hidden py-16 sm:py-20">
      <Sparkles variant="default" />

      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-solar/30 blur-3xl" />
      </div>

      <div ref={ref} className="reveal mx-auto max-w-2xl px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
          Sur-mesure
        </span>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
          Un besoin spécifique&nbsp;?
          <br />
          Envoyez-nous votre besoin.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
          Audit avancé, refonte du tracking, accompagnement long-terme&nbsp;? Décrivez-nous
          votre contexte, on revient vers vous rapidement.
        </p>
        <a
          href={`mailto:${EMAIL}?subject=Demande%20extra`}
          className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/30 px-6 py-3.5 text-sm font-semibold tracking-wide text-ink shadow-[0_8px_30px_-8px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.25)]"
        >
          Envoyer un email
          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      </div>
    </section>
  );
}
