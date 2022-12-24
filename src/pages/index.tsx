import DefaultLayout from '@layouts/Default.layout';
import {
  Bold,
  BoldWeb3,
  HomeWelcomeBox,
  HomeWelcomeContainer,
  HomeWelcomeTitle
} from "@styles/home.style";
import { useRouter } from "next/router";
import type { NextPage } from 'next';
import { Button } from "@components/Button/Button.component";

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
        </HomeWelcomeBox>
      </HomeWelcomeContainer>
    </DefaultLayout>
  )
}

export default Home
