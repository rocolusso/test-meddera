import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import terapiyaProtivPigment from '@/../public/assets/img/services/terapiya-protiv-pigm.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Терапия против пигментации: Решение для ровного и сияющего тона кожи',
  description: `Узнайте, как терапия против пигментации помогает осветлить и устранить
                  пигментные пятна, возрастные изменения и солнечные повреждения.
                  Сделайте кожу ровной и сияющей!`,
  openGraph: {
    title: 'Терапия против пигментации: Решение для ровного и сияющего тона кожи',
    description: `Узнайте, как терапия против пигментации помогает осветлить и устранить
                  пигментные пятна, возрастные изменения и солнечные повреждения.
                  Сделайте кожу ровной и сияющей!`,
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
    title: 'Терапия против пигментации: Решение для ровного и сияющего тона кожи',
    description: `Узнайте, как терапия против пигментации помогает осветлить и устранить
                  пигментные пятна, возрастные изменения и солнечные повреждения.
                  Сделайте кожу ровной и сияющей!`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage9() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Терапия против пигментации</p>
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
              Терапия против пигментации — это косметологическая процедура, направленная
              на осветление и
              устранение пигментных пятен, гиперпигментации и неровности тона кожи.
              В ходе процедуры
              используются пилинги, специальные осветляющие средства, которые блокируют
              выработку меланина
              и
              способствуют его равномерному распределению в коже. Процедура подходит
              для лечения
              возрастных
              пятен, солнечных повреждений, а также поствоспалительной гиперпигментации.
              Регулярное
              проведение
              таких процедур помогает значительно улучшить цвет лица и сделать кожу
              более ровной и
              сияющей.
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
                <h1>Терапия против пигментации</h1>
                <h2>Что такое терапия против пигментации?</h2>
                <h3>Осветление пигментных пятен и неровностей тона</h3>
                <h2>Какие проблемы решает процедура?</h2>
                <h3>Возрастные пятна и солнечные повреждения</h3>
                <h3>Поствоспалительная гиперпигментация</h3>
                <h2>Как проходит процедура?</h2>
                <h3>Использование пилингов и осветляющих средств</h3>
                <h3>Блокировка выработки меланина</h3>
              </div>

              <div>
                <h2>Преимущества регулярных процедур</h2>
                <h3>Улучшение цвета лица</h3>
                <h3>Ровный и сияющий тон кожи</h3>
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

export default ServicePage9;
