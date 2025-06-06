import React from 'react';
// import IpChecker from '@/components/new-ui/IpChecker';
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
  alternates: {
    canonical: 'https://meddera.md/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
  },
  title: 'Дермапен в Бельцах – фракционная мезотерапия для омоложения кожи',
  description: 'Безболезненное омоложение кожи в Бельцах: устранение морщин, рубцов и пигментации с минимальным восстановлением. Запишитесь на процедуру Дермапен!',
  openGraph: {
    title: 'Дермапен в Бельцах – фракционная мезотерапия для омоложения кожи',
    description: 'Безболезненное омоложение кожи в Бельцах: устранение морщин, рубцов и пигментации с минимальным восстановлением. Запишитесь на процедуру Дермапен!',

    url: 'https://meddera.md/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/dermapen.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дермапен в Бельцах – фракционная мезотерапия для омоложения кожи',
    description: 'Безболезненное омоложение кожи в Бельцах: устранение морщин, рубцов и пигментации с минимальным восстановлением. Запишитесь на процедуру Дермапен!',

    images: ['https://meddera.md/assets/img/services/dermapen.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage10() {
  return (
    <>
      {/* <IpChecker /> */}
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

            <section>
              <h1>Дермапен в Бельцах – инновационное омоложение кожи</h1>
              <p>
                Эффективное решение для устранения морщин, рубцов и пигментации
                без хирургического вмешательства.
              </p>
            </section>
            <section>
              <h2>Преимущества процедуры Дермапен</h2>
              <ul>
                <li>Стимуляция выработки коллагена и эластина</li>
                <li>Улучшение текстуры и тонуса кожи</li>
                <li>Устранение мелких морщин и рубцов постакне</li>
                <li>Сужение пор и уменьшение пигментации</li>
                <li>Минимальный восстановительный период</li>
              </ul>
            </section>
            <section>
              <h2>Показания к процедуре</h2>
              <article>
                <h3>Морщины и признаки старения</h3>
                <p>
                  Дермапен эффективно разглаживает мелкие и средние морщины,
                  возвращая коже упругость и свежесть.
                </p>
              </article>
              <article>
                <h3>Рубцы и шрамы постакне</h3>
                <p>
                  Процедура способствует выравниванию поверхности кожи и
                  уменьшению видимости рубцов.
                </p>
              </article>
              <article>
                <h3>Пигментация и неровный тон кожи</h3>
                <p>
                  Дермапен помогает осветлить пигментные пятна и
                  выровнять цвет лица.
                </p>
              </article>
              <article>
                <h3>Расширенные поры и жирная кожа</h3>
                <p>
                  Сужает поры и нормализует работу сальных желез, улучшая
                  общее состояние кожи.
                </p>
              </article>
            </section>
            <section>
              <h2>Как проходит процедура</h2>
              <p>
                Во время сеанса специалист использует аппарат Дермапен с
                тончайшими иглами, которые создают
                микропроколы на поверхности кожи. Это стимулирует естественные процессы
                регенерации и улучшает
                проникновение активных веществ. Процедура занимает около 30–60 минут
                и не требует длительного
                восстановления.
              </p>
            </section>
            <section>
              <h2>Стоимость процедуры в Бельцах</h2>
              <ul>
                <li>Дермапен для лица – от 1000 MDL</li>
                <li>Дермапен для тела – от 1000 MDL</li>
                <li>Дермапен для кожи головы – от 1000 MDL</li>
              </ul>
              <p>
                Точная стоимость зависит от области обработки и индивидуальных
                особенностей кожи. Для получения
                консультации свяжитесь с нами по телефону или через форму
                обратной связи.
              </p>
            </section>
            <section>
              <h2>Почему выбирают нас</h2>
              <p>
                Наша клиника в Бельцах предлагает профессиональные
                косметологические услуги с использованием
                современного оборудования и сертифицированных препаратов.
                Опытные специалисты обеспечивают
                индивидуальный подход к каждому клиенту, гарантируя безопасность
                и высокое качество процедур.
              </p>
            </section>
            <section>
              <h2>Запишитесь на процедуру Дермапен</h2>
              <p>
                Позвоните нам по телефону
                <strong>+373 68 550 030</strong>
                или заполните форму обратной связи на
                сайте, чтобы записаться на консультацию и узнать больше о
                процедуре Дермапен.
              </p>
            </section>
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
