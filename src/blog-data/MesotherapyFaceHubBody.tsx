import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { ORIGIN } from '@/blog-data/registry';

type Props = {
  locale: BlogLocale;
  dateModified: string;
};

export function MesotherapyFaceHubBody({ locale, dateModified }: Props) {
  const ruUrl = `${ORIGIN}/blog/mezoterapiya-lica-beltsy-hub`;
  const roUrl = `${ORIGIN}/ro/blog/mezoterapie-fata-balti-hub`;

  if (locale === 'ru') {
    return (
      <>
        <nav className="text-sm text-gray-500 mb-6" aria-label="Хлебные крошки">
          <Link href="/" className="underline hover:text-gray-800">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="underline hover:text-gray-800">Блог</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Мезотерапия лица в Бельцах — гид</span>
        </nav>

        <p className="text-sm text-gray-500 mb-2">
          Обновлено: {dateModified} · <Link href={roUrl} className="underline hover:text-gray-800" hrefLang="ro">Română</Link>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Мезотерапия лица в Бельцах: гид по процедуре
        </h1>

        <p className="text-gray-700 leading-relaxed mb-10">
          Этот материал помогает понять, как работает мезотерапия лица, когда она показана,
          как проходит процедура в клинике Meddera и что важно знать перед записью на консультацию.
          Он не заменяет очный осмотр и индивидуальный план лечения.
        </p>

        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className="text-2xl font-semibold text-gray-900 mb-4">С чего начать (осведомлённость)</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
            <li><strong>Что включает процедура:</strong> инъекции мезококтейлей (витамины, аминокислоты, гиалуроновая кислота) для улучшения качества кожи, увлажнения и стимуляции регенерации.</li>
            <li><strong>Кому подходит:</strong> пациентам с сухостью кожи, тусклым цветом лица, первыми признаками старения, постакне, пигментацией.</li>
            <li><strong>Что не делает этот гид:</strong> не содержит дозировок, обещаний результата или назначений — это возможно только после очной консультации.</li>
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="mofu">
          <h2 id="mofu" className="text-2xl font-semibold text-gray-900 mb-4">Как проходит процедура (оценка)</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
            <li><strong>Консультация</strong> — врач оценивает состояние кожи, выбирает состав мезококтейля и обсуждает ожидания.</li>
            <li><strong>Подготовка</strong> — очищение кожи, нанесение анестетика (по показаниям).</li>
            <li><strong>Инъекции</strong> — введение препарата в поверхностные слои кожи; процедура занимает 20–40 минут.</li>
            <li><strong>Рекомендации</strong> — врач объясняет уход после процедуры и назначает курс (обычно 3–5 сеансов).</li>
          </ol>
        </section>

        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className="text-2xl font-semibold text-gray-900 mb-4">Следующий шаг в Meddera (решение)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Если вы рассматриваете мезотерапию лица в Бельцах, логично начать с записи на консультацию.
          </p>
          <ul className="space-y-3">
            <li><Link href="/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe" className="text-green-700 font-medium underline hover:text-green-900">Услуга «Мезотерапия лица»</Link></li>
            <li><Link href="/services/konsultaczyya-dermatokosmetologa-v-belczah" className="text-green-700 font-medium underline hover:text-green-900">Консультация дерматокосметолога</Link></li>
          </ul>
        </section>

        <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 mb-8" aria-labelledby="eeat">
          <h2 id="eeat" className="text-lg font-semibold text-gray-900 mb-3">Кто готовит материалы и оказывает помощь</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Клиника Meddera, Бельцы. Материал носит информационный характер и подготовлен для пациентов,
            рассматривающих мезотерапию лица; медицинские решения принимаются только после очной консультации с врачом.
          </p>
        </section>

        <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
          Медицинский дисклеймер: информация на странице не является диагнозом и не заменяет очный приём.
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
        <span className="text-gray-800">Mezoterapia feței în Bălți — ghid</span>
      </nav>

      <p className="text-sm text-gray-500 mb-2">
        Actualizat: {dateModified} · <Link href={ruUrl} className="underline hover:text-gray-800" hrefLang="ru">Русский</Link>
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Mezoterapia feței în Bălți: ghid despre procedură
      </h1>

      <p className="text-gray-700 leading-relaxed mb-10">
        Acest material explică cum funcționează mezoterapia feței, când este indicată,
        cum decurge procedura la clinica Meddera și ce este important să știți înainte de programare.
        Nu înlocuiește examenul clinic și planul individual de tratament.
      </p>

      <section className="mb-12" aria-labelledby="tofu-ro">
        <h2 id="tofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">De unde începem (informare)</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
          <li><strong>Ce presupune procedura:</strong> injecții cu mezocockteiluri (vitamine, aminoacizi, acid hialuronic) pentru îmbunătățirea calității pielii, hidratare și stimularea regenerării.</li>
          <li><strong>Cui i se potrivește:</strong> pacienților cu pielea uscată, ten mat, primele semne de îmbătrânire, postacnee, pigmentare.</li>
          <li><strong>Ce nu face acest ghid:</strong> nu conține doze, promisiuni sau prescripții — acestea sunt posibile doar după consultație.</li>
        </ul>
      </section>

      <section className="mb-12" aria-labelledby="mofu-ro">
        <h2 id="mofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">Cum decurge procedura (evaluare)</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
          <li><strong>Consultația</strong> — medicul evaluează starea pielii, alege compoziția mezocockteilului și discută așteptările.</li>
          <li><strong>Pregătirea</strong> — curățarea pielii, aplicarea anesteticului (după indicații).</li>
          <li><strong>Injecțiile</strong> — administrarea preparatului în straturile superficiale ale pielii; procedura durează 20–40 minute.</li>
          <li><strong>Recomandări</strong> — medicul explică îngrijirea după procedură și programează cursul (de obicei 3–5 ședințe).</li>
        </ol>
      </section>

      <section className="mb-12" aria-labelledby="bofu-ro">
        <h2 id="bofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">Pasul următor la Meddera (decizie)</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Dacă analizați mezoterapia feței în Bălți, este rezonabil să începeți cu programarea la consultație.
        </p>
        <ul className="space-y-3">
          <li><Link href="/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe/ro" className="text-green-700 font-medium underline hover:text-green-900">Serviciul „Mezoterapia feței"</Link></li>
          <li><Link href="/services/konsultaczyya-dermatokosmetologa-v-belczah/ro" className="text-green-700 font-medium underline hover:text-green-900">Consultația dermatocosmetologului</Link></li>
        </ul>
      </section>

      <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 mb-8" aria-labelledby="eeat-ro">
        <h2 id="eeat-ro" className="text-lg font-semibold text-gray-900 mb-3">Experiență și transparență</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Clinica Meddera, Bălți. Material informativ pentru persoane care iau în calcul mezoterapia feței;
          deciziile medicale se iau doar după consultație cu medicul.
        </p>
      </section>

      <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
        Exonerare: conținutul nu constituie diagnostic și nu înlocuiește examenul medical.
      </p>
    </>
  );
}
