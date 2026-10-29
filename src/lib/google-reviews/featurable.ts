/**
 * Reviews of the clinic from the Featurable API (widget v2), read on the server and cached for 24 hours.
 * Featurable itself refreshes them from Google about once a day, so a shorter cache would only add requests.
 *
 * Why not just `featurableId` of the library: for v2 it takes the field `text`, which is Google's machine
 * translation (English for our Russian reviews). The original is in `originalText`, so we fetch and map
 * the reviews ourselves and hand the library a ready array.
 *
 * Any failure (network, status, shape, no reviews) returns null: the block is then simply not shown.
 */
import type { ReactGoogleReview } from 'react-google-reviews';

import { getFeaturableWidgetId } from './config';

const apiBase = (): string => (process.env.FEATURABLE_API_BASE || 'https://api.featurable.com').replace(/\/+$/, '');
const REVALIDATE_SECONDS = 86400;
const TIMEOUT_MS = 8000;

export type FeaturableReviews = {
  reviews: ReactGoogleReview[];
  /** Total on Google (can be more than `reviews`: ratings without text are not returned). */
  totalReviewCount: number;
  averageRating: number;
};

type RawReview = {
  id?: unknown;
  author?: { name?: unknown; avatarUrl?: unknown; photoUrl?: unknown } | null;
  text?: unknown;
  originalText?: unknown;
  rating?: { value?: unknown } | null;
  publishedAt?: unknown;
  createdAt?: unknown;
  updatedAt?: unknown;
};

const str = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');

/** Why the block is hidden is written to the build log (and the dev note), never to visitors. */
export type FeaturableResult = { data: FeaturableReviews } | { data: null; reason: string };

export async function getFeaturableReviews(): Promise<FeaturableResult> {
  const id = getFeaturableWidgetId();
  if (!id) return { data: null, reason: 'FEATURABLE_WIDGET_ID is not set' };

  let json: unknown;
  try {
    const res = await fetch(`${apiBase()}/v2/widgets/${encodeURIComponent(id)}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return { data: null, reason: `Featurable API answered ${res.status}` };
    json = await res.json();
  } catch (e) {
    return { data: null, reason: `Featurable API is unreachable (${e instanceof Error ? e.message : 'error'})` };
  }

  const body = json as { success?: unknown; widget?: { reviews?: unknown; gbpLocationSummary?: Record<string, unknown> } };
  if (body?.success !== true || !Array.isArray(body.widget?.reviews)) {
    return { data: null, reason: 'Featurable API returned no widget (wrong FEATURABLE_WIDGET_ID or v1 id?)' };
  }

  const reviews: ReactGoogleReview[] = [];
  for (const r of body.widget.reviews as RawReview[]) {
    // the original text first: `text` is Google's translation into another language
    const comment = str(r.originalText) || str(r.text);
    const stars = Number(r.rating?.value);
    if (!comment || !Number.isFinite(stars) || stars < 1) continue;
    const name = str(r.author?.name);
    // the library shows `updateTime` before `createTime`, but updatedAt of the API is the day Featurable synced the
    // review (the same for all of them), so both are the day the patient published it
    const published = str(r.publishedAt) || str(r.createdAt) || null;
    reviews.push({
      reviewId: str(r.id) || null,
      reviewer: {
        profilePhotoUrl: str(r.author?.photoUrl) || str(r.author?.avatarUrl),
        displayName: name || 'Anonymous',
        isAnonymous: !name,
      },
      starRating: Math.min(5, stars),
      comment,
      createTime: published,
      updateTime: published,
    });
  }
  if (reviews.length === 0) return { data: null, reason: 'Featurable API returned no reviews with text' };

  const summary = body.widget.gbpLocationSummary ?? {};
  const count = Number(summary.reviewsCount);
  const rating = Number(summary.rating);
  const average = reviews.reduce((s, r) => s + r.starRating, 0) / reviews.length;
  return {
    data: {
      reviews,
      // the library throws on a non-integer count or a rating outside 1..5, so both are sanitised
      totalReviewCount: Number.isInteger(count) && count >= reviews.length ? count : reviews.length,
      averageRating: rating >= 1 && rating <= 5 ? rating : Math.round(average * 10) / 10,
    },
  };
}
