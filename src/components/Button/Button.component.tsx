import { ButtonProps } from "@components/Button/Button.interface";
import { ButtonContent, Container } from "@styles/Button.style";
import classNames from "classnames";

export const Button = ({ text, onClick, disabled }: ButtonProps): JSX.Element => {
  return (
    <Container
      className={classNames({ disabled })}
      onClick={onClick}
    >
      <ButtonContent>{text}</ButtonContent>
    </Container>
  )
}
