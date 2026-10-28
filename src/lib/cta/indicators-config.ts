/**
 * Switch for the clinic-hours logic of the call-to-action buttons (the dot on the call buttons,
 * the call button's pulse and shake, the glow of the "Записаться онлайн" button).
 *
 * NEXT_PUBLIC_INDICATORS_CTA_LOGIC_ENABLED, inlined at build time, so a change needs a redeploy:
 * - "true": the dot follows the reception hours (green during them, red outside them and on days off),
 *   the call button stops pulsing and shaking while the clinic is closed;
 * - unset or any other value: the dot is always green and the animation always runs.
 */
// eslint-disable-next-line import/prefer-default-export
export const INDICATORS_CTA_LOGIC_ENABLED = process.env.NEXT_PUBLIC_INDICATORS_CTA_LOGIC_ENABLED === 'true';
