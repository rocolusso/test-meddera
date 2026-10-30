import Image from 'next/image';
import Link from 'next/link';

import type { DeveloperCopy, DeveloperLang } from './copy';
import { trackDeveloperClick } from './analytics';

type Props = { copy: DeveloperCopy['projects']; lang: DeveloperLang };

export default function ProjectsSection({ copy, lang }: Props) {
  return (
    <section className="dv-sec" id="projects">
      <p className="dv-eyebrow">{copy.eyebrow}</p>
      <div className="dv-cases">
        {copy.items.map((p) => {
          const source = `case_${p.id}`;
          const shot = (
            <div className="dv-case__frame">
              <div className="dv-case__bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>{p.host}</span>
              </div>
              <Image
                src={`/assets/img/developer/${p.id}.webp`}
                alt=""
                width={1200}
                height={630}
                sizes="(max-width: 768px) 92vw, 340px"
                quality={75}
                loading="lazy"
              />
            </div>
          );
          const link = p.internal ? (
            <Link
              className="dv-btn dv-btn--ghost"
              href={p.href}
              prefetch={false}
              onClick={() => trackDeveloperClick(source, lang, p.host)}
            >
              {copy.open}
              <span aria-hidden="true"> ↗</span>
            </Link>
          ) : (
            <a
              className="dv-btn dv-btn--ghost"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDeveloperClick(source, lang, p.host)}
            >
              {copy.open}
              <span aria-hidden="true"> ↗</span>
            </a>
          );
          return (
            <article className="dv-case" key={p.id}>
              {shot}
              <h3 className="dv-case__title">{p.host}</h3>
              <p className="dv-case__text">{p.text}</p>
              <ul className="dv-tags">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              {link}
            </article>
          );
        })}
      </div>
    </section>
  );
}
