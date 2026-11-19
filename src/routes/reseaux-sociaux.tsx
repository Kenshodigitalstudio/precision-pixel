
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/reseaux-sociaux")({
  head: () => ({
    meta: [
      { title: "Social Media & Acquisition — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Stratégie digitale, création de contenu et acquisition. Développez votre présence avec Kenshō Studio.",
      },
    ],
  }),
  component: ReseauxSociauxPage,
});

const platforms = [
  {
    name: "Instagram",
    slug: "instagram",
    color: "#D62976",
    gradient: "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf)",
    category: "IMAGE & COMMUNAUTÉ",
    subtitle: "Votre marque mérite une image forte.",
    description:
      "Nous construisons une identité visuelle reconnaissable et une présence éditoriale cohérente pour transformer votre audience en communauté.",
    benefits: [
      "Une direction artistique cohérente avec votre marque",
      "Des Reels et Stories pensés pour capter l'attention",
      "Des carrousels qui valorisent votre expertise",
      "Une stratégie éditoriale pour fidéliser votre communauté",
    ],
    stat: "L'image de marque",
  },
  {
    name: "TikTok",
    slug: "tiktok",
    color: "#111111",
    gradient: "linear-gradient(135deg,#25F4EE,#111111 50%,#FE2C55)",
    category: "VIDÉO & CRÉATIVITÉ",
    subtitle: "Captez l'attention. Marquez les esprits.",
    description:
      "Nous imaginons des contenus vidéo qui respectent les codes de TikTok, mettent votre marque en scène et développent votre visibilité.",
    benefits: [
      "Des concepts créatifs adaptés à votre activité",
      "Des vidéos courtes pensées pour retenir l'attention",
      "Une veille des tendances pertinente pour votre marque",
      "Une stratégie de contenu orientée visibilité",
    ],
    stat: "La découverte",
  },
  {
    name: "Facebook",
    slug: "facebook",
    color: "#1877F2",
    gradient: "linear-gradient(135deg,#1877F2,#54A3FF)",
    category: "COMMUNAUTÉ & VISIBILITÉ",
    subtitle: "Restez proche de votre audience.",
    description:
      "Nous entretenons une présence régulière et professionnelle pour renforcer votre proximité avec vos clients et votre communauté.",
    benefits: [
      "Une page professionnelle entretenue et valorisée",
      "Des publications adaptées à votre audience",
      "Une animation régulière de votre communauté",
      "Une communication locale plus cohérente",
    ],
    stat: "La proximité",
  },
  {
    name: "LinkedIn",
    slug: "linkedin",
    color: "#0A66C2",
    gradient: "linear-gradient(135deg,#0A66C2,#56B4F9)",
    category: "B2B & EXPERTISE",
    subtitle: "Faites reconnaître votre expertise.",
    description:
      "Nous développons votre présence professionnelle avec une ligne éditoriale claire, des contenus experts et une prise de parole qui inspire confiance.",
    benefits: [
      "Une stratégie éditoriale pensée pour le B2B",
      "Des publications qui valorisent votre savoir-faire",
      "Un positionnement professionnel plus affirmé",
      "Une communication qui renforce votre crédibilité",
    ],
    stat: "L'autorité",
  },
  {
    name: "YouTube",
    slug: "youtube",
    color: "#FF0033",
    gradient: "linear-gradient(135deg,#FF0033,#FF6868)",
    category: "VIDÉO & CONTENU",
    subtitle: "Donnez de la profondeur à vos idées.",
    description:
      "Nous vous aidons à construire une présence vidéo durable pour présenter votre expertise, développer votre notoriété et créer du contenu à forte valeur.",
    benefits: [
      "Une stratégie de chaîne alignée avec vos objectifs",
      "Des formats vidéo adaptés à votre audience",
      "Des Shorts pour multiplier les points de contact",
      "Une identité visuelle cohérente sur vos contenus",
    ],
    stat: "Le contenu durable",
  },
  {
    name: "Pinterest",
    slug: "pinterest",
    color: "#BD081C",
    gradient: "linear-gradient(135deg,#BD081C,#F04D62)",
    category: "INSPIRATION & TRAFIC",
    subtitle: "Transformez l'inspiration en visites.",
    description:
      "Nous créons des contenus visuels qui valorisent vos produits et services, tout en travaillant leur potentiel de découverte et de trafic.",
    benefits: [
      "Des visuels conçus pour inspirer et attirer",
      "Des épingles optimisées pour la découverte",
      "Une organisation claire de vos tableaux",
      "Une stratégie pour générer du trafic vers votre site",
    ],
    stat: "La découverte",
  },
  {
    name: "Snapchat",
    slug: "snapchat",
    color: "#D6C900",
    gradient: "linear-gradient(135deg,#FFFC00,#E8D900)",
    category: "PROXIMITÉ & INSTANTANÉ",
    subtitle: "Communiquez autrement.",
    description:
      "Nous adaptons votre communication aux formats verticaux et spontanés de Snapchat pour toucher votre audience avec des contenus immersifs.",
    benefits: [
      "Des créations adaptées aux usages mobiles",
      "Des Stories pensées pour votre cible",
      "Des formats publicitaires créatifs",
      "Une communication plus directe et spontanée",
    ],
    stat: "L'instantané",
  },
  {
    name: "X",
    slug: "x",
    color: "#111111",
    gradient: "linear-gradient(135deg,#111111,#454545)",
    category: "ACTUALITÉ & CONVERSATION",
    subtitle: "Prenez part à la conversation.",
    description:
      "Nous structurons votre prise de parole pour développer votre visibilité, partager vos actualités et installer votre marque dans les conversations de votre secteur.",
    benefits: [
      "Une ligne éditoriale claire et identifiable",
      "Des publications régulières et pertinentes",
      "Une veille des sujets de votre secteur",
      "Une présence active dans les conversations",
    ],
    stat: "La conversation",
  },
  {
    name: "Threads",
    slug: "threads",
    color: "#333333",
    gradient: "linear-gradient(135deg,#111111,#666666)",
    category: "ÉCHANGE & COMMUNAUTÉ",
    subtitle: "Donnez une voix à votre marque.",
    description:
      "Nous développons une communication plus humaine et conversationnelle pour créer des échanges authentiques avec votre audience.",
    benefits: [
      "Une prise de parole naturelle et cohérente",
      "Des contenus adaptés aux conversations",
      "Une animation de communauté régulière",
      "Une identité éditoriale reconnaissable",
    ],
    stat: "L'authenticité",
  },
  {
    name: "Google Ads",
    slug: "googleads",
    color: "#4285F4",
    gradient: "linear-gradient(135deg,#4285F4,#34A853 38%,#FBBC05 70%,#EA4335)",
    category: "PUBLICITÉ & ACQUISITION",
    subtitle: "Soyez visible au bon moment.",
    description:
      "Nos experts pilotent vos campagnes publicitaires pour capter une demande qualifiée, générer des prospects et optimiser vos investissements.",
    benefits: [
      "Une stratégie d'acquisition adaptée à vos objectifs",
      "Des campagnes Search et Performance Max structurées",
      "Une optimisation continue des budgets et enchères",
      "Un suivi des conversions et des performances",
    ],
    stat: "L'acquisition",
  },
];

