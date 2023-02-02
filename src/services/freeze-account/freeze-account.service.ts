import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { FreezeAccountPayload, FreezeAccountResponse } from '@services/freeze-account/freeze-account.interface';

export const useFreezeAccountService = () => {
  const [loading, setLoading] = React.useState(false);

  const freezeAccount = async (payload: FreezeAccountPayload)
    : Promise<FreezeAccountResponse> => {
    try {
      const { data } = await ApiClient.patch<FreezeAccountResponse>('/user/freeze-account', {}, {
        headers: { 'Application-Authorization': `Bearer ${payload.token}` }
      });

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { freezeAccount, loading };
};
