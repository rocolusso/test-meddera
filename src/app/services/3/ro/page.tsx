import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import chistkaLica from '@/../public/assets/img/services/chistka_lica.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Curățarea Feței: Tipuri și Beneficii ale Procedurii Cosmetice',
  description: `Curățarea feței — o procedură pentru curățarea profundă a
                  pielii și îmbunătățirea texturii și culorii acesteia.
                  Descoperă curățarea mecanică, ultrasonică și combinată pentru o piele perfectă.`,
  openGraph: {
    title: 'Curățarea Feței: Tipuri și Beneficii ale Procedurii Cosmetice',
    description: `Curățarea feței — o procedură pentru curățarea profundă a
                  pielii și îmbunătățirea texturii și culorii acesteia.
                  Descoperă curățarea mecanică, ultrasonică și combinată pentru o piele perfectă.`,
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
    title: 'Curățarea Feței: Tipuri și Beneficii ale Procedurii Cosmetice',
    description: `Curățarea feței — o procedură pentru curățarea profundă a
                  pielii și îmbunătățirea texturii și culorii acesteia.
                  Descoperă curățarea mecanică, ultrasonică și combinată pentru o piele perfectă.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage3Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <h1 className="text-[1.5rem] sm:text-[3rem] sm:text-center">Curățirea feței</h1>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={chistkaLica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Curățirea feței este o procedură cosmetică menită să ofere o
              curățare profundă a pielii și
              să
              îmbunătățească textura și culoarea acesteia. Procedura ajută la
              eliminarea impurităților,
              excesului de sebum și a celulelor moarte, contribuind astfel la
              micșorarea porilor și la
              reducerea riscului de inflamații.

              Există mai multe tipuri de curățare, inclusiv mecanică, cu ultrasunete
              și combinată,
              alegerea
              acestora depinzând de starea pielii și de nevoile sale. După o
              consultație, medicul
              selectează
              metoda optimă și efectuează procedura, luând în considerare toate
              particularitățile pielii
              pacientului.
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
                <h1>Curățarea feței</h1>
                <h2>Ce este curățarea feței?</h2>
                <h2>Beneficiile procedurii</h2>
                <h2>Tipuri de curățare a feței</h2>
              </div>

              <div>
                <h3>Curățarea mecanică</h3>
                <h3>Curățarea ultrasonică</h3>
                <h3>Curățarea combinată</h3>
              </div>

              <div>
                <h2>Cum să alegi metoda potrivită?</h2>
                <h2>Etapele procedurii</h2>
                <h2>Recomandări pentru îngrijirea pielii după curățare</h2>
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

export default ServicePage3Ro;
