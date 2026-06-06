## Modifications de la page d'accueil

### 1. Réorganisation des sections (`src/routes/index.tsx`)

Nouvel ordre :

```text
Nav
Hero (les 2 bulles principales)
AuditCard          ← remonté tout en haut, juste sous Hero
TrustStrip
Metrics
Approach
Contact
ExtraRequest
ExpertsTeam        ← « Pourquoi des freelances ? » descendu en bas
SocialTeaser
Footer
```

### 2. Bulle « Votre Entreprise » dans le Hero (`src/components/landing/Hero.tsx`)

Dans la 2ᵉ slide premium :
- Remplacer `"Votre Business"` par `VOTRE ENTREPRISE` (en majuscules, gras).
- Passer tout le texte au vouvoiement :
  - « On ne te dit pas juste quoi faire. » → « On ne vous dit pas juste quoi faire. »
  - « On le fait POUR toi. » → « On le fait POUR vous. »
  - « Création complète de tes campagnes Google Ads » → « Création complète de vos campagnes Google Ads »
  - « Optimisation continue pour maximiser tes résultats » → « Optimisation continue pour maximiser vos résultats »

### 3. Section « Pourquoi des freelances ? » enrichie (`src/components/landing/AuditExperts.tsx`)

Ajouter 4 experts supplémentaires à la liste `EXPERTS` (toujours en flottement, avec positions et délais répartis pour éviter les chevauchements) :

- Sofia — Madrid, Espagne 🇪🇸
- Aïcha — Marrakech, Maroc 🇲🇦
- Liam — Londres, Royaume-Uni 🇬🇧
- Noah — Berlin, Allemagne 🇩🇪

Total : 10 bulles d'experts + la bulle générique « … ». La hauteur du conteneur passe à `h-[520px] sm:h-[560px]` pour laisser respirer les bulles.

### 4. Logo Kenshō cliquable vers l'accueil (`src/components/landing/Nav.tsx`)

Remplacer le `<a href="#top">` actuel par un `<Link to="/">` de `@tanstack/react-router`, pour que le clic ramène toujours sur la page d'accueil, même depuis `/services/google-ads`, `/reservation`, les pages légales, etc.

### 5. Lien Instagram dans le footer (`src/components/landing/Footer.tsx`)

Ajouter dans le bloc de liens un lien externe :

```text
Instagram → https://www.instagram.com/kenshodigitalstudio/
```

- `target="_blank"`, `rel="noopener noreferrer"`
- Même style discret que les autres liens du footer (`text-xs text-ink-soft hover:text-ink`)
- Petit pictogramme « ↗ » pour signaler le lien externe

## Détails techniques

- Aucune modification de logique métier, ni du backend, ni des routes — uniquement présentation et contenu.
- AuditCard, ExpertsTeam et SocialTeaser restent dans `AuditExperts.tsx` (juste l'ordre de rendu change dans `index.tsx`).
- Pas de nouvelle dépendance.
