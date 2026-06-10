"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, MessageCircle, Minus, Plus, ShieldCheck } from "lucide-react";
import { formatPrice, products, whatsappLink } from "@/app/lib/store-data";

interface ProductDetailsProps { params: { slug: string } }

export default function ProductDetail({ params }: ProductDetailsProps) {
  const product = products.find((item) => item.slug === params.slug);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="py-20">
        <div className="container-custom rounded-[2rem] bg-light p-12 text-center">
          <h1 className="mb-3 text-4xl">Producto no encontrado</h1>
          <p className="mb-6 text-primary/55">El producto que buscas no está disponible.</p>
          <Link href="/productos" className="btn-primary">Volver al catálogo</Link>
        </div>
      </main>
    );
  }

  const sizes = ["S", "M", "L", "XL"];
  const message = `Hola, me interesa ${product.name}. Talla: ${selectedSize}. Cantidad: ${quantity}.`;

  return (
    <main className="w-full">
      <div className="border-b border-black/5 bg-light/60 py-4">
        <div className="container-custom flex flex-wrap items-center gap-2 text-sm text-primary/55">
          <Link href="/">Inicio</Link><ChevronRight className="h-4 w-4" />
          <Link href="/productos">Productos</Link><ChevronRight className="h-4 w-4" />
          <span className="font-bold text-primary">{product.name}</span>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container-custom grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-light shadow-[0_30px_100px_rgba(20,18,15,.12)]">
              <Image src={product.image} alt={product.name} fill className="object-cover" priority />
              {product.badge && <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">{product.badge}</span>}
            </div>
          </div>

          <div className="lg:pt-8">
            <p className="section-kicker">Producto</p>
            <h1 className="mb-4 text-4xl md:text-6xl">{product.name}</h1>
            <p className="mb-6 max-w-xl text-lg text-primary/60">{product.description}</p>

            <div className="mb-8 flex items-end gap-3">
              <span className="text-4xl font-black text-primary">{formatPrice(product.salePrice ?? product.price)}</span>
              {product.salePrice && <span className="pb-1 text-lg text-primary/35 line-through">{formatPrice(product.price)}</span>}
            </div>

            <div className="mb-8">
              <h3 className="mb-3 text-base font-bold">Talla</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`grid h-12 w-12 place-items-center rounded-full border font-bold transition ${selectedSize === size ? "border-primary bg-primary text-white" : "border-black/10 bg-white text-primary hover:border-primary"}`}>{size}</button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-3 text-base font-bold">Cantidad</h3>
              <div className="inline-flex items-center rounded-full border border-black/10 bg-white p-1">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="grid h-10 w-10 place-items-center rounded-full hover:bg-light"><Minus className="h-4 w-4" /></button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-light"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                <MessageCircle className="h-5 w-5" /> Pedir por WhatsApp
              </a>
              <Link href="/productos" className="btn-outline">Seguir viendo</Link>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-light p-5">
              <div className="flex gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-accent" />
                <p className="text-sm text-primary/60"><strong className="text-primary">Compra directa y segura.</strong> Confirma disponibilidad, talla y método de entrega antes de comprar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
