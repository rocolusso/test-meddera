import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import lipolitiki from '@public/assets/img/services/lipolitiki.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/ynjekczyy-lypolytykov-v-belczah', 'ru'),
  title: 'Инъекции липолитиков в Бельцах – Эффективное удаление жира',
  description:
    'Инъекции липолитиков в Бельцах: удаление локальных жировых отложений без операции. Консультация и процедура в клинике Meddera.',
  openGraph: {
    title: 'Инъекции липолитиков в Бельцах – Эффективное удаление жира',
    description:
      'Инъекции липолитиков в Бельцах: удаление локальных жировых отложений без операции. Консультация и процедура в клинике Meddera.',

    url: 'https://meddera.md/services/ynjekczyy-lypolytykov-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/lipolitiki.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Инъекции липолитиков в Бельцах – Эффективное удаление жира',
    description:
      'Инъекции липолитиков в Бельцах: удаление локальных жировых отложений без операции. Консультация и процедура в клинике Meddera.',

    images: ['https://meddera.md/assets/img/services/lipolitiki.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage17() {
  return (
    <ContentPageShell
      locale="ru"
      title={'Инъекции липолитиков в Бельцах – Эффективное удаление жира'}
      heroImage={lipolitiki}
      heroImageAlt={'Инъекции липолитиков — клиника Meddera, Бельцы'}
    >
      <p>
        Инъекции липолитиков — процедура, направленная на снижение локализованных
        жировых отложений и
        улучшение контуров тела и лица. Липолитики представляют собой препараты,
        содержащие активные
        вещества, которые помогают расщеплять жир и выводить его из организма,
        способствуя уменьшению
        объемов в проблемных зонах. Введение липолитиков может быть использовано
        для коррекции таких
        областей, как подбородок (подбородочные складки), зона живота, бедра,
        ягодицы и внутренние
        поверхности рук. Процедура не требует хирургического вмешательства и
        позволяет достичь
        естественного и долговременного эффекта, при этом обычно требуется
        несколько сеансов для
        достижения оптимального результата. Липолитики способствуют улучшению
        контуров, подтяжке кожи и
        общему выравниванию фигуры.
      </p>
      <ServiceSeoContent
        locale="ru"
        slug="ynjekczyy-lypolytykov-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage17;
