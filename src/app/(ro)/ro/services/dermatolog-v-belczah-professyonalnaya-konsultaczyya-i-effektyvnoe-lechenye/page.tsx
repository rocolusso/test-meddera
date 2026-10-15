import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import consultderm from '@public/assets/img/services/consult-derm.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye', 'ro'),
  title: 'Consultație Dermatologică în Bălți | Clinica Meddera',
  description:
    'Consultație dermatologică Meddera Bălți: acnee, psoriazis, eczeme. Tratamente pentru sănătatea pielii. Programări online.',
  openGraph: {
    title: 'Consultație Dermatologică în Bălți | Clinica Meddera',
    description:
      'Consultație dermatologică Meddera Bălți: acnee, psoriazis, eczeme. Tratamente pentru sănătatea pielii. Programări online.',
    url: 'https://meddera.md/ro/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/consult-derm.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultație Dermatologică în Bălți | Clinica Meddera',
    description:
      'Consultație dermatologică Meddera Bălți: acnee, psoriazis, eczeme. Tratamente pentru sănătatea pielii. Programări online.',
    images: ['https://meddera.md/assets/img/services/consult-derm.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage2Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Consultație Dermatologică în Bălți | Clinica Meddera'}
      heroImage={consultderm}
      heroImageAlt={'Consultația dermatologică — clinica Meddera, Bălți'}
    >
      <p>
        Consultația dermatologică este o vizită specializată la medicul dermatolog,
        în cadrul căreia
        se
        realizează o evaluare completă a stării pielii. În timpul consultației,
        medicul analizează
        simptomele care îl îngrijorează pe pacient, identifică posibilele cauze
        ale afecțiunilor
        cutanate și elaborează un plan de tratament individualizat. Dermatologul
        poate recomanda
        analize
        necesare și investigații instrumentale pentru un diagnostic precis.
        Consultația include
        recomandări pentru îngrijirea pielii și stilul de viață, care ajută
        la prevenirea
        dezvoltării
        afecțiunilor cutanate. Abordarea profesională permite depistarea și
        tratarea la timp a unor
        probleme precum eczema, psoriazisul, acneea, infecțiile fungice și
        reacțiile alergice,
        menținând
        sănătatea pielii pe termen lung.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage2Ro;
