"use client";

import { useState } from "react";
import Image from "next/image";
import { Edit2, Trash2, Plus, Eye } from "lucide-react";

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaUrl: string;
  active: boolean;
  order: number;
}

export default function BannersAdminPage() {
  const [banners, setBanners] = useState<Banner[]>([
    {
      id: "1",
      title: "Rincón del Hombre",
      subtitle: "Donde el estilo se encuentra con la calidad",
      imageUrl: "https://images.unsplash.com/photo-1488869593429-0f0e7db3e4a0?w=1200&h=400&fit=crop",
      ctaText: "Ver Productos",
      ctaUrl: "/productos",
      active: true,
      order: 1,
    },
    {
      id: "2",
      title: "Colección Premium",
      subtitle: "Descubre nuestras últimas novedades",
      imageUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=400&fit=crop",
      ctaText: "Explorar",
      ctaUrl: "/productos",
      active: true,
      order: 2,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    imageUrl: "",
    ctaText: "",
    ctaUrl: "",
  });

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    setFormData({
      title: banner.title,
      subtitle: banner.subtitle,
      imageUrl: banner.imageUrl,
      ctaText: banner.ctaText,
      ctaUrl: banner.ctaUrl,
    });
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este banner?")) {
      setBanners(banners.filter((b) => b.id !== id));
    }
  };

  const handleToggleActive = (id: string) => {
    setBanners(
      banners.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBanner) {
      setBanners(
        banners.map((b) =>
          b.id === editingBanner.id
            ? {
                ...b,
                title: formData.title,
                subtitle: formData.subtitle,
                imageUrl: formData.imageUrl,
                ctaText: formData.ctaText,
                ctaUrl: formData.ctaUrl,
              }
            : b
        )
      );
    } else {
      const newBanner: Banner = {
        id: Date.now().toString(),
        ...formData,
        active: true,
        order: banners.length + 1,
      };
      setBanners([...banners, newBanner]);
    }
    setShowModal(false);
    setEditingBanner(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary">
            Banners
          </h1>
          <p className="text-gray-600 mt-1">
            Gestiona los banners de la página principal
          </p>
        </div>
        <button
          onClick={() => {
            setEditingBanner(null);
            setFormData({
              title: "",
              subtitle: "",
              imageUrl: "",
              ctaText: "",
              ctaUrl: "",
            });
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
        >
          <Plus className="w-5 h-5" />
          Nuevo Banner
        </button>
      </div>

      {/* Banners List */}
      <div className="space-y-4">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6">
              {/* Image Thumbnail */}
              <div className="relative w-full md:w-32 h-32 flex-shrink-0">
                <Image
                  src={banner.imageUrl}
                  alt={banner.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {banner.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{banner.subtitle}</p>
                <p className="text-gray-500 text-xs">
                  CTA: {banner.ctaText} → {banner.ctaUrl}
                </p>
              </div>

              {/* Actions */}
              <div className="w-full md:w-auto flex gap-2">
                <button
                  onClick={() => handleToggleActive(banner.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                    banner.active
                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                      : "bg-red-100 text-red-800 hover:bg-red-200"
                  }`}
                >
                  {banner.active ? "Activo" : "Inactivo"}
                </button>
                <button
                  onClick={() => handleEdit(banner)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  title="Editar"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(banner.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  title="Eliminar"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto p-8">
            <h2 className="text-2xl font-bold mb-6">
              {editingBanner ? "Editar Banner" : "Nuevo Banner"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Título</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Subtítulo</label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) =>
                    setFormData({ ...formData, subtitle: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">URL de Imagen</label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Texto del Botón</label>
                <input
                  type="text"
                  value={formData.ctaText}
                  onChange={(e) =>
                    setFormData({ ...formData, ctaText: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">URL del Botón</label>
                <input
                  type="text"
                  value={formData.ctaUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, ctaUrl: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
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
