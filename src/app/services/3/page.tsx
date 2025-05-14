import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import chistkaLica from '@/../public/assets/img/services/chistka_lica.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Чистка лица: Виды и Польза Косметологической Процедуры',
  description: `Чистка лица — глубокое очищение кожи, улучшение её текстуры и цвета.
                  Узнайте о механической, ультразвуковой и комбинированной чистке для идеальной кожи.`,
  openGraph: {
    title: 'Чистка лица: Виды и Польза Косметологической Процедуры',
    description: `Чистка лица — глубокое очищение кожи, улучшение её текстуры и цвета.
                  Узнайте о механической, ультразвуковой и комбинированной чистке для идеальной кожи.`,
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
    title: 'Чистка лица: Виды и Польза Косметологической Процедуры',
    description: `Чистка лица — глубокое очищение кожи, улучшение её текстуры и цвета.
                  Узнайте о механической, ультразвуковой и комбинированной чистке для идеальной кожи.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage3() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Чистка лица</p>
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
              Чистка лица — косметологическая процедура, направленная на глубокое очищение кожи и
              улучшение её
              текстуры и цвета. Процедура помогает удалить загрязнения, избыток кожного
              сала и ороговевшие
              клетки, что способствует сокращению пор и снижению риска воспалений.
              Существует несколько
              видов
              чистки, включая механическую, ультразвуковую, комбинированную, выбор которых
              зависит от
              состояния кожи и её потребностей. После консультации врач подбирает
              оптимальный метод и
              выполняет процедуру с учетом всех особенностей кожи пациента.
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
                <h1>Чистка лица</h1>
                <h2>Что такое чистка лица?</h2>
                <h2>Преимущества процедуры</h2>
                <h2>Виды чистки лица</h2>
              </div>

              <div>
                <h3>Механическая чистка</h3>
                <h3>Ультразвуковая чистка</h3>
                <h3>Комбинированная чистка</h3>
              </div>

              <div>
                <h2>Как выбрать подходящий метод?</h2>
                <h2>Этапы проведения процедуры</h2>
                <h2>Рекомендации по уходу после чистки</h2>
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

export default ServicePage3;
