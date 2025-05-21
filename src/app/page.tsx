import React from 'react';
import Image from 'next/image';

import { VisuallyHidden } from '@/components/Visually-hidden';
import aboutImg from '@/../public/assets/img/about_2k.jpg';

import HeaderNew from '@/components/new-ui/HeaderNew';
import HeroNew from '@/components/new-ui/HeroNew';
import IpChecker from '@/components/new-ui/IpChecker';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';

import ServicesNew from '@/components/new-ui/ServicesNew';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
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
    url: 'https://meddera.md',
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
    title: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
    description: `Екатерина Пынтя – опытный дерматолог-косметолог в Бельцах.
    Клиника Meddera: дерматология, косметология,
    удаление образований, ботокс, филлеры, мезотерапия.`,
    images: ['/assets/img/seo-meta/twitter-meta.jpg'],
    site: '@your_twitter_handle',
  },
};

export default function Home() {
  return (
    <>
      <IpChecker />
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
            <div
              style={{ fontSize: '8px' }}
              className="container justify-center   mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 "
            >
              <div>
                <h1>Дерматолог в Бельцах – Екатерина Пынтя</h1>
                <h2>О Екатерине Пынтя – Профессиональный дерматолог с опытом 11 лет</h2>
                <h2>Услуги дерматолога в Бельцах от Екатерины Пынтя</h2>
                <p>
                  Ищете профессионального дерматолога в Бельцах?
                  <strong>Дерматолог Екатерина Пынтя</strong>
                  {' '}
                  — это
                  надежный выбор для тех, кто заботится о здоровье кожи.
                  Более 11 лет опыта в дерматологии,
                  высококвалифицированный подход, современные методики
                  лечения и косметологические процедуры — всё это
                  доступно в клинике
                  <a href="https://www.meddera.md/">Mederra</a>
                  .
                </p>
                <p>
                  Благодаря индивидуальному подходу к каждому пациенту,
                  Екатерина Пынтя успешно помогает избавиться от
                  различных кожных заболеваний, восстановить здоровье
                  кожи и вернуть уверенность в себе.
                </p>
              </div>

              <div>
                <h3>Диагностика и лечение дерматологических заболеваний</h3>
                <ul>
                  <li>
                    <p>
                      Дерматология: профессиональный подход к лечению акне, экземы, псориаза и
                      других
                      кожных
                      заболеваний.
                    </p>
                  </li>
                  <li>
                    <p>
                      Онко-дерматология: ранняя диагностика и лечение доброкачественных и
                      злокачественных
                      кожных новообразований.
                    </p>
                  </li>
                  <li><p>Дерматоскопия: точная диагностика родинок и кожных поражений.</p></li>
                </ul>
              </div>

              <div>
                <h3>Эстетическая косметология в Бельцах</h3>
                <ul>
                  <li><p>Инъекции ботокса и филлеров для коррекции возрастных изменений.</p></li>
                  <li><p>Контурная пластика и увеличение губ.</p></li>
                  <li><p>Мезотерапия и биоревитализация для улучшения структуры кожи.</p></li>
                  <li><p>Полинуклеотиды, коллагеностимуляторы для естественного омоложения.</p></li>
                </ul>
              </div>

              <div>
                <h3>Удаление доброкачественных образований</h3>
                <p>
                  Современные методы удаления образований:
                  радиокаутер, электрокоагуляция, Jett Plasma.
                  Безопасные и эффективные процедуры для чистой и здоровой кожи.
                </p>

              </div>

              <div>
                <h3>Диагностика и лечение кожных заболеваний</h3>
                <p>
                  Если вы столкнулись с акне, дерматитом,
                  псориазом, экземой или другими проблемами кожи — самое время
                  записаться на
                  <a href="https://www.meddera.md/services/2">Дерматологическую консультацию</a>
                  .
                  Екатерина Пынтя точно определит причину
                  заболевания и предложит эффективное лечение.
                </p>

                <h3>Лечение акне</h3>
                <p>
                  Угревая сыпь — одна из самых частых причин
                  обращения к дерматологу в Бельцах. Комплексный подход
                  включает:
                </p>
                <ul>
                  <li><a href="https://www.meddera.md/services/3">Чистка лица</a></li>
                  <li><a href="https://www.meddera.md/services/5">Карбокситерапия</a></li>
                  <li><a href="https://www.meddera.md/services/6">Пилинг</a></li>
                  <li><a href="https://www.meddera.md/services/8">Терапия анти-акне</a></li>
                  <li><a href="https://www.meddera.md/services/11">Мезотерапия лица</a></li>
                </ul>
                <p>
                  Лечение проводится с учетом типа кожи и степени
                  тяжести акне, что обеспечивает устойчивый
                  результат.
                </p>

                <h3>Удаление новообразований</h3>
                <p>
                  В клинике можно безопасно удалить папилломы,
                  бородавки и родинки. Все процедуры проводятся с
                  использованием современных технологий. После
                  <a href="https://www.meddera.md/services/2">
                    консультации
                    дерматолога
                  </a>
                  {' '}
                  подбирается оптимальный метод — радиоволновой, лазерный или плазменный.
                </p>

                <h3>Косметология и омоложение</h3>
                <p>
                  Эстетическая косметология — важная часть
                  практики Екатерины Пынтя. В клинике доступны:
                </p>
                <ul>
                  <li>
                    <a href="https://www.meddera.md/services/14">Ботокс</a>
                    {' '}
                    и
                    {' '}
                    <a
                      href="https://www.meddera.md/services/15"
                    >
                      Биоревитализация
                    </a>
                  </li>
                  <li><a href="https://www.meddera.md/services/13">Увеличение губ</a></li>
                  <li><a href="https://www.meddera.md/services/16">Контурная пластика филлерами</a></li>
                  <li><a href="https://www.meddera.md/services/10">Дермапен</a></li>
                  <li><a href="https://www.meddera.md/services/7">Альгинатная маска</a></li>
                </ul>
                <p>
                  Все процедуры проводятся по международным
                  стандартам с использованием сертифицированных
                  препаратов.
                </p>

                <h2>Где находится клиника</h2>
                <p>
                  Клиника находится в самом центре Бельц, удобно
                  добраться из любой части города. Для записи на
                  <a
                    href="https://www.meddera.md/services/1"
                  >
                    консультацию у врача-дерматокосметолога
                  </a>
                  , свяжитесь с
                  нами по телефону или через сайт.
                </p>

                <h2>Часто задаваемые вопросы</h2>
                <dl>
                  <dt>Что входит в консультацию дерматолога?</dt>
                  <dd>
                    Осмотр кожи, сбор анамнеза, постановка диагноза,
                    рекомендации по уходу, назначение лечения и
                    дополнительных процедур.
                  </dd>

                  <dt>Что нужно сделать перед походом к дерматологу?</dt>
                  <dd>
                    Откажитесь от макияжа, не наносите кремы,
                    не делайте пилинги за 2 дня до визита.
                  </dd>

                  <dt>В каком случае стоит идти к дерматологу?</dt>
                  <dd>
                    При появлении высыпаний, раздражения, зуда,
                    новообразований или изменений кожи.
                  </dd>

                  <dt>Что делают на первом приеме у дерматолога?</dt>
                  <dd>
                    Осматривают проблемную зону, оценивают состояние кожи,
                    предлагают план лечения.
                  </dd>

                  <dt>Что нельзя делать перед визитом?</dt>
                  <dd>
                    Не использовать новые средства, не удалять волосы
                    с кожи, не посещать солярий.
                  </dd>

                  <dt>Когда стоит идти к дерматологу?</dt>
                  <dd>
                    Как только вы замечаете изменения на коже — ранняя
                    диагностика ускоряет выздоровление.
                  </dd>

                  <dt>Какие жалобы говорить дерматологу?</dt>
                  <dd>
                    Покраснение, шелушение, прыщи, зуд, новообразования,
                    изменение цвета или структуры кожи.
                  </dd>

                  <dt>Какие части тела проверяет дерматолог?</dt>
                  <dd>
                    Лицо, тело, спина, волосистая часть головы, ногти и
                    при необходимости слизистые.
                  </dd>
                </dl>

                <h2>Заключение</h2>
                <p>
                  <strong>Дерматолог Екатерина Пынтя</strong>
                  {' '}
                  в Бельцах — это гарантия профессионального подхода,
                  качественного лечения и индивидуального подхода к каждому
                  пациенту. Запишитесь на приём и верните
                  своей коже здоровье и красоту!
                </p>
              </div>

              <div>
                <h2>Центр Meddera – Современная клиника в Бельцах</h2>
                <p>
                  Екатерина Пынтя является основателем
                  Центра &#34;Meddera&#34;, открытого в апреле 2024 года.
                  Клиника предлагает полный спектр
                  услуг в области дерматологии и косметологии,
                  используя
                  передовые технологии и современные методики.
                </p>

              </div>

              <div>
                <h2>Почему выбирают Екатерину Пынтя как дерматолога в Бельцах?</h2>
                <ul>
                  <li><p>Опыт работы в дерматологии – 11 лет.</p></li>
                  <li><p>Сертифицированный косметолог с 7-летним стажем.</p></li>
                  <li><p>Индивидуальный подход к каждому пациенту.</p></li>
                  <li><p>Использование передовых методик и материалов высокого качества.</p></li>
                </ul>
              </div>

              <div>
                <h2>Как записаться на прием к дерматологу в Бельцах?</h2>
                <p>
                  Свяжитесь с Центром &#34;Meddera&#39;, чтобы
                  записаться на консультацию к Екатерине Пынтя.
                  Она поможет решить дерматологические и
                  эстетические проблемы с профессиональным
                  подходом.
                </p>
              </div>

            </div>
          </div>
        </VisuallyHidden>

      </main>

      <ContactsDynamicWrapperRu />

      <FooterNew locale="ru" />

    </>
  );
}
