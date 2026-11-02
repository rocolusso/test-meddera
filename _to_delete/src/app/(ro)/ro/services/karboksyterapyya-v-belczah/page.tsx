import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import karboksiterapiya from '@public/assets/img/services/karbiksiterapiya.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/karboksyterapyya-v-belczah', 'ro'),
  title: 'Carboxiterapie Bălți - Rejuvenare Facială și Corporală',
  description:
    'Carboxiterapie Meddera Bălți: piele întinerită, celulită, vergeturi. Tratament non-invaziv. Programări online.',
  openGraph: {
    title: 'Carboxiterapie Bălți - Rejuvenare Facială și Corporală',
    description:
      'Carboxiterapie Meddera Bălți: piele întinerită, celulită, vergeturi. Tratament non-invaziv. Programări online.',

    url: 'https://meddera.md/ro/services/karboksyterapyya-v-belczah',
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
    title: 'Carboxiterapie Bălți - Rejuvenare Facială și Corporală',
    description:
      'Carboxiterapie Meddera Bălți: piele întinerită, celulită, vergeturi. Tratament non-invaziv. Programări online.',

    images: ['https://meddera.md/assets/img/services/karbiksiterapiya.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage5Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Carboxiterapie Bălți – rejuvenare facială și corporală'}
      heroImage={karboksiterapiya}
      heroImageAlt={'Carboxiterapie — clinica Meddera, Bălți'}
    >
      <p>
        Carboxiterapia este o procedură destinată îmbunătățirii stării pielii
        prin saturarea
        acesteia cu
        dioxid de carbon, fără injecții și fără a afecta integritatea pielii.
        În timpul procedurii,
        pe
        față se aplică un gel special care activează procesele de microcirculație
        și stimulează
        fluxul
        de oxigen către celule. Acest lucru îmbunătățește tonusul pielii, crește
        elasticitatea
        acesteia,
        reduce vizibilitatea ridurilor și a pigmentării și ajută în combaterea acneei
        și a semnelor
        post-acnee. Carboxiterapia este potrivită pentru toate tipurile de piele și
        poate fi
        utilizată
        ca procedură de sine stătătoare sau în combinație cu alte tratamente.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="karboksyterapyya-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage5Ro;
