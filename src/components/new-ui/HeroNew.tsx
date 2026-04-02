import React from 'react';
import Image from 'next/image';
import baner1 from '@/../public/assets/img/baner_full1.jpg';

function HeroNew() {
  return (
    <section className="relative mx-auto  h-[250px] sm:h-[40vh]  overflow-hidden shadow-lg  border-b border-gray-400">
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <Image
          src={baner1}
          alt="pintea"
          priority
          fetchPriority="high"
          fill
          className="object-contain"
        />
      </div>

    </section>

  );
}

export default HeroNew;
