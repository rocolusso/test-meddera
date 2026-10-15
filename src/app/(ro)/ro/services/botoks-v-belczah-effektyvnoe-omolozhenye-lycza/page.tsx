import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import botoks from '@public/assets/img/services/botoks.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza', 'ro'),
  title: 'Terapie antirid cu Botox în Bălți | Reîntinerește-ți aspectul',
  description:
    'Botox în Bălți: riduri de expresie și hiperhidroză. Tratament sigur la Meddera. Programează consultație pentru rejuvenare facială.',
  openGraph: {
    title: 'Terapie antirid cu Botox în Bălți | Reîntinerește-ți aspectul',
    description:
      'Botox în Bălți: riduri de expresie și hiperhidroză. Tratament sigur la Meddera. Programează consultație pentru rejuvenare facială.',

    url: 'https://meddera.md/ro/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/botoks.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terapie antirid cu Botox în Bălți | Reîntinerește-ți aspectul',
    description:
      'Botox în Bălți: riduri de expresie și hiperhidroză. Tratament sigur la Meddera. Programează consultație pentru rejuvenare facială.',

    images: ['https://meddera.md/assets/img/services/botoks.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage14Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Terapie antirid cu Botox în Bălți'}
      heroImage={botoks}
      heroImageAlt={'Terapie antirid Botox — clinica Meddera, Bălți'}
    >
      <p>
        Terapie antirid Botox este o procedură cosmetologică prin care, cu
        ajutorul injecțiilor cu toxină
        botulinică
        (botox), se blochează temporar impulsurile nervoase, relaxând mușchii,
        ceea ce permite reducerea
        intensității ridurilor și liniilor de pe față. Botoxul este deosebit de
        eficient în eliminarea
        ridurilor mimice de pe frunte, din jurul ochilor (laba gâștei), precum
        și între sprâncene
        (ridurile punții nasului). Procedura durează doar 15-30 de minute și
        nu necesită o perioadă
        lungă de recuperare, iar rezultatul devine vizibil după câteva zile
        și se menține timp de 4-6
        luni. Botoxul ajută nu doar la netezirea ridurilor, ci și la prevenirea
        apariției unor noi
        riduri, îmbunătățind aspectul general al pielii.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="botoks-v-belczah-effektyvnoe-omolozhenye-lycza"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage14Ro;
