import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import biorevit from '@public/assets/img/services/biorevit.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/byorevytalyzaczyya-v-belczah', 'ru'),
  title: 'Биоревитализация в Бельцах - Омоложение и Увлажнение Кожи',
  description:
    'Биоревитализация в Бельцах: увлажнение и омоложение кожи с гиалуроновой кислотой. Процедуры в клинике Meddera.',
  openGraph: {
    title: 'Биоревитализация в Бельцах - Омоложение и Увлажнение Кожи',
    description:
      'Биоревитализация в Бельцах: увлажнение и омоложение кожи с гиалуроновой кислотой. Процедуры в клинике Meddera.',

    url: 'https://meddera.md/services/byorevytalyzaczyya-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/biorevit.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Биоревитализация в Бельцах - Омоложение и Увлажнение Кожи',
    description:
      'Биоревитализация в Бельцах: увлажнение и омоложение кожи с гиалуроновой кислотой. Процедуры в клинике Meddera.',

    images: ['https://meddera.md/assets/img/services/biorevit.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage15() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Биоревитализация в Бельцах - Омоложение и Увлажнение Кожи'}
      heroImage={biorevit}
      heroImageAlt={'Биоревитализация — клиника Meddera, Бельцы'}
    >
      <p>
        Биоревитализация — это косметологическая процедура, направленная
        на глубокое увлажнение и
        восстановление кожи с помощью инъекций гиалуроновой кислоты и других
        активных веществ. Процедура
        помогает улучшить тонус кожи, уменьшить мелкие морщины, повысить её
        упругость и эластичность.
        Биоревитализация активно восстанавливает водный баланс кожи, стимулирует
        обменные процессы и
        улучшает микроциркуляцию, что придает коже свежий и здоровый вид.
        Процедура не требует
        длительного восстановления, и результаты видны уже после нескольких
        сеансов. Биоревитализация
        подходит для всех типов кожи и является эффективным способом борьбы
        с возрастными изменениями и
        признаками усталости кожи.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="byorevytalyzaczyya-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage15;
