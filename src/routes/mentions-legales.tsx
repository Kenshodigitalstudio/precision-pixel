import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions Légales — Kenshō Digital Studio" },
      { name: "description", content: "Mentions légales de Kenshō Digital Studio." },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <LegalLayout title="Mentions Légales">
      <h2>1. Éditeur du site</h2>
      <p>
        <strong>Nom commercial :</strong> Kenshō Digital Studio<br />
        <strong>Exploitant :</strong> Illya Brasseur<br />
        <strong>Statut juridique :</strong> Micro-entrepreneur (Entreprise individuelle)<br />
        <strong>SIRET :</strong> 991 786 427 00011<br />
        <strong>Email :</strong> kenshodigitalstudio@gmail.com<br />
        <strong>Régime TVA :</strong> Non assujetti à la TVA — Art. 293B du CGI
      </p>
      <p>
        En France, un micro-entrepreneur peut exploiter son activité sous un nom commercial
        (« Kenshō Digital Studio ») distinct de son nom civil. Le nom civil (Illya Brasseur) doit
        néanmoins figurer dans les mentions légales conformément à la loi n°2004-575 du 21 juin 2004
        pour la confiance dans l'économie numérique.
      </p>

      <h2>2. Hébergeur du site</h2>
      <p>
        À compléter avec les informations de votre hébergeur web, par exemple :<br />
        <strong>Hébergeur :</strong> [Nom de l'hébergeur, ex: OVH SAS / Vercel / Netlify]<br />
        <strong>Adresse :</strong> [Adresse postale de l'hébergeur]<br />
        <strong>Site web :</strong> [URL de l'hébergeur]
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, vidéos, etc.) est
        la propriété exclusive de Kenshō Digital Studio / Illya Brasseur, ou fait l'objet d'une
        autorisation d'utilisation. Toute reproduction, représentation, modification ou exploitation
        non autorisée est strictement interdite et constitue une contrefaçon sanctionnée par les
        articles L335-2 et suivants du Code de la propriété intellectuelle.
      </p>

      <h2>4. Responsabilité</h2>
      <p>
        Kenshō Digital Studio met tout en œuvre pour fournir des informations exactes et à jour sur
        ce site. Toutefois, aucune garantie n'est donnée quant à l'exactitude, l'exhaustivité ou
        l'actualité des informations publiées. L'utilisateur est seul responsable de l'usage qu'il
        fait des informations contenues sur le site.
      </p>
      <p>
        Kenshō Digital Studio ne saurait être tenu responsable de tout dommage direct ou indirect
        résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.
      </p>

      <h2>5. Liens hypertextes</h2>
      <p>
        Ce site peut contenir des liens vers des sites tiers. Kenshō Digital Studio n'exerce aucun
        contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs
        pratiques en matière de confidentialité.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Ce site est susceptible d'utiliser des cookies techniques nécessaires à son fonctionnement et
        des cookies analytiques (mesure d'audience). Conformément à la directive ePrivacy et aux
        recommandations de la CNIL, votre consentement est recueilli avant tout dépôt de cookie non
        essentiel. Vous pouvez paramétrer ou refuser les cookies via les paramètres de votre
        navigateur à tout moment.
      </p>

      <h2>7. Médiation</h2>
      <p>
        Conformément à l'article L612-1 du Code de la consommation, en cas de litige non résolu à
        l'amiable, vous pouvez recourir gratuitement à un médiateur de la consommation. Coordonnées
        du médiateur compétent disponibles sur demande à : kenshodigitalstudio@gmail.com.
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les
        tribunaux français seront seuls compétents.
      </p>
    </LegalLayout>
  );
}
