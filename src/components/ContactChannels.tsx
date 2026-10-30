import React from 'react';
import { FaFacebookF, FaInstagram, FaTelegram, FaViber } from 'react-icons/fa6';

import {
  CONTACT_CHANNELS,
  CONTACT_GROUP_TITLES,
  contactChannelSource,
  type ContactChannel,
  type ContactChannelGroup,
  type ContactChannelKey,
} from '@/lib/social-links';

const ICONS: Record<ContactChannelKey, React.ComponentType<{ className?: string }>> = {
  telegram: FaTelegram,
  viber: FaViber,
  instagram_clinic: FaInstagram,
  instagram_doctor: FaInstagram,
  facebook: FaFacebookF,
};

const GROUPS: readonly ContactChannelGroup[] = ['messenger', 'social'];

type Props = {
  locale: 'ru' | 'ro';
  /** 'footer': one strip under the columns of the footer. 'form': tiles under the phone button of a contact form. */
  variant: 'footer' | 'form';
};

function LinkAttrs(channel: ContactChannel, variant: Props['variant']) {
  return {
    href: channel.href,
    ...(channel.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    'data-cta-event': channel.event,
    'data-cta-source': contactChannelSource(variant, channel.key),
    'data-cta-label': channel.key,
  };
}

const titleBase = 'alt-font text-[11px] font-semibold uppercase leading-4 tracking-[1px]';

/**
 * Messengers and social profiles. No state and no hooks, so it renders on the server in the footer and inside
 * the client contact forms alike. Clicks are counted by TelClickTracker (data-cta-* attributes).
 */
export default function ContactChannels({ locale, variant }: Props) {
  const isFooter = variant === 'footer';

  return (
    <div
      className={isFooter ? 'flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-x-[60px] sm:gap-y-8' : 'w-full border-t border-border pt-1'}
      data-contact-channels={variant}
    >
      {GROUPS.map((group) => {
        const items = CONTACT_CHANNELS.filter((c) => c.group === group);
        return (
          <div key={group} className={isFooter ? 'min-w-0' : undefined}>
            <p className={`${titleBase} ${isFooter ? 'mb-4 text-[#939393]' : 'mb-2.5 mt-5 text-muted-foreground'}`}>
              {CONTACT_GROUP_TITLES[group][locale]}
            </p>
            <ul
              className={
                isFooter
                  ? 'flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-[34px]'
                  : 'grid grid-cols-2 gap-2.5'
              }
            >
              {items.map((channel) => {
                const Icon = ICONS[channel.key];
                return (
                  <li
                    key={channel.key}
                    className={isFooter ? undefined : 'min-w-0 [&:last-child:nth-child(odd)]:col-span-2'}
                  >
                    {isFooter ? (
                      <a
                        {...LinkAttrs(channel, variant)}
                        className="group flex items-center gap-3.5 text-[#b7b7b7] transition-colors hover:text-white"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-deep-pink text-white" aria-hidden>
                          <Icon className="size-[15px]" />
                        </span>
                        <span className="text-[13px] leading-[22px]">{channel.label[locale]}</span>
                      </a>
                    ) : (
                      <a
                        {...LinkAttrs(channel, variant)}
                        className="flex h-full min-w-0 items-center gap-2.5 border border-border bg-background px-3 py-2 text-[13px] font-semibold leading-[18px] text-pofo-heading transition-colors hover:border-deep-pink hover:text-deep-pink dark:bg-white/5"
                      >
                        <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-deep-pink text-white" aria-hidden>
                          <Icon className="size-[15px]" />
                        </span>
                        <span className="min-w-0">{channel.label[locale]}</span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
