import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Datos de ejemplo - En producción esto vendría de una base de datos
const ADMIN_USERS = [
  {
    id: "1",
    username: "admin",
    password: await bcrypt.hash("admin123", 10), // Contraseña hasheada
  },
];

const JWT_SECRET = process.env.JWT_SECRET || "your-jwt-secret-change-this";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Usuario y contraseña requeridos" },
        { status: 400 }
      );
    }

    // Buscar usuario
    const user = ADMIN_USERS.find((u) => u.username === username);

    if (!user) {
      return NextResponse.json(
        { message: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Credenciales inválidas" },
        { status: 401 }
      );
    }

    // Generar JWT
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Crear respuesta con cookie
    const response = NextResponse.json(
      {
        token,
        admin: {
          id: user.id,
          username: user.username,
        },
      },
      { status: 200 }
    );

    // Establecer cookie segura
    response.cookies.set("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400, // 24 horas
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Error en el servidor" },
      { status: 500 }
    );
  }
}
