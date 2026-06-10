import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Truck } from "lucide-react";
import ProductCard from "@/app/components/ProductCard";
import { brand, products, whatsappLink } from "@/app/lib/store-data";

export default function Home() {
  const featured = products.filter((product) => product.featured).slice(0, 4);

  return (
    <main className="w-full overflow-hidden">
      <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 animate-hero">
          <Image
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1800&h=1200&fit=crop"
            alt="Moda masculina premium"
            fill
            className="object-cover opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(184,138,68,.35),transparent_32%)]" />
        </div>

        <div className="container-custom relative z-10 grid min-h-[calc(100vh-76px)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl animate-fade-in">
            <p className="section-kicker text-beige">Nueva imagen digital</p>
            <h1 className="mb-6 text-5xl font-bold leading-[0.95] text-white md:text-7xl lg:text-8xl">
              Viste con presencia. Sin complicarte.
            </h1>
            <p className="mb-9 max-w-2xl text-lg text-white/75 md:text-xl">
              {brand.name} reúne prendas masculinas cómodas, limpias y fáciles de combinar para elevar tu estilo diario.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/productos" className="btn-secondary">
                Ver catálogo <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={whatsappLink("Hola, quiero ver productos disponibles de Rincón del Hombre.")} target="_blank" rel="noopener noreferrer" className="btn-outline border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary">
                <MessageCircle className="h-5 w-5" /> Comprar por WhatsApp
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="glass-card ml-auto max-w-sm rounded-[2rem] p-4 text-primary">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-light">
                <Image src="https://images.unsplash.com/photo-1516826957135-700dedea698c?w=900&h=1200&fit=crop" alt="Colección masculina" fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Colección</p>
                <h2 className="mt-2 text-3xl">Esenciales para hombre</h2>
                <p className="mt-3 text-sm text-primary/60">Polos, playeras, sudaderas y accesorios seleccionados para uso diario.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16">
        <div className="container-custom grid gap-4 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Estilo limpio", text: "Prendas sobrias, modernas y fáciles de combinar." },
            { icon: ShieldCheck, title: "Compra segura", text: "Atención directa y confirmación de disponibilidad por WhatsApp." },
            { icon: Truck, title: "Entrega práctica", text: "Consulta métodos de entrega y envíos disponibles." },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-black/5 bg-white p-7 shadow-sm">
              <item.icon className="mb-5 h-7 w-7 text-accent" />
              <h3 className="mb-2 text-xl">{item.title}</h3>
              <p className="text-sm text-primary/55">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Catálogo</p>
              <h2 className="section-title">Productos destacados</h2>
              <p className="section-subtitle">Una selección de prendas que funcionan para el día a día, salidas casuales y looks más cuidados.</p>
            </div>
            <Link href="/productos" className="btn-outline w-fit">Ver todo <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => <ProductCard key={product.id} {...product} />)}
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-primary">
            <Image src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=1200&h=900&fit=crop" alt="Nosotros Rincón del Hombre" fill className="object-cover opacity-90" />
          </div>
          <div>
            <p className="section-kicker">Nosotros</p>
            <h2 className="section-title">Una marca para hombres que cuidan su imagen.</h2>
            <p className="mb-6 text-primary/60">
              En {brand.name} buscamos que cada prenda se sienta cómoda, se vea actual y ayude a proyectar seguridad. Nuestro enfoque es simple: piezas funcionales, buena atención y una experiencia de compra directa.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5"><strong>Minimal</strong><p className="mt-1 text-sm">Sin saturar, sin complicar.</p></div>
              <div className="rounded-2xl bg-white p-5"><strong>Masculino</strong><p className="mt-1 text-sm">Tonos y cortes versátiles.</p></div>
            </div>
            <Link href="/nosotros" className="btn-primary mt-8">Conocer la marca</Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom rounded-[2rem] bg-primary p-8 text-white md:p-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="section-kicker text-beige">Compra directa</p>
              <h2 className="mb-4 text-4xl text-white md:text-5xl">¿Quieres revisar disponibilidad?</h2>
              <p className="max-w-2xl text-white/65">Escríbenos por WhatsApp y te ayudamos con tallas, colores, precios y productos disponibles.</p>
            </div>
            <a href={whatsappLink("Hola, quiero revisar disponibilidad de productos.")} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full md:w-auto">
              <MessageCircle className="h-5 w-5" /> Hablar ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
