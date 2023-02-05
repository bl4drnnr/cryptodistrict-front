import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { RemoveFavoritePayload, RemoveFavoriteResponse } from '@services/remove-favorite/remove-favorite.interface';

export const useRemoveFavoriteService = () => {
  const [loading, setLoading] = React.useState(false);

  const removeFavorite = async (token: string | null, payload: RemoveFavoritePayload)
    : Promise<RemoveFavoriteResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post('/crypto/remove-favorite', payload, {
        headers: { 'Application-Authorization': `Bearer ${token}` }
      });

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { removeFavorite, loading };
};
