import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import mezolica from '@/../public/assets/img/services/mezolica.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Мезотерапия лица: Омоложение и улучшение внешнего вида',
  description: `Узнайте всё о процедуре мезотерапии лица! Введение активных веществ
                  в глубокие слои кожи помогает устранить сухость, морщины, пигментацию
                  и вернуть коже упругость, свежесть и сияние.`,
  openGraph: {
    title: 'Мезотерапия лица: Омоложение и улучшение внешнего вида',
    description: `Узнайте всё о процедуре мезотерапии лица! Введение активных веществ
                  в глубокие слои кожи помогает устранить сухость, морщины, пигментацию
                  и вернуть коже упругость, свежесть и сияние.`,
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
    title: 'Мезотерапия лица: Омоложение и улучшение внешнего вида',
    description: `Узнайте всё о процедуре мезотерапии лица! Введение активных веществ
                  в глубокие слои кожи помогает устранить сухость, морщины, пигментацию
                  и вернуть коже упругость, свежесть и сияние.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage11() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Мезотерапия лица</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={mezolica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Мезотерапия лица —косметологическая процедура, при которой в глубокие
              слои кожи вводятся
              коктейли из витаминов, аминокислот, гиалуроновой кислоты и других
              активных веществ с помощью
              тончайших игл. Эта техника помогает решить множество проблем, таких
              как сухость, тусклый
              цвет
              лица, потеря упругости, морщины и пигментация. Мезотерапия стимулирует
              обменные процессы,
              улучшает микроциркуляцию и увлажнение кожи, восстанавливает её структуру
              и тонус. Процедура
              не
              требует длительного восстановления, а результаты проявляются через несколько сеансов,
              придавая
              коже свежий и сияющий вид. Мезотерапия подходит для всех типов кожи и эффективна для
              омоложения
              и улучшения внешнего вида.
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
                <h1>Мезотерапия лица</h1>
                <h2>Что такое мезотерапия лица?</h2>
                <h3>Основные компоненты мезотерапевтических коктейлей</h3>
                <h3>Преимущества мезотерапии</h3>
                <h2>Какие проблемы решает мезотерапия?</h2>
                <h3>Сухость и тусклый цвет лица</h3>

                <h3>Потеря упругости и появление морщин</h3>
                <h3>Пигментация и восстановление структуры кожи</h3>
              </div>

              <div>
                <h2>Эффективность и результат процедуры</h2>
                <h3>Когда заметен эффект?</h3>
                <h3>Кому подходит мезотерапия лица?</h3>
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

export default ServicePage11;
