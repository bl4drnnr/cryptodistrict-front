import { SecuritySettingsProps } from '@components/account-settings/SecuritySettings/SecuritySettings.interface';
import { Button } from '@components/Button/Button.component';
import {
  ItemDescription,
  ItemTitle,
  Line,
  SecurityItemBlock,
  SecurityTitle,
  SecurityTitleBox,
  SecurityItemWrapper
} from '@styles/SecuritySettings.style';

const SecuritySettings = ({ locale, translate, securitySettings }: SecuritySettingsProps) => {
  return (
    <>
      <SecurityTitleBox>
        <SecurityTitle>
          {translate('placeholders:inputs.securitySettings')}
        </SecurityTitle>
        <Line />
      </SecurityTitleBox>

      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>Set 2FA</ItemTitle>
          <ItemDescription>Secure your account with two-factor authentication (2FA).</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button text={'Set 2FA'} />
        </SecurityItemWrapper>
      </SecurityItemBlock>

      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>Set mobile phone</ItemTitle>
          <ItemDescription>Secure your account with mobile MFA.</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button text={'Set 2FA'} />
        </SecurityItemWrapper>
      </SecurityItemBlock>

      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>Change password</ItemTitle>
          <ItemDescription>Change your password.</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button text={'Set 2FA'} />
        </SecurityItemWrapper>
      </SecurityItemBlock>
      
      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>Change email</ItemTitle>
          <ItemDescription>Be careful! You are able to change email only one time.</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button text={'Set 2FA'} />
        </SecurityItemWrapper>
      </SecurityItemBlock>
    </>
  );
};

export default SecuritySettings;
