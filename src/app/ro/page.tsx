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
  title: 'Dermatolog în Bălți | Consultații și tratamente personalizate — Meddera',
  description: `Consultații dermatologice profesionale în Bălți cu Dr.
                     Ecaterina Pîntea. Diagnostic precis,
                     tratamente moderne și îngrijire personalizată la clinica Meddera.`,
  openGraph: {
    title: 'Dermatolog în Bălți | Consultații și tratamente personalizate — Meddera',
    description: `Consultații dermatologice profesionale în Bălți cu Dr.
                     Ecaterina Pîntea. Diagnostic precis,
                     tratamente moderne și îngrijire personalizată la clinica Meddera.`,
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
    title: 'Dermatolog în Bălți | Consultații și tratamente personalizate — Meddera',
    description: `Consultații dermatologice profesionale în Bălți cu Dr.
                     Ecaterina Pîntea. Diagnostic precis,
                     tratamente moderne și îngrijire personalizată la clinica Meddera.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

export default function Home() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ro" />
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
          <div
            style={{ fontSize: '8px' }}
            className="container justify-center mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3"
          >

            <header>
              <h1>Consultație la dermatolog în Bălți</h1>
              <p>
                Obțineți îngrijire dermatologică de calitate cu Dr.
                Ecaterina Pîntea la clinica Meddera.
                Diagnostic precis și tratamente personalizate pentru
                sănătatea pielii dumneavoastră.
              </p>
            </header>
            <main>
              <section>
                <h2>De ce să consultați un dermatolog?</h2>
                <ul>
                  <li>
                    <strong>Diagnostic profesional:</strong>
                    {' '}
                    Evaluare detaliată a afecțiunilor
                    cutanate.
                  </li>
                  <li>
                    <strong>Tratamente personalizate:</strong>
                    {' '}
                    Soluții adaptate nevoilor individuale
                    ale fiecărui pacient.
                  </li>
                  <li>
                    <strong>Prevenție și educație:</strong>
                    {' '}
                    Recomandări pentru menținerea sănătății
                    pielii pe termen lung.
                  </li>
                </ul>
              </section>
              <section>
                <h2>Serviciile oferite de Dr. Ecaterina Pîntea</h2>
                <article>
                  <h3>Dermatologie generală</h3>
                  <p>Tratamentul afecțiunilor precum acnee, eczeme, psoriazis și altele.</p>
                </article>
                <article>
                  <h3>Dermatoscopie</h3>
                  <p>
                    Examinarea leziunilor cutanate pentru diagnosticarea precoce a afecțiunilor
                    grave.
                  </p>
                </article>
                <article>
                  <h3>Proceduri estetice</h3>
                  <p>
                    Servicii precum biorevitalizare, mezoterapie,
                    augmentarea buzelor și altele.
                  </p>
                </article>
                <article>
                  <h3>Îndepărtarea formațiunilor benigne</h3>
                  <p>
                    Eliminarea alunițelor, verucilor și
                    altor leziuni cutanate cu metode moderne.
                  </p>
                </article>
              </section>
              <section>
                <h2>Despre Dr. Ecaterina Pîntea</h2>
                <p>
                  Medic dermatovenerolog cu peste 11 ani de experiență,
                  specializată în dermatologie,
                  venerologie și cosmetologie. Fondatoarea clinicii
                  Meddera din Bălți, dedicată
                  oferirii de servicii dermatologice de înaltă calitate.
                </p>
              </section>
              <section>
                <h2>De ce să alegeți clinica Meddera?</h2>
                <ul>
                  <li>Experiență vastă și profesionalism în domeniul dermatologiei.</li>
                  <li>Abordare centrată pe pacient și tratamente personalizate.</li>
                  <li>Utilizarea tehnologiilor moderne pentru diagnostic și tratament.</li>
                  <li>Atmosferă primitoare și echipă dedicată.</li>
                </ul>
              </section>
              <section>
                <h2>Programați o consultație</h2>
                <p>
                  Sunați la
                  <strong>+37368550030</strong>
                  {' '}
                  sau completați formularul de pe site pentru a
                  vă programa. Vă așteptăm la clinica Meddera
                  din Bălți pentru îngrijire dermatologică
                  de calitate.
                </p>
              </section>
            </main>

          </div>
        </div>

      </VisuallyHidden>

      <ContactsDynamicWrapperRo />
      <FooterNew locale="ro" />
    </>
  );
}
