import Image from "next/image";

import baner1 from './../public/assets/img/baner5.jpg'
import about_img from './../public/assets/img/about_2k.jpg'
import biorevit from './../public/assets/img/services/biorevit.png'
import consultcosm from './../public/assets/img/services/consult-cosm.png'
import consultderm from './../public/assets/img/services/consult-derm.png'
import chistkaLica from './../public/assets/img/services/chistka_lica.png'
import massageLica from './../public/assets/img/services/massage_lica.png'
import karboksiterapiya from './../public/assets/img/services/karbiksiterapiya.png'
import pilling from './../public/assets/img/services/pilling.png'
import maskaLica from './../public/assets/img/services/maska_lica.png'
import antiAkne from './../public/assets/img/services/anti-akne.png'
import terapiyaProtivPigment from './../public/assets/img/services/terapiya-protiv-pigm.png'
import dermapen from './../public/assets/img/services/dermapen.png'
import mezolica from './../public/assets/img/services/mezolica.png'
import mezovolos from './../public/assets/img/services/mezovolos.png'
import uvelichenieGub from './../public/assets/img/services/uvelicheniegub.png'
import botoks from './../public/assets/img/services/botoks.png'
import konturnayaPlastika from './../public/assets/img/services/konturnayaplastika.png'
import lipolitiki from './../public/assets/img/services/lipolitiki.png'


import Link from "next/link";
import Contacts from "@/components/contacts";
import pintea from "@/public/assets/img/pintea.png";
import BurgerMenu from "@/components/burgerMenu";

