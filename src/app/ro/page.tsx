import React from 'react';
import Image from 'next/image';
import aboutImg from '@/../public/assets/img/about_2k.jpg';
import { VisuallyHidden } from '@/components/Visually-hidden';
import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';
import ServicesNew from '@/components/new-ui/ServicesNew';
import IpChecker from '@/components/new-ui/IpChecker';
import HeroNew from '@/components/new-ui/HeroNew';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.meddera.md/ro',
  },
  title: 'Dermatolog Bălți - Consultații Dermatologice Profesionale | Meddera',
  description: `Programează-te la un dermatolog în Bălți la Meddera. 
  Oferim consultații dermatologice profesionale pentru toate tipurile de afecțiuni ale pielii.`,
  openGraph: {
    title: 'Dermatolog Bălți - Consultații Dermatologice Profesionale | Meddera',
    description: `Programează-te la un dermatolog în Bălți la Meddera. 
  Oferim consultații dermatologice profesionale pentru toate tipurile de afecțiuni ale pielii.`,
    url: 'https://meddera.md/ro',
    type: 'website',
    images: [
      {
        url: '/assets/img/seo-meta/facebook-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dermatolog Bălți - Consultații Dermatologice Profesionale | Meddera',
    description: `Programează-te la un dermatolog în Bălți la Meddera. 
  Oferim consultații dermatologice profesionale pentru toate tipurile de afecțiuni ale pielii.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

export default function Home() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />

      <main>
        <HeroNew />
        <section className="hero__about" id="about">

          <div className="relative bg-white overflow-hidden sm:mt-16">
            <div className="max-w-7xl mx-auto">
              <div
                className="relative z-10 pb-8 bg-white  lg:max-w-2xl lg:w-full "
              >
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full
                  w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div className="pt-1" />

                <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6
                md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
                >
                  <div className="sm:text-center lg:text-left">
                    <div className="text-center w-full mx-auto flex justify-center">
                      <p className="my-6 underline border border-gray-800 p-5 w-fit  text-2xl
                    tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"
                      >
                        Despre mine
                      </p>
                    </div>

                    <div className="">
                      <div className="py-12 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                          <div className="lg:text-center">
                            <p
                              className="font-heading mb-4 bg-orange-100 text-orange-800
                              px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold
                              tracking-widest text-black uppercase title-font"
                            >
                              De ce mă aleg pe mine?
                            </p>
                            <p className="font-heading mt-2 text-3xl leading-8
                            font-semibold tracking-tight text-gray-900 sm:text-4xl"
                            >
                              Pîntea Ecaterina
                            </p>

                          </div>

                          <div className="mt-10">
                            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                              <dl className="relative">
                                {/* <dt /> */}
                                <dd className="mt-2 ml-8 text-base text-gray-500">

                                  <ul className="max-w-[450px] text-[14px] ">
                                    <li>
                                      <p className="list-icon ">
                                        Originară din orașul Drochia,
                                        absolventă a L.T.B.P. Hasdeu în 2006
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">
                                        Absolventă a USMF &#34;Nicolae Testemițanu&#34; 2006-2013
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">
                                        Rezidențiat și licență de medic Dermatovenerolog 2013-2016
                                      </p>
                                    </li>

                                    <li>
                                      <p className="list-icon ">
                                        Dermatovenerolog în orașul Rîșcani la AMSA
                                        Centrul
                                        consultativ 2016-2018
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon">
                                        {'Dermatovenerolog și cosmetolog, specialist la "Centrul\n'
                                          + 'de Medicină Estetică și Cosmetologie '
                                          + 'VSV Beauty SRL" în orașul Bălți 2018-2020'}
                                      </p>
                                    </li>
                                  </ul>
                                </dd>
                                <div />
                              </dl>
                              <dl className="relative">
                                {/* <dt /> */}
                                <dd className="mt-2 ml-8 text-base text-gray-500">
                                  <ul className="max-w-[450px] text-[14px] ">
                                    <li>
                                      <p className="list-icon ">
                                        Medic Dermatovenerolog la Centrul
                                        &#34;Magnific Nord&#34; din 2018
                                      </p>
                                    </li>
                                    <li>
                                      <p
                                        className="list-icon "
                                      >
                                        {'Dermatolog-cosmetolog, specialist la "Magnific\n'
                                          + ' MedBeauty" SRL în orașul Bălți din 2020'}
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">Fondatoarea Centrului &#34;Meddera&#34; din aprilie 2024</p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">
                                        Medic Dermatovenerolog de categoria I, experiență
                                        de
                                        11 ani
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">Cosmetolog, experiență de 7 ani</p>
                                    </li>
                                  </ul>
                                </dd>
                                <div />
                              </dl>

                              <div className="col-span-full">
                                <div className="relative">
                                  <p className="font-heading mt-2 text-3xl leading-8 font-semibold
                                  tracking-tight text-gray-900 sm:text-4xl"
                                  >
                                    Specializare
                                  </p>
                                </div>

                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 ">
                                  <dl className="relative">
                                    <dd className="mt-2 ml-8 text-base text-gray-500">
                                      <ul className="max-w-[450px] text-[14px]">
                                        <li>
                                          <p className="list-icon ">Dermatologie</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Venerologie</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Cosmetologie</p>
                                        </li>

                                        <li>
                                          <p className="list-icon ">Onco-dermatologie</p>
                                        </li>
                                        <li><p className="list-icon ">Dermatoscopie</p></li>
                                        <li>
                                          <p className="list-icon ">
                                            Îndepărtarea formațiunilor benigne (cu
                                            Radiocauter,
                                            Electrocauter, Jett Plasma)
                                          </p>
                                        </li>

                                        <li>
                                          <p className="list-icon ">Dermatologie estetică</p>
                                        </li>

                                        <li>
                                          <p className="list-icon ">
                                            Proceduri injectabile (Fileri, Conturare
                                            facială)
                                          </p>
                                        </li>
                                      </ul>
                                    </dd>
                                    <div />
                                  </dl>

                                  <dl className="relative">
                                    <dd className="mt-2 ml-8 text-base text-gray-500">
                                      <ul className="max-w-[450px] text-[14px]">
                                        <li>
                                          <p className="list-icon ">Augmentarea și mărirea volumului buzelor</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Plasmolifting (PRP terapie)</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Mezoterapie (față, corp, lipolitice)</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Biorevitalizare</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Bioreparație</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Polynucleotide</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Colagenostimulatori</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Neurotoxină (Botox)</p>
                                        </li>
                                      </ul>
                                    </dd>
                                    <div />
                                  </dl>
                                </div>

                              </div>

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="">
                <Image
                  className="w-full object-contain object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src={aboutImg}
                  alt="pintea"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </section>

        <ServicesNew locale="ro" />

        <VisuallyHidden>

          <div className="seo-block bg-gray-400">
            <section>
              <h1>Dermatolog Bălți - Consultații Dermatologice Profesionale</h1>
              <p>Îngrijire dermatologică de calitate la clinica Meddera din Bălți</p>
            </section>
            <section>
              <h2>Serviciile Noastre Dermatologice</h2>
              <ul>
                <li>Consultații dermatologice pentru adulți și copii</li>
                <li>Tratamentul acneei și altor afecțiuni ale pielii</li>
                <li>Dermatoscopie pentru evaluarea alunițelor</li>
                <li>Proceduri cosmetice dermatologice</li>
              </ul>
            </section>
            <section>
              <h2>De Ce Să Alegi Meddera?</h2>
              <article>
                <h3>Experiență și Profesionalism</h3>
                <p>
                  Medicii noștri dermatologi au o vastă experiență în diagnosticarea
                  și tratarea diverselor afecțiuni
                  ale pielii.
                </p>
              </article>
              <article>
                <h3>Tehnologie Modernă</h3>
                <p>
                  Utilizăm echipamente de ultimă generație pentru a asigura cele mai
                  bune rezultate în tratamentele
                  dermatologice.
                </p>
              </article>
              <article>
                <h3>Abordare Personalizată</h3>
                <p>
                  Fiecare pacient beneficiază de un plan de tratament
                  adaptat nevoilor sale specifice.
                </p>
              </article>
              <article>
                <h3>Accesibilitate și Confort</h3>
                <p>
                  Clinica noastră este situată în centrul Bălțiului, oferind un
                  mediu confortabil și accesibil pentru
                  toți pacienții.
                </p>
              </article>
            </section>
            <section>
              <h2>Programează-te Acum</h2>
              <p>
                Nu amâna sănătatea pielii tale. Programează o consultație
                cu un dermatolog în Bălți la clinica
                Meddera.
              </p>
            </section>
            <section>
              <h2>Întrebări Frecvente</h2>
              <ul>
                <li>
                  <strong>Cât durează o consultație dermatologică?</strong>
                  {' '}
                  Aproximativ 30 de minute.
                </li>
                <li>
                  <strong>Este necesară o programare în avans?</strong>
                  {' '}
                  Da, recomandăm programarea prealabilă pentru a
                  evita timpii de așteptare.
                </li>
                <li>
                  <strong>Oferiți tratamente pentru afecțiuni cronice ale pielii?</strong>
                  {' '}
                  Da, tratăm o gamă largă de
                  afecțiuni dermatologice, inclusiv cele cronice.
                </li>
                <li>
                  <strong>Acceptați asigurări medicale?</strong>
                  {' '}
                  Da, colaborăm cu diverse companii de asigurări
                  medicale.
                </li>
              </ul>
            </section>
            <section>
              <h2>Contactează-ne</h2>
              <p>Telefon: +373 685 500 30</p>
              <p>Adresă: Strada Stefan Cel Mare, 13 ,Balti, Moldova </p>
            </section>
          </div>

        </VisuallyHidden>

        <ContactsDynamicWrapperRo />
      </main>
      <FooterNew locale="ro" />
    </>
  );
}
