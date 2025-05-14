import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import karboksiterapiya from '@/../public/assets/img/services/karbiksiterapiya.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Карбокситерапия: Уход за кожей без инъекций для упругости и сияния',
  description: `Карбокситерапия — современная процедура без инъекций,
                  которая улучшает тонус и упругость кожи, уменьшает морщины,
                  пигментацию и акне. Подходит для всех типов кожи.`,
  openGraph: {
    title: 'Карбокситерапия: Уход за кожей без инъекций для упругости и сияния',
    description: `Карбокситерапия — современная процедура без инъекций,
                  которая улучшает тонус и упругость кожи, уменьшает морщины,
                  пигментацию и акне. Подходит для всех типов кожи.`,
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
    title: 'Карбокситерапия: Уход за кожей без инъекций для упругости и сияния',
    description: `Карбокситерапия — современная процедура без инъекций,
                  которая улучшает тонус и упругость кожи, уменьшает морщины,
                  пигментацию и акне. Подходит для всех типов кожи.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage5() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Карбокситерапия</p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={karboksiterapiya}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Карбокситерапия — это процедура, направленная на улучшение состояния
              кожи с помощью
              насыщения её
              углекислым газом, без инъекций и нарушений целостности кожи. Во время
              процедуры на лицо
              наносится специальный гель, который активизирует процессы микроциркуляции
              и стимулирует
              приток
              кислорода к клеткам. Это улучшает тонус кожи, повышает её упругость,
              уменьшает выраженность
              морщин и пигментации, а также помогает в борьбе с акне и постакне.
              Карбокситерапия подходит
              для
              всех типов кожи и может быть использована как самостоятельная процедура
              или в сочетании с
              другими уходами.
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
                <h1>Массаж лица</h1>
                <h2>Преимущества массажа лица</h2>
                <h2>Техники массажа лица</h2>
                <h2>Как выбрать подходящую технику массажа</h2>
              </div>

              <div>
                <h3>Улучшение кровообращения и тонуса кожи</h3>
                <h3>Снятие напряжения и уменьшение отеков</h3>
                <h3>Классический массаж лица</h3>
                <h3>Лимфодренажный массаж</h3>
                <h3>Скульптурный массаж</h3>
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

export default ServicePage5;
