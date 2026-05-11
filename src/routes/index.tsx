import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Metrics } from "@/components/landing/Metrics";
import { Approach } from "@/components/landing/Approach";
import { Contact } from "@/components/landing/Contact";
import { ExtraRequest } from "@/components/landing/ExtraRequest";
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
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustStrip />
      <Metrics />
      <Approach />
      <Contact />
      <ExtraRequest />
      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
