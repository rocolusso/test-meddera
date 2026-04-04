import React from 'react';

import {
  HomeSeoBulletList,
  HomeSeoFeatureCard,
  HomeSeoFeatureGrid,
  HomeSeoPanel,
  HomeSeoShell,
} from '@/components/new-ui/HomeSeoPrimitives';

const faqItemClass =
  'rounded-lg border-l-2 border-brand-gold/50 bg-muted/15 py-2 pl-4 pr-2 text-sm leading-relaxed sm:text-base';

/**
 * SEO-текст на главной (RO), видимый пользователям и поисковым системам.
 */
export default function HomeSeoContentRo() {
  return (
    <HomeSeoShell
      ariaLabel="Informații despre clinică și servicii"
      eyebrow="Informații pentru pacienți"
      title="Dermatolog Bălți — consultații dermatologice profesionale"
      intro={<>Îngrijire dermatologică de calitate la clinica Meddera din Bălți.</>}
    >
      <HomeSeoPanel title="Serviciile noastre dermatologice">
        <HomeSeoBulletList
          items={[
            'Consultații dermatologice pentru adulți și copii',
            'Tratamentul acneei și altor afecțiuni ale pielii',
            'Dermatoscopie pentru evaluarea alunițelor',
            'Proceduri cosmetice dermatologice',
          ]}
        />
      </HomeSeoPanel>

      <HomeSeoPanel title="De ce să alegi Meddera?" className="md:col-span-2">
        <HomeSeoFeatureGrid>
          <HomeSeoFeatureCard title="Experiență și profesionalism">
            Medicii noștri dermatologi au o vastă experiență în diagnosticarea și tratarea diverselor afecțiuni ale
            pielii.
          </HomeSeoFeatureCard>
          <HomeSeoFeatureCard title="Tehnologie modernă">
            Utilizăm echipamente de ultimă generație pentru a asigura cele mai bune rezultate în tratamentele
            dermatologice.
          </HomeSeoFeatureCard>
          <HomeSeoFeatureCard title="Abordare personalizată">
            Fiecare pacient beneficiază de un plan de tratament adaptat nevoilor sale specifice.
          </HomeSeoFeatureCard>
          <HomeSeoFeatureCard title="Accesibilitate și confort">
            Clinica noastră este situată în centrul Bălțiului, oferind un mediu confortabil și accesibil pentru toți
            pacienții.
          </HomeSeoFeatureCard>
        </HomeSeoFeatureGrid>
      </HomeSeoPanel>

      <HomeSeoPanel title="Programează-te acum">
        <p>
          Nu amâna sănătatea pielii tale. Programează o consultație cu un dermatolog în Bălți la clinica Meddera.
        </p>
      </HomeSeoPanel>

      <HomeSeoPanel title="Întrebări frecvente" className="md:col-span-2">
        <ul className="space-y-3">
          <li className={faqItemClass}>
            <strong className="text-foreground">Cât durează o consultație dermatologică?</strong>
            <span className="text-muted-foreground"> Aproximativ 30 de minute.</span>
          </li>
          <li className={faqItemClass}>
            <strong className="text-foreground">Este necesară o programare în avans?</strong>
            <span className="text-muted-foreground">
              {' '}
              Da, recomandăm programarea prealabilă pentru a evita timpii de așteptare.
            </span>
          </li>
          <li className={faqItemClass}>
            <strong className="text-foreground">Oferiți tratamente pentru afecțiuni cronice ale pielii?</strong>
            <span className="text-muted-foreground">
              {' '}
              Da, tratăm o gamă largă de afecțiuni dermatologice, inclusiv cele cronice.
            </span>
          </li>
          <li className={faqItemClass}>
            <strong className="text-foreground">Acceptați asigurări medicale?</strong>
            <span className="text-muted-foreground"> Da, colaborăm cu diverse companii de asigurări medicale.</span>
          </li>
        </ul>
      </HomeSeoPanel>

      <HomeSeoPanel title="Contactează-ne">
        <p>
          Telefon:
          {' '}
          <a
            href="tel:+37368550030"
            className="font-semibold text-foreground underline decoration-brand-gold/50 underline-offset-4 transition-colors hover:text-brand-gold"
          >
            +373 685 500 30
          </a>
        </p>
        <p className="mt-3">Adresă: str. Ștefan cel Mare, 13, Bălți, Moldova</p>
      </HomeSeoPanel>
    </HomeSeoShell>
  );
}
