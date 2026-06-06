import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Sparkles } from "./Sparkles";

const EMAIL = "kenshodigitalstudio@gmail.com";

const offers = [
  {
    tag: "Audit Flash",
    title: "RDV 30 min — Audit & coaching Google Ads",
    desc: "Un appel Google Meet de 30 minutes pour passer votre compte au crible et repartir avec des actions concrètes.",
    price: "150 €",
    gradient: "from-sky via-electric to-electric-soft",
    icon: "📞",
    iconBg: "bg-gradient-to-br from-sky via-electric to-electric-soft",
  },
  {
    tag: "Tracking",
    title: "Installation de tags & tracking",
    desc: "Google Tag, conversions Ads, GA4, événements clés. Une donnée propre dès le premier clic.",
    price: "100 €",
    gradient: "from-mint via-emerald-400 to-emerald-600",
    icon: "⚙️",
    iconBg: "bg-gradient-to-br from-mint via-emerald-400 to-emerald-600",
  },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
      <Sparkles variant="dense" />
      <div ref={ref} className="reveal mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            04 — Réserver
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Choisissez votre service.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            Deux options, du plus rapide au plus structurant. Réservation immédiate en ligne.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {offers.map((o, i) => (
            <Link
              key={o.title}
              to="/reservation"
              className={`service-card group relative flex flex-col gap-4 p-7 text-left sm:flex-row sm:items-center sm:gap-6 sm:p-8 ${
                i === 0 ? "ring-2 ring-blue-400/50" : ""
              }`}
            >
              {i === 0 && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 via-solar to-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-[0_8px_22px_-8px_rgba(251,191,36,0.7)]">
                  ⭐ Recommandé
                </span>
              )}
              <div
                className={`grid h-14 w-14 flex-none place-items-center rounded-full ${o.iconBg} text-2xl shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.05)]`}
                aria-hidden
              >
                {o.icon}
              </div>
              <div className="flex-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                  {o.tag}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-ink">
                  {o.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{o.desc}</p>
              </div>
              <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                <span
                  className={`font-display text-3xl font-extrabold tracking-tight bg-gradient-to-br ${o.gradient} bg-clip-text text-transparent`}
                >
                  {o.price}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">
                  Prendre rendez-vous <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 border-t border-border/60 pt-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            05 — Rejoignez-nous
          </span>
          <h3 className="mt-3 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            Voulez-vous rejoindre nos experts&nbsp;?
          </h3>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Vous êtes spécialiste Google Ads ou tracking&nbsp;? Écrivez-nous, on regarde votre profil
            avec attention.
          </p>
          <a
            href={`mailto:${EMAIL}?subject=Candidature%20Kensh%C5%8D%20Digital%20Studio`}
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/30 px-6 py-3.5 text-sm font-semibold tracking-wide text-ink shadow-[0_8px_30px_-8px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.25)]"
          >
            {EMAIL}
            <span className="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
