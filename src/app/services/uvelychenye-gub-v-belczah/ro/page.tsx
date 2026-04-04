import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import uvelichenieGub from '../../../../../public/assets/img/services/uvelicheniegub.png';
import uvelichenieGub1 from '../../../../../public/assets/img/services/lips/lips1.png';
import uvelichenieGub2 from '../../../../../public/assets/img/services/lips/lips2.png';
import uvelichenieGub3 from '../../../../../public/assets/img/services/lips/lips3.png';
import uvelichenieGub4 from '../../../../../public/assets/img/services/lips/lips4.png';
import uvelichenieGub5 from '../../../../../public/assets/img/services/lips/lips5.png';
import uvelichenieGub6 from '../../../../../public/assets/img/services/lips/lips6.png';
import uvelichenieGub7 from '../../../../../public/assets/img/services/lips/lips7.png';
import uvelichenieGub8 from '../../../../../public/assets/img/services/lips/lips8.png';
import uvelichenieGub9 from '../../../../../public/assets/img/services/lips/lips9.png';
import uvelichenieGub10 from '../../../../../public/assets/img/services/lips/lips10.png';

export const metadata = {
  icons: { icon: '/favicon.ico' },
  alternates: { canonical: 'https://meddera.md/services/uvelychenye-gub-v-belczah/ro' },
  title: 'Mărire buze în Bălți — Proceduri eficiente și sigure',
  description:
    'Mărire buze în Bălți: conturare, acid hialuronic, fillere sigure. Consultație și tratament la clinica Meddera.',
  openGraph: {
    title: 'Mărire buze în Bălți — Proceduri eficiente și sigure',
    description:
      'Mărire buze în Bălți: conturare, acid hialuronic, fillere sigure. Consultație și tratament la clinica Meddera.',
    url: 'https://meddera.md/services/uvelychenye-gub-v-belczah/ro',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/uvelicheniegub.png',
        width: 1200,
        height: 630,
        alt: 'Ekaterina Pyntya – Dermatolog-cosmetolog în Bălți',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mărire buze în Bălți — Proceduri eficiente și sigure',
    description:
      'Mărire buze în Bălți: conturare, acid hialuronic, fillere sigure. Consultație și tratament la clinica Meddera.',
    images: ['https://meddera.md/assets/img/services/uvelicheniegub.png'],
    site: '@your_twitter_handle',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cât durează efectul?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'În general 6-12 luni, în funcție de particularitățile individuale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Este dureroasă procedura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Practic nedureroasă datorită anesteziei locale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Se poate repeta procedura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, dacă este necesar și cu acordul medicului.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cum să mă pregătesc?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evitați alcoolul și medicamentele care subțiază sângele cu 2-3 zile înainte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce tip de fillere se folosesc?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fillere certificate pe bază de acid hialuronic.',
      },
    },
  ],
};

function ServicePageMoneyRO() {
  return (
    <>
      <script
        type="application/ld+json"
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContentPageShell variant="custom" locale="ro" contactsVariant="lips">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl max-w-3xl">
          Mărire buze în Bălți — sigur, frumos și natural
        </h1>
        <div className="mx-auto mt-5 h-px w-16 bg-border md:mx-0" aria-hidden />

        <p className="mt-6 max-w-3xl text-center text-sm text-muted-foreground md:text-left">
          <Link
            href="/ro/blog/marire-buzelor-balti"
            className="font-medium text-brand-gold underline-offset-4 hover:underline"
          >
            Ghid despre procedură (blog)
          </Link>
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/90">
          Conturarea buzelor cu fillere certificate pe bază de acid hialuronic este o procedură modernă și sigură pentru
          corectarea formei, volumului și simetriei buzelor. În clinica Meddera, dermatologul cosmetolog experimentat
          ajustează schema procedurii pentru a obține un rezultat natural și armonios. Efectul este vizibil imediat
          și durează până la 12 luni.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="relative aspect-[6/5] w-full max-w-xl overflow-hidden rounded-2xl bg-muted/40 shadow-lg ring-1 ring-border/50">
            <Image
              src={uvelichenieGub}
              alt="Mărire buze în Bălți"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 576px"
              priority
            />
          </div>
        </div>

        <div className="mt-12 flex w-full max-w-3xl flex-col">
          <h2 className="text-2xl font-semibold text-foreground">Avantajele procedurii la Meddera</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/90">
            <li>Dermatolog-cosmetolog experimentat cu educație medicală</li>
            <li>Fillere certificate de înaltă calitate</li>
            <li>Alegerea individuală a volumului și formei buzelor</li>
            <li>Echipament modern și condiții sterile</li>
            <li>Rezultat natural cu efect imediat</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">Cum decurge procedura de mărire a buzelor</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-foreground/90">
            <li>Consultație cu medicul, evaluarea formei buzelor și alegerea filler-ului</li>
            <li>Curățarea pielii și aplicarea cremei anestezice</li>
            <li>Injectarea filler-ului cu canule sau ace fine</li>
            <li>Corectarea formei, eliminarea asimetriei și modelarea conturului</li>
            <li>Recomandări pentru îngrijire după procedură</li>
          </ol>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">Rezultatele procedurii — foto înainte și după</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[uvelichenieGub1, uvelichenieGub2, uvelichenieGub3, uvelichenieGub4, uvelichenieGub5, uvelichenieGub6, uvelichenieGub7, uvelichenieGub8, uvelichenieGub9, uvelichenieGub10].map(
              (src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Foto înainte și după buze ${i + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md ring-1 ring-border/40"
                />
              ),
            )}
          </div>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">Contraindicații</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/90">
            <li>Sarcină și alăptare</li>
            <li>Procese inflamatorii în zona buzelor</li>
            <li>Reacții alergice la componentele filler-ului</li>
            <li>Unele boli cronice — conform recomandării medicului</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">De ce să alegi Meddera pentru mărirea buzelor</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/90">
            <li>Ekaterina Pyntya — medic dermatolog-cosmetolog certificat, cu peste 10 ani experiență</li>
            <li>Peste 500 de clienți mulțumiți cu rezultate naturale</li>
            <li>Produse certificate, sigure pentru sănătate</li>
            <li>Sistem flexibil de programare și consultații online</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-foreground">Întrebări frecvente</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-foreground/90">
            <li>
              <strong className="text-foreground">Cât durează efectul?</strong>
              {' '}
              În general 6-12 luni, în funcție de
              particularitățile individuale.
            </li>
            <li>
              <strong className="text-foreground">Este dureroasă procedura?</strong>
              {' '}
              Practic nedureroasă datorită
              anesteziei locale.
            </li>
            <li>
              <strong className="text-foreground">Se poate repeta procedura?</strong>
              {' '}
              Da, dacă este necesar și cu
              acordul medicului.
            </li>
            <li>
              <strong className="text-foreground">Cum să mă pregătesc?</strong>
              {' '}
              Evitați alcoolul și medicamentele care
              subțiază sângele cu 2-3 zile înainte.
            </li>
            <li>
              <strong className="text-foreground">Ce tip de fillere se folosesc?</strong>
              {' '}
              Fillere certificate pe bază de
              acid hialuronic.
            </li>
          </ul>
        </div>

        <div className="mt-12 rounded-xl border border-border/50 bg-muted/30 p-6 text-center">
          <p className="font-semibold text-lg text-foreground">Gata să îți evidențiezi frumusețea?</p>
          <p className="mt-2 text-foreground/90">Contactează-ne telefonic sau programează o consultație online.</p>
        </div>
      </ContentPageShell>
    </>
  );
}

export default ServicePageMoneyRO;
