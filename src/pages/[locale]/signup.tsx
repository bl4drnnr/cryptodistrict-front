import React from 'react';

import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from '@components/Button/Button.component';
import { Checkbox } from '@components/Checkbox/Checkbox.component';
import { Input } from '@components/Input/Input.component';
import { Textarea } from '@components/Textarea/Textarea.component';
import { useWindowDimensions } from '@hooks/useGetWindowDimensions.hook';
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
  MarginVerticalWrapper,
  Title,
  SubTitle,
  HeaderLink,
  HeaderSmall,
  Paragraph
} from '@styles/login.style';

interface SignUpProps {
  locale: string
}

const Signup = ({ locale }: SignUpProps) => {
  const { t } = useTranslation();

  const router = useRouter();

  const { loading, signUp } = useSignUpService();
  const { handleException } = useHandleException();
  const { height, width } = useWindowDimensions();
  const [hideLeftSide, setHideLeftSide] = React.useState(false);

  const [step, setStep] = React.useState(1);
  const [tac, setTac] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);

  const [username, setUsername] = React.useState('');
  const [usernameError, setUsernameError] = React.useState(false);

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
    { error: false, text: t('pages:signup.passwordLength') },
    { error: false, text: t('pages:signup.passwordUpper') },
    { error: false, text: t('pages:signup.passwordLower') },
    { error: false, text: t('pages:signup.passwordSpecial') },
    { error: false, text: t('pages:signup.passwordDigit') }
  ]);

  const signUpUser = async () => {
    try {
      const response = await signUp({
        password: password.password,
        bio,
        linkedIn,
        firstName,
        lastName,
        title,
        twitter,
        personalWebsite,
        tac,
        email,
        username,
        publicEmail
      });

      if (response.message == 'success') {
        setStep(3);
      }
    } catch (e) {
      handleException(e);
    }
  };

  React.useEffect(() => {
    const routeEmail = window.location.search;
    if (routeEmail.split('=').length >= 2) {
      setEmail(routeEmail.split('=')[1]);
    }
  }, [email]);

  React.useEffect(() => {
    if (width) setHideLeftSide(width <= 1050);
  }, [width]);

  React.useEffect(() => {
    if (!validateEmail(email)) setEmailError(true);
    else if (validateEmail(email) === 1) setEmailError(false);
    else setEmailError(false);
  }, [email]);

  React.useEffect(() => {
    setUsernameError(username.length === 1);
  }, [username]);

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
      !emailError &&
      email &&
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
          <WelcomeTitle>{t('pages:signup.hello')}</WelcomeTitle>
          <WelcomeText>{t('pages:signup.welcome')}</WelcomeText>
          <WelcomeText>{t('pages:signup.welcomeText')}</WelcomeText>
        </Box>
      } rightSide={
        <>
          {step === 1 ? (
            <Box>
              <Title>{t('pages:signup.title')}</Title>

              <MarginWrapper>
                <Input
                  high={true}
                  onError={emailError}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('placeholders:inputs.email')}
                />
              </MarginWrapper>

              <MarginWrapper>
                <Input
                  high={true}
                  onError={usernameError}
                  onErrorMessage={t('placeholders:inputs.usernameError')}
                  value={username}
                  placeholder={t('placeholders:inputs.username')}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </MarginWrapper>

              <MarginWrapper>
                <Input
                  high={true}
                  onError={passwordError.passwordMismatch || passwordError.passwordRequirement}
                  value={password.password}
                  onChange={(e) => setPassword({ ...password, password: e.target.value })}
                  type={'password'}
                  placeholder={t('placeholders:inputs.password')}
                />
              </MarginWrapper>

              <MarginWrapper>
                <Input
                  high={true}
                  onError={passwordError.passwordMismatch || passwordError.passwordRequirement}
                  value={password.repeatPassword}
                  onChange={(e) => setPassword({ ...password, repeatPassword: e.target.value })}
                  type={'password'}
                  placeholder={t('placeholders:inputs.repeatPassword')}
                />
              </MarginWrapper>

              <MarginWrapper>
                <Checkbox
                  value={tac}
                  label={
                    <Tea>{t('pages:signup.iHaveRead')} <Link
                      onClick={() => handleRedirect('/terms-and-conditions')}>{t('pages:signup.tac')}</Link>
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
                  text={t('pages:signup.title')}
                />
              </MarginWrapper>

            </Box>
          ) : (step === 2 ? (
              <Box className={'scrollable'}>
                <MarginWrapper>
                  <HeaderSmall>{t('pages:signup.tellAbout')}</HeaderSmall>
                </MarginWrapper>
                <MarginWrapper>
                  <Paragraph>{t('pages:signup.skip')}</Paragraph>
                </MarginWrapper>

                <MarginWrapper>
                  <Input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t('pages:signup.firstName')}
                  />
                </MarginWrapper>

                <MarginWrapper>
                  <Input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t('pages:signup.lastName')}
                  />
                </MarginWrapper>

                <MarginWrapper>
                  <HeaderSmall>{t('pages:signup.nickOrLink')}</HeaderSmall>
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
                    placeholder={t('pages:signup.personalWebsite')}
                  />
                </MarginWrapper>

                <MarginWrapper>
                  <HeaderSmall>{t('pages:signup.tellTheWorld')}</HeaderSmall>
                </MarginWrapper>
                <hr/>

                <MarginWrapper>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={t('pages:signup.accTitle')}
                  />
                </MarginWrapper>
                <MarginWrapper>
                  <Textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder={t('pages:signup.bio')}
                  />

                </MarginWrapper>
                <Checkbox
                  value={publicEmail}
                  label={t('pages:signup.publicEmail')}
                  onChange={() => setPublicEmail(!publicEmail)}
                />

                <Buttons>
                  <Button text={t('pages:signup.back')} onClick={() => setStep(step - 1)}/>
                  <MarginVerticalWrapper>
                    <Button text={t('pages:signup.skipBtn')} onClick={() => signUpUser()}/>
                  </MarginVerticalWrapper>
                  <Button fillButton={true} text={t('pages:signup.next')} onClick={() => signUpUser()}/>
                </Buttons>
              </Box>
            ) : (
              <Box>
                <Title>{t('pages:signup.endWelcome')}</Title>
                <MarginWrapper>
                  <SubTitle>{t('pages:signup.successCreation')}</SubTitle>
                </MarginWrapper>
                <MarginWrapper>
                  <SubTitle>{t('pages:signup.checkEmail')}</SubTitle>
                </MarginWrapper>
                <MarginWrapper>
                  <Button fillButton={true} text={t('pages:signin.title')} onClick={() => handleRedirect('/signin')}/>
                </MarginWrapper>
              </Box>
            )
          )}
        </>
      } headerLink={
        <>
          {step === 1 &&
            <HeaderLink>{t('pages:signup.alreadyHave')} <Link
              onClick={() => handleRedirect('/signin')}
            >{t('pages:signup.signIn')}</Link></HeaderLink>
          }
        </>
      } rightDarkSide={true}
        locale={locale}
        loading={loading}
        leftSideHide={hideLeftSide}
      />
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors', 'placeholders']);
export { getStaticPaths, getStaticProps };

export default Signup;
