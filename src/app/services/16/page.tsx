import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import konturnayaPlastika from '@/../public/assets/img/services/konturnayaplastika.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/16',
  },
  title: 'Контурная пластика филлерами в Бельцах — Омоложение и коррекция лица',
  description: 'Профессиональная контурная пластика филлерами в Бельцах. Безопасные инъекции гиалуроновой кислоты для омоложения и коррекции черт лица. Запишитесь на консультацию.',
  openGraph: {
    title: 'Контурная пластика филлерами в Бельцах — Омоложение и коррекция лица',
    description: 'Профессиональная контурная пластика филлерами в Бельцах. Безопасные инъекции гиалуроновой кислоты для омоложения и коррекции черт лица. Запишитесь на консультацию.',

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
    title: 'Контурная пластика филлерами в Бельцах — Омоложение и коррекция лица',
    description: 'Профессиональная контурная пластика филлерами в Бельцах. Безопасные инъекции гиалуроновой кислоты для омоложения и коррекции черт лица. Запишитесь на консультацию.',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage16() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <h1 className="text-[1.5rem] sm:text-[3rem] sm:text-center">Контурная пластика филлерами</h1>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={konturnayaPlastika}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Контурная пластика филлерами —косметологическая процедура, при
              которой с помощью инъекций
              различных препаратов, таких как гиалуроновая кислота, вводимых
              в проблемные зоны лица,
              восстанавливаются контуры, объем и форма. Эта процедура используется
              для коррекции морщин,
              улучшения овала лица, увеличения объема щек, подбородка, а также
              для увеличения губ. Филлеры
              заполняют ткани изнутри, увлажняя их и стимулируя выработку коллагена,
              что делает кожу более
              упругой и гладкой. Результаты контурной пластики видны сразу после
              процедуры и сохраняются от 6
              до 18 месяцев, в зависимости от типа филлера и области введения.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Контурная пластика филлерами в Бельцах</h1>
              <p>Эффективное и безопасное решение для омоложения и коррекции черт лица</p>
            </section>
            <section>
              <h2>Преимущества контурной пластики</h2>
              <ul>
                <li>Безоперационное омоложение лица</li>
                <li>Мгновенный видимый результат</li>
                <li>Минимальный период восстановления</li>
                <li>Коррекция морщин и восстановление объемов</li>
              </ul>
            </section>
            <section>
              <h2>Что можно скорректировать с помощью филлеров</h2>
              <article>
                <h3>Увеличение и коррекция формы губ</h3>
                <p>
                  Придание губам желаемого объема и формы с использованием
                  безопасных филлеров на основе гиалуроновой
                  кислоты.
                </p>
              </article>
              <article>
                <h3>Моделирование скул и щек</h3>
                <p>
                  Восстановление утраченного объема и четкости контуров
                  лица для более молодого и свежего вида.
                </p>
              </article>
              <article>
                <h3>Коррекция носогубных складок</h3>
                <p>
                  Сглаживание глубоких морщин и складок для более
                  гладкой и упругой кожи.
                </p>
              </article>
              <article>
                <h3>Формирование подбородка и овала лица</h3>
                <p>
                  Создание гармоничного профиля и четких линий лица
                  без хирургического вмешательства.
                </p>
              </article>
            </section>
            <section>
              <h2>Процедура и используемые препараты</h2>
              <p>
                Контурная пластика проводится с использованием сертифицированных
                филлеров, таких как Juvederm,
                Belotero, Stylage и других. Процедура занимает от 30 до 60
                минут, эффект сохраняется от 6 до 18 месяцев
                в зависимости от индивидуальных особенностей пациента и
                выбранного препарата.
              </p>
            </section>
            <section>
              <h2>Показания и противопоказания</h2>
              <ul>
                <li>
                  Показания:
                  <ul>
                    <li>Возрастные изменения кожи</li>
                    <li>Потеря объема в области лица</li>
                    <li>Асимметрия черт лица</li>
                    <li>
                      Желание улучшить форму губ, скул или
                      подбородка
                    </li>
                  </ul>
                </li>
                <li>
                  Противопоказания:
                  <ul>
                    <li>Беременность и период лактации</li>
                    <li>
                      Острые воспалительные процессы в области
                      предполагаемой коррекции
                    </li>
                    <li>Аллергия на компоненты препарата</li>
                    <li>Онкологические заболевания</li>
                  </ul>
                </li>
              </ul>
            </section>
            <section>
              <h2>Запишитесь на консультацию</h2>
              <p>
                Наши опытные специалисты помогут подобрать оптимальное решение для
                вашего лица. Запишитесь на
                бесплатную консультацию по телефону
                <a href="tel:+37368550030">+373 685 500 30</a>
                {' '}
                или через форму
                обратной связи на сайте.
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

export default ServicePage16;
