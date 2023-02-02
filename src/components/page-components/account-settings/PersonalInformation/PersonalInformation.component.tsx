import Image from 'next/image';

import { PersonalInformationProps } from '@components/account-settings/PersonalInformation/PersonalInformation.interface';
import { Button } from '@components/Button/Button.component';
import { Input } from '@components/Input/Input.component';
import { Textarea } from '@components/Textarea/Textarea.component';
import {
  AvaWrapper, ChangeAvatar,
  FieldsContainer,
  InputWrapper, Line,
  PersonalInfoItemsWrapper,
  PersonalInformationContainer, PublicInfoTitle, PublicInfoTitleBox
} from '@styles/PersonalInformation.style';

export const PersonalInformation = ({ locale, translate, personalInformation }: PersonalInformationProps) => {
  return (
    <>
      <PublicInfoTitleBox>
        <PublicInfoTitle>
          {translate('placeholders:inputs.personalInformation')}
        </PublicInfoTitle>
        <Line />
      </PublicInfoTitleBox>
      <PersonalInformationContainer>
        <PersonalInfoItemsWrapper className={'fields'}>
          <FieldsContainer>
            <Input
              value={personalInformation?.firstName}
              placeholder={translate('pages:signup.firstName')}
              onChange={() => {}}
            />
            <Input
              value={personalInformation?.lastName}
              placeholder={translate('pages:signup.lastName')}
              onChange={() => {}}
            />
            <Input
              value={personalInformation?.personalWebsite}
              placeholder={translate('pages:signup.personalWebsite')}
              onChange={() => {}}
            />
            <Input
              value={personalInformation?.linkedIn}
              placeholder={'LinkedIn'}
              onChange={() => {}}
            />
            <Input
              value={personalInformation?.twitter}
              placeholder={'Twitter'}
              onChange={() => {}}
            />
            <Textarea
              value={personalInformation?.bio}
              placeholder={translate('pages:signup.bio')}
              onChange={() => {}}
            />
          </FieldsContainer>

          <FieldsContainer className={'no-line'}>
            <InputWrapper className={'button'}>
              <Button text={translate('placeholders:inputs.saveChanges')} />
            </InputWrapper>
          </FieldsContainer>

        </PersonalInfoItemsWrapper>
        <PersonalInfoItemsWrapper className={'end changeAva'}>
          <AvaWrapper>
            <Image className={'ava'} src={'/img/testava.jpg'} alt={'ava'} width={225} height={225}/>
            <ChangeAvatar>
              <Button
                text={translate('placeholders:inputs.changeAva')}
                fillButton={true}
              />
            </ChangeAvatar>
          </AvaWrapper>
        </PersonalInfoItemsWrapper>
      </PersonalInformationContainer>
    </>
  );
};

export default PersonalInformation;
