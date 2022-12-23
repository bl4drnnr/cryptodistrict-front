import { Header } from "@components/Header/Header.component";
import { ThemeProvider } from "styled-components";
import darkTheme from "@styles/themes/Dark.theme";
import lightTheme from "@styles/themes/Light.theme";
import useDarkMode from "@hooks/useDarkMode";
import { Container, Wrapper } from "@styles/layouts/Default.style";
import { Footer } from "@components/Footer/Footer.component";
import React from "react";


const DefaultLayout = ({ children }: any): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
