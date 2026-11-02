import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import karboksiterapiya from '@public/assets/img/services/karbiksiterapiya.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/karboksyterapyya-v-belczah', 'ru'),
  title: 'Карбокситерапия в Бельцах – Омоложение и лечение кожи',
  description:
    'Карбокситерапия в Бельцах (Meddera): омоложение кожи, акне, пигментация, целлюлит. Запись на процедуру.',
  openGraph: {
    title: 'Карбокситерапия в Бельцах – Омоложение и лечение кожи',
    description:
      'Карбокситерапия в Бельцах (Meddera): омоложение кожи, акне, пигментация, целлюлит. Запись на процедуру.',

    url: 'https://meddera.md/services/karboksyterapyya-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/karbiksiterapiya.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Карбокситерапия в Бельцах – Омоложение и лечение кожи',
    description:
      'Карбокситерапия в Бельцах (Meddera): омоложение кожи, акне, пигментация, целлюлит. Запись на процедуру.',

    images: ['https://meddera.md/assets/img/services/karbiksiterapiya.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage5() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Карбокситерапия в Бельцах – Омоложение и лечение кожи'}
      heroImage={karboksiterapiya}
      heroImageAlt={'Карбокситерапия — клиника Meddera, Бельцы'}
    >
      <p>
        Карбокситерапия — это процедура, направленная на улучшение состояния
        кожи с помощью
        насыщения её
        углекислым газом, без инъекций и нарушений целостности кожи. Во время
        процедуры на лицо
        наносится специальный гель, который активизирует процессы микроциркуляции
        и стимулирует
        приток
        кислорода к клеткам. Это улучшает тонус кожи, повышает её упругость,
        уменьшает выраженность
        морщин и пигментации, а также помогает в борьбе с акне и постакне.
        Карбокситерапия подходит
        для
        всех типов кожи и может быть использована как самостоятельная процедура
        или в сочетании с
        другими уходами.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="karboksyterapyya-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage5;
