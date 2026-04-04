import React from 'react';
import Image, { type StaticImageData } from 'next/image';

import HeaderNew from '@/components/new-ui/HeaderNew';
import ServicesNew from '@/components/new-ui/ServicesNew';
import FooterNew from '@/components/new-ui/FooterNew';
import ContactsDynamicWrapperRu from '@/components/ContactsDynamicWrapperRu';
import ContactsDynamicWrapperRo from '@/components/ContactsDynamicWrapperRo';
import ContactsLipsDynamicRu from '@/components/ContactsLipsDynamicRu';
import ContactsLipsDynamicRo from '@/components/ContactsLipsDynamicRo';

type Locale = 'ru' | 'ro';

type BaseProps = {
  locale: Locale;
  /** default: show services grid before footer */
  showServices?: boolean;
  /** default / lips — which contact form block to render */
  contactsVariant?: 'default' | 'lips';
};

type SimpleArticleProps = BaseProps & {
  variant?: 'article';
  title: React.ReactNode;
  heroImage: StaticImageData;
  heroImageAlt: string;
  imagePriority?: boolean;
  children: React.ReactNode;
};

type CustomProps = BaseProps & {
  variant: 'custom';
  children: React.ReactNode;
};

export type ContentPageShellProps = SimpleArticleProps | CustomProps;

function ContactsBlock({ locale, variant }: { locale: Locale; variant: 'default' | 'lips' }) {
  if (variant === 'lips') {
    return locale === 'ru' ? <ContactsLipsDynamicRu /> : <ContactsLipsDynamicRo />;
  }
  return locale === 'ru' ? <ContactsDynamicWrapperRu /> : <ContactsDynamicWrapperRo />;
}

/**
 * Shared chrome for service pages and long-form blog posts: header, page background,
 * optional hero, article column, services strip, contacts, footer.
 */
export default function ContentPageShell(props: ContentPageShellProps) {
  const {
    locale,
    showServices = true,
    contactsVariant = 'default',
  } = props;

  const isArticle = props.variant !== 'custom';

  return (
    <>
      <HeaderNew locale={locale} />

      <main className="border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        {isArticle ? (
          <ArticleLayout
            title={props.title}
            heroImage={props.heroImage}
            heroImageAlt={props.heroImageAlt}
            imagePriority={props.imagePriority}
          >
            {props.children}
          </ArticleLayout>
        ) : (
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">{props.children}</div>
        )}
      </main>

      <ContactsBlock locale={locale} variant={contactsVariant} />
      {showServices ? <ServicesNew locale={locale} /> : null}
      <FooterNew locale={locale} />
    </>
  );
}

function ArticleLayout({
  title,
  heroImage,
  heroImageAlt,
  imagePriority = true,
  children,
}: {
  title: React.ReactNode;
  heroImage: StaticImageData;
  heroImageAlt: string;
  imagePriority?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-12 sm:pb-14 md:pt-14 md:pb-16 lg:px-8">
      <header className="mx-auto max-w-3xl text-center md:text-left">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.35rem] md:leading-tight">
          {title}
        </h1>
        <div className="mx-auto mt-5 h-px w-16 bg-border md:mx-0" aria-hidden />
      </header>

      <div className="mt-8 md:mt-10">
        <div className="relative mx-auto aspect-[16/10] max-w-4xl overflow-hidden rounded-2xl bg-muted/40 shadow-lg ring-1 ring-border/50">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 896px"
            priority={imagePriority}
            fetchPriority={imagePriority ? 'high' : undefined}
          />
        </div>
      </div>

      <div
        className={[
          'mx-auto mt-10 max-w-3xl space-y-6 text-base leading-relaxed',
          '[&_p]:text-foreground/90 [&_p]:leading-relaxed',
          '[&_strong]:font-semibold [&_strong]:text-foreground',
          '[&_a]:font-medium [&_a]:text-brand-gold [&_a]:underline-offset-4 hover:[&_a]:underline',
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
}

/** Blog and custom long-form: same outer treatment without hero image. */
export function ContentArticleBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        'mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8',
        'text-base leading-relaxed text-foreground/90',
        '[&_h1]:mb-6 [&_h1]:text-balance [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-foreground sm:[&_h1]:text-4xl',
        '[&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground first:[&_h2]:mt-0',
        '[&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground',
        '[&_h4]:mb-2 [&_h4]:mt-4 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-foreground',
        '[&_p]:leading-relaxed [&_p]:text-muted-foreground',
        '[&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:pl-1 [&_ul]:text-muted-foreground',
        '[&_ol]:mb-4 [&_ol]:space-y-2 [&_ol]:pl-1 [&_ol]:text-muted-foreground',
        '[&_li]:leading-relaxed [&_li]:marker:text-brand-gold',
        '[&_a]:font-medium [&_a]:text-brand-gold [&_a]:underline-offset-4 hover:[&_a]:underline',
        '[&_nav]:mb-6 [&_nav]:text-sm [&_nav]:text-muted-foreground',
        className ?? '',
      ].join(' ')}
    >
      {children}
    </div>
  );
}
