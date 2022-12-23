import { useMemo } from 'react';

import { useRecoilState } from 'recoil';

import { theme as storeTheme } from '@store/global/global.state';
import darkTheme from '@styles/themes/Dark.theme';
import lightTheme from '@styles/themes/Light.theme';

const useDarkMode = () => {
  const [theme, setTheme] = useRecoilState(storeTheme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeMode = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme]);

  return [theme, toggleTheme, themeMode] as const;
};

export default useDarkMode;
