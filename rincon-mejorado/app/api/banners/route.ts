import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { isAdminRequest } from "@/app/lib/auth";

export async function GET() {
  const banners = await prisma.banner.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(banners);
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  const data = await request.json();
  const banner = await prisma.banner.create({
    data: {
      title: data.title,
      subtitle: data.subtitle,
      imageUrl: data.imageUrl,
      ctaText: data.ctaText,
      ctaUrl: data.ctaUrl,
      active: Boolean(data.active ?? true),
      order: Number(data.order ?? 0),
    },
  });
  return NextResponse.json(banner, { status: 201 });
}
