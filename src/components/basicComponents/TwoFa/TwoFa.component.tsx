import React from 'react';

import { TwoFaProps } from '@components/TwoFa/TwoFa.interface';
import { Container, InputTwoFa, Placeholder } from '@styles/TwoFa.style';

export const TwoFa = ({ title }: TwoFaProps) => {
  const [twoFaCode, setTwoFaCode] = React.useState(['', '', '', '', '', '']);
  const [code, setCode] = React.useState([
    { n1: '' }, { n2: '' }, { n3: '' }, { n4: '' }, { n5: '' }, { n6: '' }
  ]);

  const [n1, setN1] = React.useState('');
  const [n2, setN2] = React.useState('');
  const [n3, setN3] = React.useState('');
  const [n4, setN4] = React.useState('');
  const [n5, setN5] = React.useState('');
  const [n6, setN6] = React.useState('');

  React.useEffect(() => {
    setN1(n1);
  }, [n1]);
  React.useEffect(() => {

  }, [n2]);

  React.useEffect(() => {

  }, [n3]);
  React.useEffect(() => {

  }, [n4]);
  React.useEffect(() => {

  }, [n5]);

  React.useEffect(() => {

  }, [n6]);

  // n1() {
  //   this.n1 = validate2fa(this.n1);
  //   this.twoFaCode[0] = this.n1;
  //   this.returnTwoFa()
  // },
  // n2() {
  //   this.n2 = validate2fa(this.n2);
  //   this.twoFaCode[1] = this.n2;
  //   this.returnTwoFa()
  // },
  // n3() {
  //   this.n3 = validate2fa(this.n3);
  //   this.twoFaCode[2] = this.n3;
  //   this.returnTwoFa()
  // },
  // n4() {
  //   this.n4 = validate2fa(this.n4);
  //   this.twoFaCode[3] = this.n4;
  //   this.returnTwoFa()
  // },
  // n5() {
  //   this.n5 = validate2fa(this.n5);
  //   this.twoFaCode[4] = this.n5;
  //   this.returnTwoFa()
  // },
  // n6() {
  //   this.n6 = validate2fa(this.n6);
  //   this.twoFaCode[5] = this.n6;
  //   this.returnTwoFa()
  // }
  // returnTwoFa() {
  //   const normalCode = this.twoFaCode.join('')
  //   this.$emit('update:returnTwoFa', normalCode)
  // },
  // clearTwoFa() {
  //   this.n1 = ''
  //   this.n2 = ''
  //   this.n3 = ''
  //   this.n4 = ''
  //   this.n5 = ''
  //   this.n6 = ''
  //   this.$refs.n1.focus()
  // }

  const clearTwoFa = () => {
    setN1('');
    setN2('');
    setN3('');
    setN4('');
    setN5('');
    setN6('');
  };

  return (
    <div>
      <Placeholder>{title}</Placeholder>
      <Container>
        <InputTwoFa />
        <InputTwoFa />
        <InputTwoFa />
        <InputTwoFa />
        <InputTwoFa />
        <InputTwoFa />
      </Container>
    </div>
  );
};
