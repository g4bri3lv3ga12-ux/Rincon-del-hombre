"use client";

export default function TerminosPage() {
  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-light">
        <div className="container-custom">
          <h1 className="section-title">Términos y Condiciones</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                1. Aceptación de Términos
              </h2>
              <p>
                Al acceder y utilizar este sitio web, aceptas estar vinculado por
                estos Términos y Condiciones. Si no estás de acuerdo con ninguna
                parte de estos términos, no uses nuestro sitio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                2. Uso Licenciado
              </h2>
              <p>
                Se te otorga una licencia limitada, no exclusiva e intransferible
                para acceder y usar nuestro sitio web únicamente para propósitos
                personales y no comerciales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                3. Restricciones del Usuario
              </h2>
              <p>Como usuario, te comprometes a:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>No reproducir, duplicar o copiar contenido</li>
                <li>No intentar acceder a áreas restringidas</li>
                <li>No transmitir virus o código malicioso</li>
                <li>No interferir con las operaciones del sitio</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                4. Productos y Precios
              </h2>
              <p>
                Nos reservamos el derecho de cambiar precios, descripción de
                productos e información de disponibilidad en cualquier momento.
                Todos los precios están en pesos mexicanos (MXN).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                5. Pedidos y Pago
              </h2>
              <p>
                Al realizar un pedido, aceptas los términos de nuestra tienda.
                Todos los pagos deben completarse antes del envío. Nos
                reservamos el derecho de rechazar o cancelar cualquier pedido.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                6. Envíos y Entregas
              </h2>
              <p>
                Los tiempos de envío son estimados. No somos responsables de
                retrasos fuera de nuestro control. Envío gratis en compras
                mayores a $1,500.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                7. Cambios y Devoluciones
              </h2>
              <p>
                Los clientes pueden solicitar cambios dentro de 7 días después
                de recibir el producto, siempre que esté sin usar y en condiciones
                originales. Consulta nuestra política completa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                8. Limitación de Responsabilidad
              </h2>
              <p>
                En la máxima medida permitida por la ley, Rincón del Hombre no
                será responsable por daños indirectos, incidentales, especiales
                o consecuentes derivados del uso de nuestro sitio o productos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                9. Modificaciones de Términos
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier
                momento. Los cambios serán efectivos inmediatamente después de la
                publicación. Tu uso continuado indica aceptación.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3">
                10. Ley Aplicable
              </h2>
              <p>
                Estos términos están regidos por las leyes de México. Cualquier
                disputa se resolverá en los juzgados competentes de México.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
