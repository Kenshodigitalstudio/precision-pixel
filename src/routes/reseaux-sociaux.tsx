
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Layers3,
  Target,
  Image as ImageIcon,
  CalendarCheck,
  ChartNoAxesCombined,
  Sparkles,
  ArrowRight,
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
          "Une gestion premium des réseaux sociaux : stratégie éditoriale, création de contenu, planification et optimisation. Lancement début 2027.",
      },
    ],
  }),
  component: ReseauxSociauxPage,
});

const platforms = [
  { name: "Instagram", icon: Instagram },
  { name: "TikTok", label: "♪" },
  { name: "LinkedIn", icon: Linkedin },
  { name: "Facebook", icon: Facebook },
  { name: "YouTube", icon: Youtube },
  { name: "Pinterest", label: "P" },
  { name: "Snapchat", label: "●" },
  { name: "Threads", label: "@" },
  { name: "X", label: "𝕏" },
];

const services = [
  {
    number: "01",
    title: "Stratégie éditoriale",
    description:
      "Construire une présence cohérente, avec une ligne éditoriale qui reflète votre identité et parle à la bonne audience.",
    details: [
      "Analyse de votre positionnement",
      "Définition de votre ligne éditoriale",
      "Choix des plateformes pertinentes",
    ],
    icon: Target,
  },
  {
    number: "02",
    title: "Création de contenu",
    description:
      "Donner vie à votre marque avec des contenus visuels et vidéo travaillés, pensés pour chaque plateforme.",
    details: [
      "Créations graphiques",
      "Carrousels et publications",
      "Formats vidéo et contenus courts",
    ],
    icon: ImageIcon,
  },
  {
    number: "03",
    title: "Planification & diffusion",
    description:
      "Organiser votre communication pour assurer une présence régulière, structurée et professionnelle.",
    details: [
      "Calendrier éditorial",
      "Organisation des publications",
      "Planification des contenus",
    ],
    icon: CalendarCheck,
  },
  {
    number: "04",
    title: "Suivi & optimisation",
    description:
      "Faire évoluer votre communication à partir des performances et des enseignements de chaque publication.",
    details: [
      "Analyse des performances",
      "Suivi des interactions",
      "Recommandations d'évolution",
    ],
    icon: ChartNoAxesCombined,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

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

/* FOND */

function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#F8FAFD]"
    >
      <div className="absolute -left-[20%] top-[-10%] h-[700px] w-[700px] rounded-full bg-white blur-[100px]" />
      <div className="absolute -right-[20%] top-[5%] h-[800px] w-[800px] rounded-full bg-[#D9EAFF]/75 blur-[130px]" />
      <div className="absolute left-[25%] top-[55%] h-[550px] w-[550px] rounded-full bg-[#E9F1FF]/70 blur-[130px]" />
      <div className="absolute bottom-[-20%] right-[5%] h-[600px] w-[600px] rounded-full bg-[#E2EAFE]/60 blur-[130px]" />
    </div>
  );
}

/* HERO */

