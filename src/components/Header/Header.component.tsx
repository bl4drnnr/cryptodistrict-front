import { Button } from "@components/Button/Button.component";
import { Container, Box, Buttons } from '@styles/Header.style'

export const Header = () => {
  return (
    <>
      <Container>
        <Box>
          <h1>Cryptodistrict</h1>
          <Buttons>
            <Button text={"Log in"}/>
            <Button text={"Register"}/>
          </Buttons>
        </Box>
      </Container>
    </>
  )
}
