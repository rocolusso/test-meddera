import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return(

<>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no"/>
    <meta name="google-site-verification" content="x67c6nZvPdaM3HEHmGLvhDV1fECKj_vIgTav6HAHQW0"/>
    <link rel="icon" href="assets/img/favicon/favicon.ico" sizes="any"/>
  </Head>

  <GoogleAnalytics/>
  <GoogleTagManager/>


  <Component {...pageProps} />
  <Analytics/>

</>
  );
}

