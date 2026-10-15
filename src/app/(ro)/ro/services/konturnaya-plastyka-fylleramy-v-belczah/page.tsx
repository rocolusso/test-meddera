import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import konturnayaPlastika from '@public/assets/img/services/konturnayaplastika.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/konturnaya-plastyka-fylleramy-v-belczah', 'ro'),
  title: 'Plastia de contur în Bălți – Corectare facială cu acid hialuronic',
  description:
    'Contur facial cu acid hialuronic în Bălți: rejuvenare și corecție trăsături. Programări la clinica Meddera.',
  openGraph: {
    title: 'Plastia de contur în Bălți – Corectare facială cu acid hialuronic',
    description:
      'Contur facial cu acid hialuronic în Bălți: rejuvenare și corecție trăsături. Programări la clinica Meddera.',

    url: 'https://meddera.md/ro/services/konturnaya-plastyka-fylleramy-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/konturnayaplastika.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plastia de contur în Bălți – Corectare facială cu acid hialuronic',
    description:
      'Contur facial cu acid hialuronic în Bălți: rejuvenare și corecție trăsături. Programări la clinica Meddera.',

    images: ['https://meddera.md/assets/img/services/konturnayaplastika.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage16Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Plastia de contur în Bălți – Corectare facială cu acid hialuronic'}
      heroImage={konturnayaPlastika}
      heroImageAlt={'Plastica de contur cu fillere — clinica Meddera, Bălți'}
    >
      <p>
        Plastia de contur este o procedură cosmetologică în care, cu ajutorul
        injecțiilor de
        diverse substanțe, cum ar fi acidul hialuronic, introduse în zonele
        problematice ale feței, se
        restabilesc contururile, volumul și forma. Această procedură este
        utilizată pentru corectarea
        ridurilor, îmbunătățirea conturului feței, mărirea volumului obrajilor,
        bărbiei și pentru
        mărirea buzelor. Fillerele umplu țesuturile din interior, hidratându-le
        și stimulând producția
        de colagen, ceea ce face ca pielea să fie mai fermă și mai netedă.
        Rezultatele plastiei de
        contur sunt vizibile imediat după procedură și se mențin între 6 și
        18 luni, în funcție de tipul
        de filler și de zona de injectare.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="konturnaya-plastyka-fylleramy-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage16Ro;
