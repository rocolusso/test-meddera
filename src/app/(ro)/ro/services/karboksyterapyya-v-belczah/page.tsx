import React from 'react';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import { VisuallyHidden } from '@/components/Visually-hidden';
import karboksiterapiya from '@public/assets/img/services/karbiksiterapiya.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/ro/services/karboksyterapyya-v-belczah',
  },
  title: 'Carboxiterapie Bălți - Rejuvenare Facială și Corporală | Meddera',
  description:
    'Carboxiterapie Meddera Bălți: piele întinerită, celulită, vergeturi. Tratament non-invaziv. Programări online.',
  openGraph: {
    title: 'Carboxiterapie Bălți - Rejuvenare Facială și Corporală | Meddera',
    description:
      'Carboxiterapie Meddera Bălți: piele întinerită, celulită, vergeturi. Tratament non-invaziv. Programări online.',

    url: 'https://meddera.md/ro/services/karboksyterapyya-v-belczah',
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
    description:
      'Carboxiterapie Meddera Bălți: piele întinerită, celulită, vergeturi. Tratament non-invaziv. Programări online.',

    images: ['https://meddera.md/assets/img/services/karbiksiterapiya.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage5Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Carboxiterapie Bălți – rejuvenare facială și corporală'}
      heroImage={karboksiterapiya}
      heroImageAlt={'Carboxiterapie — clinica Meddera, Bălți'}
    >
      <p>
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
      <VisuallyHidden>
        <div className="seo-block bg-gray-400">
          <section>
            <p className="font-semibold">Carboxiterapie în Bălți - Tratament Avansat pentru Rejuvenare</p>
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

    </ContentPageShell>
  );
}

export default ServicePage5Ro;
