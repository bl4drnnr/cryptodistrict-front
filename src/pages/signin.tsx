import {
  Container,
  Box,
  Side,
  LoginHeaderTitle,
  LoginHeaderButton,
  Link,
  LoginHeader,
  WelcomeTitle,
  WelcomeText,
  LoginOptions,
  VerticalLine,
  LoginOption,
  MarginWrapper,
  TextBox
} from "@styles/login.style";
import { useRouter } from "next/router";
import { Input } from "@components/Input/Input.component";
import { Button } from "@components/Button/Button.component";
import EmptyLayout from "@layouts/Empty.layout";
import React from "react";
import classNames from "classnames";

const Signin = () => {
  const router = useRouter();

  const [loginOption, setLoginOption] = React.useState('email');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <EmptyLayout>
      <Container>

        <Side className={classNames({ lightSide: true })}>
          <Box>
            <h1>Sign In</h1>

            <LoginOptions>
              <LoginOption onClick={() => setLoginOption('email')}>With Email</LoginOption>
              <VerticalLine />
              <LoginOption onClick={() => setLoginOption('phone')}>With Phone Number</LoginOption>
            </LoginOptions>

            <MarginWrapper>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'Email'}
              />
            </MarginWrapper>

            <MarginWrapper>
              <Input
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
        </Side>

        <LoginHeader>
          <LoginHeaderButton>
            <p>
              Don&apos;t have an account yet? <Link
              onClick={() => handleRedirect('/signup')}
            >Sign up now!</Link>
            </p>
          </LoginHeaderButton>
          <LoginHeaderTitle
            onClick={() => handleRedirect('/')}
          >Cryptodistrict</LoginHeaderTitle>
        </LoginHeader>

        <Side>
          <TextBox>
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
            <WelcomeText>
              In case on any issues see <Link onClick={() => handleRedirect('/helpdesk')}>Helpdesk</Link>
            </WelcomeText>
          </TextBox>
        </Side>

      </Container>
    </EmptyLayout>
  )
}

export default Signin
