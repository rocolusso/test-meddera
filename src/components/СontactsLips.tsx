'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { MdPhoneInTalk } from 'react-icons/md';
import Image from 'next/image';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import LazyMap from '@/components/LazyMap';
import imgAddress from '../../public/assets/img/img_contacts.jpg';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/gtm';
import { executeRecaptcha, prefetchRecaptchaScript } from '@/lib/recaptcha-client';
import RecaptchaDisclaimer from '@/components/RecaptchaDisclaimer';
import DOMPurify from 'dompurify';
import type { ContactFieldErrors } from '@/lib/contact-form-schema';
import { parseContactForm } from '@/lib/contact-form-schema';
import { useContactFormAntiSpam } from '@/hooks/useContactFormAntiSpam';

function ContactsLips({ locale }:{ locale:string }) {
  const [isWorkingHours, setIsWorkingHours] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const workStart = 13; // 10:00
  const workEnd = 18; // 17:00

  const now = new Date();
  const hours = now.getHours();

  const isInWorkingHours = hours >= workStart && hours < workEnd;
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  useEffect(() => {
    setIsWorkingHours(isInWorkingHours);
    setCurrentTime(formattedTime);
  }, [formattedTime, isInWorkingHours]);

  const callPhone = () => {
    // eslint-disable-next-line no-undef
    window.location.href = 'tel:+37368550030';
  };

  const callPhoneFixed = () => {
    trackEvent('phone_click_fixed', {
      action: 'click',
      target: 'Phone_click_fixed',
      label: `Нажатие тел фикс. ${formattedTime}`,
    });
    // eslint-disable-next-line no-undef
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
    setFieldErrors({});
    setLocked(true);

    const parsed = parseContactForm(locale, {
      username: name,
      userphone: phone,
      message,
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
    try {
      const tokenRes = await fetch('/api/form-token');
      tokenJson = (await tokenRes.json()) as { token?: string; disabled?: boolean };
    } catch {
      tokenJson = null;
    }

    const abuseDisabled = tokenJson?.disabled === true;
    const formToken = typeof tokenJson?.token === 'string' ? tokenJson.token : '';
    if (!abuseDisabled && !formToken) {
      setLocked(false);
      setSubmitError(
        locale === 'ru'
          ? 'Сервис временно недоступен. Попробуйте позже.'
          : 'Serviciul este temporar indisponibil. Încercați mai târziu.',
      );
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
          <div className="call-container-absolute bottom-0 right-0">

            <button
              aria-label="btn-call-trigger"
              onClick={callPhoneFixed}
              type="button"
              className="btn-call"
              id="btnCallFixedTrigger"
            >
              <div className="btn-call__ico">
                <MdPhoneInTalk />
              </div>
            </button>

          </div>
          <div
            className="relative flex justify-center bg-background sm:items-center sm:pt-0"
          >
            <div className="mx-auto w-full max-w-6xl sm:px-0">
              <div className="mt-10 overflow-hidden sm:mt-12">
                <div className="grid grid-cols-1 gap-10 py-6 md:grid-cols-2 md:gap-12 md:py-8 lg:gap-14">

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

                  <div className="form__block__wrapper rounded-xl border border-border bg-card shadow-lg sm:rounded-xl">
                    <div className="mx-auto mt-6 flex justify-center px-4 sm:mt-8">
                      <p className="mt-2 text-center font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground">
                        {locale === 'ru' ? 'Запись на консультацию' : 'Programare pentru consultanță'}
                      </p>
                    </div>
                    <div
                      className="working-time-message mx-auto flex max-w-[400px] flex-col items-center justify-center px-4"
                    >
                      <div className="pb-4 text-center">
                        <p className="p-3 text-sm uppercase text-muted-foreground sm:text-base">
                          {locale === 'ru' ? 'Часы работы по предварительной записи:' : 'Program de lucru doar cu programare prealabilă:'}
                          {' '}
                          13:00
                          - 18:00
                        </p>
                      </div>

                      <div className="pb-4 text-center">
                        <p className="rounded-lg p-3 text-sm font-bold text-foreground">
                          {
                            (locale === 'ru'
                              ? 'Стоимость первичной консультации 400 MDL. Повторно - 200 MDL'
                              : 'Costul de bază al consultației este de 400 MDL. Repetată — 200 MDL'
                            )
                          }
                        </p>
                      </div>
                      <div className="text-center">
                        <p className={!isWorkingHours
                          ? 'rounded-lg bg-red-800 p-3 text-sm text-white sm:text-base'
                          : 'mb-6 rounded-lg bg-emerald-800 p-3 text-sm text-white sm:text-base'}
                        >
                          {
                            // eslint-disable-next-line no-nested-ternary
                            isWorkingHours
                              ? (locale === 'ru' ? 'Мы открыты!' : 'Suntem deschiși!')
                              : (locale === 'ru'
                                ? 'Сейчас мы не работаем, но оставьте свои данные, и мы перезвоним в рабочее время.'
                                : 'Acum suntem închisi, dar lăsați datele dumneavoastră și vă vom suna în timpul programului de lucru.'
                              )
                          }
                        </p>
                      </div>
                      {!isWorkingHours
                              && (
                                <p className="p-3 text-sm uppercase text-muted-foreground">
                                  {locale === 'ru' ? 'Текущее время:' : 'ora curentă'}
                                  {' '}
                                  {currentTime}
                                </p>
                              )}
                      {!isWorkingHours
                              && (
                                <p className="p-3 text-sm uppercase text-muted-foreground">
                                  {locale === 'ru' ? 'Часы работы:' : 'Program de lucru:'}
                                  {' '}
                                  13:00
                                  - 18:00
                                </p>
                              )}
                    </div>
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
                              setName(DOMPurify.sanitize(e.target.value));
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
                              setMessage(DOMPurify.sanitize(e.target.value));
                            }}
                          />
                          {fieldErrors.message ? (
                            <p className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
                              {fieldErrors.message}
                            </p>
                          ) : null}

                          {
                            submitError
                              && (
                                <div className="submit_alert" id="formSubmitError">
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
                                <div className="submit_alert" id="formSubmitAlert">
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

                        >
                          {locale === 'ru'
                            ? 'Отправить сообщение'
                            : 'Trimite mesaj'}
                        </Button>

                      </fieldset>
                    </form>
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
