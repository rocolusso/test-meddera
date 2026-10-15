import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import biorevit from '@public/assets/img/services/biorevit.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/byorevytalyzaczyya-v-belczah', 'ro'),
  title: 'Biorevitalizare în Bălți - Rejuvenare Facială Profesională',
  description:
    'Biorevitalizare în Bălți: hidratare, regenerare și strălucire naturală a pielii. Proceduri la clinica Meddera.',
  openGraph: {
    title: 'Biorevitalizare în Bălți - Rejuvenare Facială Profesională',
    description:
      'Biorevitalizare în Bălți: hidratare, regenerare și strălucire naturală a pielii. Proceduri la clinica Meddera.',

    url: 'https://meddera.md/ro/services/byorevytalyzaczyya-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/biorevit.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biorevitalizare în Bălți - Rejuvenare Facială Profesională',
    description:
      'Biorevitalizare în Bălți: hidratare, regenerare și strălucire naturală a pielii. Proceduri la clinica Meddera.',

    images: ['https://meddera.md/assets/img/services/biorevit.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage15Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Biorevitalizare în Bălți – rejuvenare facială profesională'}
      heroImage={biorevit}
      heroImageAlt={'Biorevitalizarea — clinica Meddera, Bălți'}
    >
      <p>
        Biorevitalizarea este o procedură cosmetologică destinată hidratării
        profunde și regenerării
        pielii prin injectarea de acid hialuronic și alte substanțe active.
        Procedura ajută la
        îmbunătățirea tonusului pielii, reducerea ridurilor fine, și
        creșterea fermității și
        elasticității acesteia. Biorevitalizarea restaurează activ echilibrul
        de apă al pielii,
        stimulează procesele metabolice și îmbunătățește microcirculația,
        ceea ce conferă pielii un
        aspect proaspăt și sănătos. Procedura nu necesită o recuperare îndelungată,
        iar rezultatele sunt
        vizibile deja după câteva sesiuni. Biorevitalizarea este potrivită
        pentru toate tipurile de
        piele și reprezintă o metodă eficientă de combatere a semnelor de
        îmbătrânire și oboseală a
        pielii.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="byorevytalyzaczyya-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage15Ro;
