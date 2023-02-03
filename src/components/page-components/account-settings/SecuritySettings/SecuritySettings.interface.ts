interface ISecuritySettings {
  emailChanged: boolean;
  lastPassChange: Date;
  twoFaType: string;
}

export interface SecuritySettingsProps {
  translate: any;
  securitySettings: ISecuritySettings | undefined;
}
