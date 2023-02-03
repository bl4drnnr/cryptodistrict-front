import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { RefreshTokenResponse } from '@services/refresh-token/refresh-token.interface';

export const useRefreshTokenService = () => {
  const [loading, setLoading] = React.useState(false);

  const refreshToken = async ()
    : Promise<RefreshTokenResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<RefreshTokenResponse>('/auth/refresh-token');

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { refreshToken, loading };
};
