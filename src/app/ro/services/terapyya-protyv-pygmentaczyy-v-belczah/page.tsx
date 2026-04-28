import React from 'react';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import { VisuallyHidden } from '@/components/Visually-hidden';
import terapiyaProtivPigment from '../../../../../public/assets/img/services/terapiya-protiv-pigm.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/ro/services/terapyya-protyv-pygmentaczyy-v-belczah',
  },
  title: 'Terapie Antipigmentară în Bălți | Elimină Petele Pigmentare cu Meddera',
  description:
    'Terapie antipigmentară în Bălți: pete, melasma, hiperpigmentare. Tratamente la Meddera. Programează consultația.',
  openGraph: {
    title: 'Terapie Antipigmentară în Bălți | Elimină Petele Pigmentare cu Meddera',
    description:
      'Terapie antipigmentară în Bălți: pete, melasma, hiperpigmentare. Tratamente la Meddera. Programează consultația.',

    url: 'https://meddera.md/ro/services/terapyya-protyv-pygmentaczyy-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/terapiya-protiv-pigm.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terapie Antipigmentară în Bălți | Elimină Petele Pigmentare cu Meddera',
    description:
      'Terapie antipigmentară în Bălți: pete, melasma, hiperpigmentare. Tratamente la Meddera. Programează consultația.',

    images: ['https://meddera.md/assets/img/services/terapiya-protiv-pigm.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage9Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Terapie antipigmentară în Bălți – eliminare pete pigmentare'}
      heroImage={terapiyaProtivPigment}
      heroImageAlt={'Terapie antipigmentară — clinica Meddera, Bălți'}
    >
      <p>
        Terapie antipigmentară este o procedură cosmetologică destinată iluminării
        și eliminării petelor pigmentare, hiperpigmentației. În timpul procedurii,
        se utilizează peelinguri și produse speciale de iluminare,
        care blochează producția de melanina și contribuie la
        distribuirea uniformă a acesteia în piele. Procedura este
        potrivită pentru tratarea fotoîmbătrînirii, cronoîmbătrînrii,
        petelor de vârstă, a leziunilor cauzate de soare, precum și a hiperpigmentației
        post-inflamatorii. Realizarea regulată a acestor proceduri ajută la
        îmbunătățirea semnificativă a culorii tenului și la obținerea
        unei pielii mai netede și strălucitoare.
      </p>
      <VisuallyHidden>
        <div className="seo-block bg-gray-400">
          <section>
            <p className="font-semibold">Terapie Antipigmentară în Bălți</p>
            <p>
              Elimină petele pigmentare și redă strălucirea naturală a pielii tale
              cu tratamente profesionale la
              clinica Meddera.
            </p>
          </section>
          <section>
            <h2>Ce este terapia antipigmentară?</h2>
            <p>
              Terapia antipigmentară este un tratament dermatologic avansat
              destinat reducerii și eliminării petelor
              pigmentare, melasmei și hiperpigmentării. La clinica Meddera
              din Bălți, folosim metode moderne precum
              peelinguri chimice, mezoterapie și tratamente laser pentru a
              obține un ten uniform și luminos.
            </p>
          </section>
          <section>
            <h2>Beneficiile terapiei antipigmentare</h2>
            <ul>
              <li>Reducerea vizibilă a petelor pigmentare și a melasmei</li>
              <li>Îmbunătățirea texturii și tonului pielii</li>
              <li>Stimularea regenerării celulare</li>
              <li>Rezultate rapide și de durată</li>
            </ul>
          </section>
          <section>
            <h2>Proceduri disponibile la clinica Meddera</h2>
            <article>
              <h3>Peelinguri chimice personalizate</h3>
              <p>
                Utilizăm peelinguri chimice adaptate tipului tău de piele pentru
                a exfolia stratul superior și a
                stimula regenerarea celulară, reducând astfel hiperpigmentarea.
              </p>
            </article>
            <article>
              <h3>Mezoterapie cu substanțe active</h3>
              <p>
                Injectăm substanțe precum acid hialuronic, vitamine și antioxidanți
                direct în derm pentru a hidrata
                și uniformiza tonul pielii.
              </p>
            </article>
            <article>
              <h3>Tratament laser de ultimă generație</h3>
              <p>
                Folosim tehnologii laser avansate pentru a targeta și a elimina
                pigmentul excesiv, oferind rezultate
                vizibile după câteva ședințe.
              </p>
            </article>
          </section>
          <section>
            <h2>De ce să alegi clinica Meddera din Bălți?</h2>
            <ul>
              <li>Experiență vastă în dermatologie și estetică</li>
              <li>Tratamente personalizate pentru fiecare pacient</li>
              <li>Tehnologii moderne și echipamente de ultimă generație</li>
              <li>Atmosferă primitoare și profesionalism</li>
            </ul>
          </section>
          <section>
            <h2>Programează-te acum</h2>
            <p>
              Nu lăsa petele pigmentare să-ți afecteze încrederea în tine. Contactează-ne la
              <strong>
                +373 68550030
              </strong>
              {' '}
              sau vizitează-ne la adresa:
              <strong>str. Ștefan cel Mare 13, Bălți</strong>
              . Echipa
              noastră de specialiști este gata să te ajute să obții o piele sănătoasă și radiantă.
            </p>
          </section>
        </div>
      </VisuallyHidden>

    </ContentPageShell>
  );
}

export default ServicePage9Ro;
