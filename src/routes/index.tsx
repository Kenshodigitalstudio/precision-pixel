import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Instagram,
  Linkedin,
  TrendingUp,
  Youtube,
  Bell,
  CalendarDays,
  Facebook,
} from "lucide-react";

import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kenshō Studio — Stratégie digitale & performance" },
      {
        name: "description",
        content:
          "Kenshō Studio accompagne les marques dans leur croissance digitale : Google Ads et réseaux sociaux.",
      },
      {
        property: "og:title",
        content: "Kenshō Studio — Stratégie digitale & performance",
      },
      {
        property: "og:description",
        content:
          "Trois expertises pour développer votre visibilité et faire grandir votre activité.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const ease = [0.22, 1, 0.36, 1] as const;

/* ANIMATIONS */

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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* HERO */

const HERO_WORDS = [
  { word: "visibilité", color: "from-[#E9B6A7] to-[#C5A4EA]" },
  { word: "notoriété", color: "from-[#D9A8D8] to-[#AFA0E8]" },
  { word: "potentiel", color: "from-[#8BCFB4] to-[#75BFA9]" },
  { word: "business", color: "from-[#E7B3A7] to-[#C994C9]" },
  { word: "marketing", color: "from-[#9ABCEB] to-[#B5A5E5]" },
];

function DynamicHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_WORDS.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const currentWord = HERO_WORDS[index];

  return (
    <h1 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.5vw,4.8rem)] font-light leading-[1.12] tracking-[-0.055em] text-ink">
      Faites de votre{" "}
      <span className="inline-grid min-w-[6.2ch] align-baseline text-left">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord.word}
            initial={{ opacity: 0, y: 7, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -5, filter: "blur(3px)" }}
            transition={{ duration: 0.45, ease }}
            className={`col-start-1 row-start-1 inline-block w-fit bg-gradient-to-r ${currentWord.color} bg-clip-text font-semibold text-transparent`}
          >
            {currentWord.word}
          </motion.span>
        </AnimatePresence>
      </span>{" "}
      <span className="block">un accélérateur de croissance.</span>
    </h1>
  );
}

/* INDICATORS */

