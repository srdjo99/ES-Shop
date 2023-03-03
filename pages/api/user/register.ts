import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

import { db } from '../../../database';
import { User } from '../../../models';
import { jwt, validations } from '../../../utils';

type Data =
  | { message: string }
  | {
      token: string;
      user: {
        name: string;
        email: string;
        role: string;
      };
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return registerUser(req, res);
    default:
      res.status(400).json({ message: 'Bad request' });
  }
}

const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { email = '', password = '', name = '' } = req.body;

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: 'Password must be at least 6 characters long' });
  }

  if (name.length < 2) {
    return res.status(400).json({
      message: 'Name must be at least 2 characters long',
    });
  }

  if (!validations.isValidEmail(email)) {
    return res.status(400).json({
      message: 'Email format is not valid',
    });
  }

  await db.connect();
  const user = await User.findOne({ email });

  if (user) {
    await db.disconnect();
    return res.status(400).json({ message: 'User is already registered' });
  }

  const newUser = new User({
    email: email.toLocaleLowerCase(),
    password: bcrypt.hashSync(password),
    role: 'client',
    name,
  });

  try {
    await newUser.save({ validateBeforeSave: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Review server logs',
    });
  } finally {
    db.disconnect();
  }

  const { _id, role } = newUser;
  const token: any = jwt.signToken(_id, email);

  return res.status(200).json({
    token,
    user: {
      email,
      role,
      name,
    },
  });
};
