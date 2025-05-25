import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import terapiyaProtivPigment from '@/../public/assets/img/services/terapiya-protiv-pigm.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/9/ro',
  },
  title: 'Terapie Antipigmentară în Bălți | Elimină Petele Pigmentare cu Meddera',
  description: 'Terapie antipigmentară profesională la Meddera Bălți. Elimină pete pigmentare, melasma și hiperpigmentarea. Programează-te acum!',
  openGraph: {
    title: 'Terapie Antipigmentară în Bălți | Elimină Petele Pigmentare cu Meddera',
    description: 'Terapie antipigmentară profesională la Meddera Bălți. Elimină pete pigmentare, melasma și hiperpigmentarea. Programează-te acum!',

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
    title: 'Terapie Antipigmentară în Bălți | Elimină Petele Pigmentare cu Meddera',
    description: 'Terapie antipigmentară profesională la Meddera Bălți. Elimină pete pigmentare, melasma și hiperpigmentarea. Programează-te acum!',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage9Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Terapie antipigmentară</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={terapiyaProtivPigment}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
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
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Terapie Antipigmentară în Bălți</h1>
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

      </main>

      <ContactsDynamicWrapperRo />

      <ServicesNew locale="ro" />

      <FooterNew locale="ro" />

    </>
  );
}

export default ServicePage9Ro;
