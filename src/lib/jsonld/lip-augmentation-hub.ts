/** JSON-LD for lip augmentation content hub (YMYL-safe: no dosage, no guarantees). */

const SITE = 'https://meddera.md';
const PHYSICIAN_ID = `${SITE}/#physician`;
const CLINIC_ID = `${SITE}/#clinic`;

export type LipHubJsonLdOptions = {
  pageUrl: string;
  locale: 'ru' | 'ro';
  title: string;
  description: string;
  dateModified: string;
  breadcrumbItems: { name: string; item: string }[];
};

export function lipAugmentationHubJsonLd(o: LipHubJsonLdOptions) {
  const aboutName = o.locale === 'ro'
    ? 'Mărirea buzelor cu acid hialuronic (informare generală)'
    : 'Увеличение губ гиалуроновой кислотой (общая информация)';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${o.pageUrl}#webpage`,
        url: o.pageUrl,
        name: o.title,
        description: o.description,
        inLanguage: o.locale === 'ro' ? 'ro-MD' : 'ru-MD',
        dateModified: o.dateModified,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Meddera Beauty Clinic',
          url: SITE,
        },
        about: {
          '@type': 'MedicalProcedure',
          name: aboutName,
        },
        author: {
          '@type': 'Person',
          '@id': PHYSICIAN_ID,
          name: 'Ecaterina Pîntea',
          jobTitle: o.locale === 'ro' ? 'Medic dermatocosmetolog' : 'Врач дерматокосметолог',
        },
        publisher: {
          '@type': 'MedicalClinic',
          '@id': CLINIC_ID,
          name: 'Meddera Beauty Clinic',
          url: SITE,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: o.breadcrumbItems.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.item,
        })),
      },
    ],
  };
}
