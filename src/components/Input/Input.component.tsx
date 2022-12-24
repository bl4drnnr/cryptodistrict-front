import { BasicInput, Container, Placeholder } from "@styles/Input.style";
import { InputProps} from "@components/Input/Input.interface";

export const Input = ({ value, placeholder, type, onChange }: InputProps) => {
  return (
    <Container>
      <Placeholder>{placeholder}</Placeholder>
      <BasicInput
        type={type}
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}
