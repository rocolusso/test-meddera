import React from 'react';
import Image, { type StaticImageData } from 'next/image';

import HeaderNew from '@/components/new-ui/HeaderNew';
import PageTitleMini from '@/components/pofo/PageTitleMini';
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

      <main className="bg-background">
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
          <div
            className={[
              'pofo-container section-y',
              /* Pofo typography for hand-written custom pages (e.g. lips landing). */
              '[&_h1]:alt-font [&_h1]:text-pofo-heading [&_h2]:alt-font [&_h2]:text-pofo-heading',
              '[&_.rounded-2xl]:rounded-none [&_.rounded-lg]:rounded-none',
            ].join(' ')}
          >
            {props.children}
          </div>
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
    <>
      <PageTitleMini title={title} />

      <div className="pofo-container section-y !pt-[50px] lg:!pt-[70px]">
        <div className="relative mx-auto aspect-[16/10] max-w-4xl overflow-hidden bg-muted">
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

        <div
          className={[
            'mx-auto mt-10 max-w-3xl space-y-6 text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:mt-[50px]',
            '[&_p]:text-muted-foreground',
            '[&_strong]:font-semibold [&_strong]:text-pofo-heading',
            '[&_a]:font-medium [&_a]:text-accent-text [&_a]:underline-offset-4 hover:[&_a]:underline',
          ].join(' ')}
        >
          {children}
        </div>
      </div>
    </>
  );
}

/**
 * Blog and custom long-form: Pofo blog-post-layout-01 typography without hero image.
 * Element defaults use `:where()` (zero specificity) so explicit classes inside the content win.
 */
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
        'pofo-remap mx-auto max-w-[900px] space-y-6 px-[15px] py-[50px] md:py-[75px] lg:py-[90px]',
        'text-[15px] leading-[26px] text-muted-foreground sm:text-[16px] sm:leading-[28px]',
        '[:where(&)_h1]:alt-font [:where(&)_h1]:mb-6 [:where(&)_h1]:text-balance [:where(&)_h1]:text-[28px] [:where(&)_h1]:font-semibold [:where(&)_h1]:leading-[36px] [:where(&)_h1]:text-pofo-heading md:[:where(&)_h1]:text-[36px] md:[:where(&)_h1]:leading-[44px]',
        '[:where(&)_h2]:alt-font [:where(&)_h2]:mb-4 [:where(&)_h2]:mt-[50px] [:where(&)_h2]:text-[22px] [:where(&)_h2]:font-semibold [:where(&)_h2]:leading-[30px] [:where(&)_h2]:text-pofo-heading [:where(&)_h2:first-child]:mt-0 md:[:where(&)_h2]:text-[24px] md:[:where(&)_h2]:leading-[32px]',
        '[:where(&)_h3]:alt-font [:where(&)_h3]:mb-3 [:where(&)_h3]:mt-8 [:where(&)_h3]:text-[18px] [:where(&)_h3]:font-semibold [:where(&)_h3]:leading-[26px] [:where(&)_h3]:text-pofo-heading',
        '[:where(&)_h4]:alt-font [:where(&)_h4]:mb-2 [:where(&)_h4]:mt-5 [:where(&)_h4]:text-[16px] [:where(&)_h4]:font-semibold [:where(&)_h4]:text-pofo-heading',
        '[:where(&)_p]:leading-[26px] [:where(&)_p]:text-muted-foreground sm:[:where(&)_p]:leading-[28px]',
        '[:where(&)_strong]:font-semibold [:where(&)_strong]:text-pofo-heading',
        /* Pofo list-style-3: pink dash bullets. */
        '[:where(&)_ul]:mb-4 [:where(&)_ul]:list-none [:where(&)_ul]:space-y-2.5 [:where(&)_ul]:pl-0',
        '[:where(&)_ul>li]:relative [:where(&)_ul>li]:pl-[22px] [:where(&)_ul>li]:before:absolute [:where(&)_ul>li]:before:left-0 [:where(&)_ul>li]:before:top-[0.85em] [:where(&)_ul>li]:before:h-px [:where(&)_ul>li]:before:w-2.5 [:where(&)_ul>li]:before:bg-deep-pink',
        "[:where(&)_ul>li]:before:content-['']",
        '[:where(&)_ol]:mb-4 [:where(&)_ol]:list-decimal [:where(&)_ol]:space-y-2.5 [:where(&)_ol]:pl-6 [:where(&)_ol>li]:pl-1 [:where(&)_ol>li]:marker:font-semibold [:where(&)_ol>li]:marker:text-deep-pink',
        '[:where(&)_li]:leading-[26px] sm:[:where(&)_li]:leading-[28px]',
        '[:where(&)_p_a]:font-medium [:where(&)_p_a]:text-accent-text [:where(&)_p_a]:underline-offset-4 [:where(&)_p_a:hover]:underline',
        '[:where(&)_li_a]:font-medium [:where(&)_li_a]:text-pofo-heading [:where(&)_li_a]:underline [:where(&)_li_a]:decoration-deep-pink/50 [:where(&)_li_a]:underline-offset-4 [:where(&)_li_a:hover]:text-deep-pink',
        '[:where(&)_blockquote]:my-10 [:where(&)_blockquote]:border-l-2 [:where(&)_blockquote]:border-deep-pink [:where(&)_blockquote]:py-4 [:where(&)_blockquote]:pl-10 [:where(&)_blockquote]:text-[18px] [:where(&)_blockquote]:font-light [:where(&)_blockquote]:leading-[30px]',
        '[:where(&)_nav]:alt-font [:where(&)_nav]:mb-6 [:where(&)_nav]:text-[12px] [:where(&)_nav]:uppercase [:where(&)_nav]:leading-5 [:where(&)_nav]:tracking-[0.5px] [:where(&)_nav]:text-pofo-medium-gray',
        '[:where(&)_nav_a]:text-inherit [:where(&)_nav_a]:no-underline [:where(&)_nav_a:hover]:text-accent-text',
        className ?? '',
      ].join(' ')}
    >
      {children}
    </div>
  );
}
