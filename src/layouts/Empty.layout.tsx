import React from "react";

import { ThemeProvider } from "styled-components";

import { DarkTheme } from "@styles/Dark.theme";
import { LightTheme } from "@styles/Light.theme";
import { Loader } from "@components/Loader/Loader.component";
import useDarkMode from "@hooks/useDarkMode";

interface EmptyLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  loading?: boolean;
}

const EmptyLayout = ({ children, loading = false }: EmptyLayoutProps): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Loader loading={loading} />
      {children}
    </ThemeProvider>
)
}

export default EmptyLayout;
