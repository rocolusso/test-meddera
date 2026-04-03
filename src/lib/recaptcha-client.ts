'use client';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export async function executeRecaptcha(action: string): Promise<string | null> {
  if (typeof window === 'undefined') {
    return null;
  }
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) {
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
