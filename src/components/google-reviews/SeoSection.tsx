import React from 'react';

import ReadMore from '@/components/ui/ReadMore';

import type { ReviewsCopy } from './ReviewsPageContent';
import { withLinks } from './with-links';

/**
 * The text of the reviews page: the lead paragraph is always visible, everything after it (sections, the
 * questions, the closing paragraph with the links) sits under "Read more". The collapse only clips the height,
 * the whole text is in the HTML. Typography comes from the ContentArticleBody the section is rendered in.
 */
export default function SeoSection({ copy }: { copy: ReviewsCopy }) {
  return (
    <section data-seo-section className="space-y-6">
      {copy.intro.map((t) => (
        <p key={t}>{withLinks(t)}</p>
      ))}

      <ReadMore maxHeight={400} fadeColor="var(--background)" expandLabel={copy.readMore.expand} collapseLabel={copy.readMore.collapse}>
        {copy.sections.map((s) => (
          <section key={s.h2} className="mb-12 space-y-6">
            <h2>{s.h2}</h2>
            {s.p.map((t) => (
              <p key={t}>{withLinks(t)}</p>
            ))}
            {s.list ? (
              <ul>
                {s.list.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className="mb-12 space-y-6">
          <h2>{copy.faq.h2}</h2>
          {copy.faq.items.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <h2>{copy.cta.h2}</h2>
          <p>{withLinks(copy.cta.p)}</p>
        </section>
      </ReadMore>
    </section>
  );
}
