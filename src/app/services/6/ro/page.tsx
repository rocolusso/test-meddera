import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import pilling from '@/../public/assets/img/services/pilling.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Peeling: Tipuri și Beneficii pentru Pielea Ta',
  description: `Descoperă totul despre procedura de peeling: tipuri,
                  beneficii și cum ajută la îmbunătățirea stării pielii.
                  Abordare profesională pentru o piele sănătoasă și strălucitoare.`,
  openGraph: {
    title: 'Peeling: Tipuri și Beneficii pentru Pielea Ta',
    description: `Descoperă totul despre procedura de peeling: tipuri,
                  beneficii și cum ajută la îmbunătățirea stării pielii.
                  Abordare profesională pentru o piele sănătoasă și strălucitoare.`,
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
    title: 'Peeling: Tipuri și Beneficii pentru Pielea Ta',
    description: `Descoperă totul despre procedura de peeling: tipuri,
                  beneficii și cum ajută la îmbunătățirea stării pielii.
                  Abordare profesională pentru o piele sănătoasă și strălucitoare.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage6Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Peelingul</p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={pilling}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Peelingul este o procedură cosmetică menită să reînnoiască și să îmbunătățească
              starea pielii prin îndepărtarea celulelor moarte de pe suprafața acesteia. Există mai
              multe tipuri de peelinguri: chimic, mecanic, fiecare fiind potrivit pentru rezolvarea
              diverselor
              probleme, cum ar fi tenul problematic, porii dilatați, pigmentarea, ridurile fine și
              neregularitățile
              texturii. Procedura stimulează reînnoirea celulară, ceea ce ajută la
              îmbunătățirea culorii
              și tonusului
              pielii, făcând-o mai netedă și radiantă. Un peeling profesional,
              realizat ținând cont de
              tipul și
              starea pielii, nu doar că reîmprospătează aspectul acesteia, ci și
              reduce vizibilitatea
              semnelor de îmbătrânire.
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
                <h1>Peeling</h1>
                <h2>Ce este peelingul?</h2>
                <h2>Principalele tipuri de peeling</h2>
                <h2>Beneficiile peelingului profesional</h2>
              </div>

              <div>
                <h3>Peeling chimic</h3>
                <h3>Peeling mecanic</h3>
                <h3>Probleme ale pielii care pot fi rezolvate</h3>
                <h3>Cum îmbunătățește peelingul starea pielii?</h3>
                <h3>De ce este importantă o abordare profesională?</h3>
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

export default ServicePage6Ro;
