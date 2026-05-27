import { headers } from 'next/headers';

export async function getRequestContext() {
  const h = await headers();

  return {
    ip:
            h.get('cf-connecting-ip') ||
            h.get('x-forwarded-for'),

    country:
            h.get('cf-ipcountry') ||
            h.get('x-vercel-ip-country'),

    city:
            h.get('cf-ipcity') ||
            h.get('x-vercel-ip-city'),

    region:
            h.get('cf-region') ||
            h.get('x-vercel-ip-country-region'),

    userAgent: h.get('user-agent'),

    referer: h.get('referer'),
  };
}
