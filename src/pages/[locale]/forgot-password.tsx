import React from 'react';

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
  WelcomeText,
  LoginOptions,
  LoginOption,
  VerticalLine,
  MarginWrapper
} from '@styles/login.style';

interface ForgotPasswordProps {
  locale: string;
}

const ForgotPassword = ({ locale }: ForgotPasswordProps) => {
  const router = useRouter();

  const [passwordRecoveryMethod, setPasswordRecoveryMethod] = React.useState('email');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [verificationCode, setVerificationCode] = React.useState('');

  const handleRedirect = async (path: string) => {
    await router.push(`${locale}${path}`);
  };

  return (
    <CredentialsLayout leftSide={
      <Box>
        <WelcomeTitle>
          Forgot password?
        </WelcomeTitle>
        <WelcomeTitle>
          Nah... Not a big deal
        </WelcomeTitle>

      </Box>
    } rightSide={
      <Box>
        <h1>Forgot password?</h1>
        <LoginOptions>
          <LoginOption onClick={() => setPasswordRecoveryMethod('email')}>With Email</LoginOption>
          <VerticalLine />
          <LoginOption onClick={() => setPasswordRecoveryMethod('phone')}>With Phone Number</LoginOption>
        </LoginOptions>

        {passwordRecoveryMethod === 'email' ? (
          <InputButton
            buttonTitle={'Send code'}
            onChange={() => {}}
            onClick={() => {}}
            placeholder={'Email'}
            value={email}
          />
        ): (
          <InputButton
            buttonTitle={'Send code'}
            onChange={() => {}}
            onClick={() => {}}
            placeholder={'Phone'}
            value={phone}
          />
        )}

        <MarginWrapper>
          <Input
            high={true}
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder={'Verification code'}
          />
        </MarginWrapper>

        <MarginWrapper>
          <Button highHeight={true} text={'Submit'} />
        </MarginWrapper>
      </Box>
    } headerLink={
      <p>
        Don&apos;t have an account yet? <Link
        onClick={() => handleRedirect('/signup')}
      >Sign up now!</Link>
      </p>
    } rightDarkSide={true}
    />
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components']);
export { getStaticPaths, getStaticProps };

export default ForgotPassword;
