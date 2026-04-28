export type Locale = 'ru' | 'ro';
export type FormType = 'appointment' | 'consultation';

export type QuizQuestion = {
  key: string;
  prompt: Record<Locale, string>;
  options: Record<Locale, readonly string[]>;
};

export const QUIZ: Record<FormType, readonly QuizQuestion[]> = {
  appointment: [
    {
      key: 'visit_type',
      prompt: {
        ru: 'Тип визита',
        ro: 'Tipul vizitei',
      },
      options: {
        ru: ['Первичная консультация', 'Повторный визит', 'Не уверен(а), нужна рекомендация'],
        ro: ['Consultație inițială', 'Vizită repetată', 'Nu sunt sigur(ă), am nevoie de recomandare'],
      },
    },
    {
      key: 'preferred_day',
      prompt: {
        ru: 'Когда вам удобнее?',
        ro: 'Când vă este mai comod?',
      },
      options: {
        ru: ['Сегодня-завтра', 'На этой неделе', 'На следующей неделе'],
        ro: ['Astăzi-mâine', 'Săptămâna aceasta', 'Săptămâna viitoare'],
      },
    },
    {
      key: 'procedure_interest',
      prompt: {
        ru: 'Что вас интересует?',
        ro: 'Ce vă interesează?',
      },
      options: {
        ru: ['Уход за лицом', 'Инъекционные процедуры', 'Консультация дерматолога'],
        ro: ['Îngrijirea feței', 'Proceduri injectabile', 'Consultație dermatolog'],
      },
    },
  ],
  consultation: [
    {
      key: 'request_topic',
      prompt: {
        ru: 'По какому вопросу нужна консультация?',
        ro: 'Pentru ce subiect aveți nevoie de consultație?',
      },
      options: {
        ru: ['Акне / высыпания', 'Пигментация / постакне', 'Омоложение / anti-age', 'Другое'],
        ro: ['Acnee / erupții', 'Pigmentare / postacnee', 'Întinerire / anti-age', 'Altceva'],
      },
    },
    {
      key: 'urgency',
      prompt: {
        ru: 'Насколько срочно?',
        ro: 'Cât de urgent este?',
      },
      options: {
        ru: ['Как можно скорее', 'В течение недели', 'Пока просто собираю информацию'],
        ro: ['Cât mai curând', 'În decurs de o săptămână', 'Momentan doar colectez informații'],
      },
    },
    {
      key: 'consult_format',
      prompt: {
        ru: 'Формат консультации',
        ro: 'Formatul consultației',
      },
      options: {
        ru: ['Лично в клинике', 'Нужна рекомендация врача', 'Пока не определился(ась)'],
        ro: ['Personal în clinică', 'Am nevoie de recomandarea medicului', 'Încă nu m-am decis'],
      },
    },
  ],
};

export const TEXT = {
  ru: {
    ctaAppointment: 'Записаться онлайн',
    ctaConsultation: 'Получить консультацию',
    modalTitle: {
      appointment: 'Быстрая запись',
      consultation: 'Получить консультацию',
    },
    modalSubtitle: {
      appointment: 'Оставьте контакты и ответьте на 3 вопроса.',
      consultation: 'Заполните форму, и мы поможем подобрать решение.',
    },
    placeholders: {
      name: 'Имя',
      phone: 'Ваш номер телефона',
      message: 'Сообщение (по желанию)',
    },
    close: 'Закрыть',
    submit: 'Отправить',
    sending: 'Отправка…',
    clinicAddress: 'Адрес клиники: Balti, Stefan Cel Mare, 13',
    showRoute: 'Показать маршрут',
    success: 'Спасибо! Заявка отправлена.',
    quizRequired: 'Пожалуйста, ответьте на все вопросы квиза.',
    formError: 'Не удалось отправить заявку. Попробуйте позже.',
    declined: 'Отправка отклонена. Обновите страницу и попробуйте снова.',
    tooMany: 'Слишком много попыток. Подождите и попробуйте снова.',
    verifyError: 'Не удалось проверить отправку. Обновите страницу и попробуйте снова.',
  },
  ro: {
    ctaAppointment: 'Programare online',
    ctaConsultation: 'Obține o consultație',
    modalTitle: {
      appointment: 'Programare rapidă',
      consultation: 'Obține o consultație',
    },
    modalSubtitle: {
      appointment: 'Lăsați datele de contact și răspundeți la 3 întrebări.',
      consultation: 'Completați formularul, iar noi vă ajutăm cu recomandări.',
    },
    placeholders: {
      name: 'Nume',
      phone: 'Numărul dumneavoastră de telefon',
      message: 'Mesaj (opțional)',
    },
    close: 'Închide',
    submit: 'Trimite',
    sending: 'Se trimite…',
    clinicAddress: 'Adresa clinicii: Balti, Stefan Cel Mare, 13',
    showRoute: 'Arată traseul',
    success: 'Mulțumim! Cererea a fost trimisă.',
    quizRequired: 'Vă rugăm să răspundeți la toate întrebările.',
    formError: 'Nu s-a putut trimite cererea. Încercați mai târziu.',
    declined: 'Trimiterea a fost respinsă. Reîmprospătați pagina și încercați din nou.',
    tooMany: 'Prea multe încercări. Așteptați și încercați din nou.',
    verifyError: 'Nu s-a putut verifica trimiterea. Reîmprospătați pagina și încercați din nou.',
  },
} as const;

export function getLocaleFromPath(pathname: string | null | undefined): Locale {
  if (!pathname) return 'ru';
  return pathname === '/ro' || pathname.startsWith('/ro/') ? 'ro' : 'ru';
}

export function pushLeadCtaEvent(label: string) {
  if (typeof window === 'undefined') return;
  const w = window as Window & { dataLayer?: Array<Record<string, string>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'lead_sticky_cta_click',
    button_name: label,
    event_label: 'sticky_lead',
  });
}
