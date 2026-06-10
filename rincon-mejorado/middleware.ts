import { NextRequest, NextResponse } from "next/server";

function base64UrlToUint8Array(input: string) {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(input.length / 4) * 4, "=");
  const binary = atob(base64);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

async function verifyJwt(token: string, secret: string) {
  const [header, payload, signature] = token.split(".");
  if (!header || !payload || !signature) return false;

  const data = new TextEncoder().encode(`${header}.${payload}`);
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );

  const validSignature = await crypto.subtle.verify("HMAC", key, base64UrlToUint8Array(signature), data);
  if (!validSignature) return false;

  const claims = JSON.parse(new TextDecoder().decode(base64UrlToUint8Array(payload))) as { exp?: number; role?: string };
  if (claims.role !== "admin") return false;
  if (!claims.exp || claims.exp * 1000 < Date.now()) return false;
  return true;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();

  const isLogin = pathname === "/admin/login";
  const token = request.cookies.get("adminToken")?.value;
  const secret = process.env.JWT_SECRET;
  const isValid = Boolean(token && secret && (await verifyJwt(token, secret)));

  if (!isValid && !isLogin) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (isValid && isLogin) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
