import React from 'react';

interface INotificationSettings {
  receiveNotifications: boolean;
}

export interface NotificationSettingsProps {
  translate: any;
  notificationSettings: INotificationSettings | undefined;
  setNotificationSettings: React.Dispatch<React.SetStateAction<any>>;
  applyNotificationSettings: any;
}
