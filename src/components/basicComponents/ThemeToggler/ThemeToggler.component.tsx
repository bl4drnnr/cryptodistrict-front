import React from 'react';
import Image from 'next/image';
import { ThemeTogglerProps } from "@components/ThemeToggler/ThemeToggler.interface";
import { Toggler } from "@styles/ThemeToggler.style";

export const ThemeToggler = ({ theme, onClick }: ThemeTogglerProps) => {
  return (
    <Toggler onClick={onClick}>
      {theme === 'dark' ? (
        <><Image  src={'/sun.svg'} alt={'Sun'} width={30} height={30}/></>
      ) : (
        <><Image src={'/moon.svg'} alt={'Moon'} width={30} height={30}/></>
      )}
    </Toggler>
  );
};

