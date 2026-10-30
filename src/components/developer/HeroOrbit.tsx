import type { CSSProperties } from 'react';
import Image from 'next/image';

type Props = { alt: string; chips: string[] };

/** Photo in the middle, labels travel round it (CSS only). The labels stay upright while the ring turns. */
export default function HeroOrbit({ alt, chips }: Props) {
  const angle = 360 / chips.length;
  return (
    <div className="dv-orbit">
      <div className="dv-orbit__ring2" aria-hidden="true" />
      <div className="dv-orbit__ring" aria-hidden="true">
        {chips.map((label, i) => (
          <div
            className={`dv-orbit__chip${i % 2 === 1 ? ' dv-orbit__chip--k' : ''}`}
            style={{ '--a': `${Math.round(i * angle)}deg` } as CSSProperties}
            key={label}
          >
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="dv-photo">
        <Image
          src="/assets/img/developer.jpeg"
          alt={alt}
          width={960}
          height={960}
          priority
          quality={75}
          sizes="(max-width: 768px) 280px, 360px"
        />
      </div>
    </div>
  );
}
