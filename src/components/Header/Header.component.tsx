import Button from "@components/Button/Button.component";
import {
  Container,
  Box
} from '@styles/Header.style'

export default function Header() {
  return (
    <>
      <Container>
        <Box>
          <h1>Cryptodistrict</h1>
          <>
            <Button/>
            <Button/>
          </>
        </Box>
      </Container>
    </>
  )
}
