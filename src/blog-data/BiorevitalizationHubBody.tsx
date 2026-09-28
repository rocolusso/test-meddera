import React from 'react';
import Link from 'next/link';
import type { BlogLocale } from '@/blog-data/types';
import { blogPathRu, blogPathRo } from '@/blog-data/registry';
import { blogUi } from '@/blog-data/blog-ui';

type Props = { locale: BlogLocale; dateModified: string };

export function BiorevitalizationHubBody({ locale, dateModified }: Props) {
  const ruUrl = blogPathRu('biorevitalizaciya-beltsy-hub');
  const roUrl = blogPathRo('biorevitalizare-balti-hub');

  if (locale === 'ru') {
    return (
      <>
        <nav className={blogUi.breadcrumbs} aria-label="Хлебные крошки">
          <Link href="/" className={blogUi.crumbLink}>Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className={blogUi.crumbLink}>Блог</Link>
          <span className="mx-2">/</span>
          <span className={blogUi.crumbCurrent}>Биоревитализация в Бельцах — гид</span>
        </nav>
        <p className={blogUi.meta}>Обновлено: {dateModified} · <Link href={roUrl} className={blogUi.crumbLink} hrefLang="ro">Română</Link></p>
        <h1 className={blogUi.h1}>Биоревитализация в Бельцах: гид по процедуре</h1>
        <p className={blogUi.pMb10}>
          Этот материал помогает понять, как работает биоревитализация, когда она показана и как проходит процедура в клинике Meddera.
          Он не заменяет очный осмотр и индивидуальный план лечения.
        </p>
        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className={blogUi.h2}>С чего начать (осведомлённость)</h2>
          <ul className={blogUi.ul}>
            <li><strong>Что включает:</strong> инъекции гиалуроновой кислоты для глубокого увлажнения, улучшения тургора и эластичности кожи.</li>
            <li><strong>Кому подходит:</strong> пациентам с сухостью кожи, потерей упругости, первыми признаками старения, фотостарением.</li>
            <li><strong>Что не делает этот гид:</strong> не содержит дозировок или обещаний — это возможно только после консультации.</li>
          </ul>
        </section>
        <section className="mb-12" aria-labelledby="mofu">
          <h2 id="mofu" className={blogUi.h2}>Как проходит процедура (оценка)</h2>
          <ol className={blogUi.ol}>
            <li><strong>Консультация</strong> — врач оценивает состояние кожи и выбирает препарат.</li>
            <li><strong>Подготовка</strong> — очищение кожи, нанесение анестетика (по показаниям).</li>
            <li><strong>Инъекции</strong> — введение гиалуроновой кислоты; процедура занимает 20–40 минут.</li>
            <li><strong>Рекомендации</strong> — врач объясняет уход и назначает курс (обычно 2–3 сеанса).</li>
          </ol>
        </section>
        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className={blogUi.h2}>Следующий шаг в Meddera (решение)</h2>
          <ul className="space-y-3">
            <li><Link href="/services/byorevytalyzaczyya-v-belczah" className={blogUi.link}>Услуга «Биоревитализация»</Link></li>
            <li><Link href="/services/konsultaczyya-dermatokosmetologa-v-belczah" className={blogUi.link}>Консультация дерматокосметолога</Link></li>
          </ul>
        </section>
        <section className={blogUi.reviewBox}>
          <h2 className={blogUi.boxTitle}>Кто готовит материалы</h2>
          <p className={blogUi.small}>Клиника Meddera, Бельцы. Материал носит информационный характер.</p>
        </section>
        <p className={blogUi.footerDisclaimer}>Медицинский дисклеймер: информация не является диагнозом.</p>
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
        <span className={blogUi.crumbCurrent}>Biorevitalizarea în Bălți — ghid</span>
      </nav>
      <p className={blogUi.meta}>Actualizat: {dateModified} · <Link href={ruUrl} className={blogUi.crumbLink} hrefLang="ru">Русский</Link></p>
      <h1 className={blogUi.h1}>Biorevitalizarea în Bălți: ghid despre procedură</h1>
      <p className={blogUi.pMb10}>
        Acest material explică cum funcționează biorevitalizarea, când este indicată și cum decurge procedura la clinica Meddera.
        Nu înlocuiește examenul clinic și planul individual.
      </p>
      <section className="mb-12">
        <h2 className={blogUi.h2}>De unde începem (informare)</h2>
        <ul className={blogUi.ul}>
          <li><strong>Ce presupune:</strong> injecții cu acid hialuronic pentru hidratare profundă, îmbunătățirea turgorului și elasticității pielii.</li>
          <li><strong>Cui i se potrivește:</strong> pacienților cu pielea uscată, pierderea fermității, primele semne de îmbătrânire, fotoîmbătrânire.</li>
          <li><strong>Ce nu face acest ghid:</strong> nu conține doze sau promisiuni — acestea sunt posibile doar după consultație.</li>
        </ul>
      </section>
      <section className="mb-12">
        <h2 className={blogUi.h2}>Cum decurge procedura</h2>
        <ol className={blogUi.ol}>
          <li><strong>Consultația</strong> — medicul evaluează starea pielii și alege preparatul.</li>
          <li><strong>Pregătirea</strong> — curățarea pielii, aplicarea anesteticului (după indicații).</li>
          <li><strong>Injecțiile</strong> — administrarea acidului hialuronic; procedura durează 20–40 minute.</li>
          <li><strong>Recomandări</strong> — medicul explică îngrijirea și programează cursul (de obicei 2–3 ședințe).</li>
        </ol>
      </section>
      <section className="mb-12">
        <h2 className={blogUi.h2}>Pasul următor la Meddera</h2>
        <ul className="space-y-3">
          <li><Link href="/ro/services/byorevytalyzaczyya-v-belczah" className={blogUi.link}>Serviciul „Biorevitalizarea"</Link></li>
          <li><Link href="/ro/services/konsultaczyya-dermatokosmetologa-v-belczah" className={blogUi.link}>Consultația dermatocosmetologului</Link></li>
        </ul>
      </section>
      <section className={blogUi.reviewBox}>
        <h2 className={blogUi.boxTitle}>Experiență și transparență</h2>
        <p className={blogUi.small}>Clinica Meddera, Bălți. Material informativ.</p>
      </section>
      <p className={blogUi.footerDisclaimer}>Exonerare: conținutul nu constituie diagnostic.</p>
    </>
  );
}
