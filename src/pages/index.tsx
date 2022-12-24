import DefaultLayout from '@layouts/Default.layout';
import {
  Bold,
  BoldWeb3,
  ButtonText,
  HomeWelcomeBox,
  HomeWelcomeContainer,
  HomeWelcomeTitle, Line, Lines,
  StartButton
} from "@styles/home.style";
import { useRouter } from "next/router";
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const router = useRouter()

  const handleRedirect = async (path: string) => {
    await router.push(path)
  }

  return (
    <DefaultLayout>
      <HomeWelcomeContainer>
        <HomeWelcomeBox className={'name'}>
          <HomeWelcomeTitle><Bold>CRYPTODISTRICT</Bold></HomeWelcomeTitle>
        </HomeWelcomeBox>

        <HomeWelcomeBox>
          <HomeWelcomeTitle>
            WHERE WE MAKE <BoldWeb3 onClick={() => handleRedirect('/about')}>WEB3</BoldWeb3> REAL
          </HomeWelcomeTitle>
        </HomeWelcomeBox>

        <HomeWelcomeBox>
          <StartButton>
            <ButtonText>
              HERE WE GO
            </ButtonText>
          </StartButton>
        </HomeWelcomeBox>

        <Lines>
          {[...Array(7)].map((x, i) =>
            <Line key={i} />
          )}
        </Lines>
      </HomeWelcomeContainer>
    </DefaultLayout>
  )
}

export default Home
