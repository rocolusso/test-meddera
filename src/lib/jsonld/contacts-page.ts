import { ID, type Locale } from '@/lib/schema/constants';
import { pageGraph } from '@/lib/schema/graph';

export type ContactsPageJsonLdInput = {
  pageUrl: string;
  locale: Locale;
  pageName: string;
  description: string;
  breadcrumbItems: { name: string; item: string }[];
};

/** ContactPage whose main entity is the clinic (address, phone, hours, map). */
export function contactsPageJsonLd(o: ContactsPageJsonLdInput) {
  return pageGraph({
    locale: o.locale,
    url: o.pageUrl,
    name: o.pageName,
    description: o.description,
    types: ['ContactPage'],
    breadcrumbs: o.breadcrumbItems.map((b) => ({ name: b.name, url: b.item })),
    mainEntityId: ID.clinic,
  });
}
