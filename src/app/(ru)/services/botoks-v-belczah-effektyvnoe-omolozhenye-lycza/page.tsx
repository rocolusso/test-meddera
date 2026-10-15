import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import botoks from '@public/assets/img/services/botoks.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza', 'ru'),
  title: 'Ботокс в Бельцах – Инъекции для омоложения лица',
  description:
    'Инъекции ботокса в Бельцах: коррекция мимических морщин и гипергидроза. Безопасное омоложение в клинике Meddera. Запись на консультацию.',
  openGraph: {
    title: 'Ботокс в Бельцах – Инъекции для омоложения лица',
    description:
      'Инъекции ботокса в Бельцах: коррекция мимических морщин и гипергидроза. Безопасное омоложение в клинике Meddera. Запись на консультацию.',

    url: 'https://meddera.md/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/botoks.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ботокс в Бельцах – Инъекции для омоложения лица',
    description:
      'Инъекции ботокса в Бельцах: коррекция мимических морщин и гипергидроза. Безопасное омоложение в клинике Meddera. Запись на консультацию.',

    images: ['https://meddera.md/assets/img/services/botoks.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage14() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Ботокс в Бельцах – Инъекции для омоложения лица'}
      heroImage={botoks}
      heroImageAlt={'Ботокс — клиника Meddera, Бельцы'}
    >
      <p>
        Ботокс — это косметологическая процедура, при которой с помощью инъекций
        ботулинического токсина
        (ботокса) временно блокируются нервные импульсы, расслабляя мышцы, что
        позволяет уменьшить
        выраженность морщин и линий на лице. Особенно эффективно ботокс
        используется для устранения
        мимических морщин на лбу, вокруг глаз (гусиные лапки), а также между
        бровями (морщины
        переносицы). Процедура занимает всего 15-30 минут и не требует длительного
        восстановления, а
        результат становится заметен через несколько дней и сохраняется до
        4-6 месяцев. Ботокс помогает
        не только разглаживать морщины, но и предотвращать появление новых,
        улучшая общий внешний вид
        кожи.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="botoks-v-belczah-effektyvnoe-omolozhenye-lycza"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage14;
