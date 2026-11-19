
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  Instagram,
  Linkedin,
  MessageCircle,
  MousePointer2,
  Play,
  TrendingUp,
  Youtube,
  Bell,
  CalendarDays,
} from "lucide-react";

import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
import { ExpertsTeam } from "@/components/landing/AuditExperts";
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
          "Kenshō Studio accompagne les marques dans leur croissance digitale : audit Google Ads, gestion de campagnes et réseaux sociaux.",
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
      {
        property: "og:image",
        content:
          "https://kenshostudio.fr/__l5e/assets-v1/a74df7cc-f01c-488f-bdbb-260add122ef8/kensho-share-1200x630.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   TITRE ANIMÉ + INDICATEURS
------------------------------------------------------- */

const HERO_WORDS = [
  { word: "visibilité", color: "from-yellow-300 via-amber-400 to-yellow-500" },
  { word: "notoriété", color: "from-pink-400 via-rose-500 to-fuchsia-500" },
  { word: "potentiel", color: "from-emerald-300 via-green-500 to-teal-500" },
  { word: "business", color: "from-red-400 via-rose-500 to-red-600" },
  { word: "marketing", color: "from-sky-400 via-blue-500 to-indigo-600" },
];

function DynamicHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_WORDS.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  const currentWord = HERO_WORDS[index];

  return (
    <h1 className="mx-auto mt-7 max-w-5xl overflow-visible font-display text-[clamp(2.6rem,7.5vw,6.2rem)] font-light leading-[1.3] tracking-[-0.06em] text-ink">
      Faites de votre{" "}
      <span className="inline-grid min-w-[6.2ch] overflow-visible align-baseline text-left">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord.word}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(5px)" }}
            transition={{ duration: 0.75, ease }}
            className={`col-start-1 row-start-1 inline-block w-fit overflow-visible bg-gradient-to-r ${currentWord.color} bg-clip-text px-[0.06em] pb-[0.16em] font-semibold leading-[1.3] text-transparent`}
          >
            {currentWord.word}
          </motion.span>
        </AnimatePresence>
      </span>{" "}
      <span className="block">un accélérateur de croissance.</span>
    </h1>
  );
}

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "+",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    let start: number | null = null;
    const duration = 2200;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return <>{prefix}{count}{suffix}</>;
}

function Counters() {
  const stats = [
    { value: 47, suffix: "", prefix: "+", label: "Audits réalisés" },
    { value: 230, suffix: "%", prefix: "+", label: "ROI moyen constaté" },
    { value: 30, suffix: " min", prefix: "", label: "Audit Flash" },
  ];

  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-5 pb-12 sm:-mt-10 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/75 bg-white/35 p-6 shadow-[0_20px_60px_-30px_rgba(20,30,60,0.18)] backdrop-blur-2xl sm:p-9">
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/65 via-white/15 to-white/5" />
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-white/55 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute inset-[1px] rounded-[23px] border border-white/40" />

          <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: index * 0.15, ease }}
                className="text-center"
              >
                <div className="font-display text-5xl font-light tracking-tight text-ink sm:text-6xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------
   SERVICE VISUAL 01 — GOOGLE ADS AUDIT
------------------------------------------------------- */

