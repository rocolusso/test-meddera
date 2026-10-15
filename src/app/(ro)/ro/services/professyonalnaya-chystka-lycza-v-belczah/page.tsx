import React from 'react';

import { bilingualAlternates } from '@/lib/hreflang';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import ServiceSeoContent from '@/components/service/ServiceSeoContent';
import chistkaLica from '@public/assets/img/services/chistka_lica.jpg';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: bilingualAlternates('/services/professyonalnaya-chystka-lycza-v-belczah', 'ro'),
  title: 'Curățare facială profesională în Bălți | Îngrijire completă a tenului',
  description:
    'Curățare facială profesională în Bălți: ten curat, tratamente personalizate. Specialiști Meddera, programări online.',
  openGraph: {
    title: 'Curățare facială profesională în Bălți | Îngrijire completă a tenului',
    description:
      'Curățare facială profesională în Bălți: ten curat, tratamente personalizate. Specialiști Meddera, programări online.',

    url: 'https://meddera.md/ro/services/professyonalnaya-chystka-lycza-v-belczah',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/chistka_lica.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curățare facială profesională în Bălți | Îngrijire completă a tenului',
    description:
      'Curățare facială profesională în Bălți: ten curat, tratamente personalizate. Specialiști Meddera, programări online.',

    images: ['https://meddera.md/assets/img/services/chistka_lica.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage3Ro() {
  return (
    <ContentPageShell
      locale="ro"
      title={'Curățare facială profesională în Bălți | Îngrijire completă a tenului'}
      heroImage={chistkaLica}
      heroImageAlt={'Curățirea feței — clinica Meddera, Bălți'}
    >
      <p>
        Curățirea feței este o procedură cosmetică menită să ofere o
        curățare profundă a pielii și
        să
        îmbunătățească textura și culoarea acesteia. Procedura ajută la
        eliminarea impurităților,
        excesului de sebum și a celulelor moarte, contribuind astfel la
        micșorarea porilor și la
        reducerea riscului de inflamații.

        Există mai multe tipuri de curățare, inclusiv mecanică, cu ultrasunete
        și combinată,
        alegerea
        acestora depinzând de starea pielii și de nevoile sale. După o
        consultație, medicul
        selectează
        metoda optimă și efectuează procedura, luând în considerare toate
        particularitățile pielii
        pacientului.
      </p>
      <ServiceSeoContent
        locale="ro"
        slug="professyonalnaya-chystka-lycza-v-belczah"
        title={metadata.title}
        description={metadata.description}
      />

    </ContentPageShell>
  );
}

export default ServicePage3Ro;
