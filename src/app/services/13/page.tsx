import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import uvelichenieGub from '@/../public/assets/img/services/uvelicheniegub.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Увеличение губ: Естественный объем и выразительность с гиалуроновыми филлерами',
  description: `Увеличение губ с использованием гиалуроновой кислоты — это
                  безопасная процедура для создания естественных контуров,
                  улучшения симметрии и увлажнения губ. Результат заметен сразу!`,
  openGraph: {
    title: 'Увеличение губ: Естественный объем и выразительность с гиалуроновыми филлерами',
    description: `Увеличение губ с использованием гиалуроновой кислоты — это
                  безопасная процедура для создания естественных контуров,
                  улучшения симметрии и увлажнения губ. Результат заметен сразу!`,
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
    title: 'Увеличение губ: Естественный объем и выразительность с гиалуроновыми филлерами',
    description: `Увеличение губ с использованием гиалуроновой кислоты — это
                  безопасная процедура для создания естественных контуров,
                  улучшения симметрии и увлажнения губ. Результат заметен сразу!`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage13() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Увеличение губ</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={uvelichenieGub}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Увеличение губ — это косметологическая процедура, направленная
              на коррекцию формы и объема губ с
              использованием филлеров на основе гиалуроновой кислоты.
              Врач-дерматокосметолог подбирает нужное
              количество препарата, что позволяет добиться естественного и
              гармоничного результата. Процедура
              безопасна, и результат заметен сразу после выполнения. Процедура
              помогает создать естественные
              контуры, улучшить симметрию и увлажнение губ, а также устранить
              морщины вокруг них. Гиалуроновая
              кислота, вводимая в ткани губ, придает им объем, делает их более
              выразительными и сочными.
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
                <h1>Увеличение губ</h1>
                <h2>Что такое увеличение губ?</h2>
                <h3>Естественный объем и гармония формы</h3>
                <h3>Как работает гиалуроновая кислота?</h3>
                <h2>Преимущества процедуры</h2>
                <h3>Коррекция формы и устранение морщин</h3>
                <h3>Симметрия и увлажнение губ</h3>
              </div>

              <div>
                <h2>Почему это безопасно?</h2>
                <h3>Мгновенный результат без риска</h3>
                <h3>Профессиональный подход дерматокосметолога</h3>
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

export default ServicePage13;
