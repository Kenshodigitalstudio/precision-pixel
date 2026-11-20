
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  Image as ImageIcon,
  Layers3,
  MessageCircle,
  MousePointer2,
  Play,
  Send,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/reseaux-sociaux")({
  head: () => ({
    meta: [
      { title: "Gestion des réseaux sociaux — Kenshō Studio" },
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
  { name: "Instagram", slug: "instagram", color: "#C66BA6" },
  { name: "TikTok", slug: "tiktok", color: "#25252D" },
  { name: "LinkedIn", slug: "linkedin", color: "#0A66C2" },
  { name: "Facebook", slug: "facebook", color: "#1877F2" },
  { name: "YouTube", slug: "youtube", color: "#FF0033" },
  { name: "Pinterest", slug: "pinterest", color: "#BD081C" },
  { name: "Snapchat", slug: "snapchat", color: "#D6C900" },
  { name: "Threads", slug: "threads", color: "#333333" },
  { name: "X", slug: "x", color: "#111111" },
];

const pillars = [
  {
    number: "01",
    title: "Stratégie sur-mesure",
    description:
      "Une ligne éditoriale claire, alignée avec votre image de marque, votre audience et vos objectifs.",
    detail:
      "Positionnement, ton de communication, choix des plateformes et stratégie de contenu.",
    icon: Target,
    color: "#8B83D6",
  },
  {
    number: "02",
    title: "Création de contenu",
    description:
      "Des visuels et vidéos premium, créatifs et impactants, adaptés à chaque plateforme.",
    detail:
      "Publications, carrousels, formats courts, visuels et contenus adaptés à votre identité.",
    icon: ImageIcon,
    color: "#579DCE",
  },
  {
    number: "03",
    title: "Planification & diffusion",
    description:
      "Un calendrier de publication organisé pour construire une présence régulière et cohérente.",
    detail:
      "Organisation des contenus, programmation et coordination de votre présence digitale.",
    icon: CalendarDays,
    color: "#72A98F",
  },
  {
    number: "04",
    title: "Suivi & optimisation",
    description:
      "Une analyse des performances et des ajustements continus pour faire progresser votre présence.",
    detail:
      "Analyse des indicateurs, évolution de la stratégie et recommandations d'amélioration.",
    icon: BarChart3,
    color: "#C58DB8",
  },
];

function BrandLogo({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-sm font-bold text-ink">
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      loading="lazy"
      className="h-6 w-6 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

/* HALO ET FOND */

function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#F8FAFD]" />

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 top-20 size-[600px] rounded-full bg-white blur-[110px]"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-48 top-[15%] size-[650px] rounded-full bg-[#C9E2FF]/75 blur-[120px]"
      />

      <div className="absolute left-[20%] top-[48%] size-[450px] rounded-full bg-[#E0EAFF]/60 blur-[120px]" />
      <div className="absolute bottom-[-250px] right-[10%] size-[600px] rounded-full bg-[#D7E9FF]/65 blur-[120px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/35" />
    </div>
  );
}

/* LOGOS DES PLATEFORMES */

function PlatformIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.slug}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.045, duration: 0.5 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="flex size-12 items-center justify-center rounded-2xl border border-white/90 bg-white/65 shadow-[0_12px_30px_-18px_rgba(35,65,110,.3)] backdrop-blur-xl sm:size-14"
          title={platform.name}
        >
          <BrandLogo slug={platform.slug} name={platform.name} />
        </motion.div>
      ))}
    </div>
  );
}

/* MOCKUP SMARTPHONE ET MAIN */

