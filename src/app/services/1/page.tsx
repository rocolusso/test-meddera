import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
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
  title: 'Дерматокосметолог в Бельцах | Консультация и уход за кожей — Meddera',
  description: `Профессиональная консультация дерматокосметолога в Бельцах. Индивидуальный подход,
                       диагностика кожи, подбор процедур и средств ухода. Запишитесь в клинике Meddera.`,
  openGraph: {
    title: 'Дерматокосметолог в Бельцах | Консультация и уход за кожей — Meddera',
    description: `Профессиональная консультация дерматокосметолога в Бельцах. Индивидуальный подход,
                       диагностика кожи, подбор процедур и средств ухода. Запишитесь в клинике Meddera.`,
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
    title: 'Дерматокосметолог в Бельцах | Консультация и уход за кожей — Meddera',
    description: `Профессиональная консультация дерматокосметолога в Бельцах. Индивидуальный подход,
                       диагностика кожи, подбор процедур и средств ухода. Запишитесь в клинике Meddera.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage1() {
  return (
    <>
      <IpChecker />
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
            <div
              style={{ fontSize: '8px' }}
              className="container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
            >
              <div>
                <h1>Консультация у дерматокосметолога в Бельцах</h1>
                <p>
                  Получите профессиональный уход за кожей от опытных специалистов
                  клиники Meddera.
                  Индивидуальный подход и современные методы лечения.
                </p>
              </div>

              <section>
                <h2>Зачем обращаться к дерматокосметологу?</h2>
                <ul>
                  <li>
                    <strong>Профессиональная диагностика:</strong>
                    {' '}
                    тщательный осмотр кожи и оценка
                    её состояния.
                  </li>
                  <li>
                    <strong>Индивидуальный подбор процедур:</strong>
                    {' '}
                    учитываются возраст, тип кожи и
                    желаемый результат.
                  </li>
                  <li>
                    <strong>Рекомендации по уходу:</strong>
                    {' '}
                    советы по выбору косметических средств и
                    образу жизни для поддержания здоровья кожи.
                  </li>
                </ul>
              </section>
              <section>
                <h2>Проблемы, которые решает дерматокосметолог</h2>
                <article>
                  <h3>Лечение акне</h3>
                  <p>
                    Комплексный подход к лечению акне с использованием
                    современных методов и
                    препаратов.
                  </p>
                </article>
                <article>
                  <h3>Коррекция пигментации</h3>
                  <p>
                    Эффективные процедуры для устранения пигментных пятен и
                    выравнивания тона
                    кожи.
                  </p>
                </article>
                <article>
                  <h3>Устранение возрастных изменений</h3>
                  <p>
                    Программы омоложения кожи, включая инъекционные и
                    аппаратные методики.
                  </p>
                </article>
                <article>
                  <h3>Другие дерматологические проблемы</h3>
                  <p>Лечение экземы, псориаза, дерматитов и других заболеваний кожи.</p>
                </article>
              </section>
              <section>
                <h2>Почему выбирают Meddera в Бельцах?</h2>
                <ul>
                  <li>Опытные дерматокосметологи с многолетней практикой.</li>
                  <li>Индивидуальный подход к каждому пациенту.</li>
                  <li>Современное оборудование и проверенные методики лечения.</li>
                  <li>Уютная атмосфера и внимательный персонал.</li>
                </ul>
              </section>
              <section>
                <h2>Запишитесь на консультацию</h2>
                <p>
                  Позвоните нам по телефону
                  <strong>+37368550030</strong>
                  {' '}
                  или заполните форму на сайте.
                  Мы свяжемся с вами в ближайшее время.
                </p>
              </section>

            </div>
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
