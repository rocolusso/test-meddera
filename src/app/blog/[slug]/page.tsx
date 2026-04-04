import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import HeaderNew from '@/components/new-ui/HeaderNew';
import FooterNew from '@/components/new-ui/FooterNew';
import { ContentArticleBody } from '@/components/new-ui/ContentPageShell';
import { blogArticleJsonLd } from '@/lib/jsonld/blog-article';
import { lipAugmentationHubJsonLd } from '@/lib/jsonld/lip-augmentation-hub';
import { blogSocialMetadata } from '@/lib/site-og';
import { getAllSlugParams, getPostBySlug, ORIGIN } from '@/blog-data/registry';
import { renderBlogPostBody } from '@/blog-data/render-post-body';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugParams('ru');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'ru');
  if (!post) return {};
  const canonical = `${ORIGIN}/blog/${post.slugRu}`;
  const roUrl = `${ORIGIN}/ro/blog/${post.slugRo}`;
  return {
    title: post.titleRu,
    description: post.descriptionRu,
    alternates: {
      canonical,
      languages: {
        ru: canonical,
        ro: roUrl,
        'x-default': canonical,
      },
    },
    ...blogSocialMetadata({
      title: post.titleRu,
      description: post.descriptionRu,
      url: canonical,
      locale: 'ru_MD',
      type: 'article',
    }),
  };
}

export default async function BlogPostRuPage({ params }: Props) {
  const { slug } = await params;
  if (slug === 'page') {
    notFound();
  }
  const post = getPostBySlug(slug, 'ru');
  if (!post) {
    notFound();
  }

  const canonical = `${ORIGIN}/blog/${post.slugRu}`;
  const headline = post.titleRu.replace(' | Meddera', '');
  let jsonLd: ReturnType<typeof lipAugmentationHubJsonLd> | ReturnType<typeof blogArticleJsonLd> | null =
    null;
  if (post.bodyKey === 'lip-augmentation-hub') {
    jsonLd = lipAugmentationHubJsonLd({
      pageUrl: canonical,
      locale: 'ru',
      title: headline,
      description: post.descriptionRu,
      dateModified: post.dateModified,
      breadcrumbItems: [
        { name: 'Главная', item: `${ORIGIN}/` },
        { name: 'Блог', item: `${ORIGIN}/blog` },
        { name: 'Увеличение губ — гид', item: canonical },
      ],
    });
  } else if (post.kind === 'article') {
    jsonLd = blogArticleJsonLd({
      pageUrl: canonical,
      headline,
      description: post.descriptionRu,
      datePublished: post.publishedAt,
      dateModified: post.dateModified,
      inLanguage: 'ru-MD',
      breadcrumbItems: [
        { name: 'Главная', item: `${ORIGIN}/` },
        { name: 'Блог', item: `${ORIGIN}/blog` },
        { name: headline.length > 64 ? `${headline.slice(0, 61)}…` : headline, item: canonical },
      ],
    });
  }

  const body = renderBlogPostBody(post, 'ru');
  if (!body) {
    notFound();
  }

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <HeaderNew locale="ru" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <ContentArticleBody>{body}</ContentArticleBody>
      </main>
      <FooterNew locale="ru" />
    </>
  );
}
