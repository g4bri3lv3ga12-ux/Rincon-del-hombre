"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/app/components/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  slug: string;
  category?: string;
}

export default function ProductosPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [loading, setLoading] = useState(true);

  // Mock data - En producción esto vendría de la API
  const allProducts: Product[] = [
    {
      id: "1",
      name: "Polo Dry Fit Azul Marino",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1500488554149-2b902b5a8d93?w=500&h=500&fit=crop",
      slug: "polo-dry-fit-azul-marino",
      category: "polos",
    },
    {
      id: "2",
      name: "Polo Dry Fit Gris",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1500488554149-2b902b5a8d93?w=500&h=500&fit=crop",
      slug: "polo-dry-fit-gris",
      category: "polos",
    },
    {
      id: "3",
      name: "Sudadera Premium Negro",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1556821552-5f6f32c432c9?w=500&h=500&fit=crop",
      slug: "sudadera-premium-negro",
      category: "sudaderas",
    },
    {
      id: "4",
      name: "Sudadera Beige",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1556821552-5f6f32c432c9?w=500&h=500&fit=crop",
      slug: "sudadera-beige",
      category: "sudaderas",
    },
    {
      id: "5",
      name: "Playera Slim Fit Azul Turquesa",
      price: 199.99,
      salePrice: 99.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      slug: "playera-slim-fit-azul-turquesa",
      category: "playeras",
    },
    {
      id: "6",
      name: "Playera Slim Fit Azul Cielo",
      price: 199.99,
      salePrice: 99.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      slug: "playera-slim-fit-azul-cielo",
      category: "playeras",
    },
    {
      id: "7",
      name: "Playera Slim Rosa Pastel",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      slug: "playera-slim-rosa-pastel",
      category: "playeras",
    },
    {
      id: "8",
      name: "Playera Slim Rojo Vino",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      slug: "playera-slim-rojo-vino",
      category: "playeras",
    },
  ];

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "polos", name: "Polos" },
    { id: "sudaderas", name: "Sudaderas" },
    { id: "playeras", name: "Playeras" },
  ];

  useEffect(() => {
    setLoading(true);
    // Simulamos una llamada a la API
    setTimeout(() => {
      if (selectedCategory === "todos") {
        setProducts(allProducts);
      } else {
        setProducts(
          allProducts.filter((p) => p.category === selectedCategory)
        );
      }
      setLoading(false);
    }, 300);
  }, [selectedCategory]);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-light">
        <div className="container-custom">
          <h1 className="section-title">Catálogo de Productos</h1>
          <p className="section-subtitle">
            Descubre nuestra colección de ropa y accesorios masculinos
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-20">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-12">
            <h3 className="text-lg font-bold mb-6">Categorías</h3>
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-primary text-white"
                      : "bg-light text-primary hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  salePrice={product.salePrice}
                  image={product.image}
                  slug={product.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No hay productos en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
