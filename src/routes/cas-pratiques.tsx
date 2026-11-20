
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  ShoppingBag,
  Store,
  Target,
  Clock3,
  LineChart,
  CheckCircle2,
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
          "Découvrez des exemples illustratifs de stratégies Google Ads pour l'immobilier, l'e-commerce et les entreprises locales.",
      },
    ],
  }),
});

const ease = [0.22, 1, 0.36, 1] as const;

const cases = [
  {
    category: "Immobilier",
    title: "Générer des prospects qualifiés",
    description:
      "Une stratégie Google Ads conçue pour une agence immobilière souhaitant développer ses demandes de contact sur une zone géographique ciblée.",
    icon: Building2,
    color: "#B9A4E5",
    metrics: [
      { value: "+45 %", label: "de prospects" },
      { value: "−32 %", label: "coût par prospect" },
      { value: "+28 %", label: "de conversions" },
    ],
    chart: [22, 28, 25, 38, 35, 47, 44, 59, 65, 72, 78, 91],
    chartLabel: "Volume de prospects",
    strategy: [
      "Ciblage géographique précis",
      "Optimisation des mots-clés immobiliers",
      "Annonces orientées génération de leads",
      "Suivi des formulaires et appels",
    ],
  },
  {
    category: "E-commerce",
    title: "Développer les ventes en ligne",
    description:
      "Une approche orientée rentabilité pour une boutique en ligne souhaitant améliorer ses ventes et tirer davantage de valeur de son budget publicitaire.",
    icon: ShoppingBag,
    color: "#DCAFA5",
    metrics: [
      { value: "+62 %", label: "de ventes" },
      { value: "×2,4", label: "ROAS simulé" },
      { value: "−28 %", label: "coût par vente" },
    ],
    chart: [18, 23, 30, 28, 40, 45, 53, 50, 67, 73, 82, 94],
    chartLabel: "Volume de ventes",
    strategy: [
      "Structure des campagnes Shopping",
      "Optimisation du flux produits",
      "Analyse des requêtes commerciales",
      "Réallocation du budget publicitaire",
    ],
  },
  {
    category: "Entreprise locale",
    title: "Renforcer la visibilité locale",
    description:
      "Une stratégie d'acquisition pour une entreprise de proximité souhaitant attirer davantage de clients dans sa zone de chalandise.",
    icon: Store,
    color: "#8CCBB2",
    metrics: [
      { value: "+70 %", label: "de contacts" },
      { value: "−35 %", label: "coût par contact" },
      { value: "+48 %", label: "de visites web" },
    ],
    chart: [15, 21, 24, 32, 36, 43, 49, 55, 61, 68, 79, 88],
    chartLabel: "Volume de contacts",
    strategy: [
      "Ciblage des recherches locales",
      "Sélection des mots-clés prioritaires",
      "Optimisation des annonces",
      "Analyse des appels et demandes entrantes",
    ],
  },
];

