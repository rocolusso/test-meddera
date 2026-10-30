/**
 * Interface languages of the /developer page (not the clinic locales ru | ro).
 * Kept apart from developer-form-schema.ts on purpose: that file pulls in the phone number library, and the page itself
 * (language switch) must not load it before the visitor touches the form.
 */
export type DeveloperLocale = 'ru' | 'uk' | 'en';

export const DEVELOPER_LOCALES: readonly DeveloperLocale[] = ['ru', 'uk', 'en'];

export function normalizeDeveloperLocale(raw: unknown): DeveloperLocale {
  return raw === 'uk' || raw === 'en' ? raw : 'ru';
}
