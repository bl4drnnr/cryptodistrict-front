import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useHandleException } from '@hooks/useHandleException.hook';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { useGetUserSettingsService } from '@services/get-user-settings/get-user-settings.service';


interface AccountSettingsProps {
  locale: string;
}

const AccountSettings = ({ locale }: AccountSettingsProps) => {
  const { t } = useTranslation();
  const router = useRouter();

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
      console.log('response', response);
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
        <title>Cryptodistrict | {t('pages:account.settingsTitle')}</title>
      </Head>
      <DefaultLayout locale={locale} translate={t} loading={loading}>
        <></>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors', 'placeholders']);
export { getStaticPaths, getStaticProps };

export default AccountSettings;
