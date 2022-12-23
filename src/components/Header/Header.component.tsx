import { Button } from "@components/Button/Button.component";
import { Container, Box, Buttons, Links, Link } from '@styles/Header.style'
import {useRouter} from "next/router";

export const Header = () => {
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <>
      <Container>
        <Box>
          <h1>Cryptodistrict</h1>
          <Links>
            <Link>Home</Link>
            <Link>About project</Link>
            <Link>Contact</Link>
          </Links>
          <Buttons>
            <Button text={"Log in"} onClick={() => handleRedirect('/login')}/>
            <Button text={"Register"} onClick={() => handleRedirect('/register')}/>
          </Buttons>
        </Box>
      </Container>
    </>
  )
}
