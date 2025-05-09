import Image from 'next/image';

import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import baner1 from '../public/assets/img/baner_full1.jpg';
import aboutImg from '../public/assets/img/about_2k.jpg';
import biorevit from '../public/assets/img/services/biorevit.png';
import consultcosm from '../public/assets/img/services/consult-cosm.png';
import consultderm from '../public/assets/img/services/consult-derm.png';
import chistkaLica from '../public/assets/img/services/chistka_lica.png';
import massageLica from '../public/assets/img/services/massage_lica.png';
import karboksiterapiya from '../public/assets/img/services/karbiksiterapiya.png';
import pilling from '../public/assets/img/services/pilling.png';
import maskaLica from '../public/assets/img/services/maska_lica.png';
import antiAkne from '../public/assets/img/services/anti-akne.png';
import terapiyaProtivPigment from '../public/assets/img/services/terapiya-protiv-pigm.png';
import dermapen from '../public/assets/img/services/dermapen.png';
import mezolica from '../public/assets/img/services/mezolica.png';
import mezovolos from '../public/assets/img/services/mezovolos.png';
import uvelichenieGub from '../public/assets/img/services/uvelicheniegub.png';
import botoks from '../public/assets/img/services/botoks.png';
import konturnayaPlastika from '../public/assets/img/services/konturnayaplastika.png';
import lipolitiki from '../public/assets/img/services/lipolitiki.png';
import pintea from '@/public/assets/img/pintea.png';

import Contacts from '@/components/contacts';
import BurgerMenu from '@/components/burgerMenu';

import { VisuallyHidden } from '@/components/visually-hidden';

