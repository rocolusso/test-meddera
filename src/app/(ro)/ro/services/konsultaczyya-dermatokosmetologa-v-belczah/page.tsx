import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import consultcosm from '@public/assets/img/services/consult-cosm.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/konsultaczyya-dermatokosmetologa-v-belczah', 'ro'),
  title: 'Consultație dermatocosmetolog Bălți – Piele sănătoasă și frumoasă',
  description:
    'Consultații dermatocosmetologice în Bălți: acnee, pigmentare, riduri. Plan personalizat pentru un ten sănătos. Clinica Meddera.',
  openGraph: {
    title: 'Consultație dermatocosmetolog Bălți – Piele sănătoasă și frumoasă',
    description:
      'Consultații dermatocosmetologice în Bălți: acnee, pigmentare, riduri. Plan personalizat pentru un ten sănătos. Clinica Meddera.',

    url: 'https://meddera.md/ro/services/konsultaczyya-dermatokosmetologa-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/consult-cosm.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultație dermatocosmetolog Bălți – Piele sănătoasă și frumoasă',
    description:
      'Consultații dermatocosmetologice în Bălți: acnee, pigmentare, riduri. Plan personalizat pentru un ten sănătos. Clinica Meddera.',

    images: ['https://meddera.md/assets/img/services/consult-cosm.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage1Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title="Consultația la medicul dermatocosmetolog"
      heroImage={consultcosm}
      heroImageAlt="Consultație dermatocosmetolog — clinica Meddera, Bălți"
    >
      <p>
        Consultația la medicul dermatocosmetolog este primul și importantul pas către o piele sănătoasă și frumoasă. În timpul consultației, medicul efectuează o examinare atentă a pielii, evaluează starea acesteia și stabilește nevoile individuale ale pacientului. Pe baza diagnosticului, specialistul recomandă proceduri, luând în considerare vârsta, tipul de piele și rezultatul dorit. Consultația include, de asemenea, recomandări pentru alegerea produselor cosmetice și pentru un stil de viață care ajută la menținerea sănătății pielii pe termen lung. Abordarea profesională a dermatocosmetologului permite prevenirea sau tratarea problemelor precum acneea, pigmentarea, modificările legate de vârstă și altele.
      </p>

      <ServiceSeoContent
        locale="ro"
        slug="konsultaczyya-dermatokosmetologa-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />
    </ContentPageShell>
  );
}

export default ServicePage1Ro;
