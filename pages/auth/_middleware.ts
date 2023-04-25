import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const session: any = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (req.nextUrl.pathname.startsWith('/login') && session) {
    const url = req.nextUrl.clone();
    console.log(url);
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
}
