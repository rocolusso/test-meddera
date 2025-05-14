import React from 'react';
import { servicesLinksRo, servicesLinksRu } from '@/lib/db-content';
import Link from 'next/link';
import Image from 'next/image';

function ServicesNew({ locale }:{locale:string}) {
  return (
    <section className="services__block" id="services">

      <div className="max-w-screen-xl mx-auto p-5 ">
        <div className="text-center ">
          <p className="my-6 border border-gray-800 p-5 w-fit mx-auto underline
              text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"
          >
            {locale === 'ru' ? 'Услуги' : 'Servicii'}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

          {
                 locale === 'ru' && servicesLinksRu.map((service) => (
                   <div key={service.id} className="rounded overflow-hidden shadow-lg">

                     <div className="relative hover:scale-110 duration-500">
                       <Link
                         href={service.url}
                       >
                         <Image
                           className="w-full hover:scale-110 duration-500"
                           src={service.imageUrl}
                           alt={`${service.title} в Бельцах. Дерматолог Бельцы`}
                           width={500}
                           height={500}
                           loading="lazy"
                         />
                         <div
                           className="hover:bg-transparent transition duration-300
                          absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"
                         />
                       </Link>

                     </div>
                     <div
                       className=" hover:scale-105 duration-300 hover:bg-green-400
                      hover:text-white transition  ease-in-out"
                     >
                       <Link
                         href={service.url}
                         className="px-6 py-4 font-semibold text-lg inline-block w-full h-full"
                       >
                         {service.title}
                       </Link>
                     </div>
                   </div>
                 ))
                  }

          {
                locale === 'ro' && servicesLinksRo.map((service) => (
                  <div key={service.id} className="rounded overflow-hidden shadow-lg">

                    <div className="relative hover:scale-110 duration-500">
                      <Link
                        href={service.url}
                      >
                        <Image
                          className="w-full hover:scale-110 duration-500"
                          src={service.imageUrl}
                          alt={`${service.title} в Бельцах. Дерматолог Бельцы`}
                          width={500}
                          height={500}
                          loading="lazy"
                        />
                        <div
                          className="hover:bg-transparent transition duration-300
                          absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"
                        />
                      </Link>

                    </div>
                    <div
                      className=" hover:scale-105 duration-300 hover:bg-green-400
                      hover:text-white transition  ease-in-out"
                    >
                      <Link
                        href={service.url}
                        className="px-6 py-4 font-semibold text-lg inline-block w-full h-full"
                      >
                        {service.title}
                      </Link>
                    </div>
                  </div>
                ))
            }

        </div>
      </div>

    </section>
  );
}

export default ServicesNew;
