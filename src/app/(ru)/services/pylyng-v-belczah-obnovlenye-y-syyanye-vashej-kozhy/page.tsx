import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import pilling from '@public/assets/img/services/pilling.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy', 'ru'),
  title: 'Пилинг в Бельцах – Косметологические услуги в Молдове',
  description:
    'Пилинг в Бельцах: обновление кожи лица и тела, подбор состава под тип кожи. Консультация косметолога и процедуры в клинике Meddera. Запись онлайн.',
  openGraph: {
    title: 'Пилинг в Бельцах – Косметологические услуги в Молдове',
    description:
      'Пилинг в Бельцах: обновление кожи лица и тела, подбор состава под тип кожи. Консультация косметолога и процедуры в клинике Meddera. Запись онлайн.',

    url: 'https://meddera.md/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/pilling.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Пилинг в Бельцах – Косметологические услуги в Молдове',
    description:
      'Пилинг в Бельцах: обновление кожи лица и тела, подбор состава под тип кожи. Консультация косметолога и процедуры в клинике Meddera. Запись онлайн.',

    images: ['https://meddera.md/assets/img/services/pilling.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage6() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Пилинг в Бельцах – Косметологические услуги в Молдове'}
      heroImage={pilling}
      heroImageAlt={'Пилинг — клиника Meddera, Бельцы'}
    >
      <p>
        Пилинг — косметологическая процедура, направленная на обновление и улучшение
        состояния кожи
        путем удаления ороговевших клеток с её поверхности. Существует несколько
        видов пилингов:
        химический, механический, , каждый из которых подходит для решения
        различных проблем, таких
        как
        тусклый цвет лица, расширенные поры, пигментация, мелкие морщины и
        неровности текстуры.
        Процедура стимулирует клеточное обновление, что помогает улучшить
        цвет и тонус кожи, делая
        её
        более гладкой и сияющей. Профессиональный пилинг, выполненный с
        учетом типа и состояния
        кожи,
        позволяет не только освежить её, но и снизить выраженность
        возрастных изменений.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage6;
