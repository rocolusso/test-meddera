import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';
import { processContactFormPost } from '@/lib/contact-form-processor';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type LeadFormType = 'appointment' | 'consultation';

function getTelegramTitle(formType: LeadFormType): string {
  return formType === 'appointment'
    ? 'Форма-записаться онлайн'
    : 'Форма получить консультацию';
}

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

function formatQuizAnswers(raw: unknown, locale: 'ru' | 'ro'): string {
  if (!isRecord(raw)) {
    return '';
  }

  const lines = Object.entries(raw)
    .filter(([, value]) => typeof value === 'string' && value.trim().length > 0)
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

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.clone().json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const formType = body.formType === 'consultation' ? 'consultation' : 'appointment';
  const title = getTelegramTitle(formType);

  return processContactFormPost(request, {
    telegramFormTitle: title,
    buildExtraTelegramBlock: (parsedBody, locale) => {
      const formTypeLine =
        locale === 'ro'
          ? `Tip formular: ${formType === 'appointment' ? 'Programare online' : 'Consultație'}`
          : `Тип формы: ${formType === 'appointment' ? 'Записаться онлайн' : 'Получить консультацию'}`;
      const quizBlock = formatQuizAnswers(parsedBody.quizAnswers, locale);
      return quizBlock ? `${formTypeLine}\n${quizBlock}` : formTypeLine;
    },
  });
}
