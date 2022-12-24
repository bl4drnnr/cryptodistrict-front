import React from "react";

import { ThemeProvider } from "styled-components";

import { DarkTheme } from "@styles/Dark.theme";
import { LightTheme } from "@styles/Light.theme";
import useDarkMode from "@hooks/useDarkMode";
import { Container, Side, LoginHeader, LoginHeaderButton, LoginHeaderTitle } from "@styles/Credentials.style";
import { useRouter } from "next/router";
import classNames from "classnames";

interface CredentialsLayoutProps {
  leftSide: React.ReactElement | React.ReactElement[];
  rightSide: React.ReactElement | React.ReactElement[];
  headerLink: React.ReactElement | React.ReactElement[];
  leftDarkSide?: boolean;
  rightDarkSide?: boolean;
  mirroredHeader?: boolean;
}

const CredentialsLayout = ({
  leftSide,
  rightSide,
  headerLink,
  leftDarkSide = false,
  rightDarkSide = false,
  mirroredHeader = false
}: CredentialsLayoutProps): React.ReactElement => {
  const router = useRouter()
  const [theme] = useDarkMode();

  const handleRedirect = async (path: string) => {
    await router.push(path);
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Container>

        <LoginHeader>
          {mirroredHeader ? (
            <>
              <LoginHeaderButton>
                {headerLink}
              </LoginHeaderButton>
              <LoginHeaderTitle
                onClick={() => handleRedirect('/')}
              >Cryptodistrict</LoginHeaderTitle>
            </>
          ): (
            <>
              <LoginHeaderTitle
                onClick={() => handleRedirect('/')}
              >Cryptodistrict</LoginHeaderTitle>
              <LoginHeaderButton>
                {headerLink}
              </LoginHeaderButton>
            </>
          )}
        </LoginHeader>

        <Side className={classNames({ lightSide: leftDarkSide })}>
          {leftSide}
        </Side>
        <Side className={classNames({ lightSide: rightDarkSide })}>
          {rightSide}
        </Side>

      </Container>
    </ThemeProvider>
  )
}

export default CredentialsLayout;
