/**
 * Texts of the banner at the end of the lip enlargement pages: an invitation to answer the five
 * questions of the lips quiz before booking, in both languages.
 * Rules of the other banners apply: no prices, days or hours of reception, nothing that suggests the
 * consultation is free, no promises of a result, no dashes. "The doctor sees the answers" is true:
 * the answers go to the clinic together with the request.
 *
 * `questions` are shortened forms of the quiz questions (the quiz ones are too long for the card),
 * in the order and with the keys of LIPS_QUIZ; scripts/verify-lips-lead.mjs checks that.
 */
import type { HeroBannerLocale } from '@/lib/hero-banner/copy';

export type LipsEndBannerCopy = {
  /** aria-label of the section */
  label: string;
  title: string;
  sub: string;
  cta: string;
  /** under the button */
  note: string;
  /** "of" in "1 of 5" */
  of: string;
  questions: readonly { key: string; text: string }[];
};

export const LIPS_END_BANNER_COPY: Record<HeroBannerLocale, LipsEndBannerCopy> = {
  ru: {
    label: 'Короткий опрос перед увеличением губ',
    title: 'Подойдёт ли вам увеличение губ?',
    sub: 'Пять вопросов до записи. Врач увидит ваши ответы ещё до консультации.',
    cta: 'Пройти опрос',
    note: 'и записаться на консультацию',
    of: 'из',
    questions: [
      { key: 'lips_herpes', text: 'Есть ли сейчас герпес или воспаление возле губ?' },
      { key: 'lips_previous', text: 'Проводились ли раньше процедуры на губах?' },
      { key: 'lips_swelling', text: 'Склонны ли вы к отёкам и синякам?' },
      { key: 'lips_allergy', text: 'Есть ли аллергия на препараты или анестетики?' },
      { key: 'lips_recovery', text: 'Сколько времени готовы уделить восстановлению?' },
    ],
  },
  ro: {
    label: 'Chestionar scurt înainte de mărirea buzelor',
    title: 'Vi se potrivește mărirea buzelor?',
    sub: 'Cinci întrebări înainte de programare. Medicul vă vede răspunsurile înainte de consultație.',
    cta: 'Începeți chestionarul',
    note: 'și programați-vă la consultație',
    of: 'din',
    questions: [
      { key: 'lips_herpes', text: 'Aveți acum herpes sau inflamație în jurul buzelor?' },
      { key: 'lips_previous', text: 'Ați făcut anterior proceduri la nivelul buzelor?' },
      { key: 'lips_swelling', text: 'Aveți predispoziție la edeme și vânătăi?' },
      { key: 'lips_allergy', text: 'Aveți alergii la preparate sau anestezice?' },
      { key: 'lips_recovery', text: 'Cât timp puteți aloca perioadei de recuperare?' },
    ],
  },
};
