/**
 * Texts of the banner on the lip enlargement pages (service page and the blog pages about lips),
 * same six scenes as the home banner, in both languages. In a line, text between asterisks is
 * highlighted in the accent colour.
 * Rules of the home banner apply: no prices, days or hours of reception, nothing that suggests the
 * consultation is free, no promises of a result. Only facts that are on the site already: the
 * doctor's category and experience (About page) and the certified hyaluronic acid fillers (service page).
 */
import type { HeroBannerCopy, HeroBannerLocale } from '@/lib/hero-banner/copy';

export const LIPS_BANNER_COPY: Record<HeroBannerLocale, HeroBannerCopy> = {
  ru: {
    label: 'Увеличение губ в Бельцах, врач Екатерина Пынтя',
    thesis:
      'Увеличение губ в Бельцах у врача Екатерины Пынтя. Врач-дерматовенеролог 1 категории и косметолог, клиника Meddera. Форму и объём подбирают индивидуально, решение вы принимаете после консультации.',
    tag: 'Meddera · Бельцы',
    scroll: 'Листайте',
    scene1: { title: ['Больше объёма', 'без «утиных» губ.'], sub: 'Увеличение губ в Бельцах' },
    scene2: { title: ['Форму и объём подбираем', '*под черты вашего лица*.'] },
    scene3: { title: ['Гиалуроновая', '*кислота*'], sub: 'Сертифицированные филлеры' },
    scene4: {
      title: ['*11 лет* опыта'],
      note: ['Врач-дерматовенеролог 1 категории', 'и косметолог'],
    },
    scene5: {
      steps: ['Консультация', 'Подбор', 'Процедура'],
      title: ['Решение вы принимаете', 'после консультации.'],
    },
    scene6: {
      name: 'Екатерина Пынтя',
      role: 'Увеличение губ · Meddera · Бельцы',
      cta: 'Записаться на увеличение губ',
    },
    plates: ['Форма', 'Объём', 'Симметрия', 'Естественность'],
    photoAlt: 'Екатерина Пынтя, дерматолог',
  },
  ro: {
    label: 'Mărirea buzelor în Bălți, medic Ecaterina Pîntea',
    thesis:
      'Mărirea buzelor în Bălți la medicul Ecaterina Pîntea. Medic dermatovenerolog de categoria I și cosmetolog, clinica Meddera. Forma și volumul se aleg individual, decizia o luați după consultație.',
    tag: 'Meddera · Bălți',
    scroll: 'Derulați',
    scene1: { title: ['Mai mult volum,', 'fără buze „de rață”.'], sub: 'Mărirea buzelor în Bălți' },
    scene2: { title: ['Alegem forma și volumul', '*după trăsăturile feței*.'] },
    scene3: { title: ['Acid', '*hialuronic*'], sub: 'Filler-e certificate' },
    scene4: {
      title: ['*Peste 11 ani*', 'de experiență'],
      note: ['Medic dermatovenerolog de categoria I', 'și cosmetolog'],
    },
    scene5: {
      steps: ['Consultație', 'Alegere', 'Procedura'],
      title: ['Decizia o luați', 'după consultație.'],
    },
    scene6: {
      name: 'Ecaterina Pîntea',
      role: 'Mărirea buzelor · Meddera · Bălți',
      cta: 'Programare la mărirea buzelor',
    },
    plates: ['Formă', 'Volum', 'Simetrie', 'Naturalețe'],
    photoAlt: 'Ecaterina Pîntea, dermatolog',
  },
};
