import classNames from 'classnames';

import { PopUpProps } from '@components/PopUp/PopUp.interface';
import { Container, Content } from '@styles/PopUp.style';

export const PopUp = ({ content, onError }: PopUpProps) => {
  return (
    <Container className={'fadeInClass'}>
      <Content className={classNames({ onError })}>{ content }</Content>
    </Container>
  );
};
