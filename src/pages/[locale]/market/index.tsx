import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

import { useHandleException } from '@hooks/useHandleException.hook';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { ICoin } from '@services/all-crypto/all-crypto.interface';
import { useGetAllCryptoService } from '@services/all-crypto/all-crypto.services';
import {
  Container,
  CryptoItem,
  CryptoItemSide, CryptoName, CryptoNames, CryptoSymbol,
  MarketDescription,
  MarketDescriptionOverview,
  MarketDescriptionTitle,
  SortBar,
  SortItem,
  Wrapper
} from '@styles/market.style';

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
  const [currentSort, setCurrentSort] = React.useState({
    name: 'sortByName',
    value: t('placeholders:inputs.sortByName')
  });
  const [sorts, setSorts] = React.useState([
    {
      name: 'sortByName',
      value: t('placeholders:inputs.sortByName')
    }, {
      name: 'sortByTier',
      value: t('placeholders:inputs.sortByTier')
    }, {
      name: 'sortByRank',
      value: t('placeholders:inputs.sortByRank')
    }, {
      name: 'sortByCap',
      value: t('placeholders:inputs.sortByCap')
    }
  ]);

  const { loading: l0, getAllCrypto } = useGetAllCryptoService();

  React.useEffect(() => {
    fetchCryptocurrencies({ page, limit }).then();
  }, [page, limit, currentSort]);

  const fetchCryptocurrencies = async ({
   page,
   limit
  }: {
    page: number;
    limit: number
  }) => {
    try {
      const { coins } = await getAllCrypto({ page, limit, sort: currentSort.name });

      const parsedCoins = coins.map((item) => {
        const splitSparklines = item.sparkline.split(',');
        const parsedSparklines = splitSparklines.map((item: any, index: number) => ({
          name: index.toString(),
          value: parseFloat(item).toFixed(8)
        }));
        return {
          ...item,
          sparkline: parsedSparklines,
          price: parseFloat(item.price).toFixed(8)
        };
      });

      setCryptoList(parsedCoins);
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
        <title>Cryptodistrict | {t('pages:market.title')}</title>
      </Head>
      <DefaultLayout locale={locale} translate={t} loading={l0}>
        <Container>
          <Wrapper>
            <MarketDescription>
              <MarketDescriptionTitle>
                {t('pages:market.marketDescriptionTitle')}
              </MarketDescriptionTitle>
              <MarketDescriptionOverview>
                {t('pages:market.marketDescriptionOverview')}
              </MarketDescriptionOverview>
            </MarketDescription>
            <SortBar>
              {sorts.map((item) => (
                <SortItem
                  className={currentSort.name === item.name ? 'active': ''}
                  key={item.name}
                  onClick={() => setCurrentSort(item)}
                >
                  {item.value}
                </SortItem>
              ))}
            </SortBar>

            {cryptoList && (
              <>
                {cryptoList.map((item) =>
                  <CryptoItem key={item.id}>

                    <CryptoItemSide>
                      <Image src={item.iconUrl} alt={item.name} width={48} height={48} />
                      <CryptoNames>
                        <CryptoSymbol>{item.symbol}</CryptoSymbol>
                        <CryptoName>{item.name}</CryptoName>
                      </CryptoNames>
                    </CryptoItemSide>

                    <CryptoSymbol>{item.price}</CryptoSymbol>
                    <CryptoSymbol>{item.marketCap}</CryptoSymbol>

                    <LineChart
                      width={500}
                      height={80}
                      data={item.sparkline}
                    >
                      <YAxis
                        hide={true}
                        type={'number'}
                        domain={[
                          Math.min(...item.sparkline.map((o: any) => o.value)),
                          Math.max(...item.sparkline.map((o: any) => o.value))
                        ]} />
                      <XAxis hide={true} />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>

                  </CryptoItem>
                )}
              </>
            )}
          </Wrapper>
        </Container>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors', 'placeholders']);
export { getStaticPaths, getStaticProps };

export default Market;
