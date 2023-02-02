import React from 'react';

import { Footer } from '@components/Footer/Footer.component';
import { Header } from '@components/Header/Header.component';
import GlobalLayout from '@layouts/Global.layout';
import {ContentWrapper, Wrapper} from '@styles/Default.style';


interface DefaultLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  locale: string;
  loading?: boolean;
  translate: any;
}

const DefaultLayout = ({ children, locale, translate, loading = false }: DefaultLayoutProps) => {
  return (
    <GlobalLayout loading={loading}>
      <Wrapper>
        <ContentWrapper>
          <Header locale={locale} translate={translate} />
          <main>
            {children}
          </main>
          <Footer locale={locale} translate={translate} />
        </ContentWrapper>
      </Wrapper>
    </GlobalLayout>
  );
};

export default DefaultLayout;
