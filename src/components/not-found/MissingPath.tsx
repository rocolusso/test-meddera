'use client';

import { useLocationPath } from './useLocationPath';

interface Props {
  fallback: string;
  before: string;
  after: string;
}

/**
 * The address the visitor asked for. The page is rendered statically (proxy.ts rewrites to it), so the path is
 * read on the client (see useLocationPath); until then (and without JS) the generic text is shown.
 */
export default function MissingPath({ fallback, before, after }: Props) {
  const raw = useLocationPath();
  const path = raw ? raw.slice(0, 120) : null;

  if (!path || path === '/' || path.endsWith('/404-page')) return <>{fallback}</>;

  return (
    <>
      {before}{' '}
      <code className="rounded-[3px] bg-white/10 px-1.5 py-0.5 font-mono text-[12px] text-white [word-break:break-all] sm:text-[13px]">
        {path}
      </code>{' '}
      {after}
    </>
  );
}
