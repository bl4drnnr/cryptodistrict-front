interface INotificationSettings {
  receiveNotifications: boolean;
}

export interface NotificationSettingsProps {
  translate: any;
  notificationSettings: INotificationSettings | undefined;
}
