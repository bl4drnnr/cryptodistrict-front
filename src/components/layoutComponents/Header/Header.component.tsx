import React, { useState } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { ChangeLanguage } from '@components/ChangeLanguage/ChangeLanguage.component';
import { HeaderProps } from '@components/Header/Header.interace';
import { Input } from '@components/Input/Input.component';
import { ThemeToggler } from '@components/ThemeToggler/ThemeToggler.component';
import { theme } from '@store/global/global.state';
import {
  Container,
  Box,
  Buttons,
  Links,
  Link,
  Button,
  Logo,
  NavigationButtons,
  SearchBarWrapper,
  SearchBarBox
} from '@styles/Header.style';

export const Header = ({ locale }: HeaderProps) => {
  const router = useRouter();
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const [searchModal, setSearchModal] = useState(false);

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
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
              <Link onClick={() => handleRedirect('/market')}>Markets</Link>
              <Link onClick={() => handleRedirect('/contact')}>Contact</Link>
            </Links>
          </NavigationButtons>
          <SearchBarWrapper onClick={() => setSearchModal(true)}>
            <SearchBarBox>
              <Input value={''} placeholder={''} innerPlaceholder={'Search items'} onChange={() => {}}/>
            </SearchBarBox>
          </SearchBarWrapper>
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
            <ChangeLanguage
              path={router.asPath}
              defaultLanguage={locale}
            />
          </Buttons>
        </Box>
      </Container>
    </>
  );
};
