import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import mezovolos from '@/../public/assets/img/services/mezovolos.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/12/ro',
  },
  title: 'Mezoterapie păr Bălți – Stop căderii și regenerare',
  description: 'Descoperă mezoterapia pentru păr în Bălți, o soluție eficientă împotriva căderii părului și alopeciei. Programează-te acum pentru un tratament personalizat.',
  openGraph: {
    title: 'Mezoterapie păr Bălți – Stop căderii și regenerare',
    description: 'Descoperă mezoterapia pentru păr în Bălți, o soluție eficientă împotriva căderii părului și alopeciei. Programează-te acum pentru un tratament personalizat.',

    url: 'https://meddera.md/services/12/ro',
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
    title: 'Mezoterapie păr Bălți – Stop căderii și regenerare',
    description: 'Descoperă mezoterapia pentru păr în Bălți, o soluție eficientă împotriva căderii părului și alopeciei. Programează-te acum pentru un tratament personalizat.',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage12Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Mezoterapia pentru păr</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={mezovolos}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Mezoterapia pentru păr este o procedură destinată îmbunătățirii stării
              părului și scalpului.
              În
              cadrul procedurii, se injectează sub piele cocktailuri speciale care
              conțin vitamine,
              minerale,
              aminoacizi și alte substanțe active, care stimulează creșterea părului,
              întăresc foliculii
              și
              îmbunătățesc microcirculația la nivelul scalpului. Mezoterapia combate
              eficient probleme
              precum
              căderea părului, subțierea părului, dermatita seboreică și tulburările
              de creștere.
              Procedura
              ajută la restabilirea sănătății părului, îmbunătățirea densității și
              texturii acestuia.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Mezoterapia pentru păr în Bălți</h1>
              <p>Redă-ți încrederea cu un tratament eficient împotriva căderii părului</p>
            </section>
            <section>
              <h2>Ce este mezoterapia pentru păr?</h2>
              <p>
                Mezoterapia este o procedură minim invazivă care implică injectarea
                de substanțe nutritive direct în
                scalp pentru a stimula creșterea părului și a preveni căderea acestuia.
                Această tehnică este eficientă
                în tratarea alopeciei și a altor probleme ale scalpului.
              </p>
            </section>
            <section>
              <h2>Beneficiile mezoterapiei pentru păr</h2>
              <ul>
                <li>Stimulează creșterea părului nou</li>
                <li>Îmbunătățește circulația sanguină la nivelul scalpului</li>
                <li>Întărește foliculii de păr</li>
                <li>Reduce căderea părului</li>
                <li>Îmbunătățește textura și aspectul părului</li>
              </ul>
            </section>
            <section>
              <h2>Indicații și contraindicații</h2>
              <article>
                <h3>Indicații</h3>
                <p>Mezoterapia este recomandată pentru persoane care se confruntă cu:</p>
                <ul>
                  <li>Căderea excesivă a părului</li>
                  <li>Alopecie androgenetică sau difuză</li>
                  <li>Păr subțire și fragil</li>
                  <li>Scalp uscat sau gras</li>
                </ul>
              </article>
              <article>
                <h3>Contraindicații</h3>
                <p>Procedura nu este recomandată în următoarele cazuri:</p>
                <ul>
                  <li>Sarcină și alăptare</li>
                  <li>Infecții active ale scalpului</li>
                  <li>Alergii la substanțele utilizate</li>
                  <li>Tulburări de coagulare a sângelui</li>
                </ul>
              </article>
            </section>
            <section>
              <h2>Procedura și durata tratamentului</h2>
              <p>
                O ședință de mezoterapie durează aproximativ 30-60 de minute.
              </p>
              <p>
                Pentru rezultate optime, se recomandă un ciclu de 6-10
                ședințe, efectuate la intervale de 1-2
                săptămâni.
              </p>
            </section>
            <section>
              <h2>Rezultate așteptate</h2>
              <p>
                Pacienții observă o reducere semnificativă a
                căderii părului și o îmbunătățire a densității și texturii
                părului după câteva ședințe.

              </p>
            </section>
            <section>
              <h2>Testimoniale</h2>
              <blockquote>
                <p>
                  După doar câteva ședințe de mezoterapie, am observat o
                  îmbunătățire semnificativă a stării părului
                  meu. Recomand cu încredere! – Maria, 34 ani
                </p>
              </blockquote>
              <blockquote>
                <p>
                  Profesionalism și rezultate excelente. Părul meu arată
                  mai sănătos ca niciodată. – Ion, 40 ani
                </p>
              </blockquote>
            </section>
            <section>
              <h2>Programează-te acum</h2>
              <p>
                Redescoperă frumusețea părului tău cu ajutorul mezoterapiei.
                Contactează-ne pentru o consultație
                personalizată.
              </p>
              <ul>
                <li>
                  Telefon:
                  <a href="tel:+37368550030">+37368550030</a>
                </li>
                <li>Adresă: Balti, Stefan Cel Mare, 13, Moldova</li>
              </ul>
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

export default ServicePage12Ro;
