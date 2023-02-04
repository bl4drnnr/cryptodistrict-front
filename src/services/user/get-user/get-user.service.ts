import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { GetUserPayload, GetUserResponse } from '@services/get-user/get-user.interface';

export const useGetUserService = () => {
  const [loading, setLoading] = React.useState(false);

  const getUser = async (payload: GetUserPayload)
    : Promise<GetUserResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.get<GetUserResponse>(`/user/get-user/${payload.userNumber}`);

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { getUser, loading };
};
