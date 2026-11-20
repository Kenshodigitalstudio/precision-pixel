
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

const ITEMS = [
  {
    category: "Google Ads",
    q: "Que propose Kenshō Studio en matière de Google Ads ?",
    a: "Nous proposons des audits de comptes Google Ads, la mise en place du suivi des conversions et la gestion mensuelle des campagnes. L'objectif est de construire une stratégie d'acquisition adaptée à votre activité, à votre marché et à vos objectifs.",
  },
  {
    category: "Audit",
    q: "Pourquoi commencer par un audit Google Ads ?",
    a: "L'audit permet d'analyser la structure de votre compte, vos campagnes, vos mots-clés, vos annonces, votre budget et le suivi des conversions. Nous identifions les points à améliorer et les opportunités pour définir les prochaines actions.",
  },
  {
    category: "Accompagnement",
    q: "Comment fonctionne la gestion mensuelle des campagnes ?",
    a: "Nous assurons le suivi et l'optimisation de vos campagnes dans la durée : analyse des performances, ajustement des enchères et budgets, travail sur les mots-clés, annonces et conversions, ainsi que des points réguliers pour suivre les évolutions.",
  },
  {
    category: "Engagement",
    q: "Pourquoi un accompagnement de 3 mois minimum ?",
    a: "Une campagne a besoin de temps pour collecter des données exploitables, identifier les tendances et mesurer les optimisations. Trois mois minimum permettent de travailler avec une vision plus structurée que des ajustements ponctuels.",
  },
  {
    category: "Mesure",
    q: "Comment savoir si mes campagnes sont réellement efficaces ?",
    a: "Nous nous intéressons aux indicateurs qui comptent pour votre activité : conversions, coût par acquisition, prospects, appels, ventes ou rentabilité. Le suivi des conversions est essentiel pour distinguer les simples clics des résultats commerciaux.",
  },
  {
    category: "Budget",
    q: "Quel budget faut-il prévoir pour Google Ads ?",
    a: "Il n'existe pas de budget universel. Il dépend de votre secteur, de la concurrence, de votre zone géographique et de vos objectifs. Nous étudions votre situation pour vous orienter vers un budget cohérent et exploitable.",
  },
  {
    category: "Réseaux sociaux",
    q: "Kenshō Studio accompagne-t-il aussi les réseaux sociaux ?",
    a: "Oui. Notre offre de gestion des réseaux sociaux est pensée pour développer votre présence digitale : stratégie éditoriale, création de contenus et adaptation aux plateformes pertinentes pour votre audience. Ce service est prévu pour un lancement début 2027.",
  },
  {
    category: "Démarrage",
    q: "Comment démarrer une collaboration avec Kenshō Studio ?",
    a: "Nous commençons par échanger sur votre activité, votre situation actuelle et vos objectifs. Cet échange permet de comprendre vos besoins, d'identifier les priorités et de vous proposer un accompagnement adapté. Les prestations et leur tarif sont définis selon votre projet.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-20 size-80 rounded-full bg-[#E8C9C1]/25 blur-[100px]" />
        <div className="absolute -right-32 bottom-0 size-96 rounded-full bg-[#CBB9E9]/25 blur-[110px]" />
        <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BDE2D0]/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-ink shadow-sm backdrop-blur-xl">
              <Sparkles size={13} className="text-[#69A989]" />
              FAQ · Kenshō Studio
            </span>

            <h2 className="mt-7 font-display text-[clamp(2.7rem,5vw,4.5rem)] font-light leading-[1.02] tracking-[-.065em] text-ink">
              Les bonnes
              <span className="block">questions.</span>
              <span className="mt-1 block bg-gradient-to-r from-[#DCAFA5] via-[#AD8BD7] to-[#79BDA2] bg-clip-text font-semibold italic text-transparent">
                Les bonnes réponses.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
              Vous souhaitez développer votre activité grâce au digital ?
              Voici ce qu'il faut savoir sur notre approche, nos services et
              notre accompagnement.
            </p>

            <a
              href="mailto:kenshodigitalstudio@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/55 px-5 py-3.5 text-xs font-semibold text-ink shadow-[0_12px_35px_-20px_rgba(40,35,55,.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/85"
            >
              <MessageCircle size={15} className="text-[#69A989]" />
              Une autre question ?
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            className="rounded-[30px] border border-white/80 bg-white/45 p-3 shadow-[0_25px_70px_-40px_rgba(35,30,55,.25)] backdrop-blur-2xl sm:p-5"
          >
            <Accordion type="single" collapsible className="w-full">
              {ITEMS.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${index}`}
                  className="border-b border-ink/[.07] px-2 last:border-b-0 sm:px-4"
                >
                  <AccordionTrigger className="group py-6 text-left text-sm font-semibold text-ink hover:no-underline sm:text-[15px]">
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-xl border border-white bg-white/75 font-display text-xs font-semibold text-[#79A98F] shadow-sm transition-colors group-data-[state=open]:bg-[#E5F3EA]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex flex-col gap-1.5">
                        <span className="text-[9px] font-bold uppercase tracking-[.15em] text-[#79A98F]">
                          {item.category}
                        </span>
                        <span className="leading-relaxed">{item.q}</span>
                      </span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pl-11 pr-3 text-[13px] leading-[1.8] text-ink-soft sm:pl-[3.25rem] sm:text-sm">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
