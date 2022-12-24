import { UseLoginService } from "@services/login/login.service";
import {
  Container,
  Box,
  Side,
  LoginHeaderTitle,
  LoginHeaderButton,
  Link,
  LoginHeader,
  WelcomeTitle, WelcomeText, LoginOptions, VerticalLine, LoginOption
} from "@styles/login.style";
import { useRouter } from "next/router";
import EmptyLayout from "@layouts/Empty.layout";
import React from "react";
import classNames from "classnames";


const Signin = () => {
  const router = useRouter();

  const [loginOption, setLoginOption] = React.useState('email')
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
            <WelcomeText>
              In case on any issues see <Link onClick={() => handleRedirect('/helpdesk')}>Helpdesk</Link>
            </WelcomeText>
          </Box>
        </Side>

      </Container>
    </EmptyLayout>
  )
}

export default Signin
