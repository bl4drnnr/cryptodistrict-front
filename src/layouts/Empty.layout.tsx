import React from "react";

import { ThemeProvider } from "styled-components";

import darkTheme from "@styles/themes/Dark.theme";
import lightTheme from "@styles/themes/Light.theme";
import useDarkMode from "@hooks/useDarkMode";

interface EmptyLayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const EmptyLayout = ({ children }: EmptyLayoutProps): React.ReactElement => {
  const [theme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
)
}

export default EmptyLayout;
