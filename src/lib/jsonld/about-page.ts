import { ID, type Locale } from '@/lib/schema/constants';
import { pageGraph } from '@/lib/schema/graph';

export type AboutPageJsonLdInput = {
  pageUrl: string;
  locale: Locale;
  /** Page title (visible / meta) */
  pageName: string;
  description: string;
  imageUrl: string;
  breadcrumbItems: { name: string; item: string }[];
};

/**
 * «Обо мне»: ProfilePage about the physician. This is the only page where the physician
 * node carries education and specialisation, because that is where they are visible.
 */
export function aboutPageJsonLd(o: AboutPageJsonLdInput) {
  return pageGraph({
    locale: o.locale,
    url: o.pageUrl,
    name: o.pageName,
    description: o.description,
    types: ['ProfilePage', 'AboutPage'],
    breadcrumbs: o.breadcrumbItems.map((b) => ({ name: b.name, url: b.item })),
    physician: 'full',
    founder: true,
    about: 'physician',
    mainEntityId: ID.physician,
    primaryImage: o.imageUrl,
  });
}
