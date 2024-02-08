import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/assets/favicon.png?v=1" />
        <meta name="theme-color" content="#1c1917" />
      </Head>

      <body className="antialiased text-white bg-slate-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
