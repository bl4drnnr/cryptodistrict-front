import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { SetUserSettingsPayload, SetUserSettingsResponse } from '@services/set-user-settings/set-user-settings.interface';

export const useSetUserSettings = () => {
  const [loading, setLoading] = React.useState(false);

  const setUserSettings = async (payload: SetUserSettingsPayload)
    : Promise<SetUserSettingsResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.patch('/user/settings/set', payload, {
        headers: { 'Application-Authorization': `Bearer ${payload.token}` }
      });

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { setUserSettings, loading };
};
