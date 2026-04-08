import React from 'react';
import Link from 'next/link';
import type { BlogLocale } from '@/blog-data/types';
import { ORIGIN } from '@/blog-data/registry';

type Props = { locale: BlogLocale; dateModified: string };

export function BiorevitalizationHubBody({ locale, dateModified }: Props) {
  const ruUrl = `${ORIGIN}/blog/biorevitalizaciya-beltsy-hub`;
  const roUrl = `${ORIGIN}/ro/blog/biorevitalizare-balti-hub`;

  if (locale === 'ru') {
    return (
      <>
        <nav className="text-sm text-gray-500 mb-6" aria-label="Хлебные крошки">
          <Link href="/" className="underline hover:text-gray-800">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="underline hover:text-gray-800">Блог</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Биоревитализация в Бельцах — гид</span>
        </nav>
        <p className="text-sm text-gray-500 mb-2">Обновлено: {dateModified} · <Link href={roUrl} className="underline hover:text-gray-800" hrefLang="ro">Română</Link></p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Биоревитализация в Бельцах: гид по процедуре</h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          Этот материал помогает понять, как работает биоревитализация, когда она показана и как проходит процедура в клинике Meddera.
          Он не заменяет очный осмотр и индивидуальный план лечения.
        </p>
        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className="text-2xl font-semibold text-gray-900 mb-4">С чего начать (осведомлённость)</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
            <li><strong>Что включает:</strong> инъекции гиалуроновой кислоты для глубокого увлажнения, улучшения тургора и эластичности кожи.</li>
            <li><strong>Кому подходит:</strong> пациентам с сухостью кожи, потерей упругости, первыми признаками старения, фотостарением.</li>
            <li><strong>Что не делает этот гид:</strong> не содержит дозировок или обещаний — это возможно только после консультации.</li>
          </ul>
        </section>
        <section className="mb-12" aria-labelledby="mofu">
          <h2 id="mofu" className="text-2xl font-semibold text-gray-900 mb-4">Как проходит процедура (оценка)</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
            <li><strong>Консультация</strong> — врач оценивает состояние кожи и выбирает препарат.</li>
            <li><strong>Подготовка</strong> — очищение кожи, нанесение анестетика (по показаниям).</li>
            <li><strong>Инъекции</strong> — введение гиалуроновой кислоты; процедура занимает 20–40 минут.</li>
            <li><strong>Рекомендации</strong> — врач объясняет уход и назначает курс (обычно 2–3 сеанса).</li>
          </ol>
        </section>
        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className="text-2xl font-semibold text-gray-900 mb-4">Следующий шаг в Meddera (решение)</h2>
          <ul className="space-y-3">
            <li><Link href="/services/byorevytalyzaczyya-v-belczah" className="text-green-700 font-medium underline hover:text-green-900">Услуга «Биоревитализация»</Link></li>
            <li><Link href="/services/konsultaczyya-dermatokosmetologa-v-belczah" className="text-green-700 font-medium underline hover:text-green-900">Консультация дерматокосметолога</Link></li>
          </ul>
        </section>
        <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Кто готовит материалы</h2>
          <p className="text-gray-700 text-sm leading-relaxed">Клиника Meddera, Бельцы. Материал носит информационный характер.</p>
        </section>
        <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">Медицинский дисклеймер: информация не является диагнозом.</p>
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
        <span className="text-gray-800">Biorevitalizarea în Bălți — ghid</span>
      </nav>
      <p className="text-sm text-gray-500 mb-2">Actualizat: {dateModified} · <Link href={ruUrl} className="underline hover:text-gray-800" hrefLang="ru">Русский</Link></p>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Biorevitalizarea în Bălți: ghid despre procedură</h1>
      <p className="text-gray-700 leading-relaxed mb-10">
        Acest material explică cum funcționează biorevitalizarea, când este indicată și cum decurge procedura la clinica Meddera.
        Nu înlocuiește examenul clinic și planul individual.
      </p>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">De unde începem (informare)</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
          <li><strong>Ce presupune:</strong> injecții cu acid hialuronic pentru hidratare profundă, îmbunătățirea turgorului și elasticității pielii.</li>
          <li><strong>Cui i se potrivește:</strong> pacienților cu pielea uscată, pierderea fermității, primele semne de îmbătrânire, fotoîmbătrânire.</li>
          <li><strong>Ce nu face acest ghid:</strong> nu conține doze sau promisiuni — acestea sunt posibile doar după consultație.</li>
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cum decurge procedura</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
          <li><strong>Consultația</strong> — medicul evaluează starea pielii și alege preparatul.</li>
          <li><strong>Pregătirea</strong> — curățarea pielii, aplicarea anesteticului (după indicații).</li>
          <li><strong>Injecțiile</strong> — administrarea acidului hialuronic; procedura durează 20–40 minute.</li>
          <li><strong>Recomandări</strong> — medicul explică îngrijirea și programează cursul (de obicei 2–3 ședințe).</li>
        </ol>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pasul următor la Meddera</h2>
        <ul className="space-y-3">
          <li><Link href="/services/byorevytalyzaczyya-v-belczah/ro" className="text-green-700 font-medium underline hover:text-green-900">Serviciul „Biorevitalizarea"</Link></li>
          <li><Link href="/services/konsultaczyya-dermatokosmetologa-v-belczah/ro" className="text-green-700 font-medium underline hover:text-green-900">Consultația dermatocosmetologului</Link></li>
        </ul>
      </section>
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Experiență și transparență</h2>
        <p className="text-gray-700 text-sm leading-relaxed">Clinica Meddera, Bălți. Material informativ.</p>
      </section>
      <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">Exonerare: conținutul nu constituie diagnostic.</p>
    </>
  );
}
