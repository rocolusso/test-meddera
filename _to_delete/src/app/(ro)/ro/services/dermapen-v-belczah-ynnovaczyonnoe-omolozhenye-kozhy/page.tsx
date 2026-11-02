import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import dermapen from '@public/assets/img/services/dermapen.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy', 'ro'),
  title: 'Dermapen Bălți - Tratament Microneedling pentru Rejuvenare Facială',
  description:
    'Dermapen în Bălți: microneedling pentru rejuvenare facială, cicatrici fine și textură uniformă a tenului. Programări la clinica Meddera, consultație prealabilă.',
  openGraph: {
    title: 'Dermapen Bălți - Tratament Microneedling pentru Rejuvenare Facială',
    description:
      'Dermapen în Bălți: microneedling pentru rejuvenare facială, cicatrici fine și textură uniformă a tenului. Programări la clinica Meddera, consultație prealabilă.',

    url: 'https://meddera.md/ro/services/dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/dermapen.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dermapen Bălți - Tratament Microneedling pentru Rejuvenare Facială',
    description:
      'Dermapen în Bălți: microneedling pentru rejuvenare facială, cicatrici fine și textură uniformă a tenului. Programări la clinica Meddera, consultație prealabilă.',

    images: ['https://meddera.md/assets/img/services/dermapen.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage10Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Dermapen Bălți – microneedling pentru rejuvenare facială'}
      heroImage={dermapen}
      heroImageAlt={'Dermapen — clinica Meddera, Bălți'}
    >
      <p>
        Dermapen este o procedură cosmetologică bazată pe micro-needling,
        prin care, cu ajutorul unui
        dispozitiv cu multe ace mici, se creează daune microscopice la
        nivelul pielii. Acest lucru
        stimulează procesele naturale de regenerare și producția de colagen,
        ceea ce contribuie la
        îmbunătățirea texturii pielii, reducerea porilor, diminuarea
        ridurilor și combaterea
        post-acneei, cicatricilor și vergeturilor. Dermapen permite îmbunătățirea
        tonusului pielii,
        uniformizarea culorii acesteia și o face mai fermă. Procedura este
        sigură și eficientă, nu
        necesită o perioadă lungă de recuperare și este potrivită pentru
        toate tipurile de piele.
        Rezultatele devin vizibile după câteva ședințe.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="dermapen-v-belczah-ynnovaczyonnoe-omolozhenye-kozhy"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage10Ro;
