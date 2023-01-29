import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import React from "react";
import Head from "next/head";
import DefaultLayout from "@layouts/Default.layout";

interface AccountSettingsProps {
  locale: string;
}

const AccountSettings = ({ locale }: AccountSettingsProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  React.useEffect(() => {
    const token = sessionStorage.getItem('_at');

    if (!token) handleRedirect('/').then();
  }, []);

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:account.settingsTitle')}</title>
      </Head>
      <DefaultLayout locale={locale} translate={t}>
        <></>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors', 'placeholders']);
export { getStaticPaths, getStaticProps };

export default AccountSettings;
