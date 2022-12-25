import React from "react";

import { Header } from "@components/Header/Header.component";
import { Footer } from "@components/Footer/Footer.component";
import { Loader } from "@components/Loader/Loader.component";

import { Wrapper } from "@styles/Default.style";
import { ThemeProvider } from "styled-components";

import { DarkTheme } from "@styles/Dark.theme";
import { LightTheme } from "@styles/Light.theme";
import useDarkMode from "@hooks/useDarkMode.hook";
import Head from 'next/head'

interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  pageTitle: string;
  loading?: boolean;
}

const DefaultLayout = ({ children, pageTitle, loading = false }: DefaultLayoutProps): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Head>
        <title>Cryptodistrict | {pageTitle}</title>
      </Head>
      <Loader loading={loading} />
      <Wrapper>
        <Header/>
        {children}
        <Footer/>
      </Wrapper>
    </ThemeProvider>
  )
}

export default DefaultLayout;
