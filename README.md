# Site vitrine Glo Shine

Next.js + GSAP. Non publié, non indexable tant que `robots` reste dans `app/layout.tsx`.

## Lancer en local
```bash
npm install
npm run dev
```
Puis ouvrir http://localhost:3100

## Compléter
- Contact, légal, communes, horaires : `content/site.ts`. Une valeur renseignée remplace automatiquement « À FOURNIR ».
- Services : `content/site.ts`, liste reprise du flyer.
- Vraies photos, avis, chiffres : blocs pointillés de `app/page.tsx`.
- Visuels de démo : `public/ambiance/`, `public/services/`, `public/video/`. Origine : `../reference/credits-visuels.md`.

## Avant la mise en ligne
1. Plus aucune mention « À FOURNIR » ni « À CONFIRMER » sur le site.
2. Choisir l'outil qui reçoit les demandes et renseigner `DEVIS_WEBHOOK_URL` (voir `.env.example`). Sans cela, le formulaire n'envoie rien et le dit au visiteur.
3. Faire relire les mentions légales et la politique de confidentialité.
4. Retirer `robots` de `app/layout.tsx`.
5. Décider de `showAiNotice` dans `content/site.ts` et remplacer les visuels de démo (voir `../reference/credits-visuels.md`).
