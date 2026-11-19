
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
      "Construisez un univers visuel reconnaissable et transformez votre audience en une véritable communauté.",
    points: ["Direction artistique", "Reels & Stories", "Carrousels créatifs", "Développement communautaire"],
    formats: ["Reels", "Stories", "Posts", "Carrousels"],
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
      "Des formats courts, des concepts créatifs et une communication authentique pour faire découvrir votre marque.",
    points: ["Concepts vidéo", "Création de formats courts", "Adaptation aux tendances", "Stratégie de visibilité"],
    formats: ["TikTok", "Shorts", "UGC", "Vidéos"],
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
      "Développez votre présence locale, animez votre communauté et entretenez une relation durable avec vos clients.",
    points: ["Gestion de page", "Publications régulières", "Animation communautaire", "Communication locale"],
    formats: ["Posts", "Stories", "Vidéos", "Communauté"],
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
      "Positionnez votre entreprise comme une référence dans son secteur grâce à une communication professionnelle et cohérente.",
    points: ["Stratégie éditoriale B2B", "Posts experts", "Personal branding", "Développement du réseau"],
    formats: ["Posts", "Carrousels", "Actualités", "Expertise"],
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
      "Développez une présence vidéo durable avec des contenus qui présentent votre savoir-faire et valorisent votre marque.",
    points: ["Stratégie de chaîne", "Création de vidéos", "YouTube Shorts", "Miniatures & identité"],
    formats: ["Vidéos", "Shorts", "Miniatures", "Chaîne"],
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
      "Faites découvrir vos produits et vos idées grâce à des contenus visuels qui continuent d'attirer du trafic.",
    points: ["Création d'épingles", "Optimisation visuelle", "Organisation des tableaux", "Trafic vers votre site"],
    formats: ["Épingles", "Collections", "Visuels", "Guides"],
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
      "Misez sur des formats spontanés et immersifs pour toucher des audiences connectées et créer une relation directe.",
    points: ["Contenus verticaux", "Stories créatives", "Formats publicitaires", "Communication spontanée"],
    formats: ["Stories", "Snaps", "Vertical", "Ads"],
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
      "Affirmez votre positionnement, partagez vos actualités et développez votre visibilité dans les conversations de votre secteur.",
    points: ["Ligne éditoriale", "Publications régulières", "Veille sectorielle", "Engagement communautaire"],
    formats: ["Posts", "Threads", "Actualités", "Conversations"],
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
      "Développez une communication plus spontanée, humaine et conversationnelle pour créer des liens avec votre audience.",
    points: ["Prise de parole", "Contenus conversationnels", "Animation de communauté", "Identité éditoriale"],
    formats: ["Posts", "Conversations", "Communauté", "Actualités"],
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
      "Touchez les personnes qui recherchent déjà vos produits ou services grâce à des campagnes publicitaires pensées pour vos objectifs.",
    points: ["Stratégie d'acquisition", "Google Search & Performance Max", "Optimisation des campagnes", "Suivi des conversions"],
    formats: ["Search", "Performance Max", "Display", "YouTube Ads"],
    stat: "L'acquisition",
  },
];

