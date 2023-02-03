import React from 'react';

import { SecuritySettingsProps } from '@components/account-settings/SecuritySettings/SecuritySettings.interface';
import { Button } from '@components/Button/Button.component';
import { Modal } from '@components/Modal/Modal.component';
import {
  ItemDescription,
  ItemTitle,
  Line,
  SecurityItemBlock,
  SecurityTitle,
  SecurityTitleBox,
  SecurityItemWrapper
} from '@styles/SecuritySettings.style';

const SecuritySettings = ({ translate, securitySettings }: SecuritySettingsProps) => {
  const [twoFaModal, setTwoFaModal] = React.useState(false);
  const [phoneModal, setPhoneModal] = React.useState(false);
  const [passwordChangeModal, setPasswordChangeModal] = React.useState(false);
  const [changeEmailModal, setChangeEmailModal] = React.useState(false);

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
          <Button
            text={translate('pages:settings.s2faButton')}
            onClick={() => setTwoFaModal(true)}
          />
          {twoFaModal ? (
            <Modal
              onClose={() => setTwoFaModal(false)}
              header={translate('pages:settings.s2faTitle')}
              description={translate('pages:settings.s2faDescription')}
            ><></></Modal>
          ) : null}
        </SecurityItemWrapper>
      </SecurityItemBlock>

      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>{translate('pages:settings.sPhoneTitle')}</ItemTitle>
          <ItemDescription>{translate('pages:settings.sPhoneDescription')}</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button
            text={translate('pages:settings.sPhoneButton')}
            onClick={() => setPhoneModal(true)}
          />
          {phoneModal ? (
            <Modal
              onClose={() => setPhoneModal(false)}
              header={translate('pages:settings.sPhoneTitle')}
              description={translate('pages:settings.sPhoneDescription')}
            ><></></Modal>
          ) : null}
        </SecurityItemWrapper>
      </SecurityItemBlock>

      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>{translate('pages:settings.changePassTitle')}</ItemTitle>
          <ItemDescription>{translate('pages:settings.changePassDescription')}</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button
            text={translate('pages:settings.changePassButton')}
            onClick={() => setPasswordChangeModal(true)}
          />
          {passwordChangeModal ? (
            <Modal
              onClose={() => setPasswordChangeModal(false)}
              header={translate('pages:settings.changePassTitle')}
              description={translate('pages:settings.changePassDescription')}
            ><></></Modal>
          ) : null}
        </SecurityItemWrapper>
      </SecurityItemBlock>

      <SecurityItemBlock>
        <SecurityItemWrapper>
          <ItemTitle>{translate('pages:settings.changeEmailTitle')}</ItemTitle>
          <ItemDescription>{translate('pages:settings.changeEmailDescription')}</ItemDescription>
        </SecurityItemWrapper>
        <SecurityItemWrapper className={'button'}>
          <Button
            text={translate('pages:settings.changeEmailButton')}
            onClick={() => setChangeEmailModal(true)}
          />
          {changeEmailModal ? (
            <Modal
              onClose={() => setChangeEmailModal(false)}
              header={translate('pages:settings.changeEmailTitle')}
              description={translate('pages:settings.changeEmailDescription')}
            ><></></Modal>
          ) : null}
        </SecurityItemWrapper>
      </SecurityItemBlock>
    </>
  );
};

export default SecuritySettings;
