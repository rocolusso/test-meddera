import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import maskaLica from '@/../public/assets/img/services/anti-akne.png';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Terapia anti-acnee: Tratarea inflamațiilor pielii și prevenirea erupțiilor',
  description: `Terapia anti-acnee este o procedură individuală pentru tratarea acneei,
                  normalizarea funcționării glandelor sebacee și prevenirea post-acneei.
                  Află mai multe despre metodele de curățare, peeling și hidratare.`,
  openGraph: {
    title: 'Terapia anti-acnee: Tratarea inflamațiilor pielii și prevenirea erupțiilor',
    description: `Terapia anti-acnee este o procedură individuală pentru tratarea acneei,
                  normalizarea funcționării glandelor sebacee și prevenirea post-acneei.
                  Află mai multe despre metodele de curățare, peeling și hidratare.`,
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
    title: 'Terapia anti-acnee: Tratarea inflamațiilor pielii și prevenirea erupțiilor',
    description: `Terapia anti-acnee este o procedură individuală pentru tratarea acneei,
                  normalizarea funcționării glandelor sebacee și prevenirea post-acneei.
                  Află mai multe despre metodele de curățare, peeling și hidratare.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage8Ro() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Terapia anti-acnee</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={maskaLica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Terapia anti-acnee este o procedură destinată tratării inflamațiilor
              pielii și prevenției
              apariției de noi erupții. În cadrul procesului se utilizează metode
              de curățare, peeling,
              tratamente antibacteriene și hidratare, care ajută la normalizarea
              activității glandelor
              sebacee
              și la eliminarea impurităților din pori. Este important de menționat
              că procedura este
              aleasă
              individual, în funcție de tipul pielii și stadiul afecțiunii. Ședințele
              regulate ajută nu
              doar
              la eliminarea inflamațiilor, dar și la prevenirea dezvoltării post-acneei
              și a cicatrizării.
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
                <h1>Terapia anti-acnee</h1>
                <h2>Ce este terapia anti-acnee?</h2>
                <h3>Etapele principale ale procedurii</h3>
                <ul>
                  <li>Curățarea pielii</li>
                  <li>Peeling</li>
                  <li>Tratament antibacterian</li>
                  <li>Hidratare</li>
                </ul>
              </div>

              <div>
                <h2>Cui i se potrivește procedura?</h2>
                <h3>Abordare individuală pentru fiecare client</h3>
                <h2>Beneficiile ședințelor regulate</h2>
                <h3>Prevenirea post-acneei și cicatricilor</h3>
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

export default ServicePage8Ro;
