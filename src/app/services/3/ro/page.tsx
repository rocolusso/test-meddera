import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import chistkaLica from '@/../public/assets/img/services/chistka_lica.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.meddera.md/services/3/ro',
  },
  title: 'Curățare facială profesională în Bălți | Îngrijire completă a tenului',
  description: 'Descoperă cele mai eficiente tratamente de curățare facială în Bălți. Îmbunătățește sănătatea și aspectul tenului tău cu ajutorul specialiștilor noștri.',
  openGraph: {
    title: 'Curățare facială profesională în Bălți | Îngrijire completă a tenului',
    description: 'Descoperă cele mai eficiente tratamente de curățare facială în Bălți. Îmbunătățește sănătatea și aspectul tenului tău cu ajutorul specialiștilor noștri.',

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
    title: 'Curățare facială profesională în Bălți | Îngrijire completă a tenului',
    description: 'Descoperă cele mai eficiente tratamente de curățare facială în Bălți. Îmbunătățește sănătatea și aspectul tenului tău cu ajutorul specialiștilor noștri.',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage3Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="flex justify-center">
            <Image
              className=""
              src={chistkaLica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Curățirea feței este o procedură cosmetică menită să ofere o
              curățare profundă a pielii și
              să
              îmbunătățească textura și culoarea acesteia. Procedura ajută la
              eliminarea impurităților,
              excesului de sebum și a celulelor moarte, contribuind astfel la
              micșorarea porilor și la
              reducerea riscului de inflamații.

              Există mai multe tipuri de curățare, inclusiv mecanică, cu ultrasunete
              și combinată,
              alegerea
              acestora depinzând de starea pielii și de nevoile sale. După o
              consultație, medicul
              selectează
              metoda optimă și efectuează procedura, luând în considerare toate
              particularitățile pielii
              pacientului.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Curățare facială profesională în Bălți</h1>
              <p>
                Redă strălucirea și sănătatea tenului tău cu tratamente personalizate
                de curățare facială oferite de experții noștri în Bălți.
              </p>
            </section>
            <section>
              <h2>Beneficiile curățării faciale profesionale</h2>
              <ul>
                <li>Eliminarea impurităților și a celulelor moarte</li>
                <li>Reducerea acneei și a punctelor negre</li>
                <li>Hidratare profundă și revitalizare a pielii</li>
                <li>Îmbunătățirea texturii și tonusului pielii</li>
              </ul>
            </section>
            <section>
              <h2>Tipuri de tratamente de curățare facială</h2>
              <article>
                <h3>Curățare facială clasică</h3>
                <p>
                  Un tratament tradițional care include demachiere, exfoliere,
                  extracție și aplicarea unei măști
                  calmante pentru un ten curat și revigorat.
                </p>
              </article>
              <article>
                <h3>Curățare facială cu ultrasunete</h3>
                <p>
                  Utilizează tehnologia cu ultrasunete pentru a curăța în profunzime porii,
                  stimulând regenerarea
                  celulară și îmbunătățind absorbția produselor de îngrijire.
                </p>
              </article>
              <article>
                <h3>Curățare facială cu peeling chimic</h3>
                <p>
                  Aplicarea de soluții chimice pentru a exfolia straturile superficiale
                  ale pielii, tratând probleme
                  precum hiperpigmentarea și liniile fine.
                </p>
              </article>
              <article>
                <h3>Curățare facială pentru ten acneic</h3>
                <p>
                  Tratamente specializate pentru reducerea inflamației, prevenirea
                  erupțiilor și îmbunătățirea
                  aspectului pielii afectate de acnee.
                </p>
              </article>
            </section>
            <section>
              <h2>De ce să alegi clinica noastră din Bălți</h2>
              <p>
                Clinica noastră oferă servicii de curățare facială realizate de
                specialiști cu experiență, utilizând
                echipamente moderne și produse de calitate superioară. Ne adaptăm
                tratamentele în funcție de tipul și
                nevoile specifice ale tenului tău.
              </p>
            </section>
            <section>
              <h2>Întrebări frecvente</h2>
              <ul>
                <li>
                  <strong>Cât durează o ședință de curățare facială?</strong>
                  {' '}
                  Aproximativ 60 de minute, în funcție de
                  tipul de tratament ales.
                </li>
                <li>
                  <strong>Este dureroasă curățarea facială?</strong>
                  {' '}
                  Procedura este, în general, confortabilă, cu un
                  minim de disconfort în timpul extracțiilor.
                </li>
                <li>
                  <strong>Cât de des ar trebui să fac o curățare facială?</strong>
                  {' '}
                  Se recomandă o ședință la fiecare
                  4-6 săptămâni pentru menținerea sănătății pielii.
                </li>
                <li>
                  <strong>Pot face curățare facială dacă am pielea sensibilă?</strong>
                  {' '}
                  Da, oferim tratamente adaptate
                  pentru pielea sensibilă, folosind produse hipoalergenice.
                </li>
              </ul>
            </section>
            <section>
              <h2>Testimoniale</h2>
              <article>
                <p>
                  După tratamentul de curățare facială, tenul meu este mai
                  luminos și mai neted. Recomand cu
                  încredere! – Maria, Bălți
                </p>
              </article>
              <article>
                <p>
                  Profesionalism și atenție la detalii. Mă simt minunat după
                  fiecare ședință! – Elena, Bălți
                </p>
              </article>
            </section>
            <section>
              <h2>Programează o consultație</h2>
              <form>

                <input type="text" name="nume" required />

                <input type="tel" name="telefon" required />

                <input type="email" name="email" />

                <textarea name="mesaj" />

              </form>
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

export default ServicePage3Ro;
