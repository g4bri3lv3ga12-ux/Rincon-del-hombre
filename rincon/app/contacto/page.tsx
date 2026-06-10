"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-light">
        <div className="container-custom">
          <h1 className="section-title">Contacto</h1>
          <p className="section-subtitle">
            Estamos aquí para ayudarte. Contáctanos por el medio que prefieras.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5215555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-light rounded-lg hover:shadow-lg transition text-center"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Respuestas rápidas y atención personalizada
              </p>
              <span className="text-green-500 font-bold">+52 1 555 555 5555</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@rincon.mx"
              className="p-8 bg-light rounded-lg hover:shadow-lg transition text-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">
                Envíanos tus preguntas o sugerencias
              </p>
              <span className="text-blue-500 font-bold">info@rincon.mx</span>
            </a>

            {/* Ubicación */}
            <div className="p-8 bg-light rounded-lg text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Ubicación</h3>
              <p className="text-gray-600">
                Ubicado en el corazón de México
              </p>
              <p className="text-gray-600 mt-4">
                Atendemos entregas en todo el territorio nacional
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">
                Envíanos un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
                    placeholder="+52 1 555 555 5555"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition resize-none"
                    placeholder="Cuéntanos qué necesitas..."
                  ></textarea>
                </div>

                {submitted ? (
                  <div className="p-4 bg-green-100 text-green-800 rounded-lg font-bold">
                    ¡Mensaje enviado! Nos pondremos en contacto pronto.
                  </div>
                ) : (
                  <button type="submit" className="btn-primary w-full">
                    Enviar Mensaje
                  </button>
                )}
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">
                ¿Por qué contactarnos?
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                      ✓
                    </span>
                    Consultas sobre Productos
                  </h3>
                  <p className="text-gray-700">
                    Asesoramiento sobre tallas, materiales, colores y disponibilidad.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                      ✓
                    </span>
                    Seguimiento de Pedidos
                  </h3>
                  <p className="text-gray-700">
                    Rastreo en tiempo real y estado de tu entrega.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                      ✓
                    </span>
                    Cambios y Devoluciones
                  </h3>
                  <p className="text-gray-700">
                    Política flexible para tu tranquilidad y satisfacción.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                      ✓
                    </span>
                    Sugerencias y Feedback
                  </h3>
                  <p className="text-gray-700">
                    Tu opinión es valiosa. Queremos mejorar constantemente.
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="mt-12 p-6 bg-light rounded-lg">
                <h3 className="font-bold mb-4">Síguenos en Redes</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/rinconbdo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/rinconbdo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            ¿Necesitas Ayuda Ahora?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Nuestro equipo está disponible por WhatsApp
          </p>
          <a
            href="https://wa.me/5215555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
