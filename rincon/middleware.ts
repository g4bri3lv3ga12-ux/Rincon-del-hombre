import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/", "/nosotros", "/productos", "/contacto", "/admin/login"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si es ruta pública, dejar pasar
  if (publicRoutes.some((route) => pathname === route)) {
    return NextResponse.next();
  }

  // Si intenta acceder a /admin sin estar autenticado, redirigir a login
  if (pathname.startsWith("/admin")) {
    const authToken = request.cookies.get("adminToken");

    if (!authToken && pathname !== "/admin/login") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Si ya está en login y tiene token, redirigir a dashboard
    if (authToken && pathname === "/admin/login") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
