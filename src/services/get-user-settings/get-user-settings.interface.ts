interface ISettings {
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

export interface GetUserSettingsPayload {
  token: string
}

export interface GetUserSettingsResponse {
  settings: ISettings
}
