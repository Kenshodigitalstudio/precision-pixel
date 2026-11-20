
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Target,
  Image as ImageIcon,
  CalendarCheck,
  ChartNoAxesCombined,
  Sparkles,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/reseaux-sociaux")({
  head: () => ({
    meta: [
      { title: "Gestion des réseaux sociaux | Kenshō Studio" },
      {
        name: "description",
        content:
          "Une gestion premium de vos réseaux sociaux : stratégie, création de contenu, planification et optimisation. Lancement début 2027.",
      },
    ],
  }),
  component: ReseauxSociauxPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

const platforms = [
  { name: "Instagram", icon: Instagram },
  { name: "TikTok", label: "♪" },
  { name: "Facebook", icon: Facebook },
  { name: "LinkedIn", icon: Linkedin },
  { name: "YouTube", icon: Youtube },
  { name: "Pinterest", label: "P" },
  { name: "Snapchat", label: "●" },
  { name: "Threads", label: "@" },
  { name: "X", label: "𝕏" },
];

const services = [
  {
    number: "01",
    title: "Stratégie sur-mesure",
    description:
      "Une ligne éditoriale claire, alignée avec votre image de marque, votre audience et vos objectifs.",
    details:
      "Positionnement, analyse de votre audience, choix des plateformes et stratégie éditoriale.",
    icon: Target,
    accent: "#6598D2",
  },
  {
    number: "02",
    title: "Création de contenu",
    description:
      "Des visuels et vidéos premium, créatifs et impactants, adaptés à chaque plateforme.",
    details:
      "Publications, carrousels, Reels, formats courts et direction créative.",
    icon: ImageIcon,
    accent: "#9A8BD2",
  },
  {
    number: "03",
    title: "Planification & diffusion",
    description:
      "Un calendrier éditorial organisé pour construire une présence régulière et cohérente.",
    details:
      "Organisation des contenus, calendrier de publication et planification.",
    icon: CalendarCheck,
    accent: "#68A98E",
  },
  {
    number: "04",
    title: "Suivi & optimisation",
    description:
      "Une analyse des performances et des ajustements continus pour faire progresser votre présence.",
    details:
      "Analyse des interactions, suivi des indicateurs et recommandations.",
    icon: ChartNoAxesCombined,
    accent: "#C18DB6",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#F8FAFD]"
    >
      <div className="absolute -left-[25%] -top-[15%] size-[750px] rounded-full bg-white blur-[120px]" />
      <div className="absolute -right-[25%] top-[5%] size-[850px] rounded-full bg-[#D6E8FF]/75 blur-[140px]" />
      <div className="absolute left-[25%] top-[45%] size-[650px] rounded-full bg-[#E7F0FF]/65 blur-[130px]" />
      <div className="absolute -bottom-[25%] right-[5%] size-[700px] rounded-full bg-[#E5EAFE]/65 blur-[130px]" />
    </div>
  );
}

