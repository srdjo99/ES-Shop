import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { jwt } from './utils';

export async function middleware(req: NextRequest) {
  const token: string = req.cookies.get('token') || '';
  try {
    await jwt.isValidToken(token);
    return NextResponse.next();
  } catch (error) {
    const origin = req.nextUrl.origin;
    const param = req.url.replace(origin, '');
    return NextResponse.redirect(new URL(`/auth/login?p=${param}`, origin));
  }
}

export const config = {
  matcher: '/checkout/:path*',
};
