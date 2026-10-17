import React from 'react';
import Link from 'next/link';

import type { BlogLocale, BlogPost } from '@/blog-data/types';
import { blogUi } from '@/blog-data/blog-ui';
import { serviceLabel, servicePathFor, servicesForArticle } from '@/blog-data/article-services';

/** List of service links under the call to action of an article. */
export function ArticleServiceLinks({ post, locale }: { post: BlogPost; locale: BlogLocale }) {
  const slugs = servicesForArticle(post);
  return (
    <ul className="space-y-2">
      {slugs.map((slug) => (
        <li key={slug}>
          <Link href={servicePathFor(slug, locale)} className={blogUi.link}>
            {serviceLabel(slug, locale)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
