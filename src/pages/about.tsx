import DefaultLayout from "@layouts/Default.layout";
import { Box, Container, Header, Headers, Test, Wrapper } from "@styles/about.style";
import Typewriter from 'typewriter-effect';

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
    </DefaultLayout>
  )
}

export default About
