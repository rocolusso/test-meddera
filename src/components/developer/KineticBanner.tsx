'use client';

import { useEffect, useRef } from 'react';

import type { DeveloperCopy } from './copy';

type Props = { copy: DeveloperCopy['banner'] };

/**
 * Banner A: the words Site / Search / Ads / Analytics / Leads, then the chain site, traffic, analytics and a "new lead" card.
 * CSS only (see developer.css). The loop plays while the block is on screen and pauses when it is not.
 */
export default function KineticBanner({ copy }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      el.dataset.play = '1';
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.play = '1';
        } else {
          delete el.dataset.play;
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="dv-bn" ref={ref} role="img" aria-label={copy.aria}>
      <div className="dv-bn__box" aria-hidden="true">
        <div className="dv-bn__s1">
          <div className="dv-bn__label">{copy.label}</div>
          <div className="dv-bn__slot">
            {copy.words.map((w) => (
              <span className="dv-bn__w" key={w}>{`${w}.`}</span>
            ))}
          </div>
        </div>
        <div className="dv-bn__s2">
          <div className="dv-bn__pipe">
            {copy.steps.map((step, i) => (
              <span className="dv-bn__pair" key={step.name}>
                <span className={`dv-bn__nd dv-bn__nd--${i}`}>
                  {step.name}
                  <small>{step.note}</small>
                </span>
                <i className={`dv-bn__ln dv-bn__ln--${i}`} />
              </span>
            ))}
            <span className="dv-bn__lead">
              <b>
                <i />
                {copy.lead.title}
              </b>
              <small>{copy.lead.note}</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
