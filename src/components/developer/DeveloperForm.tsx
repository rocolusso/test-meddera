'use client';

import { useId, useState } from 'react';
import type { FormEvent } from 'react';

import { useContactFormAntiSpam } from '@/hooks/useContactFormAntiSpam';
import { executeRecaptcha, prefetchRecaptchaScript } from '@/lib/recaptcha-client';

import type { DeveloperCopy, DeveloperLang } from './copy';
import { trackDeveloper } from './analytics';

type Props = { copy: DeveloperCopy['form']; lang: DeveloperLang };

type Errors = { username?: string; userphone?: string; message?: string };
type Status = 'idle' | 'sending' | 'sent';

export default function DeveloperForm({ copy, lang }: Props) {
  const uid = useId();
  const { formRef, website, setWebsite, getSubmitTimeMs, getBehavior } = useContactFormAntiSpam();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [needs, setNeeds] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const warmUp = () => {
    prefetchRecaptchaScript();
    // the validator pulls in the phone number library: load it before the visitor presses the button
    void import('@/lib/developer-form-schema');
  };

  const toggleNeed = (id: string) => {
    setNeeds((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    setSubmitError('');
    setStatus('sending');

    const { parseDeveloperForm } = await import('@/lib/developer-form-schema');
    const parsed = parseDeveloperForm(lang, { username: name, userphone: contact, message });
    if (!parsed.ok) {
      setErrors(parsed.fieldErrors);
      setStatus('idle');
      return;
    }
    setErrors({});

    const recaptchaToken = await executeRecaptcha('developer_form');
    if (!recaptchaToken) {
      setSubmitError(copy.errors.verify);
      setStatus('idle');
      return;
    }

    let formToken = '';
    let abuseDisabled = false;
    try {
      const tokenRes = await fetch('/api/form-token');
      const tokenJson = (await tokenRes.json()) as { token?: string; disabled?: boolean };
      abuseDisabled = tokenJson.disabled === true;
      formToken = typeof tokenJson.token === 'string' ? tokenJson.token : '';
    } catch {
      formToken = '';
    }
    if (!abuseDisabled && !formToken) {
      setSubmitError(copy.errors.generic);
      setStatus('idle');
      return;
    }

    const payload: Record<string, unknown> = {
      recaptchaToken,
      message: {
        username: parsed.data.username,
        userphone: parsed.data.userphone,
        message: parsed.data.message,
      },
      needs,
      locale: lang,
      source: 'form_submit',
      formPathname: window.location.href,
    };
    if (!abuseDisabled) {
      payload.formToken = formToken;
      payload.website = website;
      payload.behavior = getBehavior();
      payload.submitTimeMs = getSubmitTimeMs();
    }

    try {
      const res = await fetch('/api/developer-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setSubmitError(res.status === 429 ? copy.errors.rate : copy.errors.generic);
        setStatus('idle');
        return;
      }
    } catch {
      setSubmitError(copy.errors.generic);
      setStatus('idle');
      return;
    }

    setName('');
    setContact('');
    setMessage('');
    setNeeds([]);
    setWebsite('');
    setStatus('sent');
    trackDeveloper('developer_lead', 'form_submit', lang, { needs_count: needs.length });
  };

  const nameId = `${uid}-name`;
  const contactId = `${uid}-contact`;
  const messageId = `${uid}-message`;

  return (
    <section className="dv-sec" id="form">
      <div className="dv-formw">
        <div className="dv-formw__intro">
          <p className="dv-eyebrow">{copy.eyebrow}</p>
          <h2 className="dv-h2">{copy.title}</h2>
          <p className="dv-formw__lead">{copy.lead}</p>
        </div>
        {status === 'sent' ? (
          <div className="dv-sent" role="status" aria-live="polite">
            <b>{copy.sentTitle}</b>
            <p>{copy.sentText}</p>
          </div>
        ) : (
          <form className="dv-form" ref={formRef} onSubmit={onSubmit} noValidate onFocus={warmUp}>
            <label className="dv-field" htmlFor={nameId}>
              <span className="dv-sr">{copy.name}</span>
              <input
                id={nameId}
                name="username"
                type="text"
                autoComplete="name"
                placeholder={copy.name}
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                aria-invalid={Boolean(errors.username)}
                aria-describedby={errors.username ? `${nameId}-err` : undefined}
              />
              {errors.username ? <span className="dv-err" id={`${nameId}-err`}>{errors.username}</span> : null}
            </label>
            <label className="dv-field" htmlFor={contactId}>
              <span className="dv-sr">{copy.contact}</span>
              <input
                id={contactId}
                name="contact"
                type="text"
                inputMode="text"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
                placeholder={copy.contact}
                value={contact}
                onChange={(ev) => setContact(ev.target.value)}
                aria-invalid={Boolean(errors.userphone)}
                aria-describedby={`${contactId}-hint${errors.userphone ? ` ${contactId}-err` : ''}`}
              />
              <span className="dv-hint" id={`${contactId}-hint`}>{copy.contactHint}</span>
              {errors.userphone ? <span className="dv-err" id={`${contactId}-err`}>{errors.userphone}</span> : null}
            </label>
            <fieldset className="dv-needs">
              <legend className="dv-eyebrow">{copy.needsLabel}</legend>
              <div className="dv-chips">
                {copy.needs.map((n) => (
                  <button
                    type="button"
                    key={n.id}
                    className="dv-chip"
                    aria-pressed={needs.includes(n.id)}
                    onClick={() => toggleNeed(n.id)}
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="dv-field" htmlFor={messageId}>
              <span className="dv-sr">{copy.message}</span>
              <textarea
                id={messageId}
                name="message"
                rows={4}
                placeholder={copy.message}
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? <span className="dv-err">{errors.message}</span> : null}
            </label>
            <input
              className="dv-hp"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={website}
              onChange={(ev) => setWebsite(ev.target.value)}
            />
            {submitError ? <p className="dv-err dv-err--submit" role="alert">{submitError}</p> : null}
            <button className="dv-btn dv-btn--solid dv-submit" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? copy.sending : copy.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
