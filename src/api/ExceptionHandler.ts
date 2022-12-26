import axios from 'axios';

import { ApiException } from '@exceptions/api.exception';
import { GeneralException } from '@exceptions/general.exception';

export const ExceptionHandler = (error: Error) => {
  if (axios.isAxiosError(error)) {
    if (error && error.response) {
      const statusCode = error.response.data.message.statusCode;
      const message = error.response.data.message.message;
      const description = error.response.data.message.error;
      throw new ApiException(statusCode, message, description);
    }
  }
  throw new GeneralException(error.message);
};
