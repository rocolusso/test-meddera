import React from 'react';
// import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import lipolitiki from '@/../public/assets/img/services/lipolitiki.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/ynjekczyy-lypolytykov-v-belczah',
  },
  title: 'Инъекции липолитиков в Бельцах – Эффективное удаление жира',
  description: 'Профессиональные инъекции липолитиков в Бельцах. Безопасное и эффективное удаление локальных жировых отложений. Запишитесь на консультацию уже сегодня!',
  openGraph: {
    title: 'Инъекции липолитиков в Бельцах – Эффективное удаление жира',
    description: 'Профессиональные инъекции липолитиков в Бельцах. Безопасное и эффективное удаление локальных жировых отложений. Запишитесь на консультацию уже сегодня!',

    url: 'https://meddera.md/services/ynjekczyy-lypolytykov-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/lipolitiki.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Инъекции липолитиков в Бельцах – Эффективное удаление жира',
    description: 'Профессиональные инъекции липолитиков в Бельцах. Безопасное и эффективное удаление локальных жировых отложений. Запишитесь на консультацию уже сегодня!',

    images: ['https://meddera.md/assets/img/services/lipolitiki.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage17() {
  return (
    <>
      {/* <IpChecker /> */}
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Инъекции липолитиков</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={lipolitiki}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Инъекции липолитиков — процедура, направленная на снижение локализованных
              жировых отложений и
              улучшение контуров тела и лица. Липолитики представляют собой препараты,
              содержащие активные
              вещества, которые помогают расщеплять жир и выводить его из организма,
              способствуя уменьшению
              объемов в проблемных зонах. Введение липолитиков может быть использовано
              для коррекции таких
              областей, как подбородок (подбородочные складки), зона живота, бедра,
              ягодицы и внутренние
              поверхности рук. Процедура не требует хирургического вмешательства и
              позволяет достичь
              естественного и долговременного эффекта, при этом обычно требуется
              несколько сеансов для
              достижения оптимального результата. Липолитики способствуют улучшению
              контуров, подтяжке кожи и
              общему выравниванию фигуры.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Инъекции липолитиков в Бельцах</h1>
              <p>Эффективное решение для удаления локальных жировых отложений и коррекции фигуры</p>
            </section>
            <section>
              <h2>Что такое инъекции липолитиков?</h2>
              <p>
                Инъекции липолитиков – это современная косметологическая процедура,
                направленная на разрушение жировых
                клеток в проблемных зонах. С помощью тонких игл специальные
                препараты вводятся под кожу, способствуя
                расщеплению жира и его естественному выведению из организма.
              </p>
            </section>
            <section>
              <h2>Преимущества процедуры</h2>
              <ul>
                <li>Безоперационное удаление жира</li>
                <li>Минимальный период восстановления</li>
                <li>Улучшение контуров тела и лица</li>
                <li>Стимуляция обменных процессов в коже</li>
                <li>Безопасность и эффективность</li>
              </ul>
            </section>
            <section>
              <h2>Показания к проведению</h2>
              <ul>
                <li>Локальные жировые отложения на животе, бедрах, руках, спине</li>
                <li>Второй подбородок</li>
                <li>Целлюлит</li>
                <li>Жировые ловушки, не поддающиеся диетам и упражнениям</li>
              </ul>
            </section>
            <section>
              <h2>Противопоказания</h2>
              <ul>
                <li>Беременность и период лактации</li>
                <li>Онкологические заболевания</li>
                <li>Острые хронические заболевания</li>
                <li>Нарушения свертываемости крови</li>
                <li>Индивидуальная непереносимость компонентов препаратов</li>
              </ul>
            </section>
            <section>
              <h2>Как проходит процедура?</h2>
              <p>
                Перед началом процедуры проводится консультация с врачом-косметологом,
                во время которой определяются
                проблемные зоны и подбирается подходящий препарат.
                Сама процедура занимает от 30 до 60 минут и не
                требует госпитализации. После инъекций возможны небольшие
                покраснения или отеки, которые проходят в
                течение нескольких дней.
              </p>
            </section>

            <section>
              <h2>Отзывы наших клиентов</h2>
              <article>
                <h3>Анна, 34 года</h3>
                <p>
                  «Прошла курс инъекций липолитиков для коррекции живота.
                  Результат превзошел ожидания – минус 5 см в
                  талии! Спасибо специалистам клиники за профессионализм.»
                </p>
              </article>
              <article>
                <h3>Марина, 28 лет</h3>
                <p>
                  «Долго не могла избавиться от второго подбородка.
                  После процедуры лицо стало более подтянутым,
                  контуры четкими. Рекомендую!»
                </p>
              </article>
            </section>
            <section>
              <h2>Часто задаваемые вопросы (FAQ)</h2>
              <article>
                <h3>Сколько процедур необходимо для достижения результата?</h3>
                <p>
                  Количество процедур зависит от индивидуальных
                  особенностей и объема жировых отложений. В среднем
                  рекомендуется от 3 до 6 сеансов с интервалом в 2 недели.
                </p>
              </article>
              <article>
                <h3>Насколько безопасна процедура?</h3>
                <p>
                  Процедура безопасна при соблюдении всех рекомендаций
                  и проведении квалифицированным специалистом. Все
                  препараты сертифицированы и одобрены для использования.
                </p>
              </article>
              <article>
                <h3>Есть ли побочные эффекты?</h3>
                <p>
                  Возможны небольшие покраснения, отеки или синяки в
                  местах инъекций, которые проходят в течение
                  нескольких дней.
                </p>
              </article>
            </section>
            <section>
              <h2>Запишитесь на консультацию</h2>
              <p>
                Хотите узнать больше о процедуре и определить,
                подходит ли она вам? Свяжитесь с нами по телефону
                <a
                  href="tel:+37368550030"
                >
                  +373 685 500 30
                </a>
                {' '}
                или заполните форму обратной связи на сайте. Наши
                специалисты с радостью ответят на все ваши вопросы.
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

export default ServicePage17;
