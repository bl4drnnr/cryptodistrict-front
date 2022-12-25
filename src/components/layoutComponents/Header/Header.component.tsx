import {
  Container,
  Box,
  Buttons,
  Links,
  Link,
  Button,
  Logo,
  NavigationButtons
} from '@styles/Header.style'
import { useRouter } from "next/router";
import { HeaderProps } from "@components/Header/Header.interace";
import { ThemeToggler } from "@components/ThemeToggler/ThemeToggler.component";
import { theme } from "@store/global/global.state";
import { useRecoilState } from "recoil";
import React from "react";
import classNames from "classnames";

export const Header = ({}: HeaderProps) => {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  const setTheme = (theme: 'dark' | 'light') => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    if (currentTheme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  React.useEffect(() => {
    const theme = localStorage.getItem('theme') as 'dark' | 'light';
    if (['dark', 'light'].includes(theme)) setTheme(theme);
  }, []);

  return (
    <>
      <Container>
        <Box>
          <NavigationButtons>
            <Logo onClick={() => handleRedirect('/')}>Cryptodistrict</Logo>
            <Links>
              <Link onClick={() => handleRedirect('/about')}>About</Link>
            </Links>
          </NavigationButtons>
          <Buttons>
            <Button
              className={classNames({ logIn: true })}
              onClick={() => handleRedirect('/signin')}
            >
              Sign In
            </Button>
            <Button
              className={classNames({ signup: true })}
              onClick={() => handleRedirect('/signup')}
            >
              Sign Up
            </Button>
            <ThemeToggler
              theme={currentTheme}
              onClick={() => toggleTheme()}
            />
          </Buttons>
        </Box>
      </Container>
    </>
  )
}
