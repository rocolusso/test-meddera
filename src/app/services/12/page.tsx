import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import mezovolos from '@/../public/assets/img/services/mezovolos.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Мезотерапия для волос: восстановление густоты и здоровья',
  description: `Узнайте о процедуре мезотерапии для волос — эффективное решение проблем
                  выпадения, истончения и других нарушений роста. Стимуляция фолликулов и
                  улучшение микроциркуляции кожи головы.`,
  openGraph: {
    title: 'Мезотерапия для волос: восстановление густоты и здоровья',
    description: `Узнайте о процедуре мезотерапии для волос — эффективное решение проблем
                  выпадения, истончения и других нарушений роста. Стимуляция фолликулов и
                  улучшение микроциркуляции кожи головы.`,
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
    title: 'Мезотерапия для волос: восстановление густоты и здоровья',
    description: `Узнайте о процедуре мезотерапии для волос — эффективное решение проблем
                  выпадения, истончения и других нарушений роста. Стимуляция фолликулов и
                  улучшение микроциркуляции кожи головы.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage12() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Мезотерапия для волос</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={mezovolos}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Мезотерапия для волос — это процедура, направленная на улучшение
              состояния волос и кожи
              головы.
              В ходе процедуры под кожу вводятся специальные коктейли, содержащие
              витамины, минералы,
              аминокислоты и другие активные вещества, которые стимулируют рост
              волос, укрепляют фолликулы
              и
              улучшают микроциркуляцию в коже головы. Мезотерапия эффективно
              борется с такими проблемами,
              как
              выпадение волос, истончение волос, себорейный дерматит и нарушения
              роста. Процедура помогает
              восстановить здоровье волос, улучшить их густоту и текстуру.
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
                <h1>Мезотерапия для волос</h1>
                <h2>Что такое мезотерапия для волос?</h2>
                <h2>Преимущества процедуры мезотерапии</h2>
                <h3>Стимуляция роста волос</h3>
                <h3>Укрепление волосяных фолликулов</h3>
                <h3>Борьба с выпадением и истончением</h3>

              </div>

              <div>
                <h2>Какие проблемы решает мезотерапия?</h2>
                <h3>Выпадение волос</h3>
                <h3>Истончение волос</h3>
                <h3>Себорейный дерматит</h3>
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

export default ServicePage12;
