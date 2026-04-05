import { Ratelimit } from '@upstash/ratelimit';

import { getRedisClient } from '@/lib/upstash-redis';

let tokenLimiter: Ratelimit | null | undefined;
let postLimiter: Ratelimit | null | undefined;

export function getFormTokenRatelimit(): Ratelimit | null {
  if (tokenLimiter !== undefined) {
    return tokenLimiter;
  }
  const r = getRedisClient();
  if (!r) {
    tokenLimiter = null;
    return null;
  }
  tokenLimiter = new Ratelimit({
    redis: r,
    limiter: Ratelimit.slidingWindow(30, '1 m'),
    prefix: 'ratelimit:form-token',
  });
  return tokenLimiter;
}

export function getFormPostRatelimit(): Ratelimit | null {
  if (postLimiter !== undefined) {
    return postLimiter;
  }
  const r = getRedisClient();
  if (!r) {
    postLimiter = null;
    return null;
  }
  postLimiter = new Ratelimit({
    redis: r,
    limiter: Ratelimit.slidingWindow(10, '1 m'),
    prefix: 'ratelimit:form-post',
  });
  return postLimiter;
}
