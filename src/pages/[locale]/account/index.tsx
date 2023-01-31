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
  AccountContainer, AccountTitle,
  Container, Nickname, UserAssetsBox,
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
          console.log('res', res);
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
                  <Image className={'ava'} src={'/img/testava.jpg'} alt={'ava'} width={325} height={325}/>
                </UserProfilePicture>
                <Nickname>bl4drnnr</Nickname>
                <AccountTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius ipsum odio quos velit. Deleniti dicta doloremque est modi non obcaecati, quas quasi quisquam reiciendis rerum saepe, tenetur totam voluptatem?</AccountTitle>
                <Button
                  text={'Edit profile'}
                  onClick={() => handleRedirect('/account/settings')}
                />
              </UserInfoContainer>

              <UserAssetsContainer>
                <UserBioBox>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem cupiditate doloribus explicabo laudantium magni obcaecati quisquam rem saepe, vel! Ab, aperiam architecto at consectetur cum cumque dolor dolorem eveniet exercitationem expedita hic id in ipsa labore maiores modi mollitia natus nihil nisi nobis praesentium quae quas quisquam saepe, sed sunt tempore temporibus tenetur, ut vero! Dicta doloremque enim eum id ipsam iure minus odio! Aliquam facilis ipsa minus nobis quasi vero? A alias consectetur fuga impedit ipsa obcaecati vero voluptatem. Aspernatur delectus dolor impedit ipsa magnam nobis nulla sapiente.
                </UserBioBox>
                {/*<UserAssetsBox>*/}
                {/*</UserAssetsBox>*/}
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
