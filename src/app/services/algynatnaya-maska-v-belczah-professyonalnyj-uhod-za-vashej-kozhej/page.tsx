import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import maskaLica from '@/../public/assets/img/services/maska_lica.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
  },
  title: 'Альгинатная маска в Бельцах – Увлажнение, лифтинг и сияние кожи',
  description: 'Профессиональные альгинатные маски в Бельцах. Увлажнение, лифтинг и сияние кожи. Запишитесь на процедуру у опытного косметолога.',
  openGraph: {
    title: 'Альгинатная маска в Бельцах – Увлажнение, лифтинг и сияние кожи',
    description: 'Профессиональные альгинатные маски в Бельцах. Увлажнение, лифтинг и сияние кожи. Запишитесь на процедуру у опытного косметолога.',

    url: 'https://meddera.md/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/maska_lica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Альгинатная маска в Бельцах – Увлажнение, лифтинг и сияние кожи',
    description: 'Профессиональные альгинатные маски в Бельцах. Увлажнение, лифтинг и сияние кожи. Запишитесь на процедуру у опытного косметолога.',

    images: ['https://meddera.md/assets/img/services/maska_lica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage7() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Альгинатная маска</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={maskaLica}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Альгинатная маска — эффективное средство ухода за кожей, изготовленное на
              основе альгинатов,
              которые получают из бурых морских водорослей. Благодаря высокому
              содержанию минералов и
              микроэлементов альгинатные маски обладают мощным увлажняющим, подтягивающим
              и успокаивающим
              действием. Маска наносится на лицо в виде густой смеси и застывает, образуя
              плотный слой,
              который помогает активным веществам глубже проникать в кожу. В зависимости
              от состава,
              альгинатные маски могут дополнительно осветлять пигментацию, улучшать
              текстуру кожи и
              способствовать устранению воспалений. После процедуры кожа выглядит свежей,
              увлажненной и
              упругой, а её тон становится более ровным и сияющим. Альгинатные маски идеально
              подходят для
              любого типа кожи и часто используются в завершении профессиональных уходов,
              усиливая эффект
              от
              других процедур.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Альгинатная маска в Бельцах – Профессиональный уход за вашей кожей</h1>
              <p>
                Ощутите мгновенное увлажнение, лифтинг и сияние с помощью
                альгинатной маски от опытного косметолога в
                Бельцах.
              </p>
            </section>
            <section>
              <h2>Преимущества альгинатной маски</h2>
              <ul>
                <li>Глубокое увлажнение и питание кожи</li>
                <li>Мгновенный лифтинг-эффект</li>
                <li>Устранение воспалений и улучшение текстуры кожи</li>
                <li>Осветление пигментации и выравнивание тона</li>
              </ul>
            </section>
            <section>
              <h2>Почему выбирают нас в Бельцах?</h2>
              <article>
                <h3>Опытный косметолог</h3>
                <p>
                  Наш специалист имеет более 10 лет опыта в области косметологии и
                  постоянно совершенствует свои
                  навыки.
                </p>
              </article>
              <article>
                <h3>Индивидуальный подход</h3>
                <p>
                  Мы подбираем состав маски в зависимости от типа и состояния вашей
                  кожи для достижения максимального
                  эффекта.
                </p>
              </article>
              <article>
                <h3>Современные методики</h3>
                <p>
                  Используем только сертифицированные и проверенные препараты,
                  соответствующие международным
                  стандартам.
                </p>
              </article>
              <article>
                <h3>Удобное расположение</h3>
                <p>
                  Наш кабинет находится в центре Бельц, что обеспечивает легкий
                  доступ для всех клиентов.
                </p>
              </article>
            </section>
            <section>
              <h2>Как проходит процедура?</h2>
              <p>
                Процедура начинается с очищения кожи, после чего наносится альгинатная маска.
                После застывания маска
                снимается, а кожа обрабатывается увлажняющим средством. Весь процесс занимает
                около 30-40 минут.
              </p>
            </section>
            <section>
              <h2>Отзывы наших клиентов</h2>
              <ul>
                <li>
                  После процедуры кожа стала заметно свежее и подтянутой. Очень довольна
                  результатом! – Мария, 35
                  лет
                </li>
                <li>Рекомендую всем! Отличный сервис и профессиональный подход. – Елена, 28 лет</li>
                <li>Моя кожа никогда не выглядела так хорошо. Спасибо! – Ольга, 42 года</li>
              </ul>
            </section>
            <section>
              <h2>Запишитесь на процедуру уже сегодня!</h2>
              <p>
                Позвоните нам по телефону
                <strong>+373 68550030</strong>
                {' '}
                или заполните форму на сайте для записи на
                процедуру альгинатной маски в Бельцах.
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

export default ServicePage7;
