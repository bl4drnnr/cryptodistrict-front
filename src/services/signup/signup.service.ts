import React from 'react';

import { ApiClient } from '@api-client';
import { SignUpPayload, SignUpResponse } from '@services/signup/signup.interface';

export const useSignUpService = () => {
  const [loading, setLoading] = React.useState(false);

  const signUp = async (payload: SignUpPayload)
    : Promise<SignUpResponse> => {
    try {
      setLoading(true);
      const { data } = await ApiClient.post<SignUpResponse>('/user/sign-up', payload);

      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
};