function BrandLogo({ slug, name }: { slug: string; name: string }) {
  const logoSlug = slug === "googleads" ? "googleads" : slug;

  return (
    <img
      src={`https://cdn.simpleicons.org/${logoSlug}`}
      alt={`Logo ${name}`}
      loading="lazy"
      className="h-12 w-12 object-contain sm:h-14 sm:w-14"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

function PlatformPanel({
  platform,
  index,
}: {
  platform: (typeof platforms)[number];
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <section className="social-stage relative flex min-h-[720px] items-center px-5 py-20 sm:px-10">
      <motion.article
        initial={{ opacity: 0, x: reverse ? 130 : -130, scale: 0.94 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="social-panel relative mx-auto grid w-full max-w-6xl items-center gap-10 overflow-hidden rounded-[2.5rem] p-7 sm:p-12 lg:grid-cols-2 lg:p-16"
        style={{
          "--brand": platform.color,
          "--brand-glow": `${platform.color}35`,
        } as React.CSSProperties}
      >
        <div
          className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full blur-[110px]"
          style={{ background: platform.color, opacity: 0.17 }}
        />

        <div className={`relative z-10 ${reverse ? "lg:order-2" : ""}`}>
          <div className="mb-8 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[.25em] text-ink-soft">
              KENSHŌ / {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-12 bg-ink/20" />
            <span className="text-[9px] font-semibold tracking-[.18em] text-ink-soft">
              {platform.category}
            </span>
          </div>

          <div
            className="mb-7 flex size-16 items-center justify-center rounded-2xl border border-white/70 bg-white/50 shadow-lg backdrop-blur-xl"
          >
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
            {platform.points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i }}
                className="flex items-center gap-3 text-sm text-ink"
              >
                <span
                  className="grid size-5 shrink-0 place-items-center rounded-full text-white"
                  style={{ background: platform.color }}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                {point}
              </motion.div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-2">
            {platform.formats.map((format) => (
              <span
                key={format}
                className="rounded-full border border-white/70 bg-white/40 px-3 py-2 text-[10px] font-semibold text-ink-soft shadow-sm backdrop-blur-xl"
              >
                {format}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`relative flex min-h-[330px] items-center justify-center lg:min-h-[450px] ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <div
            className="absolute size-72 rounded-full blur-[85px]"
            style={{ background: platform.color, opacity: 0.23 }}
          />

          <motion.div
            animate={{
              y: [0, -17, 0],
              rotate: [-3, 3, -3],
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 8 + index * 0.4,
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
              <img
                src={`https://cdn.simpleicons.org/${platform.slug}/ffffff`}
                alt=""
                className="size-12 object-contain sm:size-14"
                loading="lazy"
              />
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
            className="absolute right-[2%] top-[12%] rounded-2xl border border-white/70 bg-white/40 p-4 shadow-xl backdrop-blur-2xl"
          >
            <Sparkles size={19} style={{ color: platform.color }} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0], x: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-[1%] rounded-2xl border border-white/70 bg-white/45 p-4 shadow-xl backdrop-blur-2xl"
          >
            <span className="block text-[9px] uppercase tracking-widest text-ink-soft">
              Votre présence
            </span>
            <span className="mt-1 block text-sm font-bold text-ink">
              {platform.name}
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

      {/* Sticky title */}
      <section className="social-intro sticky top-0 z-20 flex min-h-[245px] items-center justify-center px-5 py-10 text-center">
        <div className="social-intro-glass absolute inset-x-4 bottom-3 top-3 -z-10 mx-auto max-w-5xl rounded-[2rem]" />

        <div className="mx-auto max-w-4xl">
          <span className="font-mono text-[10px] uppercase tracking-[.3em] text-ink-soft">
            Kenshō Studio / Digital Presence
          </span>

          <h1 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-.04em] text-ink">
            Faites rayonner votre marque
            <span className="block bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">
              sur le digital.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm text-ink-soft">
            Une stratégie. Plusieurs plateformes. Une présence cohérente.
          </p>
        </div>
      </section>

      {/* Platform journey */}
      <div className="relative">
        {platforms.map((platform, index) => (
          <PlatformPanel
            key={platform.slug}
            platform={platform}
            index={index}
          />
        ))}
      </div>

      {/* Central half-circle */}
      <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden px-5 py-24">
        <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-electric/20 via-lilac/20 to-coral/20 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="social-half-circle relative flex min-h-[470px] w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-t-[50%] rounded-b-[2.5rem] border border-white/70 px-7 pb-12 pt-24 text-center shadow-[0_30px_90px_-35px_rgba(40,30,70,.25)]"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/65 via-white/20 to-white/45 backdrop-blur-2xl" />

          <span className="text-[10px] font-semibold uppercase tracking-[.3em] text-ink-soft">
            One ecosystem / Multiple audiences
          </span>

          <h2 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Chaque réseau a son audience.
            <span className="mt-3 block bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">
              Ensemble, ils démultiplient votre visibilité.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-ink-soft">
            Votre présence digitale ne doit rien au hasard. Nous construisons
            une stratégie cohérente, adaptée à votre marque et à vos objectifs.
          </p>
        </motion.div>
      </section>

      {/* Email CTA */}
      <section className="relative px-5 pb-28 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/35 px-7 py-16 text-center shadow-[0_25px_80px_-35px_rgba(40,30,70,.25)] backdrop-blur-2xl sm:px-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[.3em] text-ink-soft">
            Your next move
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
        .social-intro {
          isolation: isolate;
        }

        .social-intro-glass {
          border: 1px solid rgba(255,255,255,.7);
          background: rgba(255,255,255,.48);
          backdrop-filter: blur(22px) saturate(160%);
          -webkit-backdrop-filter: blur(22px) saturate(160%);
          box-shadow: 0 12px 40px -25px rgba(30,25,50,.2), inset 0 1px 2px rgba(255,255,255,.8);
        }

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
          .social-intro {
            min-height: 215px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .social-brand-orb {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
