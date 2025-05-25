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
  alternates: {
    canonical: 'https://meddera.md/services/3',
  },
  title: 'Чистка лица в Бельцах – Профессиональные косметологические услуги | Meddera',
  description: 'Профессиональная чистка лица в Бельцах от опытного дерматолога-косметолога Екатерины Пынтя. Ультразвуковая, механическая, комбинированная и атравматичная чистка лица. Запишитесь на консультацию в Meddera.',
  openGraph: {
    title: 'Чистка лица в Бельцах – Профессиональные косметологические услуги | Meddera',
    description: 'Профессиональная чистка лица в Бельцах от опытного дерматолога-косметолога Екатерины Пынтя. Ультразвуковая, механическая, комбинированная и атравматичная чистка лица. Запишитесь на консультацию в Meddera.',

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
    title: 'Чистка лица в Бельцах – Профессиональные косметологические услуги | Meddera',
    description: 'Профессиональная чистка лица в Бельцах от опытного дерматолога-косметолога Екатерины Пынтя. Ультразвуковая, механическая, комбинированная и атравматичная чистка лица. Запишитесь на консультацию в Meddera.',

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

            <section>
              <h1>Профессиональная чистка лица в Бельцах</h1>
              <p>
                Очищение и оздоровление кожи от опытного дерматолога-косметолога
                Екатерины Пынти в клинике Meddera
              </p>
            </section>

            <section>
              <h2>Виды чистки лица, предлагаемые в Meddera</h2>
              <ul>
                <li>
                  <strong>Ультразвуковая чистка лица</strong>
                  : Безболезненное удаление загрязнений и ороговевших
                  клеток с помощью ультразвука. Подходит для всех типов кожи.
                </li>
                <li>
                  <strong>Механическая чистка лица</strong>
                  : Глубокое очищение пор вручную. Эффективна при акне и
                  комедонах.
                </li>
                <li>
                  <strong>Комбинированная чистка лица</strong>
                  : Сочетание ультразвуковой и механической чистки для
                  максимального эффекта.
                </li>
                <li>
                  <strong>Атравматичная чистка лица</strong>
                  : Мягкое очищение с использованием профессиональной
                  косметики, без травмирования кожи.
                </li>
              </ul>
            </section>
            <section>
              <h2>Преимущества чистки лица в Meddera</h2>
              <article>
                <h3>Индивидуальный подход</h3>
                <p>
                  Каждому клиенту подбирается оптимальный метод чистки
                  лица в зависимости от типа кожи и существующих
                  проблем.
                </p>
              </article>
              <article>
                <h3>Опытный специалист</h3>
                <p>
                  Екатерина Пынтя – дерматолог-косметолог с
                  более чем 11-летним опытом работы в области дерматологии и
                  косметологии.
                </p>
              </article>
              <article>
                <h3>Современное оборудование</h3>
                <p>
                  Клиника оснащена новейшим оборудованием,
                  обеспечивающим безопасность и эффективность процедур.
                </p>
              </article>
              <article>
                <h3>Качественная косметика</h3>
                <p>
                  Используем только проверенные и сертифицированные
                  косметические средства от ведущих
                  производителей.
                </p>
              </article>
            </section>
            <section>
              <h2>Показания и противопоказания к процедуре</h2>
              <p>
                <strong>Показания:</strong>
                {' '}
                жирная и проблемная кожа, акне, комедоны, расширенные поры, тусклый цвет
                лица.
              </p>
              <p>
                <strong>Противопоказания:</strong>
                {' '}
                острые воспалительные процессы на коже, герпес в активной стадии,
                аллергические реакции на компоненты используемых средств.
              </p>
            </section>
            <section>
              <h2>Как проходит процедура чистки лица</h2>
              <ul>
                <li>Консультация и диагностика состояния кожи.</li>
                <li>Подбор оптимального метода чистки.</li>
                <li>Подготовка кожи к процедуре.</li>
                <li>Проведение чистки лица выбранным методом.</li>
                <li>Нанесение успокаивающей маски и завершающий уход.</li>
              </ul>
            </section>
            <section>
              <h2>Запишитесь на чистку лица в Бельцах</h2>
              <p>
                Позвольте вашей коже засиять здоровьем и красотой.
                Запишитесь на процедуру чистки лица в клинике
                Meddera у Екатерины Пынтя уже сегодня.
              </p>
              <p>
                <strong>Контактный телефон:</strong>
                {' '}
                +373 68 550 030
              </p>
              <p>
                <strong>Адрес:</strong>
                {' '}
                г. Бельцы, ул. Штефан Чел Маре, 13
              </p>
              <p><a href="https://meddera.md/services/3">Подробнее о услуге на нашем сайте</a></p>
            </section>

          </div>
        </VisuallyHidden>

        <ContactsDynamicWrapperRu />

        <ServicesNew locale="ru" />

      </main>

      <FooterNew locale="ru" />

    </>
  );
}

export default ServicePage3;