function BrandLogo({
  slug,
  name,
  white = false,
}: {
  slug: string;
  name: string;
  white?: boolean;
}) {
  const iconUrl =
    slug === "googleads"
      ? "https://cdn.simpleicons.org/googleads"
      : `https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${slug}.svg`;

  return (
    <img
      src={iconUrl}
      alt={`Logo ${name}`}
      loading="lazy"
      className="h-10 w-10 object-contain sm:h-12 sm:w-12"
      style={{
        filter: white ? "brightness(0) invert(1)" : "none",
      }}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

/* Défilement des logos dans de petites cartes vitrées */
function LogoArc() {
  const repeatedPlatforms = [...platforms, ...platforms];

  return (
    <div className="relative mx-auto mt-2 h-[105px] w-full max-w-6xl overflow-hidden sm:h-[125px]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

      <motion.div
        className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 items-center gap-4 sm:gap-6"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 32,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeatedPlatforms.map((platform, index) => (
          <div
            key={`${platform.slug}-${index}`}
            className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-white/80 bg-white/55 shadow-[0_10px_30px_-15px_rgba(30,20,50,.25)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:scale-105 sm:h-[82px] sm:w-[82px]"
          >
            <BrandLogo slug={platform.slug} name={platform.name} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* Cartes de présentation des plateformes */
function PlatformPanel({
  platform,
  index,
}: {
  platform: (typeof platforms)[number];
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <section className="social-stage relative flex min-h-[680px] items-center px-5 py-16 sm:px-10">
      <motion.article
        initial={{ opacity: 0, x: reverse ? 90 : -90, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="social-panel relative mx-auto grid w-full max-w-6xl items-center gap-10 overflow-hidden rounded-[2.5rem] p-7 sm:p-12 lg:grid-cols-2 lg:p-16"
      >
        <div
          className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full blur-[110px]"
          style={{ background: platform.color, opacity: 0.15 }}
        />

        <div className={`relative z-10 ${reverse ? "lg:order-2" : ""}`}>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-ink/25" />
            <span className="text-[10px] font-semibold tracking-[.2em] text-ink-soft">
              {platform.category}
            </span>
          </div>

          <div className="mb-7 flex size-16 items-center justify-center rounded-2xl border border-white/70 bg-white/60 shadow-lg backdrop-blur-xl">
            <BrandLogo slug={platform.slug} name={platform.name} />
          </div>

          <h2 className="font-display text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">
            {platform.name}
          </h2>

          <h3
            className="mt-4 max-w-lg text-xl font-semibold leading-snug"
            style={{ color: platform.color }}
          >
            {platform.subtitle}
          </h3>

          <p className="mt-6 max-w-xl text-sm leading-8 text-ink-soft">
            {platform.description}
          </p>

          <div className="mt-8 space-y-4">
            {platform.benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-3 text-sm leading-6 text-ink"
              >
                <span
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white"
                  style={{ background: platform.color }}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                {benefit}
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className={`relative flex min-h-[330px] items-center justify-center lg:min-h-[430px] ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <div
            className="absolute size-72 rounded-full blur-[85px]"
            style={{ background: platform.color, opacity: 0.2 }}
          />

          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [-2, 2, -2],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 8 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="social-brand-orb relative flex size-64 flex-col items-center justify-center rounded-[3rem] sm:size-80"
            style={{
              background: platform.gradient,
              boxShadow: `0 35px 90px -25px ${platform.color}65, inset 0 3px 15px rgba(255,255,255,.6), inset 0 -20px 40px rgba(0,0,0,.15)`,
            }}
          >
            <div className="absolute inset-3 rounded-[2.5rem] border border-white/35" />
            <div className="absolute left-[12%] top-[8%] h-24 w-36 rotate-[-25deg] rounded-full bg-white/30 blur-2xl" />

            <div className="relative z-10 flex size-24 items-center justify-center rounded-[2rem] border border-white/50 bg-white/20 shadow-xl backdrop-blur-xl sm:size-28">
              <BrandLogo slug={platform.slug} name={platform.name} white />
            </div>

            <span className="relative z-10 mt-6 text-sm font-semibold tracking-wide text-white">
              {platform.name}
            </span>

            <span className="relative z-10 mt-2 text-[9px] uppercase tracking-[.3em] text-white/75">
              {platform.stat}
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[2%] top-[12%] rounded-2xl border border-white/70 bg-white/50 p-4 shadow-xl backdrop-blur-2xl"
          >
            <Sparkles size={19} style={{ color: platform.color }} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0], x: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-[1%] rounded-2xl border border-white/70 bg-white/55 p-4 shadow-xl backdrop-blur-2xl"
          >
            <span className="block text-[9px] uppercase tracking-widest text-ink-soft">
              Expertise Kenshō
            </span>
            <span className="mt-1 block text-sm font-bold text-ink">
              {platform.stat}
            </span>
          </motion.div>
        </div>
      </motion.article>
    </section>
  );
}

function ReseauxSociauxPage() {
  return (
    <main className="relative isolate overflow-hidden pt-24 sm:pt-28">
      <Nav />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[5%] top-[8%] size-96 rounded-full bg-electric/15 blur-[110px]" />
        <div className="absolute right-[4%] top-[35%] size-[28rem] rounded-full bg-lilac/15 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[25%] size-96 rounded-full bg-coral/10 blur-[110px]" />
      </div>

      {/* Haut de page : logos puis accroche */}
      <section className="relative z-10 px-5 pb-12 pt-10 text-center sm:pb-16 sm:pt-14">
        <LogoArc />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-8 max-w-5xl"
        >
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.2rem)] font-extrabold leading-[1.08] tracking-[-.045em] text-ink">
            Chaque réseau a{" "}
            <span className="bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
              son audience.
            </span>
            <span className="block">
              Ensemble,{" "}
              <span className="bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
                Kenshō
              </span>{" "}
              peut démultiplier votre visibilité.
            </span>
          </h1>
        </motion.div>
      </section>

      {/* Présentation des plateformes */}
      <div className="relative">
        {platforms.map((platform, index) => (
          <PlatformPanel
            key={platform.slug}
            platform={platform}
            index={index}
          />
        ))}
      </div>

      {/* Message central */}
      <section className="relative flex min-h-[650px] items-center justify-center overflow-hidden px-5 py-24">
        <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-electric/20 via-lilac/20 to-coral/20 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="social-half-circle relative flex min-h-[450px] w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-t-[50%] rounded-b-[2.5rem] border border-white/70 px-7 pb-12 pt-24 text-center shadow-[0_30px_90px_-35px_rgba(40,30,70,.25)]"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/65 via-white/20 to-white/45 backdrop-blur-2xl" />

          <span className="text-[10px] font-semibold uppercase tracking-[.3em] text-ink-soft">
            One ecosystem · Multiple audiences
          </span>

          <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Chaque réseau a son audience.
            <span className="mt-3 block bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
              Ensemble, ils démultiplient votre visibilité.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-ink-soft">
            Votre présence digitale ne doit rien au hasard. Nous construisons
            une stratégie cohérente, adaptée à votre marque et à vos objectifs.
          </p>
        </motion.div>
      </section>

      {/* Contact par e-mail uniquement */}
      <section className="relative px-5 pb-28 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/35 px-7 py-16 text-center shadow-[0_25px_80px_-35px_rgba(40,30,70,.25)] backdrop-blur-2xl sm:px-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[.3em] text-ink-soft">
            Votre prochain projet
          </span>

          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Votre marque mérite plus de visibilité.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink-soft">
            Présentez-nous votre entreprise, vos objectifs et les plateformes
            qui vous intéressent. Nous étudierons vos besoins pour construire
            une proposition personnalisée.
          </p>

          <a
            href={`mailto:kenshodigitalstudio@gmail.com?subject=${encodeURIComponent("Projet digital — Kenshō Studio")}&body=${encodeURIComponent("Bonjour Kenshō Studio,\n\nJe souhaite échanger au sujet de ma présence digitale.\n\nEntreprise :\nSite internet :\nPlateformes concernées :\nObjectifs :\n\nMerci !")}`}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-background shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Parlons de votre projet <ArrowUpRight size={17} />
          </a>

          <p className="mt-4 text-[10px] text-ink-soft">
            Échange gratuit · Proposition personnalisée · Par e-mail
          </p>
        </motion.div>
      </section>

      <Footer />

      <style>{`
        .social-panel {
          isolation: isolate;
          border: 1px solid rgba(255,255,255,.75);
          background:
            radial-gradient(ellipse at 15% 0%, rgba(255,255,255,.9), transparent 45%),
            linear-gradient(135deg, rgba(255,255,255,.72), rgba(255,255,255,.30) 55%, rgba(255,255,255,.48));
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow:
            0 28px 75px -38px rgba(35,25,60,.28),
            inset 0 2px 4px rgba(255,255,255,.9),
            inset 0 -2px 5px rgba(90,70,120,.06);
        }

        .social-panel::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          border: 1px solid rgba(255,255,255,.4);
          mask-image: linear-gradient(140deg,#000,transparent 75%);
        }

        .social-brand-orb {
          border: 1px solid rgba(255,255,255,.75);
        }

        .social-half-circle {
          isolation: isolate;
          border-top-left-radius: 50% 48%;
          border-top-right-radius: 50% 48%;
        }

        @media (max-width: 640px) {
          .social-stage {
            min-height: auto;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
