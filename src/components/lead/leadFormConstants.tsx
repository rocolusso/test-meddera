import { sendGa4Event } from '@/lib/ga4-worker-client';

export type Locale = 'ru' | 'ro';
/** The only form of the site. The server still accepts 'consultation' from pages cached before it was removed. */
export type FormType = 'appointment';

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
};

export const TEXT = {
  ru: {
    ctaAppointment: 'Записаться онлайн',
    modalTitle: {
      appointment: 'Быстрая запись',
    },
    modalSubtitle: {
      appointment: 'Оставьте контакты и ответьте на 3 вопроса.',
    },
    modalSubtitlePrefilled: 'Оставьте контакты и ответьте на 2 вопроса.',
    procedureLabel: 'Процедура',
    changeProcedure: 'изменить',
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
    modalTitle: {
      appointment: 'Programare rapidă',
    },
    modalSubtitle: {
      appointment: 'Lăsați datele de contact și răspundeți la 3 întrebări.',
    },
    modalSubtitlePrefilled: 'Lăsați datele de contact și răspundeți la 2 întrebări.',
    procedureLabel: 'Procedura',
    changeProcedure: 'schimbă',
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

/** Quiz opened: a funnel step, not a conversion. `cta_source` tells which button it was. */
export function pushLeadCtaEvent(
  label: string,
  extra: { source?: string | null; procedure?: string | null } = {},
) {
  if (typeof window === 'undefined') return;
  sendGa4Event('lead_sticky_cta_click', {
    button_name: label,
    event_label: 'sticky_lead',
    ...(extra.source ? { cta_source: extra.source } : {}),
    ...(extra.procedure ? { procedure: extra.procedure } : {}),
  });
}
