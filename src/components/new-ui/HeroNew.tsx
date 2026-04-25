import React from 'react';
import Image from 'next/image';
import heroBanner from '../../../public/assets/img/baner5.jpg';

function HeroNew() {
  return (
    <section className="relative mx-auto h-[230px] overflow-hidden border-b border-border bg-muted/25 sm:h-[42vh] sm:min-h-[300px] lg:h-[48vh]">
      <div className="absolute inset-0">
        <Image
          src={heroBanner}
          alt="pintea"
          priority
          quality={55}
          fetchPriority="high"
          fill
          sizes="100vw"
          className="object-cover object-center md:object-contain"
        />
      </div>
    </section>
  );
}

export default HeroNew;
