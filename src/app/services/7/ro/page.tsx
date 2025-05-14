import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import maskaLica from '@/../public/assets/img/services/maska_lica.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Masca alginată – Hidratare, lifting și strălucirea pielii',
  description: `Descoperiți cum masca alginată obținută din alge marine brune
                  ajută la hidratarea profundă, tonifierea și calmarea pielii.
                  Potrivită pentru orice tip de ten, îmbunătățește textura, tonul și elasticitatea pielii.`,
  openGraph: {
    title: 'Masca alginată – Hidratare, lifting și strălucirea pielii',
    description: `Descoperiți cum masca alginată obținută din alge marine brune
                  ajută la hidratarea profundă, tonifierea și calmarea pielii.
                  Potrivită pentru orice tip de ten, îmbunătățește textura, tonul și elasticitatea pielii.`,
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
    title: 'Masca alginată – Hidratare, lifting și strălucirea pielii',
    description: `Descoperiți cum masca alginată obținută din alge marine brune
                  ajută la hidratarea profundă, tonifierea și calmarea pielii.
                  Potrivită pentru orice tip de ten, îmbunătățește textura, tonul și elasticitatea pielii.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage7Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Masca alginată</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={maskaLica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Mască alginată – un mijloc eficient de îngrijire a pielii,
              realizat pe bază de alginați, care se obțin din algele marine brune.
              Datorită conținutului ridicat de minerale și microelemente,
              măștile alginate au un puternic efect hidratant, de întindere și calmare.
              Masca se aplică pe față sub formă de amestec dens și se întărește,
              formând un strat compact,
              care ajută substanțele active să pătrundă mai adânc în piele. În
              funcție de compoziție,
              măștile alginate pot ilumina suplimentar pigmentația, îmbunătăți textura pielii
              și ajuta la eliminarea inflamațiilor. După procedură, pielea arată proaspătă,
              hidratată și fermă, iar tonul acesteia devine mai uniform și radiant.
              Măștile alginate sunt ideale pentru orice tip de piele și sunt
              frecvent utilizate la finalul tratamentelor profesionale, amplificând
              efectul altor
              proceduri.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <div
              style={{ fontSize: '8px' }}
              className="container justify-center mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
            >
              <div>
                <h1>Masca alginată</h1>
                <h2>Ce este masca alginată?</h2>
                <h2>Beneficiile măștii alginate</h2>
                <h3>Hidratare și hrănire a pielii</h3>
              </div>

              <div>
                <h3>Efect de lifting</h3>
                <h3>Reducerea inflamațiilor și îmbunătățirea texturii</h3>
                <h2>Pentru cine este potrivită masca alginată?</h2>
                <h2>Cum se utilizează masca alginată?</h2>
                <h2>Rezultatele după utilizare</h2>
              </div>

            </div>
          </div>
        </VisuallyHidden>

      </main>

      <ContactsDynamicWrapperRo />

      <ServicesNew locale="ro" />

      <FooterNew locale="ro" />

    </>
  );
}

export default ServicePage7Ro;
