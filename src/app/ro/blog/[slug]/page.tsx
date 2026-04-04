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
  return getAllSlugParams('ro');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'ro');
  if (!post) return {};
  const canonical = `${ORIGIN}/ro/blog/${post.slugRo}`;
  const ruUrl = `${ORIGIN}/blog/${post.slugRu}`;
  return {
    title: post.titleRo,
    description: post.descriptionRo,
    alternates: {
      canonical,
      languages: {
        ru: ruUrl,
        ro: canonical,
        'x-default': ruUrl,
      },
    },
    ...blogSocialMetadata({
      title: post.titleRo,
      description: post.descriptionRo,
      url: canonical,
      locale: 'ro_MD',
      type: 'article',
    }),
  };
}

export default async function BlogPostRoPage({ params }: Props) {
  const { slug } = await params;
  if (slug === 'page') {
    notFound();
  }
  const post = getPostBySlug(slug, 'ro');
  if (!post) {
    notFound();
  }

  const canonical = `${ORIGIN}/ro/blog/${post.slugRo}`;
  const headline = post.titleRo.replace(' | Meddera', '');
  let jsonLd: ReturnType<typeof lipAugmentationHubJsonLd> | ReturnType<typeof blogArticleJsonLd> | null =
    null;
  if (post.bodyKey === 'lip-augmentation-hub') {
    jsonLd = lipAugmentationHubJsonLd({
      pageUrl: canonical,
      locale: 'ro',
      title: headline,
      description: post.descriptionRo,
      dateModified: post.dateModified,
      breadcrumbItems: [
        { name: 'Acasă', item: `${ORIGIN}/ro` },
        { name: 'Blog', item: `${ORIGIN}/ro/blog` },
        { name: 'Mărirea buzelor — ghid', item: canonical },
      ],
    });
  } else if (post.kind === 'article') {
    jsonLd = blogArticleJsonLd({
      pageUrl: canonical,
      headline,
      description: post.descriptionRo,
      datePublished: post.publishedAt,
      dateModified: post.dateModified,
      inLanguage: 'ro-MD',
      breadcrumbItems: [
        { name: 'Acasă', item: `${ORIGIN}/ro` },
        { name: 'Blog', item: `${ORIGIN}/ro/blog` },
        { name: headline.length > 64 ? `${headline.slice(0, 61)}…` : headline, item: canonical },
      ],
    });
  }

  const body = renderBlogPostBody(post, 'ro');
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
      <HeaderNew locale="ro" />
      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <ContentArticleBody>{body}</ContentArticleBody>
      </main>
      <FooterNew locale="ro" />
    </>
  );
}
