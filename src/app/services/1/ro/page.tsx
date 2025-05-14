import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import consultcosm from '@/../public/assets/img/services/consult-cosm.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Consultația la medicul dermatocosmetolog: Primul pas către o piele sănătoasă',
  description: `Obțineți o consultație profesională la medicul dermatocosmetolog.
                  Diagnosticarea pielii, selecția procedurilor, recomandări pentru îngrijire
                  și stil de viață pentru sănătatea și frumusețea pielii dvs.`,
  openGraph: {
    title: 'Consultația la medicul dermatocosmetolog: Primul pas către o piele sănătoasă',
    description: `Obțineți o consultație profesională la medicul dermatocosmetolog.
                  Diagnosticarea pielii, selecția procedurilor, recomandări pentru îngrijire
                  și stil de viață pentru sănătatea și frumusețea pielii dvs.`,
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
    title: 'Consultația la medicul dermatocosmetolog: Primul pas către o piele sănătoasă',
    description: `Obțineți o consultație profesională la medicul dermatocosmetolog.
                  Diagnosticarea pielii, selecția procedurilor, recomandări pentru îngrijire
                  și stil de viață pentru sănătatea și frumusețea pielii dvs.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage1Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto ">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">
              Consultația la medicul dermatocosmetolog
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              className={' '}
              src={consultcosm}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Consultația la medicul dermatocosmetolog este primul și importantul pas către o piele
              sănătoasă
              și frumoasă. În timpul consultației, medicul efectuează o examinare atentă a pielii,
              evaluează
              starea acesteia și stabilește nevoile individuale ale pacientului.
              Pe baza diagnosticului,
              specialistul recomandă proceduri, luând în considerare vârsta, tipul
              de piele și rezultatul
              dorit. Consultația include, de asemenea, recomandări pentru alegerea
              produselor cosmetice și
              pentru un stil de viață care ajută la menținerea sănătății pielii pe
              termen lung. Abordarea
              profesională a dermatocosmetologului permite prevenirea sau tratarea
              problemelor precum
              acneea,
              pigmentarea, modificările legate de vârstă și altele.
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
                <h1>Consultația la medicul dermatocosmetolog</h1>
                <h2>De ce este important să consultați un medic dermatocosmetolog?</h2>
                <h3>Examinare profesională și diagnosticarea pielii</h3>
                <h3>Selecția individualizată a procedurilor</h3>
                <h3>Recomandări pentru îngrijire și stil de viață</h3>
              </div>

              <div>
                <h2>Ce probleme poate rezolva medicul dermatocosmetolog?</h2>
                <h3>Tratamentul acneei</h3>
                <h3>Corectarea pigmentării</h3>
                <h3>Eliminarea semnelor îmbătrânirii</h3>
                <h3>Alte probleme dermatologice</h3>
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

export default ServicePage1Ro;
