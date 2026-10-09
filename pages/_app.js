import Script from 'next/script';

import Layout from '@/components/Layout';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-RP8MK9M9VR"/>
      <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RP8MK9M9VR');
        `,
        }}
    />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
