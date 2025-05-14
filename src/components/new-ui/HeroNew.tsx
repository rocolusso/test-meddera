import React from 'react';
import Image from 'next/image';
import baner1 from '@/../public/assets/img/baner_full1.jpg';

function HeroNew() {
  return (
    <section className="relative mx-auto  h-[250px] sm:h-[40vh]  overflow-hidden shadow-lg  border-b border-gray-400">
      <div className="absolute inset-0 top-0 left-0 right-0">
        <Image
          className="object-contain no-repeat mx-auto object-center w-full h-full sm:shadow-2xl"
          src={baner1}
          alt="pintea"
          width={2200}
          height={2000}
          priority
        />
        {/* <div className="absolute inset-0 bg-black opacity-20" /> */}
      </div>
    </section>

  );
}

export default HeroNew;
