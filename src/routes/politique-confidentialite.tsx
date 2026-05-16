import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, RefundBox } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de Confidentialité & RGPD — Kenshō Digital Studio" },
      { name: "description", content: "Politique de confidentialité et conformité RGPD de Kenshō Digital Studio." },
    ],
  }),
  component: PolitiqueConfidentialite,
});

function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de Confidentialité & RGPD">
      <h2>1. Responsable du traitement</h2>
      <p>
        <strong>Responsable :</strong> Illya Brasseur (Kenshō Digital Studio)<br />
        <strong>SIRET :</strong> 991 786 427 00011<br />
        <strong>Contact DPO :</strong> kenshodigitalstudio@gmail.com
      </p>
      <p>
        Kenshō Digital Studio s'engage à protéger la vie privée de ses utilisateurs et clients
        conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)
        et à la loi Informatique et Libertés n°78-17 du 6 janvier 1978 modifiée.
      </p>

      <h2>2. Données collectées</h2>
      <h3>2.1 Lors d'une prise de rendez-vous</h3>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse email</li>
        <li>Numéro de téléphone (si fourni)</li>
        <li>Informations relatives à votre projet ou demande</li>
      </ul>
      <h3>2.2 Lors d'un paiement</h3>
      <ul>
        <li>Coordonnées de facturation (nom, adresse)</li>
        <li>Informations de paiement traitées via Stripe (jamais stockées par Kenshō Digital Studio)</li>
      </ul>
      <h3>2.3 Via le site web</h3>
      <ul>
        <li>Adresse IP et données de navigation (via cookies analytiques, avec consentement)</li>
        <li>Données de formulaire de contact</li>
      </ul>

      <h2>3. Finalités et bases légales</h2>
      <p>
        <strong>Exécution du contrat :</strong> traitement des réservations, devis, paiements et
        communications liées à la prestation.<br />
        <strong>Intérêt légitime :</strong> amélioration de nos services, sécurité du site,
        statistiques d'utilisation anonymisées.<br />
        <strong>Consentement :</strong> envoi d'informations commerciales (newsletters), utilisation
        de cookies non essentiels.<br />
        <strong>Obligation légale :</strong> conservation des données comptables et fiscales
        conformément à la réglementation française (10 ans pour les documents comptables).
      </p>

      <h2>4. Durée de conservation</h2>
      <ul>
        <li>Données clients et contractuelles : 5 ans après la fin de la relation commerciale</li>
        <li>Données comptables et factures : 10 ans (obligation légale)</li>
        <li>Données de prospects (non-clients) : 3 ans maximum</li>
        <li>Données de navigation : 13 mois maximum (CNIL)</li>
      </ul>

      <h2>5. Destinataires des données</h2>
      <p>Vos données ne sont pas vendues ni cédées à des tiers. Elles peuvent être partagées avec :</p>
      <ul>
        <li>Stripe Inc. (traitement des paiements) — stripe.com/fr/privacy</li>
        <li>Calendly (gestion des rendez-vous) — calendly.com/privacy</li>
        <li>Google (Gmail, Analytics éventuel) — soumis aux garanties adéquates UE</li>
        <li>Toute autorité légale ou réglementaire sur demande officielle</li>
      </ul>

      <h2>6. Transferts hors UE</h2>
      <p>
        Certains prestataires (Stripe, Calendly, Google) sont établis aux États-Unis. Ces transferts
        sont encadrés par des clauses contractuelles types approuvées par la Commission européenne
        ou le mécanisme EU-U.S. Data Privacy Framework.
      </p>

      <h2>7. Sécurité des données</h2>
      <p>
        Kenshō Digital Studio met en œuvre des mesures techniques et organisationnelles adaptées
        pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation.
        Les paiements sont traités via Stripe, certifié PCI-DSS, et ne transitent jamais par nos
        serveurs.
      </p>

      <h2>8. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :</p>
      <ul>
        <li>Droit d'accès (art. 15 RGPD) : obtenir une copie de vos données</li>
        <li>Droit de rectification (art. 16 RGPD) : corriger des données inexactes</li>
        <li>Droit à l'effacement (art. 17 RGPD) : demander la suppression de vos données</li>
        <li>Droit à la limitation du traitement (art. 18 RGPD)</li>
        <li>Droit à la portabilité (art. 20 RGPD) : recevoir vos données dans un format structuré</li>
        <li>Droit d'opposition (art. 21 RGPD) : s'opposer à un traitement fondé sur l'intérêt légitime</li>
        <li>Droit de retirer votre consentement à tout moment</li>
      </ul>
      <p>
        Pour exercer ces droits : kenshodigitalstudio@gmail.com. Réponse sous 30 jours maximum.
      </p>
      <p>
        En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la CNIL
        (Commission Nationale de l'Informatique et des Libertés) : www.cnil.fr — 3 Place de
        Fontenoy, 75007 Paris.
      </p>

      <h2>9. Politique de remboursement</h2>
      <RefundBox>
        POLITIQUE DE REMBOURSEMENT : Aucun remboursement ne sera accordé. Toute prestation payée est
        définitivement acquise, conformément à l'article L221-28 du Code de la consommation.
      </RefundBox>
      <p>
        Le droit de rétractation de 14 jours prévu par l'article L221-18 du Code de la consommation
        ne s'applique pas aux prestations de services dont l'exécution a commencé, avec l'accord
        exprès du consommateur, avant la fin du délai de rétractation.
      </p>

      <h2>10. Modifications</h2>
      <p>
        Kenshō Digital Studio se réserve le droit de modifier la présente politique à tout moment.
        La date de mise à jour est indiquée en bas de page. Il vous appartient de la consulter
        régulièrement.
      </p>
    </LegalLayout>
  );
}
