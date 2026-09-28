import React from 'react';
import Link from 'next/link';

import type { BlogLocale, BlogPost } from '@/blog-data/types';
import { blogPathRu, blogPathRo, getRelatedArticles, getHubSlug } from '@/blog-data/registry';
import { blogUi } from '@/blog-data/blog-ui';

type ArticleSection = { h2: string; paragraphs: string[] };

type Props = {
  post: BlogPost;
  locale: BlogLocale;
  dateModified: string;
  sections: ArticleSection[];
};

export function MesotherapyFaceArticleBody({ post, locale, dateModified, sections }: Props) {
  const isRu = locale === 'ru';
  const title = isRu ? post.titleRu : post.titleRo;
  const ruUrl = blogPathRu(post.slugRu);
  const roUrl = blogPathRo(post.slugRo);
  
  const relatedPosts = getRelatedArticles(post, 5);
  const hubSlug = getHubSlug(post.clusterId, locale);
  
  const authorByline = post.authorByline?.[locale] || 'Meddera Beauty Clinic';
  const medicalReview = post.medicalReview?.[locale] || (isRu
    ? 'Материал подготовлен специалистами клиники Meddera, Бельцы. Информация носит ознакомительный характер и не заменяет очную консультацию с врачом-дерматокосметологом.'
    : 'Materialul a fost pregătit de specialiștii clinicii Meddera, Bălți. Informația are caracter informativ și nu înlocuiește consultația cu medicul dermatocosmetolog.'
  );

  return (
    <>
      <nav className={blogUi.breadcrumbs} aria-label={isRu ? 'Хлебные крошки' : 'Breadcrumb'}>
        <Link href={isRu ? '/' : '/ro'} className={blogUi.crumbLink}>{isRu ? 'Главная' : 'Acasă'}</Link>
        <span className="mx-2">/</span>
        <Link href={isRu ? '/blog' : '/ro/blog'} className={blogUi.crumbLink}>{isRu ? 'Блог' : 'Blog'}</Link>
        <span className="mx-2">/</span>
        <span className={blogUi.crumbCurrent}>{title}</span>
      </nav>

      <p className={blogUi.meta}>{isRu ? 'Автор:' : 'Autor:'} {authorByline}</p>

      <p className={blogUi.meta}>
        {isRu ? 'Обновлено:' : 'Actualizat:'} {dateModified} · <Link href={isRu ? roUrl : ruUrl} className={blogUi.crumbLink} hrefLang={isRu ? 'ro' : 'ru'}>{isRu ? 'Română' : 'Русский'}</Link>
      </p>

      <h1 className={blogUi.h1}>{title}</h1>

      <div className={blogUi.disclaimerBox}>
        <p className={blogUi.small}>
          {isRu ? 'Материал носит информационный характер и не заменяет очную консультацию с врачом-дерматокосметологом.' : 'Materialul are caracter informativ și nu înlocuiește consultația cu medicul dermatocosmetolog.'}
        </p>
      </div>

      {sections.map((section, idx) => (
        <section key={idx} className="mb-10">
          <h2 className={blogUi.h2}>{section.h2}</h2>
          {section.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className={blogUi.pMb4}>{para}</p>
          ))}
        </section>
      ))}

      <section className="mb-10">
        <h2 className={blogUi.h2}>{isRu ? 'Запись на консультацию' : 'Programare la consultație'}</h2>
        <p className={blogUi.pMb4}>
          {isRu
            ? 'Если вы рассматриваете мезотерапию лица в Бельцах, запишитесь на консультацию в клинике Meddera.'
            : 'Dacă analizați mezoterapia feței în Bălți, programați-vă la consultație la clinica Meddera.'
          }
        </p>
        <ul className="space-y-2">
          <li><Link href={isRu ? '/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe' : '/ro/services/mezoterapyya-lycza-v-belczah-put-k-molodoj-y-syyayushhej-kozhe'} className={blogUi.link}>{isRu ? 'Услуга «Мезотерапия лица»' : 'Serviciul „Mezoterapia feței"'}</Link></li>
        </ul>
      </section>

      <section className={blogUi.reviewBox} aria-labelledby="medical-review">
        <h2 id="medical-review" className={blogUi.boxTitle}>{isRu ? 'Медицинская проверка' : 'Verificare medicală'}</h2>
        <p className={blogUi.small}>{medicalReview}</p>
      </section>

      {relatedPosts.length > 0 && (
        <section className="mb-12">
          <h2 className={blogUi.h2Small}>{isRu ? 'Читайте также' : 'Citiți și'}</h2>
          <ul className="space-y-2">
            {relatedPosts.map((related) => (
              <li key={related.id}>
                <Link href={isRu ? `/blog/${related.slugRu}` : `/ro/blog/${related.slugRo}`} className={blogUi.link}>
                  {isRu ? related.titleRu : related.titleRo}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {hubSlug && (
        <div className="mb-12">
          <Link href={isRu ? `/blog/${hubSlug}` : `/ro/blog/${hubSlug}`} className={blogUi.backButton}>
            {isRu ? '← Вернуться к рубрике «Мезотерапия лица»' : '← Înapoi la rubrica „Mezoterapia feței"'}
          </Link>
        </div>
      )}

      <p className={blogUi.footerDisclaimer}>
        {isRu ? 'Медицинский дисклеймер: информация не является диагнозом и не заменяет очный приём.' : 'Exonerare medicală: conținutul nu constituie diagnostic și nu înlocuiește examenul medical.'}
      </p>
    </>
  );
}
