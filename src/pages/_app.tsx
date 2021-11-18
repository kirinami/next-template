import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/_globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
