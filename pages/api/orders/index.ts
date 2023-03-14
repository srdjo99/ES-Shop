import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return createOrder(req, res);
    default:
      return res.status(400).json({ message: 'Bad Request' });
  }
}

const createOrder = async (req: any, res: any) => {
  // const { orderItems, total } = req.body as IOrder;

  const session: any = await getSession({ req });

  return res.status(200).json(session);
};
