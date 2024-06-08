import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  // Paths that do not require authentication
  const unprotectedPaths = ['/auth/signin', '/api/auth/callback'];
  
  if (unprotectedPaths.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // If the user is not authenticated, redirect to the login page
  if (!token) {
    const loginUrl = new URL('/auth/signin', req.url);
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/templates/:path*'], // Apply middleware to specific routes
};
