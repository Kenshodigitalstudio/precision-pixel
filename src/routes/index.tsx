
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  MousePointer2,
  TrendingUp,
  Target,
  Sparkles,
} from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kenshō Studio — Stratégie digitale & performance" },
      {
        name: "description",
        content:
          "Kenshō Studio accompagne les entreprises dans leur stratégie digitale, Google Ads et leur croissance.",
      },
    ],
  }),
});

/* ========================================================
   TITRE ANIMÉ
   ======================================================== */

const HERO_WORDS = [
  {
    word: "visibilité",
    color: "from-yellow-300 via-amber-400 to-yellow-500",
  },
  {
    word: "notoriété",
    color: "from-pink-400 via-rose-500 to-fuchsia-500",
  },
  {
    word: "potentiel",
    color: "from-emerald-300 via-green-500 to-teal-500",
  },
  {
    word: "business",
    color: "from-red-400 via-rose-500 to-red-600",
  },
  {
    word: "marketing",
    color: "from-sky-400 via-blue-500 to-indigo-600",
  },
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
    <div className="mx-auto max-w-5xl px-2">
      <h1 className="overflow-visible font-display text-[clamp(2.2rem,5.5vw,4.7rem)] font-light leading-[1.35] tracking-[-0.055em] text-ink">
        Faites de votre{" "}
        <span className="inline-grid min-w-[5.8ch] overflow-visible align-baseline text-left">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord.word}
              initial={{
                opacity: 0,
                y: 12,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -10,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`col-start-1 row-start-1 inline-block w-fit overflow-visible bg-gradient-to-r ${currentWord.color} bg-clip-text px-[0.04em] pb-[0.12em] font-semibold leading-[1.3] text-transparent`}
            >
              {currentWord.word}
            </motion.span>
          </AnimatePresence>
        </span>{" "}
        un accélérateur
        <span className="block">de croissance.</span>
      </h1>
    </div>
  );
}

/* ========================================================
   ANIMATIONS AU DÉFILEMENT
   ======================================================== */

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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ========================================================
   INDICATEURS ANIMÉS
   ======================================================== */

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

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