function Hero() {
  return (
    <section className="relative px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-8">
        <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.19em] text-[#65748B] shadow-sm backdrop-blur-xl">
              <Sparkles size={13} className="text-[#6399D2]" />
              Kenshō Studio · Social Media
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-[700px] font-display text-[clamp(3.1rem,6vw,5.7rem)] font-light leading-[.99] tracking-[-.07em] text-[#20283A]">
              Votre marque
              <br />
              mérite d'être
              <span className="mt-1 block bg-gradient-to-r from-[#7DA8D8] via-[#4F88C8] to-[#82AFCF] bg-clip-text font-semibold italic text-transparent">
                remarquée.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[490px] text-[14px] leading-[1.9] text-[#68768B] sm:text-base">
              Une présence sociale premium, pensée pour renforcer votre image,
              créer du lien avec votre audience et soutenir vos objectifs
              business.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#approche"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#20283A] px-7 py-4 text-xs font-semibold text-white shadow-[0_14px_35px_-15px_rgba(25,40,65,.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Découvrir notre approche
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white/65 px-5 py-4 text-xs font-medium text-[#52627A] backdrop-blur-xl">
                <CalendarDays size={15} className="text-[#6399D2]" />
                Lancement début 2027
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex items-center gap-4 border-t border-[#A9BDD6]/30 pt-6">
              <div className="flex -space-x-2">
                {["#B9D2EC", "#E4D6EA", "#C7E0D8"].map((color, index) => (
                  <span
                    key={index}
                    className="grid size-8 place-items-center rounded-full border-2 border-[#F8FAFD] text-[10px] font-semibold text-[#52627A]"
                    style={{ background: color }}
                  >
                    {["S", "C", "K"][index]}
                  </span>
                ))}
              </div>
              <p className="text-[10px] leading-relaxed text-[#7D8A9D]">
                Une stratégie adaptée à votre marque.
                <br />
                Une présence pensée dans sa globalité.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Photographie principale */}
        <Reveal delay={0.12} className="relative">
          <div className="absolute inset-[-12%] rounded-full bg-[#BBD9FA]/45 blur-[100px]" />

          <div className="relative mx-auto aspect-[.92] w-full max-w-[610px] overflow-hidden rounded-[34px] border border-white/90 bg-gradient-to-br from-white via-[#E6F1FF] to-[#D7E7F9] shadow-[0_35px_100px_-45px_rgba(39,78,130,.35)]">
            <img
              src="https://cdn3.pixelcut.app/pixa_cms/media/dd0760e7-25a8-4715-8aae-adcc36a32acb_selling_point_2_1b6ffb3c.webp"
              alt="Main tenant un smartphone, support de création de contenu digital"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#DDEBFA]/65 via-transparent to-white/15" />

            <div className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.16em] text-[#536783] shadow-sm backdrop-blur-xl sm:left-7 sm:top-7">
              Social media management
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/90 bg-white/75 p-4 shadow-[0_15px_45px_-25px_rgba(35,65,110,.3)] backdrop-blur-2xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[.15em] text-[#7B8BA1]">
                    Une présence cohérente
                  </p>
                  <p className="mt-1 font-display text-lg font-medium tracking-tight text-[#263349] sm:text-xl">
                    Votre univers, partout.
                  </p>
                </div>
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#E7F0FC] text-[#548DCB]">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* BANDEAU PLATEFORMES */

function Platforms() {
  return (
    <section className="px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl border-y border-[#A9BDD6]/25 py-8">
        <p className="mb-7 text-center text-[9px] font-semibold uppercase tracking-[.22em] text-[#8794A7]">
          Une stratégie adaptée aux plateformes pertinentes pour votre marque
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
          {platforms.map((platform) => {
            const Icon = "icon" in platform ? platform.icon : null;

            return (
              <div
                key={platform.name}
                className="flex items-center gap-2 text-[#56647A] transition-colors hover:text-[#3E83C4]"
                title={platform.name}
              >
                {Icon ? (
                  <Icon size={19} strokeWidth={1.7} />
                ) : (
                  <span className="w-5 text-center text-xl font-semibold">
                    {platform.label}
                  </span>
                )}
                <span className="text-[11px] font-medium">{platform.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* APPROCHE */

function Approach() {
  return (
    <section id="approche" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <Reveal className="max-w-lg">
            <span className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#6B91BD]">
              Notre approche
            </span>

            <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] tracking-[-.055em] text-[#20283A] sm:text-5xl">
              La qualité d'une présence ne se résume pas à sa fréquence.
            </h2>

            <p className="mt-6 text-sm leading-[1.9] text-[#77849A]">
              Chaque publication participe à construire votre image. Nous
              pensons votre communication comme un ensemble : une stratégie,
              une direction créative et une diffusion cohérente.
            </p>

            <a
              href="#expertises"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold text-[#426F9F] transition-colors hover:text-[#20283A]"
            >
              Explorer nos expertises
              <ArrowDown size={14} />
            </a>
          </Reveal>

          <div id="expertises" className="space-y-0">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number} delay={index * 0.06}>
                  <article className="group grid gap-4 border-t border-[#A9BDD6]/35 py-7 sm:grid-cols-[55px_1fr_auto] sm:items-start sm:gap-6">
                    <span className="font-mono text-[10px] text-[#9AA8B9]">
                      {service.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <Icon
                          size={19}
                          strokeWidth={1.6}
                          className="text-[#6797C8]"
                        />
                        <h3 className="font-display text-xl font-medium tracking-tight text-[#29364A]">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-lg text-xs leading-[1.8] text-[#77849A] sm:text-sm">
                        {service.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                        {service.details.map((detail) => (
                          <span
                            key={detail}
                            className="inline-flex items-center gap-2 text-[10px] text-[#7C899C]"
                          >
                            <span className="size-1 rounded-full bg-[#83AED8]" />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden size-9 place-items-center rounded-full border border-[#B8CDE4]/50 text-[#7899BB] transition-all group-hover:translate-x-1 group-hover:bg-white sm:grid">
                      <ArrowUpRight size={15} />
                    </div>
                  </article>
                </Reveal>
              );
            })}
            <div className="border-t border-[#A9BDD6]/35" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* UNIVERS SOCIAL */

function SocialComposition() {
  const images = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85",
  ];

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#6B91BD]">
              Direction créative
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-light leading-tight tracking-[-.05em] text-[#20283A] sm:text-4xl">
              Une identité reconnaissable.
              <span className="block text-[#7197C1]">
                Des contenus qui lui ressemblent.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-[1.8] text-[#77849A]">
            L'univers graphique, le ton et les formats sont pensés pour
            prolonger l'identité de votre entreprise sur chaque plateforme.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {images.map((image, index) => (
            <Reveal key={image} delay={index * 0.08}>
              <div
                className={`group relative overflow-hidden rounded-[22px] border border-white/90 bg-white shadow-[0_20px_55px_-35px_rgba(35,65,110,.3)] ${
                  index % 2 === 1 ? "mt-8 sm:mt-12" : ""
                }`}
              >
                <div className="aspect-[.78] overflow-hidden">
                  <img
                    src={image}
                    alt="Exemple d'univers créatif pour les réseaux sociaux"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#18253B]/65 to-transparent p-4 pt-12">
                  <span className="text-[9px] font-medium uppercase tracking-[.16em] text-white/90">
                    {["Identité", "Éditorial", "Créativité", "Contenu"][index]}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* LANCEMENT */

function Launch() {
  return (
    <section id="lancement" className="px-5 pb-28 pt-20 sm:px-8 sm:pb-36">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[34px] border border-white/90 bg-gradient-to-br from-white/90 via-[#EFF6FF]/90 to-[#DCEBFC]/80 px-7 py-14 shadow-[0_30px_90px_-45px_rgba(40,80,135,.35)] sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -right-24 -top-32 size-[420px] rounded-full bg-white/90 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 size-[400px] rounded-full bg-[#AFCFF2]/45 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/75 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#5F7EA4] shadow-sm backdrop-blur-xl">
              <CalendarDays size={13} />
              Ouverture début 2027
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
              href={`mailto:kenshodigitalstudio@gmail.com?subject=${encodeURIComponent("Intérêt pour le lancement Social Media — Kenshō Studio")}&body=${encodeURIComponent("Bonjour Kenshō Studio,\n\nJe souhaite manifester mon intérêt pour votre service premium de gestion des réseaux sociaux prévu début 2027.\n\nEntreprise :\nSite internet :\nPlateformes concernées :\nObjectifs :\n\nMerci !")}`}
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
      <Atmosphere />
      <Nav />

      <Hero />
      <Platforms />
      <Approach />
      <SocialComposition />
      <Launch />

      <Footer />
    </main>
  );
}
