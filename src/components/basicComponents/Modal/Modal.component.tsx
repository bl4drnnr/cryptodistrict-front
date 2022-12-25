import Image from 'next/image';

import { ModalProps } from '@components/Modal/Modal.interface';
import { ChildrenWrapper, Container, Description, WindowHeader, Wrapper } from '@styles/Modal.style';

export const Modal = ({ onClose, header, description, children }: ModalProps) => {
  return (
    <Container onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <WindowHeader>
          <Image src={'/img/backarrowmodal.svg'} alt={'close'} width={16} height={16} onClick={onClose}/>
          <h3>{header}</h3>
        </WindowHeader>
        <Description>{description}</Description>
        <ChildrenWrapper>
          {children}
        </ChildrenWrapper>
      </Wrapper>
    </Container>
  );
};
