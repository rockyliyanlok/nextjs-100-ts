import Document, { Head, Html, Main, NextScript } from 'next/document'

import { generateCsp } from '../utils'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Build a PWA to achieve 100% in Google Lighthouse and Next.js Analytics"
          />
          <meta name="theme-color" content="#333333" />
          <meta name="referrer" content={'strict-origin'} />
          <meta
            httpEquiv="Content-Security-Policy"
            content={generateCsp(NextScript.getInlineScriptSource(this.props))}
          />

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>

          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
