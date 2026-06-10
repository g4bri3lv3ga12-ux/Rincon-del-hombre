import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { isAdminRequest } from "@/app/lib/auth";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAdminRequest(request)) return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  try {
    const data = await request.json();
    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        price: data.price !== undefined ? Number(data.price) : undefined,
        salePrice: data.salePrice ? Number(data.salePrice) : null,
        images: data.images,
        sizes: data.sizes,
        colors: data.colors,
        categoryId: data.categoryId,
        active: data.active,
        featured: data.featured,
      },
    });
    return NextResponse.json(product);
  } catch {
    return NextResponse.json({ message: "No se pudo actualizar el producto" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAdminRequest(request)) return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  try {
    await prisma.product.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "No se pudo eliminar el producto" }, { status: 500 });
  }
}
