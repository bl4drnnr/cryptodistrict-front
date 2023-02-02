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
            placeholder={'First name'}
            onChange={() => {}}
          />
        </InputWrapper>
        <InputWrapper className={'left'}>
          <Input
            value={personalInformation?.lastName}
            placeholder={'Last name'}
            onChange={() => {}}
          />
        </InputWrapper>
      </FieldsContainer>
      <FieldsContainer className={'flex'}>
        <InputWrapper className={'right'}>
          <Input
            value={personalInformation?.personalWebsite}
            placeholder={'Personal website'}
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
            placeholder={'Bio'}
            onChange={() => {}}
          />
        </InputWrapper>
      </FieldsContainer>
      <FieldsContainer className={'no-line'}>
        <InputWrapper className={'button'}>
          <Button text={'Save changes'} />
        </InputWrapper>
      </FieldsContainer>
    </>
  );
};

export default PersonalInformation;
