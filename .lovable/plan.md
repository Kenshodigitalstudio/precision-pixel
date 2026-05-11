
# Landing Page — Agence Google Ads & Tracking
## Direction : noble, éditoriale, ultra-pro

Page light premium, typographie raffinée (**Sora** display + **Manrope** texte). Accents **bleu électrique**, touches **jaune solaire** et **vert clair**. Animations cinématographiques mais retenues — chaque effet prouve la maîtrise technique.

## Direction créative

- **Fond** : blanc cassé `#fafbfc` + halos aurora (bleu/vert/jaune) très flous et lents
- **Grain** : micro-noise SVG subtil (profondeur façon Linear/Vercel)
- **Texte** : noir profond `#0a0a0a` / gris ardoise pour le corps
- **Accents** : bleu `#2563eb`, jaune `#facc15`, vert `#86efac`
- **Style** : whitespace généreux, grille 12 col, bordures 1px translucides, ombres colorées douces, easing `cubic-bezier(0.22, 1, 0.36, 1)`

## ★ Cartes Services — Style Apple Product Tiles

Les deux cartes services sont **la pièce maîtresse** de la page. Inspiration directe des bulles produits d'apple.com / iCloud features grid : grandes, généreuses, vivantes, avec un visuel qui réagit, et un texte étoffé qui raconte une promesse plus qu'il ne liste.

**Layout** : 2 cartes côte à côte (1 col mobile), ratio quasi 1:1, padding interne large (48–64px), coins arrondis `2rem`, fond glass `rgba(255,255,255,0.65)` + `backdrop-blur(24px)` + bordure 1px gradient subtile.

**Composition interne de chaque carte** :

```text
┌────────────────────────────────────────┐
│ 01 — Eyebrow bleu, mono                │
│                                        │
│ Titre Sora 40px tracking serré         │
│ sur 2 lignes max                       │
│                                        │
│ Paragraphe d'introduction (3–4 lignes) │
│ ton éditorial, promesse claire,        │
│ pas une liste — une vision.            │
│                                        │
│ ── détail tech (3 mini bullets fins) ──│
│ → Audit & restructure                  │
│ → Bidding & budget mix                 │
│ → Reporting marge                      │
│                                        │
│       [ Visuel animé central ]         │
│        (graphe SVG / hiérarchie)       │
│                                        │
│ En savoir plus  →                      │
└────────────────────────────────────────┘
```

**Effets sur la carte** :

1. **Spotlight suit le curseur** — un cercle de lumière douce (`radial-gradient` à 200px du pointeur) s'allume à l'intérieur de la carte. Calculé via `--mx`/`--my` CSS variables mises à jour en JS.
2. **Tilt 3D subtil** — `perspective(1000px) rotateX/rotateY` max 4°, suit la position de la souris, spring soft. Coupé sur tactile.
3. **Bordure gradient conique animée** — au hover, une bordure gradient (bleu→vert→jaune) tourne lentement autour de la carte (technique `mask-composite` + conic-gradient rotatif).
4. **Visuel central qui s'anime au hover** :
   - **Carte Google Ads** : un mini graphe SVG de campagnes — barres qui montent en cascade (stagger), une ligne de tendance qui se trace (`stroke-dashoffset`), un badge "+320% ROAS" qui apparaît en fin d'animation.
   - **Carte Tracking** : un schéma de flux de données — nœuds (Site → GTM Server → GA4 → Ads) reliés par des lignes qui se dessinent, petits dots verts qui voyagent le long des connexions (data flow live), un badge "● Tracking actif".
5. **Reveal initial au scroll** — la carte arrive avec `clip-path` qui se rétracte du bas (façon masque cinéma), pas un simple fade.
6. **Lift au hover** — `translateY(-4px)` + ombre colorée bleue qui se densifie sous la carte.
7. **Lien "En savoir plus"** — flèche qui glisse à droite et un trait fin qui se dessine sous le texte.

**Textes étayants (style Apple, éditorial)** :

### Carte 01 — Consultation Google Ads Expert

> **Eyebrow** : 01 — Performance média
> **Titre** : « Chaque euro investi, piloté comme un actif. »
> **Paragraphe** : « Nous reprenons votre compte Google Ads comme un opérateur reprend une salle de marché : audit forensique de la structure, refonte des campagnes par intention, arbitrage des enchères au signal — pas au feeling. L'objectif n'est pas de dépenser mieux. C'est de faire de votre budget média la variable la plus rentable de votre P&L. »
> **Bullets** :
> – Audit stratégique & restructuration des campagnes
> – Bidding signals, scripts & automatisations
> – Reporting orienté marge, pas vanity metrics

