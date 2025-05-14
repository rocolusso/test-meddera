import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from '@/components/BurgerMenu';
import pintea from '@/../public/assets/img/pintea.png';

import NavigationLinks from '@/components/new-ui/NavigationLinks';

function HeaderNew({ locale }: {locale: string}) {
  return (
    <header className="sticky top-0 left-0 sm:pt-10 backdrop-blur-2xl   z-40  border-b border-gray-400">
      <div
        className="container mx-auto "
      >
        <div
          className="flex gap-5 p-5 items-center"
        >
          <Link href="/">
            <div className="max-w-[300px]">
              <Image
                src={pintea}
                alt="pintea_logo"
                width={300}
                height={20}
                priority
              />
            </div>
          </Link>

          <NavigationLinks locale={locale} />

          <BurgerMenu locale={locale} />
        </div>
      </div>
    </header>
  );
}

export default HeaderNew;