function PerformanceChart({
  values,
  color,
}: {
  values: number[];
  color: string;
}) {
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 300;
      const y = 105 - value * 0.95;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 300 120"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label="Graphique illustratif d'évolution des performances"
    >
      <defs>
        <linearGradient id={`area-${color.replace("#", "")}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity=".3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {[25, 55, 85].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="300"
          y2={y}
          stroke="currentColor"
          strokeOpacity=".08"
          strokeDasharray="4 5"
        />
      ))}

      <polygon
        points={`0,120 ${points} 300,120`}
        fill={`url(#area-${color.replace("#", "")})`}
      />

      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className="overflow-hidden rounded-[28px] border border-white/80 bg-white/50 shadow-[0_22px_60px_-38px_rgba(30,25,45,.22)] backdrop-blur-xl"
    >
      <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[1.1fr_.9fr] lg:gap-10">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold"
              style={{
                backgroundColor: `${item.color}25`,
                color: "#39333F",
              }}
            >
              <Icon size={13} />
              {item.category}
            </span>
            <span className="rounded-full border border-ink/10 bg-white/60 px-3 py-1.5 text-[9px] font-medium text-ink-soft">
              Simulation illustrative
            </span>
          </div>

          <h2 className="mt-5 font-display text-2xl font-medium leading-tight tracking-[-.04em] text-ink sm:text-3xl">
            {item.title}
          </h2>

          <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink-soft">
            {item.description}
          </p>

          <div className="mt-7 grid grid-cols-3 gap-2">
            {item.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/80 bg-white/65 px-2 py-4 text-center"
              >
                <p className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-[9px] leading-tight text-ink-soft sm:text-[10px]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[.15em] text-ink-soft">
              Axes de travail envisagés
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {item.strategy.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: item.color }}
                  />
                  <span className="text-[11px] leading-relaxed text-ink-soft">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[22px] border border-white/80 bg-white/55 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.13em] text-ink-soft">
                Projection des performances
              </p>
              <p className="mt-1 font-display text-lg font-medium text-ink">
                Progression sur 3 mois
              </p>
            </div>
            <div
              className="grid size-10 place-items-center rounded-xl"
              style={{ backgroundColor: `${item.color}30` }}
            >
              <LineChart size={19} style={{ color: item.color }} />
            </div>
          </div>

          <div className="mt-8">
            <PerformanceChart values={item.chart} color={item.color} />
          </div>

          <div className="mt-2 flex justify-between text-[10px] text-ink-soft">
            <span>Mois 1</span>
            <span>Mois 2</span>
            <span>Mois 3</span>
          </div>

          <div className="mt-6 rounded-xl border border-ink/5 bg-white/70 p-3">
            <div className="flex items-center gap-2">
              <BarChart3 size={14} style={{ color: item.color }} />
              <span className="text-[10px] font-semibold text-ink">
                Données de démonstration
              </span>
            </div>
            <p className="mt-1 text-[10px] leading-relaxed text-ink-soft">
              Courbe et indicateurs fictifs destinés à illustrer une évolution possible.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CasPratiques() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-paper"
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 size-[30rem] rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute -right-40 top-[35%] size-[32rem] rounded-full bg-lilac/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-mint/15 blur-3xl" />
      </div>

      <Nav />

      {/* HERO */}
      <section className="px-5 pb-12 pt-32 text-center sm:px-8 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-5xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-lilac/25 bg-lilac/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-ink">
            <Target size={13} />
            Cas pratiques & simulations
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.5rem,5.5vw,4.8rem)] font-light leading-[1.08] tracking-[-.055em]">
            La stratégie derrière
            <span className="block bg-gradient-to-r from-[#DCAFA5] via-[#B99CDD] to-[#8CCBB2] bg-clip-text font-semibold italic text-transparent">
              la performance.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Découvrez comment une stratégie Google Ads structurée peut accompagner le développement d'une activité. Trois secteurs, trois approches et des exemples de projections pour comprendre notre méthode.
          </p>
        </motion.div>

        {/* ENGAGEMENTS */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-ink/10">
          {[
            {
              icon: Target,
              title: "Stratégie",
              description: "sur-mesure",
            },
            {
              icon: BarChart3,
              title: "Suivi",
              description: "& optimisation",
            },
            {
              icon: LineChart,
              title: "Résultats",
              description: "mesurables",
            },
            {
              icon: Clock3,
              title: "Accompagnement",
              description: "minimum 3 mois",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex min-h-[100px] flex-col items-center justify-center rounded-2xl border border-white/70 bg-white/35 px-3 py-4 sm:rounded-none sm:border-0 sm:bg-transparent"
            >
              <item.icon
                size={21}
                strokeWidth={1.6}
                className={index === 3 ? "text-[#9B75C9]" : "text-ink"}
              />
              <span className="mt-2 text-xs font-semibold text-ink">
                {item.title}
              </span>
              <span className="mt-1 text-[10px] text-ink-soft">
                {item.description}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-6xl space-y-6 px-4 pb-14 sm:px-6">
        <div className="mb-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[.18em] text-ink-soft">
            Trois secteurs d'activité
          </span>
          <h2 className="mt-2 font-display text-2xl font-light tracking-[-.04em] sm:text-3xl">
            Une méthode, des stratégies adaptées.
          </h2>
        </div>

        {cases.map((item, index) => (
          <CaseCard key={item.category} item={item} index={index} />
        ))}

        <div className="mx-auto max-w-3xl rounded-2xl border border-ink/10 bg-white/35 px-5 py-4 text-center">
          <p className="text-[10px] leading-relaxed text-ink-soft sm:text-xs">
            <strong className="text-ink">Important :</strong> tous les chiffres,
            indicateurs et graphiques présentés sur cette page sont fictifs.
            Ils constituent des exemples illustratifs et ne correspondent pas
            à des résultats clients réellement obtenus par Kenshō Studio. Les
            performances réelles dépendent du marché, du budget, de l'offre et
            de nombreux autres facteurs.
          </p>
        </div>
      </section>

      {/* ACCOMPAGNEMENT 3 MOIS */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="relative overflow-hidden rounded-[30px] border border-white/80 bg-gradient-to-br from-[#F4E4DF]/90 via-[#F5EAF0]/90 to-[#E9E1F5]/90 p-7 shadow-[0_25px_65px_-35px_rgba(30,25,45,.25)] backdrop-blur-xl sm:p-11"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-white/50 blur-3xl" />

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
                Notre gestion mensuelle Google Ads repose sur un accompagnement
                de 3 mois minimum. Ce délai permet d'analyser les premières
                données, d'identifier les leviers d'amélioration et d'ajuster
                progressivement la stratégie.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-ink">
                <span className="rounded-full border border-white/80 bg-white/55 px-3 py-2">
                  01 · Analyser
                </span>
                <span className="rounded-full border border-white/80 bg-white/55 px-3 py-2">
                  02 · Optimiser
                </span>
                <span className="rounded-full border border-white/80 bg-white/55 px-3 py-2">
                  03 · Mesurer
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-[24px] border border-white/80 bg-white/50 px-8 py-7 text-center shadow-sm backdrop-blur-xl">
              <span className="font-display text-6xl font-semibold tracking-tight text-ink">
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
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="rounded-[28px] border border-white/80 bg-white/45 px-6 py-10 text-center shadow-[0_20px_60px_-38px_rgba(30,25,45,.2)] backdrop-blur-xl sm:px-12 sm:py-14">
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

      <Footer />
    </main>
  );
}

