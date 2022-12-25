import React from "react";

import { ThemeProvider } from "styled-components";

import { DarkTheme } from "@styles/Dark.theme";
import { LightTheme } from "@styles/Light.theme";
import { Loader } from "@components/Loader/Loader.component";
import useDarkMode from "@hooks/useDarkMode.hook";
import Head from "next/head";

interface EmptyLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  pageTitle: string;
  loading?: boolean;
}

const EmptyLayout = ({ children, pageTitle, loading = false }: EmptyLayoutProps): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Head>
        <title>Cryptodistrict | {pageTitle}</title>
      </Head>
      <Loader loading={loading} />
      {children}
    </ThemeProvider>
)
}

export default EmptyLayout;
