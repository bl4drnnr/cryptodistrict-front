import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { CheckTokenPayload, CheckTokenResponse } from '@services/check-token/check-token.interface';

export const useCheckTokenService = () => {
  const [loading, setLoading] = React.useState(false);

  const checkToken = async (payload: CheckTokenPayload)
    : Promise<CheckTokenResponse> => {
    try {
      const { data } = await ApiClient.post<CheckTokenResponse>('/auth/check-token', payload);

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { checkToken, loading };
};
