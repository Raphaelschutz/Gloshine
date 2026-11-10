// Tout le contenu du site. Identité validée par Glody : ne rien ajouter qui ne vienne pas de lui.
// Les valeurs entre crochets sont des emplacements à remplir, affichés tels quels sur le site.

export const site = {
  name: 'Glo Shine Cleaning',
  domain: 'glo-shine.be',
  tagline: 'Nettoyage à domicile et ménages Airbnb à Liège et Bruxelles',
  phone: { label: '+32 465 86 85 53', href: 'tel:+32465868553' },
  cta: 'Demander une visite gratuite',
  email: 'contact.gloshine@gmail.com', // celle du flyer, en attendant une adresse définitive
  legal: {
    denomination: '[DÉNOMINATION]',
    form: '[FORME JURIDIQUE]',
    address: '[ADRESSE DU SIÈGE]',
    bce: "[NUMÉRO D'ENTREPRISE]",
    vat: '[NUMÉRO DE TVA]',
    insurance: '[ASSURANCE]',
    host: '[HÉBERGEUR]',
    retention: '[DURÉE DE CONSERVATION DES DEMANDES]',
  },
};

// Slogan validé par Raphaël, affiché sur l'intro et le flyer.
export const slogan = 'Un intérieur qui brille, sans lever le petit doigt.';

export const hero = {
  title: 'Nettoyage à domicile et ménages Airbnb à Liège et Bruxelles',
  subtitle: 'On passe d’abord chez vous, puis on vous propose un devis adapté à votre logement.',
};

// Images d'illustration provisoires (Canva), à remplacer par de vraies photos de Glo Shine.
// Jamais présentées comme un chantier réel ; l'avant/après reste réservé aux vraies photos.
export const images = {
  hero: { src: '/ambiance/fenetre.jpg', alt: 'Salon lumineux avec une grande fenêtre en arc' },
  airbnb: { src: '/ambiance/chambre.jpg', alt: 'Chambre claire au lit fait, serviettes pliées' },
  zones: { src: '/ambiance/cuisine.jpg', alt: 'Cuisine claire dans la lumière du matin' },
  apropos: { src: '/ambiance/apropos.jpg', alt: 'Grand salon impeccable baigné de lumière au coucher du soleil' },
};

// Qui sommes-nous : uniquement des faits fournis par Glo Shine (expérience en biopharmaceutique).
// Aucun nom d'entreprise, certification ou chiffre tant que Glody ne les a pas confirmés.
export const apropos = {
  title: 'La rigueur du biopharma,',
  titleAccent: 'appliquée à votre intérieur',
  text: [
    'Notre équipe vient du nettoyage en environnement biopharmaceutique. Là-bas, les surfaces sont nettoyées plusieurs fois par jour, selon des protocoles stricts où rien n’est laissé au hasard.',
    'Nous apportons ce niveau d’exigence chez vous : chaque pièce est traitée avec la même méthode et le même soin du détail.',
  ],
  points: [
    'Des protocoles précis, pièce par pièce',
    'Le réflexe du détail, là où l’on ne regarde pas',
    'Le même niveau d’exigence, à chaque passage',
  ],
};

export const services = [
  { title: 'Ménage régulier', text: 'Un entretien de votre logement à la fréquence qui vous convient.' },
  { title: 'Grand nettoyage', text: 'Un nettoyage complet, pièce par pièce, quand le logement en a besoin.' },
  { title: 'Ménage Airbnb entre deux séjours', text: 'Le logement remis en état après le départ d’un voyageur, avant l’arrivée du suivant.' },
];

export const airbnb = {
  title: 'Spécial propriétaires Airbnb et conciergeries',
  points: [
    { text: 'Ménage entre deux voyageurs', confirm: false },
    { text: 'Créneaux de 11 h à 15 h, entre le départ et l’arrivée', confirm: true },
    { text: 'Interventions le week-end', confirm: true },
  ],
};

export const steps = [
  { title: 'Vous demandez une visite', text: 'Par le formulaire ou par téléphone.' },
  { title: 'Un technicien passe chez vous', text: 'Il découvre votre logement et vos attentes.' },
  { title: 'Vous recevez un devis adapté', text: 'Un prix établi pour votre logement.' },
  { title: 'On fait le ménage', text: 'Au rythme convenu ensemble.' },
];

export const zones = [
  { city: 'Liège', detail: 'et environs' },
  { city: 'Bruxelles', detail: '' },
];

export const faq = [
  { q: 'La visite est-elle gratuite ?', a: 'Oui. Un technicien passe chez vous pour voir le logement, puis nous vous envoyons un devis. Vous décidez ensuite.' },
  { q: 'Pourquoi une visite avant le devis ?', a: 'Chaque logement est différent. Voir les pièces et parler de vos attentes permet de proposer un prix adapté.' },
  { q: 'Où intervenez-vous ?', a: 'À Liège et dans ses environs, et à Bruxelles.' },
  { q: 'Vous occupez-vous des logements Airbnb ?', a: 'Oui, entre deux séjours. Les créneaux et les week-ends sont à convenir ensemble.' },
];
