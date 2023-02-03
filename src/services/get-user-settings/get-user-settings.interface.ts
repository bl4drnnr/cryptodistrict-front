export interface IPersonalInformation {
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

export interface INotificationSettings {
  receiveNotifications: boolean;
}

export interface ISecuritySettings {
  emailChanged: boolean;
  lastPassChange: Date;
  twoFaType: string;
}

interface ISettings {
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
