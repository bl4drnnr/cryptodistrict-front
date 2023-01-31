interface INotificationSettings {
  receiveNotifications: boolean;
}

export interface NotificationSettingsProps {
  locale: string;
  translate: any;
  notificationSettings: INotificationSettings | undefined;
}
