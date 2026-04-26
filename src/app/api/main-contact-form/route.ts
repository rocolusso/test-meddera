import type { NextRequest } from 'next/server';

import { processContactFormPost } from '@/lib/contact-form-processor';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  return processContactFormPost(request, {
    telegramFormTitle: 'Главная форма сайта/контакты',
  });
}
