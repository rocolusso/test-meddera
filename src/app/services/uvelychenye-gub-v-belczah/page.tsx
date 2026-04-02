// import React from 'react';
// // import IpChecker from '@/components/new-ui/IpChecker';
// import HeaderNew from '@/components/new-ui/HeaderNew';
// import ServicesNew from '@/components/new-ui/ServicesNew';
// import { VisuallyHidden } from '@/components/Visually-hidden';
// import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
// import FooterNew from '@/components/new-ui/FooterNew';
// import Image from 'next/image';
// import uvelichenieGub from '@/../public/assets/img/services/uvelicheniegub.png';
//
// export const metadata = {
//   icons: {
//     icon: '/favicon.ico',
//   },
//   alternates: {
//     canonical: 'https://meddera.md/services/uvelychenye-gub-v-belczah',
//   },
//   title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
//   description: 'Профессиональное увеличение губ в Бельцах. Безопасные процедуры с использованием качественных филлеров. Запишитесь на консультацию уже сегодня!',
//   openGraph: {
//     title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
//     description: 'Профессиональное увеличение губ в Бельцах. Безопасные процедуры с использованием качественных филлеров. Запишитесь на консультацию уже сегодня!',
//
//     url: 'https://meddera.md/services/uvelychenye-gub-v-belczah',
//     type: 'website',
//     images: [
//       {
//         url: 'https://meddera.md/assets/img/services/uvelicheniegub.png',
//         width: 1200,
//         height: 630,
//         alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
//     description: 'Профессиональное увеличение губ в Бельцах. Безопасные процедуры с использованием качественных филлеров. Запишитесь на консультацию уже сегодня!',
//
//     images: ['https://meddera.md/assets/img/services/uvelicheniegub.png'],
//     site: '@your_twitter_handle',
//   },
// };
//
// function ServicePage13() {
//   return (
//     <>
//       {/* <IpChecker /> */}
//       <HeaderNew locale="ru" />
//
//       <main>
//
//         <div className="container mx-auto">
//           <div className="py-10 px-5">
//             <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Увеличение губ</p>
//           </div>
//           <div className="flex justify-center">
//             <Image
//               className="hover:scale-110 duration-500"
//               src={uvelichenieGub}
//               alt="biorevit"
//               width={600}
//               height={500}
//               priority
//             />
//           </div>
//           <div>
//             <p className="max-w-[1000px] mx-auto py-10 px-5">
//               Увеличение губ — это косметологическая процедура, направленная
//               на коррекцию формы и объема губ с
//               использованием филлеров на основе гиалуроновой кислоты.
//               Врач-дерматокосметолог подбирает нужное
//               количество препарата, что позволяет добиться естественного и
//               гармоничного результата. Процедура
//               безопасна, и результат заметен сразу после выполнения. Процедура
//               помогает создать естественные
//               контуры, улучшить симметрию и увлажнение губ, а также устранить
//               морщины вокруг них. Гиалуроновая
//               кислота, вводимая в ткани губ, придает им объем, делает их более
//               выразительными и сочными.
//             </p>
//           </div>
//         </div>
//
//         <VisuallyHidden>
//           <div className="seo-block bg-gray-400">
//             <section>
//               <h1>Увеличение губ в Бельцах</h1>
//               <p>
//                 Подчеркните свою естественную красоту с помощью профессиональных
//                 процедур увеличения губ
//               </p>
//             </section>
//             <section>
//               <h2>Почему выбирают нас для увеличения губ в Бельцах</h2>
//               <ul>
//                 <li>Опытные специалисты с медицинским образованием</li>
//                 <li>Использование сертифицированных филлеров высокого качества</li>
//                 <li>Индивидуальный подход к каждому клиенту</li>
//                 <li>Современное оборудование и стерильные условия</li>
//               </ul>
//             </section>
//             <section>
//               <h2>Наши услуги по увеличению губ</h2>
//               <article>
//                 <h3>Контурная пластика губ</h3>
//                 <p>
//                   Процедура, направленная на изменение формы и объема губ с
//                   использованием гиалуроновой кислоты.
//                 </p>
//               </article>
//               <article>
//                 <h3>Коррекция асимметрии губ</h3>
//                 <p>
//                   Исправление природной или возрастной асимметрии для достижения
//                   гармоничного внешнего вида.
//                 </p>
//               </article>
//               <article>
//                 <h3>Увлажнение и омоложение губ</h3>
//                 <p>
//                   Инъекции, способствующие глубокому увлажнению и
//                   улучшению текстуры кожи губ.
//                 </p>
//               </article>
//               <article>
//                 <h3>Удаление филлеров</h3>
//                 <p>
//                   Безопасное удаление ранее введенных филлеров при
//                   необходимости.
//                 </p>
//               </article>
//             </section>
//             <section>
//               <h2>Часто задаваемые вопросы</h2>
//               <ul>
//                 <li>
//                   <strong>Сколько длится эффект от процедуры?</strong>
//                   Эффект сохраняется от 6 до 12 месяцев в
//                   зависимости от индивидуальных особенностей организма.
//                 </li>
//                 <li>
//                   <strong>Болезненна ли процедура?</strong>
//                   Перед инъекцией применяется местная анестезия, что делает
//                   процедуру практически безболезненной.
//                 </li>
//                 <li>
//                   <strong>Есть ли противопоказания?</strong>
//                   Да, существуют противопоказания, такие как беременность,
//                   лактация, воспалительные процессы в области губ и некоторые
//                   хронические заболевания.
//                 </li>
//                 <li>
//                   <strong>Как подготовиться к процедуре?</strong>
//                   Рекомендуется за несколько дней до процедуры
//                   избегать приема алкоголя и разжижающих кровь препаратов.
//                 </li>
//               </ul>
//             </section>
//             <section>
//               <h2>Запишитесь на консультацию</h2>
//               <p>
//                 Готовы подчеркнуть свою красоту? Свяжитесь с нами по
//                 телефону
//                 <a href="tel:+37368550030">+37368550030</a>
//                 {' '}
//                 или запишитесь
//                 онлайн через форму на сайте.
//               </p>
//             </section>
//           </div>
//         </VisuallyHidden>
//
//       </main>
//
//       <ContactsDynamicWrapperRu />
//
//       <ServicesNew locale="ru" />
//
//       <FooterNew locale="ru" />
//
//     </>
//   );
// }
//
// export default ServicePage13;

