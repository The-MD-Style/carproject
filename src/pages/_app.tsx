import type { AppProps } from 'next/app';

import Head from 'next/head';

import MainLayout from 'Layouts/MainLayout/MainLayout';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
