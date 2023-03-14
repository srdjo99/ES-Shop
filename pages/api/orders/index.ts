import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { db } from '../../../database';
import { IOrder } from '../../../interfaces';
import { Product } from '../../../models';

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
  const { orderItems, total } = req.body as IOrder;

  const session: any = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'You must be authenticated' });
  }

  const productsIds = orderItems.map((product) => product._id);

  await db.connect();
  const dbProducts = await Product.find({ _id: { $in: productsIds } });

  try {
    const subTotal = orderItems.reduce((prev, current) => {
      // validation with db
      const currentPrice = dbProducts.find(
        (prod) => prod._id === current._id
      )?.price;

      if (!currentPrice) {
        throw new Error('Check the cart again, product does not exist');
      }

      return current.price * current.quantity + prev;
    }, 0);
  } catch (error) {}

  console.log({ dbProducts });

  return res.status(200).json(req.body);
};
