import React from 'react';
// import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import consultderm from '@/../public/assets/img/services/consult-derm.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
  },
  title: 'Дерматолог в Бельцах – Консультация и Лечение Кожи',
  description: 'Профессиональная консультация дерматолога в Бельцах: диагностика и лечение акне, экземы, псориаза, удаление новообразований. Запишитесь онлайн.',
  openGraph: {
    title: 'Дерматолог в Бельцах – Консультация и Лечение Кожи',
    description: 'Профессиональная консультация дерматолога в Бельцах: диагностика и лечение акне, экземы, псориаза, удаление новообразований. Запишитесь онлайн.',
    url: 'https://meddera.md/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/consult-derm.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дерматолог в Бельцах – Консультация и Лечение Кожи',
    description: 'Профессиональная консультация дерматолога в Бельцах: диагностика и лечение акне, экземы, псориаза, удаление новообразований. Запишитесь онлайн.',

    images: ['https://meddera.md/assets/img/services/consult-derm.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage2() {
  return (
    <>
      {/* <IpChecker /> */}
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center bold">
              Дерматологическая консультация
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={consultderm}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Дерматологическая консультация — это специализированный прием у врача-дерматолога,
              на
              котором
              проводится комплексная оценка состояния кожи. Во время консультации врач
              анализирует
              беспокоящие
              пациента симптомы, выявляет возможные причины кожных заболеваний и разрабатывает
              индивидуальный
              план лечения. Дерматолог может назначить необходимые анализы и
              инструментальные исследования
              для
              точного диагноза. Консультация включает рекомендации по уходу за
              кожей и образу жизни,
              которые
              помогут предотвратить развитие кожных заболеваний. Профессиональный
              подход позволяет
              своевременно выявить и лечить такие проблемы, как экзема, псориаз,
              акне, грибковые инфекции
              и
              аллергические реакции, сохраняя здоровье кожи надолго.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">

            <section>
              <h1>Дерматолог в Бельцах – Профессиональная Консультация и Эффективное Лечение</h1>
              {' '}
              <p>
                Опытный
                дерматолог в Бельцах предлагает диагностику и
                лечение кожных заболеваний. Запишитесь на консультацию уже
                сегодня!
              </p>
            </section>
            <section>
              <h2>Почему важно обратиться к дерматологу?</h2>
              <ul>
                <li>Появление высыпаний, зуда или шелушения кожи</li>
                <li>Изменения родинок или появление новых образований</li>
                <li>Проблемы с волосами и ногтями</li>
                <li>Необходимость в эстетических процедурах по уходу за кожей</li>
              </ul>
            </section>
            <section>
              <h2>Услуги дерматолога в Бельцах</h2>
              <article>
                <h3>Диагностика и лечение кожных заболеваний</h3>
                {' '}
                <p>
                  Профессиональная диагностика и лечение
                  акне, экземы, псориаза, дерматита и
                  других кожных заболеваний с использованием современных
                  методов.
                </p>
              </article>
              <article>
                <h3>Удаление новообразований</h3>
                {' '}
                <p>
                  Безопасное удаление родинок, папиллом, бородавок с
                  помощью радиоволнового метода, электрокоагуляции или лазера.
                </p>
              </article>
              <article>
                <h3>Дерматоскопия</h3>
                {' '}
                <p>
                  Точное исследование родинок и пигментных образований для раннего
                  выявления онкологических заболеваний кожи.
                </p>
              </article>
              <article>
                <h3>Эстетическая дерматология</h3>
                {' '}
                <p>
                  Процедуры по улучшению внешнего вида кожи:
                  биоревитализация, мезотерапия, пилинги, инъекции ботокса и филлеров.
                </p>
              </article>
            </section>
            <section>
              <h2>Преимущества обращения к нашему дерматологу</h2>
              {' '}
              <p>
                Мы предлагаем индивидуальный подход к
                каждому пациенту, использование современных технологий и методов лечения,
                а также комфортные условия
                приема в центре Meddera в Бельцах.
              </p>
            </section>
            <section>
              <h2>Часто задаваемые вопросы</h2>
              <ul>
                <li>
                  <strong>Как записаться на прием к дерматологу в Бельцах?</strong>
                  {' '}
                  – Позвоните по телефону
                  или заполните форму на сайте.
                </li>
                <li>
                  <strong>Сколько стоит консультация дерматолога?</strong>
                  {' '}
                  – Стоимость консультации составляет
                  300 MDL.
                </li>
                <li>
                  <strong>Какие документы нужны для приема?</strong>
                  {' '}
                  – Паспорт или удостоверение личности.
                </li>
                <li>
                  <strong>Можно ли получить консультацию онлайн?</strong>
                  {' '}
                  – Да, мы предлагаем
                  онлайн-консультации по предварительной записи.
                </li>
              </ul>
            </section>
            <section>
              <h2>Запишитесь на консультацию к дерматологу в Бельцах</h2>
              {' '}
              <p>
                Не откладывайте заботу о
                здоровье вашей кожи. Запишитесь на прием к опытному дерматологу
                в центре Meddera и получите
                профессиональную помощь.
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

export default ServicePage2;
