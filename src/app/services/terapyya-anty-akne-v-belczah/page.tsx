import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import maskaLica from '@/../public/assets/img/services/anti-akne.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/terapyya-anty-akne-v-belczah',
  },
  title: 'Терапия анти-акне в Бельцах – эффективное лечение акне и постакне',
  description: 'Профессиональное лечение акне в Бельцах. Индивидуальный подход, современные методики и опытные дерматологи. Запишитесь на консультацию уже сегодня!',
  openGraph: {
    title: 'Терапия анти-акне в Бельцах – эффективное лечение акне и постакне',
    description: 'Профессиональное лечение акне в Бельцах. Индивидуальный подход, современные методики и опытные дерматологи. Запишитесь на консультацию уже сегодня!',

    url: 'https://meddera.md/services/terapyya-anty-akne-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/anti-akne.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Терапия анти-акне в Бельцах – эффективное лечение акне и постакне',
    description: 'Профессиональное лечение акне в Бельцах. Индивидуальный подход, современные методики и опытные дерматологи. Запишитесь на консультацию уже сегодня!',

    images: ['https://meddera.md/assets/img/services/anti-akne.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage8() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Терапия анти-акне</p>
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
              Терапия анти-акне – это процедура направленная на лечение воспалений
              кожи и
              профилактику
              новых
              высыпаний. В процессе используются методы очищения, пилинга, антибактериальной
              обработки и
              увлажнения, что помогает нормализовать работу сальных желез и устранить
              загрязнения в порах.
              Важно, что процедура подбирается индивидуально в зависимости от типа кожи
              и стадии
              заболевания.
              Регулярные сеансы помогают не только устранить воспаления, но и
              предотвратить развитие
              постакне
              и рубцевание.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <div>
                <h1>Терапия анти-акне в Бельцах</h1>
                <p>Эффективное лечение акне и постакне с использованием современных методик</p>
              </div>
            </section>
            <section>
              <div>
                <h2>Что такое акне и почему важно его лечить?</h2>
                <p>
                  Акне – это хроническое воспалительное заболевание кожи, связанное с
                  нарушением работы сальных желез и
                  волосяных фолликулов. Без своевременного лечения акне может привести к
                  образованию рубцов, пигментации
                  и психологическому дискомфорту. Профессиональная терапия позволяет не
                  только устранить высыпания, но и
                  предотвратить их повторное появление.
                </p>
              </div>
            </section>

            <section>
              <div>
                <h2>Методы лечения акне в нашей клинике</h2>
                <ul>
                  <li>
                    <strong>Фотодинамическая терапия (ФДТ)</strong>
                    {' '}
                    – использование blue LED для уничтожения бактерий
                    и уменьшения воспаления.
                  </li>
                  <li>
                    <strong>Лазерная терапия</strong>
                    {' '}
                    – воздействие на сальные железы для снижения их активности.
                  </li>
                  <li>
                    <strong>Химические пилинги</strong>
                    {' '}
                    – удаление ороговевших клеток и выравнивание текстуры кожи.
                  </li>
                  <li>
                    <strong>Мезотерапия</strong>
                    {' '}
                    – введение активных веществ для улучшения состояния кожи.
                  </li>
                  <li>
                    <strong>Индивидуальный подбор косметических средств</strong>
                    {' '}
                    – рекомендации по уходу за кожей в
                    домашних условиях.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div>
                <h2>Почему выбирают нас?</h2>
                <ul>
                  <li>Опытные дерматологи с многолетней практикой.</li>
                  <li>Современное оборудование и сертифицированные методики.</li>
                  <li>Индивидуальный подход к каждому пациенту.</li>
                  <li>Комплексное лечение акне и постакне.</li>
                  <li>Удобное расположение клиники в центре Бельц.</li>
                </ul>
              </div>
            </section>

            <section>
              <div>
                <h2>Часто задаваемые вопросы</h2>
                <article>
                  <h3>Сколько процедур необходимо для полного избавления от акне?</h3>
                  <p>
                    Количество процедур зависит от степени тяжести акне и индивидуальных
                    особенностей кожи. В среднем,
                    курс лечения составляет от 4 до 8 сеансов.
                  </p>
                </article>
                <article>
                  <h3>Болезненны ли процедуры?</h3>
                  <p>
                    Большинство процедур безболезненны или сопровождаются минимальным
                    дискомфортом. При необходимости
                    используется местная анестезия.
                  </p>
                </article>
                <article>
                  <h3>Можно ли проводить лечение летом?</h3>
                  <p>
                    Да, но необходимо соблюдать рекомендации врача по защите
                    кожи от солнечного воздействия.
                  </p>
                </article>
              </div>
            </section>

            <section>
              <div>
                <h2>Записаться на консультацию</h2>
                <p>
                  Оставьте свои контактные данные, и мы свяжемся с вами для
                  назначения удобного времени визита.
                </p>
              </div>
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

export default ServicePage8;