function Counters() {
  const stats = [
    { value: "+47", label: "Audits réalisés" },
    { value: "+230%", label: "ROI moyen constaté" },
  ];

  return (
    <section className="mx-auto max-w-5xl px-5 pb-10 sm:px-8">
      <Reveal>
        <div className="grid grid-cols-2 divide-x divide-ink/10 rounded-2xl border border-white/80 bg-white/40 px-3 py-5 shadow-[0_15px_45px_-35px_rgba(30,30,50,.25)] backdrop-blur-xl sm:py-7">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 text-center">
              <p className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-ink-soft sm:text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* SERVICE VISUAL 01 — GOOGLE ADS AUDIT */

function AuditVisual() {
  return (
    <div className="relative mx-auto h-[175px] w-full max-w-[310px] overflow-hidden rounded-2xl border border-white/80 bg-white/60 p-3 shadow-[0_15px_40px_-25px_rgba(50,45,80,.2)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-lg bg-[#F4E8DB]">
            <BarChart3 size={15} className="text-[#8A6C55]" />
          </div>
          <div>
            <p className="text-[9px] font-semibold text-ink">Performance</p>
            <p className="text-[8px] text-ink-soft">Vue d'ensemble</p>
          </div>
        </div>
        <span className="rounded-full bg-[#DDF1E7] px-2 py-0.5 text-[8px] font-medium text-[#397A5A]">
          Analyse
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { label: "CPC moyen", value: "1,24 €", color: "text-[#9C82D3]" },
          { label: "Conversions", value: "128", color: "text-[#56A989]" },
          { label: "Budget", value: "82 %", color: "text-[#D39A80]" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-ink/5 bg-white/80 p-2"
          >
            <p className="text-[7px] text-ink-soft">{item.label}</p>
            <p className={`mt-1 text-[12px] font-semibold ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-lg border border-ink/5 bg-white/75 p-2">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[8px] font-medium text-ink">
            Évolution des performances
          </span>
          <TrendingUp size={12} className="text-[#62AD91]" />
        </div>
        <svg viewBox="0 0 280 48" className="h-10 w-full" fill="none">
          <path
            d="M0 39 C20 34 25 40 45 29 S76 32 94 22 S122 30 143 17 S177 23 194 12 S229 19 246 7 S266 10 280 3"
            stroke="#A98BD9"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 39 C20 34 25 40 45 29 S76 32 94 22 S122 30 143 17 S177 23 194 12 S229 19 246 7 S266 10 280 3 V48 H0Z"
            fill="url(#audit-fill)"
            opacity=".35"
          />
          <defs>
            <linearGradient id="audit-fill" x1="140" y1="0" x2="140" y2="48">
              <stop stopColor="#BDA6E8" />
              <stop offset="1" stopColor="#BDA6E8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-1 bottom-3 flex items-center gap-1.5 rounded-lg border border-white bg-white/95 px-2 py-1.5 shadow-lg"
      >
        <Check size={10} className="text-[#56A989]" />
        <span className="text-[8px] font-medium text-ink">
          Analyse terminée
        </span>
      </motion.div>
    </div>
  );
}

/* SERVICE VISUAL 02 — MONTHLY MANAGEMENT */

function PhoneVisual() {
  return (
    <div className="relative mx-auto flex h-[175px] w-full max-w-[310px] items-center justify-center overflow-hidden">
      <motion.div
        animate={{ y: [0, -5, 0], rotate: [-2, 0, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-[165px] w-[105px] rounded-[22px] border-[3px] border-[#38343E] bg-[#25232B] p-[5px] shadow-[0_18px_35px_-15px_rgba(30,25,45,.45)]"
      >
        <div className="relative h-full overflow-hidden rounded-[16px] bg-[#F7F3EE] px-2 pt-5">
          <div className="absolute left-1/2 top-1.5 h-1 w-7 -translate-x-1/2 rounded-full bg-[#38343E]" />

          <div className="flex items-center gap-1.5">
            <div className="grid size-5 place-items-center rounded-md bg-[#D9CCF2]">
              <span className="text-[9px] font-bold text-[#68548F]">K</span>
            </div>
            <div>
              <p className="text-[7px] font-bold text-ink">Kenshō Studio</p>
              <p className="text-[6px] text-ink-soft">Votre espace</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[7px] text-ink-soft">Bonjour !</p>
            <p className="mt-0.5 text-[9px] font-semibold text-ink">
              Votre suivi
            </p>
          </div>

          <div className="mt-2 rounded-lg border border-white bg-white p-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[6px] text-ink-soft">Performances</span>
              <TrendingUp size={9} className="text-[#62AD91]" />
            </div>
            <p className="mt-1 text-[13px] font-semibold text-ink">+24,8 %</p>
            <div className="mt-1 flex h-5 items-end gap-[3px]">
              {[8, 12, 10, 16, 13, 19, 17, 22].map((height, i) => (
                <motion.span
                  key={i}
                  animate={{ height: [height, height + 3, height] }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.08,
                    repeat: Infinity,
                  }}
                  className="w-full rounded-t-sm bg-gradient-to-t from-[#A9C7E8] to-[#C9B7E9]"
                  style={{ height }}
                />
              ))}
            </div>
          </div>

          <div className="mt-2 rounded-lg bg-[#E6F1EA] p-2">
            <p className="text-[6px] font-medium text-[#42765C]">
              Prochaine optimisation
            </p>
            <p className="mt-1 text-[7px] text-[#42765C]">
              Bilan disponible
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-5 flex max-w-[145px] items-center gap-2 rounded-xl border border-white bg-white/90 p-2 shadow-[0_12px_30px_-12px_rgba(50,45,80,.3)] backdrop-blur-xl"
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#DDF1E7]">
          <Bell size={13} className="text-[#4D9B77]" />
        </span>
        <div>
          <p className="text-[7px] font-semibold text-ink">Kenshō Studio</p>
          <p className="mt-0.5 text-[7px] leading-tight text-ink-soft">
            Votre suivi hebdomadaire est disponible.
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, -4, 0], y: [0, 4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 left-0 flex items-center gap-2 rounded-xl border border-white bg-white/90 p-2 shadow-[0_12px_30px_-12px_rgba(50,45,80,.3)] backdrop-blur-xl"
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#E9DFF8]">
          <CalendarDays size={13} className="text-[#8067B5]" />
        </span>
        <div>
          <p className="text-[7px] font-semibold text-ink">Bilan mensuel</p>
          <p className="mt-0.5 text-[7px] text-ink-soft">Prêt à consulter</p>
        </div>
      </motion.div>
    </div>
  );
}

/* SERVICE VISUAL 03 — SOCIAL MEDIA (AVEC COULEURS OFFICIELLES) */

function SocialVisual() {
  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      position: "left-[10%] top-[18%]",
      // Dégradé officiel Instagram avec icône blanche et lueur
      style:
        "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_10px_25px_-8px_rgba(220,39,67,0.65)]",
      delay: 0,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      position: "right-[10%] top-[14%]",
      // Bleu officiel LinkedIn #0A66C2
      style:
        "bg-[#0A66C2] text-white shadow-[0_10px_25px_-8px_rgba(10,102,194,0.65)]",
      delay: 0.5,
    },
    {
      name: "YouTube",
      icon: Youtube,
      position: "left-[16%] bottom-[14%]",
      // Rouge officiel YouTube #FF0000
      style:
        "bg-[#FF0000] text-white shadow-[0_10px_25px_-8px_rgba(255,0,0,0.65)]",
      delay: 1,
    },
    {
      name: "Facebook",
      icon: Facebook,
      position: "right-[15%] bottom-[12%]",
      // Bleu officiel Facebook #1877F2
      style:
        "bg-[#1877F2] text-white shadow-[0_10px_25px_-8px_rgba(24,119,242,0.65)]",
      delay: 1.5,
    },
  ];

  return (
    <div className="relative mx-auto flex h-[175px] w-full max-w-[310px] items-center justify-center overflow-hidden">
      <div className="absolute size-32 rounded-full border border-dashed border-ink/10" />
      <div className="absolute size-24 rounded-full border border-ink/10" />
      <div className="absolute size-16 rounded-full bg-gradient-to-br from-[#F6D8D0]/80 via-[#DCCCF4]/70 to-[#C6E6E0]/80 blur-[1px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute size-32 rounded-full border border-dashed border-[#B9A6DE]/40"
      />

      <div className="relative z-10 grid size-14 place-items-center rounded-2xl border border-white bg-white/85 shadow-[0_10px_30px_-12px_rgba(50,45,80,.25)] backdrop-blur-xl">
        <span className="font-display text-[23px] font-semibold tracking-tight text-ink">
          K.
        </span>
      </div>

      {platforms.map((platform) => {
        const Icon = platform.icon;

        return (
          <motion.div
            key={platform.name}
            animate={{
              y: [0, -7, 0, 5, 0],
              rotate: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: 5,
              delay: platform.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${platform.position} z-20 grid size-11 place-items-center rounded-[14px] border border-white/60 ${platform.style} backdrop-blur-xl`}
          >
            <Icon size={20} strokeWidth={2} />
          </motion.div>
        );
      })}

      <motion.span
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-[48%] top-[8%] size-2 rounded-full bg-[#B8A4E8]"
      />
      <motion.span
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[12%] right-[43%] size-2 rounded-full bg-[#E5B9A8]"
      />
    </div>
  );
}

/* OFFRES (3 CARTES GLASSMORPHISM SANS EN-TÊTE HAUT) */

const services = [
  {
    title: "Audit Google Ads",
    description:
      "Une analyse approfondie de votre compte pour identifier les points de fuite, réduire les coûts et révéler vos leviers de rentabilité.",
    href: "/reservation",
    visual: AuditVisual,
    glow: "from-[#C6B4ED]/15 to-transparent",
    points: [
      "Analyse de la structure du compte",
      "Étude des CPC et conversions",
      "Recommandations d'optimisation",
    ],
    action: "Réserver mon audit",
  },
  {
    title: "Gestion mensuelle Google Ads",
    description:
      "Un accompagnement continu pour suivre, analyser et optimiser vos campagnes au quotidien et faire grimper vos résultats.",
    href: "/services/google-ads",
    visual: PhoneVisual,
    glow: "from-[#A8D9C4]/15 to-transparent",
    points: [
      "Suivi hebdomadaire des campagnes",
      "Deux rendez-vous de suivi par mois",
      "Optimisations continues & reporting",
    ],
    action: "Découvrir l'accompagnement",
  },
  {
    title: "Gestion des réseaux sociaux",
    description:
      "Une présence digitale stratégique et impactante pour faire rayonner votre marque sur les plateformes adaptées à votre audience.",
    href: "/reseaux-sociaux",
    visual: SocialVisual,
    glow: "from-[#E8BDB3]/15 to-transparent",
    points: [
      "Stratégie sur-mesure par plateforme",
      "Création de contenu engageant",
      "Développement de communauté engagée",
    ],
    action: "Découvrir l'offre",
  },
];

function ServicesPanel() {
  return (
    <section id="expertises" className="px-5 pb-20 pt-8 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Nos expertises
            </span>
            <h2 className="mt-2 font-display text-3xl font-light tracking-[-0.05em] text-ink sm:text-4xl">
              Trois expertises.{" "}
              <span className="text-ink-soft">Un même objectif.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed text-ink-soft">
            Des solutions sur-mesure adaptées à vos ambitions et pensées pour votre développement.
          </p>
        </Reveal>

        {/* Grille des 3 Cartes Liquid Glass */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Visual = service.visual;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease,
                }}
                className="group relative flex flex-col overflow-hidden rounded-[26px] border border-white/80 bg-gradient-to-b from-white/70 via-white/45 to-white/30 p-6 shadow-[0_20px_50px_-25px_rgba(25,25,50,0.12)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white hover:bg-white/75 hover:shadow-[0_30px_70px_-20px_rgba(25,25,50,0.18)]"
              >
                {/* Lueur interne Liquid Glass */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${service.glow} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Visuel interactif en tête de carte */}
                <div className="relative z-10 rounded-2xl border border-white/60 bg-gradient-to-br from-white/80 to-white/40 p-2 shadow-inner backdrop-blur-md">
                  <Visual />
                </div>

                {/* Titre & Description */}
                <div className="relative z-10 mt-5 flex-1">
                  <h3 className="font-display text-[20px] font-semibold leading-[1.2] tracking-[-0.035em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.65] text-ink-soft">
                    {service.description}
                  </p>

                  {/* Liste des points */}
                  <ul className="mt-5 space-y-2.5 border-t border-ink/5 pt-4">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[11px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#A8D9C4]/40 text-emerald-800">
                          <Check size={10} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bouton CTA vers la page */}
                <div className="relative z-10 mt-6 border-t border-ink/10 pt-4">
                  <Link
                    to={service.href}
                    className="group/link flex items-center justify-between text-[11px] font-semibold text-ink"
                  >
                    <span>{service.action}</span>
                    <span className="grid size-8 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover/link:translate-x-1">
                      <ChevronRight size={15} />
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* CONTACT */

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br from-white/70 via-white/40 to-white/20 p-8 shadow-[0_25px_60px_-25px_rgba(25,25,50,0.12)] backdrop-blur-2xl sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-lilac/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-coral/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Contact & Échange
            </span>
            <h2 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-ink sm:text-4xl">
              Prêt à accélérer votre croissance ?
            </h2>
            <p className="mt-3 max-w-md text-[13px] leading-relaxed text-ink-soft sm:text-[14px]">
              Discutons de vos objectifs et voyons ensemble comment nos expertises peuvent booster vos résultats.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/reservation"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[12px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Réserver un appel découverte
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="mailto:kenshodigitalstudio@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-6 py-3.5 text-[12px] font-semibold text-ink shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/85"
              >
                kenshodigitalstudio@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* PAGE D'ACCUEIL PRINCIPALE */

export default function Index() {
  return (
    <main className="relative min-h-screen bg-sand text-ink">
      <Nav />

      {/* Halos lumineux d'ambiance */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-20 size-96 rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute -right-24 top-[35%] size-96 rounded-full bg-lilac/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-mint/15 blur-3xl" />
      </div>

      <section
        id="top"
        className="relative isolate px-6 pb-12 pt-32 sm:pb-14 sm:pt-36"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[10%] top-[15%] size-56 rounded-full bg-lilac/20 blur-[90px]"
          />
          <motion.div
            animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[10%] top-[25%] size-64 rounded-full bg-coral/20 blur-[100px]"
          />
        </div>

        <div className="mx-auto max-w-6xl text-center">
          {/* LOGO KENSHO STUDIO SEUL AU-DESSUS DU TITRE (SANS BULLE NI TEXTE) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex justify-center"
          >
            <img
              src="https://kenshostudio.fr/__l5e/assets-v1/1bccf095-7eb8-4dbb-bcb7-dd694703e5e6/kensho-logo.png"
              alt="Kenshō Digital Studio"
              className="h-16 w-auto object-contain sm:h-20 md:h-24 select-none"
              loading="eager"
            />
          </motion.div>

          {/* Titre dynamique */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
          >
            <DynamicHeadline />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mx-auto mt-5 max-w-[540px] text-[13px] leading-relaxed text-ink-soft sm:text-[15px]"
          >
            Kenshō Studio accompagne les entreprises dans leur développement
            digital grâce à une stratégie d'acquisition et une présence en ligne
            pensées pour générer des résultats concrets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#expertises"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-[12px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Découvrir nos expertises
              <ArrowDown
                size={14}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>

            <a
              href="mailto:kenshodigitalstudio@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/45 px-6 py-3 text-[12px] font-semibold text-ink shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/70"
            >
              Parlons de votre projet
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.18em] text-ink-soft/70"
          >
            <span className="h-px w-7 bg-ink/20" />
            Une approche pensée pour votre croissance
            <span className="h-px w-7 bg-ink/20" />
          </motion.div>
        </div>
      </section>

      <Counters />
      <ServicesPanel />
      <ContactSection />

      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
      </div>

      <Faq />
      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
