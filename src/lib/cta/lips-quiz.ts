/**
 * Quiz of the lip enlargement pages: the five questions that matter most for the doctor
 * (safety first), in both languages. Pure data and pure functions, no browser code: the quiz modal
 * shows the questions, the server checks the answers against the same list and writes them into
 * the Telegram message in Russian, whatever language the visitor used.
 *
 * `risk` lists the options that need the doctor's attention; the manager sees them marked with a
 * warning sign in Telegram. The visitor is told nothing about it.
 */

type Bilingual = { ru: string; ro: string };

export type LipsQuizQuestion = {
  key: string;
  prompt: Bilingual;
  options: { ru: readonly string[]; ro: readonly string[] };
  /** Indexes of the options that are marked for the manager. */
  risk: readonly number[];
  /** Short Russian name of the question for the Telegram message. */
  label: string;
};

export const LIPS_QUIZ: readonly LipsQuizQuestion[] = [
  {
    key: 'lips_herpes',
    label: 'Герпес, воспаление, инфекции вокруг рта',
    prompt: {
      ru: 'Есть ли у вас в данный момент герпес, воспаление или инфекции вокруг рта?',
      ro: 'Aveți în prezent herpes, inflamație sau infecții în jurul gurii?',
    },
    options: {
      ru: ['Нет', 'Да, герпес', 'Да, другое (воспаление, экзема и т.п.)'],
      ro: ['Nu', 'Da, herpes', 'Da, altceva (inflamație, eczemă etc.)'],
    },
    risk: [1, 2],
  },
  {
    key: 'lips_previous',
    label: 'Процедуры в области губ ранее',
    prompt: {
      ru: 'Были ли ранее проведены процедуры в области губ?',
      ro: 'Au fost efectuate anterior proceduri în zona buzelor?',
    },
    options: {
      ru: ['Нет', 'Да, 1–2 раза (филлеры)', 'Да, хирургические (липофилинг и т.п.)', 'Другое (уточню на консультации)'],
      ro: ['Nu', 'Da, de 1–2 ori (filler-e)', 'Da, chirurgicale (lipofilling etc.)', 'Altceva (voi preciza la consultație)'],
    },
    risk: [],
  },
  {
    key: 'lips_swelling',
    label: 'Склонность к отёкам и синякам',
    prompt: {
      ru: 'Как вы оцениваете свою восприимчивость к отёкам или синякам?',
      ro: 'Cum vă evaluați predispoziția la edeme sau vânătăi?',
    },
    options: {
      ru: ['Минимальная', 'Умеренная', 'Выраженная'],
      ro: ['Minimă', 'Moderată', 'Pronunțată'],
    },
    risk: [2],
  },
  {
    key: 'lips_allergy',
    label: 'Аллергии, чувствительность к препаратам и анестетикам',
    prompt: {
      ru: 'Есть ли у вас аллергии или чувствительность к препаратам и анестетикам?',
      ro: 'Aveți alergii sau sensibilitate la preparate și anestezice?',
    },
    options: {
      ru: ['Нет', 'Да (проявления: зуд, отёк)', 'Не знаю, уточню на консультации'],
      ro: ['Nu', 'Da (manifestări: mâncărime, edem)', 'Nu știu, voi clarifica la consultație'],
    },
    risk: [1],
  },
  {
    key: 'lips_recovery',
    label: 'Время на восстановление',
    prompt: {
      ru: 'Сколько времени вы готовы посвятить восстановительному периоду?',
      ro: 'Cât timp sunteți dispus(ă) să acordați perioadei de recuperare?',
    },
    options: {
      ru: ['1–2 дня', '3–5 дней', 'Более 1 недели'],
      ro: ['1–2 zile', '3–5 zile', 'Mai mult de o săptămână'],
    },
    risk: [],
  },
];

export const LIPS_QUIZ_KEYS: readonly string[] = LIPS_QUIZ.map((q) => q.key);

const MAX_ANSWER_LENGTH = 200;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** Did the answers come from this quiz (and not from the general one of older open tabs)? */
export function isLipsQuizAnswers(raw: unknown): boolean {
  return isRecord(raw) && LIPS_QUIZ.some((q) => Object.prototype.hasOwnProperty.call(raw, q.key));
}

/**
 * Answers of the lips quiz as Telegram lines, in Russian. An answer counts only if it is exactly
 * one of the options of its question (in either language); anything else is dropped.
 */
export function formatLipsQuizAnswers(raw: unknown): string {
  if (!isRecord(raw)) return '';
  const lines: string[] = [];
  for (const q of LIPS_QUIZ) {
    const value = Object.prototype.hasOwnProperty.call(raw, q.key) ? raw[q.key] : undefined;
    if (typeof value !== 'string') continue;
    const trimmed = value.trim().slice(0, MAX_ANSWER_LENGTH);
    let index = q.options.ru.indexOf(trimmed);
    if (index < 0) index = q.options.ro.indexOf(trimmed);
    if (index < 0) continue;
    lines.push(`- ${q.risk.includes(index) ? '⚠ ' : ''}${q.label}: ${q.options.ru[index]}`);
  }
  return lines.length ? `Ответы квиза (увеличение губ):\n${lines.join('\n')}` : '';
}
