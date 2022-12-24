import React from "react";

import { ThemeProvider } from "styled-components";

import { DarkTheme } from "@styles/Dark.theme";
import { LightTheme } from "@styles/Light.theme";
import useDarkMode from "@hooks/useDarkMode";

interface EmptyLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const EmptyLayout = ({ children }: EmptyLayoutProps): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      {children}
    </ThemeProvider>
)
}

export default EmptyLayout;
