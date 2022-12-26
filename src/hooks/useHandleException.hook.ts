import { useTranslation } from 'next-i18next';

import { ApiException } from '@exceptions/api.exception';
import { GeneralException } from '@exceptions/general.exception';
import { useNotificationMessage } from '@hooks/useShowNotificationMessage.hook';
import { NotificationType } from '@store/global/global.state';


export const useHandleException = () => {
  const { t } = useTranslation();
  const { showNotificationMessage } = useNotificationMessage();

  const handleException = (error: any) => {
    if (error instanceof ApiException) {
      showNotificationMessage({
        type: NotificationType.ERROR,
        content: t('errors:apiGeneralError'),
      });
    } else if (error instanceof GeneralException) {
      showNotificationMessage({
        type: NotificationType.ERROR,
        content: t('errors:generalError'),
      });
    } else {
      showNotificationMessage({
        type: NotificationType.ERROR,
        content: t('errors:unknownError'),
      });
    }
  };

  return { handleException };
};