import React from 'react';
import Link from 'next/link';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import uvelichenieGub from '@/../public/assets/img/services/uvelicheniegub.png';
import uvelichenieGub1 from '../../../../public/assets/img/services/lips/lips1.png';
import uvelichenieGub2 from '../../../../public/assets/img/services/lips/lips2.png';
import uvelichenieGub3 from '../../../../public/assets/img/services/lips/lips3.png';
import uvelichenieGub4 from '../../../../public/assets/img/services/lips/lips4.png';
import uvelichenieGub5 from '../../../../public/assets/img/services/lips/lips5.png';
import uvelichenieGub6 from '../../../../public/assets/img/services/lips/lips6.png';
import uvelichenieGub7 from '../../../../public/assets/img/services/lips/lips7.png';
import uvelichenieGub8 from '../../../../public/assets/img/services/lips/lips8.png';
import uvelichenieGub9 from '../../../../public/assets/img/services/lips/lips9.png';
import uvelichenieGub10 from '../../../../public/assets/img/services/lips/lips10.png';
import ContactsLipsDynamicRu from '@/components/ContactsLipsDynamicRu';

export const metadata = {
  icons: { icon: '/favicon.ico' },
  alternates: { canonical: 'https://meddera.md/services/uvelychenye-gub-v-belczah' },
  title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
  description: 'Профессиональное увеличение губ в Бельцах. Контурная пластика, гиалуроновая кислота, безопасные филлеры. Запишитесь на консультацию уже сегодня!',
  openGraph: {
    title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
    description: 'Профессиональное увеличение губ в Бельцах. Контурная пластика, гиалуроновая кислота, безопасные филлеры. Запишитесь на консультацию уже сегодня!',
    url: 'https://meddera.md/services/uvelychenye-gub-v-belczah',
    type: 'website',
    images: [
      { url: 'https://meddera.md/assets/img/services/uvelicheniegub.png', width: 1200, height: 630, alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Увеличение губ в Бельцах — Эффективные и безопасные процедуры',
    description: 'Профессиональное увеличение губ в Бельцах. Контурная пластика, гиалуроновая кислота, безопасные филлеры.',
    images: ['https://meddera.md/assets/img/services/uvelicheniegub.png'],
    site: '@your_twitter_handle'
  }
};

function ServicePageMoney() {
  return (
    <>
      <HeaderNew locale="ru" />

      <main>
        <div className="container mx-auto px-5 py-10">
          {/* H1 — Главный заголовок */}
          <h1 className="text-[1.8rem] sm:text-[3rem] mx-auto font-bold mb-8  max-w-[900px]">
            Увеличение губ в Бельцах — безопасно, красиво и естественно
          </h1>
          <p className="max-w-[900px] mx-auto mb-6 text-center text-sm text-gray-600">
            <Link href="/blog/uvelichenie-gub-beltsy" className="underline text-green-800 hover:text-green-950">
              Гид по процедуре в блоге
            </Link>
          </p>

          {/* Вступление */}
          <p className="max-w-[900px] mx-auto mb-10 text-lg leading-7">
            Контурная пластика губ с использованием сертифицированных филлеров на основе гиалуроновой кислоты — это современная и безопасная процедура для коррекции формы, объема и симметрии губ. В нашей клинике Meddera опытный дерматокосметолог подбирает индивидуальную схему процедуры, чтобы результат выглядел максимально естественно и гармонично. Эффект заметен сразу и сохраняется до 12 месяцев.
          </p>

          {/* Изображение услуги */}
          <div className="flex justify-center mb-10">
            <Image
              src={uvelichenieGub}
              alt="Увеличение губ в Бельцах"
              width={600}
              height={500}
              className="hover:scale-105 duration-500 rounded-lg"
              priority
            />
          </div>

          <div className={'flex items-center flex-col'}>

            {/* H2 — Преимущества процедуры */}
            <h2 className="text-2xl font-semibold mb-5">Преимущества увеличения губ в Meddera</h2>
            <ul className="list-disc ml-6 mb-10">
              <li>Опытный врач-дерматокосметолог с медицинским образованием</li>
              <li>Использование сертифицированных филлеров высокого качества</li>
              <li>Индивидуальный подбор объема и формы губ</li>
              <li>Современное оборудование и стерильные условия</li>
              <li>Естественный результат с мгновенным эффектом</li>
            </ul>

            {/* H2 — Как проходит процедура */}
            <h2 className="text-2xl font-semibold mb-5">Как проходит процедура увеличения губ</h2>
            <ol className="list-decimal ml-6 mb-10 space-y-3">
              <li>Консультация с врачом, оценка формы губ и подбор филлера</li>
              <li>Обработка кожи и нанесение анестезирующего крема</li>
              <li>Введение филлера с использованием тонких канюль или игл</li>
              <li>Коррекция формы, устранение асимметрии и моделирование контура</li>
              <li>Рекомендации по уходу после процедуры</li>
            </ol>

            {/* H2 — Фото до/после */}
            <h2 className="text-2xl font-semibold mb-5">Результаты процедуры — фото до и после</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-5 mb-10">
              <Image
                src={uvelichenieGub1}
                alt="Фото до и после увеличения губ"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={uvelichenieGub2}
                alt="Фото до и после увеличения губ 2"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={uvelichenieGub3}
                alt="Фото до и после увеличения губ 3"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={uvelichenieGub4}
                alt="Фото до и после увеличения губ 4"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={uvelichenieGub5}
                alt="Фото до и после увеличения губ 5"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={uvelichenieGub6}
                alt="Фото до и после увеличения губ 6"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={uvelichenieGub7}
                alt="Фото до и после увеличения губ 7"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={uvelichenieGub8}
                alt="Фото до и после увеличения губ 8"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={uvelichenieGub9}
                alt="Фото до и после увеличения губ 9"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={uvelichenieGub10}
                alt="Фото до и после увеличения губ 10"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* H2 — Противопоказания */}
            <h2 className="text-2xl font-semibold mb-5">Противопоказания</h2>
            <ul className="list-disc ml-6 mb-10">
              <li>Беременность и лактация</li>
              <li>Воспалительные процессы в области губ</li>
              <li>Аллергические реакции на компоненты филлера</li>
              <li>Некоторые хронические заболевания — по рекомендации врача</li>
            </ul>

            {/* H2 — Почему Meddera */}
            <h2 className="text-2xl font-semibold mb-5">Почему выбирают Meddera для увеличения губ</h2>
            <ul className="list-disc ml-6 mb-10">
              <li>Екатерина Пынтя — сертифицированный врач-дерматокосметолог с опытом более 10 лет</li>
              <li>Более 500 довольных клиентов с естественным результатом</li>
              <li>Сертифицированные препараты, безопасные для здоровья</li>
              <li>Гибкая система записи и консультаций онлайн</li>
            </ul>

            {/* H2 — FAQ */}
            <h2 className="text-2xl font-semibold mb-5">Часто задаваемые вопросы</h2>
            <ul className="list-disc ml-6 mb-10">
              <li>
                <strong>Сколько держится эффект?</strong>
                {' '}
                Обычно от 6 до 12 месяцев, зависит от индивидуальных особенностей.
              </li>
              <li>
                <strong>Больно ли процедура?</strong>
                {' '}
                Практически безболезненно благодаря анестезии.
              </li>
              <li>
                <strong>Можно ли повторять процедуру?</strong>
                {' '}
                Да, при необходимости и по согласованию с врачом.
              </li>
              <li>
                <strong>Как подготовиться к процедуре?</strong>
                {' '}
                Избегать алкоголя и разжижающих кровь препаратов за 2–3 дня.
              </li>
              <li>
                <strong>Какие филлеры используются?</strong>
                {' '}
                Сертифицированные филлеры на основе гиалуроновой кислоты.
              </li>
            </ul>

          </div>

          {/* CTA */}
          <div className="bg-pink-50 p-6 rounded-lg text-center mb-10">
            <p className="mb-4 font-semibold text-lg">Готовы подчеркнуть свою красоту?</p>
            <p className="mb-4">
              Свяжитесь с нами по телефону
              {' '}
              {/*<a href="tel:+37368550030" className="text-pink-600 font-bold">+37368550030</a>*/}
              {' '}
              или запишитесь онлайн.
            </p>
            {/*<a href="#contacts" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-300">*/}
            {/*  Записаться на консультацию*/}
            {/*</a>*/}
          </div>
        </div>

        <ContactsLipsDynamicRu/>
        <ServicesNew locale="ru" />
        <FooterNew locale="ru" />

        {/* JSON-LD FAQ schema */}
        <script
          type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                { '@type': 'Question', 'name': 'Сколько держится эффект?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Обычно от 6 до 12 месяцев, зависит от индивидуальных особенностей.' } },
                { '@type': 'Question', 'name': 'Больно ли процедура?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Практически безболезненно благодаря анестезии.' } },
                { '@type': 'Question', 'name': 'Можно ли повторять процедуру?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Да, при необходимости и по согласованию с врачом.' } },
                { '@type': 'Question', 'name': 'Как подготовиться к процедуре?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Избегать алкоголя и разжижающих кровь препаратов за 2–3 дня.' } },
                { '@type': 'Question', 'name': 'Какие филлеры используются?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Сертифицированные филлеры на основе гиалуроновой кислоты.' } }
              ]
            })
          }}
        />
      </main>
    </>
  );
}

export default ServicePageMoney;
