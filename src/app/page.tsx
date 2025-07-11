import React from 'react';
import Image from 'next/image';

import { VisuallyHidden } from '@/components/Visually-hidden';
import aboutImg from '@/../public/assets/img/about_2k.jpg';

import HeaderNew from '@/components/new-ui/HeaderNew';
import HeroNew from '@/components/new-ui/HeroNew';
// import IpChecker from '@/components/new-ui/IpChecker';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';

import ServicesNew from '@/components/new-ui/ServicesNew';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/',
  },
  title: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
  description: `Екатерина Пынтя – опытный дерматолог-косметолог в Бельцах.
  Клиника Meddera: дерматология, косметология,
  удаление образований, ботокс, филлеры, мезотерапия.`,
  openGraph: {
    title: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
    description: `Екатерина Пынтя – опытный дерматолог-косметолог в Бельцах.
    Клиника Meddera: дерматология, косметология,
    удаление образований, ботокс, филлеры, мезотерапия.`,
    url: 'https://meddera.md/',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/baner5.jpg',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
    description: `Екатерина Пынтя – опытный дерматолог-косметолог в Бельцах.
    Клиника Meddera: дерматология, косметология,
    удаление образований, ботокс, филлеры, мезотерапия.`,
    images: ['https://meddera.md/assets/img/baner5.jpg'],
    site: '@your_twitter_handle',
  },
};

