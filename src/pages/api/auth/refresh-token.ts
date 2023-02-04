import { AxiosError } from 'axios';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { Api } from '@api';


export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data, headers } = await Api.get('/auth/refresh', {
      headers: { 'Cookie': req.headers.cookie || '' }
    });

    if (headers['set-cookie']) {
      const refreshToken = headers['set-cookie'][0].split('=')[1];
      res.setHeader('Set-Cookie', serialize(
        '_rt', refreshToken, {
          path: '/',
          httpOnly: true,
          sameSite: true,
          maxAge: 7 * 24 * 60 * 60 * 1000
        })
      );
    }

    return res.json(data);
  } catch (error: any) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
};
