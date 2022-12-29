import React from 'react';


import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Input } from '@components/Input/Input.component';
import { Widget } from '@components/Widget/Widget.component';
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
  Line,
  Lines,
  StartButton
} from '@styles/home.style';


interface HomeProps {
  locale: string;
}

const Home: NextPage<HomeProps> = ({ locale }: HomeProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [email, setEmail] = React.useState('');

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <DefaultLayout locale={locale} translate={t}>
      <Head>
        <title>Cryptodistrict | {t('pages:home.title')}</title>
      </Head>
      <HomeWelcomeContainer>
        <HomeWelcomeBox className={'name'}>
          <HomeWelcomeTitle><Bold>CRYPTODISTRICT</Bold></HomeWelcomeTitle>
        </HomeWelcomeBox>

        <HomeWelcomeBox>
          <HomeWelcomeTitle>
            WHERE WE MAKE <BoldWeb3 onClick={() => handleRedirect('/about')}>WEB3</BoldWeb3> REAL
          </HomeWelcomeTitle>
        </HomeWelcomeBox>

        <HomeWelcomeBox className={'block'}>
          <InputWrapper>
            <Input
              high={true}
              value={email}
              placeholder={'The only thing we need, is your email address'}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <StartButton onClick={() => handleRedirect(`/signup?email=${email}`)}>
              <ButtonText>
                HERE WE GO
              </ButtonText>
            </StartButton>
          </InputWrapper>
        </HomeWelcomeBox>

        <Lines>
          {[...Array(7)].map((x, i) =>
            <Line key={i}/>
          )}
        </Lines>
      </HomeWelcomeContainer>

      <HomeWelcomeContainer className={'light'}>
        <ImageBlock>
          <CryptoDescriptionContainer>
            <CryptoDescriptionBox>
              <CryptoDescriptionHeader>{t('pages:home.familiarIcons')}</CryptoDescriptionHeader>
              <CryptoDescriptionHeader className={'subHeader'}>
                Those are the most popular and well-known cryptocurrencies and you are in the place where you can buy,
                sell, swap, hold or send these (and not only) cryptocurrencies
              </CryptoDescriptionHeader>
              <StartButton onClick={() => handleRedirect(`/signup?email=${email}`)}>
                <ButtonText>
                  Really? Show me more then!
                </ButtonText>
              </StartButton>
            </CryptoDescriptionBox>
          </CryptoDescriptionContainer>

          <Image className={'image eth'} src={'/img/ethereum.png'} alt={'eth'} width={400} height={400}/>
          <Image className={'image usdt'} src={'/img/tether.png'} alt={'tether'} width={400} height={400}/>
          <Image className={'image btc'} src={'/img/bitcoin.png'} alt={'btc'} width={400} height={400}/>
          <Image className={'image ltc'} src={'/img/litecoin.png'} alt={'ltc'} width={400} height={400}/>

        </ImageBlock>
      </HomeWelcomeContainer>

      <HomeWelcomeContainer className={'dark'}>
        <ImageBlock className={'mirrored'}>
          <div>
            <Image className={'image-nft contract'} src={'/img/contract.png'} alt={'contract'} width={500}
                   height={500}/>
            <Image className={'image-nft metamask'} src={'/img/metamask.png'} alt={'metamask'} width={500}
                   height={500}/>
            <Image className={'image-nft crypto-creation'} src={'/img/crypto-creation.png'} alt={'crypto-creation'}
                   width={500} height={500}/>
          </div>

          <CryptoDescriptionContainer>
            <CryptoDescriptionBox>
              <CryptoDescriptionHeader>{t('pages:home.nft')}</CryptoDescriptionHeader>
              <CryptoDescriptionHeader className={'subHeader'}>
                We bet you definitely have heard about this modern form of digital art? You ask if you have got a
                couple? You God damn right!
              </CryptoDescriptionHeader>
              <StartButton onClick={() => handleRedirect(`/signup?email=${email}`)}>
                <ButtonText>
                  Oh! You have got this also?
                </ButtonText>
              </StartButton>
            </CryptoDescriptionBox>
          </CryptoDescriptionContainer>

        </ImageBlock>
      </HomeWelcomeContainer>

      <Widget/>
    </DefaultLayout>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default Home;
