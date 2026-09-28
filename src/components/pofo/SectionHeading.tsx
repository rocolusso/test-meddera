import React from 'react';

import { cn } from '@/lib/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'p';

type Props = {
  title: React.ReactNode;
  eyebrow?: React.ReactNode;
  as?: HeadingTag;
  align?: 'center' | 'left';
  separator?: boolean;
  className?: string;
  titleClassName?: string;
  id?: string;
};

/**
 * Pofo section heading: small pink uppercase caption → Montserrat 600 title → optional pink rule.
 */
export default function SectionHeading({
  title,
  eyebrow,
  as: Tag = 'h2',
  align = 'center',
  separator = false,
  className,
  titleClassName,
  id,
}: Props) {
  const centered = align === 'center';
  return (
    <div className={cn(centered ? 'text-center' : 'text-center lg:text-left', className)}>
      {eyebrow ? <div className="eyebrow mb-2.5">{eyebrow}</div> : null}
      <Tag
        id={id}
        className={cn(
          'alt-font text-[24px] font-semibold leading-[30px] text-pofo-heading md:text-[32px] md:leading-[40px]',
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {separator ? (
        <span
          aria-hidden
          className={cn('mt-5 block h-px w-[100px] bg-deep-pink', centered ? 'mx-auto' : 'mx-auto lg:mx-0')}
        />
      ) : null}
    </div>
  );
}
