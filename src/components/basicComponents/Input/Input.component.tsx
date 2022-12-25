import classNames from 'classnames';

import { InputProps } from '@components/Input/Input.interface';
import { BasicInput, Container, Placeholder } from '@styles/Input.style';

export const Input = ({ value, placeholder, type, onChange, onError, high }: InputProps) => {
  return (
    <Container>
      <Placeholder>{placeholder}</Placeholder>
      <BasicInput
        className={classNames({ onError, high })}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};
