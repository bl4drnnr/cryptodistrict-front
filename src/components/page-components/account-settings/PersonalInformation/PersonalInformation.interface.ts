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

export interface PersonalInformationProps {
  locale: string;
  translate: any;
  personalInformation: IPersonalInformation | undefined;
}
