import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button } from '@components/Button/Button.component';
import { useHandleException } from '@hooks/useHandleException.hook';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
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

  const [section, setSection] = React.useState('personalInformation');
  const [sections, ] = React.useState([
    { value: 'personalInformation', text: t('placeholders:inputs.personalInformation') },
    { value: 'notificationSettings', text: t('placeholders:inputs.notificationSettings') },
    { value: 'securitySettings', text: t('placeholders:inputs.securitySettings') }
  ]);
  const { loading, getUserSettings } = useGetUserSettingsService();
  const { handleException } = useHandleException();

  React.useEffect(() => {
    const token = sessionStorage.getItem('_at');

    if (!token) handleRedirect('/').then();
    else fetchUserSettings(token).then();
  }, []);

  const fetchUserSettings = async (token: string) => {
    try {
      const response = await getUserSettings({ token });
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
              <SettingsPageHeaderSide>
                <UserProfilePicture>
                  <Image className={'ava'} src={'/img/testava.jpg'} alt={'ava'} width={140} height={140}/>
                </UserProfilePicture>

                <SettingsHeaderItemsWrapper>
                  <SettingsHeaderTextWrapper>
                    <Nickname>bl4drnnr</Nickname>
                    <PersonalAccount>{t('pages:settings.yourPersonalAcc')}</PersonalAccount>
                  </SettingsHeaderTextWrapper>
                </SettingsHeaderItemsWrapper>
              </SettingsPageHeaderSide>

              <SettingsHeaderItemsWrapper>
                <Button
                  text={'Go back to profile'}
                  fillButton={true}
                  onClick={() => handleRedirect('/account')}
                />
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
              </SidebarContainer>
              <SettingsContent></SettingsContent>
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
