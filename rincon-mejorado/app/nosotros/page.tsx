import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { brand } from "@/app/lib/store-data";

export default function NosotrosPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(184,138,68,.35),transparent_30%)]" />
        <div className="container-custom relative z-10 max-w-4xl">
          <p className="section-kicker text-beige">Nosotros</p>
          <h1 className="mb-6 text-5xl text-white md:text-7xl">Una tienda pensada para el hombre moderno.</h1>
          <p className="text-lg text-white/65 md:text-xl">{brand.description}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-light">
            <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=1400&fit=crop" alt="Rincón del Hombre" fill className="object-cover" />
          </div>
          <div>
            <p className="section-kicker">Nuestra esencia</p>
            <h2 className="section-title">Vestir bien también puede ser simple.</h2>
            <p className="mb-5 text-primary/60">Rincón del Hombre nace para ofrecer prendas masculinas que combinen comodidad, presencia y versatilidad. La idea es ayudarte a crear outfits limpios sin tener que complicarte.</p>
            <p className="mb-8 text-primary/60">Trabajamos con una selección enfocada en básicos premium, colores combinables y atención personalizada para que elijas mejor cada compra.</p>
            <div className="grid gap-3">
              {["Prendas fáciles de combinar", "Atención directa por WhatsApp", "Estilo sobrio, limpio y masculino"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-light p-4 font-semibold"><CheckCircle2 className="h-5 w-5 text-accent" /> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          {[
            ["Misión", "Ofrecer moda masculina práctica y actual, con una experiencia de compra cercana y confiable."],
            ["Visión", "Convertirnos en una marca referente para hombres que buscan verse bien con prendas versátiles."],
            ["Valores", "Calidad, confianza, atención personalizada y una estética limpia que conecte con el cliente."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.5rem] bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl">{title}</h3>
              <p className="text-sm text-primary/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom rounded-[2rem] bg-primary p-10 text-center text-white md:p-14">
          <h2 className="mb-4 text-4xl text-white">Conoce el catálogo</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/60">Encuentra prendas pensadas para elevar tu imagen diaria.</p>
          <Link href="/productos" className="btn-secondary">Ver productos <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
