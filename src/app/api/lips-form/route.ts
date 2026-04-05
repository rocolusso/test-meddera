import type { NextRequest } from 'next/server';

import { processContactFormPost } from '@/lib/contact-form-processor';

export async function POST(request: NextRequest) {
  return processContactFormPost(request, {
    telegramFormTitle: 'Форма/ Увеличение Губ / LEAD',
  });
}
