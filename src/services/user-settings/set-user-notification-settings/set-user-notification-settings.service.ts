import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import {
  SetUserNotificationSettingsPayload, SetUserNotificationSettingsResponse
} from '@services/set-user-notification-settings/set-user-notification-settings.interface';

export const useSetUserNotificationSettingsService = () => {
  const [loading, setLoading] = React.useState(false);

  const setUserNotificationSettings = async (payload: SetUserNotificationSettingsPayload)
    : Promise<SetUserNotificationSettingsResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.patch<SetUserNotificationSettingsResponse>('/user/settings/set-notification', payload, {
        headers: { 'Application-Authorization': `Bearer ${payload.token}` }
      });

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { setUserNotificationSettings, loading };
};

