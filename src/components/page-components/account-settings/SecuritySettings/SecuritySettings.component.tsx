import { SecuritySettingsProps } from '@components/account-settings/SecuritySettings/SecuritySettings.interface';
import { Button } from '@components/Button/Button.component';
import { Line, SecurityItemBlock, SecurityTitle, SecurityTitleBox } from '@styles/SecuritySettings.style';

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
        <div>
          <h1>Set 2FA</h1>
          <p>Secure your account with two-factor authentication (2FA).</p>
        </div>
        <div style={{ width: '200px' }}>
          <Button text={'Set 2FA'} />
        </div>
      </SecurityItemBlock>
      <SecurityItemBlock>
        <div>
          <h1>Set mobile phone</h1>
          <p>Secure your account with mobile MFA.</p>
        </div>
        <div style={{ width: '200px' }}>
          <Button text={'Set 2FA'} />
        </div>
      </SecurityItemBlock>
      <SecurityItemBlock>
        <div>
          <h1>Change password</h1>
          <p>Change your password.</p>
        </div>
        <div style={{ width: '200px' }}>
          <Button text={'Set 2FA'} />
        </div>
      </SecurityItemBlock>
      <SecurityItemBlock>
        <div>
          <h1>Change email</h1>
          <p>Be careful! You are able to change email only one time.</p>
        </div>
        <div style={{ width: '200px' }}>
          <Button text={'Set 2FA'} />
        </div>
      </SecurityItemBlock>
    </>
  );
};

export default SecuritySettings;
