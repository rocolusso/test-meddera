import React from 'react';
import Image from 'next/image';
import heroBanner from '../../../public/assets/img/baner_full1.jpg';

function HeroNew() {
  return (
    <section className="relative mx-auto h-[230px] overflow-hidden border-b border-border bg-muted/25 sm:h-[42vh] sm:min-h-[300px] lg:h-[48vh]">
      <div className="absolute inset-0 overflow-hidden md:hidden">
        <Image
          src={heroBanner}
          alt="pintea"
          priority
          quality={50}
          fetchPriority="high"
          fill
          sizes="(max-width: 767px) 100vw, 0px"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 hidden justify-center overflow-hidden md:flex">
        <Image
          src={heroBanner}
          alt="pintea"
          priority
          quality={50}
          fetchPriority="high"
          fill
          sizes="(max-width: 767px) 0px, 1200px"
          className="object-contain object-center"
        />
      </div>
    </section>
  );
}

export default HeroNew;
