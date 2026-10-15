import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import lipolitiki from '@public/assets/img/services/lipolitiki.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/ynjekczyy-lypolytykov-v-belczah', 'ro'),
  title: 'Lipoliză Injectabilă în Bălți – Redefinirea Siluetei',
  description:
    'Lipoliză injectabilă în Bălți: grăsime localizată, fără operație. Consultație la Meddera. Programează-te online.',
  openGraph: {
    title: 'Lipoliză Injectabilă în Bălți – Redefinirea Siluetei',
    description:
      'Lipoliză injectabilă în Bălți: grăsime localizată, fără operație. Consultație la Meddera. Programează-te online.',

    url: 'https://meddera.md/ro/services/ynjekczyy-lypolytykov-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/lipolitiki.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lipoliză Injectabilă în Bălți – Redefinirea Siluetei',
    description:
      'Lipoliză injectabilă în Bălți: grăsime localizată, fără operație. Consultație la Meddera. Programează-te online.',

    images: ['https://meddera.md/assets/img/services/lipolitiki.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage17Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Lipoliză Injectabilă în Bălți – Redefinirea Siluetei'}
      heroImage={lipolitiki}
      heroImageAlt={'Injecții lipolitice — clinica Meddera, Bălți'}
    >
      <p>
        Lipolitice sunt o procedură destinată reducerii depozitelor
        localizate de grăsime
        și îmbunătățirii contururilor corpului și feței. Lipoliticii
        sunt preparate care conțin
        substanțe active ce ajută la descompunerea grăsimii și eliminarea
        acesteia din organism,
        contribuind astfel la reducerea volumelor în zonele problematice.
        Administrarea lipoliticilor
        poate fi utilizată pentru corectarea unor zone precum bărbia
        (cutele bărbiei), zona abdominală,
        coapsele, fesele și partea interioară a brațelor. Procedura nu
        necesită intervenție chirurgicală
        și permite obținerea unui efect natural și de lungă durată, fiind
        de obicei necesare mai multe
        ședințe pentru a atinge rezultatele optime. Lipoliticii contribuie
        la îmbunătățirea
        contururilor, ridicarea pielii și la uniformizarea generală a siluetei.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="ynjekczyy-lypolytykov-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage17Ro;
