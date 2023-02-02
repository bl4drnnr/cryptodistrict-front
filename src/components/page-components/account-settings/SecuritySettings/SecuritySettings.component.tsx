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
          <ItemTitle>{translate('pages:settings.s2faTitle')}</ItemTitle>
          <ItemDescription>{translate('pages:settings.s2faDescription')}</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button text={translate('pages:settings.s2faButton')} />
        </SecurityItemWrapper>
      </SecurityItemBlock>

      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>{translate('pages:settings.sPhoneTitle')}</ItemTitle>
          <ItemDescription>{translate('pages:settings.sPhoneDescription')}</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button text={translate('pages:settings.sPhoneButton')} />
        </SecurityItemWrapper>
      </SecurityItemBlock>

      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>{translate('pages:settings.changePassTitle')}</ItemTitle>
          <ItemDescription>{translate('pages:settings.changePassDescription')}</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button text={translate('pages:settings.changePassButton')} />
        </SecurityItemWrapper>
      </SecurityItemBlock>

      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>{translate('pages:settings.changeEmailTitle')}</ItemTitle>
          <ItemDescription>{translate('pages:settings.changeEmailDescription')}</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button text={translate('pages:settings.changeEmailButton')} />
        </SecurityItemWrapper>
      </SecurityItemBlock>
    </>
  );
};

export default SecuritySettings;
