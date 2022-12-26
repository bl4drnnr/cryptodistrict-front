import React from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from '@components/Button/Button.component';
import { Checkbox } from '@components/Checkbox/Checkbox.component';
import { Input } from '@components/Input/Input.component';
import { Textarea } from '@components/Textarea/Textarea.component';
import { useHandleException } from '@hooks/useHandleException.hook';
import { validateEmail, validatePasswordRules, validatePassword } from '@hooks/useValidators.hook';
import CredentialsLayout from '@layouts/Credentials.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { useSignUpService } from '@services/signup/signup.service';
import {
  Box,
  Link,
  Tea,
  MarginWrapper,
  PasswordCheckBox,
  Dot,
  PasswordCheckLine,
  WelcomeTitle,
  WelcomeText,
  Buttons,
  MarginVerticalWrapper
} from '@styles/login.style';

interface SignUpProps {
  locale: string
}

const Signup = ({ locale }: SignUpProps) => {
  const { t } = useTranslation();

  const router = useRouter();

  const { loading, signUp } = useSignUpService();
  const { handleException } = useHandleException();

  const [step, setStep] = React.useState(1);
  const [tac, setTac] = React.useState(false);
  const [email, setEmail] = React.useState({ email: '', emailError: false });
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [twitter, setTwitter] = React.useState('');
  const [linkedIn, setLinkedIn] = React.useState('');
  const [personalWebsite, setPersonalWebsite] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [publicEmail, setPublicEmail] = React.useState(false);
  const [password, setPassword] = React.useState({ password: '', repeatPassword: '' });
  const [passwordError, setPasswordError] = React.useState({
    passwordMismatch: false,
    passwordRequirement: false,
    passwordRules: false
  });
  const [passwordRulesList, setPasswordRulesList] = React.useState([
    { error: false, text: 'Password length should be more than 8 characters' },
    { error: false, text: 'Password should contain at least one uppercase character' },
    { error: false, text: 'Password should contain at least one lowercase character' },
    { error: false, text: 'Password should contain at least one special character' },
    { error: false, text: 'Password should contain at least one digit character' }
  ]);

  const signUpUser = async () => {
    try {
      const response = await signUp({
        email: email.email,
        password: password.password,
        bio, linkedIn, firstName, lastName, title, twitter, personalWebsite
      });
    } catch (e) {
      handleException(e);
    }
  };

  React.useEffect(() => {
    if (router.isReady) {
      setEmail({ ...email, email: router.query.email as string });
    }
  }, [router.query, router.isReady]);

  React.useEffect(() => {
    if (!validateEmail(email.email)) setEmail({ ...email, emailError: true });
    else if (validateEmail(email.email) === 1) setEmail({ ...email, emailError: false });
    else setEmail({ ...email, emailError: false });
  }, [email.email]);

  React.useEffect(() => {
    if (password.password === password.repeatPassword)
      setPasswordError({ ...passwordError, passwordMismatch: false });

    const passwordRuleCheck = validatePasswordRules(password.password);
    setPasswordRulesList(passwordRuleCheck);

    setPasswordError({
      passwordMismatch: !!((password.password && password.repeatPassword) && (password.password !== password.repeatPassword)),
      passwordRequirement: !password.password || !password.repeatPassword,
      passwordRules: (!validatePassword(password.password) || !validatePassword(password.repeatPassword))
    });

    if (!password.password && !password.repeatPassword) {
      setPasswordError({
        passwordMismatch: false,
        passwordRequirement: false,
        passwordRules: false
      });
    }
  }, [password.password, password.repeatPassword]);

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  const validateFields = () => {
    return tac &&
      !email.emailError &&
      email.email &&
      password.password &&
      password.repeatPassword &&
      !passwordError.passwordMismatch &&
      !passwordError.passwordRequirement &&
      !passwordError.passwordRules;
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:signup.title')}</title>
      </Head>
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
        </Box>
      } rightSide={
        <>
          {step === 1 ? (
            <Box>
              <h1>Sign Up</h1>

              <MarginWrapper>
                <Input
                  high={true}
                  onError={email.emailError}
                  value={email.email}
                  onChange={(e) => setEmail({ ...email, email: e.target.value })}
                  placeholder={'Email'}
                />
              </MarginWrapper>

              <MarginWrapper>
                <Input
                  high={true}
                  onError={passwordError.passwordMismatch || passwordError.passwordRequirement}
                  value={password.password}
                  onChange={(e) => setPassword({ ...password, password: e.target.value })}
                  type={'password'}
                  placeholder={'Password'}
                />
              </MarginWrapper>

              <MarginWrapper>
                <Input
                  high={true}
                  onError={passwordError.passwordMismatch || passwordError.passwordRequirement}
                  value={password.repeatPassword}
                  onChange={(e) => setPassword({ ...password, repeatPassword: e.target.value })}
                  type={'password'}
                  placeholder={'Repeat password'}
                />
              </MarginWrapper>

              <MarginWrapper>
                <Checkbox
                  value={tac}
                  label={
                    <Tea>I confirm that I have read and accepted <Link
                      onClick={() => handleRedirect('/terms-and-conditions')}>Terms and Conditions</Link>
                    </Tea>
                  } onChange={() => setTac(!tac)}/>
              </MarginWrapper>

              {passwordError.passwordRules ? (
                <PasswordCheckBox>
                  {passwordRulesList.map(rule => {
                    return (
                      <PasswordCheckLine key={rule.text}>
                        <Dot className={classNames({ error: !rule.error })}/>
                        <p>{rule.text}</p>
                      </PasswordCheckLine>);
                  })}
                </PasswordCheckBox>
              ) : (<></>)}

              <MarginWrapper>
                <Button
                  disabled={!validateFields()}
                  onClick={() => setStep(2)}
                  highHeight={true}
                  text={'Sign Up'}
                />
              </MarginWrapper>

            </Box>
          ) : (step === 2 ? (
              <Box className={'scrollable'}>
                <MarginWrapper>
                  <h3>Tell us a little about yourself</h3>
                </MarginWrapper>
                <MarginWrapper>
                  <p>Don&apos;t worry, you can skip this step and fill information you want later</p>
                </MarginWrapper>

                <MarginWrapper>
                  <Input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={'First name'}
                  />
                </MarginWrapper>

                <MarginWrapper>
                  <Input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={'Last name'}
                  />
                </MarginWrapper>

                <MarginWrapper>
                  <h3>Provide your nickname of link</h3>
                </MarginWrapper>
                <hr/>

                <MarginWrapper>
                  <Input
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    placeholder={'Twitter'}
                  />
                </MarginWrapper>
                <MarginWrapper>
                  <Input
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                    placeholder={'LinkedIn'}
                  />
                </MarginWrapper>
                <MarginWrapper>
                  <Input
                    value={personalWebsite}
                    onChange={(e) => setPersonalWebsite(e.target.value)}
                    placeholder={'Personal website'}
                  />
                </MarginWrapper>

                <MarginWrapper>
                  <h3>What do you want to tell this world?</h3>
                </MarginWrapper>
                <hr/>

                <MarginWrapper>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={'Title'}
                  />
                </MarginWrapper>
                <MarginWrapper>
                  <Textarea
                    value={bio}
                    placeholder={'Bio'}
                    onChange={(e) => setBio(e.target.value)}
                  />

                </MarginWrapper>
                <Checkbox
                  value={publicEmail}
                  label={'Show my email as public email for contact'}
                  onChange={() => setPublicEmail(!publicEmail)}
                />

                <Buttons>
                  <Button text={'Go Back'} onClick={() => setStep(step - 1)} />
                  <MarginVerticalWrapper>
                    <Button text={'Skip'} onClick={() => signUpUser()}/>
                  </MarginVerticalWrapper>
                  <Button fillButton={true} text={'Next'} onClick={() => signUpUser()} />
                </Buttons>
              </Box>
            ) : (<></>)
          )}
        </>
      } headerLink={
        <p>
          Already have an account? <Link
          onClick={() => handleRedirect('/signin')}
        >Sign In now!</Link>
        </p>
      } rightDarkSide={true} locale={locale} loading={loading}
      />
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default Signup;
