import React from 'react';
// import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import massageLica from '@/../public/assets/img/services/massage_lica.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej/ro',
  },
  title: 'Masaj facial în Bălți – Rejuvenare și relaxare pentru tenul tău',
  description: 'Descoperă beneficiile masajului facial în Bălți. Îmbunătățește aspectul pielii, relaxează-te și redă strălucirea tenului tău. Programează-te acum!',
  openGraph: {
    title: 'Masaj facial în Bălți – Rejuvenare și relaxare pentru tenul tău',
    description: 'Descoperă beneficiile masajului facial în Bălți. Îmbunătățește aspectul pielii, relaxează-te și redă strălucirea tenului tău. Programează-te acum!',

    url: 'https://meddera.md/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/massage_lica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masaj facial în Bălți – Rejuvenare și relaxare pentru tenul tău',
    description: 'Descoperă beneficiile masajului facial în Bălți. Îmbunătățește aspectul pielii, relaxează-te și redă strălucirea tenului tău. Programează-te acum!',

    images: ['https://meddera.md/assets/img/services/massage_lica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage4Ro() {
  return (
    <>
      {/* <IpChecker /> */}
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Masaj facial</p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={massageLica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Masajul facial este o procedură care ajută la îmbunătățirea circulației
              sanguine, stimulează
              producția de colagen și elastină și îmbunătățește tonusul pielii.
              Datorită acțiunii delicate
              asupra mușchilor feței, masajul ajută la reducerea tensiunii,
              diminuarea edemelor și
              creșterea
              elasticității pielii, făcând-o mai fermă și mai strălucitoare.
              Există diferite tehnici de
              masaj,
              cum ar fi masajul clasic, drenajul limfatic, masajul sculptural,
              fiecare dintre acestea
              abordând
              nevoi specifice și fiind selectate în funcție de necesitățile pacientului.
              Ședințele
              regulate de
              masaj facial contribuie la prevenirea schimbărilor legate de vârstă și
              îmbunătățesc aspectul
              general al pielii. O abordare profesională asigură nu doar un efect
              estetic, ci și relaxare,
              ceea ce contribuie la o stare generală de bine.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">

            <section>
              <h1>Masaj facial profesional în Bălți</h1>
              <p>
                Redescoperă frumusețea naturală a tenului tău cu ajutorul masajului
                facial oferit de specialiștii
                noștri din Bălți.
              </p>
            </section>

            <section>
              <h2>Beneficiile masajului facial</h2>
              <ul>
                <li>Stimulează circulația sanguină și limfatică</li>
                <li>Îmbunătățește elasticitatea și fermitatea pielii</li>
                <li>Reduce ridurile și liniile fine</li>
                <li>Detoxifică și oxigenează țesuturile</li>
                <li>Relaxează mușchii faciali și ameliorează stresul</li>
              </ul>
            </section>
            <section>
              <h2>Tipuri de masaj facial oferite</h2>
              <article>
                <h3>Masaj facial clasic</h3>
                <p>
                  Tehnică tradițională care îmbunătățește aspectul pielii și
                  previne semnele îmbătrânirii.
                </p>
              </article>
              <article>
                <h3>Masaj Kobido</h3>
                <p>
                  Metodă japoneză de rejuvenare naturală, care stimulează
                  producția de colagen și relaxează
                  profund.
                </p>
              </article>
              <article>
                <h3>Masaj de drenaj limfatic</h3>
                <p>
                  Ajută la eliminarea toxinelor și reduce umflăturile, oferind
                  un ten luminos și sănătos.
                </p>
              </article>
              <article>
                <h3>Masaj facial anti-age</h3>
                <p>
                  Combate semnele îmbătrânirii prin tehnici avansate care redau
                  fermitatea și elasticitatea pielii.
                </p>
              </article>
            </section>
            <section>
              <h2>De ce să alegi serviciile noastre în Bălți?</h2>
              <p>
                Oferim servicii de calitate superioară, personalizate pentru
                nevoile fiecărui client, într-un ambient
                relaxant și profesional.
              </p>
            </section>
            <section>
              <h2>Întrebări frecvente</h2>
              <ul>
                <li>
                  <strong>Cât durează o ședință de masaj facial?</strong>
                  {' '}
                  Aproximativ 60 de minute.
                </li>
                <li>
                  <strong>Este masajul facial potrivit pentru toate tipurile de ten?</strong>
                  {' '}
                  Da, tehnicile noastre
                  sunt adaptate fiecărui tip de ten.
                </li>
                <li>
                  <strong>Cât de des ar trebui să fac un masaj facial?</strong>
                  {' '}
                  Recomandăm o ședință la fiecare 2-4
                  săptămâni pentru rezultate optime.
                </li>
                <li>
                  <strong>Există contraindicații?</strong>
                  {' '}
                  Persoanele cu afecțiuni cutanate severe ar trebui să
                  consulte un specialist înainte.
                </li>
              </ul>
            </section>
            <section>
              <h2>Programează-te acum</h2>
              <p>
                Contactează-ne la
                <strong>[Număr de telefon]</strong>
                {' '}
                sau vizitează-ne la
                <strong>
                  [Adresă
                  completă]
                </strong>
                {' '}
                pentru a-ți programa o ședință de masaj facial.
              </p>
            </section>

          </div>
        </VisuallyHidden>

        <ContactsDynamicWrapperRo />

        <ServicesNew locale="ro" />

      </main>

      <FooterNew locale="ro" />

    </>
  );
}

export default ServicePage4Ro;
