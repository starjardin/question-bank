import { getToken } from 'next-auth/jwt';
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from 'next/server';

/** @param {import("next/server").NextRequest} req */
export async function middleware(req: any) {
  const session = await getToken({
    req,
    secret: process.env.SECRET as string,
    secureCookie: process.env.NEXTAUTH_URL?.startsWith('https://') ?? !!process.env.VERCEL_URL,
  });

  if (req.nextUrl.pathname === '/') {
    if (!session) {
      return NextResponse.redirect('/api/auth/signin');
    }
  }

  if (req.nextUrl.pathname === '/projects') {
    if (!session) {
      return NextResponse.redirect('/api/auth/signin');
    }
  }

  if (req.nextUrl.pathname === '/about') {
    console.log(session);
    
    if (!session) {
      return NextResponse.redirect('/api/auth/signin');
    }
  }

  if (req.nextUrl.pathname === '/services') {
    if (!session) {
      return NextResponse.redirect('/api/auth/signin');
    }
  }
}
