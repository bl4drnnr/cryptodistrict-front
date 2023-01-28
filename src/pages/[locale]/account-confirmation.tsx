import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useHandleException } from '@hooks/useHandleException.hook';
import CredentialsLayout from '@layouts/Credentials.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { useAccountConfirmationService } from '@services/account-confirmation/account-confirmation.service';
import { HeaderLink, Link } from '@styles/login.style';


interface AccountConfirmationProps {
  locale: string;
}

const AccountConfirmation = ({ locale }: AccountConfirmationProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { handleException } = useHandleException();
  const { loading, confirmAccount } = useAccountConfirmationService();

  const [confirmationStatus, setConfirmationStatus] = React.useState(1);

  React.useEffect(() => {
    const routePath = window.location.search;
    const hash = routePath.split('=');
    if (
      hash.length == 2 &&
      hash[0] == '?confirmationHash'
    ) {
      confirmAccountRegistration(hash[1]).then((res) => {
        console.log('res', res);
      });
    }
  }, []);

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  const confirmAccountRegistration = async (hash: string) => {
    try {
      // return await confirmAccount({ hash });
    } catch (e) {
      handleException(e);
    }
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:confirmacc.title')}</title>
      </Head>
      <CredentialsLayout
        leftSide={<></>}
        rightSide={<></>}
        headerLink={
          <>
            <HeaderLink><Link onClick={() => handleRedirect('/signin')}
            >{t('pages:signup.signIn')}</Link></HeaderLink>
          </>
        }
        locale={locale}
        loading={loading}
        rightDarkSide={true}
      />
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default AccountConfirmation;
