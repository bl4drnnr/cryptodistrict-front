interface IPersonalInformation {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  twitter: string;
  linkedIn: string;
  personalWebsite: string;
  title: string;
  bio: string;
}

interface INotificationSettings {
  receiveNotifications: boolean;
}

interface ISecuritySettings {
  emailChanged: boolean;
  lastPassChange: Date;
  twoFaType: string;
}

export interface ISettings {
  personalInformation: IPersonalInformation;
  notificationSettings: INotificationSettings;
  securitySettings: ISecuritySettings;
}

export interface GetUserSettingsPayload {
  token: string
}

export interface GetUserSettingsResponse {
  settings: ISettings
}
