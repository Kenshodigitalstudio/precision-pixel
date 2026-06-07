import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { EXPERTS, ExpertLineBubble } from "@/components/landing/AuditExperts";

export const Route = createFileRoute("/notre-equipe")({
  component: NotreEquipePage,
  head: () => ({
    meta: [
      { title: "Notre équipe — Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Des experts indépendants, sélectionnés pour leur excellence. Chaque client est suivi par un freelance certifié Google Ads, dédié à son compte.",
      },
      { property: "og:title", content: "Notre équipe — Kenshō Digital Studio" },
      {
        property: "og:description",
        content:
          "Des experts indépendants certifiés Google Ads, dédiés à votre compte.",
      },
    ],
  }),
});

const VALUES = [
  {
    icon: "🎯",
    title: "Expertise certifiée",
    text: "Chaque expert est certifié Google Ads et spécialisé dans un secteur précis.",
  },
  {
    icon: "🤝",
    title: "Dédié à votre compte",
    text: "Un seul expert suit votre compte, de l'audit à la gestion long terme.",
  },
  {
    icon: "🌍",
    title: "Un réseau mondial",
    text: "Nos experts travaillent depuis 6 pays pour une vision globale de votre marché.",
  },
];

function NotreEquipePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative px-6 pt-28 pb-12 sm:pt-32 sm:pb-16 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-[80%]">
          <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
          <div className="absolute right-[8%] top-[30%] h-80 w-80 rounded-full bg-coral/20 blur-3xl" />
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-extralight leading-[1.05] tracking-[-0.04em] text-ink">
          Notre équipe
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] sm:text-base text-ink-soft">
          Des experts indépendants, sélectionnés pour leur excellence.
        </p>
      </section>

      {/* Philosophy */}
      <section className="relative px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-[2rem] border border-white/50 bg-white/30 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_24px_70px_-30px_rgba(0,0,0,0.25)]"
        >
          <p className="text-[15.5px] leading-relaxed text-ink-soft">
            Chez <span className="font-semibold text-ink">Kenshō</span>, nous avons fait le choix de travailler exclusivement
            avec des freelances experts certifiés Google Ads.
            Pas de juniors, pas de compte managers débordés.
            Chaque client est suivi par un expert dédié, choisi selon son secteur
            et ses objectifs. <span className="font-semibold text-ink">Votre expert vous sera révélé après votre premier RDV</span> —
            c'est notre façon de garantir le meilleur match possible.
          </p>
        </motion.div>
      </section>

      {/* Experts row */}
      <section className="relative px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-10">
            {EXPERTS.map((e) => (
              <div key={e.name} className="flex flex-col items-center gap-3">
                <ExpertLineBubble e={e} size={80} hoverSize={120} showFlag />
                <p className="text-[11px] font-mono uppercase tracking-wider text-ink-soft/70">
                  Profil confidentiel — révélé après RDV
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-[1.75rem] border border-white/50 bg-white/35 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_18px_50px_-20px_rgba(0,0,0,0.2)]"
            >
              <div className="text-3xl">{v.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
