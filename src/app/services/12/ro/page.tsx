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
  title: 'Mezoterapia pentru păr: redobândirea densității și sănătății',
  description: `Descoperă procedura de mezoterapie pentru păr — o soluție eficientă
                  pentru căderea, subțierea și alte probleme de creștere.
                  Stimularea foliculilor și îmbunătățirea microcirculației scalpului.`,
  openGraph: {
    title: 'Mezoterapia pentru păr: redobândirea densității și sănătății',
    description: `Descoperă procedura de mezoterapie pentru păr — o soluție eficientă
                  pentru căderea, subțierea și alte probleme de creștere.
                  Stimularea foliculilor și îmbunătățirea microcirculației scalpului.`,
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
    title: 'Mezoterapia pentru păr: redobândirea densității și sănătății',
    description: `Descoperă procedura de mezoterapie pentru păr — o soluție eficientă
                  pentru căderea, subțierea și alte probleme de creștere.
                  Stimularea foliculilor și îmbunătățirea microcirculației scalpului.`,
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
            <div
              style={{ fontSize: '8px' }}
              className="container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
            >
              <div>
                <h1>Mezoterapia pentru păr</h1>
                <h2>Ce este mezoterapia pentru păr?</h2>
                <h2>Beneficiile procedurii de mezoterapie</h2>
                <h3>Stimularea creșterii părului</h3>
                <h3>Întărirea foliculilor de păr</h3>
                <h3>Combaterea căderii și subțierii părului</h3>

              </div>

              <div>
                <h2>Ce probleme rezolvă mezoterapia?</h2>
                <h3>Căderea părului</h3>
                <h3>Subțierea părului</h3>
                <h3>Dermatita seboreică</h3>
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

export default ServicePage12Ro;
