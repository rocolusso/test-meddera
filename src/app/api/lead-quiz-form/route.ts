import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';
import { processContactFormPost } from '@/lib/contact-form-processor';
import { findPostByAnySlug } from '@/blog-data/registry';
import { LIPS_LEAD_TITLE, isLipsLead } from '@/lib/cta/lead-title';
import { buildLeadQuizTelegramBlock } from '@/lib/cta/telegram-block';
import { resolveFormPathname } from '@/lib/form-page-url';

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
  // Leads from lip enlargement pages get the same title as the lips form, so they are easy to tell apart.
  const title = isLipsLead(body, resolveFormPathname(body, request), findPostByAnySlug)
    ? LIPS_LEAD_TITLE
    : getTelegramTitle(formType);

  return processContactFormPost(request, {
    telegramFormTitle: title,
    buildExtraTelegramBlock: (parsedBody, locale) => buildLeadQuizTelegramBlock(parsedBody, locale, formType),
  });
}
