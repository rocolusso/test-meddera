import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { ORIGIN } from '@/blog-data/registry';

type Props = {
  locale: BlogLocale;
  dateModified: string;
};

export function BotoxHubBody({ locale, dateModified }: Props) {
  const ruUrl = `${ORIGIN}/blog/botoks-beltsy-hub`;
  const roUrl = `${ORIGIN}/ro/blog/botox-balti-hub`;

  if (locale === 'ru') {
    return (
      <>
        <nav className="text-sm text-gray-500 mb-6" aria-label="Хлебные крошки">
          <Link href="/" className="underline hover:text-gray-800">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="underline hover:text-gray-800">Блог</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Ботокс в Бельцах — гид</span>
        </nav>

        <p className="text-sm text-gray-500 mb-2">
          Обновлено:
          {' '}
          {dateModified}
          {' · '}
          <Link href={roUrl} className="underline hover:text-gray-800" hrefLang="ro">Română</Link>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Ботокс в Бельцах: гид по инъекциям для омоложения
        </h1>

        <p className="text-gray-700 leading-relaxed mb-10">
          Этот материал помогает понять, как работают инъекции ботулотоксина, когда они показаны,
          как проходит процедура в клинике Meddera и что важно знать перед записью на консультацию.
          Он не заменяет очный осмотр и индивидуальный план лечения.
        </p>

        <section className="mb-12" aria-labelledby="tofu">
          <h2 id="tofu" className="text-2xl font-semibold text-gray-900 mb-4">
            С чего начать (осведомлённость)
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
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
          <h2 id="mofu" className="text-2xl font-semibold text-gray-900 mb-4">
            Как проходит процедура (оценка)
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
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
          <p className="text-gray-700 leading-relaxed">
            На консультации вы можете уточнить опыт врача, тип препарата, технику введения (игла/канюля),
            возможные побочные эффекты и длительность результата — прозрачность помогает принять информированное решение.
          </p>
        </section>

        <section className="mb-12" aria-labelledby="bofu">
          <h2 id="bofu" className="text-2xl font-semibold text-gray-900 mb-4">
            Следующий шаг в Meddera (решение)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Если вы рассматриваете инъекции ботокса в Бельцах, логично начать с записи на консультацию
            и ознакомления со страницей услуги.
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza"
                className="text-green-700 font-medium underline hover:text-green-900"
              >
                Услуга «Ботокс в Бельцах»
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
              <Link href="/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza" className="text-gray-800 underline hover:text-gray-950">
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
            рассматривающих инъекции ботокса; медицинские решения принимаются только после очной консультации с врачом.
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
        <span className="text-gray-800">Botox în Bălți — ghid</span>
      </nav>

      <p className="text-sm text-gray-500 mb-2">
        Actualizat:
        {' '}
        {dateModified}
        {' · '}
        <Link href={ruUrl} className="underline hover:text-gray-800" hrefLang="ru">Русский</Link>
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Botox în Bălți: ghid despre injecții pentru întinerire
      </h1>

      <p className="text-gray-700 leading-relaxed mb-10">
        Acest material explică cum funcționează injecțiile cu toxină botulinică, când sunt indicate,
        cum decurge procedura la clinica Meddera și ce este important să știți înainte de programare.
        Nu înlocuiește examenul clinic și planul individual de tratament.
      </p>

      <section className="mb-12" aria-labelledby="tofu-ro">
        <h2 id="tofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">
          De unde începem (informare)
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
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
        <h2 id="mofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">
          Cum decurge procedura (evaluare)
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
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
        <p className="text-gray-700 leading-relaxed">
          La consultație puteți clarifica experiența medicului, tipul de preparat, tehnica de administrare (ac/canion),
          posibilele efecte secundare și durata rezultatului — transparența ajută la luarea unei decizii informate.
        </p>
      </section>

      <section className="mb-12" aria-labelledby="bofu-ro">
        <h2 id="bofu-ro" className="text-2xl font-semibold text-gray-900 mb-4">
          Pasul următor la Meddera (decizie)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Dacă analizați injecțiile cu botox în Bălți, este rezonabil să începeți cu programarea la consultație
          și consultarea paginii serviciului.
        </p>
        <ul className="space-y-3">
          <li>
            <Link
              href="/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza/ro"
              className="text-green-700 font-medium underline hover:text-green-900"
            >
              Serviciul „Botox în Bălți"
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
            <Link href="/services/botoks-v-belczah-effektyvnoe-omolozhenye-lycza/ro" className="text-gray-800 underline hover:text-gray-950">
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
          Clinica Meddera, Bălți. Material informativ pentru persoane care iau în calcul injecțiile cu botox;
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
