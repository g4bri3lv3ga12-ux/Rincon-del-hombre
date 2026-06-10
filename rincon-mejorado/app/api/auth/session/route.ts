import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("adminToken")?.value;
  const secret = process.env.JWT_SECRET;

  if (!token || !secret) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, secret) as { username?: string; role?: string };
    if (decoded.role !== "admin") throw new Error("Invalid role");
    return NextResponse.json({ authenticated: true, admin: { username: decoded.username ?? "admin" } });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
