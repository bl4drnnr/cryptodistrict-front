import React from 'react';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import DefaultLayout from '@layouts/Default.layout';
import { useCheckTokenService } from '@services/check-token/check-token.service';
import { useRefreshTokenService } from '@services/refresh-token/refresh-token.service';

interface AccountProps {
  locale: string;
}

const Account = ({ locale }: AccountProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const { loading: l1, checkToken } = useCheckTokenService();
  const { loading: l2, refreshToken } = useRefreshTokenService();

  React.useEffect(() => {
    const token = sessionStorage.getItem('_at');

    if (!token) handleRedirect('/').then();
    else {
      checkUser(token).then((res) => {
        //
      });
    }
  }, []);

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  const checkUser = async (token: string) => {
    //
  };

  return (
    <DefaultLayout locale={locale} translate={t}>
      <></>
    </DefaultLayout>
  );
};

export default Account;
