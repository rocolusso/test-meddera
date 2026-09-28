import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { blogPathRu, blogPathRo } from '@/blog-data/registry';
import { blogUi } from '@/blog-data/blog-ui';

type Props = {
  locale: BlogLocale;
  dateModified: string;
};

export function BotoxHubBody({ locale, dateModified }: Props) {
  const ruUrl = blogPathRu('botoks-beltsy-hub');
  const roUrl = blogPathRo('botox-balti-hub');

  if (locale === 'ru') {
    return (
      <>
        <nav className={blogUi.breadcrumbs} aria-label="Хлебные крошки">
          <Link href="/" className={blogUi.crumbLink}>Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className={blogUi.crumbLink}>Блог</Link>
          <span className="mx-2">/</span>
          <span className={blogUi.crumbCurrent}>Ботокс в Бельцах — гид</span>
        </nav>

        <p className={blogUi.meta}>
          Обновлено:
          {' '}
          {dateModified}
          {' · '}
          <Link href={roUrl} className={blogUi.crumbLink} hrefLang="ro">Română</Link>
        </p>

        <h1 className={blogUi.h1}>
          Ботокс в Бельцах: гид по инъекциям для омоложения
        </h1>

        <p className={blogUi.pMb10}>
          Этот материал помогает понять, как работают инъекции ботулотоксина, когда они показаны,
          как проходит процедура в клинике Meddera и что важно знать перед записью на консультацию.
          Он не заменяет очный осмотр и индивидуальный план лечения.
        </p>

        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className={blogUi.h2}>
            С чего начать (осведомлённость)
          </h2>
          <ul className={blogUi.ul}>
            <li>
              <strong>Что включает процедура:</strong>
              {' '}
              инъекции ботулотоксина типа А для коррекции мимических морщин (лоб, межбровье, область вокруг глаз),
              лечения гипергидроза и профилактики возрастных изменений.
            </li>
            <li>
              <strong>Кому подходит:</strong>
              {' '}
              пациентам с выраженными мимическими морщинами, повышенной потливостью (подмышки, ладони),
              а также для профилактики глубоких морщин в молодом возрасте.
            </li>
            <li>
              <strong>Что не делает этот гид:</strong>
              {' '}
              не содержит дозировок, обещаний результата или назначений — это возможно только после очной консультации.
            </li>
          </ul>
        </section>

        <section className="mb-12" aria-labelledby="mofu">
          <h2 id="mofu" className={blogUi.h2}>
            Как проходит процедура (оценка)
          </h2>
          <ol className={blogUi.ol}>
            <li>
              <strong>Консультация</strong>
              {' '}
              — врач оценивает показания, выбирает зоны для коррекции, объясняет механизм действия препарата и обсуждает ожидания.
            </li>
            <li>
              <strong>Подготовка и разметка</strong>
              {' '}
              — очищение кожи, разметка точек инъекций с учётом анатомии лица и активности мимических мышц.
            </li>
            <li>
              <strong>Инъекции</strong>
              {' '}
              — введение препарата в намеченные точки; процедура занимает 5–15 минут, дискомфорт минимальный.
            </li>
            <li>
              <strong>Рекомендации после процедуры</strong>
              {' '}
              — врач объясняет, как ухаживать за кожей в первые дни, когда ожидать эффект и когда прийти на контрольный визит.
            </li>
          </ol>
          <p className={blogUi.p}>
            На консультации вы можете уточнить опыт врача, тип препарата, технику введения (игла/канюля),
            возможные побочные эффекты и длительность результата — прозрачность помогает принять информированное решение.
          </p>
        </section>

        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className={blogUi.h2}>
            Следующий шаг в Meddera (решение)
          </h2>
          <p className={blogUi.pMb6}>
            Если вы рассматриваете инъекции ботокса в Бельцах, логично начать с записи на консультацию
            и ознакомления со страницей услуги.
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza"
                className={blogUi.link}
              >
                Услуга «Ботокс в Бельцах»
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
                href="/services/konturnaya-plastyka-fylleramy-v-belczah"
                className={blogUi.link}
              >
                Контурная пластика филлерами
              </Link>
            </li>
            <li>
              <Link href="/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza" className={blogUi.linkStrong}>
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
            рассматривающих инъекции ботокса; медицинские решения принимаются только после очной консультации с врачом.
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
        <span className={blogUi.crumbCurrent}>Botox în Bălți — ghid</span>
      </nav>

      <p className={blogUi.meta}>
        Actualizat:
        {' '}
        {dateModified}
        {' · '}
        <Link href={ruUrl} className={blogUi.crumbLink} hrefLang="ru">Русский</Link>
      </p>

      <h1 className={blogUi.h1}>
        Botox în Bălți: ghid despre injecții pentru întinerire
      </h1>

      <p className={blogUi.pMb10}>
        Acest material explică cum funcționează injecțiile cu toxină botulinică, când sunt indicate,
        cum decurge procedura la clinica Meddera și ce este important să știți înainte de programare.
        Nu înlocuiește examenul clinic și planul individual de tratament.
      </p>

      <section className="mb-12" aria-labelledby="tofu-ro">
        <h2 id="tofu-ro" className={blogUi.h2}>
          De unde începem (informare)
        </h2>
        <ul className={blogUi.ul}>
          <li>
            <strong>Ce presupune procedura:</strong>
            {' '}
            injecții cu toxină botulinică tip A pentru corecția ridurilor mimice (frunte, între sprâncene, zona ochilor),
            tratamentul hiperhidrozei și prevenirea modificărilor legate de vârstă.
          </li>
          <li>
            <strong>Cui i se potrivește:</strong>
            {' '}
            pacienților cu riduri mimice pronunțate, transpirație excesivă (axile, palme),
            precum și pentru prevenirea ridurilor profunde la vârstă tânără.
          </li>
          <li>
            <strong>Ce nu face acest ghid:</strong>
            {' '}
            nu conține doze, promisiuni privind rezultatul sau prescripții — acestea sunt posibile doar după consultație.
          </li>
        </ul>
      </section>

      <section className="mb-12" aria-labelledby="mofu-ro">
        <h2 id="mofu-ro" className={blogUi.h2}>
          Cum decurge procedura (evaluare)
        </h2>
        <ol className={blogUi.ol}>
          <li>
            <strong>Consultația</strong>
            {' '}
            — medicul evaluează indicațiile, alege zonele pentru corecție, explică mecanismul de acțiune al preparatului și discută așteptările.
          </li>
          <li>
            <strong>Pregătirea și marcarea</strong>
            {' '}
            — curățarea pielii, marcarea punctelor de injecție ținând cont de anatomia feței și activitatea mușchilor mimici.
          </li>
          <li>
            <strong>Injecțiile</strong>
            {' '}
            — administrarea preparatului în punctele marcate; procedura durează 5–15 minute, disconfortul este minim.
          </li>
          <li>
            <strong>Recomandări după procedură</strong>
            {' '}
            — medicul explică cum să îngrijiți pielea în primele zile, când să așteptați efectul și când să veniți la control.
          </li>
        </ol>
        <p className={blogUi.p}>
          La consultație puteți clarifica experiența medicului, tipul de preparat, tehnica de administrare (ac/canion),
          posibilele efecte secundare și durata rezultatului — transparența ajută la luarea unei decizii informate.
        </p>
      </section>

      <section className="mb-12" aria-labelledby="bofu-ro">
        <h2 id="bofu-ro" className={blogUi.h2}>
          Pasul următor la Meddera (decizie)
        </h2>
        <p className={blogUi.pMb6}>
          Dacă analizați injecțiile cu botox în Bălți, este rezonabil să începeți cu programarea la consultație
          și consultarea paginii serviciului.
        </p>
        <ul className="space-y-3">
          <li>
            <Link
              href="/ro/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza"
              className={blogUi.link}
            >
              Serviciul „Botox în Bălți"
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
              href="/ro/services/konturnaya-plastyka-fylleramy-v-belczah"
              className={blogUi.link}
            >
              Conturarea cu filler-e
            </Link>
          </li>
          <li>
            <Link href="/ro/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza" className={blogUi.linkStrong}>
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
          Clinica Meddera, Bălți. Material informativ pentru persoane care iau în calcul injecțiile cu botox;
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
