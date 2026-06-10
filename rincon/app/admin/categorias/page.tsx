"use client";

import { useState } from "react";
import { Edit2, Trash2, Plus } from "lucide-react";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export default function CategoriasAdminPage() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Polos",
      slug: "polos",
      description: "Polos y camisetas de alta calidad",
    },
    {
      id: "2",
      name: "Sudaderas",
      slug: "sudaderas",
      description: "Sudaderas y hoodie premium",
    },
    {
      id: "3",
      name: "Playeras",
      slug: "playeras",
      description: "Playeras slim fit variados colores",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
    });
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar esta categoría?")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories(
        categories.map((c) =>
          c.id === editingCategory.id
            ? {
                ...c,
                name: formData.name,
                slug: formData.name.toLowerCase().replace(/\s+/g, "-"),
                description: formData.description,
              }
            : c
        )
      );
    } else {
      const newCategory: Category = {
        id: Date.now().toString(),
        name: formData.name,
        slug: formData.name.toLowerCase().replace(/\s+/g, "-"),
        description: formData.description,
      };
      setCategories([...categories, newCategory]);
    }
    setShowModal(false);
    setEditingCategory(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary">
            Categorías
          </h1>
          <p className="text-gray-600 mt-1">Gestiona las categorías de productos</p>
        </div>
        <button
          onClick={() => {
            setEditingCategory(null);
            setFormData({ name: "", description: "" });
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
        >
          <Plus className="w-5 h-5" />
          Nueva Categoría
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-primary mb-2">
              {category.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{category.description}</p>
            <p className="text-gray-500 text-xs mb-4">Slug: {category.slug}</p>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(category)}
                className="flex-1 flex items-center justify-center gap-2 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
              >
                <Edit2 className="w-4 h-4" />
                Editar
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="flex-1 flex items-center justify-center gap-2 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <Trash2 className="w-4 h-4" />
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            <h2 className="text-2xl font-bold mb-6">
              {editingCategory ? "Editar Categoría" : "Nueva Categoría"}
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
                <label className="block text-sm font-bold mb-2">
                  Descripción
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none resize-none"
                  rows={3}
                />
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
