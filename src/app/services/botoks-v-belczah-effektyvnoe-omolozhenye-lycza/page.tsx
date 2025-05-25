import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import botoks from '@/../public/assets/img/services/botoks.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/14',
  },
  title: 'Ботокс в Бельцах – Инъекции для омоложения лица | Meddera',
  description: 'Профессиональные инъекции ботокса в Бельцах для коррекции мимических морщин и лечения гипергидроза. Эффективное и безопасное омоложение лица в клинике Meddera.',
  openGraph: {
    title: 'Ботокс в Бельцах – Инъекции для омоложения лица | Meddera',
    description: 'Профессиональные инъекции ботокса в Бельцах для коррекции мимических морщин и лечения гипергидроза. Эффективное и безопасное омоложение лица в клинике Meddera.',

    url: 'https://meddera.md/services/14',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/botoks.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ботокс в Бельцах – Инъекции для омоложения лица | Meddera',
    description: 'Профессиональные инъекции ботокса в Бельцах для коррекции мимических морщин и лечения гипергидроза. Эффективное и безопасное омоложение лица в клинике Meddera.',

    images: ['https://meddera.md/assets/img/services/botoks.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage14() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={botoks}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Ботокс — это косметологическая процедура, при которой с помощью инъекций
              ботулинического токсина
              (ботокса) временно блокируются нервные импульсы, расслабляя мышцы, что
              позволяет уменьшить
              выраженность морщин и линий на лице. Особенно эффективно ботокс
              используется для устранения
              мимических морщин на лбу, вокруг глаз (гусиные лапки), а также между
              бровями (морщины
              переносицы). Процедура занимает всего 15-30 минут и не требует длительного
              восстановления, а
              результат становится заметен через несколько дней и сохраняется до
              4-6 месяцев. Ботокс помогает
              не только разглаживать морщины, но и предотвращать появление новых,
              улучшая общий внешний вид
              кожи.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Ботокс в Бельцах – Эффективное омоложение лица</h1>
              <p>
                Профессиональные инъекции ботокса для устранения морщин
                и лечения гипергидроза в клинике Meddera.
              </p>
            </section>
            <section>
              <h2>Преимущества процедуры ботокса</h2>
              <ul>
                <li>Быстрый эффект – результат заметен уже через 3-5 дней</li>
                <li>Длительное действие – до 6 месяцев</li>
                <li>Безопасность и минимальный риск побочных эффектов</li>
                <li>Отсутствие периода реабилитации</li>
                <li>Естественный результат без потери мимики</li>
              </ul>
            </section>
            <section>
              <h2>Показания к применению ботокса</h2>
              <article>
                <h3>Коррекция мимических морщин</h3>
                <p>
                  Устранение морщин на лбу, между бровями и в области глаз
                  &quot;гусиные лапки&quot;.
                </p>
              </article>
              <article>
                <h3>Лечение гипергидроза</h3>
                <p>Снижение чрезмерного потоотделения в области подмышек, ладоней и стоп.</p>
              </article>
              <article>
                <h3>Подтяжка лица и шеи</h3>
                <p>Безоперационное омоложение и улучшение контура лица и шеи.</p>
              </article>
              <article>
                <h3>Профилактика появления новых морщин</h3>
                <p>
                  Предотвращение образования новых мимических морщин при
                  регулярном применении.
                </p>
              </article>
            </section>
            <section>
              <h2>Как проходит процедура</h2>
              <p>
                Процедура инъекций ботокса занимает около 15–30 минут
                и не требует анестезии. Специалист определяет
                зоны введения препарата и проводит инъекции с использованием
                тонкой иглы. После процедуры пациент может
                сразу вернуться к обычной жизни.
              </p>
            </section>
            <section>
              <h2>Почему выбирают клинику Meddera в Бельцах</h2>
              <p>
                Наша клиника предлагает профессиональные услуги инъекционной
                косметологии с использованием
                сертифицированных препаратов. Опытные специалисты,
                индивидуальный подход и современное оборудование
                гарантируют высокое качество процедур и безопасность
                для пациентов.
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

export default ServicePage14;
