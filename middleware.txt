import { NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';

export async function middleware(request: any) {
  const requestedPage = request.nextUrl.pathname;

  if (request.nextUrl.pathname.startsWith('/checkout/address')) {
    const session = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
      raw: true,
    });

    if (!session) {
      return NextResponse.redirect(
        new URL(`/auth/login?p=${requestedPage}`, request.url)
      );
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: '/checkout/:path*',
};
