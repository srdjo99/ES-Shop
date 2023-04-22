import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';

type Data = { message: string };

export const config = {
  api: {
    bodyParser: false, // leaves the body as it is
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return uploadFile(req, res);
    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

const parseFiles = async (req: NextApiRequest) => {};

const uploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  await parseFiles(req);

  return res.status(200).json({ message: 'Image uploaded' });
};
