import { ServiceCard } from "./ServiceCard";
import { GoogleAdsVisual } from "./GoogleAdsVisual";
import { TrackingVisual } from "./TrackingVisual";
import { useReveal } from "@/hooks/use-reveal";

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative py-32 sm:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
              02 — Services
            </span>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Deux disciplines. Un seul objectif&nbsp;: la performance vérifiable.
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-ink-soft">
            Nous opérons sur les deux leviers qui décident réellement de votre acquisition payante&nbsp;: le pilotage média et l'infrastructure de mesure.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:gap-8">
        <ServiceCard
          index="01"
          eyebrow="Performance média"
          title="Chaque euro investi, piloté comme un actif."
          paragraph="Nous reprenons votre compte Google Ads comme un opérateur reprend une salle de marché : audit forensique de la structure, refonte des campagnes par intention, arbitrage des enchères au signal — pas au feeling. L'objectif n'est pas de dépenser mieux. C'est de faire de votre budget média la variable la plus rentable de votre P&L."
          bullets={[
            "Audit stratégique & restructuration des campagnes",
            "Bidding signals, scripts & automatisations",
            "Reporting orienté marge, pas vanity metrics",
          ]}
          visual={<GoogleAdsVisual />}
        />
        <ServiceCard
          index="02"
          eyebrow="Donnée & infrastructure"
          title="Une donnée propre, du clic à la marge."
          paragraph="Sans tracking irréprochable, l'optimisation est une fiction. Nous architecturons votre stack analytique de zéro : GA4, GTM server-side, Enhanced Conversions, consent mode v2, déduplication, attribution multi-touch. Le résultat : une donnée fiable, conforme, exploitable par vos algorithmes d'enchères — et par vos décisions."
          bullets={[
            "GTM server-side & Enhanced Conversions",
            "GA4, BigQuery & attribution custom",
            "Consent mode v2 & conformité RGPD",
          ]}
          visual={<TrackingVisual />}
        />
      </div>
    </section>
  );
}
