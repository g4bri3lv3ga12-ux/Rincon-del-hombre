"use client";

import { useState } from "react";
import { Save } from "lucide-react";

export default function NosotrosAdminPage() {
  const [formData, setFormData] = useState({
    title: "Nosotros",
    description:
      "En Rincón del Hombre creemos que no debes de pagar precios excesivos para verte bien.",
    mission:
      "Ofrecer ropa y accesorios de calidad premium para hombres que buscan proyectar confianza y estilo.",
    vision:
      "Ser la marca referente en moda masculina accesible y de calidad en México.",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-primary">
          Editar Sección Nosotros
        </h1>
        <p className="text-gray-600 mt-1">
          Actualiza la información sobre tu marca y negocio
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-bold mb-2">Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold mb-2">
              Descripción Principal
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition resize-none"
              placeholder="Descripción breve sobre tu marca..."
            />
          </div>

          {/* Mission */}
          <div>
            <label className="block text-sm font-bold mb-2">Misión</label>
            <textarea
              name="mission"
              value={formData.mission}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition resize-none"
              placeholder="¿Cuál es tu misión?"
            />
          </div>

          {/* Vision */}
          <div>
            <label className="block text-sm font-bold mb-2">Visión</label>
            <textarea
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition resize-none"
              placeholder="¿Cuál es tu visión?"
            />
          </div>

          {/* Status Message */}
          {saved && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg font-bold">
              ✓ Cambios guardados exitosamente
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition font-bold"
          >
            <Save className="w-5 h-5" />
            Guardar Cambios
          </button>
        </form>
      </div>

      {/* Preview */}
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold mb-6 text-primary">Vista Previa</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-2">{formData.title}</h3>
            <p className="text-gray-700">{formData.description}</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">Misión:</h4>
            <p className="text-gray-600">{formData.mission}</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">Visión:</h4>
            <p className="text-gray-600">{formData.vision}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
