import { ButtonProps } from "@components/Button/Button.interface";
import { ButtonContent, Container } from "@styles/Button.style";

export const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return (
    <Container
      onClick={onClick}
    >
      <ButtonContent>{text}</ButtonContent>
    </Container>
  )
}
