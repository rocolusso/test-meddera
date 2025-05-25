import React from 'react';
import IpChecker from '@/components/new-ui/IpChecker';
import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import { VisuallyHidden } from '@/components/Visually-hidden';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import FooterNew from '@/components/new-ui/FooterNew';
import Image from 'next/image';
import karboksiterapiya from '@/../public/assets/img/services/karbiksiterapiya.png';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://meddera.md/services/5',
  },
  title: 'Карбокситерапия в Бельцах – Омоложение и лечение кожи | Meddera',
  description: 'Карбокситерапия в Бельцах от клиники Meddera – эффективное омоложение кожи, лечение акне, пигментации и целлюлита. Запишитесь на процедуру уже сегодня!',
  openGraph: {
    title: 'Карбокситерапия в Бельцах – Омоложение и лечение кожи | Meddera',
    description: 'Карбокситерапия в Бельцах от клиники Meddera – эффективное омоложение кожи, лечение акне, пигментации и целлюлита. Запишитесь на процедуру уже сегодня!',

    url: 'https://meddera.md/services/5',
    type: 'website',
    images: [
      {
        url: 'https://meddera.md/assets/img/services/karbiksiterapiya.png',
        width: 1200,
        height: 630,
        alt: 'Екатерина Пынтя – Дерматолог-косметолог в Бельцах',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Карбокситерапия в Бельцах – Омоложение и лечение кожи | Meddera',
    description: 'Карбокситерапия в Бельцах от клиники Meddera – эффективное омоложение кожи, лечение акне, пигментации и целлюлита. Запишитесь на процедуру уже сегодня!',

    images: ['https://meddera.md/assets/img/services/karbiksiterapiya.png'],
    site: '@your_twitter_handle',
  },
};

function ServicePage5() {
  return (
    <>
      <IpChecker />
      <HeaderNew locale="ru" />

      <main>

        <div className="container mx-auto">
          <div className="py-10 px-5">
            <p className="text-[1.5rem] sm:text-[3rem] sm:text-center">Карбокситерапия</p>
          </div>
          <div className="flex justify-center">
            <Image
              className=""
              src={karboksiterapiya}
              alt="biorevit"
              width={600}
              height={500}
              priority
            />
          </div>
          <div>
            <p className="max-w-[1000px] mx-auto py-10 px-5">
              Карбокситерапия — это процедура, направленная на улучшение состояния
              кожи с помощью
              насыщения её
              углекислым газом, без инъекций и нарушений целостности кожи. Во время
              процедуры на лицо
              наносится специальный гель, который активизирует процессы микроциркуляции
              и стимулирует
              приток
              кислорода к клеткам. Это улучшает тонус кожи, повышает её упругость,
              уменьшает выраженность
              морщин и пигментации, а также помогает в борьбе с акне и постакне.
              Карбокситерапия подходит
              для
              всех типов кожи и может быть использована как самостоятельная процедура
              или в сочетании с
              другими уходами.
            </p>
          </div>
        </div>

        <VisuallyHidden>
          <div className="seo-block bg-gray-400">

            <section>
              <h1>Карбокситерапия в Бельцах</h1>
              <p>Эффективное омоложение и лечение кожи в клинике Meddera</p>
            </section>

            <section>
              <h2>Преимущества карбокситерапии</h2>
              <ul>
                <li>Улучшение микроциркуляции и насыщение кожи кислородом</li>
                <li>Стимуляция выработки коллагена и эластина</li>
                <li>Устранение морщин, акне и пигментных пятен</li>
                <li>Повышение упругости и тонуса кожи</li>
              </ul>
            </section>
            <section>
              <h2>Показания к процедуре</h2>
              <article>
                <h3>Омоложение кожи</h3>
                <p>
                  Карбокситерапия способствует разглаживанию морщин и
                  улучшению текстуры кожи, делая ее более молодой и
                  сияющей.
                </p>
              </article>
              <article>
                <h3>Лечение акне и постакне</h3>
                <p>
                  Процедура эффективно борется с воспалениями,
                  уменьшая проявления акне и следов после него.
                </p>
              </article>
              <article>
                <h3>Устранение пигментации</h3>
                <p>
                  Карбокситерапия помогает осветлить пигментные
                  пятна и выровнять тон кожи.
                </p>
              </article>
              <article>
                <h3>Коррекция целлюлита</h3>
                <p>
                  Процедура улучшает лимфодренаж и способствует
                  уменьшению проявлений целлюлита.
                </p>
              </article>
            </section>
            <section>
              <h2>Как проходит процедура</h2>
              <p>
                После консультации с врачом-косметологом, на очищенную
                кожу наносится специальный гель, после чего
                проводится введение углекислого газа с помощью тонкой иглы.
                Процедура занимает около 30 минут и не
                требует реабилитации.
              </p>
            </section>
            <section>
              <h2>Противопоказания</h2>
              <ul>
                <li>Беременность и период лактации</li>
                <li>Острые инфекционные заболевания</li>
                <li>Онкологические заболевания</li>
                <li>Заболевания крови</li>
              </ul>
            </section>
            <section>
              <h2>Почему выбирают Meddera</h2>
              <p>
                Клиника Meddera в Бельцах предлагает профессиональные
                услуги карбокситерапии с использованием
                современного оборудования и сертифицированных препаратов.
                Наши специалисты имеют многолетний опыт и
                индивидуально подходят к каждому клиенту.
              </p>
            </section>
            <section>
              <h2>Записаться на процедуру</h2>
              <p>
                Позвоните нам по телефону
                +37368550030
                {' '}
                или заполните форму на сайте,
                чтобы записаться на консультацию и процедуру карбокситерапии.
              </p>
            </section>

          </div>
        </VisuallyHidden>

        <ContactsDynamicWrapperRu />

        <ServicesNew locale="ru" />

      </main>

      <FooterNew locale="ru" />

    </>
  );
}

export default ServicePage5;
