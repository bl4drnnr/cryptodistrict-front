import React from 'react';

import { ApiClient } from '@api-client';
import { ExceptionHandler } from '@exception-handler';
import { ChangeEmailRequest, ChangeEmailResponse } from '@services/change-email/change-email.interface';

export const useChangeEmailService = () => {
  const [loading, setLoading] = React.useState(false);

  const changeEmail = async (token: string | null, payload: ChangeEmailRequest)
    : Promise<ChangeEmailResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.patch<ChangeEmailResponse>('/user/change-email', payload, {
        headers: { 'Application-Authorization': `Bearer ${token}` }
      });

      return data;
    } catch (error: any) {
      throw ExceptionHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return { changeEmail, loading };
};
