import { AxiosError } from 'axios/index';
import { NextApiRequest, NextApiResponse } from 'next';

import { Api } from '@api';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data } = await Api.post('/crypto/favorite/remove', req.body, {
      headers: { 'Application-Authorization': req.headers['application-authorization'] }
    });

    return res.json(data);
  } catch (error: any) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
};
