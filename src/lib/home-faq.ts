import { RECEPTION_SCHEDULE_COPY } from '@/lib/contact-reception-schedule';

export type HomeFaqItem = { question: string; answer: string };

const ro = RECEPTION_SCHEDULE_COPY.ro;

/** FAQ on the RO home page. The same list feeds the visible block and the FAQPage markup. */
export const HOME_FAQ_RO: HomeFaqItem[] = [
  {
    question: 'Cum mă pot programa la consultație?',
    answer:
      'Vă puteți programa la telefon +373 685 500 30 sau prin formularul de programare de pe site. Consultațiile se fac cu programare prealabilă.',
  },
  {
    question: 'Care este programul de primire?',
    answer: `${ro.daysSummary} Consultații cu programare prealabilă, ${ro.hoursRange}.`,
  },
  {
    question: 'Unde se află clinica?',
    answer: 'Clinica Meddera se află în centrul orașului Bălți, pe strada Ștefan cel Mare, 13.',
  },
  {
    question: 'Ce include o consultație dermatologică?',
    answer: 'Consultația include examinarea pielii, diagnosticul, recomandările și planul de tratament.',
  },
  {
    question: 'Ce afecțiuni ale pielii se tratează?',
    answer:
      'Se tratează acneea, eczemele, psoriazisul și alte afecțiuni ale pielii. Planul de tratament se stabilește după examinare.',
  },
  {
    question: 'Cum mă pregătesc pentru vizită?',
    answer:
      'Pregătiți lista simptomelor și a întrebărilor și spuneți medicului ce medicamente și produse de îngrijire folosiți.',
  },
];
