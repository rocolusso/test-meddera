import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import biorevit from '@/../public/assets/img/services/biorevit.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/15/ro',
  },
  title: 'Biorevitalizare în Bălți - Rejuvenare Facială Profesională',
  description: 'Descoperă biorevitalizarea în Bălți - procedură avansată de rejuvenare facială. Hidratează, regenerează și redă strălucirea pielii tale. Programează-te acum!',
  openGraph: {
    title: 'Biorevitalizare în Bălți - Rejuvenare Facială Profesională',
    description: 'Descoperă biorevitalizarea în Bălți - procedură avansată de rejuvenare facială. Hidratează, regenerează și redă strălucirea pielii tale. Programează-te acum!',

    url: 'https://meddera.md/services/15/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/biorevit.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biorevitalizare în Bălți - Rejuvenare Facială Profesională',
    description: 'Descoperă biorevitalizarea în Bălți - procedură avansată de rejuvenare facială. Hidratează, regenerează și redă strălucirea pielii tale. Programează-te acum!',

    images: ['https://meddera.md/assets/img/services/biorevit.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage15Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={biorevit}
              alt="biorevit"
              width={500}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Biorevitalizarea este o procedură cosmetologică destinată hidratării
              profunde și regenerării
              pielii prin injectarea de acid hialuronic și alte substanțe active.
              Procedura ajută la
              îmbunătățirea tonusului pielii, reducerea ridurilor fine, și
              creșterea fermității și
              elasticității acesteia. Biorevitalizarea restaurează activ echilibrul
              de apă al pielii,
              stimulează procesele metabolice și îmbunătățește microcirculația,
              ceea ce conferă pielii un
              aspect proaspăt și sănătos. Procedura nu necesită o recuperare îndelungată,
              iar rezultatele sunt
              vizibile deja după câteva sesiuni. Biorevitalizarea este potrivită
              pentru toate tipurile de
              piele și reprezintă o metodă eficientă de combatere a semnelor de
              îmbătrânire și oboseală a
              pielii.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Biorevitalizare în Bălți - Rejuvenare Facială Profesională</h1>
              <p>
                Redă pielii tale vitalitatea și strălucirea cu ajutorul
                biorevitalizării - tratamentul modern de
                întinerire facială disponibil acum în Bălți.
              </p>
            </section>
            <section>
              <h2>Ce este Biorevitalizarea?</h2>
              <p>
                Biorevitalizarea este o procedură minim invazivă care
                implică injectarea de acid hialuronic în piele
                pentru a restabili hidratarea, elasticitatea și tonusul
                acesteia. Este ideală pentru combaterea semnelor
                de îmbătrânire și pentru revitalizarea tenului obosit.
              </p>
            </section>
            <section>
              <h2>Beneficiile Biorevitalizării</h2>
              <ul>
                <li>Hidratare profundă a pielii</li>
                <li>Reducerea ridurilor fine și a liniilor de expresie</li>
                <li>Îmbunătățirea elasticității și fermității pielii</li>
                <li>Redarea strălucirii naturale a tenului</li>
                <li>Stimularea producției de colagen și elastină</li>
              </ul>
            </section>
            <section>
              <h2>Indicații pentru Biorevitalizare</h2>
              <p>Biorevitalizarea este recomandată pentru:</p>
              <ul>
                <li>Ten deshidratat sau tern</li>
                <li>Semne de îmbătrânire prematură</li>
                <li>Piele afectată de expunerea la soare</li>
                <li>Recuperare după proceduri dermatologice</li>
                <li>Prevenirea îmbătrânirii cutanate</li>
              </ul>
            </section>
            <section>
              <h2>Procedura de Biorevitalizare</h2>
              <p>
                Tratamentul constă în injectarea de acid hialuronic în
                zonele afectate ale feței. Procedura durează
                aproximativ 60 de minute și nu necesită timp de recuperare.
                Rezultatele sunt vizibile după prima
                ședință, cu efecte cumulative în urma tratamentelor repetate.
              </p>
            </section>
            <section>
              <h2>De ce să alegi clinica noastră din Bălți?</h2>
              <ul>
                <li>Specialiști cu experiență în dermatologie estetică</li>
                <li>Produse de calitate superioară, aprobate internațional</li>
                <li>Abordare personalizată pentru fiecare pacient</li>
                <li>Ambianță confortabilă și echipamente moderne</li>
              </ul>
            </section>
            <section>
              <h2>Programează-te acum</h2>
              <p>
                Contactează-ne pentru o consultație gratuită și descoperă
                cum biorevitalizarea poate transforma
                aspectul pielii tale.
              </p>
              <p>
                Telefon:
                <a href="tel:+37368550030">+373 685 500 30</a>
              </p>
              <p>Adresă: Balti, Stefan Cel Mare, 13, Moldova</p>
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

export default ServicePage15Ro;
