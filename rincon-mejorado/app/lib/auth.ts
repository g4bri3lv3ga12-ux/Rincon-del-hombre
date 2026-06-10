import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function isAdminRequest(request: NextRequest) {
  const token = request.cookies.get("adminToken")?.value;
  const secret = process.env.JWT_SECRET;
  if (!token || !secret) return false;

  try {
    const decoded = jwt.verify(token, secret) as { role?: string };
    return decoded.role === "admin";
  } catch {
    return false;
  }
}
