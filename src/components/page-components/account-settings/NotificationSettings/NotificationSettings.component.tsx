import {
  NotificationSettingsProps
} from '@components/account-settings/NotificationSettings/NotificationSettings.interface';
import { Checkbox } from '@components/Checkbox/Checkbox.component';
import {
  ItemDescription,
  ItemTitle,
  Line,
  NotificationItemBlock,
  NotificationItemWrapper,
  NotificationTitle,
  NotificationTitleBox
} from '@styles/NotificationSettings.style';

const NotificationSettings = ({ locale, translate, notificationSettings }: NotificationSettingsProps) => {
  return (
    <>
      <NotificationTitleBox>
        <NotificationTitle>
          {translate('placeholders:inputs.notificationSettings')}
        </NotificationTitle>
        <Line />
      </NotificationTitleBox>

      <NotificationItemBlock>
        <NotificationItemWrapper>
          <ItemTitle>Receive notifications</ItemTitle>
          <ItemDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, magni?</ItemDescription>
        </NotificationItemWrapper>
        <NotificationItemWrapper>
          <Checkbox
            value={notificationSettings?.receiveNotifications}
            label={''}
            onChange={() => {}}
          />
        </NotificationItemWrapper>
      </NotificationItemBlock>
    </>
  );
};

export default NotificationSettings;