export default function Home({ posts }: { posts: { title: string, url: string }[] }) {
  const [ip, setIp] = useState('');
  const [data, setData] = useState(posts);

  useEffect(() => {
    fetch('/api/ip')
      .then((res) => res.json())
      .then((dataRes) => setIp(dataRes.ip));
  }, []);

  useEffect(() => {
    if ((window as any)?.gtag) {
      (window as any).gtag('event', `ClientIP: ${ip}`, {
        action: 'firstVisit',
      });
    }
  }, [ip]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="ru" />

        <title>Екатерина Пынтя – Дерматолог-косметолог в Бельцах</title>
        <meta
          name="description"
          content="Екатерина Пынтя – опытный дерматолог-косметолог в Бельцах.
          Клиника Meddera: дерматология, косметология,
          удаление образований, ботокс, филлеры, мезотерапия."
        />

        <meta property="og:title" content="Екатерина Пынтя – Дерматолог-косметолог в Бельцах" />
        <meta
          property="og:description"
          content="Екатерина Пынтя – опытный дерматолог-косметолог в Бельцах.
          Клиника Meddera: дерматология, косметология,
          удаление образований, ботокс, филлеры, мезотерапия."
        />
        <meta property="og:image" content="/assets/img/seo-meta/facebook-meta.jpg" />
        <meta property="og:image:alt" content="Екатерина Пынтя – Дерматолог-косметолог в Бельцах" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://meddera.md" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Екатерина Пынтя – Дерматолог-косметолог в Бельцах" />
        <meta
          name="twitter:description"
          content="Екатерина Пынтя – опытный дерматолог-косметолог в Бельцах.
          Клиника Meddera: дерматология, косметология,
          удаление образований, ботокс, филлеры, мезотерапия."
        />
        <meta name="twitter:image" content="/assets/img/seo-meta/twitter-meta.jpg" />
        <meta name="twitter:image:alt" content="Екатерина Пынтя – Дерматолог-косметолог в Бельцах" />
        <meta name="twitter:site" content="@your_twitter_handle" />

      </Head>
      <div>
        <div
          className="header sticky top-0 left-0 backdrop-blur-2xl   header container mx-auto sm:pt-10    z-40"
        >
          <div
            className="flex gap-5 items-center border bg-white p-5 backdrop-blur-2xl sm:rounded-3xl sm:shadow-2xl z-50"
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
            <div className="flex justify-between items-center sm:w-full">
              <nav className="hidden sm:flex ml-20  gap-10 uppercase underline font-bold text-xl">
                <Link
                  href="/#about"
                  className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                >
                  Обо мне
                </Link>
                <Link
                  href="/#services"
                  className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                >
                  Услуги
                </Link>
                <Link
                  href="/#contacts"
                  className="hover:bg-black hover:underline hover:text-white p-5 duration-300 hover:scale-105"
                >
                  Контакты
                </Link>
              </nav>
              <div className="hidden sm:block">
                <Link
                  href="/ro"
                  className="underline border border-black
                  hover:bg-black hover:underline
                  hover:text-white p-5 duration-300 hover:scale-105"
                >
                  RO
                </Link>
              </div>
            </div>
            <BurgerMenu locale="ru" />
          </div>
        </div>
        <div className="hero_block container mx-auto pt-10">
          <div className="flex justify-center container mx-auto">
            <Image
              className="sm:max-w-[1000px] sm:rounded-3xl sm:shadow-2xl"
              src={baner1}
              alt="pintea"
              width={2200}
              height={20}
              priority
            />
          </div>
        </div>
        <div className="about mt-10 mx-auto container p-5 shadow-2xl rounded-3xl" id="about">
          <div className="mx-auto flex justify-center py-10">
            <p className="text-[36px] uppercase underline border
            py-5 px-10  border-black hover:bg-green-400
            duration-300 hover:scale-105"
            >
              Обо
              мне
            </p>
          </div>
          <div className=" flex mx-auto justify-between flex-wrap">
            <div className="">
              <div>
                <div className="mx-auto flex justify-center  flex-col">
                  <p className="text-[2rem] uppercase  text-center ">Пынтя Екатерина</p>
                </div>
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 p-5">
                  <ul className="max-w-[450px] text-[14px] ">
                    <li>
                        <p className="list-icon ">
                            Родом из г. Дрокия, выпускница L.T. B.P.Hasdeu
                            2006
                        </p>
                    </li>
                    <li>
                        <p
                          className="list-icon "
                        >
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
                        <p
                          className="list-icon "
                        >
                            {'Дерматовенеролог и косметолог, специалист центра\n'
                             + '  "Centrul\n'
                                + '  de Medicină Estetică și Cosmetologie VSV Beauty SRL" г.Бельцы 2018-2020'}
                        </p>
                    </li>
                  </ul>
                  <ul className="max-w-[450px] text-[14px] ">
                    <li>
                        <p
                          className="list-icon "
                        >
                            Врач Дерматовенеролог в Центре &#34;Магнифик Норд&#34;  с 2018
                        </p>
                    </li>
                    <li>
                        <p
                          className="list-icon "
                        >
                            {'Дерматолог-косметолог, специалист центра "Magnific\n'
                                            + '                                      MedBeauty" SRL г.Бельцы с 2020'}
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
                </div>
              </div>
              <div>
                <div className="mx-auto flex justify-center  flex-col">
                  <p className="text-[2rem] uppercase  text-center ">Специализация</p>
                </div>
                <div className="mx-auto flex justify-center p-5">
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
                </div>
              </div>
            </div>
            <div className="">
              <Image
                className="rounded-3xl "
                src={aboutImg}
                alt="pintea"
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="services container mx-auto m-10" id="services">
          <div className="mx-auto flex justify-center py-10">
            <p className="text-[36px] uppercase underline border py-5 px-10
            border-black hover:bg-green-400
            duration-300 hover:scale-105"
            >
Услуги
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto gap-10 ">
            <Link
              href="services/2"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={consultderm}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Дерматологическая консультация</p>
              </div>
            </Link>
            <Link
              href="services/1"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={consultcosm}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Консультация у врача-дерматокосметолога</p>
              </div>
            </Link>
            <Link
              href="services/3"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={chistkaLica}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Чистка лица</p>
              </div>
            </Link>
            <Link
              href="services/4"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={massageLica}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Массаж лица</p>
              </div>
            </Link>
            <Link
              href="services/5"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={karboksiterapiya}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Карбокситерапия</p>
              </div>
            </Link>
            <Link
              href="services/6"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={pilling}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Пилинг</p>
              </div>
            </Link>
            <Link
              href="services/7"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={maskaLica}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Альгинатная маска</p>
              </div>
            </Link>
            <Link
              href="services/8"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={antiAkne}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Терапия анти-акне</p>
              </div>
            </Link>
            <Link
              href="services/9"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={terapiyaProtivPigment}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Терапия против пигментации</p>
              </div>
            </Link>
            <Link
              href="services/10"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={dermapen}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Дермапен</p>
              </div>
            </Link>
            <Link
              href="services/11"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={mezolica}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Мезотерапия лица</p>
              </div>
            </Link>
            <Link
              href="services/12"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={mezovolos}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Мезотерапия для волос</p>
              </div>
            </Link>

            <Link
              href="services/13"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={uvelichenieGub}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Увеличение губ</p>
              </div>
            </Link>

            <Link
              href="services/14"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={botoks}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Ботокс</p>
              </div>
            </Link>

            <Link
              href="services/15"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={biorevit}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Биоревитализация</p>
              </div>
            </Link>

            <Link
              href="services/16"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={konturnayaPlastika}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Контурная пластика филлерами</p>
              </div>
            </Link>

            <Link
              href="services/17"
              className="hover:scale-105 duration-300 hover:bg-green-400 hover:text-white"
            >
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-110 duration-500"
                  src={lipolitiki}
                  alt="biorevit"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[1.8rem] p-5 uppercase">Инъекции липолитиков</p>
              </div>
            </Link>

          </div>
        </div>

        <Contacts locale="ru" />

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
                  Современные методы удаления образований: радиокаутер, электрокоагуляция, Jett Plasma.
                  Безопасные и эффективные процедуры для чистой и здоровой кожи.
                </p>

              </div>

              <div>
                <h2>Центр Meddera – Современная клиника в Бельцах</h2>
                <p>
                  Екатерина Пынтя является основателем Центра &#34;Meddera&#34;, открытого в апреле 2024 года.
                  Клиника предлагает полный спектр услуг в области дерматологии и косметологии,
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
                  Свяжитесь с Центром &#34;Meddera&#39;, чтобы записаться на консультацию к Екатерине Пынтя.
                  Она поможет решить дерматологические и эстетические проблемы с профессиональным
                  подходом.
                </p>
              </div>

            </div>
          </div>
        </VisuallyHidden>

      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: [0,1]
    },
  };
}
