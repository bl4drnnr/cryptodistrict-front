import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { RefreshTokenPayload } from '@services/refresh-token/refresh-token.interface';

export const useRefreshTokenService = () => {
  const [loading, setLoading] = React.useState(false);

  const refreshToken = async (payload: RefreshTokenPayload) => {
    try {
      const { data } = await ApiClient.post('/auth/refresh-token', payload);

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { refreshToken, loading };
};
