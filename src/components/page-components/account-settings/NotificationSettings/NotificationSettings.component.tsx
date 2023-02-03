import React from 'react';

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
  NotificationTitleBox, ShowMoreContainer, ShowMoreLink
} from '@styles/NotificationSettings.style';

const NotificationSettings = ({ translate, notificationSettings }: NotificationSettingsProps) => {
  const [showMore, setShowMore] = React.useState(false);

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
          <ItemTitle>{translate('pages:settings.receiveNotificationsTitle')}</ItemTitle>
          <ItemDescription>{translate('pages:settings.receiveNotificationsDescription')}</ItemDescription>
          <ShowMoreLink
            onClick={() => setShowMore(!showMore)}
          >Show more</ShowMoreLink>
        </NotificationItemWrapper>
        <NotificationItemWrapper>
          <Checkbox
            value={notificationSettings?.receiveNotifications}
            label={''}
            onChange={() => {}}
          />
        </NotificationItemWrapper>
      </NotificationItemBlock>

      {showMore ? (
        <ShowMoreContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at cumque dignissimos et hic illo nam pariatur, quaerat unde velit!</p>
        </ShowMoreContainer>
      ) : null}
    </>
  );
};

export default NotificationSettings;
