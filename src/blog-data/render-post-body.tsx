import React from 'react';

import { LipClusterArticleBody } from '@/blog-data/LipClusterArticleBody';
import { HubBody } from '@/blog-data/HubBody';
import { DermatologistArticleBody } from '@/blog-data/DermatologistArticleBody';
import { BotoxArticleBody } from '@/blog-data/BotoxArticleBody';
import { LipArticleBody } from '@/blog-data/LipArticleBody';
import { MesotherapyFaceArticleBody } from '@/blog-data/MesotherapyFaceArticleBody';
import { BiorevitalizationArticleBody } from '@/blog-data/BiorevitalizationArticleBody';
import { FillersArticleBody } from '@/blog-data/FillersArticleBody';
import { DERMATOLOGIST_ARTICLE_CONTENT } from '@/blog-data/dermatologist-article-content';
import { BOTOX_ARTICLE_CONTENT } from '@/blog-data/botox-article-content';
import { LIPS_ARTICLE_CONTENT } from '@/blog-data/lips-article-content';
import { MESOTHERAPY_FACE_ARTICLE_CONTENT } from '@/blog-data/mesotherapy-face-article-content';
import { BIOREVITALIZATION_ARTICLE_CONTENT } from '@/blog-data/biorevitalization-article-content';
import { FILLERS_ARTICLE_CONTENT } from '@/blog-data/fillers-article-content';
import { BLOG_REWRITES } from '@/blog-data/rewrites';
import type { BlogLocale, BlogPost } from '@/blog-data/types';

export function renderBlogPostBody(post: BlogPost, locale: BlogLocale): React.ReactNode {
  switch (post.bodyKey) {
    case 'lip-augmentation-hub':
      return <HubBody clusterId="lips" locale={locale} dateModified={post.dateModified} />;
    case 'lip-cluster-article': {
      const content = BLOG_REWRITES[post.id] ?? LIPS_ARTICLE_CONTENT[post.id];
      if (content) {
        const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
        return <LipArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
      }
      // Fallback для старых статей без контента
      return <LipClusterArticleBody post={post} locale={locale} />;
    }
    
    case 'dermatologist-hub':
      return <HubBody clusterId="dermatologist" locale={locale} dateModified={post.dateModified} />;
    case 'dermatologist-article': {
      const content = BLOG_REWRITES[post.id] ?? DERMATOLOGIST_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <DermatologistArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    case 'botox-hub':
      return <HubBody clusterId="botox" locale={locale} dateModified={post.dateModified} />;
    case 'botox-article': {
      const content = BLOG_REWRITES[post.id] ?? BOTOX_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <BotoxArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    case 'mesotherapy-face-hub':
      return <HubBody clusterId="mesotherapy-face" locale={locale} dateModified={post.dateModified} />;
    case 'mesotherapy-face-article': {
      const content = BLOG_REWRITES[post.id] ?? MESOTHERAPY_FACE_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <MesotherapyFaceArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    case 'biorevitalization-hub':
      return <HubBody clusterId="biorevitalization" locale={locale} dateModified={post.dateModified} />;
    case 'biorevitalization-article': {
      const content = BLOG_REWRITES[post.id] ?? BIOREVITALIZATION_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <BiorevitalizationArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    case 'fillers-hub':
      return <HubBody clusterId="fillers" locale={locale} dateModified={post.dateModified} />;
    case 'fillers-article': {
      const content = BLOG_REWRITES[post.id] ?? FILLERS_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <FillersArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    default:
      return null;
  }
}
