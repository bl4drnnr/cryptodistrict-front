import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from '@components/Button/Button.component';
import { useHandleException } from '@hooks/useHandleException.hook';
import CredentialsLayout from '@layouts/Credentials.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { useAccountConfirmationService } from '@services/account-confirmation/account-confirmation.service';
import { Box, HeaderLink, Link, MarginWrapper, SubTitle, Title, WelcomeText, WelcomeTitle } from '@styles/login.style';


interface AccountConfirmationProps {
  locale: string;
}

const AccountConfirmation = ({ locale }: AccountConfirmationProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { handleException } = useHandleException();
  const { loading, confirmAccount } = useAccountConfirmationService();
  const fetchAccountConfirmation = React.useRef(true);

  const [confirmationStatus, setConfirmationStatus] = React.useState(1);

  React.useEffect(() => {
    if (fetchAccountConfirmation.current) {
      fetchAccountConfirmation.current = false;

      const routePath = window.location.search;
      const hash = routePath.split('=');
      if (hash.length == 2 && hash[0] == '?confirmationHash') {
        // confirmAccountRegistration(hash[1]).then((res) => {
        //   if (res?.message === 'success') setConfirmationStatus(2);
        // });
      }
    }
  }, []);

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  const confirmAccountRegistration = async (hash: string) => {
    try {
      return await confirmAccount({ hash });
    } catch (e) {
      setConfirmationStatus(3);
      handleException(e);
    }
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:confirmacc.title')}</title>
      </Head>
      <CredentialsLayout
        leftSide={
          <Box>
            <Title>{t('pages:confirmacc.title')}</Title>
            <>
              {confirmationStatus === 1 ? (
                <MarginWrapper>
                  <SubTitle>{t('pages:confirmacc.inProgress')}</SubTitle>
                </MarginWrapper>
              ) : (confirmationStatus === 2 ? (
                <>
                  <MarginWrapper>
                    <SubTitle>{t('pages:confirmacc.success')}</SubTitle>
                  </MarginWrapper>
                  <MarginWrapper>
                    <Button fillButton={true} text={t('pages:signin.title')} onClick={() => handleRedirect('/signin')}/>
                  </MarginWrapper>
                </>
              ) : (
                <>
                  <MarginWrapper>
                    <SubTitle>{t('pages:confirmacc.error')}</SubTitle>
                  </MarginWrapper>
                  <MarginWrapper>
                    <Button fillButton={true} text={t('pages:confirmacc.support')} onClick={() => handleRedirect('/contact')}/>
                  </MarginWrapper>
                </>
              ))}
            </>
          </Box>
        }
        rightSide={
          <Box>
            <WelcomeTitle>{t('pages:confirmacc.almostDone')}</WelcomeTitle>
            <WelcomeText>{t('pages:confirmacc.lastStep')}</WelcomeText>
          </Box>
        }
        headerLink={
          <>
            <HeaderLink><Link onClick={() => handleRedirect('/signin')}
            >{t('pages:signup.signIn')}</Link></HeaderLink>
          </>
        }
        locale={locale}
        loading={loading}
        rightDarkSide={true}
      />
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default AccountConfirmation;
