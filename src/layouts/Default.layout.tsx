import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Footer } from '@components/Footer/Footer.component';
import { Header } from '@components/Header/Header.component';
import { Loader } from '@components/Loader/Loader.component';
import useDarkMode from '@hooks/useDarkMode.hook';
import { DarkTheme } from '@styles/Dark.theme';
import { Wrapper } from '@styles/Default.style';
import { LightTheme } from '@styles/Light.theme';


interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  locale: string;
  loading?: boolean;
}

const DefaultLayout = ({ children, locale, loading = false }: DefaultLayoutProps) => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Loader loading={loading} />
      <Wrapper>
        <Header locale={locale} />
        {children}
        <Footer/>
      </Wrapper>
    </ThemeProvider>
  );
};

export default DefaultLayout;
