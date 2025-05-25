import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import uvelichenieGub from '@/../public/assets/img/services/uvelicheniegub.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.meddera.md/services/13',
  },
  title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
  description: 'Профессиональное увеличение губ в Бельцах. Безопасные процедуры с использованием качественных филлеров. Запишитесь на консультацию уже сегодня!',
  openGraph: {
    title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
    description: 'Профессиональное увеличение губ в Бельцах. Безопасные процедуры с использованием качественных филлеров. Запишитесь на консультацию уже сегодня!',

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
    title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
    description: 'Профессиональное увеличение губ в Бельцах. Безопасные процедуры с использованием качественных филлеров. Запишитесь на консультацию уже сегодня!',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage13() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Увеличение губ</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={uvelichenieGub}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Увеличение губ — это косметологическая процедура, направленная
              на коррекцию формы и объема губ с
              использованием филлеров на основе гиалуроновой кислоты.
              Врач-дерматокосметолог подбирает нужное
              количество препарата, что позволяет добиться естественного и
              гармоничного результата. Процедура
              безопасна, и результат заметен сразу после выполнения. Процедура
              помогает создать естественные
              контуры, улучшить симметрию и увлажнение губ, а также устранить
              морщины вокруг них. Гиалуроновая
              кислота, вводимая в ткани губ, придает им объем, делает их более
              выразительными и сочными.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Увеличение губ в Бельцах</h1>
              <p>
                Подчеркните свою естественную красоту с помощью профессиональных
                процедур увеличения губ
              </p>
            </section>
            <section>
              <h2>Почему выбирают нас для увеличения губ в Бельцах</h2>
              <ul>
                <li>Опытные специалисты с медицинским образованием</li>
                <li>Использование сертифицированных филлеров высокого качества</li>
                <li>Индивидуальный подход к каждому клиенту</li>
                <li>Современное оборудование и стерильные условия</li>
              </ul>
            </section>
            <section>
              <h2>Наши услуги по увеличению губ</h2>
              <article>
                <h3>Контурная пластика губ</h3>
                <p>
                  Процедура, направленная на изменение формы и объема губ с
                  использованием гиалуроновой кислоты.
                </p>
              </article>
              <article>
                <h3>Коррекция асимметрии губ</h3>
                <p>
                  Исправление природной или возрастной асимметрии для достижения
                  гармоничного внешнего вида.
                </p>
              </article>
              <article>
                <h3>Увлажнение и омоложение губ</h3>
                <p>
                  Инъекции, способствующие глубокому увлажнению и
                  улучшению текстуры кожи губ.
                </p>
              </article>
              <article>
                <h3>Удаление филлеров</h3>
                <p>
                  Безопасное удаление ранее введенных филлеров при
                  необходимости.
                </p>
              </article>
            </section>
            <section>
              <h2>Часто задаваемые вопросы</h2>
              <ul>
                <li>
                  <strong>Сколько длится эффект от процедуры?</strong>
                  Эффект сохраняется от 6 до 12 месяцев в
                  зависимости от индивидуальных особенностей организма.
                </li>
                <li>
                  <strong>Болезненна ли процедура?</strong>
                  Перед инъекцией применяется местная анестезия, что делает
                  процедуру практически безболезненной.
                </li>
                <li>
                  <strong>Есть ли противопоказания?</strong>
                  Да, существуют противопоказания, такие как беременность,
                  лактация, воспалительные процессы в области губ и некоторые
                  хронические заболевания.
                </li>
                <li>
                  <strong>Как подготовиться к процедуре?</strong>
                  Рекомендуется за несколько дней до процедуры
                  избегать приема алкоголя и разжижающих кровь препаратов.
                </li>
              </ul>
            </section>
            <section>
              <h2>Запишитесь на консультацию</h2>
              <p>
                Готовы подчеркнуть свою красоту? Свяжитесь с нами по
                телефону
                <a href="tel:+37368550030">+37368550030</a>
                {' '}
                или запишитесь
                онлайн через форму на сайте.
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

export default ServicePage13;
