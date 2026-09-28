'use client';

import { useMemo, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import './phone-input.css';

import { Button } from '@/components/ui/button';
import ClinicConsultationInfo from '@/components/ClinicConsultationInfo';
import {
  contactAlertErrorClass,
  contactAlertSuccessClass,
  contactFieldClass,
} from '@/components/contact-form-ui';
import { ContactFormSubmittingStatus } from '@/components/ContactFormSubmittingStatus';
import RecaptchaDisclaimer from '@/components/RecaptchaDisclaimer';
import { useContactFormAntiSpam } from '@/hooks/useContactFormAntiSpam';
import { getFormTokenUnavailableMessage } from '@/lib/contact-form-token-client';
import type { ContactFieldErrors } from '@/lib/contact-form-schema';
import { parseContactForm } from '@/lib/contact-form-schema';
import { executeRecaptcha, prefetchRecaptchaScript } from '@/lib/recaptcha-client';
import { sendGa4Event } from '@/lib/ga4-worker-client';

import {
  TEXT,
  type FormType,
  type Locale,
  type QuizQuestion,
} from './leadFormConstants';

type LeadQuizModalProps = {
  locale: Locale;
  formType: FormType;
  questions: readonly QuizQuestion[];
  pathname: string;
  onClose: () => void;
};

export default function LeadQuizModal({
  locale,
  formType,
  questions,
  pathname,
  onClose,
}: LeadQuizModalProps) {
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
    if (typeof window !== 'undefined') {
      sendGa4Event('lead_sticky_form_sent', {
        button_name: 'leadform_sent',
        event_label: 'sticky_lead',
      });
      window.setTimeout(() => {
        setSubmitAlert(false);
        onClose();
      }, 2000);
    }
  };

  const fieldClass = contactFieldClass;

  return (
    <div className="fixed inset-0 z-[1100] flex items-end justify-center bg-black/80 p-3 animate-fade-in [animation-duration:0.3s] motion-reduce:animate-none sm:items-center sm:p-6">
      <button
        type="button"
        aria-label={t.close}
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <div className="relative z-[1] max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-background p-5 shadow-pofo-lg dark:bg-card sm:p-10">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="alt-font text-[20px] font-semibold leading-[28px] text-pofo-heading">{t.modalTitle[formType]}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.modalSubtitle[formType]}</p>
          </div>
          <Button variant="pofoOutline" size="pofoSmall" type="button" onClick={onClose}>
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
                {fieldErrors.username ? <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{fieldErrors.username}</p> : null}
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
                {fieldErrors.userphone ? <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{fieldErrors.userphone}</p> : null}
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
              {fieldErrors.message ? <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{fieldErrors.message}</p> : null}
            </div>

            <div className="mt-4 space-y-4">
              {questions.map((question) => (
                <div key={question.key} className="border border-border p-4">
                  <p className="alt-font text-[13px] font-semibold leading-5 text-pofo-heading">{question.prompt[locale]}</p>
                  <div className="mt-2 space-y-2">
                    {question.options[locale].map((option) => (
                      <label key={`${question.key}-${option}`} className="flex cursor-pointer items-center gap-2.5 border-l-2 border-transparent py-1 pl-2.5 text-sm text-foreground transition-colors hover:border-border has-[:checked]:border-deep-pink has-[:checked]:bg-pofo-light-gray [&_input]:accent-deep-pink">
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
              <p className={`mt-3 ${contactAlertErrorClass}`}>
                {submitError}
              </p>
            ) : null}
            {submitAlert ? (
              <p className={`mt-3 ${contactAlertSuccessClass}`}>
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

            <Button className="mt-5 mb-5 w-full" variant="pofo" size="pofo" type="submit" disabled={locked}>
              {locked ? t.sending : t.submit}
            </Button>
            <div className="mt-4 bg-pofo-light-gray p-4 dark:bg-[#232323]">
              <p className="text-sm text-foreground">{t.clinicAddress}</p>
              <Button asChild className="mt-3 w-full" variant="pofoOutline" size="pofoSmall">
                <Link href={contactsRoute} onClick={onClose}>{t.showRoute}</Link>
              </Button>
            </div>
          </fieldset>
        </form>
        <style jsx>{`
          .grecaptcha-badge {
            visibility: hidden;
          }
        `}</style>
      </div>
    </div>
  );
}
