import { InputButtonProps } from "@components/InputButton/InputButton.interface";
import { BasicInput, Container, Placeholder } from "@styles/Input.style";
import { Container as ButtonContainer, BasicButton, ButtonContent} from "@styles/Button.style";
import { InputButtonContainer, InputWrapper, ButtonWrapper } from "@styles/InputButton.style";
import classNames from "classnames";

export const InputButton = ({
  value,
  placeholder,
  type,
  onChange,
  onClick,
  buttonDisabled,
  buttonTitle,
  onError
}: InputButtonProps) => {
  return (
    <Container>
      <Placeholder>{placeholder}</Placeholder>
      <InputButtonContainer>
        <InputWrapper>
          <BasicInput
            className={classNames({ onError })}
            type={type}
            value={value}
            onChange={onChange}
          />
        </InputWrapper>

        <ButtonWrapper>
          <ButtonContainer
            onClick={onClick}
          >
            <BasicButton
              className={classNames({
                disabled: buttonDisabled,
                highHeight: true,
                codeButton: true
              })}
            >
              <ButtonContent>{buttonTitle}</ButtonContent>
            </BasicButton>
          </ButtonContainer>
        </ButtonWrapper>
      </InputButtonContainer>
    </Container>
  )
}
