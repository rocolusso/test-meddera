import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import dermapen from '@/../public/assets/img/services/dermapen.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/10/ro',
  },
  title: 'Dermapen Bălți - Tratament Microneedling pentru Rejuvenare Facială',
  description: 'Descoperă tratamentul Dermapen în Bălți pentru rejuvenarea pielii, reducerea cicatricilor și îmbunătățirea texturii tenului. Programări disponibile acum.',
  openGraph: {
    title: 'Dermapen Bălți - Tratament Microneedling pentru Rejuvenare Facială',
    description: 'Descoperă tratamentul Dermapen în Bălți pentru rejuvenarea pielii, reducerea cicatricilor și îmbunătățirea texturii tenului. Programări disponibile acum.',

    url: 'https://meddera.md/services/10/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/dermapen.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dermapen Bălți - Tratament Microneedling pentru Rejuvenare Facială',
    description: 'Descoperă tratamentul Dermapen în Bălți pentru rejuvenarea pielii, reducerea cicatricilor și îmbunătățirea texturii tenului. Programări disponibile acum.',

    images: ['https://meddera.md/assets/img/services/dermapen.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage10Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Dermapen</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={dermapen}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Dermapen este o procedură cosmetologică bazată pe micro-needling,
              prin care, cu ajutorul unui
              dispozitiv cu multe ace mici, se creează daune microscopice la
              nivelul pielii. Acest lucru
              stimulează procesele naturale de regenerare și producția de colagen,
              ceea ce contribuie la
              îmbunătățirea texturii pielii, reducerea porilor, diminuarea
              ridurilor și combaterea
              post-acneei, cicatricilor și vergeturilor. Dermapen permite îmbunătățirea
              tonusului pielii,
              uniformizarea culorii acesteia și o face mai fermă. Procedura este
              sigură și eficientă, nu
              necesită o perioadă lungă de recuperare și este potrivită pentru
              toate tipurile de piele.
              Rezultatele devin vizibile după câteva ședințe.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">

            <section>
              <h1>Dermapen în Bălți - Rejuvenare Facială prin Microneedling</h1>
              <p>
                Redă pielii tale strălucirea naturală cu tratamentul Dermapen
                disponibil acum în Bălți.
              </p>
            </section>

            <section>
              <h2>Ce este Dermapen?</h2>
              <p>
                Dermapen este un dispozitiv avansat de
                microneedling care utilizează microace pentru a stimula
                producția naturală de colagen și elastină,
                îmbunătățind astfel textura și tonusul pielii.
              </p>
            </section>
            <section>
              <h2>Beneficiile tratamentului Dermapen</h2>
              <ul>
                <li>Reducerea cicatricilor post-acneice și a vergeturilor</li>
                <li>Diminuarea ridurilor fine și a liniilor de expresie</li>
                <li>Îmbunătățirea texturii și a fermității pielii</li>
                <li>Reducerea porilor dilatați și a hiperpigmentării</li>
              </ul>
            </section>
            <section>
              <h2>Indicații terapeutice</h2>
              <p>Tratamentul Dermapen este recomandat pentru:</p>
              <ul>
                <li>Cicatrici post-acneice și chirurgicale</li>
                <li>Riduri fine și linii de expresie</li>
                <li>Vergeturi și laxitate cutanată</li>
                <li>Pori dilatați și ten neuniform</li>
              </ul>
            </section>
            <section>
              <h2>Desfășurarea procedurii</h2>
              <p>
                Procedura durează aproximativ 60 de minute și implică
                curățarea pielii, aplicarea unei creme
                anestezice, utilizarea dispozitivului Dermapen și
                aplicarea unui ser calmant post-tratament.
              </p>
            </section>
            <section>
              <h2>Rezultate și recuperare</h2>
              <p>
                Rezultatele sunt vizibile după 5-7 zile, cu o
                îmbunătățire continuă a aspectului pielii. Recuperarea
                este rapidă, cu un disconfort minim.
              </p>
            </section>
            <section>
              <h2>Programări și contact</h2>
              <p>Programează-te acum pentru o consultație gratuită la clinica noastră din Bălți:</p>
              <ul>
                <li>Adresă: Strada Ștefan cel Mare, nr. 13, Bălți</li>
                <li>Telefon: +373 685 500 30</li>
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

export default ServicePage10Ro;
