/**
 * Call-to-action registry: one entry per service (plus the consultation fallback).
 * Used by the lead quiz (chip "Процедура: …"), the cards at the end of articles
 * and hubs, the scroll teaser and the server-side allowlist of /api/lead-quiz-form.
 *
 * Pure data and pure functions on purpose: scripts/verify-cta.mjs loads this file in Node.
 * Tone decides only the button label: 'procedure' → "Записаться на процедуру",
 * 'medical' → "Записаться на приём". The texts themselves were approved by the owner.
 */

import { SERVICE_SLUG, servicesForArticle, servicesForCluster } from '@/blog-data/article-services';
import { CTA_KEYS, LEAD_QUIZ_SOURCES, isCtaKey, isLeadQuizSource, type CtaKey, type LeadQuizSource } from '@/lib/cta/keys';

export { CTA_KEYS, LEAD_QUIZ_SOURCES, isCtaKey, isLeadQuizSource };
export type { CtaKey, LeadQuizSource };

type Bilingual = { ru: string; ro: string };
export type CtaLocale = 'ru' | 'ro';

export type CtaTone = 'procedure' | 'medical';

export type CtaEntry = {
  key: CtaKey;
  tone: CtaTone;
  /** Text after "Процедура: " in the quiz chip. Also stored as the quiz answer. */
  chip: Bilingual;
  cardTitle: Bilingual;
  cardText: Bilingual;
  teaser: Bilingual;
};

