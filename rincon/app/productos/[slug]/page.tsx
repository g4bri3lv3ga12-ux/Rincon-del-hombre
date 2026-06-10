"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ShoppingBag, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

export default function ProductDetail({ params }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Azul Marino");
  const [quantity, setQuantity] = useState(1);

  // Mock data - En producción vendría de la API
  const product = {
    id: "1",
    name: "Polo Dry Fit Azul Marino",
    price: 299.99,
    description:
      "Un polo de alta calidad con tecnología Dry Fit que mantiene tu cuerpo seco y cómodo. Perfecto para el clima cálido o para actividades deportivas.",
    fullDescription:
      "Este polo Dry Fit está hecho con materiales premium que ofrecen máximo confort y durabilidad. La tecnología Dry Fit ayuda a eliminar la humedad rápidamente, manteniéndote fresco durante todo el día. El corte es moderno y versátil, perfecto para looks casuales o semi-formales.",
    images: [
      "https://images.unsplash.com/photo-1500488554149-2b902b5a8d93?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Azul Marino", "Gris", "Blanco", "Negro"],
    category: "Polos",
    inStock: true,
  };

  const handleWhatsApp = () => {
    const message = `Hola! Me interesa el producto: *${product.name}* (Talla: ${selectedSize}, Color: ${selectedColor}, Cantidad: ${quantity}). Precio: $${product.price}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/5215555555555?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="py-4 bg-light border-b border-gray-200">
        <div className="container-custom flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Inicio
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/productos" className="text-gray-600 hover:text-primary">
            Productos
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-primary font-bold">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative h-96 md:h-[600px] bg-light rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative h-24 bg-light rounded-lg overflow-hidden cursor-pointer hover:ring-2 ring-primary transition"
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  En Stock
                </span>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Colors */}
              <div className="mb-8">
                <h3 className="font-bold mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition ${
                        selectedColor === color
                          ? "border-primary bg-primary text-white"
                          : "border-gray-200 text-primary hover:border-primary"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="font-bold mb-3">Talla</h3>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 font-bold transition ${
                        selectedSize === size
                          ? "border-primary bg-primary text-white"
                          : "border-gray-200 text-primary hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="font-bold mb-3">Cantidad</h3>
                <div className="flex items-center gap-3 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-primary transition"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-primary transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-col sm:flex-row">
                <button className="flex-1 btn-primary flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Agregar al Carrito
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Comprar por WhatsApp
                </button>
              </div>

              {/* Info */}
              <div className="mt-12 p-6 bg-light rounded-lg">
                <h3 className="font-bold mb-4">Información Adicional</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    <strong>Categoría:</strong> {product.category}
                  </li>
                  <li>
                    <strong>Material:</strong> 100% Poliéster
                  </li>
                  <li>
                    <strong>Cuidado:</strong> Lavar en agua fría, secar al aire
                  </li>
                  <li>
                    <strong>Envío:</strong> Gratis en compras mayores a $1,500
                  </li>
                </ul>
              </div>

              {/* Description */}
              <div className="mt-12">
                <h3 className="text-xl font-serif font-bold mb-4">
                  Descripción Completa
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <h2 className="section-title mb-8">Productos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="card-product card-hover">
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={`https://images.unsplash.com/photo-1500488554149-2b902b5a8d93?w=500&h=500&fit=crop`}
                    alt="Related Product"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold mb-2">
                    Producto Relacionado
                  </h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    $299.99
                  </p>
                  <button className="btn-primary w-full text-sm">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
