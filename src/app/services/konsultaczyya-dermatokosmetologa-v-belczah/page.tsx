import React from 'react';
// import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import consultcosm from '@/../public/assets/img/services/consult-cosm.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/konsultaczyya-dermatokosmetologa-v-belczah',
  },
  title: 'Консультация дерматокосметолога в Бельцах — лечение кожных заболеваний',
  description: 'Профессиональная диагностика и лечение кожных заболеваний в Бельцах: акне, псориаз, экзема, розацеа, алопеция. Запишитесь на консультацию.',
  openGraph: {
    title: 'Консультация дерматокосметолога в Бельцах — лечение кожных заболеваний',
    description: 'Профессиональная диагностика и лечение кожных заболеваний в Бельцах: акне, псориаз, экзема, розацеа, алопеция. Запишитесь на консультацию.',

    url: 'https://meddera.md/services/konsultaczyya-dermatokosmetologa-v-belczah',
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
    title: 'Консультация дерматокосметолога в Бельцах — лечение кожных заболеваний',
    description: 'Профессиональная диагностика и лечение кожных заболеваний в Бельцах: акне, псориаз, экзема, розацеа, алопеция. Запишитесь на консультацию.',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage1() {
  return (
    <>
      {/* <IpChecker /> */}
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto ">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">
              Консультация у врача-дерматокосметолога
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              className={' '}
              src={consultcosm}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Консультация у врача-дерматокосметолога — это первый и важный шаг
              к здоровой и красивой
              коже. Во
              время приема врач проводит тщательный осмотр кожи, оценивает ее
              состояние и определяет
              индивидуальные потребности пациента. На основании диагностики
              специалист подбирает
              процедуры,
              учитывая возраст, тип кожи и желаемый результат. Консультация также
              включает рекомендации по
              выбору косметических средств и образу жизни, которые помогут поддерживать
              здоровье кожи в
              долгосрочной перспективе. Профессиональный подход дерматокосметолога
              позволяет предотвратить
              или
              устранить проблемы, такие как акне, пигментация, возрастные
              изменения и другие.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Консультация дерматокосметолога в Бельцах</h1>
              <p>
                Эффективное лечение кожных заболеваний с использованием современных
                методов диагностики и терапии.
              </p>
            </section>
            <section>
              <h2>Услуги дерматокосметолога</h2>
              <ul>
                <li>Диагностика и лечение акне</li>
                <li>Терапия псориаза и экземы</li>
                <li>Лечение розацеа и купероза</li>
                <li>Коррекция алопеции и выпадения волос</li>
                <li>Удаление бородавок и папиллом</li>
                <li>Лечение грибковых инфекций кожи и ногтей</li>
                <li>Консультации по уходу за кожей и подбору косметических средств</li>
              </ul>
            </section>
            <section>
              <h2>Почему выбирают нас</h2>
              <article>
                <h3>Опытные специалисты</h3>
                <p>
                  Наши дерматокосметологи имеют многолетний опыт и регулярно проходят
                  повышение квалификации.
                </p>
              </article>
              <article>
                <h3>Современное оборудование</h3>
                <p>
                  Мы используем новейшие технологии для точной диагностики и эффективного
                  лечения кожных
                  заболеваний.
                </p>
              </article>
              <article>
                <h3>Индивидуальный подход</h3>
                <p>
                  Каждому пациенту предоставляется персонализированный план лечения,
                  учитывающий особенности кожи и
                  здоровья.
                </p>
              </article>
              <article>
                <h3>Удобное расположение</h3>
                <p>
                  Клиника находится в центре Бельц, что обеспечивает легкий доступ для
                  всех жителей города и
                  окрестностей.
                </p>
              </article>
            </section>
            <section>
              <h2>Как проходит консультация</h2>
              <p>
                Во время первичного приема дерматокосметолог проведет осмотр кожи,
                соберет анамнез, при необходимости
                назначит дополнительные исследования и разработает индивидуальный план лечения.
              </p>
            </section>
            <section>
              <h2>Часто задаваемые вопросы</h2>
              <ul>
                <li>
                  <strong>Сколько стоит консультация?</strong>
                  {' '}
                  Стоимость первичного приема составляет 300 MDL.
                </li>
                <li>
                  <strong>Нужна ли предварительная запись?</strong>
                  {' '}
                  Да, рекомендуем записываться заранее по телефону
                  или через онлайн-форму.
                </li>
                <li>
                  <strong>Какие документы необходимо иметь при себе?</strong>
                  {' '}
                  Паспорт или удостоверение личности, а
                  также медицинские документы, если имеются.
                </li>
              </ul>
            </section>
            <section>
              <h2>Контактная информация</h2>
              <p>Адрес: г. Бельцы, ул. Штефан Чел Маре, 13</p>
              <p>Телефон: +373 (68) 550 030</p>
              <p>График работы: Пн–Вс: 9:00–20:00</p>
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

export default ServicePage1;
