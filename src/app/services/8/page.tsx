import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import maskaLica from '@/../public/assets/img/services/anti-akne.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Терапия анти-акне: Лечение воспалений кожи и профилактика высыпаний',
  description: `Терапия анти-акне — это индивидуальная процедура для лечения акне,
                  нормализации работы сальных желез и предотвращения постакне.
                  Узнайте больше о методах очищения, пилинга и увлажнения.`,
  openGraph: {
    title: 'Терапия анти-акне: Лечение воспалений кожи и профилактика высыпаний',
    description: `Терапия анти-акне — это индивидуальная процедура для лечения акне,
                  нормализации работы сальных желез и предотвращения постакне.
                  Узнайте больше о методах очищения, пилинга и увлажнения.`,
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
    title: 'Терапия анти-акне: Лечение воспалений кожи и профилактика высыпаний',
    description: `Терапия анти-акне — это индивидуальная процедура для лечения акне,
                  нормализации работы сальных желез и предотвращения постакне.
                  Узнайте больше о методах очищения, пилинга и увлажнения.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage8() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Терапия анти-акне</p>
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
              Терапия анти-акне – это процедура направленная на лечение воспалений
              кожи и
              профилактику
              новых
              высыпаний. В процессе используются методы очищения, пилинга, антибактериальной
              обработки и
              увлажнения, что помогает нормализовать работу сальных желез и устранить
              загрязнения в порах.
              Важно, что процедура подбирается индивидуально в зависимости от типа кожи
              и стадии
              заболевания.
              Регулярные сеансы помогают не только устранить воспаления, но и
              предотвратить развитие
              постакне
              и рубцевание.
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
                <h1>Терапия анти-акне</h1>
                <h2>Что такое терапия анти-акне?</h2>
                <h3>Основные этапы процедуры</h3>
                <ul>
                  <li>Очищение кожи</li>
                  <li>Пилинг</li>
                  <li>Антибактериальная обработка</li>
                  <li>Увлажнение</li>
                </ul>
              </div>

              <div>
                <h2>Кому подходит процедура?</h2>
                <h3>Индивидуальный подход к каждому клиенту</h3>
                <h2>Преимущества регулярных сеансов</h2>
                <h3>Профилактика постакне и рубцевания</h3>
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

export default ServicePage8;
