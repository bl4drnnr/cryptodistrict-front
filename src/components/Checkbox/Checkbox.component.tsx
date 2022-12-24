import { Container, LabelBox, Checkmark, Label } from "@styles/Checkbox.style";

export const Checkbox = () => {
  return (
    <Container>
      <LabelBox>
        <input type="checkbox"/>
        <Checkmark></Checkmark>
      </LabelBox>
      <Label></Label>
    </Container>
  )
}
