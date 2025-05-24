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
  alternates: {
    canonical: 'https://meddera.md/services/6',
  },
  title: 'Пилинг в Бельцах – Косметологические услуги в Молдове | Meddera',
  description: 'Профессиональный пилинг в Бельцах. Эффективные процедуры для обновления кожи лица и тела. Запишитесь на консультацию в Meddera.',
  openGraph: {
    title: 'Пилинг в Бельцах – Косметологические услуги в Молдове | Meddera',
    description: 'Профессиональный пилинг в Бельцах. Эффективные процедуры для обновления кожи лица и тела. Запишитесь на консультацию в Meddera.',

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
    title: 'Пилинг в Бельцах – Косметологические услуги в Молдове | Meddera',
    description: 'Профессиональный пилинг в Бельцах. Эффективные процедуры для обновления кожи лица и тела. Запишитесь на консультацию в Meddera.',

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
            <section>
              <h1>Пилинг в Бельцах – Обновление и сияние вашей кожи</h1>
              <p>
                Эффективные процедуры пилинга для лица и тела в косметологическом
                центре Meddera.
              </p>
            </section>
            <section>
              <h2>Что такое пилинг?</h2>
              <p>
                Пилинг – это косметологическая процедура, направленная на удаление
                омертвевших клеток кожи, улучшение
                ее текстуры и цвета. В Meddera мы предлагаем различные виды пилинга,
                подходящие для всех типов кожи.
              </p>
            </section>
            <section>
              <h2>Виды пилинга в Meddera</h2>
              <article>
                <h3>Поверхностный пилинг</h3>
                <p>
                  Мягкое отшелушивание верхнего слоя кожи с использованием фруктовых
                  кислот. Подходит для устранения
                  мелких морщин и улучшения цвета лица.
                </p>
              </article>
              <article>
                <h3>Срединный пилинг</h3>
                <p>
                  Глубокое очищение кожи с использованием трихлоруксусной кислоты.
                  Эффективен при пигментации и
                  возрастных изменениях.
                </p>
              </article>
              <article>
                <h3>Глубокий пилинг</h3>
                <p>
                  Интенсивное обновление кожи с использованием фенола. Рекомендуется
                  при выраженных морщинах и
                  рубцах.
                </p>
              </article>
            </section>
            <section>
              <h2>Показания к проведению пилинга</h2>
              <ul>
                <li>Тусклый цвет лица</li>
                <li>Пигментные пятна</li>
                <li>Мелкие морщины</li>
                <li>Угревая сыпь и постакне</li>
                <li>Расширенные поры</li>
              </ul>
            </section>
            <section>
              <h2>Противопоказания</h2>
              <ul>
                <li>Беременность и лактация</li>
                <li>Острые воспалительные процессы на коже</li>
                <li>Аллергические реакции на компоненты пилинга</li>
                <li>Склонность к образованию келоидных рубцов</li>
              </ul>
            </section>
            <section>
              <h2>Преимущества пилинга в Meddera</h2>
              <ul>
                <li>Индивидуальный подход к каждому клиенту</li>
                <li>Использование сертифицированных препаратов</li>
                <li>Опытные косметологи с медицинским образованием</li>
                <li>Современное оборудование</li>
                <li>Комфортные условия и приятная атмосфера</li>
              </ul>
            </section>
            <section>
              <h2>Цены на процедуры пилинга</h2>
              <table>
                <tr>
                  <th>Процедура</th>
                  <th>Цена (MDL)</th>
                </tr>
                <tr>
                  <td>Поверхностный пилинг</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Срединный пилинг</td>
                  <td>800</td>
                </tr>
                <tr>
                  <td>Глубокий пилинг</td>
                  <td>1200</td>
                </tr>
              </table>
            </section>
            <section>
              <h2>Отзывы наших клиентов</h2>
              <article>
                <h3>Анна, 35 лет</h3>
                <p>
                  После процедуры пилинга кожа стала заметно свежее и ровнее.
                  Очень довольна результатом!
                </p>
              </article>
              <article>
                <h3>Ирина, 28 лет</h3>
                <p>
                  Профессиональный подход и приятная атмосфера.
                  Рекомендую Meddera всем своим подругам.
                </p>
              </article>
            </section>
            <section>
              <h2>Запишитесь на консультацию</h2>
              <p>
                Оставьте заявку на сайте или позвоните нам по телефону +373 68 550 030,
                чтобы записаться на процедуру
                пилинга в удобное для вас время.
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

export default ServicePage6;
