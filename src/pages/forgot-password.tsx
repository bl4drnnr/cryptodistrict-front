import {
  Box,
  Container,
  Side,
  Link,
  Tea,
  MarginWrapper,
  PasswordCheckBox,
  Dot,
  PasswordCheckLine,
  WelcomeTitle,
  WelcomeText,
  LoginHeader, LoginHeaderTitle, LoginHeaderButton, LoginOptions, LoginOption, VerticalLine, TextBox
} from "@styles/login.style";
import { useRouter } from "next/router";
import EmptyLayout from "@layouts/Empty.layout";
import React from "react";
import classNames from "classnames";

const ForgotPassword = () => {
  const router = useRouter();

  const [passwordRecoveryMethod, setPasswordRecoveryMethod] = React.useState('email')

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <EmptyLayout>
      <Container>

        <Side>
          <TextBox>
            <WelcomeTitle>
              Forgot password?
            </WelcomeTitle>
            <WelcomeTitle>
              Nah... Not a big deal
            </WelcomeTitle>

            <WelcomeText>
              In case on any issues see <Link onClick={() => handleRedirect('/helpdesk')}>Helpdesk</Link>
            </WelcomeText>
          </TextBox>
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

        <Side className={classNames({ lightSide: true })}>
          <Box>
            <h1>Forgot password?</h1>
            <LoginOptions>
              <LoginOption onClick={() => setPasswordRecoveryMethod('email')}>With Email</LoginOption>
              <VerticalLine />
              <LoginOption onClick={() => setPasswordRecoveryMethod('phone')}>With Phone Number</LoginOption>
            </LoginOptions>

          </Box>
        </Side>

      </Container>
    </EmptyLayout>
  )
}

export default ForgotPassword
