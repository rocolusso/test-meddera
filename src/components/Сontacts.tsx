'use client';

import React, { useRef, useState } from 'react';
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import Image from 'next/image';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import './lead/phone-input.css';
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
import SectionHeading from '@/components/pofo/SectionHeading';
import {
  contactAlertErrorClass,
  contactAlertSuccessClass,
  contactCardTitleClass,
  contactFieldClass,
  contactFieldErrorClass,
  contactIconRoundClass,
} from '@/components/contact-form-ui';
import { sendGa4Event } from '@/lib/ga4-worker-client';

function Contacts({ locale, hideHeading = false }: { locale: string; hideHeading?: boolean }) {
  const callPhone = () => {
    sendGa4Event('phone_button_contacts1', {
      button_name: 'phone_btn_contact',
      event_label: 'click_btn',
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

    const recaptchaToken = await executeRecaptcha('main_contact');
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

    const res = await fetch('/api/main-contact-form', {
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

    sendGa4Event('form_sended_1', {
      button_name: 'submit_btn',
      event_label: 'sendform',
    });

    setTimeout(() => {
      setSubmitAlert(false);
    }, 3000);
  };

  const fieldClass = contactFieldClass;

  return (
    <div className="contacts scroll-mt-28 border-t border-border bg-background text-foreground" id="contacts">

      <div className="pofo-container section-y">
        {hideHeading ? null : (
          <div className="text-center">
            <SectionHeading as="p" separator title={locale === 'ru' ? 'Контакты' : 'Contacte'} />
          </div>
        )}

        <div className="new__contacts" id="contacts">
          <div
            className="relative flex justify-center bg-background sm:items-center sm:pt-0"
          >
            <div className="mx-auto w-full max-w-6xl sm:px-0">
              <div className="mt-10 overflow-hidden sm:mt-12">
                <div className="grid grid-cols-1 gap-10 py-6 md:grid-cols-2 md:gap-12 md:py-8 lg:gap-14">

                  <div className="form__block__wrapper bg-card shadow-pofo">
                    <div className="mx-auto mt-6 flex justify-center px-4 sm:mt-8">
                      <p className={`mt-2 ${contactCardTitleClass}`}>
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
                            <p className={contactFieldErrorClass} role="alert">
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
                            <p className={contactFieldErrorClass} role="alert">
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
                            <p className={contactFieldErrorClass} role="alert">
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
                                    className={contactAlertErrorClass}
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
                                    className={contactAlertSuccessClass}
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
                          className="mt-6 w-full sm:w-fit"
                          variant="pofo"
                          size="pofo"
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

                  <div className="bg-pofo-light-gray p-5 sm:p-8">
                    <div>
                      <Image
                        className="w-full"
                        src={imgAddress}
                        alt="address"
                        width={400}
                        height={400}
                      />
                    </div>

                    <div className="contacts__buttons">
                      <div className="mt-6 flex flex-col items-center gap-5">

                        <div className="flex items-center justify-center gap-2 transition-colors duration-200 hover:text-deep-pink">
                          <div
                            className="group -mx-1 flex min-w-0 items-start gap-3.5 px-1 py-1 text-pofo-heading transition-colors hover:text-deep-pink sm:items-center"
                          >
                            <span
                              className={contactIconRoundClass}
                              aria-hidden
                            >
                              <FaMapLocationDot className="size-[18px] opacity-90" />
                            </span>
                            <span className="alt-font min-w-0 flex-1 break-words text-left text-[12px] font-semibold uppercase leading-relaxed tracking-[0.5px] sm:text-[13px]">
                              Balti, Stefan Cel Mare, 13
                            </span>
                          </div>
                        </div>

                        <Button
                          className="btnCallPhoneContactForm mt-2 w-full gap-2 sm:w-fit"
                          variant="pofoDark"
                          size="pofo"
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
      <style jsx>{`
        .grecaptcha-badge {
          visibility: hidden;
        }
      `}</style>

    </div>
  );
}

export default Contacts;
