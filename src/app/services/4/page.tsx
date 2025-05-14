import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import massageLica from '@/../public/assets/img/services/massage_lica.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Массаж лица – Преимущества, техники и эффект для кожи',
  description: `Узнайте о пользе массажа лица: улучшение кровообращения,
                  тонуса кожи, профилактика возрастных изменений. Разные техники для ваших нужд.`,
  openGraph: {
    title: 'Массаж лица – Преимущества, техники и эффект для кожи',
    description: `Узнайте о пользе массажа лица: улучшение кровообращения,
                  тонуса кожи, профилактика возрастных изменений. Разные техники для ваших нужд.`,
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
    title: 'Массаж лица – Преимущества, техники и эффект для кожи',
    description: `Узнайте о пользе массажа лица: улучшение кровообращения,
                  тонуса кожи, профилактика возрастных изменений. Разные техники для ваших нужд.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage4() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Массаж лица</p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={massageLica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Массаж лица — процедура, которая помогает улучшить кровообращение,
              стимулирует выработку
              коллагена и эластина, а также улучшает тонус кожи. Благодаря мягкому
              воздействию на лицевые
              мышцы, массаж помогает снять напряжение, уменьшить отеки и повысить
              упругость кожи, делая её
              более подтянутой и сияющей. Существуют разные техники массажа, такие
              как классический,
              лимфодренажный, скульптурный, каждый из которых решает конкретные задачи
              и подбирается в
              зависимости от потребностей пациента. Регулярные сеансы массажа лица
              способствуют
              профилактике
              возрастных изменений и улучшают общий вид кожи. Профессиональный
              подход обеспечивает не
              только
              эстетический эффект, но и расслабление, что способствует общему
              улучшению самочувствия.
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

export default ServicePage4;
