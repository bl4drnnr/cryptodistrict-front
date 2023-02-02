import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button } from '@components/Button/Button.component';
import { useHandleException } from '@hooks/useHandleException.hook';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { useCheckTokenService } from '@services/check-token/check-token.service';
import { useRefreshTokenService } from '@services/refresh-token/refresh-token.service';
import {
  AccountContainer, AccountContentContainer, AccountInfo, AccountInfoContainer,
  Container, FullName, Nickname,
  UserAssetsContainer, UserBio,
  UserInfoContainer,
  UserProfilePicture, UserSideBar,
  Wrapper
} from '@styles/account.style';

interface AccountProps {
  locale: string;
}

const Account = ({ locale }: AccountProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const fetchTokenChecking = React.useRef(true);
  const { loading: l1, checkToken } = useCheckTokenService();
  const { loading: l2, refreshToken } = useRefreshTokenService();
  const { handleException } = useHandleException();

  React.useEffect(() => {
    if (fetchTokenChecking.current) {
      fetchTokenChecking.current = false;
      const token = sessionStorage.getItem('_at');

      if (!token) handleRedirect('/').then();
      else {
        checkUser(token).then((res) => {
          //
        });
      }
    }
  }, []);

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  const checkUser = async (token: string) => {
    try {
      return await refreshToken();
    } catch (e) {
      handleException(e);
      sessionStorage.removeItem('_at');
      await handleRedirect('/');
    }
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
                <UserProfilePicture>
                  <Image className={'ava'} src={'/img/testava.jpg'} alt={'ava'} width={225} height={225}/>
                  <AccountInfoContainer>
                    <AccountInfo>
                      <Nickname>bl4drnnr</Nickname>
                      <FullName>aka Mikhail Bahdashych</FullName>
                    </AccountInfo>
                    <UserBio>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda cumque dolor dolorum exercitationem laborum maiores quia repudiandae sint! Adipisci beatae cum doloribus eos est fugiat inventore minus pariatur voluptatibus. Ad cumque dolorum explicabo facere molestias repellat ut velit voluptate. Adipisci amet asperiores itaque labore praesentium sint veniam vitae voluptatibus?</UserBio>
                  </AccountInfoContainer>
                </UserProfilePicture>
              </UserInfoContainer>

              <AccountContentContainer>
                <UserSideBar>
                  <Button
                    text={t('placeholders:inputs.editProfile')}
                    onClick={() => handleRedirect('/account/settings')}
                  />
                </UserSideBar>
              </AccountContentContainer>
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
