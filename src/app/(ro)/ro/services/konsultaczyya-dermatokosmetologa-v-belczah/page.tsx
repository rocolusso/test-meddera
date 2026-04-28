import React from 'react';

import ContentPageShell from '@/components/new-ui/ContentPageShell';
import { VisuallyHidden } from '@/components/Visually-hidden';
import consultcosm from '@public/assets/img/services/consult-cosm.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/ro/services/konsultaczyya-dermatokosmetologa-v-belczah',
  },
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

      <VisuallyHidden>
        <div className="seo-block bg-gray-400">
          <section>
            <p className="font-semibold">Consultație la medicul dermatocosmetolog în Bălți</p>
            <p>
              Descoperă secretul unei pieli sănătoase și strălucitoare cu ajutorul specialiștilor noștri.
            </p>
          </section>
          <section>
            <h2>De ce să alegi o consultație dermatocosmetologică?</h2>
            <ul>
              <li>
                <strong>Diagnostic precis:</strong>
                {' '}
                Identificăm corect afecțiunile pielii tale.
              </li>
              <li>
                <strong>Plan de tratament personalizat:</strong>
                {' '}
                Soluții adaptate nevoilor individuale.
              </li>
              <li>
                <strong>Prevenție eficientă:</strong>
                {' '}
                Evităm agravarea problemelor dermatologice.
              </li>
            </ul>
          </section>
          <section>
            <h2>Serviciile noastre dermatocosmetologice</h2>
            <article>
              <h3>Tratamentul acneei</h3>
              <p>Eliminăm acneea și prevenim recidivele prin terapii moderne și eficiente.</p>
            </article>
            <article>
              <h3>Corectarea pigmentării</h3>
              <p>Reducem petele pigmentare și uniformizăm tonul pielii pentru un aspect luminos.</p>
            </article>
            <article>
              <h3>Rejuvenare facială</h3>
              <p>Redăm elasticitatea și fermitatea pielii prin proceduri non-invazive.</p>
            </article>
            <article>
              <h3>Îngrijirea pielii sensibile</h3>
              <p>Oferim soluții delicate pentru tenurile sensibile, reducând roșeața și iritațiile.</p>
            </article>
          </section>
          <section>
            <h2>Beneficiile colaborării cu noi</h2>
            <p>
              La clinica noastră din Bălți, beneficiezi de expertiza unui medic dermatocosmetolog cu experiență vastă, echipamente de ultimă generație și o abordare centrată pe pacient.
            </p>
          </section>
          <section>
            <h2>Testimoniale ale pacienților</h2>
            <ul>
              <li>După doar câteva ședințe, tenul meu a devenit vizibil mai curat și luminos. – Maria, 28 ani</li>
              <li>Profesionalism și atenție la detalii. Recomand cu încredere! – Andrei, 35 ani</li>
              <li>Am scăpat de petele pigmentare care mă deranjau de ani de zile. – Elena, 42 ani</li>
              <li>O experiență plăcută și rezultate peste așteptări. – Ion, 30 ani</li>
            </ul>
          </section>
          <section>
            <h2>Programează-te acum</h2>
            <p>
              Nu amâna grija pentru pielea ta. Contactează-ne pentru o consultație personalizată și începe transformarea către o piele sănătoasă și radiantă.
            </p>
          </section>
        </div>
      </VisuallyHidden>
    </ContentPageShell>
  );
}

export default ServicePage1Ro;
