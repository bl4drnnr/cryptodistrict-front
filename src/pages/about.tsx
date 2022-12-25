import DefaultLayout from "@layouts/Default.layout";
import {
  Box,
  Container,
  ContentContainer,
  Header,
  Headers,
  Test,
  TextBox, TextContainer, TextContainerContent, TextContainerSubtitle, TextContainerTitle,
  Wrapper
} from "@styles/about.style";
import Typewriter from 'typewriter-effect';
import Image from "next/image";

const About = () => {
  return (
    <DefaultLayout pageTitle={'About'}>
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
        <Image className={'asset'} src={'/blockchain.svg'} alt={''} width={512} height={512}/>
      </ContentContainer>

      <ContentContainer>
        <Image className={'asset'} src={'/cloud-computing.svg'} alt={''} width={512} height={512}/>
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
        <Image className={'asset'} src={'/currency-chain.svg'} alt={''} width={512} height={512}/>
      </ContentContainer>

    </DefaultLayout>
  )
}

export default About
