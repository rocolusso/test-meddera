import { getImageProps } from 'next/image';

import {
  HERO_IMAGE_QUALITY,
  HERO_IMAGE_SIZES,
  HERO_IMAGE_SRC,
} from '@/components/new-ui/HeroNew';

/**
 * Emits the same srcSet that <HeroNew> renders, so the browser can start the
 * LCP request before discovering the <Image>. React 19 hoists the <link> tag
 * to <head> automatically. Render only on home pages.
 */
export default function HeroImagePreload() {
  const { props } = getImageProps({
    src: HERO_IMAGE_SRC,
    alt: '',
    quality: HERO_IMAGE_QUALITY,
    sizes: HERO_IMAGE_SIZES,
    priority: true,
    fill: true,
  });
  if (!props.srcSet) return null;
  return (
    <link
      rel="preload"
      as="image"
      // eslint-disable-next-line react/no-unknown-property
      imageSrcSet={props.srcSet}
      // eslint-disable-next-line react/no-unknown-property
      imageSizes={props.sizes}
      fetchPriority="high"
    />
  );
}
