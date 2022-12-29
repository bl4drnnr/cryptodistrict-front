import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from '@components/Button/Button.component';
import { Input } from '@components/Input/Input.component';
import { InputButton } from '@components/InputButton/InputButton.component';
import CredentialsLayout from '@layouts/Credentials.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  Box,
  Link,
  WelcomeTitle,
  LoginOptions,
  LoginOption,
  VerticalLine,
  MarginWrapper
} from '@styles/login.style';

interface ForgotPasswordProps {
  locale: string;
}

const ForgotPassword = ({ locale }: ForgotPasswordProps) => {
  const { t } = useTranslation();

  const router = useRouter();

  const [passwordRecoveryMethod, setPasswordRecoveryMethod] = React.useState('email');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [verificationCode, setVerificationCode] = React.useState('');

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:forgotPassword.title')}</title>
      </Head>
      <CredentialsLayout leftSide={
        <Box>
          <WelcomeTitle>
            {t('pages:forgotPassword.text1')}
          </WelcomeTitle>
          <WelcomeTitle>
            {t('pages:forgotPassword.text2')}
          </WelcomeTitle>

        </Box>
      } rightSide={
        <Box>
          <h1>{t('pages:forgotPassword.text1')}</h1>
          <LoginOptions>
            <LoginOption onClick={() => setPasswordRecoveryMethod('email')}>{t('pages:signin.withEmail')}</LoginOption>
            <VerticalLine />
            <LoginOption onClick={() => setPasswordRecoveryMethod('phone')}>{t('pages:signin.withPhone')}</LoginOption>
          </LoginOptions>

          {passwordRecoveryMethod === 'email' ? (
            <InputButton
              buttonTitle={t('placeholders:inputs.sendCode')}
              onChange={() => {}}
              onClick={() => {}}
              placeholder={t('placeholders:inputs.email')}
              value={email}
            />
          ): (
            <InputButton
              buttonTitle={t('placeholders:inputs.sendCode')}
              onChange={() => {}}
              onClick={() => {}}
              placeholder={t('placeholders:inputs.phone')}
              value={phone}
            />
          )}

          <MarginWrapper>
            <Input
              high={true}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder={t('placeholders:inputs.verificationCode')}
            />
          </MarginWrapper>

          <MarginWrapper>
            <Button highHeight={true} text={t('placeholders:inputs.submit')} />
          </MarginWrapper>
        </Box>
      } headerLink={
        <p>
          {t('pages:signin.dontHaveAnAcc')} <Link
          onClick={() => handleRedirect('/signup')}
        >{t('pages:signin.signUpNow')}</Link>
        </p>
      } rightDarkSide={true} locale={locale}
      />
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components', 'errors', 'placeholders']);
export { getStaticPaths, getStaticProps };

export default ForgotPassword;
