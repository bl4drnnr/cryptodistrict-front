import React from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';

import GlobalLayout from '@layouts/Global.layout';
import { Container, Side, LoginHeader, LoginHeaderButton, LoginHeaderTitle } from '@styles/Credentials.style';


interface CredentialsLayoutProps {
  leftSide: React.ReactElement | React.ReactElement[];
  rightSide: React.ReactElement | React.ReactElement[];
  headerLink: React.ReactElement | React.ReactElement[];
  leftDarkSide?: boolean;
  rightDarkSide?: boolean;
  mirroredHeader?: boolean;
  loading?: boolean;
  locale: string;
}

const CredentialsLayout = ({
  leftSide,
  rightSide,
  headerLink,
  locale,
  leftDarkSide = false,
  rightDarkSide = false,
  mirroredHeader = false,
  loading = false
}: CredentialsLayoutProps): React.ReactElement => {
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <GlobalLayout loading={loading}>
      <Container>

        <LoginHeader>
          {mirroredHeader ? (
            <>
              <LoginHeaderButton>
                {headerLink}
              </LoginHeaderButton>
              <LoginHeaderTitle
                onClick={() => handleRedirect('/')}
              >Cryptodistrict</LoginHeaderTitle>
            </>
          ): (
            <>
              <LoginHeaderTitle
                onClick={() => handleRedirect('/')}
              >Cryptodistrict</LoginHeaderTitle>
              <LoginHeaderButton>
                {headerLink}
              </LoginHeaderButton>
            </>
          )}
        </LoginHeader>

        <Side className={classNames({ lightSide: leftDarkSide })}>
          {leftSide}
        </Side>
        <Side className={classNames({ lightSide: rightDarkSide })}>
          {rightSide}
        </Side>

      </Container>
    </GlobalLayout>
  );
};

export default CredentialsLayout;
