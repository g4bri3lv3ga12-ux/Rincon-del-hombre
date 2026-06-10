import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

export async function POST(request: NextRequest) {
  try {
    if (!JWT_SECRET || !ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
      return NextResponse.json(
        { message: "Faltan variables de entorno del administrador" },
        { status: 500 }
      );
    }

    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ message: "Usuario y contraseña requeridos" }, { status: 400 });
    }

    const validUser = username === ADMIN_USERNAME;
    const validPassword = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

    if (!validUser || !validPassword) {
      return NextResponse.json({ message: "Credenciales inválidas" }, { status: 401 });
    }

    const token = jwt.sign({ role: "admin", username: ADMIN_USERNAME }, JWT_SECRET, { expiresIn: "8h" });
    const response = NextResponse.json({ admin: { username: ADMIN_USERNAME } }, { status: 200 });

    response.cookies.set("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 8,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ message: "Error en el servidor" }, { status: 500 });
  }
}
