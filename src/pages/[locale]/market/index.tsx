import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useHandleException } from '@hooks/useHandleException.hook';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { ICoin } from '@services/all-crypto/all-crypto.interface';
import { useGetAllCryptoService } from '@services/all-crypto/all-crypto.services';
import { Container, Wrapper } from '@styles/market.style';

interface AccountProps {
  locale: string;
}

const Market = ({ locale }: AccountProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const { handleException } = useHandleException();

  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [cryptoList, setCryptoList] = React.useState<ICoin[]>();

  const { loading: l0, getAllCrypto } = useGetAllCryptoService();

  React.useEffect(() => {
    fetchCryptocurrencies({ page, limit }).then();
  });

  const fetchCryptocurrencies = async ({ page, limit }: { page: number; limit: number }) => {
    try {
      const { coins } = await getAllCrypto({ page, limit });
      setCryptoList(coins);
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
        <title>Cryptodistrict | {t('pages:account.title')}</title>
      </Head>
      <DefaultLayout locale={locale} translate={t}>
        <Container>
          <Wrapper>
          </Wrapper>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors', 'placeholders']);
export { getStaticPaths, getStaticProps };

export default Market;
