import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import pilling from '@/../public/assets/img/services/pilling.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/6/ro',
  },
  title: 'Peeling facial profesional în Bălți – Reînnoiește-ți pielea cu Meddera',
  description: 'Descoperă beneficiile peelingului facial la clinica Meddera din Bălți. Proceduri personalizate pentru un ten luminos și sănătos. Programează-te acum!',
  openGraph: {
    title: 'Peeling facial profesional în Bălți – Reînnoiește-ți pielea cu Meddera',
    description: 'Descoperă beneficiile peelingului facial la clinica Meddera din Bălți. Proceduri personalizate pentru un ten luminos și sănătos. Programează-te acum!',

    url: 'https://meddera.md/ro',
    type: 'website',
    images: [
      {
        url: '/assets/img/seo-meta/facebook-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peeling facial profesional în Bălți – Reînnoiește-ți pielea cu Meddera',
    description: 'Descoperă beneficiile peelingului facial la clinica Meddera din Bălți. Proceduri personalizate pentru un ten luminos și sănătos. Programează-te acum!',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage6Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Peelingul</p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={pilling}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Peelingul este o procedură cosmetică menită să reînnoiască și să îmbunătățească
              starea pielii prin îndepărtarea celulelor moarte de pe suprafața acesteia. Există mai
              multe tipuri de peelinguri: chimic, mecanic, fiecare fiind potrivit pentru rezolvarea
              diverselor
              probleme, cum ar fi tenul problematic, porii dilatați, pigmentarea, ridurile fine și
              neregularitățile
              texturii. Procedura stimulează reînnoirea celulară, ceea ce ajută la
              îmbunătățirea culorii
              și tonusului
              pielii, făcând-o mai netedă și radiantă. Un peeling profesional,
              realizat ținând cont de
              tipul și
              starea pielii, nu doar că reîmprospătează aspectul acesteia, ci și
              reduce vizibilitatea
              semnelor de îmbătrânire.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Peeling facial profesional în Bălți</h1>
              <p>
                Redă strălucirea naturală a tenului tău cu tratamente
                personalizate la clinica Meddera
              </p>
            </section>
            <section>
              <h2>Ce este peelingul facial?</h2>
              <p>
                Peelingul facial este o procedură dermatologică non-invazivă care
                ajută la exfolierea stratului
                superior al pielii, stimulând regenerarea celulară și îmbunătățind
                textura și tonusul tenului. La
                clinica Meddera din Bălți, oferim diverse tipuri de peeling adaptate
                nevoilor fiecărui pacient.
              </p>
            </section>
            <section>
              <h2>Tipuri de peeling disponibile la Meddera</h2>
              <ul>
                <li>
                  <strong>Peeling chimic superficial:</strong>
                  {' '}
                  ideal pentru revitalizarea tenului și tratarea
                  imperfecțiunilor minore.
                </li>
                <li>
                  <strong>Peeling mediu:</strong>
                  {' '}
                  recomandat pentru reducerea ridurilor fine și a petelor pigmentare.
                </li>
                <li>
                  <strong>Peeling profund:</strong>
                  {' '}
                  utilizat pentru tratarea cicatricilor și a semnelor avansate de
                  îmbătrânire.
                </li>
              </ul>
            </section>
            <section>
              <h2>Beneficiile peelingului facial</h2>
              <article>
                <h3>Îmbunătățirea texturii pielii</h3>
                <p>
                  Peelingul ajută la netezirea pielii, reducând aspectul porilor
                  dilatați și al cicatricilor
                  post-acneice.
                </p>
              </article>
              <article>
                <h3>Uniformizarea tonului pielii</h3>
                <p>
                  Tratamentul contribuie la estomparea petelor pigmentare și la
                  obținerea unui ten luminos și
                  uniform.
                </p>
              </article>
              <article>
                <h3>Stimularea producției de colagen</h3>
                <p>
                  Prin exfolierea controlată, peelingul stimulează regenerarea
                  celulară și producția de colagen,
                  conferind pielii fermitate și elasticitate.
                </p>
              </article>
              <article>
                <h3>Reducerea semnelor de îmbătrânire</h3>
                <p>
                  Procedura ajută la diminuarea ridurilor fine și la prevenirea
                  apariției acestora, oferind un aspect
                  întinerit tenului.
                </p>
              </article>
            </section>
            <section>
              <h2>De ce să alegi clinica Meddera din Bălți?</h2>
              <ul>
                <li>
                  <strong>Experiență profesională:</strong>
                  {' '}
                  echipă de specialiști cu peste 10 ani de experiență în
                  dermatologie și estetică.
                </li>
                <li>
                  <strong>Tehnologie modernă:</strong>
                  {' '}
                  utilizăm echipamente de ultimă generație pentru rezultate
                  optime.
                </li>
                <li>
                  <strong>Abordare personalizată:</strong>
                  {' '}
                  fiecare tratament este adaptat nevoilor și tipului de ten
                  al pacientului.
                </li>
                <li>
                  <strong>Localizare convenabilă:</strong>
                  {' '}
                  situată în centrul orașului Bălți, clinica este ușor
                  accesibilă.
                </li>
              </ul>
            </section>
            <section>
              <h2>Întrebări frecvente despre peelingul facial</h2>
              <article>
                <h3>Este peelingul facial dureros?</h3>
                <p>
                  Procedura poate provoca o ușoară senzație de arsură sau furnicături,
                  dar disconfortul este minim și
                  temporar.
                </p>
              </article>
              <article>
                <h3>Cât durează recuperarea după peeling?</h3>
                <p>
                  În funcție de tipul de peeling, recuperarea poate varia de la câteva
                  ore la câteva zile. Specialiștii
                  noștri vă vor oferi toate informațiile necesare pentru o recuperare
                  rapidă și eficientă.
                </p>
              </article>
              <article>
                <h3>De câte ședințe am nevoie?</h3>
                <p>
                  Numărul de ședințe recomandate depinde de tipul de ten și de obiectivele
                  estetice ale fiecărui
                  pacient. În general, se recomandă între 3 și 6 ședințe pentru rezultate
                  optime.
                </p>
              </article>
            </section>
            <section>
              <h2>Programează-te acum pentru o consultație gratuită</h2>
              <p>
                Contactează-ne la
                <a href="tel:+37368550030">+373 685 500 30</a>
                {' '}
                sau vizitează-ne la adresa: Str.
                Ștefan cel Mare 13, Bălți. Echipa Meddera este gata să te ajute
                să obții un ten sănătos și radiant.
              </p>
            </section>
          </div>
        </VisuallyHidden>

      </main>

      <ContactsDynamicWrapperRo />

      <ServicesNew locale="ro" />

      <FooterNew locale="ro" />

    </>
  );
}

export default ServicePage6Ro;
