import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import {useEffect, useState} from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  useEffect(() => {
   const timer = setTimeout(()=>{
      setIsAnalyticsOpen(true);
    },5000)
    return () => clearTimeout(timer)
  },[])


  return(

<>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no"/>
    <meta name="google-site-verification" content="x67c6nZvPdaM3HEHmGLvhDV1fECKj_vIgTav6HAHQW0"/>
    <link rel="icon" href="assets/img/favicon/favicon.ico" sizes="any"/>
  </Head>

  {isAnalyticsOpen && <>

    <GoogleAnalytics/>
    <GoogleTagManager/>

  </>}


  <Component {...pageProps} />

  {isAnalyticsOpen && (<>

    <Analytics/>
    <SpeedInsights />

  </>)}

</>
  );
}

