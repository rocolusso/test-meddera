import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import pilling from '@public/assets/img/services/pilling.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy', 'ro'),
  title: 'Peeling facial profesional în Bălți – Reînnoiește-ți pielea cu Meddera',
  description:
    'Peeling facial în Bălți: reînnoirea tenului, tratamente personalizate după tipul de piele. Consultație la clinica Meddera. Programează-te online.',
  openGraph: {
    title: 'Peeling facial profesional în Bălți – Reînnoiește-ți pielea cu Meddera',
    description:
      'Peeling facial în Bălți: reînnoirea tenului, tratamente personalizate după tipul de piele. Consultație la clinica Meddera. Programează-te online.',

    url: 'https://meddera.md/ro/services/pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/pilling.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peeling facial profesional în Bălți – Reînnoiește-ți pielea cu Meddera',
    description:
      'Peeling facial în Bălți: reînnoirea tenului, tratamente personalizate după tipul de piele. Consultație la clinica Meddera. Programează-te online.',

    images: ['https://meddera.md/assets/img/services/pilling.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage6Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Peeling facial profesional în Bălți – piele reînnoită'}
      heroImage={pilling}
      heroImageAlt={'Peelingul — clinica Meddera, Bălți'}
    >
      <p>
        Peelingul este o procedură cosmetică menită să reînnoiască și să îmbunătățească
        starea pielii prin îndepărtarea celulelor moarte de pe suprafața acesteia. Există mai
        multe tipuri de peelinguri: chimic, mecanic, fiecare fiind potrivit pentru rezolvarea
        diverselor
        probleme, cum ar fi tenul problematic, porii dilatați, pigmentarea, ridurile fine și
        neregularitățile
        texturii. Procedura stimulează reînnoirea celulară, ceea ce ajută la
        îmbunătățirea culorii
        și tonusului
        pielii, făcând-o mai netedă și radiantă. Un peeling profesional,
        realizat ținând cont de
        tipul și
        starea pielii, nu doar că reîmprospătează aspectul acesteia, ci și
        reduce vizibilitatea
        semnelor de îmbătrânire.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="pylyng-v-belczah-obnovlenye-y-syyanye-vashej-kozhy"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage6Ro;
