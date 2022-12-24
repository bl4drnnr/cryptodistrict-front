import React from "react";

import { Header } from "@components/Header/Header.component";
import { Footer } from "@components/Footer/Footer.component";
import { Loader } from "@components/Loader/Loader.component";

import { Container, Wrapper } from "@styles/Default.style";
import { ThemeProvider } from "styled-components";

import { DarkTheme } from "@styles/Dark.theme";
import { LightTheme } from "@styles/Light.theme";
import useDarkMode from "@hooks/useDarkMode";

interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  loading?: boolean;
}

const DefaultLayout = ({ children, loading = false }: DefaultLayoutProps): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Loader loading={loading} />
      <Wrapper>
        <Container>

          <Header/>
          {children}
          <Footer/>

        </Container>
      </Wrapper>
    </ThemeProvider>
  )
}

export default DefaultLayout;
