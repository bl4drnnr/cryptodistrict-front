import { BasicInput, Container, Placeholder } from "@styles/Input.style";
import { InputProps } from "@components/Input/Input.interface";
import classNames from "classnames";

export const Input = ({ value, placeholder, type, onChange, onError }: InputProps) => {
  return (
    <Container>
      <Placeholder>{placeholder}</Placeholder>
      <BasicInput
        className={classNames({ onError })}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}
