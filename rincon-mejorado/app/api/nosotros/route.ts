import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { isAdminRequest } from "@/app/lib/auth";

export async function GET() {
  const about = await prisma.about.findFirst();
  return NextResponse.json(about);
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  const data = await request.json();
  const current = await prisma.about.findFirst();
  const about = current
    ? await prisma.about.update({ where: { id: current.id }, data })
    : await prisma.about.create({ data });
  return NextResponse.json(about);
}
