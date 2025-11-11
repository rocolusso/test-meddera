import axios from 'axios';

import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: NextRequest) {
  const body = await request.json();

  const formName = 'Главная форма сайта/контакты';
  const name = body.message.username;
  const phone = body.message.userphone;
  const userMessage = body.message.message;

  const message = `

    ${formName}\n
    Имя: ${name}
    Телефон: ${phone}
    Сообщение: ${userMessage}\n

    `;

  // const userIds = ['256302541'] sh
  const userIds = [
    '256302541',
    // '5299878921',
    // '6576456966',
    // '7378233926',
  ];

  // // 5299878921 yan
  // // 6576456966 cate
  // // 7378233926 work admin

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  if (!message || !Array.isArray(userIds)) {
    return NextResponse.error();
  }

  try {
    const promises = userIds.map((userId) => axios.post(telegramApiUrl, {
      chat_id: userId,
      text: message,
    }));

    await Promise.all(promises); // Send messages concurrently
  } catch (error) {
    // @ts-ignore
    console.error('Error sending messages:', error.response?.data || error.message);
  }

  return NextResponse.json({
    formSended: body,
  });
}