/* HERO */

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-32 sm:px-8 sm:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[450px] w-[850px] -translate-x-1/2 rounded-full bg-[#D8E9FF]/55 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/65 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[.18em] text-[#526681] shadow-[0_10px_35px_-20px_rgba(35,65,110,.35)] backdrop-blur-xl sm:text-[10px]">
              <Sparkles size={14} className="text-[#6598D2]" />
              Gestion des réseaux sociaux
              <span className="text-[#9BBDE5]">·</span>
              Service premium
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.8rem,6vw,5.5rem)] font-light leading-[1.02] tracking-[-.065em] text-[#20283A]">
              Votre marque mérite
              <span className="block">
                d'être{" "}
                <span className="bg-gradient-to-r from-[#80A9DA] via-[#4C85C8] to-[#83B9D8] bg-clip-text font-semibold italic text-transparent">
                  remarquée.
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.85] text-[#68778D] sm:text-base">
              Une présence sociale premium, pensée pour renforcer votre image,
              engager votre audience et soutenir vos objectifs business.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#expertises"
                className="group inline-flex items-center gap-3 rounded-full bg-[#20283A] px-7 py-3.5 text-xs font-semibold text-white shadow-[0_15px_35px_-15px_rgba(25,40,65,.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Découvrir notre approche
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/70 px-6 py-3.5 text-xs font-semibold text-[#455873] shadow-sm backdrop-blur-xl">
                <CalendarDays size={15} className="text-[#6399D2]" />
                Lancement début 2027
              </span>
            </div>
          </Reveal>
        </div>

        {/* VISUEL CENTRAL PHOTORÉALISTE */}
        <Reveal delay={0.12} className="relative mx-auto mt-8 max-w-6xl sm:mt-12">
          <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[#A9D0FA]/40 blur-[100px]" />

          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[38px]">
            <img
              src="/reseaux-sociaux-hero.png"
              alt="Une main tient un smartphone présentant une interface de réseaux sociaux, entouré d'éléments de stratégie et de planification"
              className="relative z-10 block h-auto w-full object-contain"
              fetchPriority="high"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-5 flex flex-col items-center gap-2 text-center">
            <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#8493A8]">
              Une présence pensée dans sa globalité
            </span>
            <ArrowDown size={15} className="animate-bounce text-[#82A9D4]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* PLATEFORMES */

function Platforms() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl border-y border-[#A8BDD7]/30 py-9">
        <Reveal>
          <p className="mb-7 text-center text-[9px] font-semibold uppercase tracking-[.2em] text-[#8795A8]">
            Une stratégie adaptée aux plateformes qui comptent
          </p>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-11">
          {platforms.map((platform, index) => {
            const Icon = "icon" in platform ? platform.icon : null;

            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.045, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 text-[#5D6B80] transition-colors hover:text-[#397EBE]"
                title={platform.name}
              >
                {Icon ? (
                  <Icon size={19} strokeWidth={1.7} />
                ) : (
                  <span className="w-5 text-center text-xl font-semibold">
                    {platform.label}
                  </span>
                )}
                <span className="text-[10px] font-medium sm:text-[11px]">
                  {platform.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* EXPERTISES */

function Expertise() {
  return (
    <section
      id="expertises"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 size-[450px] rounded-full bg-[#E6EDFF]/60 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[450px] rounded-full bg-[#D7E9FC]/65 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/65 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#627D9F] shadow-sm backdrop-blur-xl">
            <Sparkles size={13} className="text-[#679CD1]" />
            Notre approche
          </span>

          <h2 className="mt-6 font-display text-[clamp(2.3rem,4.5vw,4rem)] font-light leading-[1.08] tracking-[-.055em] text-[#20283A]">
            Une gestion complète et stratégique
            <span className="mt-1 block bg-gradient-to-r from-[#83AADB] via-[#548BCB] to-[#83B9D8] bg-clip-text font-semibold italic text-transparent">
              de vos réseaux sociaux.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-[1.85] text-[#77849A]">
            Bien plus que des publications : une approche globale pour
            construire une présence digitale cohérente, reconnaissable et
            durable.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.number} delay={index * 0.07}>
                <article className="group relative h-full overflow-hidden rounded-[25px] border border-white/90 bg-white/55 p-6 shadow-[0_20px_55px_-35px_rgba(35,65,110,.3)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/85 hover:shadow-[0_25px_60px_-30px_rgba(35,65,110,.35)]">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                    style={{ background: service.accent }}
                  />

                  <div className="relative flex items-center justify-between">
                    <div
                      className="grid size-12 place-items-center rounded-2xl border border-white bg-white/80 shadow-sm"
                      style={{ color: service.accent }}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-[10px] text-[#9BA7B7]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-lg font-semibold tracking-tight text-[#29364A]">
                    {service.title}
                  </h3>

                  <p className="relative mt-3 text-xs leading-[1.8] text-[#758197]">
                    {service.description}
                  </p>

                  <div className="relative mt-5 border-t border-[#A8B8CE]/25 pt-4">
                    <p className="text-[10px] leading-[1.75] text-[#8591A3]">
                      {service.details}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* POSITIONNEMENT */

function Positioning() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-20">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/90 bg-white/55 px-7 py-12 shadow-[0_25px_70px_-40px_rgba(35,65,110,.3)] backdrop-blur-2xl sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full bg-[#C8E1FC]/55 blur-[100px]" />

          <div className="relative grid gap-10 md:grid-cols-[1fr_.85fr] md:items-center">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#6792C1]">
                L'expérience Kenshō
              </span>

              <h2 className="mt-5 max-w-xl font-display text-3xl font-light leading-[1.15] tracking-[-.05em] text-[#20283A] sm:text-4xl">
                Votre communication mérite une vraie direction.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-[1.9] text-[#758197]">
                Chaque contenu doit avoir une intention. Chaque plateforme
                doit servir un objectif. Nous construisons une présence qui
                respecte votre identité et donne de la cohérence à votre
                communication.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Une identité de marque respectée",
                "Une stratégie adaptée à votre audience",
                "Des contenus pensés pour chaque plateforme",
                "Une vision globale de votre communication",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/65 px-4 py-3.5 shadow-sm"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#E4F0FF] text-[#548CCB]">
                    <span className="text-xs font-semibold">✓</span>
                  </span>
                  <span className="text-xs font-medium text-[#46536A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* LANCEMENT */

function Launch() {
  return (
    <section
      id="lancement"
      className="px-5 pb-24 pt-20 sm:px-8 sm:pb-32"
    >
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[34px] border border-white/90 bg-gradient-to-br from-white/90 via-[#EFF6FF]/90 to-[#DCEBFC]/85 px-7 py-14 shadow-[0_30px_90px_-45px_rgba(40,80,135,.35)] sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -right-24 -top-32 size-[420px] rounded-full bg-white/90 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 size-[400px] rounded-full bg-[#AFCFF2]/45 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#5F7EA4] shadow-sm">
              <CalendarDays size={13} />
              Lancement début 2027
            </span>

            <h2 className="mt-7 font-display text-3xl font-light leading-[1.1] tracking-[-.055em] text-[#20283A] sm:text-5xl">
              Votre prochaine présence digitale commence ici.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-[1.9] text-[#718097]">
              Notre service premium de gestion des réseaux sociaux sera
              disponible début 2027. Vous pouvez dès maintenant nous présenter
              votre projet et manifester votre intérêt pour son lancement.
            </p>

            <a
              href={`mailto:kenshodigitalstudio@gmail.com?subject=${encodeURIComponent("Intérêt — Gestion des réseaux sociaux Kenshō Studio")}&body=${encodeURIComponent("Bonjour Kenshō Studio,\n\nJe souhaite manifester mon intérêt pour votre service premium de gestion des réseaux sociaux prévu début 2027.\n\nEntreprise :\nSite internet :\nPlateformes concernées :\nObjectifs :\n\nMerci !")}`}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#20283A] px-7 py-4 text-xs font-semibold text-white shadow-[0_15px_35px_-15px_rgba(25,40,65,.5)] transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Manifester mon intérêt
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <p className="mt-4 text-[10px] text-[#8492A7]">
              Service non disponible avant son lancement début 2027.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* PAGE */

function ReseauxSociauxPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#F8FAFD] text-[#20283A]">
      <Background />
      <Nav />

      <Hero />
      <Platforms />
      <Expertise />
      <Positioning />
      <Launch />

      <Footer />
    </main>
  );
}
