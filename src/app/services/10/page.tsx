import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import dermapen from '@/../public/assets/img/services/dermapen.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Дермапен: Косметологическая процедура для омоложения и ухода за кожей',
  description: `Узнайте, как процедура Дермапен помогает улучшить текстуру кожи,
                   сократить поры, уменьшить морщины и избавиться от постакне.
                   Эффективное омоложение без длительного восстановления.`,
  openGraph: {
    title: 'Дермапен: Косметологическая процедура для омоложения и ухода за кожей',
    description: `Узнайте, как процедура Дермапен помогает улучшить текстуру кожи,
                   сократить поры, уменьшить морщины и избавиться от постакне.
                   Эффективное омоложение без длительного восстановления.`,
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
    title: 'Дермапен: Косметологическая процедура для омоложения и ухода за кожей',
    description: `Узнайте, как процедура Дермапен помогает улучшить текстуру кожи,
                   сократить поры, уменьшить морщины и избавиться от постакне.
                   Эффективное омоложение без длительного восстановления.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage10() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Дермапен</p>
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
              Дермапен — это косметологическая процедура, основанная на микронидлинге, при котором с
              помощью
              устройства с множеством мелких игл создаются микроскопические повреждения на коже. Это
              стимулирует естественные процессы регенерации и выработку коллагена, что способствует
              улучшению
              текстуры кожи, сокращению пор, уменьшению морщин и борьбе с постакне,
              рубцами и растяжками.
              Дермапен позволяет улучшить тонус кожи, выровнять её цвет и сделать более
              упругой. Процедура
              безопасна и эффективна, не требует длительного восстановления и подходит
              для всех типов
              кожи.
              Результаты становятся заметными уже после нескольких сеансов.
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
                <h1>Дермапен</h1>
                <h2>Что такое процедура Дермапен?</h2>
                <h3>Основные принципы процедуры</h3>
                <h3>Преимущества использования Дермапена</h3>
                <h3>Какие проблемы решает Дермапен?</h3>
                <h3>Подходит ли Дермапен для всех типов кожи?</h3>

                <h2>Результаты после процедуры Дермапен</h2>
                <h3>Улучшение текстуры кожи</h3>
                <h3>Сокращение пор и устранение морщин</h3>
                <h3>Борьба с постакне, рубцами и растяжками</h3>
              </div>

              <div>
                <h2>Преимущества процедуры Дермапен</h2>
                <h3>Безопасность и отсутствие длительного восстановления</h3>
                <h3>Эффективность уже после нескольких сеансов</h3>
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

export default ServicePage10;
