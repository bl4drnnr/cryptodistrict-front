import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from '@components/Button/Button.component';
import { Input } from '@components/Input/Input.component';
import CredentialsLayout from '@layouts/Credentials.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  Box,
  Link,
  WelcomeTitle,
  WelcomeText,
  LoginOptions,
  VerticalLine,
  LoginOption,
  MarginWrapper
} from '@styles/login.style';

interface SignInProps {
  locale: string
}

const Signin = ({ locale }: SignInProps) => {
  const { t } = useTranslation();

  const router = useRouter();

  const [loginOption, setLoginOption] = React.useState('email');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:signin.title')}</title>
      </Head>
      <CredentialsLayout leftSide={
        <Box>
          <h1>Sign In</h1>

          <LoginOptions>
            <LoginOption onClick={() => setLoginOption('email')}>With Email</LoginOption>
            <VerticalLine />
            <LoginOption onClick={() => setLoginOption('phone')}>With Phone Number</LoginOption>
          </LoginOptions>

          <MarginWrapper>
            <Input
              high={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={'Email'}
            />
          </MarginWrapper>

          <MarginWrapper>
            <Input
              high={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={'password'}
              placeholder={'Password'}
            />
          </MarginWrapper>

          <MarginWrapper>
            <Link
              onClick={() => handleRedirect('/forgot-password')}
            >Forgot password?</Link>
          </MarginWrapper>

          <MarginWrapper>
            <Button highHeight={true} text={'Sign Up'} />
          </MarginWrapper>

        </Box>
      } rightSide={
        <Box>
          <WelcomeTitle>
            Welcome back!
          </WelcomeTitle>
          <WelcomeTitle>
            We are glad to see again!
          </WelcomeTitle>
          <WelcomeText>
            We are quite sure you have been doing this hundreds times before,
            so, no need to explain what you need to do, fields on the left side.
          </WelcomeText>
        </Box>
      } headerLink={
        <p>
          Don&apos;t have an account yet? <Link
          onClick={() => handleRedirect('/signup')}
        >Sign up now!</Link>
        </p>
      } leftDarkSide={true} mirroredHeader={true} locale={locale}
      />
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components']);
export { getStaticPaths, getStaticProps };

export default Signin;
