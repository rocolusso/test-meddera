import { FORM_TOKEN_TTL_SEC } from '@/lib/form-token';

/**
 * One-time consume for anti-replay without loading @upstash/redis in API route bundles
 * (avoids webpack + SDK "Super expression" issues on some Next versions).
 */
export async function consumeFormJtiOnce(jti: string): Promise<'ok' | 'replay' | 'unavailable'> {
  const base = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, '');
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!base || !token) {
    return 'unavailable';
  }

  const key = `form:jti:${jti}`;
  const res = await fetch(base, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(['SET', key, '1', 'NX', 'EX', FORM_TOKEN_TTL_SEC]),
  });

  if (!res.ok) {
    return 'unavailable';
  }

  const json = (await res.json()) as { result?: unknown };
  if (json.result === 'OK') {
    return 'ok';
  }
  if (json.result === null) {
    return 'replay';
  }

  return 'unavailable';
}
