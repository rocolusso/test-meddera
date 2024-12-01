import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function Document() {
  return (
    <Html lang="en">
        <Head/>
        <GoogleAnalytics/>
        <body className="antialiased">
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
