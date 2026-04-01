import React from 'react';
import Image from 'next/image';
import baner1 from '@/../public/assets/img/baner_full1.jpg';

function HeroNew() {
  return (
    <section className="relative mx-auto  h-[250px] sm:h-[40vh]  overflow-hidden shadow-lg  border-b border-gray-400">
      <div className="block sm:hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={baner1}
            alt="pintea"
            priority
            fill
            sizes="(max-width: 640px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="absolute inset-0 flex justify-center overflow-hidden">
          <Image
            src={baner1}
            alt="pintea"
            priority
            fill
            className="object-contain"
          />
        </div>
      </div>

    </section>

  );
}

export default HeroNew;
