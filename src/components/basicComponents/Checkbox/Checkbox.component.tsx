import { Container, LabelBox, Checkmark, Label } from "@styles/Checkbox.style";
import { CheckboxProps } from "@components/Checkbox/Checkbox.interface";

export const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <Container>
      <LabelBox>
        <input type="checkbox"/>
        <Checkmark></Checkmark>
      </LabelBox>
      <Label>{label}</Label>
    </Container>
  )
}
