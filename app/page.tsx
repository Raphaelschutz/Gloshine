import Image from 'next/image';
import { Ambiance } from '@/components/Ambiance';
import { DevisForm } from '@/components/DevisForm';
import { Footer } from '@/components/Footer';
import { Motion } from '@/components/Motion';
import { Todo } from '@/components/Todo';
import { ambiance, services, site, tarifs } from '@/content/site';

const euros = (n: number) => n.toLocaleString('fr-BE', { style: 'currency', currency: 'EUR' });
const tvac = (htva: number) => euros(htva * (1 + tarifs.vatRate));

// Repris du flyer de Glo Shine.
const atouts = ['Produits écologiques et non toxiques', 'Réservation simple et rapide', 'Forfaits d’entretien réguliers', 'Tarifs affichés en ligne'];

const steps = [
  { title: 'Vous décrivez votre logement', text: 'Quelques lignes suffisent : la ville, le type de logement, ce que vous attendez.' },
  { title: 'Vous recevez un devis', text: 'Glo Shine revient vers vous avec une proposition adaptée à votre demande.' },
  { title: 'On convient du passage', text: 'Vous choisissez le moment. Vous retrouvez un intérieur net.' },
];

export default function Home() {
  return (
    <main>
      <Motion />

      <section className="hero">
        <header className="hero-top">
          <Image src="/logo/glo-shine-logo-inverse.svg" alt="Glo Shine, nettoyage à domicile" width={190} height={57} priority unoptimized />
        </header>
        <div className="hero-copy">
          <h1>
            <span className="line"><span className="hero-line">Un intérieur</span></span>{' '}
            <span className="line"><span className="hero-line">qui brille,</span></span>{' '}
            <span className="line"><span className="hero-line">sans lever</span></span>{' '}
            <span className="line"><span className="hero-line">le petit doigt.</span></span>
          </h1>
          <p className="hero-sub">Ménage à domicile et préparation de logements Airbnb à Liège et Bruxelles. Pour vous, ou pour vos voyageurs.</p>
        </div>
        <div className="hero-stage" aria-hidden="true">
          <svg className="hero-window" viewBox="16 12 68 86">
            <clipPath id="hero-arc"><path d="M16 94V46a34 34 0 0 1 68 0v48a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4Z" /></clipPath>
            <path className="hero-glass" d="M16 94V46a34 34 0 0 1 68 0v48a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4Z" />
            <g clipPath="url(#hero-arc)"><rect className="hero-clean" x="16" y="12" width="68" height="58" /></g>
            <g className="hero-squeegee">
              <rect x="22" y="66" width="56" height="8" rx="2" />
              <path d="M40 74H60L54 84V90a4 4 0 0 1-8 0V84Z" />
            </g>
          </svg>
        </div>
      </section>

      <section className="atouts" aria-label="Nos engagements">
        <ul className="wrap">
          {atouts.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <h2 data-reveal>Ce que nous faisons chez vous</h2>
          <ul className="cards">
            {services.items.map((service) => (
              <li key={service.title} className="card" data-card>
                <div className="card-photo">
                  {service.video ? (
                    <video src={service.video} poster={service.image} autoPlay muted loop playsInline preload="metadata" aria-label={service.alt} />
                  ) : (
                    <Image src={service.image} alt={service.alt} fill sizes="(min-width: 960px) 340px, (min-width: 560px) 45vw, 100vw" />
                  )}
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        {ambiance.salon.src && <Ambiance {...ambiance.salon} className="band-image" sizes="100vw" />}
        <p className="band-text" data-reveal>Rentrer chez soi, et n’avoir plus rien à faire.</p>
      </section>

      <section className="section section-tint" id="tarifs">
        <div className="wrap">
          <h2 data-reveal>Des tarifs clairs</h2>
          <p className="lead" data-reveal>Prix TVA comprise. {!tarifs.vatConfirmed && <Todo>TVA À CONFIRMER</Todo>}</p>
          <ul className="prices" data-reveal>
            {tarifs.horaire.map((t) => (
              <li key={t.label}>
                <span>{t.label}</span>
                <strong>{tvac(t.htva)} <small>/ heure</small></strong>
                <small>{euros(t.htva)} hors TVA</small>
              </li>
            ))}
          </ul>
          <h3 data-reveal>Suppléments</h3>
          <ul className="extras" data-reveal>
            {tarifs.supplements.map((t) => (
              <li key={t.label}><span>{t.label}</span><span>{tvac(t.htva)} / {t.unit}</span></li>
            ))}
          </ul>
          <details className="km" data-reveal>
            <summary>Déplacement au-delà de 15 km de Liège</summary>
            <ul className="extras">
              {tarifs.kilometres.map((t) => (
                <li key={t.range}><span>{t.range}</span><span>{tvac(t.htva)}</span></li>
              ))}
            </ul>
          </details>
          <p className="note" data-reveal>Tarif pour Bruxelles : <Todo>À FOURNIR</Todo></p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <h2 data-reveal>Comment ça se passe</h2>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.title} data-reveal>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark" id="pros">
        <div className="wrap split">
          <div>
            <h2 data-reveal>Vous gérez des locations courte durée&nbsp;?</h2>
            <p className="lead" data-reveal>
              Conciergeries, gestionnaires et gîtes : entre un départ et une arrivée, le logement doit être prêt. Glo Shine prend en charge la remise en état pour que vous puissiez accueillir le voyageur suivant.
            </p>
            <p className="note" data-reveal>Capacité, délais et tarif par passage : <Todo>À FOURNIR</Todo></p>
          </div>
          {ambiance.chambre.src && <Ambiance {...ambiance.chambre} sizes="(min-width: 960px) 520px, 100vw" />}
        </div>
      </section>

      <section className="section section-tint" id="zone">
        <div className="wrap split split-reverse">
          {ambiance.cuisine.src && <Ambiance {...ambiance.cuisine} sizes="(min-width: 960px) 520px, 100vw" />}
          <div>
            <h2 className="sr-only">Zone d’intervention</h2>
            <div className="cities" data-reveal>
              <div>
                <p className="city">Liège</p>
                <p>Communes couvertes : {site.communes.liege ?? <Todo>À FOURNIR</Todo>}</p>
              </div>
              <div>
                <p className="city">Bruxelles</p>
                <p>Communes couvertes : {site.communes.bruxelles ?? <Todo>À FOURNIR</Todo>}</p>
              </div>
            </div>
            <p className="note" data-reveal>Horaires : {site.hours ?? <Todo>À FOURNIR</Todo>}</p>
          </div>
        </div>
      </section>

      <section className="section" id="preuves">
        <div className="wrap">
          <h2 data-reveal>Le résultat, en vrai</h2>
          <div className="slot" data-reveal>
            <Todo>À FOURNIR</Todo>
            <p>Vraies photos avant/après, avis de vrais clients, assurance. Cette place leur est réservée.</p>
          </div>
        </div>
      </section>

      <section className="section section-tint" id="devis">
        <div className="wrap wrap-narrow">
          <h2>Parlez-nous de votre logement</h2>
          <p className="lead">Décrivez votre besoin en quelques lignes. Glo Shine vous répond avec une proposition.</p>
          <DevisForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
