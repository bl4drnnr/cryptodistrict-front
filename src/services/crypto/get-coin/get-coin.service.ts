import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { GetCoinPayload, GetCoinResponse } from '@services/get-coin/get-coin.interface';

export const useGetCoinService = () => {
  const [loading, setLoading] = React.useState(false);

  const getCoin = async (payload: GetCoinPayload)
    : Promise<GetCoinResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get(`/crypto/coin/${payload.name}`);

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { getCoin, loading };
};
