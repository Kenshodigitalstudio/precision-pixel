## Objectif

Inverser l'ordre actuel sur `/reservation` :
1. **Étape 1 — Paiement Stripe** (embedded checkout, déjà en place)
2. **Étape 2 — Calendly** sur la page de confirmation, qui génère automatiquement le lien Google Meet et l'envoie par email au client

Aucune API Google à brancher : Calendly est déjà configuré pour créer un événement Google Meet à chaque réservation. Le client reçoit le lien Meet dans son email de confirmation Calendly + invitation calendrier.

## Changements

### 1. `src/routes/reservation.tsx`
- Supprimer l'étape Calendly (iframe + bloc "Étape 1").
- Renommer "Étape 2" en simple bloc paiement centré, avec :
  - Le sélecteur de service (Audit Flash / Tracking)
  - La carte service + bouton "Payer X €"
  - L'embedded Stripe checkout inline
- Mettre à jour le sous-titre : "Réglez votre service, puis choisissez votre créneau Google Meet juste après."
- Le `returnUrl` reste `/reservation/confirmation?session_id={CHECKOUT_SESSION_ID}` et passe en plus `&service=...` pour savoir quel service afficher après.

### 2. `src/routes/reservation.confirmation.tsx`
- Ajouter `service` au `validateSearch` (optionnel, défaut `audit_flash`).
- Nouveau layout en deux blocs :
  1. **Confirmation paiement** — bandeau vert "Paiement reçu ✓", message court "Dernière étape : choisissez votre créneau ci-dessous. Vous recevrez le lien Google Meet par email."
  2. **Calendly iframe** — même intégration que sur `/reservation` actuellement, pleine largeur, 720px de haut. URL Calendly inchangée (`calendly.com/kenshodigitalstudio/30min`) qui génère déjà automatiquement un lien Google Meet à chaque RDV pris.
- Garder le lien "Retour à l'accueil" en bas.

### 3. Aucun changement Stripe / produits / server functions
- Les produits `audit_flash` et `tracking_setup` existent déjà.
- `createCheckoutSession` est inchangée.
- Aucun nouveau secret nécessaire.

## Pourquoi Calendly suffit pour le Meet

Le compte Calendly de Kenshō Digital Studio est déjà connecté à Google Calendar + Google Meet (configuration côté Calendly). À chaque créneau réservé via le widget :
- Calendly crée l'événement dans ton Google Calendar
- Google génère automatiquement un lien Meet unique pour cet événement
- Le client et toi recevez tous les deux l'invitation par email + dans le calendrier, avec le lien Meet

Aucun code custom Google Calendar API à écrire, aucune OAuth à brancher.

## Prérequis côté Calendly (à vérifier une seule fois)

Dans `calendly.com/event_types` → ton événement "30min" → **Location** → choisir **Google Meet conferencing**. Si ce n'est pas déjà fait, à activer manuellement (rien à coder).
