import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Loader } from '@components/Loader/Loader.component';
import { NotificationMessage } from '@components/NotificationMessage/NotificationMessage.component';
import useDarkMode from '@hooks/useDarkMode.hook';
import { DarkTheme } from '@styles/Dark.theme';
import { LightTheme } from '@styles/Light.theme';

interface GlobalLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  loading?: boolean;
}

const GlobalLayout = ({ children, loading = false }: GlobalLayoutProps) => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Loader loading={loading}/>
      <NotificationMessage/>
      {children}
    </ThemeProvider>
  );
};

export default GlobalLayout;
