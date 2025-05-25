import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import karboksiterapiya from '@/../public/assets/img/services/karbiksiterapiya.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/karboksyterapyya-v-belczah/ro',
  },
  title: 'Carboxiterapie Bălți - Rejuvenare Facială și Corporală | Meddera',
  description: 'Descoperă carboxiterapia la Meddera Bălți - tratament non-invaziv pentru întinerirea pielii, reducerea celulitei și vergeturilor. Programează-te acum!',
  openGraph: {
    title: 'Carboxiterapie Bălți - Rejuvenare Facială și Corporală | Meddera',
    description: 'Descoperă carboxiterapia la Meddera Bălți - tratament non-invaziv pentru întinerirea pielii, reducerea celulitei și vergeturilor. Programează-te acum!',

    url: 'https://meddera.md/services/karboksyterapyya-v-belczah/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/karbiksiterapiya.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carboxiterapie Bălți - Rejuvenare Facială și Corporală | Meddera',
    description: 'Descoperă carboxiterapia la Meddera Bălți - tratament non-invaziv pentru întinerirea pielii, reducerea celulitei și vergeturilor. Programează-te acum!',

    images: ['https://meddera.md/assets/img/services/karbiksiterapiya.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage5Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Carboxiterapie</p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={karboksiterapiya}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Carboxiterapia este o procedură destinată îmbunătățirii stării pielii
              prin saturarea
              acesteia cu
              dioxid de carbon, fără injecții și fără a afecta integritatea pielii.
              În timpul procedurii,
              pe
              față se aplică un gel special care activează procesele de microcirculație
              și stimulează
              fluxul
              de oxigen către celule. Acest lucru îmbunătățește tonusul pielii, crește
              elasticitatea
              acesteia,
              reduce vizibilitatea ridurilor și a pigmentării și ajută în combaterea acneei
              și a semnelor
              post-acnee. Carboxiterapia este potrivită pentru toate tipurile de piele și
              poate fi
              utilizată
              ca procedură de sine stătătoare sau în combinație cu alte tratamente.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Carboxiterapie în Bălți - Tratament Avansat pentru Rejuvenare</h1>
              <p>
                Redă pielii tale fermitatea și strălucirea cu ajutorul
                carboxiterapiei la Meddera Bălți.
              </p>
            </section>

            <section>
              <h2>Ce este Carboxiterapia?</h2>
              <p>
                Carboxiterapia este un tratament non-invaziv care utilizează dioxidul
                de carbon (CO₂) pentru a stimula
                circulația sanguină și producția de colagen, oferind pielii un aspect
                întinerit și sănătos. Este
                eficientă în tratarea ridurilor, celulitei, vergeturilor și cearcănelor.
              </p>
            </section>
            <section>
              <h2>Beneficiile Carboxiterapiei</h2>
              <ul>
                <li>Îmbunătățirea elasticității și tonusului pielii</li>
                <li>Reducerea ridurilor fine și a liniilor de expresie</li>
                <li>Eliminarea celulitei și a vergeturilor</li>
                <li>Reducerea cearcănelor și a pungilor sub ochi</li>
                <li>Stimularea regenerării celulare și a circulației sanguine</li>
              </ul>
            </section>
            <section>
              <h2>De ce să alegi Meddera pentru Carboxiterapie în Bălți?</h2>
              <p>
                La Meddera, oferim carboxiterapie realizată de specialiști cu
                experiență, utilizând echipamente de
                ultimă generație. Ne adaptăm tratamentele nevoilor fiecărui
                pacient, asigurând rezultate vizibile și de
                durată.
              </p>
            </section>
            <section>
              <h2>Procedura de Carboxiterapie</h2>
              <p>
                Tratamentul constă în aplicarea controlată de CO₂ în zonele
                vizate, stimulând oxigenarea și
                revitalizarea țesuturilor. Procedura este rapidă, nedureroasă
                și nu necesită timp de recuperare.
              </p>
            </section>
            <section>
              <h2>Întrebări Frecvente</h2>
              <article>
                <h3>Este carboxiterapia dureroasă?</h3>
                <p>
                  Procedura este minim invazivă și majoritatea pacienților
                  o consideră confortabilă, cu o ușoară
                  senzație de căldură sau furnicături.
                </p>
              </article>
              <article>
                <h3>Câte ședințe sunt necesare?</h3>
                <p>
                  Numărul de ședințe variază în funcție de zona tratată și
                  obiectivele pacientului, însă se recomandă
                  între 4 și 6 ședințe pentru rezultate optime.
                </p>
              </article>
              <article>
                <h3>Există efecte secundare?</h3>
                <p>
                  Carboxiterapia este o procedură sigură, cu riscuri minime.
                  Pot apărea ușoare roșeață sau umflături
                  temporare în zona tratată.
                </p>
              </article>
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

export default ServicePage5Ro;
