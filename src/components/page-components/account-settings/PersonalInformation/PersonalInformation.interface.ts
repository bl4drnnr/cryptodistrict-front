import React from 'react';

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
  translate: any;
  personalInformation: IPersonalInformation | undefined;
  setPersonalInformation: React.Dispatch<React.SetStateAction<any>>;
  applyPersonalInformation: any;
}
