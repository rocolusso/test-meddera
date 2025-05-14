import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import maskaLica from '@/../public/assets/img/services/maska_lica.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Альгинатная маска – Увлажнение, лифтинг и сияние кожи',
  description: `Узнайте, как альгинатная маска из бурых морских водорослей
                  помогает глубоко увлажнить, подтянуть и успокоить кожу.
                  Подходит для любого типа кожи и улучшает её текстуру, тон и упругость.`,
  openGraph: {
    title: 'Альгинатная маска – Увлажнение, лифтинг и сияние кожи',
    description: `Узнайте, как альгинатная маска из бурых морских водорослей
                  помогает глубоко увлажнить, подтянуть и успокоить кожу.
                  Подходит для любого типа кожи и улучшает её текстуру, тон и упругость.`,
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
    title: 'Альгинатная маска – Увлажнение, лифтинг и сияние кожи',
    description: `Узнайте, как альгинатная маска из бурых морских водорослей
                  помогает глубоко увлажнить, подтянуть и успокоить кожу.
                  Подходит для любого типа кожи и улучшает её текстуру, тон и упругость.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage7() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Альгинатная маска</p>
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
              Альгинатная маска — эффективное средство ухода за кожей, изготовленное на
              основе альгинатов,
              которые получают из бурых морских водорослей. Благодаря высокому
              содержанию минералов и
              микроэлементов альгинатные маски обладают мощным увлажняющим, подтягивающим
              и успокаивающим
              действием. Маска наносится на лицо в виде густой смеси и застывает, образуя
              плотный слой,
              который помогает активным веществам глубже проникать в кожу. В зависимости
              от состава,
              альгинатные маски могут дополнительно осветлять пигментацию, улучшать
              текстуру кожи и
              способствовать устранению воспалений. После процедуры кожа выглядит свежей,
              увлажненной и
              упругой, а её тон становится более ровным и сияющим. Альгинатные маски идеально
              подходят для
              любого типа кожи и часто используются в завершении профессиональных уходов,
              усиливая эффект
              от
              других процедур.
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
                <h1>Альгинатная маска</h1>
                <h2>Что такое альгинатная маска?</h2>
                <h2>Преимущества альгинатной маски</h2>
                <h3>Увлажнение и питание кожи</h3>
              </div>

              <div>
                <h3>Лифтинг-эффект</h3>
                <h3>Устранение воспалений и улучшение текстуры</h3>
                <h2>Кому подходит альгинатная маска?</h2>
                <h2>Как использовать альгинатную маску?</h2>
                <h2>Результаты после применения</h2>
              </div>

            </div>
          </div>
        </VisuallyHidden>

      </main>

      <ContactsDynamicWrapperRu />

      <ServicesNew locale="ru" />

      <FooterNew locale="ru" />

    </>
  );
}

export default ServicePage7;
