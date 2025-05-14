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
  title: 'Carboxiterapia: Îngrijirea pielii fără injecții pentru fermitate și strălucire',
  description: `Carboxiterapia este o procedură modernă, fără injecții, care
                  îmbunătățește tonusul și fermitatea pielii, reduce ridurile,
                  pigmentarea și acneea. Potrivită pentru toate tipurile de piele.`,
  openGraph: {
    title: 'Carboxiterapia: Îngrijirea pielii fără injecții pentru fermitate și strălucire',
    description: `Carboxiterapia este o procedură modernă, fără injecții, care
                  îmbunătățește tonusul și fermitatea pielii, reduce ridurile,
                  pigmentarea și acneea. Potrivită pentru toate tipurile de piele.`,
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
    title: 'Carboxiterapia: Îngrijirea pielii fără injecții pentru fermitate și strălucire',
    description: `Carboxiterapia este o procedură modernă, fără injecții, care
                  îmbunătățește tonusul și fermitatea pielii, reduce ridurile,
                  pigmentarea și acneea. Potrivită pentru toate tipurile de piele.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
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
            <div
              style={{ fontSize: '8px' }}
              className="container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
            >
              <div>
                <h1>Carboxiterapia</h1>
                <h2>Ce este carboxiterapia?</h2>
                <h3>Beneficiile procedurii</h3>
                <h3>Cum se desfășoară procedura</h3>
              </div>

              <div>
                <h2>Indicații pentru carboxiterapie</h2>
                <h3>Pentru cine este potrivită carboxiterapia</h3>
                <h2>Rezultate și efecte</h2>
                <h3>Combaterea ridurilor și pigmentării</h3>
                <h3>Îmbunătățirea tonusului și fermității pielii</h3>
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

export default ServicePage5Ro;
