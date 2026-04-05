import type { RecaptchaScoreStatus } from '@/lib/recaptcha-verify';
import { isLikelyHumanBrowserUserAgent } from '@/lib/suspicious-user-agents';

export type BehaviorMetrics = {
  mousemove: number;
  keydown: number;
  touchstart: number;
  pointerdown: number;
};

const CAP = 50_000;

export type ComputeScoreInput = {
  recaptchaStatus: RecaptchaScoreStatus;
  honeypotNonEmpty: boolean;
  submitTimeMs: number;
  behavior: BehaviorMetrics;
  userAgent: string | null;
};

export function clampBehavior(n: number): number {
  if (!Number.isFinite(n) || n < 0) {
    return 0;
  }
  return Math.min(Math.floor(n), CAP);
}

export function computeContactFormScore(input: ComputeScoreInput): { score: number; reasons: string[] } {
  const reasons: string[] = [];
  let score = 0;

  if (input.honeypotNonEmpty) {
    score -= 100;
    reasons.push('honeypot');
  }

  const { recaptchaStatus } = input;
  if (recaptchaStatus === 'ok') {
    score += 40;
    reasons.push('recaptcha_ok');
  } else if (recaptchaStatus === 'low_score') {
    score += 10;
    reasons.push('recaptcha_low');
  }

  const st = Number.isFinite(input.submitTimeMs) ? input.submitTimeMs : 0;
  if (recaptchaStatus !== 'ok') {
    if (st >= 2000) {
      score += 15;
      reasons.push('fallback_time');
    }
  } else if (st > 2000) {
    score += 10;
    reasons.push('submit_time_ok');
  }

  if (isLikelyHumanBrowserUserAgent(input.userAgent)) {
    score += 10;
    reasons.push('ua_ok');
  }

  const b = input.behavior;
  const interactionSum =
    clampBehavior(b.mousemove) +
    clampBehavior(b.keydown) +
    clampBehavior(b.touchstart) +
    clampBehavior(b.pointerdown);
  if (interactionSum > 5) {
    score += 20;
    reasons.push('behavior');
  }

  return { score, reasons };
}
