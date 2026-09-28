import React from 'react';
import Link from 'next/link';
import type { BlogLocale } from '@/blog-data/types';
import { blogPathRu, blogPathRo } from '@/blog-data/registry';
import { blogUi } from '@/blog-data/blog-ui';

type Props = { locale: BlogLocale; dateModified: string };

export function FillersHubBody({ locale, dateModified }: Props) {
  const ruUrl = blogPathRu('konturnaya-plastika-beltsy-hub');
  const roUrl = blogPathRo('conturare-faciala-balti-hub');

  if (locale === 'ru') {
    return (
      <>
        <nav className={blogUi.breadcrumbs} aria-label="Хлебные крошки">
          <Link href="/" className={blogUi.crumbLink}>Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className={blogUi.crumbLink}>Блог</Link>
          <span className="mx-2">/</span>
          <span className={blogUi.crumbCurrent}>Контурная пластика филлерами — гид</span>
        </nav>
        <p className={blogUi.meta}>Обновлено: {dateModified} · <Link href={roUrl} className={blogUi.crumbLink} hrefLang="ro">Română</Link></p>
        <h1 className={blogUi.h1}>Контурная пластика филлерами в Бельцах: гид по процедуре</h1>
        <p className={blogUi.pMb10}>
          Этот материал помогает понять, как работает контурная пластика филлерами, когда она показана и как проходит процедура в клинике Meddera.
          Он не заменяет очный осмотр и индивидуальный план лечения.
        </p>
        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className={blogUi.h2}>С чего начать (осведомлённость)</h2>
          <ul className={blogUi.ul}>
            <li><strong>Что включает:</strong> инъекции филлеров на основе гиалуроновой кислоты для коррекции объёма, формы и симметрии лица (скулы, подбородок, носогубные складки, губы).</li>
            <li><strong>Кому подходит:</strong> пациентам с потерей объёма лица, асимметрией, глубокими складками, желающим улучшить контуры без хирургии.</li>
            <li><strong>Что не делает этот гид:</strong> не содержит дозировок или обещаний — это возможно только после консультации.</li>
          </ul>
        </section>
        <section className="mb-12" aria-labelledby="mofu">
          <h2 id="mofu" className={blogUi.h2}>Как проходит процедура (оценка)</h2>
          <ol className={blogUi.ol}>
            <li><strong>Консультация</strong> — врач оценивает анатомию лица, выбирает зоны для коррекции и обсуждает ожидания.</li>
            <li><strong>Подготовка</strong> — очищение кожи, разметка, нанесение анестетика (по показаниям).</li>
            <li><strong>Инъекции</strong> — введение филлера; процедура занимает 20–60 минут в зависимости от зон.</li>
            <li><strong>Рекомендации</strong> — врач объясняет уход и назначает контрольный визит.</li>
          </ol>
        </section>
        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className={blogUi.h2}>Следующий шаг в Meddera (решение)</h2>
          <ul className="space-y-3">
            <li><Link href="/services/konturnaya-plastyka-fylleramy-v-belczah" className={blogUi.link}>Услуга «Контурная пластика филлерами»</Link></li>
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
        <span className={blogUi.crumbCurrent}>Conturarea cu filler-e — ghid</span>
      </nav>
      <p className={blogUi.meta}>Actualizat: {dateModified} · <Link href={ruUrl} className={blogUi.crumbLink} hrefLang="ru">Русский</Link></p>
      <h1 className={blogUi.h1}>Conturarea cu filler-e în Bălți: ghid despre procedură</h1>
      <p className={blogUi.pMb10}>
        Acest material explică cum funcționează conturarea cu filler-e, când este indicată și cum decurge procedura la clinica Meddera.
        Nu înlocuiește examenul clinic și planul individual.
      </p>
      <section className="mb-12">
        <h2 className={blogUi.h2}>De unde începem (informare)</h2>
        <ul className={blogUi.ul}>
          <li><strong>Ce presupune:</strong> injecții cu filler-e pe bază de acid hialuronic pentru corecția volumului, formei și simetriei feței (pomeți, bărbie, pliuri nazolabiale, buze).</li>
          <li><strong>Cui i se potrivește:</strong> pacienților cu pierderea volumului facial, asimetrie, pliuri profunde, dornici să îmbunătățească contururile fără chirurgie.</li>
          <li><strong>Ce nu face acest ghid:</strong> nu conține doze sau promisiuni — acestea sunt posibile doar după consultație.</li>
        </ul>
      </section>
      <section className="mb-12">
        <h2 className={blogUi.h2}>Cum decurge procedura</h2>
        <ol className={blogUi.ol}>
          <li><strong>Consultația</strong> — medicul evaluează anatomia feței, alege zonele pentru corecție și discută așteptările.</li>
          <li><strong>Pregătirea</strong> — curățarea pielii, marcarea, aplicarea anesteticului (după indicații).</li>
          <li><strong>Injecțiile</strong> — administrarea filler-ului; procedura durează 20–60 minute în funcție de zone.</li>
          <li><strong>Recomandări</strong> — medicul explică îngrijirea și programează vizita de control.</li>
        </ol>
      </section>
      <section className="mb-12">
        <h2 className={blogUi.h2}>Pasul următor la Meddera</h2>
        <ul className="space-y-3">
          <li><Link href="/ro/services/konturnaya-plastyka-fylleramy-v-belczah" className={blogUi.link}>Serviciul „Conturarea cu filler-e"</Link></li>
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
