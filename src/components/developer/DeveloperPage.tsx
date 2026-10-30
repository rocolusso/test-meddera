'use client';

import { useEffect, useSyncExternalStore } from 'react';

import { sendGa4Event } from '@/lib/ga4-worker-client';

import DeveloperForm from './DeveloperForm';
import HeroOrbit from './HeroOrbit';
import KineticBanner from './KineticBanner';
import ProjectsSection from './ProjectsSection';
import { trackDeveloperClick } from './analytics';
import { DEVELOPER_COPY, DEVELOPER_LANG_LABEL, type DeveloperLang } from './copy';
import { getLangServerSnapshot, getLangSnapshot, setLang, subscribeLang } from './lang-store';

const LANGS: DeveloperLang[] = ['ru', 'uk', 'en'];

export default function DeveloperPage() {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);
  const copy = DEVELOPER_COPY[lang];

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang;
    document.title = copy.metaTitle;
  }, [copy]);

  useEffect(() => {
    sendGa4Event('page_view', {
      page_location: window.location.href,
      page_referrer: document.referrer,
      page_title: document.title,
      lang,
    });
    // once per visit: a language switch is not a new page view
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const orbitChips = ['Next.js', 'Google Ads', 'GA4', 'SEO', copy.banner.words[4]];

  return (
    <div className="dv">
      <header className="dv-nav">
        <span className="dv-brand">Alexander Shchedrov</span>
        <div className="dv-lang" role="group" aria-label={copy.nav.switchLabel}>
          {LANGS.map((l) => (
            <button
              type="button"
              key={l}
              className="dv-lang__btn"
              aria-pressed={l === lang}
              lang={l}
              onClick={() => {
                if (l === lang) return;
                setLang(l);
                trackDeveloperClick(`lang_${l}`, l, `lang_${l}`);
              }}
            >
              {DEVELOPER_LANG_LABEL[l]}
            </button>
          ))}
        </div>
      </header>

      <main>
        <section className="dv-hero">
          <div className="dv-hero__text">
            <span className="dv-pill">
              <i />
              {copy.hero.pill}
            </span>
            <h1 className="dv-h1">
              {copy.hero.nameLines[0]}
              <br />
              {copy.hero.nameLines[1]}
            </h1>
            <p className="dv-role">{copy.hero.role}</p>
            <p className="dv-lead">{copy.hero.lead}</p>
            <div className="dv-btns">
              <a className="dv-btn dv-btn--solid" href="#form" onClick={() => trackDeveloperClick('hero_discuss', lang)}>
                {copy.hero.ctaDiscuss}
              </a>
              <a className="dv-btn dv-btn--ghost" href="#projects" onClick={() => trackDeveloperClick('hero_projects', lang)}>
                {copy.hero.ctaProjects}
              </a>
            </div>
          </div>
          <HeroOrbit alt={copy.hero.photoAlt} chips={orbitChips} />
        </section>

        <div className="dv-pad">
          <KineticBanner copy={copy.banner} />
        </div>

        <section className="dv-sec">
          <p className="dv-eyebrow">{copy.services.eyebrow}</p>
          <div className="dv-bento">
            {copy.services.items.map((s) => (
              <article className="dv-card" key={s.title}>
                <div className="dv-ico" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dv-sec">
          <p className="dv-eyebrow">{copy.stack.eyebrow}</p>
          <dl className="dv-stack">
            {copy.stack.rows.map((row) => (
              <div className="dv-stack__row" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <ProjectsSection copy={copy.projects} lang={lang} />
        <DeveloperForm copy={copy.form} lang={lang} />
      </main>

      <footer className="dv-foot">
        <span>{`© ${new Date().getFullYear()} Alexander Shchedrov`}</span>
        <span>{copy.footer.languages}</span>
      </footer>
    </div>
  );
}
