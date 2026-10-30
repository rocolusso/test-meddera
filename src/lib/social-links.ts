/**
 * Messengers and social profiles of the clinic, shown in the footer and in the contact forms
 * (see components/ContactChannels.tsx). One list, so the addresses never differ between the two places.
 *
 * Telegram and Viber open the chat with the clinic phone number. Telegram finds the account by number only if
 * the number is registered and its privacy setting allows search by phone.
 *
 * Pure data on purpose: the clicks are counted by TelClickTracker through the data-cta-* attributes, with the
 * event names below ('messenger_click' and 'social_click').
 */

export const CONTACT_PHONE_DIGITS = '37368550030';

export type ContactChannelKey = 'telegram' | 'viber' | 'instagram_clinic' | 'instagram_doctor' | 'facebook';
export type ContactChannelGroup = 'messenger' | 'social';
export type ContactChannelEvent = 'messenger_click' | 'social_click';
/** Where the link is shown: the cta_source of the GA4 event is `<place>_<key>`. */
export type ContactChannelPlace = 'footer' | 'form';

export type ContactChannel = {
  key: ContactChannelKey;
  group: ContactChannelGroup;
  href: string;
  /** Opens in a new tab (https links). Viber is an app link and stays in the same tab. */
  newTab: boolean;
  event: ContactChannelEvent;
  label: { ru: string; ro: string };
};

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    key: 'telegram',
    group: 'messenger',
    href: `https://t.me/+${CONTACT_PHONE_DIGITS}`,
    newTab: true,
    event: 'messenger_click',
    label: { ru: 'Telegram', ro: 'Telegram' },
  },
  {
    key: 'viber',
    group: 'messenger',
    href: `viber://chat?number=%2B${CONTACT_PHONE_DIGITS}`,
    newTab: false,
    event: 'messenger_click',
    label: { ru: 'Viber', ro: 'Viber' },
  },
  {
    key: 'instagram_clinic',
    group: 'social',
    href: 'https://www.instagram.com/meddera.md/',
    newTab: true,
    event: 'social_click',
    label: { ru: 'Instagram клиники', ro: 'Instagram clinică' },
  },
  {
    key: 'instagram_doctor',
    group: 'social',
    href: 'https://www.instagram.com/ecaterina_dermatolog.balti/',
    newTab: true,
    event: 'social_click',
    label: { ru: 'Instagram врача', ro: 'Instagram medic' },
  },
  {
    key: 'facebook',
    group: 'social',
    href: 'https://www.facebook.com/p/Meddera-Beauty-Balti-61572519807548/',
    newTab: true,
    event: 'social_click',
    label: { ru: 'Facebook клиники', ro: 'Facebook clinică' },
  },
];

export const CONTACT_GROUP_TITLES: Record<ContactChannelGroup, { ru: string; ro: string }> = {
  messenger: { ru: 'Написать нам', ro: 'Scrieți-ne' },
  social: { ru: 'Мы в соцсетях', ro: 'Rețele sociale' },
};

export function contactChannelSource(place: ContactChannelPlace, key: ContactChannelKey): string {
  return `${place}_${key}`;
}
