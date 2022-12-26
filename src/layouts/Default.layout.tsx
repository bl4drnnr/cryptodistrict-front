import React from 'react';

import { Footer } from '@components/Footer/Footer.component';
import { Header } from '@components/Header/Header.component';
import GlobalLayout from '@layouts/Global.layout';
import { Wrapper } from '@styles/Default.style';


interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  locale: string;
  loading?: boolean;
}

const DefaultLayout = ({ children, locale, loading = false }: DefaultLayoutProps) => {
  return (
    <GlobalLayout loading={loading}>
      <Wrapper>
        <Header locale={locale} />
        {children}
        <Footer/>
      </Wrapper>
    </GlobalLayout>
  );
};

export default DefaultLayout;
