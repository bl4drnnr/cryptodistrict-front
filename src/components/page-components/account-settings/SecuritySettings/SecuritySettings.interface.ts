interface ISecuritySettings {
  emailChanged: boolean;
  lastPassChange: Date;
  twoFaType: string;
}

export interface SecuritySettingsProps {
  locale: string;
  translate: any;
  securitySettings: ISecuritySettings | undefined;
}