function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[510px]">
      {/* Halo lumineux derrière le téléphone */}
      <div className="absolute left-1/2 top-[48%] size-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A9D3FF]/65 blur-[80px] sm:size-[420px]" />

      <motion.div
        animate={{ rotate: [0, 1.2, 0, -1.2, 0], y: [0, -6, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[8%] z-20 h-[365px] w-[190px] -translate-x-1/2 rounded-[36px] border-[5px] border-[#282C38] bg-[#171B25] p-[5px] shadow-[0_35px_65px_-22px_rgba(20,35,65,.5)] sm:top-[5%] sm:h-[420px] sm:w-[220px]"
      >
        {/* Écran */}
        <div className="relative h-full overflow-hidden rounded-[28px] bg-[#F9FAFC]">
          <div className="absolute left-1/2 top-2 z-20 h-[15px] w-[58px] -translate-x-1/2 rounded-full bg-[#171B25]" />

          <div className="flex items-center justify-between px-3 pb-2 pt-8">
            <span className="text-[7px] font-semibold text-ink">
              9:41
            </span>
            <span className="text-[7px] font-semibold text-ink">
              ● ● ▰
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-black/5 px-3 py-2">
            <span className="font-display text-[12px] font-semibold text-ink">
              kenshostudio
            </span>
            <Send size={12} className="text-ink" />
          </div>

          <div className="flex items-center gap-2 px-3 py-3">
            <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#C8DFFF] via-white to-[#D9C9F3]">
              <span className="font-display text-sm font-semibold text-ink">
                K.
              </span>
            </div>
            <div className="flex flex-1 justify-around text-center">
              {[
                ["128", "Posts"],
                ["4 320", "Abonnés"],
                ["96", "Suivis"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-[8px] font-bold text-ink">{value}</p>
                  <p className="text-[6px] text-ink-soft">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-3 pb-3">
            <p className="text-[7px] font-semibold text-ink">
              Kenshō Studio
            </p>
            <p className="mt-1 text-[6px] leading-relaxed text-ink-soft">
              Stratégie digitale · Créativité · Performance
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[3px] px-1">
            {[
              "from-[#D5E4F8] to-[#B8CDE9]",
              "from-[#E9DCEB] to-[#D1C1E3]",
              "from-[#DDECE7] to-[#B9D5CB]",
              "from-[#E5E9F6] to-[#C8D6EE]",
              "from-[#D8E8F8] to-[#AFC9E8]",
              "from-[#F0E4E9] to-[#D9C5DA]",
              "from-[#E7EAF2] to-[#C7D3E6]",
              "from-[#DDECEB] to-[#BDDAD5]",
              "from-[#EADFE9] to-[#D5C6E2]",
            ].map((gradient, index) => (
              <div
                key={index}
                className={`relative aspect-square overflow-hidden bg-gradient-to-br ${gradient}`}
              >
                <div className="absolute inset-x-[18%] bottom-[12%] top-[20%] rounded-t-xl border border-white/40 bg-white/20" />
                <div className="absolute bottom-[12%] left-[12%] h-[35%] w-[76%] rounded-sm bg-white/20" />
                <div className="absolute right-[15%] top-[15%] size-3 rounded-full bg-white/50 blur-[1px]" />
              </div>
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-0 flex h-9 items-center justify-around border-t border-black/5 bg-white/95">
            <div className="size-3 rounded-sm bg-ink" />
            <div className="size-3 rounded-full border border-ink" />
            <div className="grid size-4 place-items-center rounded border border-ink">
              <span className="text-[10px] text-ink">+</span>
            </div>
            <div className="size-3 rounded-md border border-ink" />
            <div className="size-3 rounded-full border border-ink" />
          </div>
        </div>
      </motion.div>

      {/* Main tenant le téléphone : illustration vectorielle */}
      <svg
        aria-hidden="true"
        viewBox="0 0 560 470"
        className="pointer-events-none absolute inset-x-0 bottom-[-35px] z-30 h-[390px] w-full overflow-visible sm:bottom-[-45px] sm:h-[455px]"
        fill="none"
      >
        <defs>
          <linearGradient id="handSkin" x1="140" y1="210" x2="430" y2="450">
            <stop stopColor="#F7D9CA" />
            <stop offset=".5" stopColor="#EFC4B1" />
            <stop offset="1" stopColor="#DFAE9C" />
          </linearGradient>
          <linearGradient id="handLight" x1="180" y1="300" x2="330" y2="450">
            <stop stopColor="#FFF5EE" />
            <stop offset="1" stopColor="#E7BDAE" />
          </linearGradient>
          <filter id="handShadow" x="0" y="0" width="560" height="500">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        {/* Ombre de la main */}
        <path
          d="M120 470 C145 415 175 390 215 365 C250 340 280 340 310 360 C345 380 370 410 415 430 L465 470Z"
          fill="#6C8FBD"
          opacity=".18"
          filter="url(#handShadow)"
        />

        {/* Paume et poignet */}
        <path
          d="M75 470 C105 430 140 390 174 362 C199 342 220 333 244 340 C272 348 292 367 318 380 C345 394 372 399 407 417 L485 470Z"
          fill="url(#handSkin)"
          stroke="#D7A796"
          strokeWidth="2"
        />

        {/* Pouce à gauche */}
        <path
          d="M185 390 C161 367 135 340 126 309 C118 282 126 261 143 251 C158 242 177 251 190 275 L225 337"
          fill="url(#handLight)"
          stroke="#D9AA99"
          strokeWidth="2"
        />

        {/* Doigts autour du téléphone */}
        <path
          d="M344 374 C370 344 390 310 411 286 C426 269 445 271 455 285 C465 301 451 326 439 344 L402 403"
          fill="url(#handSkin)"
          stroke="#D9AA99"
          strokeWidth="2"
        />

        <path
          d="M370 394 C399 365 422 345 441 336 C457 328 472 337 473 352 C474 369 455 389 437 406 L409 433"
          fill="url(#handLight)"
          stroke="#D9AA99"
          strokeWidth="2"
        />

        {/* Manche */}
        <path
          d="M54 470 L84 420 C102 430 116 444 126 460 L119 470Z"
          fill="#F8FAFD"
        />
        <path
          d="M68 470 L99 429 M82 470 L111 438 M97 470 L122 449"
          stroke="#D8E2F1"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Orbites lumineuses */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[45%] z-10 h-[220px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/90 sm:h-[270px] sm:w-[450px]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[45%] z-10 h-[180px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#9CCBFF]/50 sm:h-[220px] sm:w-[390px]"
      />

      {/* Logos flottants */}
      {[
        { slug: "instagram", name: "Instagram", x: "left-[5%]", y: "top-[35%]", delay: 0 },
        { slug: "linkedin", name: "LinkedIn", x: "right-[4%]", y: "top-[38%]", delay: 0.5 },
        { slug: "tiktok", name: "TikTok", x: "left-[8%]", y: "top-[67%]", delay: 1 },
        { slug: "facebook", name: "Facebook", x: "right-[8%]", y: "top-[69%]", delay: 1.5 },
      ].map((platform) => (
        <motion.div
          key={platform.slug}
          animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
          transition={{
            duration: 5,
            delay: platform.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${platform.x} ${platform.y} z-40 grid size-12 place-items-center rounded-2xl border border-white/90 bg-white/85 shadow-[0_15px_35px_-15px_rgba(30,70,130,.35)] backdrop-blur-xl sm:size-14`}
        >
          <BrandLogo slug={platform.slug} name={platform.name} />
        </motion.div>
      ))}
    </div>
  );
}

/* CARTES FLOTTANTES */

function FloatingCards() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-[18%] z-40 hidden w-[190px] rounded-[22px] border border-white/90 bg-white/65 p-4 shadow-[0_20px_50px_-25px_rgba(35,70,120,.3)] backdrop-blur-2xl lg:block xl:left-[-30px]"
      >
        <div className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-xl bg-[#E6F0FF]">
            <Users size={16} className="text-[#578DC8]" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-ink">Communauté</p>
            <p className="text-[8px] text-ink-soft">Votre audience</p>
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-ink">Social</p>
            <p className="text-[9px] text-ink-soft">Présence digitale</p>
          </div>
          <div className="flex h-8 items-end gap-1">
            {[10, 15, 12, 22, 19, 27].map((height, index) => (
              <span
                key={index}
                className="w-2 rounded-t-sm bg-gradient-to-t from-[#8BB9EC] to-[#C5DBF8]"
                style={{ height }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-[20%] z-40 hidden w-[205px] rounded-[22px] border border-white/90 bg-white/70 p-4 shadow-[0_20px_50px_-25px_rgba(35,70,120,.3)] backdrop-blur-2xl lg:block xl:right-[-30px]"
      >
        <div className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-xl bg-[#E9E8FF]">
            <CalendarDays size={16} className="text-[#8279C9]" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-ink">
              Calendrier éditorial
            </p>
            <p className="text-[8px] text-ink-soft">Exemple de planification</p>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {[
            ["Publication", "Lun."],
            ["Reel", "Mer."],
            ["Carrousel", "Ven."],
          ].map(([label, day]) => (
            <div key={label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-lg bg-[#E8F0FC]">
                  {label === "Reel" ? (
                    <Play size={11} className="text-[#668FC9]" />
                  ) : label === "Carrousel" ? (
                    <Layers3 size={11} className="text-[#668FC9]" />
                  ) : (
                    <ImageIcon size={11} className="text-[#668FC9]" />
                  )}
                </span>
                <span className="text-[9px] font-medium text-ink">
                  {label}
                </span>
              </div>
              <span className="text-[8px] text-ink-soft">{day}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[17%] left-[-10px] z-40 hidden rounded-2xl border border-white/90 bg-white/70 px-4 py-3 shadow-[0_15px_35px_-20px_rgba(35,70,120,.3)] backdrop-blur-2xl lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-full bg-[#E7F1FF]">
            <MessageCircle size={13} className="text-[#6396CE]" />
          </div>
          <div>
            <p className="text-[9px] font-semibold text-ink">Interaction</p>
            <p className="text-[8px] text-ink-soft">Une communauté active</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[16%] right-[-10px] z-40 hidden rounded-2xl border border-white/90 bg-white/70 px-4 py-3 shadow-[0_15px_35px_-20px_rgba(35,70,120,.3)] backdrop-blur-2xl lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-full bg-[#E8F3FF]">
            <Target size={13} className="text-[#6396CE]" />
          </div>
          <div>
            <p className="text-[9px] font-semibold text-ink">Stratégie</p>
            <p className="text-[8px] text-ink-soft">Pensée pour votre marque</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* HERO */

function Hero() {
  return (
    <section className="relative px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/65 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[.17em] text-ink shadow-[0_10px_30px_-20px_rgba(35,65,110,.3)] backdrop-blur-xl sm:text-[10px]">
            <Layers3 size={14} className="text-[#578DC8]" />
            Gestion des réseaux sociaux
            <span className="h-1 w-1 rounded-full bg-[#8EB8E8]" />
            Service premium
          </span>

          <h1 className="mx-auto mt-7 max-w-5xl font-display text-[clamp(2.65rem,6.2vw,5.5rem)] font-light leading-[1.02] tracking-[-.065em] text-[#20283A]">
            Votre marque mérite
            <span className="mt-1 block">
              d'être{" "}
              <span className="bg-gradient-to-r from-[#8CAFE1] via-[#548CCB] to-[#7DAEDB] bg-clip-text font-semibold italic text-transparent">
                remarquée.
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[13px] leading-relaxed text-[#68758A] sm:text-base">
            Une présence sociale premium, pensée pour renforcer votre image,
            engager votre audience et soutenir vos objectifs business.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#approche"
              className="group inline-flex items-center gap-3 rounded-full bg-[#20283A] px-7 py-3.5 text-xs font-semibold text-white shadow-[0_15px_35px_-15px_rgba(25,40,65,.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Découvrir notre approche
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/65 px-6 py-3.5 text-xs font-semibold text-[#344158] shadow-sm backdrop-blur-xl">
              <CalendarDays size={15} className="text-[#548CCB]" />
              Lancement début 2027
            </span>
          </div>
        </motion.div>

        {/* Visuel principal */}
        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-14">
          <FloatingCards />
          <PhoneMockup />
        </div>

        {/* Plateformes */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-1 max-w-3xl text-center"
        >
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.22em] text-[#8492A7]">
            Une présence pensée pour les plateformes qui comptent
          </p>
          <PlatformIcons />
        </motion.div>
      </div>
    </section>
  );
}

/* APPROCHE */

function Approach() {
  return (
    <section
      id="approche"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9E9FF]/50 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/65 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#68758A] shadow-sm backdrop-blur-xl">
            <Sparkles size={13} className="text-[#679CD1]" />
            Notre approche premium
          </span>

          <h2 className="mt-6 font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-light leading-[1.08] tracking-[-.055em] text-[#20283A]">
            Une gestion complète et stratégique
            <span className="mt-1 block bg-gradient-to-r from-[#8CAFE1] via-[#548CCB] to-[#83B8DA] bg-clip-text font-semibold italic text-transparent">
              de vos réseaux sociaux.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#758197]">
            Bien plus que des publications : une approche globale pour
            construire une présence digitale cohérente, reconnaissable et
            durable.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease,
                }}
                className="group relative overflow-hidden rounded-[26px] border border-white/90 bg-white/55 p-6 shadow-[0_20px_55px_-35px_rgba(35,65,110,.3)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/80 hover:shadow-[0_25px_60px_-30px_rgba(35,65,110,.35)]"
              >
                <div
                  className="absolute -right-10 -top-10 size-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                  style={{ background: pillar.color }}
                />

                <div className="relative flex items-center justify-between">
                  <div
                    className="grid size-12 place-items-center rounded-2xl border border-white/90 bg-white/75 shadow-sm"
                    style={{ color: pillar.color }}
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                  <span className="font-mono text-[10px] text-[#9AA5B5]">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-lg font-semibold tracking-tight text-[#283246]">
                  {pillar.title}
                </h3>

                <p className="relative mt-3 text-xs leading-[1.75] text-[#758197]">
                  {pillar.description}
                </p>

                <div className="relative mt-5 border-t border-[#A8B8CE]/20 pt-4">
                  <p className="text-[10px] leading-relaxed text-[#8490A3]">
                    {pillar.detail}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* DIFFÉRENCE KENSHŌ */

function Difference() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[34px] border border-white/90 bg-white/50 px-7 py-12 shadow-[0_25px_75px_-40px_rgba(35,65,110,.3)] backdrop-blur-2xl sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full bg-[#BFDFFF]/45 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-[#E2E9FF]/65 blur-[90px]" />

        <div className="relative grid gap-10 md:grid-cols-[1fr_.8fr] md:items-center">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#6C91BE]">
              L'approche Kenshō
            </span>

            <h2 className="mt-4 max-w-xl font-display text-3xl font-light leading-tight tracking-[-.045em] text-[#20283A] sm:text-4xl">
              Votre communication mérite une vraie direction.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-[1.8] text-[#758197]">
              Chaque contenu doit avoir une intention. Chaque plateforme doit
              servir un objectif. Nous construisons une présence qui respecte
              votre identité et donne de la cohérence à votre communication.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Une identité de marque respectée",
              "Une stratégie adaptée à votre audience",
              "Des contenus pensés pour chaque plateforme",
              "Une vision globale de votre communication",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/60 px-4 py-3.5 shadow-sm backdrop-blur-xl"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#E4F0FF] text-[#548CCB]">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-xs font-medium text-[#46536A]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* LANCEMENT 2027 */

function LaunchSection() {
  return (
    <section
      id="lancement"
      className="relative overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pb-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[34px] border border-white/90 bg-white/60 px-7 py-12 text-center shadow-[0_30px_80px_-40px_rgba(35,65,110,.35)] backdrop-blur-2xl sm:px-14 sm:py-16"
        >
          <div className="pointer-events-none absolute -left-24 -top-28 size-80 rounded-full bg-[#D8E9FF]/70 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 size-96 rounded-full bg-[#C5DCFA]/60 blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#5D7FA8] shadow-sm">
              <CalendarDays size={13} />
              Lancement début 2027
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-light leading-tight tracking-[-.05em] text-[#20283A] sm:text-5xl">
              Préparons ensemble
              <span className="block bg-gradient-to-r from-[#8CAFE1] via-[#548CCB] to-[#83B8DA] bg-clip-text font-semibold italic text-transparent">
                votre prochaine présence digitale.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#758197]">
              Notre service de gestion des réseaux sociaux ouvrira début 2027.
              Vous pouvez dès maintenant nous présenter votre projet et
              manifester votre intérêt pour le lancement.
            </p>

            <a
              href={`mailto:kenshodigitalstudio@gmail.com?subject=${encodeURIComponent("Intérêt — Gestion des réseaux sociaux Kenshō")}&body=${encodeURIComponent("Bonjour Kenshō Studio,\n\nJe souhaite être informé(e) du lancement de votre service de gestion des réseaux sociaux prévu début 2027.\n\nMon entreprise :\nMon site internet :\nMes réseaux sociaux :\nMes objectifs :\n\nMerci !")}`}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#20283A] px-7 py-4 text-xs font-semibold text-white shadow-[0_15px_35px_-15px_rgba(25,40,65,.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Manifester mon intérêt
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <p className="mt-4 text-[10px] text-[#8A96A9]">
              Service non disponible avant son lancement début 2027.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* PAGE */

function ReseauxSociauxPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#F8FAFD] text-[#20283A]">
      <AmbientBackground />
      <Nav />

      <Hero />
      <Approach />
      <Difference />
      <LaunchSection />

      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </main>
  );
}
