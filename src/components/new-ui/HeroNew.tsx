import React from 'react';
import Image from 'next/image';
import baner1 from '../../../public/assets/img/baner_full1.jpg';

function HeroNew() {
  return (
    <section className="relative mx-auto min-h-[220px] overflow-hidden border-b border-border bg-muted/25 sm:min-h-[40vh]">
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <Image
          src={baner1}
          alt="pintea"
          priority
          fetchPriority="high"
          fill
          className="object-contain object-center transition-opacity duration-300"
        />
      </div>
    </section>
  );
}

export default HeroNew;
