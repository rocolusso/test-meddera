import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import maskaLica from '@public/assets/img/services/maska_lica.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej', 'ro'),
  title: 'Masca alginată în Bălți – Ten hidratat și luminos',
  description:
    'Mască alginată în Bălți: hidratare intensă, efect lifting și ten luminos după ședință. Programează consultația la clinica Meddera din Bălți.',
  openGraph: {
    title: 'Masca alginată în Bălți – Ten hidratat și luminos',
    description:
      'Mască alginată în Bălți: hidratare intensă, efect lifting și ten luminos după ședință. Programează consultația la clinica Meddera din Bălți.',

    url: 'https://meddera.md/ro/services/algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/maska_lica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masca alginată în Bălți – Ten hidratat și luminos',
    description:
      'Mască alginată în Bălți: hidratare intensă, efect lifting și ten luminos după ședință. Programează consultația la clinica Meddera din Bălți.',

    images: ['https://meddera.md/assets/img/services/maska_lica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage7Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Masca alginată în Bălți – ten hidratat și luminos'}
      heroImage={maskaLica}
      heroImageAlt={'Masca alginată — clinica Meddera, Bălți'}
    >
      <p>
        Mască alginată – un mijloc eficient de îngrijire a pielii,
        realizat pe bază de alginați, care se obțin din algele marine brune.
        Datorită conținutului ridicat de minerale și microelemente,
        măștile alginate au un puternic efect hidratant, de întindere și calmare.
        Masca se aplică pe față sub formă de amestec dens și se întărește,
        formând un strat compact,
        care ajută substanțele active să pătrundă mai adânc în piele. În
        funcție de compoziție,
        măștile alginate pot ilumina suplimentar pigmentația, îmbunătăți textura pielii
        și ajuta la eliminarea inflamațiilor. După procedură, pielea arată proaspătă,
        hidratată și fermă, iar tonul acesteia devine mai uniform și radiant.
        Măștile alginate sunt ideale pentru orice tip de piele și sunt
        frecvent utilizate la finalul tratamentelor profesionale, amplificând
        efectul altor
        proceduri.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="algynatnaya-maska-v-belczah-professyonalnyj-uhod-za-vashej-kozhej"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage7Ro;
