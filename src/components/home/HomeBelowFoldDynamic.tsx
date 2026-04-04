import dynamic from 'next/dynamic';

function BelowFoldFallback({ className }: { className?: string }) {
  return <div className={className ?? 'min-h-[12rem] w-full'} aria-hidden />;
}

/** Below-the-fold homepage sections — separate chunks to trim initial JS graph / improve streaming. */
export const DynamicHomeSeoContentRu = dynamic(
  () => import('@/components/new-ui/HomeSeoContentRu'),
  { loading: () => <BelowFoldFallback className="min-h-[14rem] w-full" /> },
);

export const DynamicHomeSeoContentRo = dynamic(
  () => import('@/components/new-ui/HomeSeoContentRo'),
  { loading: () => <BelowFoldFallback className="min-h-[14rem] w-full" /> },
);

export const DynamicAboutNew = dynamic(() => import('@/components/new-ui/AboutNew'), {
  loading: () => <BelowFoldFallback className="min-h-[20rem] w-full" />,
});

export const DynamicServicesNew = dynamic(() => import('@/components/new-ui/ServicesNew'), {
  loading: () => <BelowFoldFallback className="min-h-[28rem] w-full" />,
});

export const DynamicFooterNew = dynamic(() => import('@/components/new-ui/FooterNew'), {
  loading: () => <BelowFoldFallback className="min-h-[16rem] w-full" />,
});
