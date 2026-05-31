## Objectif

Sur la page `/reservation`, le visiteur :
1. Réserve son créneau via le widget Calendly (existant).
2. Voit ensuite un bloc de paiement Stripe pour régler **Audit Flash 150 €** ou **Tracking 100 €** selon le service choisi avant d'arriver.
3. Reçoit une page de confirmation après paiement.

Aucune automatisation TVA (statut micro-entrepreneur, art. 293B).

## Étapes

### 1. Créer les produits Stripe (test → live au publish)
Via `payments--batch_create_product` :
- `audit_flash` → prix `audit_flash_onetime` — 150 € EUR, one-time, qty 1/1, tax_code `txcd_20030000` (services professionnels)
- `tracking_setup` → prix `tracking_setup_onetime` — 100 € EUR, one-time, qty 1/1, même tax_code

(Le tax_code reste obligatoire côté Stripe mais n'active aucune collecte sans `automatic_tax`.)

### 2. Fichiers serveur Stripe
- `src/lib/stripe.server.ts` — utilitaire `createStripeClient` + `getStripeErrorMessage` (gateway Lovable, version copiée verbatim de la doc).
- `src/lib/stripe.ts` — client navigateur `getStripe()` + `getStripeEnvironment()` dérivé du préfixe du token.
- `src/utils/payments.functions.ts` — `createCheckoutSession` (server function, `ui_mode: "embedded_page"`, `payment_intent_data.description = product.name`, **sans** `managed_payments` ni `automatic_tax`).

Packages : `bun add stripe@22.0.2 @stripe/stripe-js@9.2.0 @stripe/react-stripe-js@6.2.0`.

### 3. Composants front
- `src/components/StripeEmbeddedCheckout.tsx` — provider + `<EmbeddedCheckout />`.
- `src/components/PaymentTestModeBanner.tsx` — bandeau "mode test" tant que le token est `pk_test_` (affiché en haut de `/reservation`).
- `src/hooks/useStripeCheckout.tsx` — `openCheckout` / `checkoutElement`.

### 4. Refonte de `/reservation`
- Lire `?service=audit_flash` ou `?service=tracking_setup` via `validateSearch`. Défaut : `audit_flash`.
- Mapping local : `{ audit_flash: { priceId: "audit_flash_onetime", label: "Audit Flash", price: "150 €" }, tracking_setup: { priceId: "tracking_setup_onetime", label: "Tracking", price: "100 €" } }`.
- Layout en deux étapes (même fond / sparkles conservés) :
  1. **Étape 1 — Réserver votre créneau** : iframe Calendly actuelle.
  2. **Étape 2 — Régler le service** : carte glassmorphism avec le service sélectionné, son prix, et bouton `Payer 150 €` qui appelle `openCheckout({ priceId, returnUrl: window.location.origin + "/reservation/confirmation?session_id={CHECKOUT_SESSION_ID}" })`. Le `<EmbeddedCheckout>` s'affiche inline juste en dessous.
- Petit sélecteur (2 onglets) pour basculer entre les deux services si besoin.

### 5. Boutons sur le Hero
Dans `src/components/landing/Hero.tsx`, les deux CTA "Prendre rendez-vous" deviennent :
- Audit Flash → `<Link to="/reservation" search={{ service: "audit_flash" }}>`
- Tracking → `<Link to="/reservation" search={{ service: "tracking_setup" }}>`

### 6. Page de confirmation
- `src/routes/reservation.confirmation.tsx` — lit `session_id` via `validateSearch`, affiche un message "Paiement reçu — à très vite", lien retour `/`.

### 7. Vérifications
- `payments--get_go_live_status` n'est pas requis pour la preview (token sandbox déjà présent).
- Tester en preview avec carte `4242 4242 4242 4242`.
- En production, le paiement live ne fonctionnera qu'une fois le go-live Stripe terminé (étapes 2-5 côté dashboard Stripe).

## Détails techniques

- `attachSupabaseAuth` : non nécessaire ici (checkout anonyme, pas de `requireSupabaseAuth` sur la server function).
- Pas de webhook nécessaire à ce stade (pas de base utilisateur à mettre à jour). Possible ajout futur si vous voulez recevoir un email automatique à chaque paiement.
- Aucun changement de design : on conserve `bg-paper`, blobs de couleur et `<Sparkles />` actuels.
