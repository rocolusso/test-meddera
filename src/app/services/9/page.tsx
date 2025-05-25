import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import terapiyaProtivPigment from '@/../public/assets/img/services/terapiya-protiv-pigm.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/9',
  },
  title: 'Лечение пигментных пятен в Бельцах',
  description: 'Эффективное лечение пигментации в Бельцах: лазер, пилинги, мезотерапия. Удаление пятен современными методами. Запишитесь на консультацию!',
  openGraph: {
    title: 'Лечение пигментных пятен в Бельцах',
    description: 'Эффективное лечение пигментации в Бельцах: лазер, пилинги, мезотерапия. Удаление пятен современными методами. Запишитесь на консультацию!',

    url: 'https://meddera.md/services/9',
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
    title: 'Лечение пигментных пятен в Бельцах',
    description: 'Эффективное лечение пигментации в Бельцах: лазер, пилинги, мезотерапия. Удаление пятен современными методами. Запишитесь на консультацию!',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage9() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Терапия против пигментации</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={terapiyaProtivPigment}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Терапия против пигментации — это косметологическая процедура, направленная
              на осветление и
              устранение пигментных пятен, гиперпигментации и неровности тона кожи.
              В ходе процедуры
              используются пилинги, специальные осветляющие средства, которые блокируют
              выработку меланина
              и
              способствуют его равномерному распределению в коже. Процедура подходит
              для лечения
              возрастных
              пятен, солнечных повреждений, а также поствоспалительной гиперпигментации.
              Регулярное
              проведение
              таких процедур помогает значительно улучшить цвет лица и сделать кожу
              более ровной и
              сияющей.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Терапия против пигментации в Бельцах</h1>
              <p>Избавьтесь от пигментных пятен с помощью современных методов лечения кожи</p>
            </section>
            <section>
              <h2>Почему появляется пигментация кожи?</h2>
              <ul>
                <li>Гормональные изменения (беременность, менопауза)</li>
                <li>Воздействие ультрафиолетовых лучей</li>
                <li>Поствоспалительные процессы после акне</li>
                <li>Возрастные изменения кожи</li>
                <li>Нарушения работы печени и других органов</li>
              </ul>
            </section>
            <section>
              <h2>Методы лечения пигментации в клинике «МедДера»</h2>
              <article>
                <h3>Лазерная терапия Nordlys Candela</h3>
                <p>
                  Современная лазерная система эффективно удаляет
                  пигментные пятна без повреждения окружающих тканей.
                  Процедура безопасна и подходит для разных типов кожи.
                </p>
              </article>
              <article>
                <h3>Химические пилинги</h3>
                <p>
                  Используем пилинги с отбеливающим эффектом, такие как
                  Cosmelan, PRX-T33, которые способствуют
                  обновлению кожи и выравниванию тона.
                </p>
              </article>
              <article>
                <h3>Мезотерапия и PRP-терапия</h3>
                <p>
                  Введение активных веществ, таких как гиалуроновая
                  кислота и пептиды, помогает восстановить кожу и
                  уменьшить проявления пигментации.
                </p>
              </article>
              <article>
                <h3>Озонотерапия</h3>
                <p>
                  Улучшает микроциркуляцию и обменные процессы в коже,
                  способствуя ее очищению и восстановлению.
                </p>
              </article>
            </section>
            <section>
              <h2>Преимущества обращения в «МедДера»</h2>
              <ul>
                <li>Индивидуальный подход к каждому пациенту</li>
                <li>Современное оборудование и сертифицированные препараты</li>
                <li>Опытные дерматологи и косметологи</li>
                <li>Безопасные и эффективные методы лечения</li>
              </ul>
            </section>
            <section>
              <h2>Часто задаваемые вопросы</h2>
              <article>
                <h3>
                  Сколько процедур необходимо для полного удаления
                  пигментации?
                </h3>
                <p>
                  Количество процедур зависит от типа и глубины пигментных пятен.
                  В среднем требуется от 3 до 6
                  сеансов.
                </p>
              </article>
              <article>
                <h3>Есть ли противопоказания к процедурам?</h3>
                <p>
                  Противопоказания включают беременность, лактацию, обострение
                  хронических заболеваний. Перед началом
                  лечения проводится консультация с врачом.
                </p>
              </article>
              <article>
                <h3>Как ухаживать за кожей после процедур?</h3>
                <p>
                  Рекомендуется использовать солнцезащитные средства с SPF 50+,
                  избегать прямого солнечного воздействия
                  и соблюдать рекомендации врача.
                </p>
              </article>
            </section>
            <section>
              <h2>Запишитесь на консультацию</h2>
              <p>
                Позвоните нам по телефону
                <a href="tel:+37368550030">+373 68 550 030</a>
                {' '}
                или
                заполните форму на сайте
                для записи на прием. Наши специалисты помогут вам
                вернуть коже здоровый и ровный тон.
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

export default ServicePage9;
