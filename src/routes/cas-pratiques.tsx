
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  ShoppingBag,
  Store,
  UtensilsCrossed,
  Target,
  Clock3,
  LineChart,
  CheckCircle2,
  TrendingUp,
  MousePointerClick,
  Sparkles,
} from "lucide-react";

import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/cas-pratiques")({
  component: CasPratiques,
  head: () => ({
    meta: [
      { title: "Cas pratiques & simulations — Kenshō Studio" },
      {
        name: "description",
        content:
          "Découvrez des exemples illustratifs de stratégies Google Ads pour différents secteurs d'activité.",
      },
    ],
  }),
});

const ease = [0.22, 1, 0.36, 1] as const;

const cases = [
  {
    number: "01",
    slug: "immobilier",
    category: "Immobilier",
    title: "Générer des prospects qualifiés.",
    description:
      "Développer la visibilité d'une agence immobilière et attirer des acquéreurs ou vendeurs réellement intéressés sur une zone géographique ciblée.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Architecture contemporaine et maison immobilière",
    icon: Building2,
    color: "#B99CEB",
    pale: "#F0E9FA",
    dark: "#8063B4",
    metrics: [
      { value: "+45 %", label: "Prospects" },
      { value: "−32 %", label: "Coût par prospect" },
      { value: "+28 %", label: "Conversions" },
    ],
    chart: [22, 28, 25, 38, 35, 47, 44, 59, 65, 72, 78, 91],
    chartLabel: "Évolution des prospects",
    strategy: [
      "Ciblage géographique précis",
      "Mots-clés immobiliers qualifiés",
      "Annonces orientées conversion",
      "Suivi des formulaires et appels",
    ],
  },
  {
    number: "02",
    slug: "e-commerce",
    category: "E-commerce",
    title: "Transformer les clics en ventes.",
    description:
      "Améliorer la rentabilité d'une boutique en ligne grâce à une structure publicitaire optimisée et une meilleure exploitation du budget.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Expérience d'achat et paiement dans un commerce",
    icon: ShoppingBag,
    color: "#E7A99B",
    pale: "#FBECE8",
    dark: "#B97869",
    metrics: [
      { value: "+62 %", label: "Ventes" },
      { value: "×2,4", label: "ROAS simulé" },
      { value: "−28 %", label: "Coût par vente" },
    ],
    chart: [18, 23, 30, 28, 40, 45, 53, 50, 67, 73, 82, 94],
    chartLabel: "Évolution des ventes",
    strategy: [
      "Structure des campagnes Shopping",
      "Optimisation du flux produits",
      "Analyse des requêtes commerciales",
      "Réallocation du budget",
    ],
  },
  {
    number: "03",
    slug: "entreprise-locale",
    category: "Entreprise locale",
    title: "Attirer davantage de clients.",
    description:
      "Renforcer la présence d'une entreprise locale sur Google et générer davantage de contacts dans sa zone de chalandise.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Intérieur chaleureux d'un établissement local",
    icon: Store,
    color: "#8CCBB2",
    pale: "#E8F5EF",
    dark: "#4F9C7C",
    metrics: [
      { value: "+70 %", label: "Contacts" },
      { value: "−35 %", label: "Coût par contact" },
      { value: "+48 %", label: "Visites web" },
    ],
    chart: [15, 21, 24, 32, 36, 43, 49, 55, 61, 68, 79, 88],
    chartLabel: "Évolution des contacts",
    strategy: [
      "Ciblage des recherches locales",
      "Mots-clés prioritaires",
      "Optimisation des annonces",
      "Analyse des appels entrants",
    ],
  },
  {
    number: "04",
    slug: "restauration",
    category: "Restauration",
    title: "Remplir davantage de tables.",
    description:
      "Développer la visibilité d'un restaurant, attirer de nouveaux clients et générer davantage de réservations grâce à des campagnes Google Ads ciblées sur sa zone de chalandise.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Restaurant élégant avec une table dressée",
    icon: UtensilsCrossed,
    color: "#8CCBB2",
    pale: "#E8F5EF",
    dark: "#4F9C7C",
    metrics: [
      { value: "+55 %", label: "Réservations" },
      { value: "−30 %", label: "Coût par contact" },
      { value: "+42 %", label: "Visites web" },
    ],
    chart: [16, 22, 25, 34, 39, 45, 53, 59, 64, 73, 82, 93],
    chartLabel: "Évolution des réservations",
    strategy: [
      "Ciblage géographique local",
      "Campagnes sur les recherches restaurant",
      "Mise en avant des spécialités",
      "Suivi des appels et réservations",
    ],
  },
];

