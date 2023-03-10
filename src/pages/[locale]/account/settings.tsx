import React from 'react';

import dayjs from 'dayjs';
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
import {
  INotificationSettings,
  IPersonalInformation,
  ISecuritySettings
} from '@services/get-user-settings/get-user-settings.interface';
import { useGetUserSettingsService } from '@services/get-user-settings/get-user-settings.service';
import {
  useSetUserNotificationSettingsService
} from '@services/set-user-notification-settings/set-user-notification-settings.service';
import { useSetPersonalUserSettingsService } from '@services/user-settings/set-user-personal-settings/set-user-personal-settings.service';
import {
  ButtonWrapper,
  Container, CreatedAtDate, CreatedAtParagraph,
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

  const { loading: l0, getUserSettings } = useGetUserSettingsService();
  const { loading: l1, closeAccount } = useCloseAccountService();
  const { loading: l2, freezeAccount } = useFreezeAccountService();
  const { loading: l3, setPersonalUserSettings } = useSetPersonalUserSettingsService();
  const { loading: l4, setUserNotificationSettings } = useSetUserNotificationSettingsService();

  const fetchSettingsRef = React.useRef(true);

  const [personalInformation, setPersonalInformation] = React.useState<IPersonalInformation>();
  const [notificationSettings, setNotificationSettings] = React.useState<INotificationSettings>();
  const [securitySettings, setSecuritySettings] = React.useState<ISecuritySettings>();

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
  const { handleException } = useHandleException();

  React.useEffect(() => {
    if (fetchSettingsRef.current) {
      fetchSettingsRef.current = false;
      const token = sessionStorage.getItem('_at');

      if (!token) handleRedirect('/').then();
      else fetchUserSettings(token).then();
    }
  }, []);

  const exceptionHandler = async (e: any) => {
    handleException(e);
    sessionStorage.removeItem('_at');
    await handleRedirect('/');
  };

  const fetchUserSettings = async (token: string) => {
    try {
      const { settings } = await getUserSettings({ token });

      setPersonalInformation(settings.personalInformation);
      setNotificationSettings(settings.notificationSettings);
      setSecuritySettings(settings.securitySettings);
    } catch (e) {
      return exceptionHandler(e);
    }
  };

  const applyPersonalInformation = async () => {
    try {
      const token = sessionStorage.getItem('_at');
      return await setPersonalUserSettings(token, { ...personalInformation });
    } catch (e) {
      return exceptionHandler(e);
    }
  };

  const applyNotificationSettings = async (userNotificationSettings: INotificationSettings) => {
    try {
      const token = sessionStorage.getItem('_at');
      const response = await setUserNotificationSettings(token, { ...notificationSettings });
    } catch (e) {
      return exceptionHandler(e);
    }
  };

  const fetchCloseUserAccount = async () => {
    try {
      const token = sessionStorage.getItem('_at');
      const response = await closeAccount({ token });
    } catch (e) {
      return exceptionHandler(e);
    }
  };

  const fetchFreezeUserAccount = async () => {
    try {
      const token = sessionStorage.getItem('_at');
      const response = await freezeAccount({ token });
    } catch (e) {
      return exceptionHandler(e);
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
      <DefaultLayout locale={locale} translate={t} loading={l0 || l1 || l2 || l3 || l4}>
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
                    <Nickname>{personalInformation?.username} ({securitySettings?.email})</Nickname>
                    <PersonalAccount>{t('pages:settings.yourPersonalAcc')}</PersonalAccount>
                  </SettingsHeaderTextWrapper>
                </SettingsHeaderItemsWrapper>
              </SettingsPageHeaderSide>

              <SettingsHeaderItemsWrapper className={'created-at'}>
                <SettingsHeaderTextWrapper>
                  <CreatedAtParagraph>{t('placeholders:inputs.accCreateAt')}</CreatedAtParagraph>
                  <CreatedAtDate>{dayjs(personalInformation?.createdAt).format('YYYY-MM-DD')}</CreatedAtDate>
                </SettingsHeaderTextWrapper>
              </SettingsHeaderItemsWrapper>
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
                    onClick={() => fetchCloseUserAccount()}
                    danger={true}
                  />
                </ButtonWrapper>
                <ButtonWrapper>
                  <Button
                    text={t('placeholders:inputs.close')}
                    onClick={() => fetchCloseUserAccount()}
                    fillDanger={true}
                  />
                </ButtonWrapper>
              </SidebarContainer>
              <SettingsContent>
                {section === 'personalInformation' ? (
                  <PersonalInformation
                    translate={t}
                    personalInformation={personalInformation}
                    setPersonalInformation={setPersonalInformation}
                    applyPersonalInformation={applyPersonalInformation}
                  />
                ) : (section === 'notificationSettings' ? (
                  <NotificationSettings
                    translate={t}
                    notificationSettings={notificationSettings}
                    setNotificationSettings={setNotificationSettings}
                    applyNotificationSettings={applyNotificationSettings}
                  />
                ) : (
                  <SecuritySettings
                    locale={locale}
                    translate={t}
                    securitySettings={securitySettings}
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
