"use client";

import { useState } from "react";
import { Edit2, Trash2, Plus, Eye } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  active: boolean;
  image: string;
}

export default function ProductosAdminPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Polo Dry Fit Azul Marino",
      price: 299.99,
      category: "Polos",
      active: true,
      image: "https://images.unsplash.com/photo-1500488554149-2b902b5a8d93?w=100&h=100&fit=crop",
    },
    {
      id: "2",
      name: "Sudadera Premium Negro",
      price: 449.99,
      category: "Sudaderas",
      active: true,
      image: "https://images.unsplash.com/photo-1556821552-5f6f32c432c9?w=100&h=100&fit=crop",
    },
    {
      id: "3",
      name: "Playera Slim Fit Azul",
      price: 199.99,
      category: "Playeras",
      active: false,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    category: "",
  });

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
    });
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleToggleActive = (id: string) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, active: !p.active } : p
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                name: formData.name,
                price: formData.price,
                category: formData.category,
              }
            : p
        )
      );
    }
    setShowModal(false);
    setEditingProduct(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary">
            Productos
          </h1>
          <p className="text-gray-600 mt-1">
            Gestiona tu catálogo de productos
          </p>
        </div>
        <button
          onClick={() => {
            setEditingProduct(null);
            setFormData({ name: "", price: 0, category: "" });
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
        >
          <Plus className="w-5 h-5" />
          Nuevo Producto
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-light border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold">
                Producto
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold">
                Categoría
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold">Precio</th>
              <th className="px-6 py-4 text-left text-sm font-bold">Estado</th>
              <th className="px-6 py-4 text-right text-sm font-bold">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 hover:bg-light transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <span className="font-medium">{product.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{product.category}</td>
                <td className="px-6 py-4 font-bold">${product.price}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleToggleActive(product.id)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                      product.active
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-red-100 text-red-800 hover:bg-red-200"
                    }`}
                  >
                    {product.active ? "Activo" : "Inactivo"}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="Editar"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Eliminar"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            <h2 className="text-2xl font-bold mb-6">
              {editingProduct ? "Editar Producto" : "Nuevo Producto"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Precio</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: parseFloat(e.target.value),
                    })
                  }
                  required
                  step="0.01"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Categoría</label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="Polos">Polos</option>
                  <option value="Sudaderas">Sudaderas</option>
                  <option value="Playeras">Playeras</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-secondary transition font-bold"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition font-bold"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
