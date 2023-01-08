import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import { useWindowDimensions } from '@hooks/useGetWindowDimensions.hook';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  Box,
  Container,
  ContentContainer,
  Header,
  Headers,
  TextContainer,
  TextContainerContent,
  TextContainerSubtitle,
  TextContainerTitle, Web3,
  Wrapper
} from '@styles/about.style';
import { ButtonText, InputWrapper, StartButton } from '@styles/home.style';

interface AboutProps {
  locale: string
}

const About = ({ locale }: AboutProps) => {
  const { t } = useTranslation();
  const { height, width } = useWindowDimensions();

  const [pictureSide, setPictureSize] = React.useState(600);

  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  React.useEffect(() => {
    if (width && width <= 1300) setPictureSize(300);
    else setPictureSize(600);
  }, [width]);

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:about.title')}</title>
      </Head>
      <DefaultLayout locale={locale} translate={t}>
        <Container>
          <Box>
            <Wrapper>
              <Headers>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(t('pages:about.theFutureIs'))
                      .typeString(`<strong>${t('pages:about.here')}</strong>`)
                      .start();
                  }}
                />
              </Headers>
              <Headers>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2500)
                      .typeString(t('pages:about.theFutureIs'))
                      .typeString(`<strong>${t('pages:about.now')}</strong>`)
                      .start();
                  }}
                />
              </Headers>
            </Wrapper>
            <Wrapper>
              <Web3>WEB<Header>3</Header></Web3>
            </Wrapper>
          </Box>
        </Container>

        <ContentContainer className={'light'}>
          <TextContainer>
            <TextContainerTitle>{t('pages:about.welcome')}</TextContainerTitle>
            <TextContainerSubtitle>{t('pages:about.realWeb3')}</TextContainerSubtitle>
            <TextContainerContent><strong>{t('pages:about.crypto')}</strong> {t('pages:about.cryptoDistrictIntro')}</TextContainerContent>
            <TextContainerContent>{t('pages:about.marketPlace')}</TextContainerContent>
          </TextContainer>
          <Image className={'asset'} src={'/img/user-interface.gif'} alt={'user-interface'} width={pictureSide} height={pictureSide}/>
        </ContentContainer>

        <ContentContainer>
          <Image className={'asset'} src={'/img/web-address-registration.gif'} alt={'web-address-registration'} width={pictureSide} height={pictureSide}/>
          <TextContainer className={'end'}>
            <TextContainerTitle>{t('pages:about.web3important')}</TextContainerTitle>
            <TextContainerSubtitle>{t('pages:about.futureOfMoney')}</TextContainerSubtitle>
            <TextContainerContent className={'end'}>{t('pages:about.centrlization')}</TextContainerContent>
            <TextContainerContent className={'end'}>{t('pages:about.centrlization2')}</TextContainerContent>
            <TextContainerContent className={'end'}>{t('pages:about.centrlization3')}</TextContainerContent>
          </TextContainer>
        </ContentContainer>

        <ContentContainer className={'light'}>
          <TextContainer>
            <TextContainerTitle>{t('pages:about.chains')}</TextContainerTitle>
            <TextContainerSubtitle>{t('pages:about.blockOnly')}</TextContainerSubtitle>
            <TextContainerContent>{t('pages:about.blockchain')}</TextContainerContent>
            <TextContainerContent>{t('pages:about.blockchain2')}</TextContainerContent>
          </TextContainer>
          <Image className={'asset'} src={'/img/web-designer-setting-up-web-layout.gif'}
                 alt={'web-designer-setting-up-web-layout'} width={pictureSide} height={pictureSide}/>
        </ContentContainer>

        <ContentContainer className={'end'}>
          <TextContainer className={'center'}>
            <TextContainerTitle>{t('pages:about.interested')}</TextContainerTitle>
            <TextContainerSubtitle>{t('pages:about.dive')}</TextContainerSubtitle>
            <InputWrapper>
              <StartButton className={'aboutPage'} onClick={() => handleRedirect('/signup')}>
                <ButtonText>
                  {t('pages:about.letIn')}
                </ButtonText>
              </StartButton>
            </InputWrapper>
          </TextContainer>
        </ContentContainer>

      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'errors']);
export { getStaticPaths, getStaticProps };

export default About;
