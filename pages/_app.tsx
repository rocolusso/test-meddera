import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  return(

<>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />
  </Head>

  <GoogleAnalytics/>

  <Component {...pageProps} />

  </>
  );
}
