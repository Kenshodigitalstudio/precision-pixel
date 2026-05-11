## Objectif
Remplacer les liens "Réserver" (Google Calendar) par de vrais boutons de paiement Stripe sur les deux cartes de services, avec prix fixes :
- Audit Flash Google Ads — **150 €**
- Installation tags & tracking — **100 €**

## Étapes

### 1. Activer les paiements Stripe (intégré Lovable)
- Vérification d'éligibilité produit via `recommend_payment_provider`
- Activation de Stripe via `enable_stripe_payments` (aucun compte Stripe requis pour démarrer — environnement de test immédiat)
- Choix du mode TVA : je recommande **"calcul de la TVA seulement"** (+0,5%) — Stripe calcule la TVA au checkout, vous gérez les déclarations. On peut basculer en "conformité totale" plus tard quand vous serez prêt.

### 2. Créer les 2 produits dans Stripe
- Audit Flash Google Ads — 150 € — paiement unique
- Installation tags & tracking — 100 € — paiement unique
- Code TVA Stripe approprié pour services de consulting/digital

### 3. Implémenter le checkout
- Route serveur `/api/checkout` qui crée une session Stripe Checkout pour le produit choisi
- Webhook `/api/public/stripe-webhook` pour enregistrer les paiements réussis
- Page `/merci` après paiement réussi

### 4. Mettre à jour l'UI
Fichiers concernés :
- `src/components/landing/Hero.tsx` (slider) : bouton "Réserver" → "Payer 150 €" / "Payer 100 €"
- `src/components/landing/Contact.tsx` (section 04 — Réserver) : idem
Les boutons appelleront `/api/checkout` puis rediriger vers Stripe.

### 5. Garder le RDV Google Calendar ?
Question : après paiement, voulez-vous :
- **(a)** Rediriger automatiquement vers votre lien Google Calendar pour réserver le créneau
- **(b)** Juste une page "Merci, on vous recontacte"
- **(c)** Email automatique avec le lien Calendar

Je recommande **(a)** — plus fluide pour le client.

## Détails techniques
- Stripe en mode `sandbox` (test) au démarrage — vous testerez avec des cartes de test
- Passage en `live` après vérification de votre compte Stripe
- Stockage des paiements dans Lovable Cloud (table `payments`) — nécessitera d'activer Lovable Cloud
- Devise : EUR
