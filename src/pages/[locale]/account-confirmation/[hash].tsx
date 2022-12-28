import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import CredentialsLayout from '@layouts/Credentials.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { useAccountConfirmationService } from '@services/account-confirmation/account-confirmation.service';


interface AccountConfirmationProps {
  locale: string;
}

const AccountConfirmation = ({ locale }: AccountConfirmationProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  // const { hash } = router.query;

  const { loading, confirmAccount } = useAccountConfirmationService();

  React.useEffect(() => {
    // confirmAccount({ hash }).then(({ message }) => {
    // console.log('hash', hash);
    // });
  }, []);

  const handleRedirect = async (path: string) => {

    await router.push(path);
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:confirmacc.title')}</title>
      </Head>
      <CredentialsLayout
        leftSide={<></>}
        rightSide={<></>}
        headerLink={<></>}
        locale={locale}
        loading={loading}
      />
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components', 'errors']);
export { getStaticProps };

export default AccountConfirmation;
