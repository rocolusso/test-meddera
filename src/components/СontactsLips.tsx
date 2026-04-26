'use client';

import React, { useRef, useState } from 'react';
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import Image from 'next/image';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import LazyMap from '@/components/LazyMap';
import imgAddress from '../../public/assets/img/img_contacts.jpg';
import { Button } from '@/components/ui/button';
import { executeRecaptcha, prefetchRecaptchaScript } from '@/lib/recaptcha-client';
import RecaptchaDisclaimer from '@/components/RecaptchaDisclaimer';
import type { ContactFieldErrors } from '@/lib/contact-form-schema';
import { parseContactForm } from '@/lib/contact-form-schema';
import { useContactFormAntiSpam } from '@/hooks/useContactFormAntiSpam';
import { getFormTokenUnavailableMessage } from '@/lib/contact-form-token-client';
import { ContactFormSubmittingStatus } from '@/components/ContactFormSubmittingStatus';
import ClinicConsultationInfo from '@/components/ClinicConsultationInfo';

function ContactsLips({ locale }:{ locale:string }) {
  const callPhone = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'phone_button_contacts1', // Название события для GTM
      'button_name': 'phone_btn_contact',  // Кастомный параметр (опционально)
      'event_label': 'click_btn'      // Кастомный параметр (опционально)
    });
    window.location.href = 'tel:+37368550030';
  };

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [locked, setLocked] = useState(false);

  const [submitAlert, setSubmitAlert] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const recaptchaPrefetchDone = useRef(false);

  const {
    formRef,
    website,
    setWebsite,
    getSubmitTimeMs,
    getBehavior,
  } = useContactFormAntiSpam();

  const prefetchRecaptchaOnce = () => {
    if (recaptchaPrefetchDone.current) return;
    recaptchaPrefetchDone.current = true;
    prefetchRecaptchaScript();
  };

  const submitHandler = async (e:React.BaseSyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setSubmitError(null);
    setSubmitAlert(false);
    setFieldErrors({});
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

    const { username: validName, userphone: validPhone, message: validMessage } = parsed.data;

    const recaptchaToken = await executeRecaptcha('lips_contact');
    if (!recaptchaToken) {
      setLocked(false);
      setSubmitError(
        locale === 'ru'
          ? 'Не удалось проверить отправку. Обновите страницу и попробуйте снова.'
          : 'Nu s-a putut verifica trimiterea. Reîmprospătați pagina și încercați din nou.',
      );
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
      message: {
        username: validName,
        userphone: validPhone,
        message: validMessage,
      },
      locale,
      formPathname: typeof window !== 'undefined' ? window.location.href : '',
    };
    if (!abuseDisabled) {
      payload.formToken = formToken;
      payload.website = website;
      payload.behavior = getBehavior();
      payload.submitTimeMs = getSubmitTimeMs();
    }

    const res = await fetch('/api/lips-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setLocked(false);
      if (res.status === 429) {
        setSubmitError(
          locale === 'ru'
            ? 'Слишком много попыток. Подождите и попробуйте снова.'
            : 'Prea multe încercări. Așteptați și încercați din nou.',
        );
        return;
      }
      if (res.status === 403) {
        setSubmitError(
          locale === 'ru'
            ? 'Отправка отклонена. Обновите страницу и попробуйте снова.'
            : 'Trimiterea a fost respinsă. Reîmprospătați pagina și încercați din nou.',
        );
        return;
      }
      setSubmitError(
        locale === 'ru'
          ? 'Не удалось отправить сообщение. Попробуйте позже.'
          : 'Nu s-a putut trimite mesajul. Încercați mai târziu.',
      );
      return;
    }

    setName('');
    setPhone('');
    setMessage('');
    setWebsite('');
    setFieldErrors({});
    setLocked(false);
    setSubmitAlert(true);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'form_sended_1', // Название события для GTM
      'button_name': 'submit_btn',  // Кастомный параметр (опционально)
      'event_label': 'sendform'      // Кастомный параметр (опционально)
    });

    setTimeout(() => {
      setSubmitAlert(false);
    }, 3000);
  };

  const fieldClass = (hasError: boolean) =>
    [
      'w-full mt-2 rounded-lg border bg-card py-3 px-3 font-semibold text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2',
      hasError
        ? 'border-red-600 focus:border-red-600 focus:ring-red-500/35 dark:border-red-500'
        : 'border-border focus:border-ring focus:ring-ring/35',
    ].join(' ');

  return (
    <div className="contacts-lips scroll-mt-28 border-t border-border bg-background text-foreground" id="contacts">

      <div className="container mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <div className="text-center">
          <p className="mx-auto w-fit px-4 py-3 text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-tight tracking-tight text-foreground">
            {locale === 'ru' ? 'Контакты' : 'Contacte'}
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-border" aria-hidden />
        </div>

        <div className="new__contacts" id="contacts">
          <div
            className="relative flex justify-center bg-background sm:items-center sm:pt-0"
          >
            <div className="mx-auto w-full max-w-6xl sm:px-0">
              <div className="mt-10 overflow-hidden sm:mt-12">
                <div className="grid grid-cols-1 gap-10 py-6 md:grid-cols-2 md:gap-12 md:py-8 lg:gap-14">

                  <div className="form__block__wrapper rounded-xl border border-border bg-card shadow-lg sm:rounded-xl">
                    <div className="mx-auto mt-6 flex justify-center px-4 sm:mt-8">
                      <p className="mt-2 text-center font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground">
                        {locale === 'ru' ? 'Запись на консультацию' : 'Programare pentru consultanță'}
                      </p>
                    </div>
                    <ClinicConsultationInfo locale={locale === 'ro' ? 'ro' : 'ru'} />
                    <form
                      ref={formRef}
                      onSubmit={submitHandler}
                      onFocusCapture={prefetchRecaptchaOnce}
                      className="flex flex-col justify-center p-5 sm:p-6"
                    >
                      <fieldset disabled={locked}>
                        <div className="flex flex-col">
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            aria-invalid={Boolean(fieldErrors.username)}
                            className={fieldClass(Boolean(fieldErrors.username))}
                            placeholder={locale === 'ru' ? 'Имя' : 'Nume'}
                            value={name}
                            onChange={(e) => {
                              setFieldErrors((prev) => ({ ...prev, username: undefined }));
                              setName(e.target.value);
                            }}
                          />
                          {fieldErrors.username ? (
                            <p className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
                              {fieldErrors.username}
                            </p>
                          ) : null}
                        </div>
                        <div className="flex flex-col mt-4">
                          {/* Default flagUrl (CDN img) — avoid react-phone-number-input/flags (~300KB+ parsed JS from country-flag-icons). */}
                          <PhoneInputWithCountrySelect
                            id="contact-phone"
                            name="phone"
                            autoComplete="tel"
                            className={fieldClass(Boolean(fieldErrors.userphone))}
                            defaultCountry="MD"
                            placeholder={locale === 'ru' ? 'Ваш номер телефона' : 'Numărul dumneavoastră de telefon'}
                            value={phone}
                            onChange={(e) => {
                              setFieldErrors((prev) => ({ ...prev, userphone: undefined }));
                              if (e !== undefined) {
                                setPhone(e);
                              }
                            }}
                            countrySelectProps={{ id: 'contact-phone-country' }}
                          />
                          {fieldErrors.userphone ? (
                            <p className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
                              {fieldErrors.userphone}
                            </p>
                          ) : null}
                        </div>

                        <div className="flex flex-col mt-2">
                          <textarea
                            id="contact-message"
                            name="message"
                            autoComplete="off"
                            aria-invalid={Boolean(fieldErrors.message)}
                            className={`${fieldClass(Boolean(fieldErrors.message))} h-[150px] resize-none`}
                            placeholder={locale === 'ru' ? 'Cообщение' : 'Mesaj'}
                            value={message}
                            onChange={(e) => {
                              setFieldErrors((prev) => ({ ...prev, message: undefined }));
                              setMessage(e.target.value);
                            }}
                          />
                          {fieldErrors.message ? (
                            <p className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
                              {fieldErrors.message}
                            </p>
                          ) : null}

                          <ContactFormSubmittingStatus locale={locale} active={locked} />
                          {
                            submitError
                              && (
                                <div
                                  className="submit_alert animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none"
                                  id="formSubmitError"
                                >
                                  <p
                                    className="mb-5 rounded-lg border border-red-600 bg-red-50 p-4 text-sm text-red-800 dark:border-red-500/50 dark:bg-red-950/50 dark:text-red-100"
                                    role="alert"
                                  >
                                    {submitError}
                                  </p>
                                </div>
                              )
                          }
                          {
                            submitAlert
                              && (
                                <div
                                  className="submit_alert animate-in fade-in zoom-in-95 duration-300 motion-reduce:animate-none"
                                  id="formSubmitAlert"
                                >
                                  <p
                                    className="mb-5 rounded-lg border border-green-600 bg-green-50 p-4 text-sm text-green-800 dark:border-green-500/50 dark:bg-green-950/40 dark:text-green-100"
                                    role="status"
                                  >
                                    {locale === 'ru'
                                      ? 'Спасибо! Ваше сообщение получено'
                                      : 'Mulțumim! Mesajul dumneavoastră a fost primit'}
                                  </p>
                                </div>
                              )
                          }
                        </div>

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

                        <Button
                          className="mt-6 w-full font-bold sm:w-fit"
                          variant="default"
                          size="lg"
                          type="submit"
                          disabled={locked}
                        >
                          {locked
                            ? (locale === 'ru' ? 'Отправка…' : 'Se trimite…')
                            : (locale === 'ru'
                              ? 'Отправить сообщение'
                              : 'Trimite mesaj')}
                        </Button>

                      </fieldset>
                    </form>
                  </div>

                  <div className="rounded-xl border border-border/80 bg-muted p-5 sm:p-6">
                    <div>
                      <Image
                        className="w-full sm:rounded-md"
                        src={imgAddress}
                        alt="address"
                        width={400}
                        height={400}
                      />
                    </div>

                    <div className="contacts__buttons">
                      <div className="mt-6 flex flex-col items-center gap-5">

                        <div className="flex items-center justify-center gap-2 transition-colors duration-200 hover:text-brand-gold">
                          <div className="group -mx-1 flex min-w-0 items-start gap-3.5 rounded-lg px-1 py-1 text-foreground transition-colors hover:text-brand-gold sm:items-center">
                            <span
                              className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-muted/45 text-brand-gold transition-colors group-hover:bg-muted group-hover:text-brand-gold sm:mt-0"
                              aria-hidden
                            >
                              <FaMapLocationDot className="size-[18px] opacity-90" />
                            </span>
                            <span className="min-w-0 flex-1 break-words text-left text-xs font-medium uppercase leading-relaxed tracking-wide text-foreground/95 sm:text-sm sm:font-semibold sm:normal-case sm:tracking-normal">
                              Balti, Stefan Cel Mare, 13
                            </span>
                          </div>
                        </div>

                        <Button
                          className="btnCallPhoneContactForm mt-2 w-full font-bold sm:w-fit"
                          variant="default"
                          size="lg"
                          type="button"
                          onClick={callPhone}
                          id="btnCallPhoneContactForm"
                        >
                          <FaPhoneVolume size="24px" className="" />
                          +37368550030
                        </Button>

                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <LazyMap locale={locale === 'ro' ? 'ro' : 'ru'} />

    </div>
  );
}

export default ContactsLips;
