import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { blogPathRu, blogPathRo } from '@/blog-data/registry';
import { blogUi } from '@/blog-data/blog-ui';

type Props = {
  locale: BlogLocale;
  dateModified: string;
};

export function MesotherapyFaceHubBody({ locale, dateModified }: Props) {
  const ruUrl = blogPathRu('mezoterapiya-lica-beltsy-hub');
  const roUrl = blogPathRo('mezoterapie-fata-balti-hub');

  if (locale === 'ru') {
    return (
      <>
        <nav className={blogUi.breadcrumbs} aria-label="Хлебные крошки">
          <Link href="/" className={blogUi.crumbLink}>Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className={blogUi.crumbLink}>Блог</Link>
          <span className="mx-2">/</span>
          <span className={blogUi.crumbCurrent}>Мезотерапия лица в Бельцах — гид</span>
        </nav>

        <p className={blogUi.meta}>
          Обновлено: {dateModified} · <Link href={roUrl} className={blogUi.crumbLink} hrefLang="ro">Română</Link>
        </p>

        <h1 className={blogUi.h1}>
          Мезотерапия лица в Бельцах: гид по процедуре
        </h1>

        <p className={blogUi.pMb10}>
          Этот материал помогает понять, как работает мезотерапия лица, когда она показана,
          как проходит процедура в клинике Meddera и что важно знать перед записью на консультацию.
          Он не заменяет очный осмотр и индивидуальный план лечения.
        </p>

        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className={blogUi.h2}>С чего начать (осведомлённость)</h2>
          <ul className={blogUi.ul}>
            <li><strong>Что включает процедура:</strong> инъекции мезококтейлей (витамины, аминокислоты, гиалуроновая кислота) для улучшения качества кожи, увлажнения и стимуляции регенерации.</li>
            <li><strong>Кому подходит:</strong> пациентам с сухостью кожи, тусклым цветом лица, первыми признаками старения, постакне, пигментацией.</li>
            <li><strong>Что не делает этот гид:</strong> не содержит дозировок, обещаний результата или назначений — это возможно только после очной консультации.</li>
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="mofu">
          <h2 id="mofu" className={blogUi.h2}>Как проходит процедура (оценка)</h2>
          <ol className={blogUi.ol}>
            <li><strong>Консультация</strong> — врач оценивает состояние кожи, выбирает состав мезококтейля и обсуждает ожидания.</li>
            <li><strong>Подготовка</strong> — очищение кожи, нанесение анестетика (по показаниям).</li>
            <li><strong>Инъекции</strong> — введение препарата в поверхностные слои кожи; процедура занимает 20–40 минут.</li>
            <li><strong>Рекомендации</strong> — врач объясняет уход после процедуры и назначает курс (обычно 3–5 сеансов).</li>
          </ol>
        </section>

        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className={blogUi.h2}>Следующий шаг в Meddera (решение)</h2>
          <p className={blogUi.pMb6}>
            Если вы рассматриваете мезотерапию лица в Бельцах, логично начать с записи на консультацию.
          </p>
          <ul className="space-y-3">
            <li><Link href="/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe" className={blogUi.link}>Услуга «Мезотерапия лица»</Link></li>
            <li><Link href="/services/konsultaczyya-dermatokosmetologa-v-belczah" className={blogUi.link}>Консультация дерматокосметолога</Link></li>
          </ul>
        </section>

        <section className={blogUi.reviewBox} aria-labelledby="eeat">
          <h2 id="eeat" className={blogUi.boxTitle}>Кто готовит материалы и оказывает помощь</h2>
          <p className={blogUi.small}>
            Клиника Meddera, Бельцы. Материал носит информационный характер и подготовлен для пациентов,
            рассматривающих мезотерапию лица; медицинские решения принимаются только после очной консультации с врачом.
          </p>
        </section>

        <p className={blogUi.footerDisclaimer}>
          Медицинский дисклеймер: информация на странице не является диагнозом и не заменяет очный приём.
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
        <span className={blogUi.crumbCurrent}>Mezoterapia feței în Bălți — ghid</span>
      </nav>

      <p className={blogUi.meta}>
        Actualizat: {dateModified} · <Link href={ruUrl} className={blogUi.crumbLink} hrefLang="ru">Русский</Link>
      </p>

      <h1 className={blogUi.h1}>
        Mezoterapia feței în Bălți: ghid despre procedură
      </h1>

      <p className={blogUi.pMb10}>
        Acest material explică cum funcționează mezoterapia feței, când este indicată,
        cum decurge procedura la clinica Meddera și ce este important să știți înainte de programare.
        Nu înlocuiește examenul clinic și planul individual de tratament.
      </p>

      <section className="mb-12" aria-labelledby="tofu-ro">
        <h2 id="tofu-ro" className={blogUi.h2}>De unde începem (informare)</h2>
        <ul className={blogUi.ul}>
          <li><strong>Ce presupune procedura:</strong> injecții cu mezocockteiluri (vitamine, aminoacizi, acid hialuronic) pentru îmbunătățirea calității pielii, hidratare și stimularea regenerării.</li>
          <li><strong>Cui i se potrivește:</strong> pacienților cu pielea uscată, ten mat, primele semne de îmbătrânire, postacnee, pigmentare.</li>
          <li><strong>Ce nu face acest ghid:</strong> nu conține doze, promisiuni sau prescripții — acestea sunt posibile doar după consultație.</li>
        </ul>
      </section>

      <section className="mb-12" aria-labelledby="mofu-ro">
        <h2 id="mofu-ro" className={blogUi.h2}>Cum decurge procedura (evaluare)</h2>
        <ol className={blogUi.ol}>
          <li><strong>Consultația</strong> — medicul evaluează starea pielii, alege compoziția mezocockteilului și discută așteptările.</li>
          <li><strong>Pregătirea</strong> — curățarea pielii, aplicarea anesteticului (după indicații).</li>
          <li><strong>Injecțiile</strong> — administrarea preparatului în straturile superficiale ale pielii; procedura durează 20–40 minute.</li>
          <li><strong>Recomandări</strong> — medicul explică îngrijirea după procedură și programează cursul (de obicei 3–5 ședințe).</li>
        </ol>
      </section>

      <section className="mb-12" aria-labelledby="bofu-ro">
        <h2 id="bofu-ro" className={blogUi.h2}>Pasul următor la Meddera (decizie)</h2>
        <p className={blogUi.pMb6}>
          Dacă analizați mezoterapia feței în Bălți, este rezonabil să începeți cu programarea la consultație.
        </p>
        <ul className="space-y-3">
          <li><Link href="/ro/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe" className={blogUi.link}>Serviciul „Mezoterapia feței"</Link></li>
          <li><Link href="/ro/services/konsultaczyya-dermatokosmetologa-v-belczah" className={blogUi.link}>Consultația dermatocosmetologului</Link></li>
        </ul>
      </section>

      <section className={blogUi.reviewBox} aria-labelledby="eeat-ro">
        <h2 id="eeat-ro" className={blogUi.boxTitle}>Experiență și transparență</h2>
        <p className={blogUi.small}>
          Clinica Meddera, Bălți. Material informativ pentru persoane care iau în calcul mezoterapia feței;
          deciziile medicale se iau doar după consultație cu medicul.
        </p>
      </section>

      <p className={blogUi.footerDisclaimer}>
        Exonerare: conținutul nu constituie diagnostic și nu înlocuiește examenul medical.
      </p>
    </>
  );
}
