"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aquí irá la llamada a la API para obtener productos destacados
    // Por ahora usamos datos mock
    setProducts([
      {
        id: "1",
        name: "Polo Dry Fit Azul Marino",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1500488554149-2b902b5a8d93?w=500&h=500&fit=crop",
        slug: "polo-dry-fit-azul-marino",
      },
      {
        id: "2",
        name: "Sudadera Premium Negro",
        price: 449.99,
        image: "https://images.unsplash.com/photo-1556821552-5f6f32c432c9?w=500&h=500&fit=crop",
        slug: "sudadera-premium-negro",
      },
      {
        id: "3",
        name: "Playera Slim Fit Gris",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
        slug: "playera-slim-fit-gris",
      },
      {
        id: "4",
        name: "Sudadera Beige Camel",
        price: 449.99,
        image: "https://images.unsplash.com/photo-1556821552-5f6f32c432c9?w=500&h=500&fit=crop",
        slug: "sudadera-beige-camel",
      },
    ]);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488869593429-0f0e7db3e4a0?w=1600&h=900&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Rincón del Hombre
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100 animate-fade-in">
            Donde el estilo y la calidad se encuentran. Descubre ropa y
            accesorios que proyectan tu esencia.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
            <Link href="/productos" className="btn-primary">
              Ver Productos
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/5215555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline bg-white text-primary"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Destacados</h2>
            <p className="section-subtitle">
              Nuestras prendas más buscadas y recomendadas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product: any) => (
              <Link key={product.id} href={`/productos/${product.slug}`}>
                <div className="card-product card-hover">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      ${product.price}
                    </p>
                    <button className="btn-primary w-full text-sm">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/productos" className="btn-outline">
              Ver Todo el Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">¿Por qué elegirnos?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Calidad Premium</h3>
              <p className="text-gray-600">
                Materiales de la mejor calidad, seleccionados cuidadosamente
                para tu confort.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                🚚
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                Envíos Gratis
              </h3>
              <p className="text-gray-600">
                Envío gratuito en compras mayores a $1,500. Rápido y seguro.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">
                Atención Personalizada
              </h3>
              <p className="text-gray-600">
                Estamos disponibles por WhatsApp para resolver tus dudas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Mantente Actualizado
            </h2>
            <p className="mb-8 text-gray-200">
              Recibe nuestras ofertas exclusivas y novedades directamente en tu
              correo.
            </p>
            <form className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="btn-secondary font-bold"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
