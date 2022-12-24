import {
  Box,
  Link,
  Tea,
  MarginWrapper,
  PasswordCheckBox,
  Dot,
  PasswordCheckLine,
  WelcomeTitle,
  WelcomeText
} from "@styles/login.style";
import { Input } from "@components/Input/Input.component";
import { Button } from "@components/Button/Button.component";
import { useRouter } from "next/router";
import { Checkbox } from "@components/Checkbox/Checkbox.component";
import { validateEmail, validatePasswordRules, validatePassword } from "@hooks/useValidators";
import React from "react";
import CredentialsLayout from "@layouts/Credentials.layout";
import classNames from "classnames";

const Signup = () => {
  const router = useRouter();

  const [email, setEmail] = React.useState({email: '', emailError: false})
  const [password, setPassword] = React.useState({password: '', repeatPassword: ''})
  const [passwordError, setPasswordError] = React.useState({
    passwordMismatch: false,
    passwordRequirement: false,
    passwordRules: false
  })
  const [passwordRulesList, setPasswordRulesList] = React.useState([
    {eightChars: false, text: 'Password length should be more than 8 characters'},
    {uppCase: false, text: 'Password should contain at least one uppercase character'},
    {lowCase: false, text: 'Password should contain at least one lowercase character'},
    {specChar: false, text: 'Password should contain at least one special character'},
    {digitChar: false, text: 'Password should contain at least one digit character'}
  ])

  React.useEffect(() => {
    if (!validateEmail(email.email)) setEmail({ ...email, emailError: true })
    else if (validateEmail(email.email) === 1) setEmail({ ...email, emailError: false })
    else setEmail({ ...email, emailError: false })
  }, [email.email])

  React.useEffect(() => {
    if (password.password === password.repeatPassword)
      setPasswordError({...passwordError, passwordMismatch: false})

    const passwordRuleCheck = validatePasswordRules(password.password)
    setPasswordRulesList(passwordRuleCheck)

    setPasswordError({ ...passwordError, passwordMismatch: !!((password.password && password.repeatPassword) && (password.password !== password.repeatPassword)) })
    setPasswordError({ ...passwordError, passwordRequirement: !password.password || !password.repeatPassword })
    setPasswordError({ ...passwordError, passwordRules: (!validatePassword(password.password) || !validatePassword(password.repeatPassword)) })

    if (!password.password && !password.repeatPassword) {
      setPasswordError({
        passwordMismatch: false,
        passwordRequirement: false,
        passwordRules: false
      })
    }
  }, [password.password])

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <CredentialsLayout leftSide={
      <Box>
        <WelcomeTitle>
          Hello there, cryptogeek!
        </WelcomeTitle>
        <WelcomeText>
          Welcome to Cryptodistrict - platform that will keep you in touch
          with everything that happens in the world of cryptocurrencies.
        </WelcomeText>
        <WelcomeText>
          We are quite sure you have been doing this hundreds times before,
          so, no need to explain what you need to do, fields on the right side.
          See ya!
        </WelcomeText>
        <WelcomeText>
          In case on any issues see <Link onClick={() => handleRedirect('/helpdesk')}>Helpdesk</Link>
        </WelcomeText>
      </Box>
    } rightSide={
      <Box>
        <h1>Sign Up</h1>

        <MarginWrapper>
          <Input
            onError={email.emailError}
            value={email.email}
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
            placeholder={'Email'}
          />
        </MarginWrapper>

        <MarginWrapper>
          <Input
            onError={passwordError.passwordMismatch || passwordError.passwordRequirement}
            value={password.password}
            onChange={(e) => setPassword({ ...password, password: e.target.value })}
            type={'password'}
            placeholder={'Password'}
          />
        </MarginWrapper>

        <MarginWrapper>
          <Input
            onError={passwordError.passwordMismatch || passwordError.passwordRequirement}
            value={password.repeatPassword}
            onChange={(e) => setPassword({ ...password, repeatPassword: e.target.value })}
            type={'password'}
            placeholder={'Repeat password'}
          />
        </MarginWrapper>

        <MarginWrapper>
          <Checkbox label={
            <Tea>I confirm that I have read and accepted <Link
              onClick={() => handleRedirect('/terms-and-conditions')}>Terms and Conditions</Link>
            </Tea>
          }/>
        </MarginWrapper>

        <MarginWrapper>
          <Button highHeight={true} text={'Sign Up'} />
        </MarginWrapper>

        {passwordError.passwordRules ? (
          <PasswordCheckBox>
            {passwordRulesList.map(rule => {
              return (
                <PasswordCheckLine key={rule.text}>
                  <Dot className={classNames({ error: !rule[Object.keys(rule)[0]] })}/>
                  <p>{rule.text}</p>
                </PasswordCheckLine>)
            })}
          </PasswordCheckBox>
        ) : (<></>)}

          {/*<PasswordCheckBox>*/}
          {/*  <PasswordCheckLine>*/}
          {/*    <Dot />*/}
          {/*    Password should be at least 8 symbols long*/}
          {/*  </PasswordCheckLine>*/}
      </Box>
    } headerLink={
      <p>
        Already have an account? <Link
        onClick={() => handleRedirect('/signin')}
      >Sign In now!</Link>
      </p>
    } rightDarkSide={true}/>
  )
}

export default Signup
