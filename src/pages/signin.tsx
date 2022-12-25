import {
  Box,
  Link,
  WelcomeTitle,
  WelcomeText,
  LoginOptions,
  VerticalLine,
  LoginOption,
  MarginWrapper
} from "@styles/login.style";
import { useRouter } from "next/router";
import { Input } from "@components/Input/Input.component";
import { Button } from "@components/Button/Button.component";
import React from "react";
import CredentialsLayout from "@layouts/Credentials.layout";

const Signin = () => {
  const router = useRouter();

  const [loginOption, setLoginOption] = React.useState('email');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <CredentialsLayout pageTitle={'Sign In'} leftSide={
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
    } leftDarkSide={true} mirroredHeader={true}/>
  )
}

export default Signin
