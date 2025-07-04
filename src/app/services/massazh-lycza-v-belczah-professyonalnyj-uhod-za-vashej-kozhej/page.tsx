import React from 'react';
// import IpChecker from '@/components/new-ui/IpChecker';
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
  alternates: {
    canonical: 'https://meddera.md/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
  },
  title: 'Массаж лица в Бельцах – Профессиональный уход за вашей кожей',
  description: 'Профессиональный массаж лица в Бельцах. Омоложение, лифтинг, улучшение состояния кожи. Запишитесь на процедуру уже сегодня!',
  openGraph: {
    title: 'Массаж лица в Бельцах – Профессиональный уход за вашей кожей',
    description: 'Профессиональный массаж лица в Бельцах. Омоложение, лифтинг, улучшение состояния кожи. Запишитесь на процедуру уже сегодня!',
    url: 'https://meddera.md/services/massazh-lycza-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/massage_lica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Массаж лица в Бельцах – Профессиональный уход за вашей кожей',
    description: 'Профессиональный массаж лица в Бельцах. Омоложение, лифтинг, улучшение состояния кожи. Запишитесь на процедуру уже сегодня!',
    images: ['https://meddera.md/assets/img/services/massage_lica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage4() {
  return (
    <>
      {/* <IpChecker /> */}
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

            <section>
              <h1>Массаж лица в Бельцах – Профессиональный уход за вашей кожей</h1>
              <p>
                Откройте для себя секрет сияющей и молодой кожи с помощью профессионального
                массажа лица в нашем центре
                в Бельцах.
              </p>
            </section>

            <section>
              <h2>Преимущества массажа лица</h2>
              <ul>
                <li>Улучшение кровообращения и лимфодренажа</li>
                <li>Стимуляция выработки коллагена и эластина</li>
                <li>Снижение отечности и устранение темных кругов под глазами</li>
                <li>Повышение упругости и эластичности кожи</li>
                <li>Расслабление мышц лица и снятие напряжения</li>
              </ul>
            </section>
            <section>
              <h2>Виды массажа лица, предлагаемые в нашем центре</h2>
              <article>
                <h3>Классический массаж лица</h3>
                <p>
                  Традиционная техника, направленная на улучшение общего
                  состояния кожи и расслабление мышц лица.
                </p>
              </article>
              <article>
                <h3>Лифтинг-массаж</h3>
                <p>
                  Специальная методика, способствующая подтяжке кожи
                  и уменьшению морщин.
                </p>
              </article>
              <article>
                <h3>Массаж Кобидо</h3>
                <p>
                  Японская техника массажа, обеспечивающая глубокое
                  омоложение и восстановление кожи.
                </p>
              </article>
              <article>
                <h3>Аппаратный массаж лица</h3>
                <p>
                  Современные технологии для достижения максимального
                  эффекта омоложения и лифтинга.
                </p>
              </article>
            </section>
            <section>
              <h2>Этапы процедуры массажа лица</h2>
              <ol>
                <li>Очищение кожи от макияжа и загрязнений</li>
                <li>Нанесение специального масла или крема для массажа</li>
                <li>Проведение массажа выбранной техники</li>
                <li>Нанесение успокаивающей маски</li>
                <li>Завершающий уход с использованием крема по типу кожи</li>
              </ol>
            </section>
            <section>
              <h2>Часто задаваемые вопросы</h2>
              <article>
                <h3>Сколько процедур необходимо для видимого результата?</h3>
                <p>Рекомендуется пройти курс из 5-10 процедур для достижения стойкого эффекта.</p>
              </article>
              <article>
                <h3>Как часто можно делать массаж лица?</h3>
                <p>
                  Оптимальная частота – 1-2 раза в неделю,
                  в зависимости от типа кожи и выбранной техники.
                </p>
              </article>
              <article>
                <h3>Есть ли противопоказания к массажу лица?</h3>
                <p>
                  Противопоказания включают острые воспалительные процессы на коже,
                  кожные заболевания и некоторые
                  хронические заболевания. Перед началом курса рекомендуется
                  консультация специалиста.
                </p>
              </article>
            </section>
            <section>
              <h2>Запишитесь на массаж лица уже сегодня!</h2>
              <p>
                Подарите своей коже профессиональный уход и заботу.
                Свяжитесь с нами для записи на процедуру или
                получения дополнительной информации.
              </p>
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

export default ServicePage4;