function AuditVisual() {
  return (
    <div className="audit-visual relative mx-auto h-[230px] w-full max-w-[390px]">
      <div className="absolute left-[5%] top-[10%] h-48 w-48 rounded-full bg-electric/20 blur-[65px]" />
      <div className="absolute bottom-0 right-[5%] h-36 w-36 rounded-full bg-solar/25 blur-[60px]" />

      <motion.div
        animate={{ y: [0, -5, 0], rotate: [-0.5, 0.5, -0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/70 bg-white/55 p-4 shadow-[0_24px_65px_-30px_rgba(30,40,70,0.35)] backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between border-b border-ink/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="grid size-7 place-items-center rounded-lg bg-white shadow-sm">
              <BarChart3 size={15} className="text-electric" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-ink">Vue d'ensemble</p>
              <p className="text-[8px] text-ink-soft">Performance du compte</p>
            </div>
          </div>
          <span className="rounded-full bg-mint/25 px-2 py-1 text-[8px] font-semibold text-emerald-800">
            Analyse active
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 py-3">
          {[
            { label: "Conversions", value: "128", change: "+18,4%" },
            { label: "CPC moyen", value: "0,84 €", change: "−12,2%" },
            { label: "Budget", value: "2 450 €", change: "Optimisé" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/70 bg-white/55 p-2"
            >
              <p className="text-[8px] text-ink-soft">{item.label}</p>
              <p className="mt-1 text-[15px] font-semibold tracking-tight text-ink">
                {item.value}
              </p>
              <p className="mt-1 text-[8px] font-medium text-emerald-700">
                {item.change}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between gap-1 px-1 pt-1">
          {[32, 45, 38, 60, 48, 72, 55, 83, 68, 92, 74, 100].map(
            (height, i) => (
              <motion.div
                key={i}
                initial={{ height: 5 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.045, ease }}
                className="w-full rounded-t-sm bg-gradient-to-t from-electric/60 to-sky/40"
                style={{ height: `${height}%`, minHeight: 8 }}
              />
            ),
          )}
        </div>
        <div className="mt-2 flex items-center justify-between text-[8px] text-ink-soft">
          <span>Évolution des performances</span>
          <span>12 derniers mois</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-1 top-7 z-10 flex items-center gap-2 rounded-xl border border-white/80 bg-white/85 px-3 py-2 shadow-lg backdrop-blur-xl"
      >
        <span className="grid size-7 place-items-center rounded-full bg-mint/30 text-emerald-700">
          <TrendingUp size={14} />
        </span>
        <span className="text-[9px] font-semibold text-ink">
          Opportunités détectées
        </span>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------
   SERVICE VISUAL 02 — MONTHLY MANAGEMENT
------------------------------------------------------- */

function ManagementVisual() {
  return (
    <div className="management-visual relative mx-auto flex h-[230px] w-full max-w-[390px] items-center justify-center">
      <div className="absolute left-[10%] top-[15%] size-40 rounded-full bg-electric/20 blur-[65px]" />
      <div className="absolute bottom-[5%] right-[8%] size-40 rounded-full bg-mint/30 blur-[65px]" />

      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 h-[205px] w-[112px] rounded-[25px] border-[4px] border-[#30343d] bg-[#171a20] p-[5px] shadow-[0_25px_55px_-20px_rgba(20,25,40,0.5)]"
      >
        <div className="relative h-full overflow-hidden rounded-[18px] bg-gradient-to-b from-[#f7f9fc] to-[#e9eef5]">
          <div className="absolute left-1/2 top-1.5 h-3 w-10 -translate-x-1/2 rounded-full bg-[#171a20]" />

          <div className="px-2.5 pt-7">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-bold tracking-tight text-ink">
                Kenshō
              </span>
              <Bell size={10} className="text-ink-soft" />
            </div>

            <p className="mt-5 text-[7px] text-ink-soft">Bonjour !</p>
            <p className="text-[10px] font-semibold leading-tight text-ink">
              Votre activité
              <br />
              en un coup d'œil.
            </p>

            <div className="mt-3 rounded-lg border border-white bg-white/85 p-2 shadow-sm">
              <div className="flex items-center gap-1.5">
                <div className="grid size-5 place-items-center rounded-md bg-electric/15">
                  <BarChart3 size={10} className="text-electric" />
                </div>
                <span className="text-[7px] font-semibold text-ink">
                  Google Ads
                </span>
              </div>
              <div className="mt-2 flex items-end gap-1">
                {[30, 48, 38, 65, 52, 80, 72].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-t-sm bg-electric/65"
                    style={{ height: h / 3 }}
                  />
                ))}
              </div>
              <p className="mt-1 text-[6px] text-ink-soft">
                Performances actualisées
              </p>
            </div>

            <div className="mt-2 rounded-lg border border-white bg-white/85 p-2 shadow-sm">
              <div className="flex items-center gap-1">
                <CalendarDays size={9} className="text-electric" />
                <span className="text-[7px] font-semibold text-ink">
                  Prochain suivi
                </span>
              </div>
              <p className="mt-1 text-[7px] text-ink-soft">
                Votre point hebdomadaire
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[2%] top-[25%] z-20 flex max-w-[190px] items-center gap-2 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_15px_35px_-15px_rgba(30,40,70,0.3)] backdrop-blur-xl"
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-mint/25 text-emerald-700">
          <Check size={16} />
        </span>
        <div>
          <p className="text-[9px] font-semibold text-ink">
            Kenshō Studio
          </p>
          <p className="mt-0.5 text-[8px] leading-tight text-ink-soft">
            Votre suivi hebdomadaire est disponible.
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, -4, 0], y: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[17%] left-[1%] z-20 flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-xl"
      >
        <span className="size-2 rounded-full bg-emerald-500" />
        <span className="text-[8px] font-semibold text-ink">
          Campagnes suivies
        </span>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------
   SERVICE VISUAL 03 — SOCIAL MEDIA
------------------------------------------------------- */

function SocialVisual() {
  const bubbles = [
    {
      name: "Instagram",
      icon: <Instagram size={23} />,
      className: "left-[12%] top-[15%]",
      size: "size-[58px]",
      delay: 0,
      color: "from-orange-400 via-pink-500 to-purple-600",
    },
    {
      name: "TikTok",
      icon: <span className="text-[25px] font-black">♪</span>,
      className: "right-[15%] top-[10%]",
      size: "size-[53px]",
      delay: 0.8,
      color: "from-[#252525] to-[#090909]",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      className: "left-[4%] top-[55%]",
      size: "size-[49px]",
      delay: 1.3,
      color: "from-[#2385c9] to-[#07558f]",
    },
    {
      name: "YouTube",
      icon: <Youtube size={23} />,
      className: "right-[7%] top-[55%]",
      size: "size-[56px]",
      delay: 0.4,
      color: "from-[#ff5252] to-[#d90000]",
    },
    {
      name: "Facebook",
      icon: <span className="text-[26px] font-bold">f</span>,
      className: "left-[29%] bottom-[5%]",
      size: "size-[43px]",
      delay: 1.7,
      color: "from-[#3295ff] to-[#1763c5]",
    },
  ];

  return (
    <div className="social-visual relative mx-auto h-[230px] w-full max-w-[390px]">
      <div className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/15 blur-[65px]" />
      <div className="absolute left-1/2 top-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-solar/25 blur-[55px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 size-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/15"
      />

      <motion.div
        animate={{ y: [0, -5, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 z-10 grid size-[94px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[27px] border border-white/80 bg-white/65 shadow-[0_20px_50px_-18px_rgba(40,35,60,0.25)] backdrop-blur-2xl"
      >
        <div className="text-center">
          <div className="mx-auto grid size-9 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-solar/30">
            <MousePointer2 size={19} className="text-ink" />
          </div>
          <p className="mt-2 text-[9px] font-semibold text-ink">
            Votre marque
          </p>
        </div>
      </motion.div>

      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.name}
          animate={{ y: [0, -9, 0], x: [0, 4, 0], rotate: [0, 4, 0] }}
          transition={{
            duration: 5 + bubble.delay,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute z-20 ${bubble.className}`}
        >
          <div
            title={bubble.name}
            className={`${bubble.size} grid place-items-center rounded-2xl bg-gradient-to-br ${bubble.color} text-white shadow-[0_15px_30px_-12px_rgba(20,20,35,0.4)] ring-1 ring-white/50`}
          >
            {bubble.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------
   SERVICE CARD
------------------------------------------------------- */

function ServiceCard({
  number,
  eyebrow,
  title,
  description,
  href,
  visual,
  points,
  accent,
  delay,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  visual: React.ReactNode;
  points: string[];
  accent: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={href}
        className="service-card group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/70 bg-white/35 p-5 shadow-[0_18px_55px_-35px_rgba(30,35,60,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-white/55 hover:shadow-[0_28px_65px_-30px_rgba(30,35,60,0.35)] sm:p-7"
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-60 blur-[65px] transition-opacity duration-500 group-hover:opacity-90 ${accent}`}
        />

        <div className="relative z-10 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink-soft">
            SERVICE {number}
          </span>
          <span className="grid size-9 place-items-center rounded-full border border-white/80 bg-white/55 text-ink-soft transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="relative z-10 mt-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            {eyebrow}
          </p>
          <h3 className="mt-2 max-w-[300px] font-display text-[25px] font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-[28px]">
            {title}
          </h3>
          <p className="mt-3 max-w-[340px] text-[13px] leading-relaxed text-ink-soft sm:text-[14px]">
            {description}
          </p>
        </div>

        <div className="relative z-10 my-3 flex min-h-[230px] items-center">
          {visual}
        </div>

        <div className="relative z-10 mt-auto border-t border-ink/10 pt-4">
          <ul className="space-y-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[12px] text-ink-soft"
              >
                <span className="grid size-4 shrink-0 place-items-center rounded-full bg-mint/30 text-emerald-800">
                  <Check size={10} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-[12px] font-semibold text-ink">
              Découvrir le service
            </span>
            <span className="flex size-8 items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:translate-x-1">
              <ChevronRight size={15} />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* -------------------------------------------------------
   HOMEPAGE
------------------------------------------------------- */

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-paper pb-0 text-ink">
      <Nav />

      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-24 top-24 size-96 rounded-full bg-electric/15 blur-3xl" />
        <div className="absolute -right-24 top-[35%] size-96 rounded-full bg-solar/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-mint/15 blur-3xl" />
      </div>

      {/* HERO */}
      <section
        id="top"
        className="relative isolate overflow-hidden px-6 pb-16 pt-36 sm:pb-20 sm:pt-44"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[15%] size-64 rounded-full bg-electric/15 blur-[90px]"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[8%] top-[25%] size-72 rounded-full bg-solar/20 blur-[100px]"
          />
          <div className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/45 px-4 py-2 shadow-sm backdrop-blur-xl"
          >
            <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft sm:text-[10px]">
              Stratégie · Acquisition · Performance
            </span>
          </motion.div>

          <motion.img
            src="/kensho-logo.png"
            alt="Kenshō Digital Studio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="mx-auto mb-2 h-auto w-[210px] object-contain sm:w-[260px] md:w-[290px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
          >
            <DynamicHeadline />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease }}
            className="mx-auto mt-7 max-w-[590px] text-[14px] leading-relaxed text-ink-soft sm:text-[16px] sm:leading-[1.8]"
          >
            Kenshō Studio accompagne les entreprises dans leur développement
            digital grâce à une stratégie d'acquisition et une présence en ligne
            pensées pour générer des résultats concrets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#expertises"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[13px] font-semibold text-white shadow-[0_15px_35px_-15px_rgba(20,25,40,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(20,25,40,0.6)]"
            >
              Découvrir nos expertises
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
            <a
              href="mailto:kenshodigitalstudio@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/45 px-7 py-3.5 text-[13px] font-semibold text-ink shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/70"
            >
              Parlons de votre projet
              <ArrowUpRight size={15} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.2em] text-ink-soft/70"
          >
            <span className="h-px w-8 bg-ink/20" />
            Une approche pensée pour votre croissance
            <span className="h-px w-8 bg-ink/20" />
          </motion.div>
        </div>
      </section>

      <Counters />

      {/* SERVICES */}
      <section
        id="expertises"
        className="relative px-5 pb-20 pt-8 sm:px-6 sm:pb-28"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                Nos expertises
              </span>
              <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-ink">
                Trois expertises.
                <span className="block font-light text-ink-soft">
                  Un même objectif : avancer.
                </span>
              </h2>
            </div>
            <p className="max-w-[330px] text-[13px] leading-relaxed text-ink-soft">
              Du diagnostic à la gestion quotidienne, choisissez
              l'accompagnement adapté à vos ambitions.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            <ServiceCard
              number="01"
              eyebrow="Analyse & recommandations"
              title="Audit Google Ads"
              description="Prenez du recul sur vos campagnes. Identifiez les points de friction et les opportunités d'optimisation."
              href="/reservation"
              visual={<AuditVisual />}
              points={[
                "Analyse de votre compte",
                "Lecture des performances",
                "Recommandations concrètes",
              ]}
              accent="bg-electric/30"
              delay={0}
            />

            <ServiceCard
              number="02"
              eyebrow="Pilotage & optimisation"
              title="Gestion mensuelle Google Ads"
              description="Confiez le pilotage de vos campagnes à un expert et concentrez-vous sur votre activité."
              href="/services/google-ads"
              visual={<ManagementVisual />}
              points={[
                "Optimisation continue",
                "Suivi régulier des campagnes",
                "Reporting et accompagnement",
              ]}
              accent="bg-mint/35"
              delay={0.1}
            />

            <ServiceCard
              number="03"
              eyebrow="Visibilité & communauté"
              title="Gestion des réseaux sociaux"
              description="Développez une présence cohérente et faites rayonner votre marque auprès de vos audiences."
              href="/reseaux-sociaux"
              visual={<SocialVisual />}
              points={[
                "Stratégie social media",
                "Présence multi-plateforme",
                "Développement de visibilité",
              ]}
              accent="bg-coral/25"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* TEAM — EXISTING SECTION */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
        </div>
        <ExpertsTeam />
      </section>

      {/* SPECIFIC REQUESTS */}
      <section id="contact" className="relative overflow-hidden px-6 py-16 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-[15%] top-1/2 size-56 -translate-y-1/2 rounded-full bg-electric/15 blur-[85px]" />
          <div className="absolute right-[15%] top-1/2 size-56 -translate-y-1/2 rounded-full bg-solar/20 blur-[85px]" />
        </div>

        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/75 bg-white/40 px-6 py-12 text-center shadow-[0_25px_70px_-40px_rgba(30,35,60,0.35)] backdrop-blur-2xl sm:px-12 sm:py-16">
          <div className="mx-auto grid size-12 place-items-center rounded-2xl border border-white bg-white/65 shadow-sm">
            <MessageCircle size={21} className="text-ink" />
          </div>

          <span className="mt-6 block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
            Un projet particulier ?
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-ink">
            Votre projet ne rentre
            <span className="block font-light text-ink-soft">
              dans aucune case ?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-ink-soft">
            Chaque entreprise a ses propres enjeux. Présentez-nous votre
            besoin : nous étudierons ensemble la meilleure façon de vous
            accompagner.
          </p>

          <a
            href="mailto:kenshodigitalstudio@gmail.com?subject=Parlons%20de%20mon%20projet"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[13px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Échanger avec Kenshō
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
      </div>
      <Faq />

      <Footer />
      <Toaster position="bottom-right" />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .service-card {
          transform-style: preserve-3d;
        }

        @media (hover: hover) and (pointer: fine) {
          .service-card:hover .audit-visual,
          .service-card:hover .management-visual,
          .service-card:hover .social-visual {
            filter: saturate(1.08);
          }
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
