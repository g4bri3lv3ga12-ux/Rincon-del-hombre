"use client";

export default function PrivacidadPage() {
  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-light">
        <div className="container-custom">
          <h1 className="section-title">Política de Privacidad</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                1. Introducción
              </h2>
              <p>
                Rincón del Hombre ("nosotros", "nuestro" o "la Compañía")
                respeta la privacidad de nuestros usuarios ("usuario" o "tú").
                Esta Política de Privacidad explica cómo recopilamos, usamos,
                divulgamos y protegemos tu información.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                2. Información que Recopilamos
              </h2>
              <p>
                Podemos recopilar información sobre ti de las siguientes maneras:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Nombre, correo electrónico y teléfono al contactarnos</li>
                <li>Dirección de envío para pedidos</li>
                <li>Información de pago (procesada de forma segura)</li>
                <li>
                  Datos de navegación como cookies e información del navegador
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                3. Cómo Usamos tu Información
              </h2>
              <p>Usamos la información recopilada para:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Procesar y entregar tus pedidos</li>
                <li>Responder a tus consultas</li>
                <li>Enviar actualizaciones sobre tu pedido</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                4. Protección de Datos
              </h2>
              <p>
                Implementamos medidas de seguridad apropiadas para proteger tu
                información personal contra acceso no autorizado, alteración,
                divulgación o destrucción.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                5. Contacto
              </h2>
              <p>
                Si tienes preguntas sobre esta Política de Privacidad,
                contáctanos a través de nuestro formulario de contacto o por
                WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
