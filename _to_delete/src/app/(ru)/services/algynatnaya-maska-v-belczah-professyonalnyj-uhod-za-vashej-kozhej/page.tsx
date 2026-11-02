import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import maskaLica from '@public/assets/img/services/maska_lica.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej', 'ru'),
  title: 'Альгинатная маска в Бельцах – Увлажнение, лифтинг и сияние кожи',
  description:
    'Альгинатные маски в Бельцах: глубокое увлажнение, лифтинг-эффект и сияние кожи. Процедура у косметолога клиники Meddera в Бельцах. Запись на приём.',
  openGraph: {
    title: 'Альгинатная маска в Бельцах – Увлажнение, лифтинг и сияние кожи',
    description:
      'Альгинатные маски в Бельцах: глубокое увлажнение, лифтинг-эффект и сияние кожи. Процедура у косметолога клиники Meddera в Бельцах. Запись на приём.',

    url: 'https://meddera.md/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/maska_lica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Альгинатная маска в Бельцах – Увлажнение, лифтинг и сияние кожи',
    description:
      'Альгинатные маски в Бельцах: глубокое увлажнение, лифтинг-эффект и сияние кожи. Процедура у косметолога клиники Meddera в Бельцах. Запись на приём.',

    images: ['https://meddera.md/assets/img/services/maska_lica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage7() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Альгинатная маска в Бельцах – Увлажнение, лифтинг и сияние кожи'}
      heroImage={maskaLica}
      heroImageAlt={'Альгинатная маска — клиника Meddera, Бельцы'}
    >
      <p>
        Альгинатная маска — эффективное средство ухода за кожей, изготовленное на
        основе альгинатов,
        которые получают из бурых морских водорослей. Благодаря высокому
        содержанию минералов и
        микроэлементов альгинатные маски обладают мощным увлажняющим, подтягивающим
        и успокаивающим
        действием. Маска наносится на лицо в виде густой смеси и застывает, образуя
        плотный слой,
        который помогает активным веществам глубже проникать в кожу. В зависимости
        от состава,
        альгинатные маски могут дополнительно осветлять пигментацию, улучшать
        текстуру кожи и
        способствовать устранению воспалений. После процедуры кожа выглядит свежей,
        увлажненной и
        упругой, а её тон становится более ровным и сияющим. Альгинатные маски идеально
        подходят для
        любого типа кожи и часто используются в завершении профессиональных уходов,
        усиливая эффект
        от
        других процедур.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage7;
