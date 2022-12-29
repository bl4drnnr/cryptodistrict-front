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
              <Title>{t('pages:signin.title')}</Title>

              <LoginOptions>
                <LoginOption onClick={() => setLoginOption('email')}>{t('pages:signin.withEmail')}</LoginOption>
                <VerticalLine/>
                <LoginOption onClick={() => setLoginOption('phone')}>{t('pages:signin.withPhone')}</LoginOption>
              </LoginOptions>

              <MarginWrapper>
                {loginOption === 'email' ? (
                  <Input
                    high={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('placeholders:inputs.email')}
                  />
                ) : (
                  <Input
                    high={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('placeholders:inputs.phone')}
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
                  placeholder={t('placeholders:inputs.password')}
                />
              </MarginWrapper>

              <MarginWrapper>
                <Link
                  onClick={() => handleRedirect('/forgot-password')}
                >{t('pages:signin.forgotPassword')}</Link>
              </MarginWrapper>

              <MarginWrapper>
                <Button
                  disabled={passwordError}
                  highHeight={true}
                  text={t('pages:signin.signUpButton')}
                  onClick={() => signInUser()}
                />
              </MarginWrapper>

            </Box>
          ) : (
            <Box>
              <Title>{t('pages:signin.twoFa')}</Title>
              <MarginWrapper className={'big'}>
                <TwoFa
                  title={t('placeholders:inputs.twoFa')}
                  setTwoFaCode={setTwoFa}
                />
              </MarginWrapper>
              <MarginWrapper>
                <Button highHeight={true} text={t('pages:signin.title')} fillButton={true}/>
              </MarginWrapper>
            </Box>
          )}
        </>
      } rightSide={
        <Box>
          <WelcomeTitle>
            {t('pages:signin.text1')}
          </WelcomeTitle>
          <WelcomeTitle>
            {t('pages:signin.text2')}
          </WelcomeTitle>
          <WelcomeText>
            {t('pages:signin.text3')}
          </WelcomeText>
        </Box>
      } headerLink={
        <p>
          {t('pages:signin.dontHaveAnAcc')} <Link
          onClick={() => handleRedirect('/signup')}
        >{t('pages:signin.signUpNow')}</Link>
        </p>
      } leftDarkSide={true} mirroredHeader={true} locale={locale} loading={loading}
      />
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components', 'errors', 'placeholders']);
export { getStaticPaths, getStaticProps };

export default Signin;
