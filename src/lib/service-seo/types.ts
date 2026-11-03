export interface ServiceSeoSection {
  h2: string;
  paragraphs?: string[];
  list?: string[];
  /** Paragraphs after the list (for example a note on who decides). */
  after?: string[];
  items?: { h3: string; text: string }[];
}

export interface ServiceFaq { question: string; answer: string }

export interface ServiceSeoLocale {
  sections: ServiceSeoSection[];
  /** Questions that were already on the page (hidden) and are now visible. */
  faq?: ServiceFaq[];
  /** Short service name for breadcrumbs and Service markup. */
  serviceName: string;
  serviceType: string;
}

export interface ServiceSeo {
  /** Page type for WebPage markup. */
  medical?: boolean;
  ru: ServiceSeoLocale;
  ro: ServiceSeoLocale;
}
