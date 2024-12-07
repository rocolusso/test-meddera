import React from 'react';
import Script from "next/script";

const GoogleTagManager = () => {
    return (
        <>


            {/*Google Tag Manager*/}
            <>

                <Script strategy="afterInteractive" id="google-tagmanager">
                    {
                        `
                 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTM-KFCP3D5F');
             
             
             function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                         window.location = url;
                  }
                 };
                 gtag('event', 'conversion', {
                     'send_to': 'AW-16800899328/6T1JCLfzrfQZEIDCpcs-',
                       'event_callback': callback
                  });
                   return false;
             }
             
    



             
             

             `
                    }
                </Script>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFCP3D5F"
             height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />
            </>
            {/*End Google Tag Manager*/}






          </>



    );
};

export default GoogleTagManager;