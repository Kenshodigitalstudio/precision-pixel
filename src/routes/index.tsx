
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
  MessageCircle,
  TrendingUp,
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

/* HERO TITLE */

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
    <h1 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1.13] tracking-[-0.065em] text-ink">
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

/* COUNTERS */

function Counters() {
  const stats = [
    { value: "+47", label: "Audits réalisés" },
    { value: "+230%", label: "ROI moyen constaté" },
    { value: "30 min", label: "Audit Flash" },
  ];

  return (
    <section className="mx-auto max-w-5xl px-5 pb-10 sm:px-8">
      <Reveal>
        <div className="grid grid-cols-3 divide-x divide-ink/10 rounded-2xl border border-white/80 bg-white/40 px-3 py-5 shadow-[0_15px_45px_-35px_rgba(30,30,50,.25)] backdrop-blur-xl sm:py-7">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 text-center">
              <p className="font-display text-2xl font-light tracking-tight text-ink sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.13em] text-ink-soft sm:text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* SERVICES */

const services = [
  {
    number: "01",
    eyebrow: "Analyse & recommandations",
    title: "Audit Google Ads",
    description:
      "Identifiez les points de friction et les opportunités pour améliorer vos campagnes.",
    href: "/reservation",
    points: [
      "Analyse complète du compte",
      "Étude des performances",
      "Recommandations concrètes",
    ],
    icon: BarChart3,
    accent: "bg-[#C6B4ED]",
  },
  {
    number: "02",
    eyebrow: "Pilotage & optimisation",
    title: "Gestion mensuelle Google Ads",
    description:
      "Confiez le pilotage de vos campagnes à un expert et concentrez-vous sur votre activité.",
    href: "/services/google-ads",
    points: [
      "Optimisation continue",
      "Suivi des campagnes",
      "Reporting régulier",
    ],
    icon: TrendingUp,
    accent: "bg-[#A8D9C4]",
  },
  {
    number: "03",
    eyebrow: "Visibilité & communauté",
    title: "Gestion des réseaux sociaux",
    description:
      "Développez une présence cohérente et faites rayonner votre marque.",
    href: "/reseaux-sociaux",
    points: [
      "Stratégie social media",
      "Présence multi-plateforme",
      "Développement de visibilité",
    ],
    icon: Instagram,
    accent: "bg-[#E8BDB3]",
  },
];

function ServicesPanel() {
  return (
    <section id="expertises" className="px-5 pb-20 pt-8 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
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
            Des solutions adaptées à vos ambitions et à votre développement.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/40 p-4 shadow-[0_25px_70px_-45px_rgba(30,35,60,.3)] backdrop-blur-2xl sm:p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-[#D8C9F2]/30 blur-[80px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 left-1/4 size-64 rounded-full bg-[#F2D4C4]/25 blur-[80px]"
            />

            <div className="relative grid grid-cols-1 divide-y divide-ink/10 md:grid-cols-3 md:divide-x md:divide-y-0">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                      ease,
                    }}
                    className="flex flex-col px-3 py-6 first:pt-3 last:pb-3 md:px-6 md:py-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-ink-soft">
                        SERVICE {service.number}
                      </span>
                      <span
                        className={`grid size-10 place-items-center rounded-xl ${service.accent} text-ink`}
                      >
                        <Icon size={19} strokeWidth={1.5} />
                      </span>
                    </div>

                    <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                      {service.eyebrow}
                    </p>

                    <h3 className="mt-2 min-h-[58px] font-display text-[21px] font-semibold leading-[1.12] tracking-[-0.045em] text-ink">
                      {service.title}
                    </h3>

                    <p className="mt-3 min-h-[66px] text-[12px] leading-[1.7] text-ink-soft">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-[11px] text-ink-soft"
                        >
                          <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#A8D9C4]/35 text-emerald-800">
                            <Check size={10} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.href}
                      className="group mt-7 inline-flex items-center justify-between border-t border-ink/10 pt-4 text-[11px] font-semibold text-ink"
                    >
                      Découvrir le service
                      <span className="grid size-8 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:translate-x-1">
                        <ChevronRight size={15} />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* HOMEPAGE */

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper pb-0 text-ink">
      <Nav />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-24 top-24 size-96 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute -right-24 top-[35%] size-96 rounded-full bg-lilac/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-mint/15 blur-3xl" />
      </div>

      {/* HERO */}
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
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <DynamicHeadline />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mx-auto mt-5 max-w-[540px] text-[13px] leading-relaxed text-ink-soft sm:text-[15px]"
          >
            Kenshō Studio accompagne les entreprises dans leur développement
            digital grâce à une stratégie d'acquisition et une présence en ligne
            pensées pour générer des résultats concrets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
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

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden px-6 py-12 sm:py-16">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/75 bg-white/40 px-6 py-10 text-center shadow-[0_25px_70px_-40px_rgba(30,35,60,.3)] backdrop-blur-2xl sm:px-12 sm:py-14">
          <div className="mx-auto grid size-11 place-items-center rounded-2xl border border-white bg-white/65 shadow-sm">
            <MessageCircle size={20} className="text-ink" />
          </div>

          <span className="mt-5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
            Un projet particulier ?
          </span>

          <h2 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-ink">
            Votre projet ne rentre
            <span className="block font-light text-ink-soft">
              dans aucune case ?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-relaxed text-ink-soft">
            Présentez-nous votre besoin : nous étudierons ensemble la meilleure
            façon de vous accompagner.
          </p>

          <a
            href="mailto:kenshodigitalstudio@gmail.com?subject=Parlons%20de%20mon%20projet"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-[12px] font-semibold text-white shadow-lg transition-all hover:-translate-y-1"
          >
            Échanger avec Kenshō
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
      </div>

      <Faq />
      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
