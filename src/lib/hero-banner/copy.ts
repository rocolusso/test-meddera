/**
 * Texts of the home-page banner, one object per locale. Same six scenes in both languages.
 * In a line, text between asterisks is highlighted in the accent colour.
 * No prices, days or hours of reception, and nothing that suggests the consultation is free.
 */
export type HeroBannerLocale = 'ru' | 'ro';

export type HeroBannerCopy = {
  /** Accessible name of the section. */
  label: string;
  /** Read once by screen readers, in place of the animated scenes. */
  thesis: string;
  tag: string;
  scroll: string;
  scene1: { title: string[]; sub: string };
  scene2: { title: string[] };
  scene3: { title: string[]; sub: string };
  scene4: { title: string[]; note: string[] };
  scene5: { steps: string[]; title: string[] };
  scene6: { name: string; role: string; cta: string };
  /** Floating tags next to the photo: acne, pigmentation, moles, wrinkles. */
  plates: [string, string, string, string];
  photoAlt: string;
};

const NBSP = ' ';

export const HERO_BANNER_COPY: Record<HeroBannerLocale, HeroBannerCopy> = {
  ru: {
    label: 'Екатерина Пынтя, дерматолог в Бельцах',
    thesis: 'Екатерина Пынтя — ваш дерматолог в Бельцах. Врач-дерматовенеролог 1 категории и косметолог, клиника Meddera.',
    tag: 'Meddera · Бельцы',
    scroll: 'Листайте',
    scene1: { title: ['Прыщи, пятна,', 'родинки, морщины.'], sub: 'Что из этого про вас?' },
    scene2: { title: [`Не гадайте и${NBSP}не${NBSP}лечитесь`, 'по *форумам*.'] },
    scene3: { title: ['Екатерина', 'Пынтя'], sub: 'ваш дерматолог в Бельцах' },
    scene4: {
      title: ['*11 лет* опыта'],
      note: ['Врач-дерматовенеролог 1 категории', 'и косметолог'],
    },
    scene5: {
      steps: ['Осмотр', 'Диагноз', 'План лечения'],
      title: ['Решение вы принимаете', 'после консультации.'],
    },
    scene6: {
      name: 'Екатерина Пынтя',
      role: 'Дерматолог · клиника Meddera · Бельцы',
      cta: 'Записаться на консультацию',
    },
    plates: ['Акне', 'Пигментация', 'Родинки', 'Морщины'],
    photoAlt: 'Екатерина Пынтя, дерматолог',
  },
  ro: {
    label: 'Ecaterina Pîntea, dermatolog în Bălți',
    thesis:
      'Ecaterina Pîntea — dermatologul dumneavoastră din Bălți. Medic dermatovenerolog de categoria I și cosmetolog, clinica Meddera.',
    tag: 'Meddera · Bălți',
    scroll: 'Derulați',
    scene1: { title: ['Acnee, pete,', 'alunițe, riduri.'], sub: 'Care dintre ele vă privește?' },
    scene2: { title: [`Nu ghiciți și${NBSP}nu vă tratați`, 'după *forumuri*.'] },
    scene3: { title: ['Ecaterina', 'Pîntea'], sub: 'dermatologul dumneavoastră din Bălți' },
    scene4: {
      title: ['*Peste 11 ani*', 'de experiență'],
      note: ['Medic dermatovenerolog de categoria I', 'și cosmetolog'],
    },
    scene5: {
      steps: ['Examinare', 'Diagnostic', 'Plan de tratament'],
      title: ['Decizia o luați', 'după consultație.'],
    },
    scene6: {
      name: 'Ecaterina Pîntea',
      role: 'Dermatolog · clinica Meddera · Bălți',
      cta: 'Programați-vă la consultație',
    },
    plates: ['Acnee', 'Pigmentare', 'Alunițe', 'Riduri'],
    photoAlt: 'Ecaterina Pîntea, dermatolog',
  },
};
