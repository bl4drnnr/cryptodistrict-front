import { BasicInput, Placeholder } from "@styles/Input.style";
import { InputProps} from "@components/Input/Input.interface";

export const Input = ({ value, placeholder, type, onChange }: InputProps) => {
  return (
    <>
      <Placeholder>{placeholder}</Placeholder>
      <BasicInput
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
