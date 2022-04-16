import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

import { wrapper } from '@/store';

import '@/styles/_globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
};

export default wrapper.withRedux(appWithTranslation(MyApp));