function Counters() {
  const stats = [
    {
      value: 47,
      suffix: "",
      prefix: "+",
      label: "Audits réalisés",
    },
    {
      value: 230,
      suffix: "%",
      prefix: "+",
      label: "ROI moyen constaté",
    },
    {
      value: 30,
      suffix: " min",
      prefix: "",
      label: "Audit Flash",
    },
  ];

  return (
    <section className="relative mx-auto max-w-5xl px-5 pb-16 pt-2 sm:px-8 sm:pt-3">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/35 p-7 shadow-[0_20px_60px_-30px_rgba(20,30,60,0.18)] backdrop-blur-2xl sm:p-10">
          {/* Reflet supérieur */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/65 via-white/15 to-white/5"
          />

          {/* Lumière diffuse */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-white/60 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/30 blur-3xl"
          />

          {/* Contour intérieur */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[1px] rounded-[23px] border border-white/40"
          />

          <div className="relative grid grid-cols-1 gap-9 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center"
              >
                <div className="font-display text-5xl font-light tracking-tight text-ink sm:text-6xl">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>

                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
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

/* ========================================================
   SERVICES
   ======================================================== */

const SERVICES = [
  {
    number: "01",
    icon: <Target className="h-6 w-6" />,
    title: "Audit & stratégie",
    description:
      "Identifiez les opportunités, les points de blocage et les leviers qui peuvent réellement améliorer vos performances.",
    color: "text-sky",
    link: "/services/google-ads",
    linkText: "Découvrir notre approche",
  },
  {
    number: "02",
    icon: <MousePointer2 className="h-6 w-6" />,
    title: "Google Ads",
    description:
      "Structurez et optimisez vos campagnes pour attirer les bonnes audiences et transformer votre budget en résultats.",
    color: "text-electric",
    link: "/services/google-ads",
    linkText: "Découvrir Google Ads",
  },
  {
    number: "03",
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Tracking & performance",
    description:
      "Mesurez précisément vos résultats grâce à une configuration fiable de vos données et de vos conversions.",
    color: "text-mint",
    link: "/services/google-ads",
    linkText: "Découvrir notre méthode",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.12}>
      <Link
        to={service.link}
        className="group relative flex h-full flex-col rounded-2xl border border-ink/10 bg-white/50 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-electric/30 hover:bg-white hover:shadow-[0_25px_60px_-25px_rgba(20,30,60,0.16)]"
      >
        <div className="flex items-center justify-between">
          <span className={service.color}>{service.icon}</span>
          <span className="font-mono text-sm text-ink-soft/40">
            {service.number}
          </span>
        </div>

        <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink">
          {service.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {service.description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-ink transition-colors group-hover:text-electric">
          {service.linkText}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
      </Link>
    </Reveal>
  );
}

/* ========================================================
   PAGE D'ACCUEIL
   ======================================================== */

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper font-display text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-electric/[0.035] blur-[110px]" />
        <div className="absolute -right-40 top-[35%] h-[32rem] w-[32rem] rounded-full bg-solar/[0.045] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[25rem] w-[25rem] rounded-full bg-mint/[0.035] blur-[110px]" />
      </div>

      <Nav />

      {/* HERO */}
      <section className="relative mx-auto flex min-h-[570px] max-w-7xl flex-col items-center justify-center px-5 pb-8 pt-28 text-center sm:pt-32">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Kenshō Digital Studio
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <DynamicHeadline />
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Nous aidons les entreprises à y voir plus clair dans leur
            marketing digital et à transformer leurs ambitions en résultats
            mesurables.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Parlons de votre projet
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#services"
              className="rounded-full border border-ink/15 px-7 py-4 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              Découvrir nos services
            </a>
          </div>
        </Reveal>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-ink-soft/40"
          >
            <span className="text-[10px] uppercase tracking-[0.25em]">
              Explorer
            </span>
            <div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-ink/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* INDICATEURS */}
      <Counters />

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-electric">
            Nos expertises
          </span>

          <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
            Le bon levier.
            <span className="font-semibold"> Au bon moment.</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Une approche centrée sur l'essentiel : comprendre vos enjeux,
            construire une stratégie pertinente et mesurer ce qui compte.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="border-y border-ink/5 bg-white/30">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-electric">
              La vision de l'essentiel
            </span>

            <h2 className="mt-5 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Le marketing digital ne devrait pas être un brouillard technique.
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Notre rôle ? Apporter le Kenshō, l'illumination à votre
              structure. Nous aidons les entrepreneurs à comprendre leurs
              performances et à prendre les bonnes décisions.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Pas de gestion de compte à rallonge, juste de l'expertise,
              de la stratégie et une implémentation technique précise.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4">
              {[
                {
                  title: "Audit Flash — 30 min",
                  description:
                    "Un premier échange pour débloquer votre stratégie et identifier les priorités.",
                },
                {
                  title: "Accompagnement TAG",
                  description:
                    "Une mesure fiable de vos performances pour prendre des décisions éclairées.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-ink/10 bg-white/70 p-6 transition-all duration-300 hover:border-electric/30 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white">
                      {index === 0 ? (
                        <Sparkles className="h-4 w-4" />
                      ) : (
                        <TrendingUp className="h-4 w-4" />
                      )}
                    </span>

                    <h3 className="font-semibold text-ink">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-electric">
            Notre engagement
          </span>

          <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
            Ce qu'on vous garantit,
            <span className="font-semibold"> dès le premier appel.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Un audit clair pendant l'appel",
              text: "30 minutes en visio pour passer votre compte au crible : structure, mots-clés et conversions. Vous repartez avec des actions concrètes.",
            },
            {
              number: "02",
              title: "Des experts spécialisés Google Ads",
              text: "Des professionnels qui connaissent la plateforme et ses mécanismes. Pas de généralistes : une expertise orientée performance.",
            },
            {
              number: "03",
              title: "Un contact humain avant le rendez-vous",
              text: "Dès la prise de rendez-vous, votre expert prend contact pour se présenter et confirmer le créneau. Un échange humain, dès le départ.",
            },
          ].map((item, index) => (
            <Reveal key={item.number} delay={index * 0.1}>
              <div className="h-full border-t border-ink/15 pt-6">
                <span className="font-mono text-sm text-electric">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs text-emerald-600">
                  <Check className="h-4 w-4" />
                  <span>Notre engagement Kenshō</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RISQUES */}
      <section className="border-y border-ink/5 bg-white/30">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-coral">
              Les risques
            </span>

            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Ce qu'un compte sans expertise vous coûte vraiment.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-7">
                <span className="font-mono text-sm text-coral">01</span>

                <h3 className="mt-4 text-xl font-semibold">
                  Dépenses de budget inutiles
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Sans expertise, le budget peut partir dans des mots-clés
                  non rentables, des audiences mal ciblées et des enchères
                  mal calibrées. Chaque euro mal dépensé est un euro qui ne
                  reviendra pas.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-7">
                <span className="font-mono text-sm text-coral">02</span>

                <h3 className="mt-4 text-xl font-semibold">
                  Mauvaise utilisation des données
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Un tracking approximatif entraîne des décisions basées sur
                  des chiffres erronés : conversions doublées, événements
                  manquants ou attribution défaillante.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-5 py-28 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/70 px-7 py-16 text-center shadow-[0_30px_90px_-45px_rgba(20,30,60,0.2)] sm:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-electric/[0.06] blur-3xl"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-electric">
              Premier échange
            </span>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Et si on faisait le point sur votre stratégie ?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-soft">
              Parlons de votre activité, de vos objectifs et des leviers
              qui pourraient améliorer vos performances.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/reservation"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Réserver mon premier échange
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                to="/services/google-ads"
                className="text-sm font-medium text-ink-soft transition-colors hover:text-electric"
              >
                Découvrir notre accompagnement
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Faq />
      <Footer />
      <Toaster />
    </main>
  );
}
