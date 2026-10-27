import { CTA_ENTRIES, LEAD_QUIZ_SOURCE_LABELS, isCtaKey, isLeadQuizSource } from '@/lib/cta/registry';

type Locale = 'ru' | 'ro';

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
}

const QUIZ_LABELS: Record<string, { ru: string; ro: string }> = {
  visit_type: { ru: 'Тип визита', ro: 'Tipul vizitei' },
  preferred_day: { ru: 'Удобный день', ro: 'Zi preferată' },
  procedure_interest: { ru: 'Интересующая процедура', ro: 'Procedura de interes' },
  request_topic: { ru: 'Тема консультации', ro: 'Subiectul consultației' },
  urgency: { ru: 'Срочность', ro: 'Urgență' },
  consult_format: { ru: 'Формат консультации', ro: 'Formatul consultației' },
};

export function formatQuizAnswers(raw: unknown, locale: Locale, omitKey?: string): string {
  if (!isRecord(raw)) {
    return '';
  }

  const lines = Object.entries(raw)
    .filter(([key, value]) => key !== omitKey && typeof value === 'string' && value.trim().length > 0)
    .map(([key, value]) => {
      const label = QUIZ_LABELS[key]?.[locale] ?? key;
      return `- ${label}: ${String(value).trim()}`;
    });

  if (!lines.length) {
    return '';
  }

  return locale === 'ro'
    ? `Răspunsuri quiz:\n${lines.join('\n')}`
    : `Ответы квиза:\n${lines.join('\n')}`;
}

/** `source` and `procedure` come from the browser: only values from the registry are used, anything else is dropped. */
export function formatSourceBlock(body: Record<string, unknown>, locale: Locale): string {
  const lines: string[] = [];
  if (isLeadQuizSource(body.source)) {
    lines.push(`${locale === 'ro' ? 'Sursă' : 'Источник'}: ${LEAD_QUIZ_SOURCE_LABELS[body.source][locale]}`);
  }
  if (isCtaKey(body.procedure)) {
    lines.push(`${locale === 'ro' ? 'Procedura' : 'Процедура'}: ${CTA_ENTRIES[body.procedure].chip[locale]}`);
  }
  return lines.join('\n');
}

/** Everything the quiz adds to the Telegram message after the form title. */
export function buildLeadQuizTelegramBlock(
  body: Record<string, unknown>,
  locale: Locale,
  formType: 'appointment' | 'consultation',
): string {
  const formTypeLine =
    locale === 'ro'
      ? `Tip formular: ${formType === 'appointment' ? 'Programare online' : 'Consultație'}`
      : `Тип формы: ${formType === 'appointment' ? 'Записаться онлайн' : 'Получить консультацию'}`;
  // A procedure chosen on the page is already named in the source block.
  const quizBlock = formatQuizAnswers(
    body.quizAnswers,
    locale,
    isCtaKey(body.procedure) ? 'procedure_interest' : undefined,
  );
  return [formTypeLine, formatSourceBlock(body, locale), quizBlock].filter(Boolean).join('\n');
}
