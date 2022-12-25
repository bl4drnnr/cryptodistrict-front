import { CheckboxProps } from '@components/Checkbox/Checkbox.interface';
import { Container, LabelBox, Checkmark, Label } from '@styles/Checkbox.style';

export const Checkbox = ({ label, onChange }: CheckboxProps) => {
  return (
    <Container>
      <LabelBox>
        <input type="checkbox" onChange={onChange}/>
        <Checkmark></Checkmark>
      </LabelBox>
      <Label>{label}</Label>
    </Container>
  );
};
