import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { isAdminRequest } from "@/app/lib/auth";

export async function GET() {
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  const data = await request.json();
  const category = await prisma.category.create({ data: { name: data.name, slug: data.slug, description: data.description } });
  return NextResponse.json(category, { status: 201 });
}
