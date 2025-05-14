import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import consultderm from '@/../public/assets/img/services/consult-derm.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Consultație dermatologică: Abordare complexă pentru sănătatea pielii',
  description: `Consultație dermatologică profesionistă pentru
                  diagnosticarea și tratamentul afecțiunilor pielii.
                  Recomandări individuale, analize și plan de tratament pentru sănătatea pielii tale.`,
  openGraph: {
    title: 'Consultație dermatologică: Abordare complexă pentru sănătatea pielii',
    description: `Consultație dermatologică profesionistă pentru
                  diagnosticarea și tratamentul afecțiunilor pielii.
                  Recomandări individuale, analize și plan de tratament pentru sănătatea pielii tale.`,
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
    title: 'Consultație dermatologică: Abordare complexă pentru sănătatea pielii',
    description: `Consultație dermatologică profesionistă pentru
                  diagnosticarea și tratamentul afecțiunilor pielii.
                  Recomandări individuale, analize și plan de tratament pentru sănătatea pielii tale.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage2Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <h1 className="text-[1.5rem] sm:text-[3rem] sm:text-center bold">
              Consultația dermatologică
            </h1>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={consultderm}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Consultația dermatologică este o vizită specializată la medicul dermatolog,
              în cadrul căreia
              se
              realizează o evaluare completă a stării pielii. În timpul consultației,
              medicul analizează
              simptomele care îl îngrijorează pe pacient, identifică posibilele cauze
              ale afecțiunilor
              cutanate și elaborează un plan de tratament individualizat. Dermatologul
              poate recomanda
              analize
              necesare și investigații instrumentale pentru un diagnostic precis.
              Consultația include
              recomandări pentru îngrijirea pielii și stilul de viață, care ajută
              la prevenirea
              dezvoltării
              afecțiunilor cutanate. Abordarea profesională permite depistarea și
              tratarea la timp a unor
              probleme precum eczema, psoriazisul, acneea, infecțiile fungice și
              reacțiile alergice,
              menținând
              sănătatea pielii pe termen lung.
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
                <h1>Consultație dermatologică</h1>
                <h2>Ce include o consultație dermatologică?</h2>
                <h2>Beneficiile unei abordări profesionale pentru îngrijirea pielii</h2>
                <h2>Probleme frecvente ale pielii și tratamentul acestora</h2>
              </div>

              <div>
                <h3>Evaluarea stării pielii</h3>
                <h3>Prescrierea analizelor și investigațiilor instrumentale</h3>
                <h3>Elaborarea unui plan individual de tratament</h3>
                <h3>Recomandări pentru îngrijirea pielii și stilul de viață</h3>
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

export default ServicePage2Ro;
