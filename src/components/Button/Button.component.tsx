import { ButtonProps } from "@components/Button/Button.interface";
import { ButtonContent, Container, BasicButton } from "@styles/Button.style";
import classNames from "classnames";

export const Button = ({ text, onClick, disabled, highHeight }: ButtonProps): JSX.Element => {
  return (
    <Container
      onClick={onClick}
    >
      <BasicButton
        className={classNames({ disabled, highHeight })}
      >
        <ButtonContent>{text}</ButtonContent>
      </BasicButton>
    </Container>
  )
}
