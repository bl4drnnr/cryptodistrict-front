import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { ChangeEmailResponse } from '@services/change-email/change-email.interface';
import { ChangePasswordRequest } from '@services/change-password/change-password.interface';

export const useChangePasswordService = () => {
  const [loading, setLoading] = React.useState(false);

  const changePassword = async (payload: ChangePasswordRequest)
    : Promise<ChangeEmailResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.patch<ChangeEmailResponse>('/user/change-passwowrd', payload);

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { changePassword, loading };
};
