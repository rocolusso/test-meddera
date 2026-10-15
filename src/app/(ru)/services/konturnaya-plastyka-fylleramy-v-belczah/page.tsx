import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import konturnayaPlastika from '@public/assets/img/services/konturnayaplastika.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/konturnaya-plastyka-fylleramy-v-belczah', 'ru'),
  title: 'Контурная пластика филлерами в Бельцах — Омоложение и коррекция лица',
  description:
    'Контурная пластика филлерами в Бельцах: гиалуроновая кислота для омоложения и коррекции лица. Консультация в Meddera.',
  openGraph: {
    title: 'Контурная пластика филлерами в Бельцах — Омоложение и коррекция лица',
    description:
      'Контурная пластика филлерами в Бельцах: гиалуроновая кислота для омоложения и коррекции лица. Консультация в Meddera.',

    url: 'https://meddera.md/services/konturnaya-plastyka-fylleramy-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/konturnayaplastika.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Контурная пластика филлерами в Бельцах — Омоложение и коррекция лица',
    description:
      'Контурная пластика филлерами в Бельцах: гиалуроновая кислота для омоложения и коррекции лица. Консультация в Meddera.',

    images: ['https://meddera.md/assets/img/services/konturnayaplastika.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage16() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Контурная пластика филлерами в Бельцах — Омоложение и коррекция лица'}
      heroImage={konturnayaPlastika}
      heroImageAlt={'Контурная пластика филлерами — клиника Meddera, Бельцы'}
    >
      <p>
        Контурная пластика филлерами —косметологическая процедура, при
        которой с помощью инъекций
        различных препаратов, таких как гиалуроновая кислота, вводимых
        в проблемные зоны лица,
        восстанавливаются контуры, объем и форма. Эта процедура используется
        для коррекции морщин,
        улучшения овала лица, увеличения объема щек, подбородка, а также
        для увеличения губ. Филлеры
        заполняют ткани изнутри, увлажняя их и стимулируя выработку коллагена,
        что делает кожу более
        упругой и гладкой. Результаты контурной пластики видны сразу после
        процедуры и сохраняются от 6
        до 18 месяцев, в зависимости от типа филлера и области введения.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="konturnaya-plastyka-fylleramy-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage16;