### Carte 02 — Installation Tracking & Taxe

> **Eyebrow** : 02 — Donnée & infrastructure
> **Titre** : « Une donnée propre, du clic à la marge. »
> **Paragraphe** : « Sans tracking irréprochable, l'optimisation est une fiction. Nous architecturons votre stack analytique de zéro : GA4, GTM server-side, Enhanced Conversions, consent mode v2, déduplication, attribution multi-touch. Le résultat : une donnée fiable, conforme, exploitable par vos algorithmes d'enchères — et par vos décisions. »
> **Bullets** :
> – GTM server-side & Enhanced Conversions
> – GA4, BigQuery & attribution custom
> – Consent mode v2 & conformité RGPD

## Le reste de la page

```text
NAV sticky (blur au scroll)
HERO — aurora animée + grain, H1 mot-à-mot, mot-clé surligné jaune, CTA magnétique, live ticker "● Tracking actif sur 47 comptes"
TRUST STRIP — logos placeholders grayscale
SERVICES — les 2 cartes Apple-style décrites ci-dessus ★
METRICS — compteurs animés (+320%, 2,4M€, ×8, 97%)
APPROCHE — stepper SVG ① Audit → ② Architecture → ③ Scale, ligne qui se dessine au scroll
CONTACT — « Parlons performance. » Formulaire éditorial (nom, email, site, budget, message)
FOOTER minimal
```

## Effets signature transversaux

- **Aurora** : 3 blobs gradient en fond, dérive lente, blur 120px
- **Hero H1** révélé mot à mot (stagger 60ms) + surlignage jaune SVG tracé
- **CTA magnétique** : suivi souris ±8px, halo bleu progressif
- **Curseur custom** : dot + ring qui s'agrandit sur interactif (desktop)
- **Compteurs** : `easeOutExpo` à l'entrée viewport
- **Barre de progression scroll** : 1px bleue en haut
- **Stepper approche** : SVG ligne qui se dessine au scroll
- **Formulaire** : labels flottants animés, focus ring spring
- Toutes les animations respectent `prefers-reduced-motion`

## Fichiers à créer / modifier

- `src/styles.css` — tokens, fonts Sora+Manrope, keyframes (aurora-drift, mask-reveal, dash-draw, border-spin), classe `.noise`
- `src/routes/index.tsx` — page + `head()` SEO
- `src/components/landing/Nav.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/Aurora.tsx`
- `src/components/landing/Cursor.tsx`
- `src/components/landing/TrustStrip.tsx`
- `src/components/landing/Services.tsx` ★ — orchestrateur des 2 cartes
- `src/components/landing/ServiceCard.tsx` ★ — la carte premium réutilisable (spotlight + tilt + bordure conique + reveal)
- `src/components/landing/GoogleAdsVisual.tsx` ★ — visuel SVG animé carte 01 (graphe barres + ligne tendance + badge)
- `src/components/landing/TrackingVisual.tsx` ★ — visuel SVG animé carte 02 (flux de données + dots verts)
- `src/components/landing/Metrics.tsx`
- `src/components/landing/Approach.tsx`
- `src/components/landing/Contact.tsx`
- `src/components/landing/Footer.tsx`
- `src/components/landing/Reveal.tsx` — wrapper IntersectionObserver
- `src/hooks/use-magnetic.ts`
- `src/hooks/use-count-up.ts`
- `src/hooks/use-spotlight.ts` — gère `--mx`/`--my` + tilt sur une carte

## Détails techniques

- TanStack Start v1, route `/`, head() SEO (title <60, desc <160), lang fr
- Tailwind v4 — tokens sémantiques uniquement
- Animations CSS + IntersectionObserver, **zéro dépendance lourde** (la légèreté est un signal de pro)
- Visuels services en **SVG pur** animé (pas d'image statique) — démontre la maîtrise technique
- `prefers-reduced-motion` désactive aurora / tilt / spotlight / curseur / compteurs
- Formulaire : submit no-op + toast `sonner` (déjà installé). Lovable Cloud à brancher plus tard
- Nom agence : composant `<BrandMark />` centralisé (placeholder « [N] »)
- Mobile : services en 1 col, tilt + spotlight + curseur custom désactivés tactile, aurora simplifiée

## Livrable

Code React + Tailwind v4 dans le projet — page premium sur `/`.
