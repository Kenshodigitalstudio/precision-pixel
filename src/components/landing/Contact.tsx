import { useReveal } from "@/hooks/use-reveal";

const CAL_URL = "https://calendar.app.google/qg7jgpvovovLnEoN9";
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
    <section id="contact" className="relative py-16 sm:py-20">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            05 — Réserver
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Choisissez votre service.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            Deux options, du plus rapide au plus structurant. Réservation immédiate en ligne.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {offers.map((o) => (
            <a
              key={o.title}
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card group flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
            >
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
                  Réserver <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 border-t border-border/60 pt-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            06 — Rejoignez-nous
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
