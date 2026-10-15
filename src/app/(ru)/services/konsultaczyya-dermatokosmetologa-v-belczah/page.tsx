import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import consultcosm from '@public/assets/img/services/consult-cosm.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/konsultaczyya-dermatokosmetologa-v-belczah', 'ru'),
  title: 'Консультация дерматокосметолога в Бельцах — лечение кожных заболеваний',
  description:
    'Диагностика и лечение кожных заболеваний в Бельцах: акне, псориаз, экзема, розацеа, алопеция. Консультация дерматокосметолога Meddera.',
  openGraph: {
    title: 'Консультация дерматокосметолога в Бельцах — лечение кожных заболеваний',
    description:
      'Диагностика и лечение кожных заболеваний в Бельцах: акне, псориаз, экзема, розацеа, алопеция. Консультация дерматокосметолога Meddera.',

    url: 'https://meddera.md/services/konsultaczyya-dermatokosmetologa-v-belczah',
    type: 'website',
    images: [
      {
        url: '/assets/img/seo-meta/facebook-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Консультация дерматокосметолога в Бельцах — лечение кожных заболеваний',
    description:
      'Диагностика и лечение кожных заболеваний в Бельцах: акне, псориаз, экзема, розацеа, алопеция. Консультация дерматокосметолога Meddera.',

    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

function ServicePage1() {
  return (
    <ContentPageShell
      locale="ru"
      title="Консультация у врача-дерматокосметолога"
      heroImage={consultcosm}
      heroImageAlt="Консультация дерматокосметолога — клиника Meddera, Бельцы"
    >
      <p>
        Консультация у врача-дерматокосметолога — это первый и важный шаг к здоровой и красивой коже. Во время приема врач проводит тщательный осмотр кожи, оценивает ее состояние и определяет индивидуальные потребности пациента. На основании диагностики специалист подбирает процедуры, учитывая возраст, тип кожи и желаемый результат. Консультация также включает рекомендации по выбору косметических средств и образу жизни, которые помогут поддерживать здоровье кожи в долгосрочной перспективе. Профессиональный подход дерматокосметолога позволяет предотвратить или устранить проблемы, такие как акне, пигментация, возрастные изменения и другие.
      </p>

      <ServiceSeoContent
        locale="ru"
        slug="konsultaczyya-dermatokosmetologa-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />
    </ContentPageShell>
  );
}

export default ServicePage1;
