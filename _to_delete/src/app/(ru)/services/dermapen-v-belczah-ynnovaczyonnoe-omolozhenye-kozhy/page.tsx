import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import dermapen from '@public/assets/img/services/dermapen.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy', 'ru'),
  title: 'Дермапен в Бельцах – фракционная мезотерапия для омоложения кожи',
  description:
    'Дермапен в Бельцах: морщины, рубцы, пигментация, мягкая реабилитация. Запись на процедуру в Meddera.',
  openGraph: {
    title: 'Дермапен в Бельцах – фракционная мезотерапия для омоложения кожи',
    description:
      'Дермапен в Бельцах: морщины, рубцы, пигментация, мягкая реабилитация. Запись на процедуру в Meddera.',

    url: 'https://meddera.md/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/dermapen.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дермапен в Бельцах – фракционная мезотерапия для омоложения кожи',
    description:
      'Дермапен в Бельцах: морщины, рубцы, пигментация, мягкая реабилитация. Запись на процедуру в Meddera.',

    images: ['https://meddera.md/assets/img/services/dermapen.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage10() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Дермапен в Бельцах – фракционная мезотерапия для омоложения кожи'}
      heroImage={dermapen}
      heroImageAlt={'Дермапен — клиника Meddera, Бельцы'}
    >
      <p>
        Дермапен — это косметологическая процедура, основанная на микронидлинге, при котором с
        помощью
        устройства с множеством мелких игл создаются микроскопические повреждения на коже. Это
        стимулирует естественные процессы регенерации и выработку коллагена, что способствует
        улучшению
        текстуры кожи, сокращению пор, уменьшению морщин и борьбе с постакне,
        рубцами и растяжками.
        Дермапен позволяет улучшить тонус кожи, выровнять её цвет и сделать более
        упругой. Процедура
        безопасна и эффективна, не требует длительного восстановления и подходит
        для всех типов
        кожи.
        Результаты становятся заметными уже после нескольких сеансов.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage10;
