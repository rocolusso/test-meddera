import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import terapiyaProtivPigment from '@/../public/assets/img/services/terapiya-protiv-pigm.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Terapie împotriva pigmentării: Soluția pentru un ton uniform și luminos al pielii',
  description: `Află cum terapia împotriva pigmentării ajută la iluminarea
                  și eliminarea petelor pigmentare, a semnelor de îmbătrânire și a
                  leziunilor solare. Obține o piele uniformă și strălucitoare!`,
  openGraph: {
    title: 'Terapie împotriva pigmentării: Soluția pentru un ton uniform și luminos al pielii',
    description: `Află cum terapia împotriva pigmentării ajută la iluminarea
                  și eliminarea petelor pigmentare, a semnelor de îmbătrânire și a
                  leziunilor solare. Obține o piele uniformă și strălucitoare!`,
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
    title: 'Terapie împotriva pigmentării: Soluția pentru un ton uniform și luminos al pielii',
    description: `Află cum terapia împotriva pigmentării ajută la iluminarea
                  și eliminarea petelor pigmentare, a semnelor de îmbătrânire și a
                  leziunilor solare. Obține o piele uniformă și strălucitoare!`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage9Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Terapie antipigmentară</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={terapiyaProtivPigment}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Terapie antipigmentară este o procedură cosmetologică destinată iluminării
              și eliminării petelor pigmentare, hiperpigmentației. În timpul procedurii,
              se utilizează peelinguri și produse speciale de iluminare,
              care blochează producția de melanina și contribuie la
              distribuirea uniformă a acesteia în piele. Procedura este
              potrivită pentru tratarea fotoîmbătrînirii, cronoîmbătrînrii,
              petelor de vârstă, a leziunilor cauzate de soare, precum și a hiperpigmentației
              post-inflamatorii. Realizarea regulată a acestor proceduri ajută la
              îmbunătățirea semnificativă a culorii tenului și la obținerea
              unei pielii mai netede și strălucitoare.
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
                <h1>Terapie împotriva pigmentării</h1>
                <h2>Ce este terapia împotriva pigmentării?</h2>
                <h3>Iluminarea petelor pigmentare și a neregularităților tonului pielii</h3>
                <h2>Ce probleme rezolvă această procedură?</h2>
                <h3>Pete de îmbătrânire și leziuni solare</h3>
                <h3>Hiperpigmentare post-inflamatorie</h3>
                <h2>Cum se desfășoară procedura?</h2>
                <h3>Utilizarea peelingurilor și a produselor de iluminare</h3>
                <h3>Blocarea producției de melanină</h3>
              </div>

              <div>
                <h2>Beneficiile procedurilor regulate</h2>
                <h3>Îmbunătățirea culorii pielii</h3>
                <h3>Un ton uniform și luminos</h3>
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

export default ServicePage9Ro;