export const CTA_ENTRIES: Record<CtaKey, CtaEntry> = {
  botox: {
    key: 'botox',
    tone: 'procedure',
    chip: { ru: 'Ботокс', ro: 'Botox' },
    cardTitle: { ru: 'Записаться на ботокс', ro: 'Programare la botox' },
    cardText: {
      ru: 'Врач осмотрит зоны, где появляются морщины, и скажет, подойдёт ли вам ботокс. Решение о процедуре вы принимаете после консультации.',
      ro: 'Medicul va examina zonele în care apar riduri și vă va spune dacă botoxul este potrivit pentru dumneavoastră. Decizia despre procedură o luați după consultație.',
    },
    teaser: {
      ru: 'Подойдёт ли вам ботокс, скажет врач на приёме.',
      ro: 'Dacă botoxul vi se potrivește, vă spune medicul la consultație.',
    },
  },
  lips: {
    key: 'lips',
    tone: 'procedure',
    chip: { ru: 'Увеличение губ', ro: 'Mărirea buzelor' },
    cardTitle: { ru: 'Записаться на увеличение губ', ro: 'Programare la mărirea buzelor' },
    cardText: {
      ru: 'Врач оценит форму и объём губ и расскажет, каких результатов можно ожидать и какие препараты подходят. После консультации вы решаете, делать ли процедуру.',
      ro: 'Medicul va evalua forma și volumul buzelor și vă va spune ce rezultate se pot obține și ce preparate sunt potrivite. După consultație decideți dacă faceți procedura.',
    },
    teaser: {
      ru: 'Форму и объём губ врач оценит на консультации, до процедуры.',
      ro: 'Medicul evaluează forma și volumul buzelor la consultație, înainte de procedură.',
    },
  },
  bio: {
    key: 'bio',
    tone: 'procedure',
    chip: { ru: 'Биоревитализация', ro: 'Biorevitalizare' },
    cardTitle: { ru: 'Записаться на биоревитализацию', ro: 'Programare la biorevitalizare' },
    cardText: {
      ru: 'Врач оценит состояние кожи и скажет, подходит ли вам биоревитализация. Если процедура нужна, вместе выберем схему.',
      ro: 'Medicul va evalua starea pielii și vă va spune dacă biorevitalizarea este potrivită. Dacă procedura este necesară, alegem împreună schema.',
    },
    teaser: {
      ru: 'Подходит ли вам биоревитализация, покажет осмотр кожи.',
      ro: 'Dacă biorevitalizarea vă este potrivită, arată examinarea pielii.',
    },
  },
  fillers: {
    key: 'fillers',
    tone: 'procedure',
    chip: { ru: 'Контурная пластика', ro: 'Conturare cu filler-e' },
    cardTitle: { ru: 'Записаться на контурную пластику', ro: 'Programare la conturarea cu filler-e' },
    cardText: {
      ru: 'Врач оценит черты лица и скажет, какие зоны можно скорректировать филлерами. Всё обсуждаем до процедуры.',
      ro: 'Medicul va evalua trăsăturile feței și vă va spune ce zone pot fi corectate cu filler-e. Discutăm totul înainte de procedură.',
    },
    teaser: {
      ru: 'Какие зоны можно скорректировать филлерами, скажет врач на консультации.',
      ro: 'Ce zone pot fi corectate cu filler-e vă spune medicul la consultație.',
    },
  },
  meso: {
    key: 'meso',
    tone: 'procedure',
    chip: { ru: 'Мезотерапия лица', ro: 'Mezoterapia feței' },
    cardTitle: { ru: 'Записаться на мезотерапию лица', ro: 'Programare la mezoterapia feței' },
    cardText: {
      ru: 'Врач оценит состояние кожи и скажет, подходит ли вам мезотерапия и какие задачи она решает.',
      ro: 'Medicul va evalua starea pielii și vă va spune dacă mezoterapia este potrivită și ce probleme rezolvă.',
    },
    teaser: {
      ru: 'Подойдёт ли вам мезотерапия лица, решает врач после осмотра кожи.',
      ro: 'Dacă mezoterapia feței vă este potrivită, decide medicul după examinarea pielii.',
    },
  },
  peeling: {
    key: 'peeling',
    tone: 'procedure',
    chip: { ru: 'Пилинг', ro: 'Peeling' },
    cardTitle: { ru: 'Записаться на пилинг', ro: 'Programare la peeling' },
    cardText: {
      ru: 'Врач осмотрит кожу и подберёт тип пилинга под её состояние. Если пилинг сейчас не нужен, скажет об этом.',
      ro: 'Medicul va examina pielea și va alege tipul de peeling potrivit stării ei. Dacă peelingul nu este necesar acum, vă va spune.',
    },
    teaser: {
      ru: 'Какой пилинг подходит вашей коже, определяет врач на приёме.',
      ro: 'Ce tip de peeling se potrivește pielii dumneavoastră stabilește medicul la consultație.',
    },
  },
  derm: {
    key: 'derm',
    tone: 'medical',
    chip: { ru: 'Консультация дерматолога', ro: 'Consultație dermatolog' },
    cardTitle: { ru: 'Консультация дерматолога', ro: 'Consultație la dermatolog' },
    cardText: {
      ru: 'После осмотра и разговора о симптомах врач объяснит, что происходит с кожей и что делать дальше.',
      ro: 'După examinare și o discuție despre simptome, medicul vă va explica ce se întâmplă cu pielea și ce urmează.',
    },
    teaser: {
      ru: 'Если кожа беспокоит, её лучше показать врачу.',
      ro: 'Dacă pielea vă îngrijorează, este mai bine să o arătați medicului.',
    },
  },
  acne: {
    key: 'acne',
    tone: 'medical',
    chip: { ru: 'Терапия акне', ro: 'Terapia acneei' },
    cardTitle: { ru: 'Записаться к врачу по поводу акне', ro: 'Programare la medic pentru acnee' },
    cardText: {
      ru: 'Врач осмотрит кожу и предложит план лечения, выяснив возможные причины высыпаний.',
      ro: 'Medicul va examina pielea și va propune un plan de tratament, după ce află cauzele posibile ale erupțiilor.',
    },
    teaser: {
      ru: 'План лечения акне составляет врач после осмотра кожи.',
      ro: 'Planul de tratament pentru acnee îl stabilește medicul după examinarea pielii.',
    },
  },
  pigment: {
    key: 'pigment',
    tone: 'medical',
    chip: { ru: 'Пигментация', ro: 'Pigmentare' },
    cardTitle: { ru: 'Записаться к врачу по поводу пигментации', ro: 'Programare la medic pentru pigmentare' },
    cardText: {
      ru: 'После осмотра пятен и разговора о том, когда они появились, врач скажет, какое лечение подойдёт.',
      ro: 'După examinarea petelor și o discuție despre momentul în care au apărut, medicul vă va spune ce tratament este potrivit.',
    },
    teaser: {
      ru: 'Пигментные пятна врач оценивает на осмотре, до выбора лечения.',
      ro: 'Medicul evaluează petele pigmentare la examinare, înainte de a alege tratamentul.',
    },
  },
  meso_hair: {
    key: 'meso_hair',
    tone: 'medical',
    chip: { ru: 'Мезотерапия для волос', ro: 'Mezoterapia pentru păr' },
    cardTitle: { ru: 'Записаться к врачу по поводу волос', ro: 'Programare la medic pentru păr' },
    cardText: {
      ru: 'Врач осмотрит кожу головы и расспросит о выпадении волос, после чего скажет, поможет ли мезотерапия.',
      ro: 'Medicul va examina scalpul și va întreba despre căderea părului, apoi vă va spune dacă mezoterapia poate ajuta.',
    },
    teaser: {
      ru: 'Поможет ли мезотерапия для волос, решает врач после осмотра.',
      ro: 'Dacă mezoterapia pentru păr poate ajuta, decide medicul după examinare.',
    },
  },
  consultation: {
    key: 'consultation',
    tone: 'medical',
    chip: { ru: 'Консультация дерматокосметолога', ro: 'Consultație dermatocosmetolog' },
    cardTitle: { ru: 'Консультация дерматокосметолога', ro: 'Consultația dermatocosmetologului' },
    cardText: {
      ru: 'Расскажите врачу, что вас беспокоит. После осмотра кожи вы узнаете, какие есть варианты.',
      ro: 'Spuneți medicului ce vă îngrijorează. După examinarea pielii veți afla ce variante există.',
    },
    teaser: {
      ru: 'С чего начать, подскажет врач после осмотра кожи.',
      ro: 'De unde să începeți vă spune medicul după examinarea pielii.',
    },
  },
};

