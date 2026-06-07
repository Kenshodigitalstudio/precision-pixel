import { useState } from "react";
import { motion } from "framer-motion";
import report1 from "@/assets/reports/report_1.png.asset.json";
import report2 from "@/assets/reports/report_2.png.asset.json";
import report3 from "@/assets/reports/report_3.png.asset.json";
import report4 from "@/assets/reports/report_4.png.asset.json";
import report5 from "@/assets/reports/report_5.png.asset.json";
import report6 from "@/assets/reports/report_6.png.asset.json";
import report7 from "@/assets/reports/report_7.png.asset.json";
import report8 from "@/assets/reports/report_8.png.asset.json";

const REPORTS = [
  { src: report1.url, alt: "Page de couverture — Rapport Google Ads mensuel" },
  { src: report2.url, alt: "Synthèse exécutive — croissance maîtrisée" },
  { src: report3.url, alt: "KPI principaux — les chiffres du mois" },
  { src: report4.url, alt: "Analyse des campagnes" },
  { src: report5.url, alt: "Analyse des mots-clés" },
  { src: report6.url, alt: "Audiences & ciblages" },
  { src: report7.url, alt: "Journal des actions" },
  { src: report8.url, alt: "Recommandations d'optimisation" },
];

const BULLETS = [
  {
    title: "Lecture instantanée des performances",
    desc: "Les KPI essentiels (ROAS, CPA, CTR, conversions) visibles d'un coup d'œil.",
  },
  {
    title: "Analyse stratégique",
    desc: "Pas juste des chiffres : une lecture experte du contexte et des leviers.",
  },
  {
    title: "Recommandations directement actionnables",
    desc: "Un plan d'action priorisé par impact attendu sur le ROAS.",
  },
];

export function ReportShowcase() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-20 sm:py-28">
      {/* Subtle grain background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[40%_60%] md:gap-16 md:items-start">
          {/* LEFT — storytelling (sticky on desktop) */}
          <div className="md:sticky md:top-28 md:self-start">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--lilac)]">
              Coulisses du travail
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              <span className="bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">
                Ce que vous recevez, concrètement
              </span>
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">
              Des reportings clairs, précis et décisionnels. Conçus pour qu'en
              30 secondes vous sachiez ce qui marche, ce qui freine et ce qu'on
              ajuste le mois prochain.
            </p>

            <ul className="mt-8 space-y-5">
              {BULLETS.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-electric to-lilac"
                  />
                  <div>
                    <div className="font-display text-[15px] font-bold tracking-tight text-ink">
                      {b.title}
                    </div>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — vertical stack of reports (desktop) / horizontal scroll (mobile) */}
          <div className="-mx-6 px-6 md:mx-0 md:px-0">
            <div
              className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:flex-col md:overflow-visible md:gap-8 md:snap-none md:pb-0"
              style={{ scrollbarWidth: "none" }}
            >
              {REPORTS.map((r, i) => (
                <motion.button
                  key={r.src}
                  type="button"
                  onClick={() => setLightbox(i)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative shrink-0 w-[78%] sm:w-[60%] md:w-full snap-center overflow-hidden rounded-2xl border border-white/50 bg-white/40 shadow-[0_18px_50px_-22px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_28px_70px_-22px_rgba(99,102,241,0.4)]"
                  aria-label={`Agrandir : ${r.alt}`}
                >
                  <img
                    src={r.src}
                    alt={r.alt}
                    loading="lazy"
                    className="block w-full h-auto saturate-[0.85] opacity-90 transition-all duration-500 group-hover:saturate-100 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
        >
          <motion.img
            key={lightbox}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            src={REPORTS[lightbox].src}
            alt={REPORTS[lightbox].alt}
            className="max-h-[92vh] max-w-[95vw] rounded-xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white text-lg backdrop-blur-md transition hover:bg-white/30"
          >
            ✕
          </button>
        </motion.div>
      )}
    </section>
  );
}
