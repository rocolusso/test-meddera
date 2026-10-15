import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import mezovolos from '@public/assets/img/services/mezovolos.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/mezoterapyya-dlya-volos-v-belczah', 'ru'),
  title: 'Мезотерапия для волос в Бельцах – восстановление и стимуляция роста',
  description:
    'Мезотерапия волос в Бельцах: выпадение, укрепление фолликул, рост и кожа головы. Запись в клинике Meddera.',
  openGraph: {
    title: 'Мезотерапия для волос в Бельцах – восстановление и стимуляция роста',
    description:
      'Мезотерапия волос в Бельцах: выпадение, укрепление фолликул, рост и кожа головы. Запись в клинике Meddera.',

    url: 'https://meddera.md/services/mezoterapyya-dlya-volos-v-belczah',
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
    description:
      'Мезотерапия волос в Бельцах: выпадение, укрепление фолликул, рост и кожа головы. Запись в клинике Meddera.',

    images: ['https://meddera.md/assets/img/services/mezovolos.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage12() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Мезотерапия для волос в Бельцах – восстановление и стимуляция роста'}
      heroImage={mezovolos}
      heroImageAlt={'Мезотерапия для волос — клиника Meddera, Бельцы'}
    >
      <p>
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
      <ServiceSeoContent
        locale="ru"
        slug="mezoterapyya-dlya-volos-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage12;
