import { NextResponse } from 'next/server';

// Rutas públicas (accesibles sin token)
const publicRoutes = ['/', '/home', '/login', '/register'];

export function middleware(request) {
    const token = request.cookies.get('token')?.value;
    console.log('Token:', token);
    console.log('✅ Middleware ejecutado en:', request.nextUrl.pathname);

    // Si el token NO existe y la ruta no es pública, redirigir al login
    if (!token && !publicRoutes.includes(request.nextUrl.pathname)) {
        console.log("🔒 Redirigiendo a /home porque no hay token");
        return NextResponse.redirect(new URL('/home', request.url));
    }

    // Si hay token o la ruta es pública, continuar normalmente
    return NextResponse.next();
}

// Configuración del middleware para aplicar a rutas específicas
export const config = {
    matcher: ['/redeco/:path*', '/reune/:path*', '/reclamaciones/:path*'],
};
