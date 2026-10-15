import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import maskaLica from '@public/assets/img/services/anti-akne.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/terapyya-anty-akne-v-belczah', 'ro'),
  title: 'Terapie anti-acnee Bălți | Ten curat și sănătos',
  description:
    'Terapie anti-acnee în Bălți: ten curat, protocol personalizat la Meddera. Dermatocosmetolog, programări online.',
  openGraph: {
    title: 'Terapie anti-acnee Bălți | Ten curat și sănătos',
    description:
      'Terapie anti-acnee în Bălți: ten curat, protocol personalizat la Meddera. Dermatocosmetolog, programări online.',

    url: 'https://meddera.md/ro/services/terapyya-anty-akne-v-belczah',
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
    title: 'Terapie anti-acnee Bălți | Ten curat și sănătos',
    description:
      'Terapie anti-acnee în Bălți: ten curat, protocol personalizat la Meddera. Dermatocosmetolog, programări online.',

    images: ['https://meddera.md/assets/img/services/anti-akne.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage8Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Terapie anti-acnee în Bălți – tratament acnee și cicatrici'}
      heroImage={maskaLica}
      heroImageAlt={'Terapia anti-acnee — clinica Meddera, Bălți'}
    >
      <p>
        Terapia anti-acnee este o procedură destinată tratării inflamațiilor
        pielii și prevenției
        apariției de noi erupții. În cadrul procesului se utilizează metode
        de curățare, peeling,
        tratamente antibacteriene și hidratare, care ajută la normalizarea
        activității glandelor
        sebacee
        și la eliminarea impurităților din pori. Este important de menționat
        că procedura este
        aleasă
        individual, în funcție de tipul pielii și stadiul afecțiunii. Ședințele
        regulate ajută nu
        doar
        la eliminarea inflamațiilor, dar și la prevenirea dezvoltării post-acneei
        și a cicatrizării.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="terapyya-anty-akne-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage8Ro;
