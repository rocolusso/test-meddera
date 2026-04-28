import React from 'react';
import Link from 'next/link';

import type { BlogLocale, BlogPost } from '@/blog-data/types';
import { ORIGIN, getRelatedArticles, getHubSlug } from '@/blog-data/registry';

type ArticleSection = { h2: string; paragraphs: string[] };

type Props = {
  post: BlogPost;
  locale: BlogLocale;
  dateModified: string;
  sections: ArticleSection[];
};

export function LipArticleBody({ post, locale, dateModified, sections }: Props) {
  const isRu = locale === 'ru';
  const slug = isRu ? post.slugRu : post.slugRo;
  const title = isRu ? post.titleRu : post.titleRo;
  const ruUrl = `${ORIGIN}/blog/${post.slugRu}`;
  const roUrl = `${ORIGIN}/ro/blog/${post.slugRo}`;
  
  const relatedPosts = getRelatedArticles(post, 5);
  const hubSlug = getHubSlug(post.clusterId, locale);
  
  const authorByline = post.authorByline?.[locale] || 'Meddera Beauty Clinic';
  const medicalReview = post.medicalReview?.[locale] || (isRu
    ? 'Материал подготовлен специалистами клиники Meddera, Бельцы. Информация носит ознакомительный характер и не заменяет очную консультацию с врачом-дерматокосметологом.'
    : 'Materialul a fost pregătit de specialiștii clinicii Meddera, Bălți. Informația are caracter informativ și nu înlocuiește consultația cu medicul dermatocosmetolog.'
  );

  return (
    <>
      <nav className="text-sm text-gray-500 mb-6" aria-label={isRu ? 'Хлебные крошки' : 'Breadcrumb'}>
        <Link href={isRu ? '/' : '/ro'} className="underline hover:text-gray-800">
          {isRu ? 'Главная' : 'Acasă'}
        </Link>
        <span className="mx-2">/</span>
        <Link href={isRu ? '/blog' : '/ro/blog'} className="underline hover:text-gray-800">
          {isRu ? 'Блог' : 'Blog'}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{title}</span>
      </nav>

      <p className="text-sm text-gray-600 mb-2">
        {isRu ? 'Автор:' : 'Autor:'} {authorByline}
      </p>

      <p className="text-sm text-gray-500 mb-2">
        {isRu ? 'Обновлено:' : 'Actualizat:'}
        {' '}
        {dateModified}
        {' · '}
        <Link 
          href={isRu ? roUrl : ruUrl} 
          className="underline hover:text-gray-800" 
          hrefLang={isRu ? 'ro' : 'ru'}
        >
          {isRu ? 'Română' : 'Русский'}
        </Link>
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        {title}
      </h1>

      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 mb-8">
        <p className="text-sm text-gray-700">
          {isRu 
            ? 'Материал носит информационный характер и не заменяет очную консультацию с врачом-дерматокосметологом. При острых симптомах обратитесь к специалисту.'
            : 'Materialul are caracter informativ și nu înlocuiește consultația cu medicul dermatocosmetolog. În caz de simptome acute, adresați-vă specialistului.'
          }
        </p>
      </div>

      {sections.map((section, idx) => (
        <section key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {section.h2}
          </h2>
          {section.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="text-gray-700 leading-relaxed mb-4">
              {para}
            </p>
          ))}
        </section>
      ))}

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {isRu ? 'Запись на консультацию' : 'Programare la consultație'}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isRu
            ? 'Если вы рассматриваете увеличение губ в Бельцах, запишитесь на консультацию в клинике Meddera. Врач оценит анатомию губ, обсудит ожидания и составит индивидуальный план.'
            : 'Dacă analizați mărirea buzelor în Bălți, programați-vă la consultație la clinica Meddera. Medicul va evalua anatomia buzelor, va discuta așteptările și va întocmi un plan individual.'
          }
        </p>
        <ul className="space-y-2">
          <li>
            <Link
              href={isRu 
                ? '/services/uvelychenye-gub-v-belczah'
                : '/ro/services/uvelychenye-gub-v-belczah'
              }
              className="text-green-700 font-medium underline hover:text-green-900"
            >
              {isRu ? 'Услуга «Увеличение губ в Бельцах»' : 'Serviciul „Mărirea buzelor în Bălți"'}
            </Link>
          </li>
          <li>
            <Link
              href={isRu 
                ? '/services/konsultaczyya-dermatokosmetologa-v-belczah'
                : '/ro/services/konsultaczyya-dermatokosmetologa-v-belczah'
              }
              className="text-green-700 font-medium underline hover:text-green-900"
            >
              {isRu ? 'Консультация дерматокосметолога' : 'Consultația dermatocosmetologului'}
            </Link>
          </li>
        </ul>
      </section>

      <section
        className="rounded-lg border border-gray-200 bg-gray-50 p-6 mb-8"
        aria-labelledby="medical-review"
      >
        <h2 id="medical-review" className="text-lg font-semibold text-gray-900 mb-3">
          {isRu ? 'Медицинская проверка' : 'Verificare medicală'}
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {medicalReview}
        </p>
      </section>

      {relatedPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {isRu ? 'Читайте также' : 'Citiți și'}
          </h2>
          <ul className="space-y-2">
            {relatedPosts.map((related) => (
              <li key={related.id}>
                <Link 
                  href={isRu ? `/blog/${related.slugRu}` : `/ro/blog/${related.slugRo}`}
                  className="text-green-700 underline hover:text-green-900"
                >
                  {isRu ? related.titleRu : related.titleRo}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {hubSlug && (
        <div className="mb-12">
          <Link 
            href={isRu ? `/blog/${hubSlug}` : `/ro/blog/${hubSlug}`}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            {isRu ? '← Вернуться к рубрике «Увеличение губ»' : '← Înapoi la rubrica „Mărirea buzelor"'}
          </Link>
        </div>
      )}

      <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
        {isRu
          ? 'Медицинский дисклеймер: информация на странице не является диагнозом и не заменяет очный приём. При острых симптомах, аллергических реакциях или сомнениях по показаниям обратитесь к врачу.'
          : 'Exonerare medicală: conținutul nu constituie diagnostic și nu înlocuiește examenul medical. În caz de simptome acute, reacții alergice sau îndoieli privind indicațiile, adresați-vă medicului.'
        }
      </p>
    </>
  );
}
