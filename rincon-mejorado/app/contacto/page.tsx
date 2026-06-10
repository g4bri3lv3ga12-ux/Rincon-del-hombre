import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { brand, whatsappLink } from "@/app/lib/store-data";

export default function ContactoPage() {
  return (
    <main>
      <section className="bg-primary py-20 text-white md:py-28">
        <div className="container-custom max-w-4xl">
          <p className="section-kicker text-beige">Contacto</p>
          <h1 className="mb-6 text-5xl text-white md:text-7xl">Hablemos de tu próximo outfit.</h1>
          <p className="text-lg text-white/65">Escríbenos para consultar disponibilidad, tallas, colores y métodos de entrega.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {[
              { icon: MessageCircle, title: "WhatsApp", text: "Atención directa", href: whatsappLink("Hola, quiero información de Rincón del Hombre.") },
              { icon: MapPin, title: "Ubicación", text: brand.location, href: "#" },
              { icon: Phone, title: "Teléfono", text: "998 301 6872", href: "tel:+529983016872" },
              { icon: Mail, title: "Correo", text: "contacto@rincondelhombre.com", href: "mailto:contacto@rincondelhombre.com" },
            ].map((item) => (
              <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex gap-4 rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-full bg-light text-accent"><item.icon className="h-5 w-5" /></div>
                <div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-sm text-primary/55">{item.text}</p>
                </div>
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline"><Instagram className="h-4 w-4" /> Instagram</a>
              <a href={brand.facebook} target="_blank" rel="noopener noreferrer" className="btn-outline"><Facebook className="h-4 w-4" /> Facebook</a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-light p-6 md:p-10">
            <h2 className="mb-3 text-3xl">Envíanos un mensaje</h2>
            <p className="mb-8 text-sm text-primary/55">Este formulario es visual. Para venta directa, usa WhatsApp.</p>
            <form className="grid gap-4">
              <input className="input-premium" placeholder="Nombre" />
              <input className="input-premium" placeholder="Correo o teléfono" />
              <textarea className="input-premium min-h-36" placeholder="¿Qué producto buscas?" />
              <a href={whatsappLink("Hola, quiero consultar productos de Rincón del Hombre.")} target="_blank" rel="noopener noreferrer" className="btn-primary">Enviar por WhatsApp</a>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
