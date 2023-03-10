import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { ChangePasswordRequest, ChangePasswordResponse } from '@services/change-password/change-password.interface';

export const useChangePasswordService = () => {
  const [loading, setLoading] = React.useState(false);

  const changePassword = async (token: string | null, payload: ChangePasswordRequest)
    : Promise<ChangePasswordResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.patch<ChangePasswordResponse>('/user/change-password', payload, {
        headers: { 'Application-Authorization': `Bearer ${token}` }
      });

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { changePassword, loading };
};
