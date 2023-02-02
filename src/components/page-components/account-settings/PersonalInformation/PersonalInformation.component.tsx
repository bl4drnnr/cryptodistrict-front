import { PersonalInformationProps } from '@components/account-settings/PersonalInformation/PersonalInformation.interface';
import { Button } from '@components/Button/Button.component';
import { Input } from '@components/Input/Input.component';
import { Textarea } from '@components/Textarea/Textarea.component';
import { FieldsContainer, InputWrapper } from '@styles/PersonalInformation.style';

export const PersonalInformation = ({ locale, translate, personalInformation }: PersonalInformationProps) => {
  return (
    <>
      <FieldsContainer className={'flex'}>
        <InputWrapper className={'right'}>
          <Input
            value={personalInformation?.firstName}
            placeholder={translate('pages:signup.firstName')}
            onChange={() => {}}
          />
        </InputWrapper>
        <InputWrapper className={'left'}>
          <Input
            value={personalInformation?.lastName}
            placeholder={translate('pages:signup.lastName')}
            onChange={() => {}}
          />
        </InputWrapper>
      </FieldsContainer>
      <FieldsContainer className={'flex'}>
        <InputWrapper className={'right'}>
          <Input
            value={personalInformation?.personalWebsite}
            placeholder={translate('pages:signup.personalWebsite')}
            onChange={() => {}}
          />
        </InputWrapper>
        <InputWrapper className={'left right'}>
          <Input
            value={personalInformation?.linkedIn}
            placeholder={'LinkedIn'}
            onChange={() => {}}
          />
        </InputWrapper>
        <InputWrapper  className={'left'}>
          <Input
            value={personalInformation?.twitter}
            placeholder={'Twitter'}
            onChange={() => {}}
          />
        </InputWrapper>
      </FieldsContainer>
      <FieldsContainer>
        <InputWrapper>
          <Textarea
            value={personalInformation?.bio}
            placeholder={translate('pages:signup.bio')}
            onChange={() => {}}
          />
        </InputWrapper>
      </FieldsContainer>
      <FieldsContainer className={'no-line'}>
        <InputWrapper className={'button'}>
          <Button text={translate('placeholders:inputs.saveChanges')} />
        </InputWrapper>
      </FieldsContainer>
    </>
  );
};

export default PersonalInformation;
