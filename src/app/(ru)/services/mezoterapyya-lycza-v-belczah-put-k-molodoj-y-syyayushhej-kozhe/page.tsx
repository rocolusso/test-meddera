import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import mezolica from '@public/assets/img/services/mezolica.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe', 'ru'),
  title: 'Мезотерапия лица в Бельцах – омоложение и сияние кожи',
  description:
    'Мезотерапия лица в Бельцах: увлажнение, омоложение, морщины и пигментация. Запись на процедуру в клинике Meddera.',
  openGraph: {
    title: 'Мезотерапия лица в Бельцах – омоложение и сияние кожи',
    description:
      'Мезотерапия лица в Бельцах: увлажнение, омоложение, морщины и пигментация. Запись на процедуру в клинике Meddera.',

    url: 'https://meddera.md/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/mezolica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Мезотерапия лица в Бельцах – омоложение и сияние кожи',
    description:
      'Мезотерапия лица в Бельцах: увлажнение, омоложение, морщины и пигментация. Запись на процедуру в клинике Meddera.',

    images: ['https://meddera.md/assets/img/services/mezolica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage11() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Мезотерапия лица в Бельцах – омоложение и сияние кожи'}
      heroImage={mezolica}
      heroImageAlt={'Мезотерапия лица — клиника Meddera, Бельцы'}
    >
      <p>
        Мезотерапия лица —косметологическая процедура, при которой в глубокие
        слои кожи вводятся
        коктейли из витаминов, аминокислот, гиалуроновой кислоты и других
        активных веществ с помощью
        тончайших игл. Эта техника помогает решить множество проблем, таких
        как сухость, тусклый
        цвет
        лица, потеря упругости, морщины и пигментация. Мезотерапия стимулирует
        обменные процессы,
        улучшает микроциркуляцию и увлажнение кожи, восстанавливает её структуру
        и тонус. Процедура
        не
        требует длительного восстановления, а результаты проявляются через несколько сеансов,
        придавая
        коже свежий и сияющий вид. Мезотерапия подходит для всех типов кожи и эффективна для
        омоложения
        и улучшения внешнего вида.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage11;
