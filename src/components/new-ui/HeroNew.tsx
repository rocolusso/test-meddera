import React from 'react';
import Image from 'next/image';
import heroBanner from '../../../public/assets/img/baner_full1.jpg';

/**
 * Quality intentionally kept on the lower end (40) — hero is a soft-toned banner where compression
 * artifacts are not perceptible, but it gives a noticeable transfer/decoding win on mobile FCP/LCP.
 */
export const HERO_IMAGE_QUALITY = 40;
export const HERO_IMAGE_SIZES = '100vw';
export const HERO_IMAGE_SRC = heroBanner;

function HeroNew() {
  return (
    <section className="relative mx-auto min-h-[220px] overflow-hidden border-b border-border bg-muted/25 sm:min-h-[40vh]">
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <Image
          src={heroBanner}
          alt="pintea"
          priority
          quality={HERO_IMAGE_QUALITY}
          fetchPriority="high"
          fill
          sizes={HERO_IMAGE_SIZES}
          className="object-contain object-center"
          placeholder="blur"
        />
      </div>
    </section>
  );
}

export default HeroNew;
