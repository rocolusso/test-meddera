import { NextRequest, NextResponse } from 'next/server';

import { verifyRecaptchaToken } from '@/lib/recaptcha-verify';

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  const token = typeof body.recaptchaToken === 'string' ? body.recaptchaToken : '';
  if (!token) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const verified = await verifyRecaptchaToken(token);
  if (!verified.ok) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const formName = 'Главная форма сайта/контакты';
  const name = body.message.username;
  const phone = body.message.userphone;
  const userMessage = body.message.message;

  const message = `
${formName}

Имя: ${name}
Телефон: ${phone}
Сообщение: ${userMessage}
`;

  const userIds = [
    '256302541',
    '5299878921',
    '6576456966',
    '7378233926',
  ];

  //   // // 5299878921 yan
  //   // // 6576456966 cate
  //   // // 7378233926 work admin

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  if (!message || !Array.isArray(userIds)) {
    return NextResponse.error();
  }

  try {
    const promises = userIds.map((userId) => fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: userId,
        text: message,
      }),
    }).then(async (res) => {
      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData);
      }
      return res.json();
    }));

    await Promise.all(promises);
  } catch (error: any) {
    console.error('Error sending messages:', error.message);
  }

  return NextResponse.json({
    formSended: body,
  });
}
