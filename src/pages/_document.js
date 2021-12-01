import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${
              process.env.NODE_ENV !== 'production'
                ? process.env.NEXT_PUBLIC_RECAPTCHA_LOCAL
                : process.env.NEXT_PUBLIC__RECAPTCHA_PROD
            }`}
          ></script>

          {/* Rewardful */}
          {/* <script src="../lib/rewardful.js"></script>
          <script async src="https://r.wdfl.co/rw.js" data-rewardful="c48474"></script> */}

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            // eslint-disable-next-line jam3/no-sanitizer-with-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
            // Google Ads Config
            gtag('config', 'AW-778223603');
            `
            }}
          />

          {/* ConvertKit */}
          <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
        {/* QUOTE MEDIA */}
        <script
          id="qmod"
          type="application/javascript"
          src="https://qmod.quotemedia.com/js/qmodLoader.js"
          data-qmod-wmid={process.env.QMOD_WMID}
        />
        <script id="qmodiiLoader" src="https://qmod.quotemedia.com/static/qmodii/loader.js"></script>
      </Html>
    );
  }
}

export default MyDocument;
