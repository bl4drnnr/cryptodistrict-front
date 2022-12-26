import classNames from 'classnames';

import { NotificationMessageProps } from '@components/NotificationMessage/NotificationMessage.interface';
import { useNotificationMessageActions } from '@store/global/global.actions';
import { Container, Content } from '@styles/NotificationMessage.style';

export const NotificationMessage = ({}: NotificationMessageProps) => {
  const { show, content, type } = useNotificationMessageActions();
  return (
    <>
      {show &&
        <Container className={classNames({ onError: type === 'error', fadeInClass: true })}>
          <Content>{ content }</Content>
        </Container>
      }
    </>
  );
};
