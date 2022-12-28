import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from '@components/Button/Button.component';
import { Input } from '@components/Input/Input.component';
import { TwoFa } from '@components/TwoFa/TwoFa.component';
import { useHandleException } from '@hooks/useHandleException.hook';
import { validatePasswordLength } from '@hooks/useValidators.hook';
import CredentialsLayout from '@layouts/Credentials.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { useSignInService } from '@services/signin/signin.service';
import {
  Box,
  Link,
  WelcomeTitle,
  WelcomeText,
  LoginOptions,
  VerticalLine,
  LoginOption,
  MarginWrapper,
  Title
} from '@styles/login.style';

interface SignInProps {
  locale: string
}

const Signin = ({ locale }: SignInProps) => {
  const { t } = useTranslation();

  const router = useRouter();
  const { signIn, loading } = useSignInService();
  const { handleException } = useHandleException();

  const [step, setStep] = React.useState(1);
  const [loginOption, setLoginOption] = React.useState('email');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [twoFa, setTwoFa] = React.useState('');

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  const signInUser = async () => {
    try {
      const { _at } = await signIn({
        email, password
      });
      sessionStorage.setItem('_at', _at);
    } catch (e) {
      handleException(e);
    }
  };

  React.useEffect(() => {
    if (password.length > 0)
      setPasswordError(!validatePasswordLength(password));
  }, [password]);

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:signin.title')}</title>
      </Head>
      <CredentialsLayout leftSide={
        <>
          {step === 1 ? (
            <Box>
              <Title>Sign In</Title>

              <LoginOptions>
                <LoginOption onClick={() => setLoginOption('email')}>With Email</LoginOption>
                <VerticalLine />
                <LoginOption onClick={() => setLoginOption('phone')}>With Phone Number</LoginOption>
              </LoginOptions>

              <MarginWrapper>
                {loginOption === 'email' ? (
                  <Input
                    high={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={'Email'}
                  />
                ): (
                  <Input
                    high={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={'Email'}
                  />
                )}
              </MarginWrapper>

              <MarginWrapper>
                <Input
                  onError={passwordError}
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
                <Button
                  disabled={passwordError}
                  highHeight={true}
                  text={'Sign Up'}
                  onClick={() => signInUser()}
                />
              </MarginWrapper>

            </Box>
          ) : (
            <Box>
              <Title>Two Factor Authentication</Title>
              <MarginWrapper className={'big'}>
                <TwoFa
                  title={'Two factor authentication code'}
                  setTwoFaCode={setTwoFa}
                />
              </MarginWrapper>
              <MarginWrapper>
                <Button highHeight={true} text={'Sign Up'} fillButton={true} />
              </MarginWrapper>
            </Box>
          )}
        </>
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
      } leftDarkSide={true} mirroredHeader={true} locale={locale} loading={loading}
      />
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default Signin;
