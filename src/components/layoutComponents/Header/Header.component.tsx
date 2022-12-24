import { Container, Box, Buttons, Links, Link, Button, Logo } from '@styles/Header.style'
import { useRouter } from "next/router";
import { HeaderProps } from "@components/Header/Header.interace";
import classNames from "classnames";

export const Header = ({}: HeaderProps) => {
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(path);
  };

  return (
    <>
      <Container>
        <Box>
          <div style={{display: 'flex'}}>
            <Logo onClick={() => handleRedirect('/')}>Cryptodistrict</Logo>
            <Links>
              <Link onClick={() => handleRedirect('/about')}>About</Link>
            </Links>
          </div>
          <Buttons>
            <Button
              className={classNames({ logIn: true })}
              onClick={() => handleRedirect('/signin')}
            >
              Sign In
            </Button>
            <Button
              className={classNames({ signup: true })}
              onClick={() => handleRedirect('/signup')}
            >
              Sign Up
            </Button>
          </Buttons>
        </Box>
      </Container>
    </>
  )
}
