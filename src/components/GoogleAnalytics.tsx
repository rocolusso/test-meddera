import React from 'react';
import Script from 'next/script';

function GoogleAnalytics() {
  const gtag = 'G-V98H1SG9KW';
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag}', {
              page_path: window.location.pathname,
              });
              
              gtag('config', 'AW-16800899328');
              
          `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;
