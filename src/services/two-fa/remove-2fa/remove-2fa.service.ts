import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { Remove2FaPayload, Remove2FaResponse } from '@services/remove-2fa/remove-2fa.interface';

export const useRemove2FaService = () => {
  const [loading, setLoading] = React.useState(false);

  const remove2Fa = async (token: string | null, payload: Remove2FaPayload)
    : Promise<Remove2FaResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<Remove2FaResponse>('/twofactor/remove', payload, {
        headers: { 'Application-Authorization': `Bearer ${token}` }
      });

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { remove2Fa, loading };
};
