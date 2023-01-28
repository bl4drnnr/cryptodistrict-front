import React from 'react';


import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Input } from '@components/Input/Input.component';
import { Widget } from '@components/Widget/Widget.component';
import { useWindowDimensions } from '@hooks/useGetWindowDimensions.hook';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  Bold,
  BoldWeb3,
  ButtonText,
  CryptoDescriptionBox,
  CryptoDescriptionContainer,
  CryptoDescriptionHeader,
  HomeWelcomeBox,
  HomeWelcomeContainer,
  HomeWelcomeTitle,
  ImageBlock,
  InputWrapper,
  ItemsWrapper,
  Line,
  Lines,
  MainHomeWelcomeContainer,
  StartButton
} from '@styles/home.style';


interface HomeProps {
  locale: string;
}

const Home: NextPage<HomeProps> = ({ locale }: HomeProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const { height, width } = useWindowDimensions();
  const [pictureSize, setPictureSize] = React.useState({
    crypto: 400, ntf: 500
  });

  const [email, setEmail] = React.useState('');

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  React.useEffect(() => {
    if (width && width < 1200) setPictureSize({ crypto: 200, ntf: 200 });
    else setPictureSize({ crypto: 400, ntf: 500 });
  }, [width]);

  return (
    <DefaultLayout locale={locale} translate={t}>
      <Head>
        <title>Cryptodistrict | {t('pages:home.title')}</title>
      </Head>
      <MainHomeWelcomeContainer>
        <HomeWelcomeBox className={'name'}>
          <HomeWelcomeTitle><Bold>CRYPTODISTRICT</Bold></HomeWelcomeTitle>
        </HomeWelcomeBox>

        <HomeWelcomeBox>
          <HomeWelcomeTitle>
            {t('pages:home.whereWeMake')} <BoldWeb3 onClick={() => handleRedirect('/about')}>WEB3</BoldWeb3> {t('pages:home.real')}
          </HomeWelcomeTitle>
        </HomeWelcomeBox>

        <HomeWelcomeBox className={'block'}>
          <InputWrapper>
            <Input
              high={true}
              value={email}
              placeholder={t('pages:home.onlyEmail')}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <StartButton onClick={() => handleRedirect(`/signup?email=${email}`)}>
              <ButtonText>
                {t('pages:home.hereWeGo')}
              </ButtonText>
            </StartButton>
          </InputWrapper>
        </HomeWelcomeBox>

        <Lines>
          {[...Array(7)].map((x, i) =>
            <Line key={i}/>
          )}
        </Lines>
      </MainHomeWelcomeContainer>

      <HomeWelcomeContainer className={'light'}>
        <ItemsWrapper>
          <CryptoDescriptionContainer>
            <CryptoDescriptionBox>
              <CryptoDescriptionHeader>{t('pages:home.familiarIcons')}</CryptoDescriptionHeader>
              <CryptoDescriptionHeader className={'subHeader'}>
                {t('pages:home.popularCoins')}
              </CryptoDescriptionHeader>
              <StartButton onClick={() => handleRedirect(`/signup?email=${email}`)}>
                <ButtonText>
                  {t('pages:home.showMore')}
                </ButtonText>
              </StartButton>
            </CryptoDescriptionBox>
          </CryptoDescriptionContainer>

          <ImageBlock>
            <Image className={'image eth'} src={'/img/ethereum.png'} alt={'eth'} width={pictureSize.crypto} height={pictureSize.crypto}/>
            <Image className={'image usdt'} src={'/img/tether.png'} alt={'tether'} width={pictureSize.crypto} height={pictureSize.crypto}/>
            <Image className={'image btc'} src={'/img/bitcoin.png'} alt={'btc'} width={pictureSize.crypto} height={pictureSize.crypto}/>
            <Image className={'image ltc'} src={'/img/litecoin.png'} alt={'ltc'} width={pictureSize.crypto} height={pictureSize.crypto}/>
          </ImageBlock>
        </ItemsWrapper>
      </HomeWelcomeContainer>

      <HomeWelcomeContainer className={'dark'}>
        <ItemsWrapper>
          <ImageBlock>
            <Image className={'image-nft contract'} src={'/img/contract.png'} alt={'contract'} width={pictureSize.ntf} height={pictureSize.ntf}/>
            <Image className={'image-nft metamask'} src={'/img/metamask.png'} alt={'metamask'} width={pictureSize.ntf} height={pictureSize.ntf}/>
            <Image className={'image-nft crypto-creation'} src={'/img/crypto-creation.png'} alt={'crypto-creation'}  width={pictureSize.ntf} height={pictureSize.ntf}/>
          </ImageBlock>

          <CryptoDescriptionContainer>
            <CryptoDescriptionBox className={'mirrored'}>
              <CryptoDescriptionHeader>{t('pages:home.nft')}</CryptoDescriptionHeader>
              <CryptoDescriptionHeader className={'subHeader'}>
                {t('pages:home.digitalArt')}
              </CryptoDescriptionHeader>
              <StartButton onClick={() => handleRedirect('/coming-soon')}>
                <ButtonText>
                  {t('pages:home.gotThis')}
                </ButtonText>
              </StartButton>
            </CryptoDescriptionBox>
          </CryptoDescriptionContainer>
        </ItemsWrapper>
      </HomeWelcomeContainer>

      <Widget/>
    </DefaultLayout>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default Home;
