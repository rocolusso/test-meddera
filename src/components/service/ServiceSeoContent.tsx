import React from 'react';
import Link from 'next/link';

import { JsonLd } from '@/components/JsonLd';
import { getHubForCluster, getPostById } from '@/blog-data/registry';
import { servicesLinksRo, servicesLinksRu } from '@/lib/db-content';
import { RECEPTION_SCHEDULE_COPY } from '@/lib/contact-reception-schedule';
import { SERVICE_BLOG, SERVICE_RELATED } from '@/lib/service-seo/related';
import { SERVICE_SEO } from '@/lib/service-seo';
import { PHONE, SITE_ORIGIN, type Locale } from '@/lib/schema/constants';
import { faqNode, pageGraph, serviceNode } from '@/lib/schema/graph';

const h2Class =
  'alt-font mb-4 mt-10 text-[22px] font-semibold leading-[30px] text-pofo-heading md:text-[24px] md:leading-[32px]';
const h3Class = 'alt-font mb-2 mt-6 text-[18px] font-semibold leading-[26px] text-pofo-heading';
const ulClass =
  'list-none space-y-2.5 pl-0 [&>li]:relative [&>li]:pl-[22px] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.85em] [&>li]:before:h-px [&>li]:before:w-2.5 [&>li]:before:bg-deep-pink [&>li]:before:content-[\'\']';

type Props = {
  locale: Locale;
  slug: string;
  /** Page title and description from the page's own metadata. */
  title: string;
  description: string;
};

function BookingBlock({ locale }: { locale: Locale }) {
  const ru = locale === 'ru';
  const copy = RECEPTION_SCHEDULE_COPY[locale];
  return (
    <section>
      <h2 className={h2Class}>{ru ? 'Запись на приём' : 'Programare la consultație'}</h2>
      <p>
        {ru ? 'Записаться можно по телефону ' : 'Vă puteți programa la telefon '}
        <a href={`tel:${PHONE}`}>+373 685 500 30</a>
        {ru
          ? ' или через форму записи на этой странице. Клиника Meddera находится в Бельцах, на улице Штефан чел Маре, 13. '
          : ' sau prin formularul de programare de pe această pagină. Clinica Meddera se află în Bălți, pe strada Ștefan cel Mare, 13. '}
        {copy.daysSummary}{' '}
        {ru ? `Приём по предварительной записи, ${copy.hoursRange}.` : `Consultații cu programare prealabilă, ${copy.hoursRange}.`}
      </p>
    </section>
  );
}

function RelatedBlock({ locale, slug }: { locale: Locale; slug: string }) {
  const ru = locale === 'ru';
  const services = ru ? servicesLinksRu : servicesLinksRo;
  const blog = SERVICE_BLOG[slug];
  const hub = blog ? getHubForCluster(blog.cluster) : undefined;
  const articles = blog
    ? blog.articles.map((id) => getPostById(id)).filter((a): a is NonNullable<ReturnType<typeof getPostById>> => Boolean(a))
    : [];
  const relatedServices = (SERVICE_RELATED[slug] ?? [])
    .map((s) => services.find((x) => x.url.endsWith(`/services/${s}`)))
    .filter((x): x is (typeof services)[number] => Boolean(x));
  if (!hub && relatedServices.length === 0) return null;

  const blogHref = (p: { slugRu: string; slugRo: string }) => (ru ? `/blog/${p.slugRu}` : `/ro/blog/${p.slugRo}`);
  const clean = (t: string) => t.replace(/\s*\|\s*Meddera$/, '');

  return (
    <section>
      <h2 className={h2Class}>{ru ? 'Читайте и смотрите также' : 'De citit și de văzut'}</h2>
      {hub ? (
        <>
          <h3 className={h3Class}>{ru ? 'В блоге клиники' : 'Pe blogul clinicii'}</h3>
          <ul className={ulClass}>
            <li>
              <Link href={blogHref(hub)}>{clean(ru ? hub.titleRu : hub.titleRo)}</Link>
            </li>
            {articles.map((a) => (
              <li key={a.id}>
                <Link href={blogHref(a)}>{clean(ru ? a.titleRu : a.titleRo)}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {relatedServices.length > 0 ? (
        <>
          <h3 className={h3Class}>{ru ? 'Другие услуги' : 'Alte servicii'}</h3>
          <ul className={ulClass}>
            {relatedServices.map((s) => (
              <li key={s.id}>
                <Link href={s.url}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}

/**
 * Visible long text of a service page (was hidden): sections, FAQ, booking, related links,
 * plus the page's JSON-LD (WebPage + Service + FAQPage when the page has visible questions).
 */
export default function ServiceSeoContent({ locale, slug, title, description }: Props) {
  const data = SERVICE_SEO[slug];
  if (!data) throw new Error(`No service SEO content for ${slug}`);
  const ru = locale === 'ru';
  const t = data[locale];
  const url = `${SITE_ORIGIN}${ru ? '' : '/ro'}/services/${slug}`;
  const home = ru ? 'Главная' : 'Acasă';
  const servicesLabel = ru ? 'Услуги' : 'Servicii';

  const graph = pageGraph({
    locale,
    url,
    name: title,
    description,
    types: data.medical ? ['MedicalWebPage'] : ['WebPage'],
    breadcrumbs: [
      { name: home, url: ru ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/ro` },
      { name: servicesLabel, url: `${SITE_ORIGIN}${ru ? '' : '/ro'}/services` },
      { name: t.serviceName, url },
    ],
    mainEntityId: `${url}#service`,
    extra: [
      serviceNode({ url, name: t.serviceName, description, serviceType: t.serviceType }),
      ...(t.faq?.length ? [faqNode(url, t.faq.map((f) => ({ question: f.question, answer: f.answer })))] : []),
    ],
  });

  return (
    <>
      <JsonLd data={graph} />
      {t.sections.map((s) => (
        <section key={s.h2}>
          <h2 className={h2Class}>{s.h2}</h2>
          {s.paragraphs?.map((p) => <p key={p} className="mb-4 last:mb-0">{p}</p>)}
          {s.list ? (
            <ul className={ulClass}>
              {s.list.map((li) => <li key={li}>{li}</li>)}
            </ul>
          ) : null}
          {s.after?.map((p) => <p key={p} className="mt-4">{p}</p>)}
          {s.items?.map((it) => (
            <div key={it.h3}>
              <h3 className={h3Class}>{it.h3}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </section>
      ))}
      {t.faq?.length ? (
        <section>
          <h2 className={h2Class}>{ru ? 'Частые вопросы' : 'Întrebări frecvente'}</h2>
          {t.faq.map((f) => (
            <div key={f.question}>
              <h3 className={h3Class}>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </section>
      ) : null}
      <BookingBlock locale={locale} />
      <RelatedBlock locale={locale} slug={slug} />
    </>
  );
}
