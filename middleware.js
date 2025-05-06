// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ## only protect admin pages EXCEPT the login page ##
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const isLoggedIn = request.cookies.get('admin-session');
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // everything else continues normally
  return NextResponse.next();
}
