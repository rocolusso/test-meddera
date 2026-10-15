import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import chistkaLica from '@public/assets/img/services/chistka_lica.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/professyonalnaya-chystka-lycza-v-belczah', 'ru'),
  title: 'Чистка лица в Бельцах — косметология Meddera',
  description:
    'Чистка лица в Бельцах: глубокое очищение и индивидуальный план у дерматолога Meddera. Запись на приём.',
  openGraph: {
    title: 'Чистка лица в Бельцах — косметология Meddera',
    description:
      'Чистка лица в Бельцах: глубокое очищение и индивидуальный план у дерматолога Meddera. Запись на приём.',
    url: 'https://meddera.md/services/professyonalnaya-chystka-lycza-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/chistka_lica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Чистка лица в Бельцах — косметология Meddera',
    description:
      'Чистка лица в Бельцах: глубокое очищение и индивидуальный план у дерматолога Meddera. Запись на приём.',
    images: ['https://meddera.md/assets/img/services/chistka_lica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage3() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Чистка лица в Бельцах — косметология Meddera'}
      heroImage={chistkaLica}
      heroImageAlt={'Чистка лица — клиника Meddera, Бельцы'}
    >
      <p>
        Чистка лица — косметологическая процедура, направленная на глубокое очищение кожи и
        улучшение её
        текстуры и цвета. Процедура помогает удалить загрязнения, избыток кожного
        сала и ороговевшие
        клетки, что способствует сокращению пор и снижению риска воспалений.
        Существует несколько
        видов
        чистки, включая механическую, ультразвуковую, комбинированную, выбор которых
        зависит от
        состояния кожи и её потребностей. После консультации врач подбирает
        оптимальный метод и
        выполняет процедуру с учетом всех особенностей кожи пациента.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="professyonalnaya-chystka-lycza-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage3;
