import { Container, LabelBox, Checkmark, Label } from "@styles/Checkbox.style";
import { CheckboxProps } from "@components/Checkbox/Checkbox.interface";

export const Checkbox = ({ label, onChange }: CheckboxProps) => {
  return (
    <Container>
      <LabelBox>
        <input type="checkbox" onChange={onChange}/>
        <Checkmark></Checkmark>
      </LabelBox>
      <Label>{label}</Label>
    </Container>
  )
}
