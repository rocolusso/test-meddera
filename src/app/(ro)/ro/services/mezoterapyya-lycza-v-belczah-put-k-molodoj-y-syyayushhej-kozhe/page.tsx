import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import mezolica from '@public/assets/img/services/mezolica.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe', 'ro'),
  title: 'Mezoterapie Facială în Bălți | Rejuvenare și Hidratare Profesională',
  description:
    'Mezoterapie facială în Bălți: ten hidratat, întinerit, riduri și pigmentație. Tratament personalizat la clinica Meddera.',
  openGraph: {
    title: 'Mezoterapie Facială în Bălți | Rejuvenare și Hidratare Profesională',
    description:
      'Mezoterapie facială în Bălți: ten hidratat, întinerit, riduri și pigmentație. Tratament personalizat la clinica Meddera.',

    url: 'https://meddera.md/ro/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/mezolica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mezoterapie Facială în Bălți | Rejuvenare și Hidratare Profesională',
    description:
      'Mezoterapie facială în Bălți: ten hidratat, întinerit, riduri și pigmentație. Tratament personalizat la clinica Meddera.',

    images: ['https://meddera.md/assets/img/services/mezolica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage11Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Mezoterapie facială în Bălți – rejuvenare și hidratare ten'}
      heroImage={mezolica}
      heroImageAlt={'Mezoterapia facială — clinica Meddera, Bălți'}
    >
      <p>
        Mezoterapia facială este o procedură cosmetică prin care se introduc
        în straturile adânci ale
        pielii cocktailuri de vitamine, aminoacizi, acid hialuronic și alte
        substanțe active cu ajutorul
        unor ace foarte fine. Această tehnică ajută la rezolvarea multor probleme, precum
        uscăciunea,
        culoarea ternă a tenului, pierderea elasticității, ridurile și
        pigmentația. Mezoterapia
        stimulează procesele metabolice, îmbunătățește microcirculația și hidratarea pielii,
        restabilește structura și tonusul acesteia. Procedura nu necesită o perioadă lungă de
        recuperare, iar rezultatele se observă după câteva ședințe, oferind pielii un aspect
        proaspăt și
        strălucitor. Mezoterapia este potrivită pentru toate tipurile de
        piele și este eficientă
        pentru
        reîntinerire și îmbunătățirea aspectului exterior.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage11Ro;
