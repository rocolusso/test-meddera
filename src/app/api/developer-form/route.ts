import type { NextRequest } from 'next/server';

import { processContactFormPost } from '@/lib/contact-form-processor';
import {
  buildDeveloperTelegramBlock,
  DEVELOPER_TELEGRAM_RECIPIENTS,
  DEVELOPER_TELEGRAM_TITLE,
} from '@/lib/developer-telegram';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

/** Leads of the /developer page go to one Telegram user only (see DEVELOPER_TELEGRAM_RECIPIENTS). */
export async function POST(request: NextRequest) {
  return processContactFormPost(request, {
    telegramFormTitle: DEVELOPER_TELEGRAM_TITLE,
    recipients: DEVELOPER_TELEGRAM_RECIPIENTS,
    contactMode: 'contact',
    strictDelivery: true,
    buildExtraTelegramBlock: (body) => buildDeveloperTelegramBlock(body),
  });
}
