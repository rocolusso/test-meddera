import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { ORIGIN } from '@/blog-data/registry';

type Props = {
  locale: BlogLocale;
  dateModified: string;
};

export function LipAugmentationHubBody({ locale, dateModified }: Props) {
  const ruUrl = `${ORIGIN}/blog/uvelichenie-gub-beltsy`;
  const roUrl = `${ORIGIN}/ro/blog/marire-buzelor-balti`;

  if (locale === 'ru') {
    return (
      <>
        <nav className="text-sm text-gray-500 mb-6" aria-label="Хлебные крошки">
          <Link href="/old_project_design/public" className="underline hover:text-gray-800">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="underline hover:text-gray-800">Блог</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Увеличение губ — гид</span>
        </nav>

        <p className="text-sm text-gray-500 mb-2">
          Обновлено:
          {' '}
          {dateModified}
          {' · '}
          <Link href={roUrl} className="underline hover:text-gray-800" hrefLang="ro">Română</Link>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Увеличение губ в Бельцах: гид по процедуре
        </h1>

        <p className="text-gray-700 leading-relaxed mb-10">
          Этот материал помогает понять, как устроена контурная пластика губ с использованием
          препаратов на основе гиалуроновой кислоты, на что обратить внимание при выборе клиники
          и какие вопросы задать на консультации. Он не заменяет очный осмотр и индивидуальный план лечения.
        </p>

        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className="text-2xl font-semibold text-gray-900 mb-4">
            С чего начать (осведомлённость)
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
            <li>
              <strong>Что это:</strong>
              {' '}
              инъекционная коррекция объёма, формы и симметрии губ; препарат подбирает врач по показаниям.
            </li>
            <li>
              <strong>Кому обычно интересно:</strong>
              {' '}
              тем, кто хочет более выразительный контур, симметрию или мягкую коррекцию возрастных изменений.
            </li>
            <li>
              <strong>Чего материал не делает:</strong>
              {' '}
              не содержит назначений, дозировок и обещаний результата — это возможно только после консультации.
            </li>
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="mofu">
          <h2 id="mofu" className="text-2xl font-semibold text-gray-900 mb-4">
            Как проходит путь пациента (рассмотрение)
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
            <li>
              <strong>Консультация</strong>
              {' '}
              — сбор анамнеза, оценка анатомии губ, обсуждение ожиданий и ограничений.
            </li>
            <li>
              <strong>Подготовка и анестезия</strong>
              {' '}
              — по протоколу клиники; комфорт и безопасность зависят от стерильности и опыта специалиста.
            </li>
            <li>
              <strong>Процедура и контроль результата</strong>
              {' '}
              — моделирование объёма; при необходимости план коррекции обсуждается с врачом.
            </li>
            <li>
              <strong>После процедуры</strong>
              {' '}
              — следование рекомендациям по уходу снижает отёк и риск осложнений.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed">
            На консультации имеет смысл уточнить опыт врача, используемые препараты, варианты техники
            (игла/канюля) и план в случае нежелательного эффекта — это повышает прозрачность и доверие.
          </p>
        </section>

        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className="text-2xl font-semibold text-gray-900 mb-4">
            Следующий шаг в Meddera (решение)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Если вы рассматриваете увеличение губ в Бельцах, логично начать с очной консультации
            и страницы услуги — там описаны формат приёма и запись.
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/uvelychenye-gub-v-belczah"
                className="text-green-700 font-medium underline hover:text-green-900"
              >
                Услуга «Увеличение губ в Бельцах»
              </Link>
            </li>
            <li>
              <Link
                href="/services/konsultaczyya-dermatokosmetologa-v-belczah"
                className="text-green-700 font-medium underline hover:text-green-900"
              >
                Консультация дерматокосметолога
              </Link>
            </li>
            <li>
              <Link
                href="/services/konturnaya-plastyka-fylleramy-v-belczah"
                className="text-green-700 font-medium underline hover:text-green-900"
              >
                Контурная пластика филлерами
              </Link>
            </li>
            <li>
              <Link href="/services/uvelychenye-gub-v-belczah" className="text-gray-800 underline hover:text-gray-950">
                Контакты и запись
              </Link>
            </li>
          </ul>
        </section>

        <section
          className="rounded-lg border border-gray-200 bg-gray-50 p-6 mb-8"
          aria-labelledby="eeat"
        >
          <h2 id="eeat" className="text-lg font-semibold text-gray-900 mb-3">
            Кто готовит материалы и оказывает помощь
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Клиника Meddera, Бельцы. Материал носит информационный характер и подготовлен для пациентов,
            рассматривающих процедуру; медицинские решения принимаются только после очной консультации
            с врачом-дерматокосметологом.
          </p>
        </section>

        <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
          Медицинский дисклеймер: информация на странице не является диагнозом и не заменяет очный приём.
          При острых симптомах, аллергии на компоненты препаратов или сомнениях по показаниям обратитесь к врачу.
        </p>
      </>
    );
  }

  return (
    <>
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/ro" className="underline hover:text-gray-800">Acasă</Link>
        <span className="mx-2">/</span>
        <Link href="/ro/blog" className="underline hover:text-gray-800">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Mărirea buzelor — ghid</span>
      </nav>

      <p className="text-sm text-gray-500 mb-2">
        Actualizat:
        {' '}
        {dateModified}
        {' · '}
        <Link href={ruUrl} className="underline hover:text-gray-800" hrefLang="ru">Русский</Link>
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Mărirea buzelor în Bălți: ghid despre procedură
      </h1>

      <p className="text-gray-700 leading-relaxed mb-10">
        Acest material explică, în linii mari, cum este realizată conturarea buzelor cu preparate pe bază
        de acid hialuronic, la ce să fiți atenți când alegeți o clinică și ce întrebări sunt utile la consultație.
        Nu înlocuiește examenul clinic și planul individual recomandat de medic.
      </p>

      <section className="mb-12" aria-labelledby="tofu-ro">
        <h2 id="tofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">
          De unde începem (informare)
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
          <li>
            <strong>Ce presupune:</strong>
            {' '}
            corecție injectabilă a volumului, formei și simetriei buzelor; preparatul este ales de medic în funcție de indicații.
          </li>
          <li>
            <strong>Cui i se potrivește frecvent:</strong>
            {' '}
            persoanelor care își doresc un contur mai definit, mai multă simetrie sau o corecție discretă a schimbărilor legate de vârstă.
          </li>
          <li>
            <strong>Ce nu face acest ghid:</strong>
            {' '}
            nu conține doze, promisiuni privind rezultatul sau recomandări personale — acestea sunt posibile doar după consultație.
          </li>
        </ul>
      </section>

      <section className="mb-12" aria-labelledby="mofu-ro">
        <h2 id="mofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">
          Cum arată parcursul pacientului (evaluare)
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
          <li>
            <strong>Consultația</strong>
            {' '}
            — istoric medical, evaluarea anatomiei buzelor, așteptări realiste și contraindicații.
          </li>
          <li>
            <strong>Pregătirea și anestezia</strong>
            {' '}
            — conform protocolului clinicii; siguranța include asepsie și experiența specialistului.
          </li>
          <li>
            <strong>Procedura și evaluarea rezultatului</strong>
            {' '}
            — modelarea volumului; eventuala corecție se discută cu medicul.
          </li>
          <li>
            <strong>După procedură</strong>
            {' '}
            — respectarea recomandărilor de îngrijire contribuie la confort și la reducerea edemului.
          </li>
        </ol>
        <p className="text-gray-700 leading-relaxed">
          La consultație puteți clarifica experiența medicului, tipurile de preparate, tehnica (ac/canion) și
          pașii în cazul unui efect nedorit — transparența ajută la încredere și la decizii informate.
        </p>
      </section>

      <section className="mb-12" aria-labelledby="bofu-ro">
        <h2 id="bofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">
          Pasul următor la Meddera (decizie)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Dacă analizați mărirea buzelor în Bălți, este rezonabil să începeți cu o consultație la clinică
          și pagina serviciului dedicat.
        </p>
        <ul className="space-y-3">
          <li>
            <Link
              href="/services/uvelychenye-gub-v-belczah/ro"
              className="text-green-700 font-medium underline hover:text-green-900"
            >
              Serviciul „Mărirea buzelor în Bălți”
            </Link>
          </li>
          <li>
            <Link
              href="/services/konsultaczyya-dermatokosmetologa-v-belczah/ro"
              className="text-green-700 font-medium underline hover:text-green-900"
            >
              Consultația dermatocosmetologului
            </Link>
          </li>
          <li>
            <Link
              href="/services/konturnaya-plastyka-fylleramy-v-belczah/ro"
              className="text-green-700 font-medium underline hover:text-green-900"
            >
              Conturarea cu filler-e
            </Link>
          </li>
          <li>
            <Link href="/services/uvelychenye-gub-v-belczah/ro" className="text-gray-800 underline hover:text-gray-950">
              Contacte și programare
            </Link>
          </li>
        </ul>
      </section>

      <section
        className="rounded-lg border border-gray-200 bg-gray-50 p-6 mb-8"
        aria-labelledby="eeat-ro"
      >
        <h2 id="eeat-ro" className="text-lg font-semibold text-gray-900 mb-3">
          Experiență și transparență
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Clinica Meddera, Bălți. Material informativ pentru persoane care iau în calcul procedura;
          deciziile medicale se iau doar după consultație cu dermatocosmetologul.
        </p>
      </section>

      <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
        Exonerare: conținutul nu constituie diagnostic și nu înlocuiește examenul medical.
        În caz de simptome acute, alergie la componente sau îndoieli privind indicațiile, adresați-vă medicului.
      </p>
    </>
  );
}
