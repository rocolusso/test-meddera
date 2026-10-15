import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { blogUi } from '@/blog-data/blog-ui';
import { getClusterArticles } from '@/blog-data/registry';

type Props = { clusterId: string; locale: BlogLocale };

/** Full list of the rubric's articles, so every article is reachable from its hub. */
export function HubArticleList({ clusterId, locale }: Props) {
  const isRu = locale === 'ru';
  const articles = getClusterArticles(clusterId);
  if (articles.length === 0) return null;

  return (
    <section className="mb-12" aria-labelledby={`all-articles-${locale}`}>
      <h2 id={`all-articles-${locale}`} className={blogUi.h2}>
        {isRu ? 'Все материалы рубрики' : 'Toate materialele rubricii'}
      </h2>
      <p className={blogUi.pMb4}>
        {isRu
          ? 'Выберите вопрос, который ближе всего к вашей ситуации. Каждая статья разбирает одну тему отдельно.'
          : 'Alegeți întrebarea cea mai apropiată de situația dvs. Fiecare articol tratează separat o singură temă.'}
      </p>
      <ul className={blogUi.ul}>
        {articles.map((a) => (
          <li key={a.id}>
            <Link
              href={isRu ? `/blog/${a.slugRu}` : `/ro/blog/${a.slugRo}`}
              className={blogUi.link}
            >
              {(isRu ? a.titleRu : a.titleRo).replace(/\s*\|\s*Meddera$/, '')}
            </Link>
          </li>
        ))}
      </ul>
      <p className={blogUi.pMb4}>
        {isRu ? (
          <>
            Если нужен очный осмотр, запишитесь на приём: телефон, адрес и форма записи есть на странице{' '}
            <Link href="/contacts" className={blogUi.link}>
              «Контакты»
            </Link>
            .
          </>
        ) : (
          <>
            Dacă aveți nevoie de un consult la cabinet, programați-vă: telefonul, adresa și formularul de
            programare sunt pe pagina{' '}
            <Link href="/ro/contacts" className={blogUi.link}>
              „Contacte”
            </Link>
            .
          </>
        )}
      </p>
    </section>
  );
}
