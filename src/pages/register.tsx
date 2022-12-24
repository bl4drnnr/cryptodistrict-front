import {
  Box,
  Container,
  Side,
  Link,
  Tea,
  MarginWrapper,
  PasswordCheckBox, Dot, PasswordCheckLine, WelcomeTitle, WelcomeText
} from "@styles/pages/login.style";
import { Input } from "@components/Input/Input.component";
import { Button } from "@components/Button/Button.component";
import { useRouter } from "next/router";
import classNames from "classnames";
import EmptyLayout from "@layouts/Empty.layout";
import React from "react";
import {Checkbox} from "@components/Checkbox/Checkbox.component";

const Register = () => {
  const router = useRouter();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')

  const [passwordRules, setPasswordRules] = React.useState([])

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <EmptyLayout>
      <Container>

        <Side>
          <Box>
            <WelcomeTitle>
              Hello there, cryptogeek.
            </WelcomeTitle>
            <WelcomeText>
              We are quite sure you have been doing this hundreds times before,
              so, no need to explain what you need to do, fields on the right side.
              See ya!
            </WelcomeText>
          </Box>
        </Side>

        <Side className={classNames({ lightSide: true })}>
          <Box>
            <h1>Register</h1>
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
              <Input
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                type={'password'}
                placeholder={'Repeat password'}
              />
            </MarginWrapper>
            <MarginWrapper>
              <Checkbox></Checkbox>
              <Tea>
                By clicking Register button I confirm that I have read and accepted <Link
                onClick={() => handleRedirect('/terms-and-conditions')}>Terms and Conditions</Link>
              </Tea>
            </MarginWrapper>
            <MarginWrapper>
              <Button highHeight={true} text={'Register'} />
            </MarginWrapper>

            <PasswordCheckBox>
              <PasswordCheckLine>
                <Dot />
                Password should be at least 8 symbols long
              </PasswordCheckLine>
              <PasswordCheckLine>
                <Dot />
                Password should contain at least 1 lowercase letter
              </PasswordCheckLine>
              <PasswordCheckLine>
                <Dot />
                Password should contain at least 1 uppercase letter
              </PasswordCheckLine>
              <PasswordCheckLine>
                <Dot />
                Password should contain at least 1 number
              </PasswordCheckLine>
              <PasswordCheckLine>
                <Dot />
                Password should contain at least 1 special symbol
              </PasswordCheckLine>
              <PasswordCheckLine>
                <Dot />
                Passwords should match
              </PasswordCheckLine>
            </PasswordCheckBox>
          </Box>
        </Side>
      </Container>
    </EmptyLayout>
  )
}

export default Register
