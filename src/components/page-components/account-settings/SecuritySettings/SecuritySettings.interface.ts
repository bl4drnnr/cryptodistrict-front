interface ISecuritySettings {
  emailChanged: boolean;
  lastPassChange: Date;
  twoFaType: string;
  email: string;
  phoneNumber: string;
}

export interface SecuritySettingsProps {
  translate: any;
  securitySettings: ISecuritySettings | undefined;
}
