import { NextResponse } from 'next/server';

const publicRoutes = ['/', '/home', '/login', '/register'];

export function middleware(request) {
    const token = request.cookies.get('token')?.value;
    const pathname = request.nextUrl.pathname;

    console.log('Token:', token);
    console.log('✅ Middleware ejecutado en:', pathname);

    const isPublic = publicRoutes.some((path) => pathname.startsWith(path));

    if (!token && !isPublic) {
        console.log("🔒 Redirigiendo a /login porque no hay token");
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/redeco/:path*', '/reune/:path*', '/reclamaciones/:path*'],
};