export default function Home() {
  return (
    <>
      {/* <IpChecker /> */}
      <HeaderNew locale="ru" />
      <HeroNew />
      <main>
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
                        Обо мне
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
                              Почему выбирают меня?
                            </p>
                            <p className="font-heading mt-2 text-3xl leading-8
                            font-semibold tracking-tight text-gray-900 sm:text-4xl"
                            >
                              Пынтя Екатерина
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
                                        Родом из г. Дрокия, выпускница L.T. B.P.Hasdeu
                                        2006
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">
                                        Выпускница USMF &#39;Nicolae Testemițanu&#39; 2006-2013
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">
                                        Резидентура и лицензия врач Дерматовенеролог
                                        2013-2016
                                      </p>
                                    </li>

                                    <li>
                                      <p className="list-icon ">
                                        Дерматовенеролог в г.Рышканы в AMSA Centrul
                                        consultativ
                                        2016-2018
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon">
                                        {'Дерматовенеролог и косметолог, специалист центра\n'
                                            + '  "Centrul\n'
                                            + '  de Medicină Estetică și Cosmetologie VSV Beauty SRL" г.Бельцы 2018-2020'}
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
                                        Врач Дерматовенеролог в Центре
                                        &#34;Магнифик Норд&#34;  с 2018
                                      </p>
                                    </li>
                                    <li>
                                      <p
                                        className="list-icon "
                                      >
                                        {'Дерматолог-косметолог, специалист центра "Magnific\n'
                                            + 'MedBeauty" SRL г.Бельцы с 2020'}
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">Основатель Центра &#34;Meddera&#34; апрель 2024</p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">
                                        Врач Дерматовенеролог 1 категории, опыт работы
                                        11
                                        лет
                                      </p>
                                    </li>
                                    <li>
                                      <p className="list-icon ">Косметолог, опыт работы 7 лет</p>
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
                                    Специализация
                                  </p>
                                </div>

                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 ">
                                  <dl className="relative">
                                    <dd className="mt-2 ml-8 text-base text-gray-500">
                                      <ul className="max-w-[450px] text-[14px]">
                                        <li>
                                          <p className="list-icon ">Дерматология</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Венерология</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Косметология</p>
                                        </li>

                                        <li>
                                          <p className="list-icon ">Онко-дерматология</p>
                                        </li>
                                        <li><p className="list-icon ">Дерматоскопия</p></li>
                                        <li>
                                          <p className="list-icon ">
                                            Удаление доброкачественных образований
                                            (Радиокаутером,
                                            Электрокоагулятором, Jett Plasma)
                                          </p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Эстетическая косметология</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">
                                            Инъекционные процедуры (Филлеры, Контурная
                                            пластика)
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
                                          <p className="list-icon ">Аугментация и увеличение губ</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Plasmolifting (ПРП терапия)</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Мезотерапия (лица ,тела, липолитики)</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Биоревитализация</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Биорепарация</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Полинуклеотиды</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Коллагеностимуляторы</p>
                                        </li>
                                        <li>
                                          <p className="list-icon ">Нейротоксин (Ботокс)</p>
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

        <ServicesNew locale="ru" />

        {/* <VisuallyHidden> */}
        {/*  <div className="seo-block bg-gray-400"> */}
        {/*    <div */}
        {/*      style={{ fontSize: '8px' }} */}
        {/*      className="container justify-center
         mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 " */}
        {/*    > */}
        {/*      <div> */}
        {/*        <h1>Дерматолог в Бельцах – Екатерина Пынтя</h1> */}
        {/*        <h2>О Екатерине Пынтя – Профессиональный дерматолог с опытом 11 лет</h2> */}
        {/*        <h2>Услуги дерматолога в Бельцах от Екатерины Пынтя</h2> */}
        {/*      </div> */}

        {/*      <div> */}
        {/*        <h3>Диагностика и лечение дерматологических заболеваний</h3> */}
        {/*        <ul> */}
        {/*          <li> */}
        {/*            <p> */}
        {/*              Дерматология: профессиональный
        подход к лечению акне, экземы, псориаза и */}
        {/*              других */}
        {/*              кожных */}
        {/*              заболеваний. */}
        {/*            </p> */}
        {/*          </li> */}
        {/*          <li> */}
        {/*            <p> */}
        {/*              Онко-дерматология: ранняя диагностика и лечение доброкачественных и */}
        {/*              злокачественных */}
        {/*              кожных новообразований. */}
        {/*            </p> */}
        {/*          </li> */}
        {/*          <li><p>Дерматоскопия: точная
         диагностика родинок и кожных поражений.</p></li> */}
        {/*        </ul> */}
        {/*      </div> */}

        {/*      <div> */}
        {/*        <h3>Эстетическая косметология в Бельцах</h3> */}
        {/*        <ul> */}
        {/*          <li><p>Инъекции ботокса и филлеров для
         коррекции возрастных изменений.</p></li> */}
        {/*          <li><p>Контурная пластика и увеличение губ.</p></li> */}
        {/*          <li><p>Мезотерапия и биоревитализация для
         улучшения структуры кожи.</p></li> */}
        {/*          <li><p>Полинуклеотиды, коллагеностимуляторы
         для естественного омоложения.</p></li> */}
        {/*        </ul> */}
        {/*      </div> */}

        {/*      <div> */}
        {/*        <h3>Удаление доброкачественных образований</h3> */}
        {/*        <p> */}
        {/*          Современные методы удаления образований: */}
        {/*          радиокаутер, электрокоагуляция, Jett Plasma. */}
        {/*          Безопасные и эффективные процедуры для чистой и здоровой кожи. */}
        {/*        </p> */}

        {/*      </div> */}

        {/*      <div> */}
        {/*        <h2>Центр Meddera – Современная клиника в Бельцах</h2> */}
        {/*        <p> */}
        {/*          Екатерина Пынтя является основателем */}
        {/*          Центра &#34;Meddera&#34;, открытого в апреле 2024 года. */}
        {/*          Клиника предлагает полный спектр */}
        {/*          услуг в области дерматологии и косметологии, */}
        {/*          используя */}
        {/*          передовые технологии и современные методики. */}
        {/*        </p> */}

        {/*      </div> */}

        {/*      <div> */}
        {/*        <h2>Почему выбирают Екатерину Пынтя как дерматолога в Бельцах?</h2> */}
        {/*        <ul> */}
        {/*          <li><p>Опыт работы в дерматологии – 11 лет.</p></li> */}
        {/*          <li><p>Сертифицированный косметолог с 7-летним стажем.</p></li> */}
        {/*          <li><p>Индивидуальный подход к каждому пациенту.</p></li> */}
        {/*          <li><p>Использование передовых методик и
         материалов высокого качества.</p></li> */}
        {/*        </ul> */}
        {/*      </div> */}

        {/*      <div> */}
        {/*        <h2>Как записаться на прием к дерматологу в Бельцах?</h2> */}
        {/*        <p> */}
        {/*          Свяжитесь с Центром &#34;Meddera&#39;, чтобы */}
        {/*          записаться на консультацию к Екатерине Пынтя. */}
        {/*          Она поможет решить дерматологические и */}
        {/*          эстетические проблемы с профессиональным */}
        {/*          подходом. */}
        {/*        </p> */}
        {/*      </div> */}

        {/*    </div> */}
        {/*  </div> */}
        {/* </VisuallyHidden> */}

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">

            <section className="col-span-full">
              <h1>Дерматолог Бельцы – Екатерина Пынтя</h1>
              <p>
                Дерматолог Екатерина Пынтя — опытный специалист в Бельцах с
                более чем 11-летней практикой.
                Профессиональное лечение кожных заболеваний, индивидуальный
                подход и современные методики.
                Прием ведётся в клинике
                {' '}
                <strong>Mederra</strong>
                , расположенной в центре Бельц.
              </p>
            </section>

            <section className="col-span-full">
              <h2>Услуги дерматолога в Бельцах</h2>
              <ul className="list-disc ml-4">
                <li>Лечение акне, экземы, псориаза</li>
                <li>Диагностика и удаление новообразований</li>
                <li>Дерматоскопия, биопсия, лабораторные анализы</li>
                <li>Анти-акне терапия и пилинги</li>
              </ul>
            </section>

            <section className="col-span-full">
              <h2>Эстетическая косметология</h2>
              <ul className="list-disc ml-4">
                <li>Ботокс и биоревитализация</li>
                <li>Контурная пластика, увеличение губ</li>
                <li>Мезотерапия, дермапен</li>
                <li>Альгинатные маски и уход за кожей</li>
              </ul>
            </section>

            <section className="col-span-full">
              <h2>Удаление образований</h2>
              <p>
                Безопасное удаление папиллом, родинок, кератом с помощью радиокаутера,
                электрокоагуляции и Jett Plasma. Быстро, безболезненно, эффективно.
              </p>
            </section>

            <section className="col-span-full">
              <h2>Комплексное лечение акне</h2>
              <p>
                Комплексная программа: чистка лица, пилинг, мезотерапия, анти-акне процедуры,
                карбокситерапия. Восстановление здоровья кожи и предотвращение рецидивов.
              </p>
            </section>

            <section className="col-span-full">
              <h2>Почему выбирают Екатерину Пынтя</h2>
              <ul className="list-disc ml-4">
                <li>11 лет опыта в дерматологии</li>
                <li>7 лет сертифицированный косметолог</li>
                <li>Индивидуальный подход</li>
                <li>Современные технологии и методики</li>
              </ul>
            </section>

            <section className="col-span-full">
              <h2>О клинике Mederra</h2>
              <p>
                Основана в 2024 году Екатериной Пынтя. Объединяет дерматологию и косметологию.
                Уютная атмосфера, современные кабинеты, удобное расположение в центре Бельц.
              </p>
            </section>

            <section className="col-span-full">
              <h2>Как записаться</h2>
              <p>
                Запись к дерматологу в Бельцах доступна по телефону или через сайт клиники.
                Консультация включает осмотр, диагноз, рекомендации и план лечения.
              </p>
            </section>

            <section className="col-span-full">
              <h2>Советы перед визитом</h2>
              <ul className="list-disc ml-4">
                <li>Не наносите макияж и крем за сутки</li>
                <li>Избегайте пилингов за 2 дня</li>
                <li>Подготовьте список симптомов и вопросов</li>
              </ul>
            </section>

          </div>

        </VisuallyHidden>
        {/* test commit downgrade */}

      </main>

      <ContactsDynamicWrapperRu />

      <FooterNew locale="ru" />

    </>
  );
}