export const CTA_BUTTON_LABEL: Record<CtaTone, Bilingual> = {
  procedure: { ru: 'Записаться на процедуру', ro: 'Programare la procedură' },
  medical: { ru: 'Записаться на приём', ro: 'Programare la consultație' },
};

export const CTA_CALL_LABEL: Bilingual = { ru: 'Позвонить', ro: 'Sună' };

/** Names of the sources in the Telegram message. */
export const LEAD_QUIZ_SOURCE_LABELS: Record<LeadQuizSource, Bilingual> = {
  float_book: { ru: 'Плавающая кнопка «Записаться онлайн»', ro: 'Buton plutitor „Programare online”' },
  float_consult: { ru: 'Плавающая кнопка «Получить консультацию»', ro: 'Buton plutitor „Obține o consultație”' },
  dock_book: { ru: 'Нижняя панель', ro: 'Panou inferior' },
  article_card: { ru: 'Карточка в статье', ro: 'Card în articol' },
  hub_card: { ru: 'Карточка на странице рубрики', ro: 'Card pe pagina rubricii' },
  teaser_scroll60: { ru: 'Тизер при прокрутке', ro: 'Teaser la derulare' },
};

const KEY_BY_SERVICE: Record<string, CtaKey> = {
  [SERVICE_SLUG.DERM]: 'derm',
  [SERVICE_SLUG.CONSULT]: 'consultation',
  [SERVICE_SLUG.ACNE]: 'acne',
  [SERVICE_SLUG.PIGMENT]: 'pigment',
  [SERVICE_SLUG.PEELING]: 'peeling',
  [SERVICE_SLUG.MESO]: 'meso',
  [SERVICE_SLUG.MESO_HAIR]: 'meso_hair',
  [SERVICE_SLUG.LIPS]: 'lips',
  [SERVICE_SLUG.BOTOX]: 'botox',
  [SERVICE_SLUG.BIO]: 'bio',
  [SERVICE_SLUG.FILLERS]: 'fillers',
};

/** Service page slug → entry. Services without their own entry fall back to the consultation. */
export function ctaForServiceSlug(slug: string): CtaEntry {
  return CTA_ENTRIES[KEY_BY_SERVICE[slug] ?? 'consultation'];
}

/** Article → entry of its main (first) service, so a new article gets a call to action by itself. */
export function ctaForPost(post: { id: string; clusterId: string | null }): CtaEntry {
  return ctaForServiceSlug(servicesForArticle(post)[0]);
}

/** Hub (rubric) → entry of the rubric's main service. */
export function ctaForCluster(clusterId: string | null): CtaEntry {
  return ctaForServiceSlug(servicesForCluster(clusterId)[0]);
}

/**
 * Entry for a service page path ("/services/<slug>", "/ro/services/<slug>"); null elsewhere.
 * Blog pages are resolved on the server (ctaForPost / ctaForCluster), which hands the key to client code.
 */
export function ctaForPathname(pathname: string): CtaEntry | null {
  const match = /^(?:\/ro)?\/services\/([^/?#]+)/.exec(pathname || '');
  if (!match) return null;
  let slug = match[1];
  try {
    slug = decodeURIComponent(slug);
  } catch {
    // keep the raw segment
  }
  return ctaForServiceSlug(slug);
}

export function ctaButtonLabel(entry: CtaEntry, locale: CtaLocale): string {
  return CTA_BUTTON_LABEL[entry.tone][locale];
}
