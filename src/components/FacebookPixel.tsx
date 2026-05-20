'use client';

import Script from 'next/script';

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

/**
 * Meta base code, wrapped so it never runs twice (Strict Mode / remounts / duplicate tags).
 * If the same Pixel is also fired from GTM, remove one of the two — double `fbevents.js`
 * loads often surface as `__fbeventsModules[...] is not a function` in the console.
 */
const META_PIXEL_BOOTSTRAP = `
(function(){
  if (typeof window === 'undefined') return;
  if (window.__NEXT_META_PIXEL_EMBED_DONE__) return;
  window.__NEXT_META_PIXEL_EMBED_DONE__ = true;
  var alreadyBootstrapped = typeof window.fbq === 'function';

  if (!alreadyBootstrapped) {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '${FACEBOOK_PIXEL_ID}');
  }

  fbq('track', 'PageView');
})();`;

export function FacebookPixelScript() {
  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: META_PIXEL_BOOTSTRAP }}
    />
  );
}

export function FacebookPixelNoScript() {
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}

export const FACEBOOK_PIXEL = {
  id: FACEBOOK_PIXEL_ID,
};
