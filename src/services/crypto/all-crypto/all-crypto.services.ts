import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { GetAllCryptoPayload, GetAllCryptoResponse } from '@services/all-crypto/all-crypto.interface';

export const useGetAllCryptoService = () => {
  const [loading, setLoading] = React.useState(false);

  const getAllCrypto = async (payload: GetAllCryptoPayload)
    : Promise<GetAllCryptoResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<GetAllCryptoResponse>(
        `/crypto/all/${payload.page}/${payload.limit}/${payload.sort}`
      );

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { getAllCrypto, loading };
};
