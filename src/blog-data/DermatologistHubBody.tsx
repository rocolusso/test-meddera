import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { blogPathRu, blogPathRo } from '@/blog-data/registry';
import { blogUi } from '@/blog-data/blog-ui';

type Props = {
  locale: BlogLocale;
  dateModified: string;
};

export function DermatologistHubBody({ locale, dateModified }: Props) {
  const ruUrl = blogPathRu('dermatolog-beltsy-hub');
  const roUrl = blogPathRo('dermatolog-balti-hub');

  if (locale === 'ru') {
    return (
      <>
        <nav className={blogUi.breadcrumbs} aria-label="Хлебные крошки">
          <Link href="/" className={blogUi.crumbLink}>Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className={blogUi.crumbLink}>Блог</Link>
          <span className="mx-2">/</span>
          <span className={blogUi.crumbCurrent}>Дерматолог в Бельцах — гид</span>
        </nav>

        <p className={blogUi.meta}>
          Обновлено:
          {' '}
          {dateModified}
          {' · '}
          <Link href={roUrl} className={blogUi.crumbLink} hrefLang="ro">Română</Link>
        </p>

        <h1 className={blogUi.h1}>
          Дерматолог в Бельцах: гид по консультации и лечению
        </h1>

        <p className={blogUi.pMb10}>
          Этот материал помогает понять, когда нужна консультация дерматолога, какие заболевания кожи
          диагностируются и лечатся в клинике Meddera, и как подготовиться к приёму. Он не заменяет
          очный осмотр и индивидуальный план лечения.
        </p>

        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className={blogUi.h2}>
            С чего начать (осведомлённость)
          </h2>
          <ul className={blogUi.ul}>
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
          <h2 id="mofu" className={blogUi.h2}>
            Как проходит консультация (оценка)
          </h2>
          <ol className={blogUi.ol}>
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
          <p className={blogUi.p}>
            На консультации вы можете уточнить опыт врача, методы диагностики, возможные побочные эффекты лечения
            и прогноз — прозрачность помогает принять информированное решение.
          </p>
        </section>

        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className={blogUi.h2}>
            Следующий шаг в Meddera (решение)
          </h2>
          <p className={blogUi.pMb6}>
            Если вы рассматриваете консультацию дерматолога в Бельцах, логично начать с записи на приём
            и ознакомления со страницей услуги.
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye"
                className={blogUi.link}
              >
                Услуга «Дерматолог в Бельцах»
              </Link>
            </li>
            <li>
              <Link
                href="/services/konsultaczyya-dermatokosmetologa-v-belczah"
                className={blogUi.link}
              >
                Консультация дерматокосметолога
              </Link>
            </li>
            <li>
              <Link
                href="/services/terapyya-anty-akne-v-belczah"
                className={blogUi.link}
              >
                Терапия анти-акне
              </Link>
            </li>
            <li>
              <Link href="/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye" className={blogUi.linkStrong}>
                Контакты и запись
              </Link>
            </li>
          </ul>
        </section>

        <section
          className={blogUi.reviewBox}
          aria-labelledby="eeat"
        >
          <h2 id="eeat" className={blogUi.boxTitle}>
            Кто готовит материалы и оказывает помощь
          </h2>
          <p className={blogUi.small}>
            Клиника Meddera, Бельцы. Материал носит информационный характер и подготовлен для пациентов,
            рассматривающих консультацию дерматолога; медицинские решения принимаются только после очной консультации с врачом.
          </p>
        </section>

        <p className={blogUi.footerDisclaimer}>
          Медицинский дисклеймер: информация на странице не является диагнозом и не заменяет очный приём.
          При острых симптомах, аллергических реакциях или сомнениях по показаниям обратитесь к врачу.
        </p>
      </>
    );
  }

  return (
    <>
      <nav className={blogUi.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/ro" className={blogUi.crumbLink}>Acasă</Link>
        <span className="mx-2">/</span>
        <Link href="/ro/blog" className={blogUi.crumbLink}>Blog</Link>
        <span className="mx-2">/</span>
        <span className={blogUi.crumbCurrent}>Dermatolog în Bălți — ghid</span>
      </nav>

      <p className={blogUi.meta}>
        Actualizat:
        {' '}
        {dateModified}
        {' · '}
        <Link href={ruUrl} className={blogUi.crumbLink} hrefLang="ru">Русский</Link>
      </p>

      <h1 className={blogUi.h1}>
        Dermatolog în Bălți: ghid despre consultație și tratament
      </h1>

      <p className={blogUi.pMb10}>
        Acest material explică când este necesară consultația dermatologului, ce afecțiuni ale pielii
        sunt diagnosticate și tratate la clinica Meddera și cum să vă pregătiți pentru vizită.
        Nu înlocuiește examenul clinic și planul individual de tratament.
      </p>

      <section className="mb-12" aria-labelledby="tofu-ro">
        <h2 id="tofu-ro" className={blogUi.h2}>
          De unde începem (informare)
        </h2>
        <ul className={blogUi.ul}>
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
        <h2 id="mofu-ro" className={blogUi.h2}>
          Cum decurge consultația (evaluare)
        </h2>
        <ol className={blogUi.ol}>
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
        <p className={blogUi.p}>
          La consultație puteți clarifica experiența medicului, metodele de diagnostic, posibilele efecte secundare ale tratamentului
          și prognosticul — transparența ajută la luarea unei decizii informate.
        </p>
      </section>

      <section className="mb-12" aria-labelledby="bofu-ro">
        <h2 id="bofu-ro" className={blogUi.h2}>
          Pasul următor la Meddera (decizie)
        </h2>
        <p className={blogUi.pMb6}>
          Dacă analizați consultația dermatologului în Bălți, este rezonabil să începeți cu programarea
          și consultarea paginii serviciului.
        </p>
        <ul className="space-y-3">
          <li>
            <Link
              href="/ro/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye"
              className={blogUi.link}
            >
              Serviciul „Dermatolog în Bălți"
            </Link>
          </li>
          <li>
            <Link
              href="/ro/services/konsultaczyya-dermatokosmetologa-v-belczah"
              className={blogUi.link}
            >
              Consultația dermatocosmetologului
            </Link>
          </li>
          <li>
            <Link
              href="/ro/services/terapyya-anty-akne-v-belczah"
              className={blogUi.link}
            >
              Terapia anti-acnee
            </Link>
          </li>
          <li>
            <Link href="/ro/services/dermatolog-v-belczah-professyonalnaya-konsultaczyya-i-effektyvnoe-lechenye" className={blogUi.linkStrong}>
              Contacte și programare
            </Link>
          </li>
        </ul>
      </section>

      <section
        className={blogUi.reviewBox}
        aria-labelledby="eeat-ro"
      >
        <h2 id="eeat-ro" className={blogUi.boxTitle}>
          Experiență și transparență
        </h2>
        <p className={blogUi.small}>
          Clinica Meddera, Bălți. Material informativ pentru persoane care iau în calcul consultația dermatologului;
          deciziile medicale se iau doar după consultație cu medicul.
        </p>
      </section>

      <p className={blogUi.footerDisclaimer}>
        Exonerare: conținutul nu constituie diagnostic și nu înlocuiește examenul medical.
        În caz de simptome acute, reacții alergice sau îndoieli privind indicațiile, adresați-vă medicului.
      </p>
    </>
  );
}
