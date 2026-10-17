import React from 'react';
import Link from 'next/link';

import type { BlogLocale } from '@/blog-data/types';
import { blogPathRo, blogPathRu, getClusterArticles, getPostById } from '@/blog-data/registry';
import { blogUi } from '@/blog-data/blog-ui';
import { HUB_CONTENT } from '@/blog-data/hubs';
import { renderInline } from '@/blog-data/inline-links';
import { servicePath } from '@/lib/service-slugs';
import type { BlogPost } from '@/blog-data/types';

type Props = {
  clusterId: string;
  locale: BlogLocale;
  dateModified: string;
};

const UI = {
  ru: {
    home: 'Главная',
    homeHref: '/',
    blog: 'Блог',
    blogHref: '/blog',
    crumbsLabel: 'Хлебные крошки',
    updated: 'Обновлено:',
    other: 'Română',
    otherLang: 'ro',
    contacts: 'Контакты и запись',
    contactsHref: '/contacts',
    eeatTitle: 'Кто готовит материалы',
    more: 'Другие материалы',
    disclaimer:
      'Информация на странице не является диагнозом и не заменяет очный приём. При острых симптомах обратитесь к врачу.',
  },
  ro: {
    home: 'Acasă',
    homeHref: '/ro',
    blog: 'Blog',
    blogHref: '/ro/blog',
    crumbsLabel: 'Breadcrumb',
    updated: 'Actualizat:',
    other: 'Русский',
    otherLang: 'ru',
    contacts: 'Contacte și programare',
    contactsHref: '/ro/contacts',
    eeatTitle: 'Cine pregătește materialele',
    more: 'Alte materiale',
    disclaimer:
      'Informația de pe pagină nu reprezintă un diagnostic și nu înlocuiește consultația la cabinet. În caz de simptome acute adresați-vă medicului.',
  },
} as const;

function anchorText(post: BlogPost, locale: BlogLocale): string {
  const h1 = locale === 'ru' ? post.h1Ru : post.h1Ro;
  const title = locale === 'ru' ? post.titleRu : post.titleRo;
  return (h1 ?? title).replace(/\s*\|\s*Meddera.*$/, '');
}

function postHref(post: BlogPost, locale: BlogLocale): string {
  return locale === 'ru' ? blogPathRu(post.slugRu) : blogPathRo(post.slugRo);
}

/** Hub page body driven by data from ./hubs: intro, sections, grouped article list, CTA. */
export function HubBody({ clusterId, locale, dateModified }: Props) {
  const hub = HUB_CONTENT[clusterId];
  if (!hub) return null;
  const t = hub[locale];
  const ui = UI[locale];
  const key = locale;

  const otherHub = getPostById(hub.hubId);
  const otherHref = otherHub
    ? locale === 'ru'
      ? blogPathRo(otherHub.slugRo)
      : blogPathRu(otherHub.slugRu)
    : ui.homeHref;

  // Articles missing from every group still get a link so nothing is orphaned.
  const all = getClusterArticles(clusterId);
  const grouped = new Set(hub.groups.flatMap((g) => g.ids));
  const leftovers = all.filter((a) => !grouped.has(a.id));

  return (
    <>
      <nav className={blogUi.breadcrumbs} aria-label={ui.crumbsLabel}>
        <Link href={ui.homeHref} className={blogUi.crumbLink}>{ui.home}</Link>
        <span className="mx-2">/</span>
        <Link href={ui.blogHref} className={blogUi.crumbLink}>{ui.blog}</Link>
        <span className="mx-2">/</span>
        <span className={blogUi.crumbCurrent}>{t.crumb}</span>
      </nav>

      <p className={blogUi.meta}>
        {ui.updated} {dateModified}
        {' · '}
        <Link href={otherHref} className={blogUi.crumbLink} hrefLang={ui.otherLang}>{ui.other}</Link>
      </p>

      <h1 className={blogUi.h1}>{t.h1}</h1>

      {t.intro.map((p, i) => (
        <p key={i} className={i === t.intro.length - 1 ? blogUi.pMb10 : blogUi.pMb4}>
          {renderInline(p, locale, blogUi.link)}
        </p>
      ))}

      {t.sections.map((s, i) => (
        <section key={i} className="mb-12" aria-labelledby={`hub-s${i}-${key}`}>
          <h2 id={`hub-s${i}-${key}`} className={blogUi.h2}>{s.h2}</h2>
          {s.paragraphs.map((p, j) => (
            <p key={j} className={j === s.paragraphs.length - 1 ? blogUi.p : blogUi.pMb4}>
              {renderInline(p, locale, blogUi.link)}
            </p>
          ))}
        </section>
      ))}

      <section className="mb-12" aria-labelledby={`hub-list-${key}`}>
        <h2 id={`hub-list-${key}`} className={blogUi.h2}>{t.listTitle}</h2>
        {[
          ...hub.groups.map((g) => ({
            h3: g[locale].h3,
            intro: g[locale].intro,
            posts: g.ids.map((id) => getPostById(id)).filter((p): p is BlogPost => Boolean(p)),
          })),
          ...(leftovers.length ? [{ h3: ui.more, intro: undefined, posts: leftovers }] : []),
        ].map((g, gi) => (
          <div key={gi} className="mb-6">
            <h3 className={blogUi.h2Small}>{g.h3}</h3>
            {g.intro ? <p className={blogUi.pMb4}>{renderInline(g.intro, locale, blogUi.link)}</p> : null}
            <ul className={blogUi.ul}>
              {g.posts.map((p) => (
                <li key={p.id}>
                  <Link href={postHref(p, locale)} className={blogUi.link}>{anchorText(p, locale)}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-12" aria-labelledby={`hub-cta-${key}`}>
        <h2 id={`hub-cta-${key}`} className={blogUi.h2}>{t.ctaTitle}</h2>
        <p className={blogUi.pMb6}>{renderInline(t.ctaText, locale, blogUi.link)}</p>
        <ul className="space-y-3">
          {hub.services.map((s) => (
            <li key={s.slug}>
              <Link href={servicePath(s.slug, locale)} className={blogUi.link}>{s[locale]}</Link>
            </li>
          ))}
          <li>
            <Link href={ui.contactsHref} className={blogUi.linkStrong}>{ui.contacts}</Link>
          </li>
        </ul>
      </section>

      <section className={blogUi.reviewBox} aria-labelledby={`hub-eeat-${key}`}>
        <h2 id={`hub-eeat-${key}`} className={blogUi.boxTitle}>{ui.eeatTitle}</h2>
        <p className={blogUi.small}>{t.eeatText}</p>
      </section>

      <p className={blogUi.footerDisclaimer}>{ui.disclaimer}</p>
    </>
  );
}
