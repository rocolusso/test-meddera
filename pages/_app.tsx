import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return(

<>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no"/>
    <Script
        strategy={'afterInteractive'}
        src="https://www.google.com/recaptcha/enterprise.js?render=6LdOX5QqAAAAALaHFmLKGfZQLPI6RpuX1bU10r9b">

    </Script>

    <Script>
      {`
      
       function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6LdOX5QqAAAAALaHFmLKGfZQLPI6RpuX1bU10r9b', {action: 'LOGIN'});
    });
  }
      
      
      `}

    </Script>



  </Head>

  <GoogleAnalytics/>
  <GoogleTagManager/>


  <Component {...pageProps} />

</>
  );
}
