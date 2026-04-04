import React from 'react';

import { LipAugmentationHubBody } from '@/blog-data/LipAugmentationHubBody';
import { LipClusterArticleBody } from '@/blog-data/LipClusterArticleBody';
import type { BlogLocale, BlogPost } from '@/blog-data/types';

export function renderBlogPostBody(post: BlogPost, locale: BlogLocale): React.ReactNode {
  switch (post.bodyKey) {
    case 'lip-augmentation-hub':
      return <LipAugmentationHubBody locale={locale} dateModified={post.dateModified} />;
    case 'lip-cluster-article':
      return <LipClusterArticleBody post={post} locale={locale} />;
    default:
      return null;
  }
}
