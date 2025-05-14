import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import massageLica from '@/../public/assets/img/services/massage_lica.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Masaj facial – Beneficii, tehnici și efecte asupra pielii',
  description: `Descoperă beneficiile masajului facial: îmbunătățirea circulației,
                  tonusului pielii, prevenirea semnelor îmbătrânirii. Tehnici variate pentru nevoile tale.`,
  openGraph: {
    title: 'Masaj facial – Beneficii, tehnici și efecte asupra pielii',
    description: `Descoperă beneficiile masajului facial: îmbunătățirea circulației,
                  tonusului pielii, prevenirea semnelor îmbătrânirii. Tehnici variate pentru nevoile tale.`,
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
    title: 'Masaj facial – Beneficii, tehnici și efecte asupra pielii',
    description: `Descoperă beneficiile masajului facial: îmbunătățirea circulației,
                  tonusului pielii, prevenirea semnelor îmbătrânirii. Tehnici variate pentru nevoile tale.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage4Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Masaj facial</p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={massageLica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Masajul facial este o procedură care ajută la îmbunătățirea circulației
              sanguine, stimulează
              producția de colagen și elastină și îmbunătățește tonusul pielii.
              Datorită acțiunii delicate
              asupra mușchilor feței, masajul ajută la reducerea tensiunii,
              diminuarea edemelor și
              creșterea
              elasticității pielii, făcând-o mai fermă și mai strălucitoare.
              Există diferite tehnici de
              masaj,
              cum ar fi masajul clasic, drenajul limfatic, masajul sculptural,
              fiecare dintre acestea
              abordând
              nevoi specifice și fiind selectate în funcție de necesitățile pacientului.
              Ședințele
              regulate de
              masaj facial contribuie la prevenirea schimbărilor legate de vârstă și
              îmbunătățesc aspectul
              general al pielii. O abordare profesională asigură nu doar un efect
              estetic, ci și relaxare,
              ceea ce contribuie la o stare generală de bine.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <div
              style={{ fontSize: '8px' }}
              className="container justify-center
                      mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
            >
              <div>
                <h1>Masaj facial</h1>
                <h2>Beneficiile masajului facial</h2>
                <h2>Tehnicile masajului facial</h2>
                <h2>Cum să alegi tehnica potrivită de masaj</h2>
              </div>

              <div>
                <h3>Îmbunătățirea circulației și a tonusului pielii</h3>
                <h3>Reducerea tensiunii și a edemelor</h3>
                <h3>Masaj facial clasic</h3>
                <h3>Masaj limfatic</h3>
                <h3>Masaj sculptural</h3>
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

export default ServicePage4Ro;
