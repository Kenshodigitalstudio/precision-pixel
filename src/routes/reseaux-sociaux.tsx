import { createFileRoute, Link } from "@tanstack/react-router";
import { SocialTeaser } from "@/components/landing/AuditExperts";

export const Route = createFileRoute("/reseaux-sociaux")({
  head: () => ({
    meta: [
      { title: "Gestion des réseaux sociaux — Sur devis | Kenshō Digital Studio" },
      {
        name: "description",
        content:
          "Kenshō Studio gère vos réseaux sociaux : création de contenu, gestion quotidienne, développement de communauté. Service sur devis.",
      },
      { property: "og:title", content: "Gestion des réseaux sociaux — Kenshō Digital Studio" },
      {
        property: "og:description",
        content:
          "Création de contenu, gestion quotidienne et développement de votre communauté. Service sur devis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ReseauxSociauxPage,
});

function ReseauxSociauxPage() {
  return (
    <main className="relative isolate overflow-hidden pt-24 sm:pt-28">
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[8%] h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
        <div className="absolute right-[8%] top-[30%] h-80 w-80 rounded-full bg-lilac/20 blur-3xl" />
        <div className="absolute left-[30%] bottom-[5%] h-72 w-72 rounded-full bg-coral/15 blur-3xl" />
      </div>

      <SocialTeaser />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 text-center">
        <Link
          to="/"
          className="text-sm font-medium text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
