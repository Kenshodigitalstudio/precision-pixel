import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Metrics } from "@/components/landing/Metrics";
import { Approach } from "@/components/landing/Approach";
import { Contact } from "@/components/landing/Contact";
import { ExtraRequest } from "@/components/landing/ExtraRequest";
import { AuditCard, ExpertsTeam } from "@/components/landing/AuditExperts";
import { Counters } from "@/components/landing/Counters";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";



export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Agence Google Ads & Tracking — Performance mesurable" },
      {
        name: "description",
        content:
          "Agence experte en pilotage Google Ads et tracking server-side. Audit, GA4, GTM SS, conformité RGPD. Transformez votre budget média en croissance mesurable.",
      },
      { property: "og:title", content: "Agence Google Ads & Tracking — Performance mesurable" },
      {
        property: "og:description",
        content:
          "Pilotage Google Ads & tracking server-side haut de gamme. Audit, GA4, GTM SS, attribution propre.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-24 sm:pb-0">
      <Nav />
      <Hero />
      <Counters />
      <AuditCard />
      <TrustStrip />
      <Metrics />
      <Approach />
      <Contact />
      <ExtraRequest />
      <ExpertsTeam />
      {/* Teaser vers la page réseaux sociaux */}
      <section className="relative px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft">
            Kenshō Studio · Social Media Management
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            Et si on faisait rayonner votre marque sur les{" "}
            <span className="bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">
              réseaux sociaux
            </span>{" "}
            ?
          </h2>
          <Link
            to="/reseaux-sociaux"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)]"
          >
            Découvrir le service
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </section>
      <Faq />
      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
