import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import pilling from '@/../public/assets/img/services/pilling.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Пилинг: Виды и Преимущества для Вашей Кожи',
  description: `Узнайте всё о процедуре пилинга: виды, преимущества, и как она
                  помогает улучшить состояние кожи. Профессиональный
                  подход для сияющей и здоровой кожи.`,
  openGraph: {
    title: 'Пилинг: Виды и Преимущества для Вашей Кожи',
    description: `Узнайте всё о процедуре пилинга: виды, преимущества, и как она
                  помогает улучшить состояние кожи. Профессиональный
                  подход для сияющей и здоровой кожи.`,
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
    title: 'Пилинг: Виды и Преимущества для Вашей Кожи',
    description: `Узнайте всё о процедуре пилинга: виды, преимущества, и как она
                  помогает улучшить состояние кожи. Профессиональный
                  подход для сияющей и здоровой кожи.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage6() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Пилинг</p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={pilling}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Пилинг — косметологическая процедура, направленная на обновление и улучшение
              состояния кожи
              путем удаления ороговевших клеток с её поверхности. Существует несколько
              видов пилингов:
              химический, механический, , каждый из которых подходит для решения
              различных проблем, таких
              как
              тусклый цвет лица, расширенные поры, пигментация, мелкие морщины и
              неровности текстуры.
              Процедура стимулирует клеточное обновление, что помогает улучшить
              цвет и тонус кожи, делая
              её
              более гладкой и сияющей. Профессиональный пилинг, выполненный с
              учетом типа и состояния
              кожи,
              позволяет не только освежить её, но и снизить выраженность
              возрастных изменений.
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
                <h1>Пилинг</h1>
                <h2>Что такое пилинг?</h2>
                <h2>Основные виды пилинга</h2>
                <h2>Преимущества профессионального пилинга</h2>
              </div>

              <div>
                <h3>Химический пилинг</h3>
                <h3>Механический пилинг</h3>
                <h3>Решаемые проблемы кожи</h3>
                <h3>Как пилинг улучшает состояние кожи?</h3>
                <h3>Почему важен профессиональный подход?</h3>
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

export default ServicePage6;
