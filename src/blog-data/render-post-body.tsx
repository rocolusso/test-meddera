import React from 'react';

import { LipAugmentationHubBody } from '@/blog-data/LipAugmentationHubBody';
import { LipClusterArticleBody } from '@/blog-data/LipClusterArticleBody';
import { DermatologistHubBody } from '@/blog-data/DermatologistHubBody';
import { DermatologistArticleBody } from '@/blog-data/DermatologistArticleBody';
import { BotoxHubBody } from '@/blog-data/BotoxHubBody';
import { BotoxArticleBody } from '@/blog-data/BotoxArticleBody';
import { LipArticleBody } from '@/blog-data/LipArticleBody';
import { MesotherapyFaceHubBody } from '@/blog-data/MesotherapyFaceHubBody';
import { MesotherapyFaceArticleBody } from '@/blog-data/MesotherapyFaceArticleBody';
import { BiorevitalizationHubBody } from '@/blog-data/BiorevitalizationHubBody';
import { BiorevitalizationArticleBody } from '@/blog-data/BiorevitalizationArticleBody';
import { FillersHubBody } from '@/blog-data/FillersHubBody';
import { FillersArticleBody } from '@/blog-data/FillersArticleBody';
import { DERMATOLOGIST_ARTICLE_CONTENT } from '@/blog-data/dermatologist-article-content';
import { BOTOX_ARTICLE_CONTENT } from '@/blog-data/botox-article-content';
import { LIPS_ARTICLE_CONTENT } from '@/blog-data/lips-article-content';
import { MESOTHERAPY_FACE_ARTICLE_CONTENT } from '@/blog-data/mesotherapy-face-article-content';
import { BIOREVITALIZATION_ARTICLE_CONTENT } from '@/blog-data/biorevitalization-article-content';
import { FILLERS_ARTICLE_CONTENT } from '@/blog-data/fillers-article-content';
import type { BlogLocale, BlogPost } from '@/blog-data/types';

export function renderBlogPostBody(post: BlogPost, locale: BlogLocale): React.ReactNode {
  switch (post.bodyKey) {
    case 'lip-augmentation-hub':
      return <LipAugmentationHubBody locale={locale} dateModified={post.dateModified} />;
    case 'lip-cluster-article': {
      const content = LIPS_ARTICLE_CONTENT[post.id];
      if (content) {
        const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
        return <LipArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
      }
      // Fallback для старых статей без контента
      return <LipClusterArticleBody post={post} locale={locale} />;
    }
    
    case 'dermatologist-hub':
      return <DermatologistHubBody locale={locale} dateModified={post.dateModified} />;
    case 'dermatologist-article': {
      const content = DERMATOLOGIST_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <DermatologistArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    case 'botox-hub':
      return <BotoxHubBody locale={locale} dateModified={post.dateModified} />;
    case 'botox-article': {
      const content = BOTOX_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <BotoxArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    case 'mesotherapy-face-hub':
      return <MesotherapyFaceHubBody locale={locale} dateModified={post.dateModified} />;
    case 'mesotherapy-face-article': {
      const content = MESOTHERAPY_FACE_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <MesotherapyFaceArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    case 'biorevitalization-hub':
      return <BiorevitalizationHubBody locale={locale} dateModified={post.dateModified} />;
    case 'biorevitalization-article': {
      const content = BIOREVITALIZATION_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <BiorevitalizationArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    case 'fillers-hub':
      return <FillersHubBody locale={locale} dateModified={post.dateModified} />;
    case 'fillers-article': {
      const content = FILLERS_ARTICLE_CONTENT[post.id];
      if (!content) return null;
      const sections = locale === 'ru' ? content.sectionsRu : content.sectionsRo;
      return <FillersArticleBody post={post} locale={locale} dateModified={post.dateModified} sections={sections} />;
    }
    
    default:
      return null;
  }
}
