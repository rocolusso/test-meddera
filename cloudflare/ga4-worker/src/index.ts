/**
 * Cloudflare Worker: server-side GA4 Measurement Protocol relay.
 *
 * Receives events from the site's client-side ga4-worker-client.ts and
 * forwards them to GA4 Measurement Protocol, so the browser no longer needs
 * to load gtag.js to record them. See PLAN-GA4W-01 for the full design.
 *
 * Route (see wrangler.toml): meddera.md/api/ga4-collect
 */

export interface Env {
  /** GA4 Measurement Protocol API secret. Set via: wrangler secret put GA4_API_SECRET */
  GA4_API_SECRET: string;
  /** GA4 stream measurement id, e.g. "G-V98H1SG9KW". Non-secret, set in wrangler.toml [vars]. */
  GA4_MEASUREMENT_ID: string;
  /** Origin allowed to call this Worker, e.g. "https://meddera.md". */
  ALLOWED_ORIGIN: string;
}

type IncomingEvent = {
  name?: unknown;
  params?: Record<string, unknown>;
};

type CollectPayload = {
  client_id?: unknown;
  session_id?: unknown;
  events?: IncomingEvent[];
};

const MAX_EVENTS_PER_REQUEST = 10;
const MAX_BODY_BYTES = 8192;
const COLLECT_PATH = '/api/ga4-collect';

function corsHeaders(allowedOrigin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function sanitizeParams(params: IncomingEvent['params']): Record<string, string | number | boolean> {
  const out: Record<string, string | number | boolean> = {};
  if (!params || typeof params !== 'object') return out;

  for (const [key, value] of Object.entries(params)) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      const safeKey = key.slice(0, 40);
      out[safeKey] = typeof value === 'string' ? value.slice(0, 100) : value;
    }
  }

  return out;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const allowedOrigin = env.ALLOWED_ORIGIN;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(allowedOrigin) });
    }

    if (request.method !== 'POST' || url.pathname !== COLLECT_PATH) {
      return new Response('Not found', { status: 404 });
    }

    const origin = request.headers.get('Origin') || '';
    const referer = request.headers.get('Referer') || '';
    const isAllowed = origin === allowedOrigin || referer.startsWith(allowedOrigin);
    if (!isAllowed) {
      return new Response('Forbidden', { status: 403, headers: corsHeaders(allowedOrigin) });
    }

    const contentLength = Number(request.headers.get('Content-Length') || '0');
    if (contentLength > MAX_BODY_BYTES) {
      return new Response('Payload too large', { status: 413, headers: corsHeaders(allowedOrigin) });
    }

    let payload: CollectPayload;
    try {
      payload = await request.json();
    } catch {
      return new Response('Bad request', { status: 400, headers: corsHeaders(allowedOrigin) });
    }

    const clientId = typeof payload.client_id === 'string' ? payload.client_id : '';
    const sessionId = typeof payload.session_id === 'string' ? payload.session_id : '';

    if (!clientId || !Array.isArray(payload.events) || payload.events.length === 0) {
      return new Response('Bad request', { status: 400, headers: corsHeaders(allowedOrigin) });
    }

    const events = payload.events
      .slice(0, MAX_EVENTS_PER_REQUEST)
      .map((event) => ({
        name: typeof event.name === 'string' ? event.name.slice(0, 40) : '',
        params: {
          ...sanitizeParams(event.params),
          ...(sessionId ? { session_id: sessionId } : {}),
          engagement_time_msec: 1,
        },
      }))
      .filter((event) => event.name.length > 0);

    if (events.length === 0) {
      return new Response('Bad request', { status: 400, headers: corsHeaders(allowedOrigin) });
    }

    const userAgent = request.headers.get('User-Agent') || '';
    const mpUrl =
      `https://www.google-analytics.com/mp/collect` +
      `?measurement_id=${encodeURIComponent(env.GA4_MEASUREMENT_ID)}` +
      `&api_secret=${encodeURIComponent(env.GA4_API_SECRET)}`;

    const forward = fetch(mpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': userAgent,
      },
      body: JSON.stringify({ client_id: clientId, events }),
    }).catch(() => {});

    // Response to the visitor doesn't wait on Google — but the Worker must
    // stay alive until the forward completes, or Cloudflare may cancel it
    // right after the 204 is returned.
    ctx.waitUntil(forward);

    return new Response(null, { status: 204, headers: corsHeaders(allowedOrigin) });
  },
};
