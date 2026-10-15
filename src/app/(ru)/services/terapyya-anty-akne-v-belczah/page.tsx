import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import maskaLica from '@public/assets/img/services/anti-akne.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/terapyya-anty-akne-v-belczah', 'ru'),
  title: 'Терапия анти-акне в Бельцах – эффективное лечение акне и постакне',
  description:
    'Лечение акне в Бельцах: индивидуальный план, современные методы и дерматологи Meddera. Запись на консультацию.',
  openGraph: {
    title: 'Терапия анти-акне в Бельцах – эффективное лечение акне и постакне',
    description:
      'Лечение акне в Бельцах: индивидуальный план, современные методы и дерматологи Meddera. Запись на консультацию.',

    url: 'https://meddera.md/services/terapyya-anty-akne-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/anti-akne.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Терапия анти-акне в Бельцах – эффективное лечение акне и постакне',
    description:
      'Лечение акне в Бельцах: индивидуальный план, современные методы и дерматологи Meddera. Запись на консультацию.',

    images: ['https://meddera.md/assets/img/services/anti-akne.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage8() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Терапия анти-акне в Бельцах – Лечение акне и постакне'}
      heroImage={maskaLica}
      heroImageAlt={'Терапия анти-акне — клиника Meddera, Бельцы'}
    >
      <p>
        Терапия анти-акне – это процедура направленная на лечение воспалений
        кожи и
        профилактику
        новых
        высыпаний. В процессе используются методы очищения, пилинга, антибактериальной
        обработки и
        увлажнения, что помогает нормализовать работу сальных желез и устранить
        загрязнения в порах.
        Важно, что процедура подбирается индивидуально в зависимости от типа кожи
        и стадии
        заболевания.
        Регулярные сеансы помогают не только устранить воспаления, но и
        предотвратить развитие
        постакне
        и рубцевание.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="terapyya-anty-akne-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage8;
