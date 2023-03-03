import { SignJWT, jwtVerify } from 'jose';

export const signToken = async (_id: string, email: string) => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error('There is no JWT - check environment variables');
  }

  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24;

  return await new SignJWT({ _id, email })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt(iat)
    .setExpirationTime(exp)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET_SEED));
};

export const isValidToken = (token: string): Promise<string> => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error('There is no JWT - check environment variables');
  }

  return new Promise((resolve, reject) => {
    jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET_SEED))
      .then(({ payload }) => resolve(payload._id as string))
      .catch((error) => reject('JWT is not valid, error:' + error));
  });
};
