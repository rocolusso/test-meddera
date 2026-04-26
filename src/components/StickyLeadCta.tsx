'use client';

import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PhoneInputWithCountrySelect from 'react-phone-number-input';

import { Button } from '@/components/ui/button';
import ClinicConsultationInfo from '@/components/ClinicConsultationInfo';
import { ContactFormSubmittingStatus } from '@/components/ContactFormSubmittingStatus';
import RecaptchaDisclaimer from '@/components/RecaptchaDisclaimer';
import { useContactFormAntiSpam } from '@/hooks/useContactFormAntiSpam';
import { getFormTokenUnavailableMessage } from '@/lib/contact-form-token-client';
import type { ContactFieldErrors } from '@/lib/contact-form-schema';
import { parseContactForm } from '@/lib/contact-form-schema';
import { executeRecaptcha, prefetchRecaptchaScript } from '@/lib/recaptcha-client';

type Locale = 'ru' | 'ro';
type FormType = 'appointment' | 'consultation';

type QuizQuestion = {
  key: string;
  prompt: Record<Locale, string>;
  options: Record<Locale, readonly string[]>;
};

const QUIZ: Record<FormType, readonly QuizQuestion[]> = {
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

const TEXT = {
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

function getLocale(pathname: string): Locale {
  return pathname === '/ro' || pathname.startsWith('/ro/') ? 'ro' : 'ru';
}

function pushLeadCtaEvent(label: string) {
  const w = window as Window & { dataLayer?: Array<Record<string, string>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'lead_sticky_cta_click',
    button_name: label,
    event_label: 'sticky_lead',
  });
}

export default function StickyLeadCta() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const t = TEXT[locale];

  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('appointment');

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const questions = QUIZ[formType];

  return (
    <>
      <div className="fixed bottom-24 left-4 z-[1000] flex flex-col gap-2 sm:bottom-24 sm:left-6">
        <Button
          type="button"
          size="lg"
          className="h-auto rounded-full px-4 py-3 text-xs font-bold sm:text-sm"
          onClick={() => {
            pushLeadCtaEvent('appointment');
            setFormType('appointment');
            setOpen(true);
          }}
        >
          {t.ctaAppointment}
        </Button>
        <Button
          type="button"
          size="lg"
          variant="secondary"
          className="h-auto rounded-full border px-4 py-3 text-xs font-bold sm:text-sm"
          onClick={() => {
            pushLeadCtaEvent('consultation');
            setFormType('consultation');
            setOpen(true);
          }}
        >
          {t.ctaConsultation}
        </Button>
      </div>

      {open ? (
        <LeadQuizModal
          locale={locale}
          formType={formType}
          questions={questions}
          pathname={pathname}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}

function LeadQuizModal({
  locale,
  formType,
  questions,
  pathname,
  onClose,
}: {
  locale: Locale;
  formType: FormType;
  questions: readonly QuizQuestion[];
  pathname: string;
  onClose: () => void;
}) {
  const t = TEXT[locale];
  const contactsRoute = locale === 'ro' ? '/ro/contacts' : '/contacts';
  const recaptchaPrefetchDone = useRef(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [locked, setLocked] = useState(false);
  const [submitAlert, setSubmitAlert] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  const {
    formRef,
    website,
    setWebsite,
    getSubmitTimeMs,
    getBehavior,
  } = useContactFormAntiSpam();

  const allQuizAnswered = useMemo(
    () => questions.every((question) => Boolean(quizAnswers[question.key])),
    [questions, quizAnswers],
  );

  const prefetchRecaptchaOnce = () => {
    if (recaptchaPrefetchDone.current) return;
    recaptchaPrefetchDone.current = true;
    prefetchRecaptchaScript();
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSubmitError(null);
    setSubmitAlert(false);
    setFieldErrors({});

    if (!allQuizAnswered) {
      setSubmitError(t.quizRequired);
      return;
    }

    setLocked(true);
    const { default: DOMPurify } = await import('dompurify');
    const safeName = DOMPurify.sanitize(name, { ALLOWED_TAGS: [] });
    const safeMessage = DOMPurify.sanitize(message, { ALLOWED_TAGS: [] });

    const parsed = parseContactForm(locale, {
      username: safeName,
      userphone: phone,
      message: safeMessage,
    });

    if (!parsed.ok) {
      setFieldErrors(parsed.fieldErrors);
      setLocked(false);
      return;
    }

    const recaptchaToken = await executeRecaptcha('lead_quiz');
    if (!recaptchaToken) {
      setLocked(false);
      setSubmitError(t.verifyError);
      return;
    }

    let tokenJson: { token?: string; disabled?: boolean } | null = null;
    let tokenHttpStatus = 0;
    try {
      const tokenRes = await fetch('/api/form-token');
      tokenHttpStatus = tokenRes.status;
      tokenJson = (await tokenRes.json()) as { token?: string; disabled?: boolean };
    } catch {
      tokenJson = null;
      tokenHttpStatus = 0;
    }

    const abuseDisabled = tokenJson?.disabled === true;
    const formToken = typeof tokenJson?.token === 'string' ? tokenJson.token : '';
    if (!abuseDisabled && !formToken) {
      setLocked(false);
      setSubmitError(getFormTokenUnavailableMessage(locale, tokenHttpStatus));
      return;
    }

    const payload: Record<string, unknown> = {
      recaptchaToken,
      message: parsed.data,
      locale,
      formType,
      quizAnswers,
      formPathname: typeof window !== 'undefined' ? window.location.href : pathname,
    };
    if (!abuseDisabled) {
      payload.formToken = formToken;
      payload.website = website;
      payload.behavior = getBehavior();
      payload.submitTimeMs = getSubmitTimeMs();
    }

    const res = await fetch('/api/lead-quiz-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setLocked(false);
      if (res.status === 429) {
        setSubmitError(t.tooMany);
        return;
      }
      if (res.status === 403) {
        setSubmitError(t.declined);
        return;
      }
      setSubmitError(t.formError);
      return;
    }

    setName('');
    setPhone('');
    setMessage('');
    setQuizAnswers({});
    setWebsite('');
    setFieldErrors({});
    setLocked(false);
    setSubmitAlert(true);
    const w = window as Window & { dataLayer?: Array<Record<string, string>> };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'lead_sticky_form_sent',
      button_name: 'leadform_sent',
      event_label: 'sticky_lead',
    });
    window.setTimeout(() => {
      setSubmitAlert(false);
      onClose();
    }, 2000);
  };

  const fieldClass = (hasError: boolean) =>
    [
      'w-full mt-2 rounded-lg border bg-card py-3 px-3 font-semibold text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2',
      hasError
        ? 'border-red-600 focus:border-red-600 focus:ring-red-500/35 dark:border-red-500'
        : 'border-border focus:border-ring focus:ring-ring/35',
    ].join(' ');

  return (
    <div className="fixed inset-0 z-[1100] flex items-end justify-center bg-black/55 p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label={t.close}
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <div className="relative z-[1] max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-background p-4 shadow-2xl sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{t.modalTitle[formType]}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.modalSubtitle[formType]}</p>
          </div>
          <Button variant="ghost" size="sm" type="button" onClick={onClose}>
            {t.close}
          </Button>
        </div>

        <div className={'py-5'}>
          <ClinicConsultationInfo locale={locale} compact />
        </div>

        <form ref={formRef} onSubmit={submitHandler} onFocusCapture={prefetchRecaptchaOnce}>
          <fieldset disabled={locked}>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="sm:col-span-1">
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(fieldErrors.username)}
                  className={fieldClass(Boolean(fieldErrors.username))}
                  placeholder={t.placeholders.name}
                  value={name}
                  onChange={(e) => {
                    setFieldErrors((prev) => ({ ...prev, username: undefined }));
                    setName(e.target.value);
                  }}
                />
                {fieldErrors.username ? <p className="mt-1 text-sm text-red-600">{fieldErrors.username}</p> : null}
              </div>
              <div className="sm:col-span-1">
                <PhoneInputWithCountrySelect
                  name="phone"
                  autoComplete="tel"
                  className={fieldClass(Boolean(fieldErrors.userphone))}
                  defaultCountry="MD"
                  placeholder={t.placeholders.phone}
                  value={phone}
                  onChange={(e) => {
                    setFieldErrors((prev) => ({ ...prev, userphone: undefined }));
                    if (e !== undefined) {
                      setPhone(e);
                    }
                  }}
                />
                {fieldErrors.userphone ? <p className="mt-1 text-sm text-red-600">{fieldErrors.userphone}</p> : null}
              </div>
            </div>

            <div className="mt-3">
              <textarea
                name="message"
                autoComplete="off"
                aria-invalid={Boolean(fieldErrors.message)}
                className={`${fieldClass(Boolean(fieldErrors.message))} min-h-[120px] resize-y`}
                placeholder={t.placeholders.message}
                value={message}
                onChange={(e) => {
                  setFieldErrors((prev) => ({ ...prev, message: undefined }));
                  setMessage(e.target.value);
                }}
              />
              {fieldErrors.message ? <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p> : null}
            </div>

            <div className="mt-4 space-y-4">
              {questions.map((question) => (
                <div key={question.key} className="rounded-lg border border-border p-3">
                  <p className="text-sm font-semibold text-foreground">{question.prompt[locale]}</p>
                  <div className="mt-2 space-y-2">
                    {question.options[locale].map((option) => (
                      <label key={`${question.key}-${option}`} className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                        <input
                          type="radio"
                          name={`quiz-${question.key}`}
                          value={option}
                          checked={quizAnswers[question.key] === option}
                          onChange={() => {
                            setQuizAnswers((prev) => ({
                              ...prev,
                              [question.key]: option,
                            }));
                          }}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <ContactFormSubmittingStatus locale={locale} active={locked} />
            {submitError ? (
              <p className="mt-3 rounded-lg border border-red-600 bg-red-50 p-3 text-sm text-red-800 dark:border-red-500/50 dark:bg-red-950/50 dark:text-red-100">
                {submitError}
              </p>
            ) : null}
            {submitAlert ? (
              <p className="mt-3 rounded-lg border border-green-600 bg-green-50 p-3 text-sm text-green-800 dark:border-green-500/50 dark:bg-green-950/40 dark:text-green-100">
                {t.success}
              </p>
            ) : null}

            <RecaptchaDisclaimer locale={locale} />
            <input
              type="text"
              name="cf_hp"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              data-1p-ignore
              data-lpignore="true"
              className="absolute -left-[9999px] h-px w-px opacity-0"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />

            <Button className="mt-5 mb-5 w-full font-bold" variant="default" size="lg" type="submit" disabled={locked}>
              {locked ? t.sending : t.submit}
            </Button>
            <div className="mt-4 rounded-lg border border-border/80 bg-muted/35 p-3">
              <p className="text-sm text-foreground">{t.clinicAddress}</p>
              <Button asChild className="mt-3 w-full" variant="secondary" size="sm">
                <Link href={contactsRoute} onClick={onClose}>{t.showRoute}</Link>
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