function PerformanceChart({
  values,
  color,
  id,
}: {
  values: number[];
  color: string;
  id: string;
}) {
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 320;
      const y = 115 - value * 0.95;
      return `${x},${y}`;
    })
    .join(" ");

  const lastValue = values[values.length - 1];
  const lastY = 115 - lastValue * 0.95;

  return (
    <svg
      viewBox="0 0 320 135"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label="Graphique illustratif de progression"
    >
      <defs>
        <linearGradient id={`fill-${id}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity=".38" />
          <stop offset="100%" stopColor={color} stopOpacity=".015" />
        </linearGradient>
      </defs>

      {[25, 55, 85, 115].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="320"
          y2={y}
          stroke="#8A8194"
          strokeOpacity=".14"
          strokeDasharray="3 6"
        />
      ))}

      <polygon
        points={`0,135 ${points} 320,135`}
        fill={`url(#fill-${id})`}
      />

      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="320" cy={lastY} r="8" fill={color} opacity=".16" />
      <circle cx="320" cy={lastY} r="4" fill={color} />
    </svg>
  );
}

function CaseCard({
  item,
  index,
}: {
  item: (typeof cases)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      id={item.slug}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease }}
      className="group scroll-mt-28 overflow-hidden rounded-[30px] border border-white/80 bg-white/60 shadow-[0_25px_70px_-42px_rgba(30,25,45,.25)] backdrop-blur-xl"
    >
      {/* IMAGE + IDENTITÉ DU SECTEUR */}
      <div className="relative h-[230px] overflow-hidden sm:h-[290px]">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.045]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#211D2B]/75 via-[#211D2B]/10 to-transparent" />

        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-xl sm:left-7 sm:top-7">
          <Icon size={14} />
          {item.category}
        </div>

        <span className="absolute right-5 top-5 font-display text-4xl font-light text-white/75 sm:right-7 sm:top-7">
          {item.number}
        </span>

        <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8">
          <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[.15em] text-white backdrop-blur-md">
            Simulation illustrative
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-[-.04em] text-white sm:text-4xl">
            {item.title}
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_.9fr]">
        {/* CONTENU */}
        <div className="p-5 sm:p-8 lg:p-9">
          <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
            {item.description}
          </p>

          {/* INDICATEURS */}
          <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
            {item.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white bg-white/75 p-3 text-center shadow-[0_8px_25px_-20px_rgba(30,25,45,.3)] sm:p-4"
                style={{ backgroundColor: item.pale }}
              >
                <p
                  className="font-display text-xl font-semibold tracking-tight sm:text-2xl"
                  style={{ color: item.dark }}
                >
                  {metric.value}
                </p>
                <p className="mt-1 text-[9px] leading-tight text-ink-soft sm:text-[10px]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* STRATÉGIE */}
          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2">
              <div
                className="grid size-8 place-items-center rounded-xl"
                style={{ backgroundColor: item.pale }}
              >
                <Target size={15} style={{ color: item.dark }} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[.15em] text-ink">
                Notre approche stratégique
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {item.strategy.map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: item.dark }}
                  />
                  <span className="text-[11px] leading-relaxed text-ink-soft">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GRAPHIQUE */}
        <div className="flex flex-col justify-center border-t border-ink/5 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
          <div
            className="rounded-[25px] p-5 sm:p-6"
            style={{ backgroundColor: item.pale }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[.15em] text-ink-soft">
                  Projection
                </span>
                <h3 className="mt-1 font-display text-xl font-medium text-ink">
                  {item.chartLabel}
                </h3>
              </div>
              <div
                className="grid size-10 place-items-center rounded-2xl bg-white/75"
                style={{ color: item.dark }}
              >
                <TrendingUp size={19} />
              </div>
            </div>

            <div className="mt-6">
              <PerformanceChart
                values={item.chart}
                color={item.dark}
                id={item.number}
              />
            </div>

            <div className="mt-1 flex justify-between text-[9px] font-medium text-ink-soft">
              <span>Mois 1</span>
              <span>Mois 2</span>
              <span>Mois 3</span>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/80 bg-white/65 px-4 py-3">
              <div className="flex items-center gap-2">
                <Sparkles size={14} style={{ color: item.dark }} />
                <span className="text-[10px] font-semibold text-ink">
                  Projection indicative
                </span>
              </div>
              <span className="text-[9px] text-ink-soft">
                Données fictives
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 px-1">
            <div
              className="grid size-9 shrink-0 place-items-center rounded-xl"
              style={{ backgroundColor: item.pale, color: item.dark }}
            >
              <MousePointerClick size={16} />
            </div>
            <p className="text-[10px] leading-relaxed text-ink-soft">
              L'objectif : transformer le budget publicitaire en opportunités
              commerciales mesurables.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CasPratiques() {
  const industries = [
    { label: "Immobilier", href: "#immobilier" },
    { label: "E-commerce", href: "#e-commerce" },
    { label: "Entreprise locale", href: "#entreprise-locale" },
    { label: "Restauration", href: "#restauration" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-paper"
      />

      {/* AMBIANCE COLORÉE */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 size-[30rem] rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute -right-40 top-[30%] size-[34rem] rounded-full bg-lilac/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-mint/20 blur-3xl" />
      </div>

      <Nav />

      {/* HERO */}
      <section className="relative isolate overflow-hidden px-5 pb-24 pt-36 text-center sm:px-8 sm:pt-44">
        {/* GRAPHIQUE EN FILIGRANE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[620px] max-w-[1300px] overflow-hidden"
        >
          <svg
            viewBox="0 0 1200 560"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 h-full w-full opacity-55 blur-[1.5px]"
          >
            <defs>
              <linearGradient
                id="heroChartLine"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#A9D9BD" stopOpacity="0" />
                <stop offset="35%" stopColor="#79BDA2" stopOpacity=".55" />
                <stop offset="70%" stopColor="#43A878" stopOpacity=".8" />
                <stop offset="100%" stopColor="#B5E8CB" stopOpacity=".1" />
              </linearGradient>

              <linearGradient
                id="heroChartArea"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#79BDA2" stopOpacity=".2" />
                <stop offset="100%" stopColor="#79BDA2" stopOpacity="0" />
              </linearGradient>

              <filter id="heroChartGlow">
                <feGaussianBlur stdDeviation="10" />
              </filter>

              <mask id="heroChartFade">
                <linearGradient
                  id="heroFadeMask"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="white" stopOpacity=".05" />
                  <stop offset="35%" stopColor="white" stopOpacity=".8" />
                  <stop offset="75%" stopColor="white" stopOpacity=".65" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <rect width="1200" height="560" fill="url(#heroFadeMask)" />
              </mask>
            </defs>

            <g mask="url(#heroChartFade)">
              {[110, 190, 270, 350, 430].map((y) => (
                <line
                  key={y}
                  x1="60"
                  y1={y}
                  x2="1140"
                  y2={y}
                  stroke="#79BDA2"
                  strokeOpacity=".15"
                  strokeDasharray="3 10"
                />
              ))}

              <path
                d="M40 405 C145 390 165 345 260 365 S390 315 470 330 S590 255 675 285 S800 220 875 240 S1015 135 1160 105"
                fill="none"
                stroke="#58AD83"
                strokeWidth="20"
                strokeLinecap="round"
                filter="url(#heroChartGlow)"
                opacity=".3"
              />

              <path
                d="M40 405 C145 390 165 345 260 365 S390 315 470 330 S590 255 675 285 S800 220 875 240 S1015 135 1160 105 L1160 500 L40 500 Z"
                fill="url(#heroChartArea)"
              />

              <motion.path
                d="M40 405 C145 390 165 345 260 365 S390 315 470 330 S590 255 675 285 S800 220 875 240 S1015 135 1160 105"
                fill="none"
                stroke="url(#heroChartLine)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="1500"
                initial={{ strokeDashoffset: 1500, opacity: 0 }}
                animate={{ strokeDashoffset: 0, opacity: 1 }}
                transition={{
                  duration: 2.4,
                  delay: 0.3,
                  ease,
                }}
              />

              {[
                [260, 365],
                [470, 330],
                [675, 285],
                [875, 240],
                [1160, 105],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill="#79BDA2"
                  opacity=".5"
                />
              ))}
            </g>
          </svg>

          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-paper" />
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-t from-transparent to-paper/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="relative mx-auto max-w-6xl"
        >
          <span className="inline-flex items-center rounded-full border border-white/70 bg-white/45 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[.2em] text-ink shadow-[0_8px_30px_-18px_rgba(50,35,70,.2)] backdrop-blur-xl">
            Cas pratiques & simulations
          </span>

          <h1 className="mt-9 font-display text-[clamp(3.4rem,8vw,7.8rem)] font-medium leading-[.94] tracking-[-.075em]">
            <span className="block text-ink">La stratégie</span>
            <span className="block text-ink">derrière</span>
            <span
              className="mt-2 block bg-gradient-to-b from-[#F0FFF5] via-[#A9E8C2] via-35% to-[#369A68] bg-clip-text font-semibold italic text-transparent"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.65)",
                filter: "drop-shadow(0 8px 18px rgba(65,155,105,0.18))",
              }}
            >
              la performance.
            </span>
          </h1>

          {/* ACCÈS DIRECT AUX SECTEURS */}
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.a
                key={industry.href}
                href={industry.href}
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35 + index * 0.1,
                  duration: 0.5,
                }}
                className="rounded-full border border-white/80 bg-white/55 px-6 py-3 text-xs font-semibold text-ink shadow-[0_8px_30px_-16px_rgba(40,35,55,.25)] backdrop-blur-xl transition-colors hover:border-[#79BDA2]/60 hover:bg-[#E8F5EF]/80"
              >
                {industry.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CAS PRATIQUES */}
      <section className="mx-auto max-w-6xl space-y-9 px-4 pb-20 sm:px-6">
        <div className="mb-10 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[.18em] text-ink-soft">
            Nos exemples sectoriels
          </span>
          <h2 className="mt-3 font-display text-3xl font-light tracking-[-.045em] sm:text-4xl">
            Une méthode, des stratégies adaptées.
          </h2>
        </div>

        {cases.map((item, index) => (
          <CaseCard key={item.category} item={item} index={index} />
        ))}
      </section>

      {/* ACCOMPAGNEMENT */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br from-[#F4E4DF] via-[#F2E9F7] to-[#E2F2EA] p-7 shadow-[0_25px_65px_-35px_rgba(30,25,45,.25)] backdrop-blur-xl sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-white/55 blur-3xl" />

          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-3 py-1.5 text-[10px] font-semibold text-ink">
                <Clock3 size={13} />
                Accompagnement sur la durée
              </span>

              <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-[-.045em] sm:text-4xl">
                La performance se construit dans le temps.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Notre gestion mensuelle Google Ads repose sur un
                accompagnement de 3 mois minimum. Ce délai permet d'analyser
                les premières données, d'identifier les leviers d'amélioration
                et d'ajuster progressivement la stratégie.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-ink">
                <span className="rounded-full border border-white/80 bg-white/60 px-3 py-2">
                  01 · Analyser
                </span>
                <span className="rounded-full border border-white/80 bg-white/60 px-3 py-2">
                  02 · Optimiser
                </span>
                <span className="rounded-full border border-white/80 bg-white/60 px-3 py-2">
                  03 · Mesurer
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-[26px] border border-white/80 bg-white/55 px-9 py-8 text-center shadow-sm backdrop-blur-xl">
              <span className="font-display text-7xl font-semibold tracking-tight text-ink">
                3
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-[.16em] text-ink">
                Mois minimum
              </span>
              <span className="mt-2 text-[10px] text-ink-soft">
                Pour un suivi structuré
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-[30px] border border-white/80 bg-white/50 px-6 py-12 text-center shadow-[0_20px_60px_-38px_rgba(30,25,45,.2)] backdrop-blur-xl sm:px-12 sm:py-16">
          <span className="text-[10px] font-bold uppercase tracking-[.18em] text-ink-soft">
            Votre projet
          </span>

          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-light tracking-[-.045em] sm:text-4xl">
            Et si nous construisions votre prochaine stratégie ?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
            Chaque activité est différente. Échangeons sur vos objectifs,
            votre marché et les leviers d'acquisition adaptés à votre projet.
          </p>

          <Link
            to="/reservation"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Échanger avec Kenshō
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      {/* MENTION LÉGALE DISCRÈTE */}
      <p className="mx-auto mb-6 max-w-3xl px-5 text-center text-[9px] leading-relaxed text-ink-soft/55 sm:text-[10px]">
        Tous les chiffres, indicateurs et graphiques présentés sur cette page
        sont fictifs. Ils constituent des exemples illustratifs et ne
        correspondent pas à des résultats clients réellement obtenus par
        Kenshō Studio. Les performances réelles dépendent du marché, du budget,
        de l'offre et de nombreux autres facteurs.
      </p>

      <Footer />
    </main>
  );
}
