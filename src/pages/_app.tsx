import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";
import Head from "next/head";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default App;
