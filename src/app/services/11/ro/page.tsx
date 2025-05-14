import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import mezolica from '@/../public/assets/img/services/mezolica.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Mezoterapie facială: Reîntinerire și îmbunătățirea aspectului',
  description: `Descoperă totul despre procedura de mezoterapie facială!
                  Introducerea substanțelor active în straturile profunde ale pielii ajută
                  la eliminarea uscăciunii, ridurilor, pigmentării și redă pielii
                  elasticitatea, prospețimea și strălucirea.`,
  openGraph: {
    title: 'Mezoterapie facială: Reîntinerire și îmbunătățirea aspectului',
    description: `Descoperă totul despre procedura de mezoterapie facială!
                  Introducerea substanțelor active în straturile profunde ale pielii ajută
                  la eliminarea uscăciunii, ridurilor, pigmentării și redă pielii
                  elasticitatea, prospețimea și strălucirea.`,
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
    title: 'Mezoterapie facială: Reîntinerire și îmbunătățirea aspectului',
    description: `Descoperă totul despre procedura de mezoterapie facială!
                  Introducerea substanțelor active în straturile profunde ale pielii ajută
                  la eliminarea uscăciunii, ridurilor, pigmentării și redă pielii
                  elasticitatea, prospețimea și strălucirea.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage11Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Mezoterapia facială</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={mezolica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Mezoterapia facială este o procedură cosmetică prin care se introduc
              în straturile adânci ale
              pielii cocktailuri de vitamine, aminoacizi, acid hialuronic și alte
              substanțe active cu ajutorul
              unor ace foarte fine. Această tehnică ajută la rezolvarea multor probleme, precum
              uscăciunea,
              culoarea ternă a tenului, pierderea elasticității, ridurile și
              pigmentația. Mezoterapia
              stimulează procesele metabolice, îmbunătățește microcirculația și hidratarea pielii,
              restabilește structura și tonusul acesteia. Procedura nu necesită o perioadă lungă de
              recuperare, iar rezultatele se observă după câteva ședințe, oferind pielii un aspect
              proaspăt și
              strălucitor. Mezoterapia este potrivită pentru toate tipurile de
              piele și este eficientă
              pentru
              reîntinerire și îmbunătățirea aspectului exterior.
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
                <h1>Mezoterapie facială</h1>
                <h2>Ce este mezoterapia facială?</h2>
                <h3>Principalele componente ale cocktailurilor de mezoterapie</h3>
                <h3>Beneficiile mezoterapiei</h3>
                <h2>Ce probleme rezolvă mezoterapia?</h2>
                <h3>Uscăciunea și culoarea ternă a pielii</h3>

                <h3>Pierderea fermității și apariția ridurilor</h3>
                <h3>Pigmentarea și refacerea structurii pielii</h3>
              </div>

              <div>
                <h2>Eficiența și rezultatele procedurii</h2>
                <h3>Când devine vizibil efectul?</h3>
                <h3>Cui i se potrivește mezoterapia facială?</h3>
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

export default ServicePage11Ro;
