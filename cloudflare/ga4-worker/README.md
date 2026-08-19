# meddera-ga4-worker

Cloudflare Worker that relays GA4 events (sent by `src/lib/ga4-worker-client.ts`
in the main app) to GA4 Measurement Protocol server-side, so the browser no
longer needs to load `gtag.js` to record them. See PLAN-GA4W-01 in the main
project for the full design/rationale.

This is a separate deployable from the Next.js app — it is not part of
`next build` and is not deployed via Vercel.

## One-time setup

```bash
cd cloudflare/ga4-worker
npm install
npx wrangler login          # authorize wrangler against your Cloudflare account
```

Create a GA4 Measurement Protocol API secret (if you don't have one yet):
GA4 Admin → Data Streams → (your web stream) → Measurement Protocol API
secrets → Create.

Set it as a Worker secret (never commit it, never put it in wrangler.toml):

```bash
npx wrangler secret put GA4_API_SECRET
# paste the secret value when prompted
```

## Local testing

```bash
npm run dev
```

Then from another terminal:

```bash
curl -i -X POST http://localhost:8787/api/ga4-collect \
  -H "Content-Type: application/json" \
  -H "Origin: https://meddera.md" \
  -d '{"client_id":"test-client-1","session_id":"test-session-1","events":[{"name":"phone_click_simple1","params":{"button_name":"phone_click_url","event_label":"click_btn+37368550030"}}]}'
```

Expect a `204 No Content` response. Check GA4 DebugView (with the stream's
debug mode, or by adding `&_dbg=1`/using the `/debug/mp/collect` endpoint
temporarily in `src/index.ts` while testing) to confirm the event lands with
the right params.

## Deploy

```bash
npm run deploy
```

This publishes the Worker and binds the route declared in `wrangler.toml`
(`meddera.md/api/ga4-collect`) — requires the `meddera.md` zone to already be
on this Cloudflare account (it is, since Web Analytics/Rocket Loader are
already configured there).

## After deploying: verify before touching GTM

1. Trigger each of the 6 events + a page load on the live site and confirm
   they arrive in GA4 DebugView with correct params.
2. Only once confirmed: in GTM, pause (don't delete yet) the "GA4-all-pages"
   base tag and the 6 event tags that correspond to the migrated events.
   Keep them paused (not deleted) for a rollback window.
3. Watch GA4 Realtime for a few days to confirm no duplicate events and no
   drop in event volume compared to before.
4. `npx wrangler tail` can be used to watch live requests hitting the Worker
   if anything looks off.

## Rollback

If something's wrong: re-enable the paused tags in GTM (events will be
double-counted temporarily — better than losing data) and disable the route
in the Cloudflare dashboard (Workers & Pages → meddera-ga4-collector →
Triggers) or run `npx wrangler delete` to remove the Worker entirely.
