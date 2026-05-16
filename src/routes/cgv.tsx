import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, RefundBox } from "@/components/legal/LegalLayout";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "Conditions Générales de Vente — Kenshō Digital Studio" },
      { name: "description", content: "Conditions générales de vente de Kenshō Digital Studio." },
    ],
  }),
  component: CGV,
});

function CGV() {
  return (
    <LegalLayout title="Conditions Générales de Vente">
      <h2>Art. 1 — Identification du prestataire</h2>
      <p>
        <strong>Nom commercial :</strong> Kenshō Digital Studio<br />
        <strong>Exploitant :</strong> Illya Brasseur<br />
        <strong>Statut :</strong> Micro-entrepreneur — Entreprise individuelle<br />
        <strong>SIRET :</strong> 991 786 427 00011<br />
        <strong>Email :</strong> kenshodigitalstudio@gmail.com<br />
        <strong>TVA :</strong> Non assujetti — Art. 293B du CGI
      </p>

      <h2>Art. 2 — Services proposés</h2>
      <ul>
        <li>Création et refonte de sites web</li>
        <li>Stratégie digitale et conseil</li>
        <li>Identité visuelle et création graphique</li>
        <li>Référencement naturel (SEO)</li>
        <li>Maintenance et hébergement web</li>
        <li>Toute autre prestation convenue par devis</li>
      </ul>

      <h2>Art. 3 — Commande & acceptation</h2>
      <p>
        La commande est ferme et définitive dès réception du paiement (acompte ou totalité). En
        payant, le client accepte sans réserve les présentes CGV, la politique de confidentialité et
        la politique de remboursement.
      </p>

      <h2>Art. 4 — Tarifs & paiement</h2>
      <p>
        Tarifs en euros HT. Paiement par carte bancaire via Stripe ou virement. Acompte de 50 %
        exigible à la commande pour tout projet &gt; 500 €. Pénalités de retard au taux légal +
        indemnité de 40 € en cas de retard.
      </p>

      <h2>Art. 5 — Remboursement & annulation</h2>
      <RefundBox>
        ⚠ AUCUN REMBOURSEMENT — AUCUNE EXCEPTION. Annulation &lt; 72h ou no-show : 100% du montant
        dû. Droit de rétractation inapplicable (art. L221-28 CConso).
      </RefundBox>
      <ul>
        <li>Annulation &gt; 72h avant la prestation : avoir de 3 mois possible, à la seule discrétion de Kenshō Digital Studio.</li>
        <li>Annulation &lt; 72h avant la prestation : 100 % du montant dû, aucun remboursement ni avoir.</li>
        <li>No-show (absence non signalée) : 100 % du montant dû, sans exception.</li>
        <li>Prestation déjà commencée : aucun remboursement, même partiel.</li>
      </ul>
      <p>
        Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation de 14
        jours ne s'applique pas aux prestations de services dont l'exécution a débuté avec l'accord
        exprès du client.
      </p>

      <h2>Art. 6 — Propriété intellectuelle</h2>
      <p>
        Les créations restent la propriété de Kenshō Digital Studio jusqu'au paiement intégral.
        Après règlement complet, les droits d'utilisation sont cédés au client selon les termes du
        devis.
      </p>

      <h2>Art. 7 — Responsabilité</h2>
      <p>
        La responsabilité de Kenshō Digital Studio est limitée au montant des sommes perçues. Aucun
        dommage indirect, perte d'exploitation ou manque à gagner ne saurait être réclamé.
      </p>

      <h2>Art. 8 — Réclamations</h2>
      <p>
        Toute réclamation doit être adressée à kenshodigitalstudio@gmail.com dans un délai de 7
        jours calendaires après la livraison. Passé ce délai, la prestation est réputée acceptée
        sans réserve.
      </p>

      <h2>Art. 9 — Droit applicable</h2>
      <p>
        Droit français applicable. Juridiction : tribunaux compétents du ressort du siège de Kenshō
        Digital Studio. Médiation consommateur disponible conformément à l'art. L612-1 du Code de la
        consommation.
      </p>

      <h2>Art. 10 — Acceptation</h2>
      <p>
        Le paiement en ligne vaut lecture, compréhension et acceptation intégrale et sans réserve
        des présentes Conditions Générales de Vente.
      </p>
    </LegalLayout>
  );
}
