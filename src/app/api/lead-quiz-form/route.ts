import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';
import { processContactFormPost } from '@/lib/contact-form-processor';
import { buildLeadQuizTelegramBlock } from '@/lib/cta/telegram-block';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type LeadFormType = 'appointment' | 'consultation';

function getTelegramTitle(formType: LeadFormType): string {
  return formType === 'appointment'
    ? 'Форма-записаться онлайн'
    : 'Форма получить консультацию';
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.clone().json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  // 'consultation' is still accepted: pages cached in browsers before the second form was removed may send it.
  const formType = body.formType === 'consultation' ? 'consultation' : 'appointment';
  const title = getTelegramTitle(formType);

  return processContactFormPost(request, {
    telegramFormTitle: title,
    buildExtraTelegramBlock: (parsedBody, locale) => buildLeadQuizTelegramBlock(parsedBody, locale, formType),
  });
}
