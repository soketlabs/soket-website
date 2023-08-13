import Script from 'next/script';

import Layout from '@/components/Layout';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-V1WQ63R32Y"/>
      <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V1WQ63R32Y');
        `,
        }}
    />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
