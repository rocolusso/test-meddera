import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import mezovolos from '@/../public/assets/img/services/mezovolos.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/12',
  },
  title: 'Мезотерапия для волос в Бельцах – восстановление и стимуляция роста',
  description: 'Мезотерапия волос в Бельцах — лечение выпадения, укрепление фолликул, стимуляция роста и улучшение кожи головы. Запишитесь в Meddera.',
  openGraph: {
    title: 'Мезотерапия для волос в Бельцах – восстановление и стимуляция роста',
    description: 'Мезотерапия волос в Бельцах — лечение выпадения, укрепление фолликул, стимуляция роста и улучшение кожи головы. Запишитесь в Meddera.',

    url: 'https://meddera.md/services/12',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/mezovolos.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Мезотерапия для волос в Бельцах – восстановление и стимуляция роста',
    description: 'Мезотерапия волос в Бельцах — лечение выпадения, укрепление фолликул, стимуляция роста и улучшение кожи головы. Запишитесь в Meddera.',

    images: ['https://meddera.md/assets/img/services/mezovolos.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage12() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Мезотерапия для волос</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="hover:scale-110 duration-500"
              src={mezovolos}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Мезотерапия для волос — это процедура, направленная на улучшение
              состояния волос и кожи
              головы.
              В ходе процедуры под кожу вводятся специальные коктейли, содержащие
              витамины, минералы,
              аминокислоты и другие активные вещества, которые стимулируют рост
              волос, укрепляют фолликулы
              и
              улучшают микроциркуляцию в коже головы. Мезотерапия эффективно
              борется с такими проблемами,
              как
              выпадение волос, истончение волос, себорейный дерматит и нарушения
              роста. Процедура помогает
              восстановить здоровье волос, улучшить их густоту и текстуру.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">
            <section>
              <h1>Мезотерапия для волос в Бельцах</h1>
              <p>
                Эффективное решение проблем с волосами: восстановление,
                укрепление и стимуляция роста
              </p>
            </section>
            <section>
              <h2>Преимущества мезотерапии для волос</h2>
              <ul>
                <li>Стимуляция роста новых волос</li>
                <li>Укрепление волосяных фолликулов</li>
                <li>Уменьшение выпадения волос</li>
                <li>Улучшение состояния кожи головы</li>
                <li>Восстановление структуры и блеска волос</li>
              </ul>
            </section>
            <section>
              <h2>Показания к проведению процедуры</h2>
              <article>
                <h3>Интенсивное выпадение волос</h3>
                <p>
                  Мезотерапия помогает остановить процесс выпадения волос,
                  укрепляя корни и стимулируя рост новых волосков.
                </p>
              </article>
              <article>
                <h3>Алопеция (облысение)</h3>
                <p>
                  Процедура эффективна при различных формах алопеции, включая
                  андрогенетическую и диффузную.
                </p>
              </article>
              <article>
                <h3>Проблемы с кожей головы</h3>
                <p>
                  Мезотерапия улучшает состояние кожи головы, устраняя перхоть,
                  зуд и нормализуя работу сальных желез.
                </p>
              </article>
              <article>
                <h3>Поврежденные и ослабленные волосы</h3>
                <p>
                  Процедура восстанавливает структуру волос, делая их
                  более прочными, эластичными и блестящими.
                </p>
              </article>
            </section>
            <section>
              <h2>Как проходит процедура</h2>
              <p>
                Мезотерапия для волос проводится с использованием тонких игл,
                через которые вводятся специальные коктейли,
                содержащие витамины, аминокислоты и микроэлементы.
                Процедура
                занимает около 30 минут и не требует длительного восстановления.
              </p>
            </section>
            <section>
              <h2>Противопоказания</h2>
              <ul>
                <li>Беременность и период лактации</li>
                <li>Острые воспалительные заболевания кожи головы</li>
                <li>Онкологические заболевания</li>
                <li>Сахарный диабет в стадии декомпенсации</li>
                <li>Аллергия на компоненты коктейлей</li>
              </ul>
            </section>
            <section>
              <h2>Почему выбирают нас</h2>
              <p>
                В клинике Meddera в Бельцах процедуры мезотерапии проводятся опытными
                трихологами с использованием сертифицированных препаратов.
                Мы обеспечиваем индивидуальный подход к
                каждому
                пациенту и гарантируем высокое качество услуг.
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

export default ServicePage12;
