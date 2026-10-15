import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import terapiyaProtivPigment from '@public/assets/img/services/terapiya-protiv-pigm.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/terapyya-protyv-pygmentaczyy-v-belczah', 'ru'),
  title: 'Лечение пигментных пятен в Бельцах',
  description:
    'Лечение пигментации в Бельцах: лазер, пилинги, мезотерапия. Современные методы и консультация в Meddera.',
  openGraph: {
    title: 'Лечение пигментных пятен в Бельцах',
    description:
      'Лечение пигментации в Бельцах: лазер, пилинги, мезотерапия. Современные методы и консультация в Meddera.',

    url: 'https://meddera.md/services/terapyya-protyv-pygmentaczyy-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/terapiya-protiv-pigm.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Лечение пигментных пятен в Бельцах',
    description:
      'Лечение пигментации в Бельцах: лазер, пилинги, мезотерапия. Современные методы и консультация в Meddera.',

    images: ['https://meddera.md/assets/img/services/terapiya-protiv-pigm.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage9() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Лечение пигментных пятен в Бельцах'}
      heroImage={terapiyaProtivPigment}
      heroImageAlt={'Терапия против пигментации — клиника Meddera, Бельцы'}
    >
      <p>
        Терапия против пигментации — это косметологическая процедура, направленная
        на осветление и
        устранение пигментных пятен, гиперпигментации и неровности тона кожи.
        В ходе процедуры
        используются пилинги, специальные осветляющие средства, которые блокируют
        выработку меланина
        и
        способствуют его равномерному распределению в коже. Процедура подходит
        для лечения
        возрастных
        пятен, солнечных повреждений, а также поствоспалительной гиперпигментации.
        Регулярное
        проведение
        таких процедур помогает значительно улучшить цвет лица и сделать кожу
        более ровной и
        сияющей.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="terapyya-protyv-pygmentaczyy-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage9;
