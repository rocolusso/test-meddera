'use client';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

let loadPromise: Promise<void> | null = null;

function getSiteKey(): string | undefined {
  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
}

/**
 * Loads reCAPTCHA v3 only when needed (form submit), not on every page — cuts gstatic CPU in PageSpeed.
 */
export function ensureRecaptchaScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }
  const siteKey = getSiteKey();
  if (!siteKey) {
    return Promise.resolve();
  }

  if (window.grecaptcha?.ready) {
    return Promise.resolve();
  }

  if (!loadPromise) {
    const existing = document.querySelector<HTMLScriptElement>('script[src*="recaptcha/api.js"]');
    if (existing) {
      if (window.grecaptcha?.ready) {
        loadPromise = Promise.resolve();
      } else {
        loadPromise = new Promise((resolve, reject) => {
          existing.addEventListener('load', () => resolve(), { once: true });
          existing.addEventListener('error', () => reject(new Error('recaptcha script error')), { once: true });
        });
      }
    } else {
      loadPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('recaptcha script error'));
        document.head.appendChild(script);
      });
    }
  }

  return loadPromise;
}

/** Optional: call on first focus in contact forms so token is faster on submit. */
export function prefetchRecaptchaScript(): void {
  void ensureRecaptchaScript();
}

export async function executeRecaptcha(action: string): Promise<string | null> {
  if (typeof window === 'undefined') {
    return null;
  }
  const siteKey = getSiteKey();
  if (!siteKey) {
    return null;
  }

  try {
    await ensureRecaptchaScript();
  } catch {
    return null;
  }

  const { grecaptcha } = window;
  if (!grecaptcha?.execute || !grecaptcha.ready) {
    return null;
  }

  return new Promise((resolve) => {
    grecaptcha.ready(async () => {
      try {
        const token = await grecaptcha.execute(siteKey, { action });
        resolve(token);
      } catch {
        resolve(null);
      }
    });
  });
}
