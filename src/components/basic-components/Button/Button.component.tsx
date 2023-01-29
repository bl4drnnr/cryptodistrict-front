import classNames from 'classnames';

import { ButtonProps } from '@components/Button/Button.interface';
import { ButtonContent, Container, BasicButton } from '@styles/Button.style';

export const Button = ({ text, onClick, disabled, highHeight, fillButton }: ButtonProps): JSX.Element => {
  return (
    <Container
    >
      <BasicButton
        onClick={onClick}
        disabled={disabled}
        className={classNames({
          disabled,
          highHeight,
          fillButton
        })}
      >
        <ButtonContent>{text}</ButtonContent>
      </BasicButton>
    </Container>
  );
};
