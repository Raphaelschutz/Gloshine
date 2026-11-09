import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CallLink, PrimaryButton } from '@/components/PrimaryButton';
import { Scenes } from '@/components/Scenes';
import { StickyCta } from '@/components/StickyCta';
import { VisitForm } from '@/components/VisitForm';
import Image from 'next/image';
import { airbnb, faq, hero, images, services, steps, zones } from '@/content/site';

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export default function Home() {
  return (
    <>
      <a className="skip" href="#contenu">Aller au contenu</a>
      <Header />
      <Scenes>
        <div className="aurora" data-anim="aurore" aria-hidden="true" />
        <main id="contenu">
          {/* Accueil : le titre, l'accroche et le bouton sont visibles dès le premier affichage. */}
          <section className="wrap hero">
            <div>
              <h1 data-split="titre">{hero.title}</h1>
              <p className="lead">{hero.subtitle}</p>
              <div className="hero-actions">
                <PrimaryButton id="cta-accueil" />
                <CallLink />
              </div>
            </div>
            <div className="photo hero-visual">
              <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width: 960px) 40vw, 100vw" />
            </div>
          </section>

          <section className="section" id="services">
            <div className="wrap">
              <p className="eyebrow" data-anim="apparition">Services</p>
              <h2 data-anim="apparition">Ce que nous faisons <span className="gradient-text">chez vous</span></h2>
              <ul className="cards">
                {services.map((service, i) => (
                  <li key={service.title} className="card" data-anim="carte">
                    <span className="card-index" aria-hidden="true">{i + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section section-soft" id="airbnb">
            <div className="wrap airbnb">
              <div>
                <p className="eyebrow" data-anim="apparition">Airbnb et conciergeries</p>
                <h2 data-anim="apparition">{airbnb.title}</h2>
                <div className="photo photo-wide" data-anim="photo">
                  <Image src={images.airbnb.src} alt={images.airbnb.alt} fill sizes="(min-width: 960px) 45vw, 100vw" />
                </div>
              </div>
              <ul className="checklist">
                {airbnb.points.map((point) => (
                  <li key={point.text} data-anim="carte">
                    <Check />
                    {point.text}
                    {point.confirm && <span className="tag">À CONFIRMER AVEC GLODY</span>}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section" id="etapes">
            <div className="wrap">
              <p className="eyebrow" data-anim="apparition">Comment ça marche</p>
              <h2 data-anim="apparition">Une visite d’abord, <span className="gradient-text">puis le devis</span></h2>
              <div className="steps-wrap" data-anim="etapes">
                <div className="steps-track" aria-hidden="true"><div className="steps-line" data-anim="ligne" /></div>
                <ol className="steps">
                  {steps.map((step, i) => (
                    <li key={step.title} className="step" data-anim="etape">
                      <span className="step-num" aria-hidden="true">{i + 1}</span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className="section section-soft" id="resultat">
            <div className="wrap">
              <p className="eyebrow" data-anim="apparition">Avant / après</p>
              <h2 data-anim="apparition">Le résultat, en <span className="gradient-text">vraies photos</span></h2>
              <div className="compare" data-anim="avant-apres" role="img" aria-label="Comparaison avant et après, photos à venir">
                <div className="compare-layer">
                  <div className="placeholder">[PHOTO AVANT]</div>
                  <span className="compare-label" style={{ left: 14 }}>Avant</span>
                </div>
                <div className="compare-layer compare-after" data-anim="apres">
                  <div className="compare-after-inner" data-anim="apres-interieur">
                    <div className="placeholder">[PHOTO APRÈS]</div>
                    <span className="compare-label" style={{ right: 14 }}>Après</span>
                  </div>
                </div>
                <div className="compare-handle" data-anim="poignee" aria-hidden="true"><span>↔</span></div>
              </div>
            </div>
          </section>

          <section className="section" id="zones">
            <div className="wrap">
              <p className="eyebrow" data-anim="apparition">Zones</p>
              <h2 data-anim="apparition">Là où nous intervenons</h2>
              <ul className="zones">
                {zones.map((zone) => (
                  <li key={zone.city} className="zone" data-anim="carte">
                    <p className="zone-city gradient-text">{zone.city}</p>
                    {zone.detail && <p>{zone.detail}</p>}
                  </li>
                ))}
              </ul>
              <div className="photo photo-band" data-anim="photo">
                <Image src={images.zones.src} alt={images.zones.alt} fill sizes="(min-width: 1200px) 1120px, 100vw" />
              </div>
            </div>
          </section>

          <section className="section section-soft" id="avis">
            <div className="wrap">
              <p className="eyebrow" data-anim="apparition">Avis clients</p>
              <h2 data-anim="apparition">Ce qu’en disent nos clients</h2>
              <div className="placeholder reviews" data-anim="apparition">[AVIS GOOGLE À VENIR]</div>
            </div>
          </section>

          <section className="section" id="faq">
            <div className="wrap">
              <p className="eyebrow" data-anim="apparition">Questions fréquentes</p>
              <h2 data-anim="apparition">Vos questions</h2>
              <div className="faq" data-anim="apparition">
                {faq.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-soft" id="visite">
            <div className="wrap form-wrap">
              <p className="eyebrow">Visite gratuite</p>
              <h2>Demander une visite <span className="gradient-text">gratuite</span></h2>
              <p className="lead">Glody passe chez vous, puis vous propose un devis adapté à votre logement.</p>
              <VisitForm />
            </div>
          </section>
        </main>
      </Scenes>
      <Footer />
      <StickyCta />
    </>
  );
}
