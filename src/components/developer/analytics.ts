import { sendGa4Event } from '@/lib/ga4-worker-client';

import type { DeveloperLang } from './copy';

/**
 * GA4 events of the /developer page. They go through the same worker as the clinic events and carry
 * page_type = developer (see analytics-context), so they can be filtered out of the clinic reports.
 */
export function trackDeveloper(
  name: string,
  ctaSource: string,
  lang: DeveloperLang,
  extra: Record<string, string | number | boolean> = {},
): void {
  sendGa4Event(name, { cta_source: ctaSource, lang, ...extra });
}

export function trackDeveloperClick(ctaSource: string, lang: DeveloperLang, label = ''): void {
  trackDeveloper('developer_cta_click', ctaSource, lang, {
    button_name: 'developer_cta',
    event_label: label || ctaSource,
  });
}
