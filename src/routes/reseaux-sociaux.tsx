
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/reseaux-sociaux")({
  head: () => ({
    meta: [
      { title: "Réseaux sociaux — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Développez votre présence sur les réseaux sociaux avec Kenshō Digital Studio.",
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
  className = "h-8 w-8",
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  if (slug === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-label={`Logo ${name}`}
        role="img"
        className={`${className} shrink-0`}
        fill="#0A66C2"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={`Logo ${name}`}
      loading="lazy"
      className={`${className} shrink-0 object-contain`}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

function LogoArc() {
  const repeatedPlatforms = [...platforms, ...platforms];

  return (
    <div className="relative mx-auto h-[90px] w-full max-w-6xl overflow-hidden sm:h-[105px]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-paper to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-paper to-transparent sm:w-24" />

      <motion.div
        className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 items-center gap-3 sm:gap-5"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 34,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeatedPlatforms.map((platform, index) => (
          <div
            key={`${platform.slug}-${index}`}
            className="flex h-[58px] w-[58px] items-center justify-center rounded-xl border border-white/80 bg-white/65 shadow-[0_8px_24px_-14px_rgba(30,20,50,.25)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-105 sm:h-[68px] sm:w-[68px]"
          >
            <BrandLogo slug={platform.slug} name={platform.name} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function PlatformCards() {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  return (
    <section className="relative mx-auto max-w-[1400px] px-4 pb-20 pt-10 sm:px-6">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[.22em] text-electric">
          Nos expertises
        </span>
        <h2 className="mt-3 text-2xl font-light tracking-tight text-ink sm:text-3xl">
          Un réseau. Une stratégie.{" "}
          <span className="bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
            Votre identité.
          </span>
        </h2>
        <p className="mt-3 text-sm text-ink-soft">
          Survolez une plateforme pour découvrir notre approche.
        </p>
      </div>

      <div className="platform-strip flex min-h-[300px] items-stretch gap-2 overflow-x-auto pb-3 md:overflow-visible">
        {platforms.map((platform, index) => {
          const isActive = activePlatform === platform.slug;

          return (
            <motion.article
              key={platform.slug}
              layout
              onMouseEnter={() => setActivePlatform(platform.slug)}
              onMouseLeave={() => setActivePlatform(null)}
              onFocus={() => setActivePlatform(platform.slug)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setActivePlatform(null);
                }
              }}
              onClick={() =>
                setActivePlatform(isActive ? null : platform.slug)
              }
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.35,
                delay: index * 0.035,
                layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              }}
              className={`platform-card relative flex min-w-[112px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/80 p-3 outline-none backdrop-blur-2xl transition-colors duration-300 md:min-w-0 ${
                isActive
                  ? "platform-card-active"
                  : "bg-white/55 hover:bg-white/80"
              }`}
              style={{
                flex: isActive ? "4 1 0%" : "1 1 0%",
                borderColor: isActive ? `${platform.color}55` : undefined,
                boxShadow: isActive
                  ? `0 18px 45px -25px ${platform.color}55, inset 0 1px 2px rgba(255,255,255,.9)`
                  : "0 8px 24px -18px rgba(30,20,50,.2)",
              }}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
            >
              <div className="relative z-10 flex h-full min-h-[270px] flex-col">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/80 bg-white/80 shadow-sm"
                  style={{ boxShadow: `0 5px 16px -10px ${platform.color}` }}
                >
                  <BrandLogo
                    slug={platform.slug}
                    name={platform.name}
                    className="h-6 w-6"
                  />
                </div>

                <div className="mt-4">
                  <span className="block text-[8px] font-semibold uppercase tracking-[.13em] text-ink-soft">
                    {platform.category}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-ink">
                    {platform.name}
                  </h3>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22 }}
                      className="mt-4 flex flex-1 flex-col"
                    >
                      <p
                        className="text-xs font-semibold leading-snug"
                        style={{ color: platform.color }}
                      >
                        {platform.subtitle}
                      </p>

                      <p className="mt-2 text-[11px] leading-relaxed text-ink-soft">
                        {platform.description}
                      </p>

                      <div className="mt-3 space-y-2">
                        {platform.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-start gap-2 text-[10px] leading-snug text-ink-soft"
                          >
                            <span
                              className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full text-white"
                              style={{ background: platform.color }}
                            >
                              <Check size={9} strokeWidth={3} />
                            </span>
                            {benefit}
                          </div>
                        ))}
                      </div>

                      <span className="mt-auto pt-4 text-[9px] font-semibold uppercase tracking-wider text-ink-soft">
                        {platform.stat}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isActive && (
                  <div className="mt-auto pt-5">
                    <span className="block text-[8px] font-medium uppercase tracking-wider text-ink-soft/70">
                      Découvrir
                    </span>
                    <span
                      className="mt-1 block h-1 w-6 rounded-full"
                      style={{ background: platform.color }}
                    />
                  </div>
                )}
              </div>

              <div
                className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full opacity-10 blur-2xl transition-opacity duration-300"
                style={{
                  background: platform.color,
                  opacity: isActive ? 0.22 : 0.08,
                }}
              />
            </motion.article>
          );
        })}
      </div>

      <p className="mt-3 text-center text-[10px] text-ink-soft/70 md:hidden">
        Faites défiler les cartes horizontalement et touchez une plateforme pour afficher ses informations.
      </p>
    </section>
  );
}

function ReseauxSociauxPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-electric/15 blur-3xl" />
        <div className="absolute -right-24 top-[35%] h-96 w-96 rounded-full bg-solar/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-mint/15 blur-3xl" />
      </div>

      <Nav />

      {/* Introduction */}
      <section className="relative z-10 px-5 pb-8 pt-32 text-center sm:px-6 sm:pb-12 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <LogoArc />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-5 max-w-5xl"
          >
            <h1 className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.04em] text-ink">
              Chaque réseau a{" "}
              <span className="bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
                son audience.
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
                  Kenshō
                </span>{" "}
                peut démultiplier votre visibilité.
              </span>
            </h1>
          </motion.div>

          {/* Disponibilité */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="availability-glass relative mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl px-6 py-5 sm:flex-row sm:gap-5 sm:px-8"
          >
            <div className="pointer-events-none absolute -left-16 -top-20 size-40 rounded-full bg-electric/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-12 size-40 rounded-full bg-mint/25 blur-3xl" />

            <div className="relative grid size-10 shrink-0 place-items-center rounded-xl border border-white/70 bg-white/60 shadow-md backdrop-blur-xl">
              <Sparkles className="text-ink" size={19} />
            </div>

            <div className="relative text-center sm:text-left">
              <span className="block text-[10px] font-medium uppercase tracking-[.2em] text-ink-soft">
                Nouvelle offre Kenshō
              </span>
              <p className="mt-1 font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
                Service disponible dès début 2027
              </p>
            </div>

            <span className="relative rounded-full border border-white/70 bg-white/55 px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-ink-soft backdrop-blur-xl">
              Bientôt disponible
            </span>
          </motion.div>
        </div>
      </section>

      {/* Cartes interactives */}
      <PlatformCards />

      {/* Message central */}
      <section className="relative flex min-h-[540px] items-center justify-center overflow-hidden px-5 py-20">
        <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="social-half-circle relative flex min-h-[390px] w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-t-[50%] rounded-b-[2rem] border border-white/70 px-7 pb-10 pt-20 text-center shadow-[0_25px_70px_-35px_rgba(40,30,70,.2)]"
        >
          <div className="absolute inset-0 -z-10 bg-white/40 backdrop-blur-2xl" />

          <span className="text-[10px] font-medium uppercase tracking-[.25em] text-ink-soft">
            One ecosystem · Multiple audiences
          </span>

          <h2 className="mt-5 max-w-2xl font-display text-2xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
            Chaque réseau a son audience.
            <span className="mt-2 block bg-gradient-to-r from-electric via-lilac to-coral bg-clip-text text-transparent">
              Ensemble, ils démultiplient votre visibilité.
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-[13px] leading-7 text-ink-soft sm:text-sm">
            Votre présence digitale ne doit rien au hasard. Nous construisons
            une stratégie cohérente, adaptée à votre marque et à vos objectifs.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="relative px-5 pb-24 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/35 px-7 py-12 text-center shadow-[0_20px_65px_-35px_rgba(40,30,70,.2)] backdrop-blur-2xl sm:px-12"
        >
          <span className="font-mono text-[10px] uppercase tracking-[.25em] text-ink-soft">
            Votre prochain projet
          </span>

          <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Votre marque mérite plus de visibilité.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-7 text-ink-soft sm:text-sm">
            Présentez-nous votre entreprise, vos objectifs et les plateformes
            qui vous intéressent. Nous étudierons vos besoins pour construire
            une proposition personnalisée.
          </p>

          <a
            href={`mailto:kenshodigitalstudio@gmail.com?subject=${encodeURIComponent("Projet digital — Kenshō Studio")}&body=${encodeURIComponent("Bonjour Kenshō Studio,\n\nJe souhaite échanger au sujet de ma présence digitale.\n\nEntreprise :\nSite internet :\nPlateformes concernées :\nObjectifs :\n\nMerci !")}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Parlons de votre projet <ArrowUpRight size={16} />
          </a>

          <p className="mt-3 text-[10px] text-ink-soft">
            Échange gratuit · Proposition personnalisée · Par e-mail
          </p>
        </motion.div>
      </section>

      <Footer />

      <style>{`
        .availability-glass {
          isolation: isolate;
          border: 1px solid rgba(255,255,255,.8);
          background:
            radial-gradient(ellipse at 15% 0%, rgba(255,255,255,.9), transparent 55%),
            linear-gradient(135deg, rgba(255,255,255,.68), rgba(255,255,255,.3) 60%, rgba(255,255,255,.5));
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow:
            0 20px 55px -30px rgba(35,25,60,.2),
            inset 0 2px 4px rgba(255,255,255,.9),
            inset 0 -1px 3px rgba(90,70,120,.06);
        }

        .platform-card {
          isolation: isolate;
          min-height: 270px;
          transition:
            flex .4s cubic-bezier(.22,1,.36,1),
            background .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .platform-card-active {
          background:
            radial-gradient(ellipse at 15% 0%, rgba(255,255,255,.95), transparent 65%),
            linear-gradient(145deg, rgba(255,255,255,.9), rgba(255,255,255,.65));
        }

        .platform-strip {
          scrollbar-width: thin;
          scrollbar-color: rgba(86,133,255,.25) transparent;
        }

        .social-half-circle {
          isolation: isolate;
          border-top-left-radius: 50% 48%;
          border-top-right-radius: 50% 48%;
        }

        @media (max-width: 767px) {
          .platform-strip {
            min-height: 300px;
          }

          .platform-card {
            flex: 0 0 145px !important;
          }

          .platform-card-active {
            flex-basis: 260px !important;
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
