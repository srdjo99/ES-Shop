import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return loginUser(req, res);
    default:
      res.status(400).json({
        message: 'Bad request',
      });
  }
}
