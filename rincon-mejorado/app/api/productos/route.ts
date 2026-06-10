import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { isAdminRequest } from "@/app/lib/auth";

export async function GET() {
  try {
    const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" }, include: { category: true } });
    return NextResponse.json(products);
  } catch {
    return NextResponse.json({ message: "No se pudieron obtener los productos" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  try {
    const data = await request.json();
    const product = await prisma.product.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        price: Number(data.price),
        salePrice: data.salePrice ? Number(data.salePrice) : null,
        images: data.images ?? [],
        sizes: data.sizes ?? [],
        colors: data.colors ?? [],
        categoryId: data.categoryId,
        active: Boolean(data.active ?? true),
        featured: Boolean(data.featured ?? false),
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch {
    return NextResponse.json({ message: "No se pudo crear el producto" }, { status: 500 });
  }
}
