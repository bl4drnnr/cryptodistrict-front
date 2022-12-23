import { atom } from 'recoil';

const theme = atom<'dark'|'light'>({
  key: 'theme',
  default: 'dark',
});

export {
  theme
};
