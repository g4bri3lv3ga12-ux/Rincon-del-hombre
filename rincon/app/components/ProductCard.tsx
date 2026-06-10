"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, MessageCircle } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  slug: string;
}

export default function ProductCard({
  id,
  name,
  price,
  salePrice,
  image,
  slug,
}: ProductCardProps) {
  const discount = salePrice
    ? Math.round(((price - salePrice) / price) * 100)
    : 0;

  return (
    <Link href={`/productos/${slug}`}>
      <div className="card-product card-hover group cursor-pointer">
        {/* Image Container */}
        <div className="relative h-80 bg-light overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {discount}% OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-serif font-bold mb-2 line-clamp-2 group-hover:text-accent transition">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-primary">
              ${salePrice || price}
            </span>
            {salePrice && (
              <span className="text-lg text-gray-400 line-through">
                ${price}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 btn-primary text-sm flex items-center justify-center gap-2 hover:bg-secondary">
              <ShoppingBag className="w-4 h-4" />
              Ver
            </button>
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
