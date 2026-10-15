import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import terapiyaProtivPigment from '@public/assets/img/services/terapiya-protiv-pigm.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/terapyya-protyv-pygmentaczyy-v-belczah', 'ro'),
  title: 'Terapie Antipigmentară în Bălți | Elimină Petele Pigmentare cu Meddera',
  description:
    'Terapie antipigmentară în Bălți: pete, melasma, hiperpigmentare. Tratamente la Meddera. Programează consultația.',
  openGraph: {
    title: 'Terapie Antipigmentară în Bălți | Elimină Petele Pigmentare cu Meddera',
    description:
      'Terapie antipigmentară în Bălți: pete, melasma, hiperpigmentare. Tratamente la Meddera. Programează consultația.',

    url: 'https://meddera.md/ro/services/terapyya-protyv-pygmentaczyy-v-belczah',
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
    title: 'Terapie Antipigmentară în Bălți | Elimină Petele Pigmentare cu Meddera',
    description:
      'Terapie antipigmentară în Bălți: pete, melasma, hiperpigmentare. Tratamente la Meddera. Programează consultația.',

    images: ['https://meddera.md/assets/img/services/terapiya-protiv-pigm.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage9Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Terapie antipigmentară în Bălți – eliminare pete pigmentare'}
      heroImage={terapiyaProtivPigment}
      heroImageAlt={'Terapie antipigmentară — clinica Meddera, Bălți'}
    >
      <p>
        Terapie antipigmentară este o procedură cosmetologică destinată iluminării
        și eliminării petelor pigmentare, hiperpigmentației. În timpul procedurii,
        se utilizează peelinguri și produse speciale de iluminare,
        care blochează producția de melanina și contribuie la
        distribuirea uniformă a acesteia în piele. Procedura este
        potrivită pentru tratarea fotoîmbătrînirii, cronoîmbătrînrii,
        petelor de vârstă, a leziunilor cauzate de soare, precum și a hiperpigmentației
        post-inflamatorii. Realizarea regulată a acestor proceduri ajută la
        îmbunătățirea semnificativă a culorii tenului și la obținerea
        unei pielii mai netede și strălucitoare.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="terapyya-protyv-pygmentaczyy-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage9Ro;
