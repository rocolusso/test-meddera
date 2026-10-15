import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import mezovolos from '@public/assets/img/services/mezovolos.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/mezoterapyya-dlya-volos-v-belczah', 'ro'),
  title: 'Mezoterapie păr Bălți – Stop căderii și regenerare',
  description:
    'Mezoterapie pentru păr în Bălți: căderea părului, alopecie, îngrijire scalp. Tratament personalizat la Meddera. Programează-te.',
  openGraph: {
    title: 'Mezoterapie păr Bălți – Stop căderii și regenerare',
    description:
      'Mezoterapie pentru păr în Bălți: căderea părului, alopecie, îngrijire scalp. Tratament personalizat la Meddera. Programează-te.',

    url: 'https://meddera.md/ro/services/mezoterapyya-dlya-volos-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/mezovolos.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mezoterapie păr Bălți – Stop căderii și regenerare',
    description:
      'Mezoterapie pentru păr în Bălți: căderea părului, alopecie, îngrijire scalp. Tratament personalizat la Meddera. Programează-te.',

    images: ['https://meddera.md/assets/img/services/mezovolos.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage12Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Mezoterapie păr Bălți – Stop căderii și regenerare'}
      heroImage={mezovolos}
      heroImageAlt={'Mezoterapia pentru păr — clinica Meddera, Bălți'}
    >
      <p>
        Mezoterapia pentru păr este o procedură destinată îmbunătățirii stării
        părului și scalpului.
        În
        cadrul procedurii, se injectează sub piele cocktailuri speciale care
        conțin vitamine,
        minerale,
        aminoacizi și alte substanțe active, care stimulează creșterea părului,
        întăresc foliculii
        și
        îmbunătățesc microcirculația la nivelul scalpului. Mezoterapia combate
        eficient probleme
        precum
        căderea părului, subțierea părului, dermatita seboreică și tulburările
        de creștere.
        Procedura
        ajută la restabilirea sănătății părului, îmbunătățirea densității și
        texturii acestuia.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="mezoterapyya-dlya-volos-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage12Ro;
