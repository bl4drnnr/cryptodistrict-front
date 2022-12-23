import { Container, Box, Buttons, Links, Link, Button, Logo } from '@styles/Header.style'
import { useRouter } from "next/router";
import classNames from "classnames";

export const Header = () => {
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <>
      <Container>
        <Box>
          <Logo onClick={() => handleRedirect('/')}>Cryptodistrict</Logo>
          <Links>
            <Link onClick={() => handleRedirect('/')}>Home</Link>
            <Link onClick={() => handleRedirect('/about')}>About project</Link>
            <Link onClick={() => handleRedirect('/contact')}>Contact</Link>
          </Links>
          <Buttons>
            <Button
              className={classNames({ logIn: true })}
              onClick={() => handleRedirect('/login')}
            >
              Log In
            </Button>
            <Button
              className={classNames({ register: true })}
              onClick={() => handleRedirect('/register')}
            >
              Register
            </Button>
          </Buttons>
        </Box>
      </Container>
    </>
  )
}
