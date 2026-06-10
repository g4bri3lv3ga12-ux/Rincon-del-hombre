"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import { categories, products } from "@/app/lib/store-data";

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const visibleProducts = useMemo(() => {
    if (selectedCategory === "todos") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="w-full">
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container-custom">
          <p className="section-kicker text-beige">Catálogo</p>
          <h1 className="mb-5 max-w-3xl text-5xl text-white md:text-7xl">Prendas seleccionadas para vestir mejor.</h1>
          <p className="max-w-2xl text-white/65">Explora polos, playeras, sudaderas y accesorios con un estilo masculino, limpio y fácil de combinar.</p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-custom">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl">Colección disponible</h2>
              <p className="mt-2 text-sm text-primary/55">Filtra por categoría y pide disponibilidad por WhatsApp.</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    selectedCategory === cat.id
                      ? "bg-primary text-white shadow-lg shadow-black/10"
                      : "border border-black/10 bg-white text-primary/65 hover:text-primary"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visibleProducts.map((product) => <ProductCard key={product.id} {...product} />)}
            </div>
          ) : (
            <div className="rounded-[2rem] bg-light p-12 text-center">
              <p className="text-lg text-primary/60">No hay productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
