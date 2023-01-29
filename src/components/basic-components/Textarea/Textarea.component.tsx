import classNames from 'classnames';

import { TextareaProps } from '@components/Textarea/Textarea.interface';
import { Container, Placeholder, BasicTextarea } from '@styles/Textarea.style';

export const Textarea = ({ value, placeholder, onError, onChange }: TextareaProps) => {
  return (
    <Container>
      <Placeholder>{placeholder}</Placeholder>
      <BasicTextarea
        className={classNames({ onError })}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};
