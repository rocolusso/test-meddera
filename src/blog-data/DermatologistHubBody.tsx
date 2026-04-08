import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { ORIGIN } from '@/blog-data/registry';

type Props = {
  locale: BlogLocale;
  dateModified: string;
};

export function DermatologistHubBody({ locale, dateModified }: Props) {
  const ruUrl = `${ORIGIN}/blog/dermatolog-beltsy-hub`;
  const roUrl = `${ORIGIN}/ro/blog/dermatolog-balti-hub`;

  if (locale === 'ru') {
    return (
      <>
        <nav className="text-sm text-gray-500 mb-6" aria-label="Хлебные крошки">
          <Link href="/" className="underline hover:text-gray-800">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="underline hover:text-gray-800">Блог</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Дерматолог в Бельцах — гид</span>
        </nav>

        <p className="text-sm text-gray-500 mb-2">
          Обновлено:
          {' '}
          {dateModified}
          {' · '}
          <Link href={roUrl} className="underline hover:text-gray-800" hrefLang="ro">Română</Link>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Дерматолог в Бельцах: гид по консультации и лечению
        </h1>

        <p className="text-gray-700 leading-relaxed mb-10">
          Этот материал помогает понять, когда нужна консультация дерматолога, какие заболевания кожи
          диагностируются и лечатся в клинике Meddera, и как подготовиться к приёму. Он не заменяет
          очный осмотр и индивидуальный план лечения.
        </p>

        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className="text-2xl font-semibold text-gray-900 mb-4">
            С чего начать (осведомлённость)
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
            <li>
              <strong>Что включает консультация:</strong>
              {' '}
              осмотр кожи, сбор анамнеза, диагностика заболеваний, назначение лечения или дополнительных исследований.
            </li>
            <li>
              <strong>Кому подходит:</strong>
              {' '}
              пациентам с акне, экземой, псориазом, дерматитом, грибковыми инфекциями, новообразованиями кожи,
              а также для профилактических осмотров родинок.
            </li>
            <li>
              <strong>Что не делает этот гид:</strong>
              {' '}
              не содержит диагнозов, назначений или рекомендаций по самолечению — это возможно только после очной консультации.
            </li>
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="mofu">
          <h2 id="mofu" className="text-2xl font-semibold text-gray-900 mb-4">
            Как проходит консультация (оценка)
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
            <li>
              <strong>Сбор анамнеза</strong>
              {' '}
              — врач уточняет жалобы, длительность симптомов, предыдущее лечение, аллергии и хронические заболевания.
            </li>
            <li>
              <strong>Осмотр кожи</strong>
              {' '}
              — визуальная оценка состояния кожи, при необходимости — дерматоскопия для детального изучения новообразований.
            </li>
            <li>
              <strong>Диагностика</strong>
              {' '}
              — постановка диагноза на основе осмотра; в некоторых случаях назначаются анализы (соскоб, биопсия, аллергопробы).
            </li>
            <li>
              <strong>План лечения</strong>
              {' '}
              — врач назначает терапию (местную, системную или комбинированную), объясняет схему применения препаратов и назначает контрольный визит.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed">
            На консультации вы можете уточнить опыт врача, методы диагностики, возможные побочные эффекты лечения
            и прогноз — прозрачность помогает принять информированное решение.
          </p>
        </section>

        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className="text-2xl font-semibold text-gray-900 mb-4">
            Следующий шаг в Meddera (решение)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Если вы рассматриваете консультацию дерматолога в Бельцах, логично начать с записи на приём
            и ознакомления со страницей услуги.
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye"
                className="text-green-700 font-medium underline hover:text-green-900"
              >
                Услуга «Дерматолог в Бельцах»
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
                href="/services/terapyya-anty-akne-v-belczah"
                className="text-green-700 font-medium underline hover:text-green-900"
              >
                Терапия анти-акне
              </Link>
            </li>
            <li>
              <Link href="/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye" className="text-gray-800 underline hover:text-gray-950">
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
            рассматривающих консультацию дерматолога; медицинские решения принимаются только после очной консультации с врачом.
          </p>
        </section>

        <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
          Медицинский дисклеймер: информация на странице не является диагнозом и не заменяет очный приём.
          При острых симптомах, аллергических реакциях или сомнениях по показаниям обратитесь к врачу.
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
        <span className="text-gray-800">Dermatolog în Bălți — ghid</span>
      </nav>

      <p className="text-sm text-gray-500 mb-2">
        Actualizat:
        {' '}
        {dateModified}
        {' · '}
        <Link href={ruUrl} className="underline hover:text-gray-800" hrefLang="ru">Русский</Link>
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Dermatolog în Bălți: ghid despre consultație și tratament
      </h1>

      <p className="text-gray-700 leading-relaxed mb-10">
        Acest material explică când este necesară consultația dermatologului, ce afecțiuni ale pielii
        sunt diagnosticate și tratate la clinica Meddera și cum să vă pregătiți pentru vizită.
        Nu înlocuiește examenul clinic și planul individual de tratament.
      </p>

      <section className="mb-12" aria-labelledby="tofu-ro">
        <h2 id="tofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">
          De unde începem (informare)
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
          <li>
            <strong>Ce presupune consultația:</strong>
            {' '}
            examinarea pielii, colectarea anamnesticului, diagnosticul afecțiunilor, prescrierea tratamentului sau investigațiilor suplimentare.
          </li>
          <li>
            <strong>Cui i se potrivește:</strong>
            {' '}
            pacienților cu acnee, eczemă, psoriazis, dermatită, infecții fungice, neoplasmele pielii,
            precum și pentru examinări preventive ale aluniţelor.
          </li>
          <li>
            <strong>Ce nu face acest ghid:</strong>
            {' '}
            nu conține diagnostice, prescripții sau recomandări de autotreatment — acestea sunt posibile doar după consultație.
          </li>
        </ul>
      </section>

      <section className="mb-12" aria-labelledby="mofu-ro">
        <h2 id="mofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">
          Cum decurge consultația (evaluare)
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
          <li>
            <strong>Colectarea anamnesticului</strong>
            {' '}
            — medicul clarifică plângerile, durata simptomelor, tratamentul anterior, alergiile și bolile cronice.
          </li>
          <li>
            <strong>Examinarea pielii</strong>
            {' '}
            — evaluare vizuală a stării pielii; dacă este necesar, dermatoscopie pentru studiul detaliat al neoplasmelor.
          </li>
          <li>
            <strong>Diagnosticul</strong>
            {' '}
            — stabilirea diagnosticului pe baza examinării; în unele cazuri se prescriu analize (raclare, biopsie, teste alergice).
          </li>
          <li>
            <strong>Planul de tratament</strong>
            {' '}
            — medicul prescrie terapia (locală, sistemică sau combinată), explică schema de utilizare a preparatelor și programează vizita de control.
          </li>
        </ol>
        <p className="text-gray-700 leading-relaxed">
          La consultație puteți clarifica experiența medicului, metodele de diagnostic, posibilele efecte secundare ale tratamentului
          și prognosticul — transparența ajută la luarea unei decizii informate.
        </p>
      </section>

      <section className="mb-12" aria-labelledby="bofu-ro">
        <h2 id="bofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">
          Pasul următor la Meddera (decizie)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Dacă analizați consultația dermatologului în Bălți, este rezonabil să începeți cu programarea
          și consultarea paginii serviciului.
        </p>
        <ul className="space-y-3">
          <li>
            <Link
              href="/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye/ro"
              className="text-green-700 font-medium underline hover:text-green-900"
            >
              Serviciul „Dermatolog în Bălți"
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
              href="/services/terapyya-anty-akne-v-belczah/ro"
              className="text-green-700 font-medium underline hover:text-green-900"
            >
              Terapia anti-acnee
            </Link>
          </li>
          <li>
            <Link href="/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye/ro" className="text-gray-800 underline hover:text-gray-950">
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
          Clinica Meddera, Bălți. Material informativ pentru persoane care iau în calcul consultația dermatologului;
          deciziile medicale se iau doar după consultație cu medicul.
        </p>
      </section>

      <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
        Exonerare: conținutul nu constituie diagnostic și nu înlocuiește examenul medical.
        În caz de simptome acute, reacții alergice sau îndoieli privind indicațiile, adresați-vă medicului.
      </p>
    </>
  );
}
