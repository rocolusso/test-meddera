/**
 * Site search switch, interface side. Search works only when both flags are the string "true";
 * unset or any other value keeps it off.
 *
 * NEXT_PUBLIC_SEARCH_ENABLED  header button and burger-menu row (inlined at build time, so a change needs a redeploy)
 * SEARCH_ENABLED              /api/search and the result pages, see ./server-config.ts
 */
// eslint-disable-next-line import/prefer-default-export
export const SEARCH_UI_ENABLED = process.env.NEXT_PUBLIC_SEARCH_ENABLED === 'true';
