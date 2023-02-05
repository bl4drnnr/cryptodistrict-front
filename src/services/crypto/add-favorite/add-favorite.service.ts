import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { AddFavoritePayload, AddFavoriteResponse } from '@services/add-favorite/add-favorite.interface';

export const useAddFavoriteService = () => {
  const [loading, setLoading] = React.useState(false);

  const addFavorite = async (token: string | null, payload: AddFavoritePayload)
    : Promise<AddFavoriteResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post('/crypto/add-favorite', payload, {
        headers: { 'Application-Authorization': `Bearer ${token}` }
      });

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { addFavorite, loading };
};
