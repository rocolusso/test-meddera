import ReviewsPage, { reviewsMetadata } from '@/components/google-reviews/reviews-page';

export const metadata = reviewsMetadata('ro');

export default function Page() {
  return <ReviewsPage locale="ro" />;
}
