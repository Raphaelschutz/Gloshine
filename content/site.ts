// Toutes les informations à compléter sont ici. null = affiché « À FOURNIR » sur le site.
export const site = {
  name: 'Glo Shine',
  phone: '0465 85 68 44' as string | null, // flyer, à confirmer : numéro entouré à la main
  email: 'contact.gloshine@gmail.com' as string | null, // flyer
  instagram: null as string | null,
  hours: null as string | null,
  communes: { liege: null as string | null, bruxelles: null as string | null },
  legal: {
    denomination: 'Glody Mbieme Nsele, exerçant sous le nom Glo Shine' as string | null, // BCE
    form: 'Personne physique (indépendant)' as string | null, // BCE
    address: 'Rue de Hesbaye 248/21, 4000 Liège' as string | null, // fiche tarifs
    bce: '1043.173.434' as string | null, // BCE, actif depuis le 01/10/2026
    vat: 'BE 1043.173.434' as string | null, // fiche tarifs, assujetti selon la BCE
    insurance: null as string | null,
    host: null as string | null,
    retention: null as string | null,
  },
};

// Démo pour Glo Shine : mention IA masquée à la demande de Raphaël. À trancher avant toute mise en ligne.
export const showAiNotice = false;

// Images d'ambiance : déposer le fichier dans public/ambiance/ puis indiquer son chemin dans `src`.
// Générées sur Canva, prompts dans ../visuels-ia.md. Jamais de faux chantier ni de faux client.
export const ambiance = {
  salon: { src: '/ambiance/salon.jpg' as string | null, alt: 'Salon lumineux baigné de soleil' },
  cuisine: { src: '/ambiance/cuisine.jpg' as string | null, alt: 'Cuisine claire dans la lumière du matin' },
  chambre: { src: '/ambiance/chambre.jpg' as string | null, alt: 'Chambre claire, lit fait, lumière douce' },
};

// Fiche tarifs de Glo Shine, montants hors TVA. Le site affiche le prix TVA comprise.
// vatRate À CONFIRMER par un comptable : la fiche indique 6 %, le nettoyage courant relève a priori de 21 %.
export const tarifs = {
  vatRate: 0.06,
  vatConfirmed: false,
  horaire: [
    { label: 'Matériel fourni par vous', htva: 10.2 },
    { label: 'Matériel apporté par nos soins', htva: 11 },
  ],
  supplements: [
    { label: 'Tapis', htva: 5, unit: 'm²' },
    { label: 'Vitres', htva: 1.5, unit: 'm²' },
    { label: 'Repassage', htva: 14.4, unit: 'heure' },
  ],
  kilometres: [
    { range: '16 à 20 km', htva: 4 }, { range: '21 à 25 km', htva: 6 }, { range: '26 à 30 km', htva: 8.5 },
    { range: '31 à 35 km', htva: 10.5 }, { range: '36 à 40 km', htva: 12.5 }, { range: '41 à 45 km', htva: 15 },
    { range: '46 à 50 km', htva: 17 }, { range: '51 à 55 km', htva: 18.5 }, { range: '56 à 60 km', htva: 20 },
  ],
};

// Liste reprise du flyer de Glo Shine (le nettoyage de voiture y est barré à la main).
export const services = {
  items: [
    { title: 'Nettoyage régulier', video: null, text: 'Un entretien à votre rythme, avec des forfaits réguliers.', image: '/services/regulier.jpg', alt: 'Aspirateur sur un parquet au soleil' },
    { title: 'Grand nettoyage', video: null, text: 'Un nettoyage en profondeur, pièce par pièce.', image: '/services/grand.jpg', alt: 'Mains gantées de bleu nettoyant une cuisinière' },
    { title: 'Nettoyage de vitres', video: '/video/vitre.mp4', text: 'Des vitres nettes, pour laisser entrer la lumière.', image: '/services/vitres.jpg', alt: 'Outil de lavage glissant sur une vitre' },
    { title: 'Avant ou après un déménagement', video: null, text: 'Un logement prêt à rendre ou prêt à habiter.', image: '/services/demenagement.jpg', alt: 'Pièce vide et parquet brillant' },
    { title: 'Repassage', video: null, text: 'Votre linge repassé, une tâche de moins dans la semaine.', image: '/services/repassage.jpg', alt: 'Vêtements pliés sur un tissu bleu' },
    { title: 'Débarras', video: null, text: 'Pour retrouver la place qui vous manque.', image: '/services/debarras.jpg', alt: 'Cartons empilés' },
  ],
};
