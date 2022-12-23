import { BasicInput } from "@styles/Input.style";

export const Input = ({ value, placeholder, onChange }: any) => {
  return (
    <BasicInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
