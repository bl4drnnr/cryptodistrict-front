import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import { Api } from "@api";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data } = await Api.post('/user/sign-up', req.body)

    return res.json(data)
  } catch (error) {
    return res
      .status((error as AxiosError).response?.status as number)
      .json((error as AxiosError).response?.data);
  }
}