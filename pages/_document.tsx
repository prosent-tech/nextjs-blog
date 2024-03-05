import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja" prefix="og: http://ogp.me/ns#">
        <Head>
          <Script
            src="https://platform.twitter.com/widgets.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://www.instagram.com/embed.js"
            strategy="afterInteractive"
          />
          <Script
            src="https://cdn.iframe.ly/embed.js"
            strategy="afterInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
