import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
    <Head>
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
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
