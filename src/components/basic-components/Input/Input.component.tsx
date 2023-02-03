import classNames from 'classnames';

import { InputProps } from '@components/Input/Input.interface';
import { BasicInput, Container, OnErrorMessage, Placeholder } from '@styles/Input.style';

export const Input = ({
  value,
  placeholder,
  type,
  onChange,
  onError,
  high,
  innerPlaceholder,
  onErrorMessage
}: InputProps) => {
  return (
    <Container>
      {(placeholder.length) > 0 && <Placeholder>{placeholder}</Placeholder>}
      <BasicInput
        className={classNames({ onError, high })}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={innerPlaceholder?.length ? innerPlaceholder : ''}
      />
      {onError && onErrorMessage?.length && (<OnErrorMessage>{onErrorMessage}</OnErrorMessage>)}
    </Container>
  );
};