export default function Home() {
  return (
      <div>
          <div className={'sticky top-0 left-0 backdrop-blur-2xl   header container mx-auto sm:pt-10   bg-white z-40'}>
              <div className={'flex gap-5 items-center border p-5 backdrop-blur-2xl sm:rounded-3xl sm:shadow-2xl z-50'}>
                  <Link href={'/'}>
                      <div className={'max-w-[300px]'}>
                          <Image
                              // className="dark:invert"
                              src={pintea}
                              alt="pintea"
                              width={1000}
                              height={20}
                              priority
                          />
                      </div>
                  </Link>

                  <div className={'flex justify-between items-center sm:w-full'}>
                      <nav className={'hidden sm:flex ml-20  gap-10 uppercase underline font-bold text-xl'}>
                          <Link href={'/ro/#about'}
                                className={'hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                              Despre mine
                          </Link>
                          <Link href={'/ro/#services'}
                                className={'hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                              Servicii
                          </Link>
                          <Link href={'/ro/#contacts'}
                                className={'hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                              Contacte
                          </Link>
                      </nav>

                      <div className={'hidden sm:block'}>
                          <Link href={'/'}
                                className={'underline border border-black  hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105'}>
                              {
                                  'RU'
                              }
                          </Link>
                      </div>

                  </div>


                      <BurgerMenu locale={'ro'}/>


                  </div>
              </div>

              <div className={'hero_block mx-auto pt-10'}>
              <div className={'flex justify-center container mx-auto'}>
                  <Image
                      className={'sm:max-w-[1000px] sm:rounded-3xl sm:shadow-2xl'}
                      src={baner1}
                      alt="pintea"
                      width={2200}
                      height={20}
                      priority
                  />
              </div>
          </div>
          <div className={'about mt-10 mx-auto container p-5 shadow-2xl rounded-3xl'} id={'about'}>
              <div className={'mx-auto flex justify-center py-10'}>
                  <h2 className={'text-[36px] uppercase underline border py-5 px-10  border-black hover:bg-green-400 duration-300 hover:scale-105'}>
                      Despre mine
                  </h2>
              </div>
              <div className={' flex mx-auto justify-between flex-wrap'}>
                  <div className={''}>
                      <div>
                          <div className={'mx-auto flex justify-center  flex-col'}>
                              <h2 className={'text-[2rem] uppercase  text-center '}>Pîntea Ecaterina </h2>
                          </div>
                          <div className={'mx-auto grid grid-cols-1 sm:grid-cols-2 p-5'}>
                              <ul className={'max-w-[450px] text-[14px] '}>
                                  <li><p className={'list-icon '}>Originară din orașul Drochia, absolventă a L.T. B.P.
                                      Hasdeu în 2006</p>
                                  </li>
                                  <li><p className={'list-icon '}>{'Absolventă a USMF "Nicolae Testemițanu" 2006-2013'}</p>
                                  </li>
                                  <li><p className={'list-icon '}>Rezidențiat și licență de medic Dermatovenerolog
                                      2013-2016</p>
                                  </li>

                                  <li><p className={'list-icon '}>Dermatovenerolog în orașul Rîșcani la AMSA Centrul
                                      consultativ 2016-2018</p>
                                  </li>
                                  <li><p className={'list-icon '}>{'Dermatovenerolog și cosmetolog, specialist la "Centrul\n' +
                                      '                                      de Medicină Estetică și Cosmetologie VSV Beauty SRL" în orașul Bălți 2018-2020'}</p>
                                  </li>
                              </ul>
                              <ul className={'max-w-[450px] text-[14px] '}>


                                  <li><p className={'list-icon '}>{'Medic Dermatovenerolog la Centrul "Magnific Nord"\n' +
                                      '                                      2018-2022'}</p>
                                  </li>

                                  <li><p className={'list-icon '}>{'Dermatolog-cosmetolog, specialist la "Magnific\n' +
                                      '                                      MedBeauty" SRL în orașul Bălți din 2020'}</p>
                                  </li>

                                  <li><p className={'list-icon '}>{'Fondatoarea Centrului "Meddera" din aprilie 2024'}</p>
                                  </li>
                                  <li><p className={'list-icon '}>Medic Dermatovenerolog de categoria I, experiență de
                                      11 ani</p>
                                  </li>
                                  <li><p className={'list-icon '}>Cosmetolog, experiență de 7 ani</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div>
                          <div className={'mx-auto flex justify-center  flex-col'}>
                              <h3 className={'text-[2rem] uppercase  text-center '}>Specializare</h3>
                          </div>
                          <div className={'mx-auto flex justify-center p-5'}>
                              <ul className={'max-w-[450px] text-[14px]'}>
                                  <li><p className={'list-icon '}>Dermatologie</p>
                                  </li>
                                  <li><p className={'list-icon '}>Venerologie</p>
                                  </li>
                                  <li><p className={'list-icon '}>Cosmetologie</p>
                                  </li>

                                  <li><p className={'list-icon '}>Onco-dermatologie</p>
                                  </li>
                                  <li><p className={'list-icon '}>Dermatoscopie</p></li>
                                  <li><p className={'list-icon '}>Îndepărtarea formațiunilor benigne (cu Radiocauter,
                                      Electrocauter, Jett Plasma)</p>
                                  </li>

                                  <li><p className={'list-icon '}>Dermatologie estetică</p>
                                  </li>

                                  <li><p className={'list-icon '}>Proceduri injectabile (Filleri, Conturarea feței)</p>
                                  </li>
                                  <li><p className={'list-icon '}>Augmentarea și mărirea volumului buzelor</p>
                                  </li>
                                  <li><p className={'list-icon '}>Plasmolifting (PRP terapie)</p>
                                  </li>
                                  <li><p className={'list-icon '}>Mezoterapie (față, corp, lipolitice)</p>
                                  </li>
                                  <li><p className={'list-icon '}>Biorevitalizare</p>
                                  </li>
                                  <li><p className={'list-icon '}>Bioreparație</p>
                                  </li>
                                  <li><p className={'list-icon '}>Polynucleotide</p>
                                  </li>
                                  <li><p className={'list-icon '}>Colagenostimulatori</p>
                                  </li>
                                  <li><p className={'list-icon '}>Neurotoxină (Botox)</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className={''}>
                      <Image
                          className={'rounded-3xl '}
                          src={about_img}
                          alt="pintea"
                          width={500}
                          height={500}
                          priority
                      />
                  </div>
              </div>
          </div>

          <div className={'services container mx-auto m-10'} id={'services'}>
              <div className={'mx-auto flex justify-center py-10'}>
                  <h2 className={'text-[36px] uppercase underline border py-5 px-10  border-black hover:bg-green-400 duration-300 hover:scale-105'}>Servicii</h2>
              </div>
              <div className={'grid grid-cols-1 sm:grid-cols-3 mx-auto gap-10 '}>





                  <Link href={'services/2/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={consultderm}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Consultația dermatologică</h3>
                      </div>
                  </Link>


                  <Link href={'services/1/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={consultcosm}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Consultația la medicul dermatocosmetolog</h3>
                      </div>
                  </Link>


                  <Link href={'services/3/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={chistkaLica}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Curățarea feței</h3>
                      </div>
                  </Link>

                  <Link href={'services/4/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={massageLica}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Masaj facial</h3>
                      </div>
                  </Link>

                  <Link href={'services/5/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={karboksiterapiya}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Carboxiterapie</h3>
                      </div>
                  </Link>

                  <Link href={'services/6/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={pilling}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Peeling</h3>
                      </div>
                  </Link>

                  <Link href={'services/7/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={maskaLica}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Masca alginică</h3>
                      </div>
                  </Link>

                  <Link href={'services/8/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={antiAkne}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Terapia anti-acnee</h3>
                      </div>
                  </Link>

                  <Link href={'services/9/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={terapiyaProtivPigment}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Terapie împotriva pigmenției</h3>
                      </div>
                  </Link>

                  <Link href={'services/10/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={dermapen}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Dermapen</h3>
                      </div>
                  </Link>

                  <Link href={'services/11/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={mezolica}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Mezoterapia facială</h3>
                      </div>
                  </Link>

                  <Link href={'services/12/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={mezovolos}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Mezoterapia pentru păr</h3>
                      </div>
                  </Link>

                  <Link href={'services/13/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={uvelichenieGub}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Mărirea buzelor</h3>
                      </div>
                  </Link>

                  <Link href={'services/14/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={botoks}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Botoxul</h3>
                      </div>
                  </Link>

                  <Link href={'services/15/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={biorevit}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Biorevitalizarea</h3>
                      </div>
                  </Link>


                  <Link href={'services/16/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={konturnayaPlastika}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Plastica de contur cu fillere</h3>
                      </div>
                  </Link>


                  <Link href={'services/17/ro'}
                        className={'hover:scale-105 duration-300 hover:bg-green-400 hover:text-white'}>
                      <div className={'overflow-hidden'}>
                          <Image
                              className={'hover:scale-110 duration-500'}
                              src={lipolitiki}
                              alt="biorevit"
                              width={500}
                              height={500}
                              priority
                          />
                      </div>
                      <div>
                          <h3 className={'text-[1.8rem] p-5 uppercase'}>Injecții lipolitice</h3>
                      </div>
                  </Link>


              </div>
          </div>

          <Contacts locale={'ro'}/>


      </div>
  );
}
