"use client";

import Image from "next/image";
import { Heart, Target, Eye } from "lucide-react";

export default function NosotrosPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-light">
        <div className="container-custom">
          <h1 className="section-title">Nosotros</h1>
          <p className="section-subtitle">
            Conoce la historia detrás de Rincón del Hombre
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="h-96 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf6f?w=600&h=400&fit=crop"
                alt="Rincón del Hombre"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">
                Quiénes Somos
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                En Rincón del Hombre creemos que <strong>no debes pagar precios
                excesivos para verte bien</strong>. Desde nuestros inicios, nos
                hemos dedicado a ofrecer ropa y accesorios de calidad premium
                para hombres que buscan proyectar confianza, estilo y presencia.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Nuestro objetivo es simple: ayudarte a construir tu estilo
                personal. <strong>Aquí no solo eliges ropa, eliges cómo quieres
                presentarte al mundo</strong>. Cada prenda está diseñada para
                acompañarte en tus metas, tus retos y tus días de victoria.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Porque construir tu propio camino es importante, y tu estilo es
                la huella que dejas en él. En Rincón del Hombre, somos más que
                una tienda: somos tus aliados en el viaje hacia la mejor versión
                de ti mismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestros Valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Calidad */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Pasión</h3>
              <p className="text-gray-700">
                Elegimos cada prenda con cuidado porque sabemos que se trata de
                tu imagen personal. Tu éxito es nuestro éxito.
              </p>
            </div>

            {/* Accesibilidad */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Propósito</h3>
              <p className="text-gray-700">
                Democratizamos la moda premium. La calidad no tiene que ser
                costosa, debe ser accesible.
              </p>
            </div>

            {/* Transparencia */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Confianza</h3>
              <p className="text-gray-700">
                Somos transparentes en todo lo que hacemos. Tu satisfacción es
                nuestra prioridad máxima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="section-title mb-8">¿Por qué elegir a Rincón?</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Calidad Garantizada</h3>
                  <p className="text-gray-700">
                    Todos nuestros productos son seleccionados en base a
                    rigurosos estándares de calidad.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Precios Justos</h3>
                  <p className="text-gray-700">
                    No pagamos publicidad cara, así tú ahorras. Enviamos gratis
                    en compras mayores a $1,500.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Atención Personal</h3>
                  <p className="text-gray-700">
                    Cada cliente es importante para nosotros. Estamos
                    disponibles por WhatsApp para asesorarte.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Variedad de Estilos</h3>
                  <p className="text-gray-700">
                    Desde clásico hasta contemporáneo. Tenemos algo para cada
                    tipo de hombre.
                  </p>
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
            Únete a la Comunidad Rincón
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Hombres que buscan calidad, estilo y confianza.
          </p>
          <a
            href="https://wa.me/5215555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Cuéntame Más por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
