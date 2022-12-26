import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  Box,
  Container,
  ContentContainer,
  Header,
  Headers,
  Test,
  TextContainer,
  TextContainerContent,
  TextContainerSubtitle,
  TextContainerTitle,
  Wrapper
} from '@styles/about.style';
import { ButtonText, InputWrapper, StartButton } from '@styles/home.style';

interface AboutProps {
  locale: string
}

const About = ({ locale }: AboutProps) => {
  const { t } = useTranslation();

  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>Cryptodistrict | {t('pages:about.title')}</title>
      </Head>
      <DefaultLayout locale={locale}>
        <Container>
          <Box>
            <Wrapper>
              <Headers>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('THE FUTURE IS ')
                      .typeString('<strong>HERE</strong>')
                      .start();
                  }}
                />
              </Headers>
              <Headers>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2500)
                      .typeString('THE FUTURE IS ')
                      .typeString('<strong>NOW</strong>')
                      .start();
                  }}
                />
              </Headers>
            </Wrapper>
            <Wrapper>
              <Test>WEB<Header>3</Header></Test>
            </Wrapper>
          </Box>
        </Container>

        <ContentContainer className={'light'}>
          <TextContainer>
            <TextContainerTitle>Welcome to Cryptodistrict</TextContainerTitle>
            <TextContainerSubtitle>Place, where we want to make WEB3 real</TextContainerSubtitle>
            <TextContainerContent><strong>Cryptodiscrict</strong> is the place where we truly believe in WEB3 ideas and try to make it easier and more available to everyone to touch future of digital currencies and the Internet.</TextContainerContent>
            <TextContainerContent>This marketplace is just another tool that wants to give users new experience of cryptomarketplace usage.</TextContainerContent>
          </TextContainer>
          <Image className={'asset'} src={'/img/blockchain.svg'} alt={'blockchain'} width={400} height={400}/>
        </ContentContainer>

        <ContentContainer>
          <Image className={'asset'} src={'/img/cloud-computing.svg'} alt={'cloud-computing'} width={400} height={400}/>
          <TextContainer className={'end'}>
            <TextContainerTitle>Why is WEB3 important?</TextContainerTitle>
            <TextContainerSubtitle>Future of money, money of future</TextContainerSubtitle>
            <TextContainerContent className={'end'}>Centralization has helped onboard billions of people to the World Wide Web and created the stable, robust infrastructure on which it lives. At the same time, a handful of centralized entities have a stronghold on large swathes of the World Wide Web, unilaterally deciding what should and should not be allowed.</TextContainerContent>
            <TextContainerContent className={'end'}>Web3 is the answer to this dilemma. Instead of a Web monopolized by large technology companies, Web3 embraces decentralization and is being built, operated, and owned by its users. Web3 puts power in the hands of individuals rather than corporations. Before we talk about Web3, let&apos;s explore how we got here.</TextContainerContent>
          </TextContainer>
        </ContentContainer>

        <ContentContainer className={'light'}>
          <TextContainer>
            <TextContainerTitle>Get rid off chains</TextContainerTitle>
            <TextContainerSubtitle>We want only blocks one</TextContainerSubtitle>
            <TextContainerContent>As well as owning your data in Web3, you can own the platform as a collective, using tokens that act like shares in a company. DAOs let you coordinate decentralized ownership of a platform and make decisions about its future.</TextContainerContent>
            <TextContainerContent>DAOs are defined technically as agreed-upon smart contracts that automate decentralized decision-making over a pool of resources (tokens). Users with tokens vote on how resources get spent, and the code automatically performs the voting outcome.</TextContainerContent>
          </TextContainer>
          <Image className={'asset'} src={'/img/currency-chain.svg'} alt={'currency-chain'} width={400} height={400}/>
        </ContentContainer>

        <ContentContainer>
          <TextContainer className={'center'}>
            <TextContainerTitle>Interested? Huh...</TextContainerTitle>
            <TextContainerSubtitle>Let&apos;s dive into right now</TextContainerSubtitle>
            <InputWrapper>
              <StartButton className={'aboutPage'} onClick={() => handleRedirect('/signup')}>
                <ButtonText>
                  SURE, LET ME IN
                </ButtonText>
              </StartButton>
            </InputWrapper>
          </TextContainer>
        </ContentContainer>

      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'common', 'components']);
export { getStaticPaths, getStaticProps };

export default About;
