import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import NotificationSettings from '@components/account-settings/NotificationSettings/NotificationSettings.component';
import PersonalInformation from '@components/account-settings/PersonalInformation/PersonalInformation.component';
import SecuritySettings from '@components/account-settings/SecuritySettings/SecuritySettings.component';
import { Button } from '@components/Button/Button.component';
import { useHandleException } from '@hooks/useHandleException.hook';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { useCloseAccountService } from '@services/close-account/close-account.service';
import { useFreezeAccountService } from '@services/freeze-account/freeze-account.service';
import { ISettings } from '@services/get-user-settings/get-user-settings.interface';
import { useGetUserSettingsService } from '@services/get-user-settings/get-user-settings.service';
import {
  ButtonWrapper,
  Container,
  Nickname,
  PersonalAccount,
  SettingsContainer,
  SettingsContent,
  SettingsHeaderItemsWrapper,
  SettingsHeaderTextWrapper,
  SettingsPageHeader,
  SettingsPageHeaderSide,
  SidebarContainer,
  UserProfilePicture,
  Wrapper
} from '@styles/settings.style';

interface AccountSettingsProps {
  locale: string;
}

const AccountSettings = ({ locale }: AccountSettingsProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const { loading: l1, closeAccount } = useCloseAccountService();
  const { loading: l2, freezeAccount } = useFreezeAccountService();

  const fetchSettingsRef = React.useRef(true);
  const [userSettings, setUserSettings] = React.useState<ISettings>();
  const [section, setSection] = React.useState('personalInformation');
  const [sections, ] = React.useState([
    { value: 'personalInformation',
      text: t('placeholders:inputs.personalInformation'),
      danger: false
    }, {
      value: 'notificationSettings',
      text: t('placeholders:inputs.notificationSettings'),
      danger: false
    }, {
      value: 'securitySettings',
      text: t('placeholders:inputs.securitySettings'),
      danger: false
    }
  ]);
  const { loading, getUserSettings } = useGetUserSettingsService();
  const { handleException } = useHandleException();

  React.useEffect(() => {
    if (fetchSettingsRef.current) {
      fetchSettingsRef.current = false;
      const token = sessionStorage.getItem('_at');

      if (!token) handleRedirect('/').then();
      else fetchUserSettings(token).then();
    }
  }, []);

  const fetchUserSettings = async (token: string) => {
    try {
      const { settings } = await getUserSettings({ token });
      setUserSettings(settings);
    } catch (e) {
      handleException(e);
      sessionStorage.removeItem('_at');
      await handleRedirect('/');
    }
  };

  const fetchCloseUserAccount = async () => {
    try {

    } catch (e) {
      handleException(e);
    }
  };

  const fetchFreezeUserAccount = async () => {
    try {

    } catch (e) {
      handleException(e);
    }
  };

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:settings.title')}</title>
      </Head>
      <DefaultLayout locale={locale} translate={t} loading={loading}>
        <Container>
          <Wrapper>

            <SettingsPageHeader>
              <SettingsPageHeaderSide
                onClick={() => handleRedirect('/account')}
              >
                <UserProfilePicture>
                  <Image className={'ava'} src={'/img/testava.jpg'} alt={'ava'} width={128} height={128}/>
                </UserProfilePicture>

                <SettingsHeaderItemsWrapper>
                  <SettingsHeaderTextWrapper>
                    <Nickname>bl4drnnr</Nickname>
                    <PersonalAccount>{t('pages:settings.yourPersonalAcc')}</PersonalAccount>
                  </SettingsHeaderTextWrapper>
                </SettingsHeaderItemsWrapper>
              </SettingsPageHeaderSide>

            </SettingsPageHeader>

            <SettingsContainer>
              <SidebarContainer>
                {sections.map(item => (
                  <ButtonWrapper key={item.value}>
                    <Button
                      text={item.text}
                      fillButton={section === item.value}
                      onClick={() => setSection(item.value)}
                    />
                  </ButtonWrapper>
                ))}
                <ButtonWrapper>
                  <Button
                    text={t('placeholders:inputs.freeze')}
                    onClick={() => {}}
                    danger={true}
                  />
                </ButtonWrapper>
                <ButtonWrapper>
                  <Button
                    text={t('placeholders:inputs.close')}
                    onClick={() => {}}
                    fillDanger={true}
                  />
                </ButtonWrapper>
              </SidebarContainer>
              <SettingsContent>
                {section === 'personalInformation' ? (
                  <PersonalInformation
                    locale={locale}
                    translate={t}
                    personalInformation={userSettings?.personalInformation}
                  />
                ) : (section === 'notificationSettings' ? (
                  <NotificationSettings
                    locale={locale}
                    translate={t}
                    notificationSettings={userSettings?.notificationSettings}
                  />
                ) : (
                  <SecuritySettings
                    locale={locale}
                    translate={t}
                    securitySettings={userSettings?.securitySettings}
                  />
                ))}
              </SettingsContent>
            </SettingsContainer>

          </Wrapper>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors', 'placeholders']);
export { getStaticPaths, getStaticProps };

export default AccountSettings;
