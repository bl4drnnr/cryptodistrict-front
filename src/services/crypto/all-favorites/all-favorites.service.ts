import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { GetAllFavoritesResponse } from '@services/all-favorites/all-favorites.interface';

export const useGetAllFavorites = () => {
  const [loading, setLoading] = React.useState(false);

  const getAllFavorites = async (token: string | null)
    : Promise<GetAllFavoritesResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<GetAllFavoritesResponse>('/crypto/all-favorites', {
        headers: { 'Application-Authorization': `Bearer ${token}` }
      });

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { getAllFavorites, loading };
};
