import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import dermapen from '@/../public/assets/img/services/dermapen.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Dermapen: Procedură cosmetică pentru întinerirea și îngrijirea pielii',
  description: `Află cum procedura Dermapen ajută la îmbunătățirea texturii pielii,
                   reducerea porilor, diminuarea ridurilor și eliminarea urmelor de acnee.
                   Întinerire eficientă fără perioadă lungă de recuperare.`,
  openGraph: {
    title: 'Dermapen: Procedură cosmetică pentru întinerirea și îngrijirea pielii',
    description: `Află cum procedura Dermapen ajută la îmbunătățirea texturii pielii,
                   reducerea porilor, diminuarea ridurilor și eliminarea urmelor de acnee.
                   Întinerire eficientă fără perioadă lungă de recuperare.`,
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
    title: 'Dermapen: Procedură cosmetică pentru întinerirea și îngrijirea pielii',
    description: `Află cum procedura Dermapen ajută la îmbunătățirea texturii pielii,
                   reducerea porilor, diminuarea ridurilor și eliminarea urmelor de acnee.
                   Întinerire eficientă fără perioadă lungă de recuperare.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage10Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Dermapen</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={dermapen}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Dermapen este o procedură cosmetologică bazată pe micro-needling,
              prin care, cu ajutorul unui
              dispozitiv cu multe ace mici, se creează daune microscopice la
              nivelul pielii. Acest lucru
              stimulează procesele naturale de regenerare și producția de colagen,
              ceea ce contribuie la
              îmbunătățirea texturii pielii, reducerea porilor, diminuarea
              ridurilor și combaterea
              post-acneei, cicatricilor și vergeturilor. Dermapen permite îmbunătățirea
              tonusului pielii,
              uniformizarea culorii acesteia și o face mai fermă. Procedura este
              sigură și eficientă, nu
              necesită o perioadă lungă de recuperare și este potrivită pentru
              toate tipurile de piele.
              Rezultatele devin vizibile după câteva ședințe.
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
                <h1>Dermapen</h1>
                <h2>Ce este procedura Dermapen?</h2>
                <h3>Principiile de bază ale procedurii</h3>
                <h3>Beneficiile utilizării Dermapen</h3>
                <h3>Ce probleme rezolvă Dermapen?</h3>
                <h3>Dermapen este potrivit pentru toate tipurile de piele?</h3>

                <h2>Rezultatele după procedura Dermapen</h2>
                <h3>Îmbunătățirea texturii pielii</h3>
                <h3>Reducerea porilor și eliminarea ridurilor</h3>
                <h3>Combaterea urmelor de acnee, cicatricilor și vergeturilor</h3>
              </div>

              <div>
                <h2>Avantajele procedurii Dermapen</h2>
                <h3>Siguranță și absența unei perioade lungi de recuperare</h3>
                <h3>Eficiență vizibilă după câteva ședințe</h3>
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

export default ServicePage10Ro;
