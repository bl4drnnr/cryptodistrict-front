import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { useCheckTokenService } from '@services/check-token/check-token.service';
import { useRefreshTokenService } from '@services/refresh-token/refresh-token.service';
import {
  AccountContainer,
  Container, UserAssetsBox,
  UserAssetsContainer, UserBioBox,
  UserInfoContainer,
  UserProfilePicture,
  Wrapper
} from '@styles/account.style';

interface AccountProps {
  locale: string;
}

const Account = ({ locale }: AccountProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const { loading: l1, checkToken } = useCheckTokenService();
  const { loading: l2, refreshToken } = useRefreshTokenService();

  React.useEffect(() => {
    const token = sessionStorage.getItem('_at');

    // if (!token) handleRedirect('/').then();
    // else {
    //   checkUser(token).then((res) => {
    //     //
    //   });
    // }
  }, []);

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  const checkUser = async (token: string) => {
    //
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:account.title')}</title>
      </Head>
      <DefaultLayout locale={locale} translate={t} loading={l1 || l2}>
        <Container>
          <Wrapper>
            <AccountContainer>
              <UserInfoContainer>
                <UserProfilePicture></UserProfilePicture>
              </UserInfoContainer>

              <UserAssetsContainer>
                <UserBioBox></UserBioBox>
                <UserAssetsBox>
                </UserAssetsBox>
              </UserAssetsContainer>
            </AccountContainer>
          </Wrapper>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors', 'placeholders']);
export { getStaticPaths, getStaticProps };

export default Account;
