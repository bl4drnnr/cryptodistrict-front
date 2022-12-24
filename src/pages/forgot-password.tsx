import {
  Box,
  Link,
  WelcomeTitle,
  WelcomeText,
  LoginOptions,
  LoginOption,
  VerticalLine,
  MarginWrapper
} from "@styles/login.style";
import { InputButton } from "@components/InputButton/InputButton.component";
import { useRouter } from "next/router";
import { Input } from "@components/Input/Input.component";
import { Button } from "@components/Button/Button.component";
import React from "react";
import CredentialsLayout from "@layouts/Credentials.layout";

const ForgotPassword = () => {
  const router = useRouter();

  const [passwordRecoveryMethod, setPasswordRecoveryMethod] = React.useState('email')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [verificationCode, setVerificationCode] = React.useState('')

  const handleRedirect = async (path: string) => {
    await router.push(path);
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

        <WelcomeText>
          In case on any issues see <Link onClick={() => handleRedirect('/helpdesk')}>Helpdesk</Link>
        </WelcomeText>
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
  )
}

export default ForgotPassword
