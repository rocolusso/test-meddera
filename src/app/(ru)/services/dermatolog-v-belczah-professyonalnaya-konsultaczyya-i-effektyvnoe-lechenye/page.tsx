import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import consultderm from '@public/assets/img/services/consult-derm.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye', 'ru'),
  title: 'Дерматолог в Бельцах – Консультация и Лечение Кожи',
  description:
    'Дерматолог в Бельцах: диагностика и лечение акне, экземы, псориаза, новообразований. Запись онлайн в Meddera.',
  openGraph: {
    title: 'Дерматолог в Бельцах – Консультация и Лечение Кожи',
    description:
      'Дерматолог в Бельцах: диагностика и лечение акне, экземы, псориаза, новообразований. Запись онлайн в Meddera.',
    url: 'https://meddera.md/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/consult-derm.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дерматолог в Бельцах – Консультация и Лечение Кожи',
    description:
      'Дерматолог в Бельцах: диагностика и лечение акне, экземы, псориаза, новообразований. Запись онлайн в Meddera.',

    images: ['https://meddera.md/assets/img/services/consult-derm.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage2() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Дерматолог в Бельцах – Консультация и Лечение Кожи'}
      heroImage={consultderm}
      heroImageAlt={'Дерматологическая консультация — клиника Meddera, Бельцы'}
    >
      <p>
        Дерматологическая консультация — это специализированный прием у врача-дерматолога,
        на
        котором
        проводится комплексная оценка состояния кожи. Во время консультации врач
        анализирует
        беспокоящие
        пациента симптомы, выявляет возможные причины кожных заболеваний и разрабатывает
        индивидуальный
        план лечения. Дерматолог может назначить необходимые анализы и
        инструментальные исследования
        для
        точного диагноза. Консультация включает рекомендации по уходу за
        кожей и образу жизни,
        которые
        помогут предотвратить развитие кожных заболеваний. Профессиональный
        подход позволяет
        своевременно выявить и лечить такие проблемы, как экзема, псориаз,
        акне, грибковые инфекции
        и
        аллергические реакции, сохраняя здоровье кожи надолго.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage2;
