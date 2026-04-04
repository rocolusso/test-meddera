import type { Metadata } from 'next';

import { ORIGIN } from '@/blog-data/registry';

/** Same asset as physician image in root JSON-LD; absolute URL for crawlers. */
export const DEFAULT_OG_IMAGE_URL = `${ORIGIN}/assets/img/about_2k.jpg`;

export const OG_SITE_NAME = 'Meddera Beauty Clinic';

type BlogOgArgs = {
  title: string;
  description: string;
  url: string;
  locale: 'ru_MD' | 'ro_MD';
  type: 'website' | 'article';
  /** Defaults to clinic OG image. */
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

/** Open Graph + Twitter Card blocks for Ahrefs-complete social previews. */
export function blogSocialMetadata(args: BlogOgArgs): Pick<Metadata, 'openGraph' | 'twitter'> {
  const url = args.imageUrl ?? DEFAULT_OG_IMAGE_URL;
  const alt = args.imageAlt ?? OG_SITE_NAME;
  const image: { url: string; alt: string; width?: number; height?: number } = {
    url,
    alt,
  };
  if (args.imageWidth != null) image.width = args.imageWidth;
  if (args.imageHeight != null) image.height = args.imageHeight;

  return {
    openGraph: {
      title: args.title,
      description: args.description,
      url: args.url,
      type: args.type,
      locale: args.locale,
      siteName: OG_SITE_NAME,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: args.title,
      description: args.description,
      images: [url],
      site: '@your_twitter_handle',
    },
  };
}
