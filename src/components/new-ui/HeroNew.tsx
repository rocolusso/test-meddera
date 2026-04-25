import React from 'react';
import Image from 'next/image';
import heroBanner from '../../../public/assets/img/baner_full1.jpg';

function HeroNew() {
  return (
    <section className="relative mx-auto min-h-[220px] overflow-hidden border-b border-border bg-muted/25 sm:min-h-[40vh]">
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <Image
          src={heroBanner}
          alt="pintea"
          priority
          quality={50}
          fetchPriority="high"
          fill
          sizes="100vw"
          className="object-contain object-center"
        />
      </div>
    </section>
  );
}

export default HeroNew;
