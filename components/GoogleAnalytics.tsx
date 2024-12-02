import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
    const gtag = 'G-V98H1SG9KW'

    // gtag('config', 'AW-16800899328');   (ads conversion TAG)
    return (
        <>
            <Script
                strategy='lazyOnload'
                // src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
            />

            <Script id='' strategy='lazyOnload'>
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




            {/*<Script  strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-V98H1SG9KW"></Script>*/}
            {/*<Script  strategy="afterInteractive">*/}
            {/*    {`*/}
            {/*    */}
            {/*    window.dataLayer = window.dataLayer || [];*/}
            {/*    function gtag(){dataLayer.push(arguments);}*/}
            {/*    gtag('js', new Date());*/}

            {/*    gtag('config', 'G-V98H1SG9KW');*/}
            {/*    */}
            {/*    */}
            {/*    `}*/}
            {/*</Script>*/}
        </>
    );
};

export default GoogleAnalytics;