import Link from "next/link";
import { Facebook, Instagram, MessageCircle, ShoppingBag } from "lucide-react";
import { brand, whatsappLink } from "@/app/lib/store-data";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-2xl text-white">{brand.name}</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">Moda masculina</p>
            </div>
          </div>
          <p className="max-w-sm text-sm text-white/60">{brand.description}</p>
        </div>

        <div>
          <h4 className="mb-4 font-bold text-white">Menú</h4>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/productos">Catálogo</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-bold text-white">Legal</h4>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <Link href="/privacidad">Privacidad</Link>
            <Link href="/terminos">Términos</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-bold text-white">Contacto</h4>
          <p className="mb-5 text-sm text-white/60">{brand.location}</p>
          <div className="flex gap-3">
            <a href={whatsappLink("Hola, quiero información de Rincón del Hombre.")} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-primary"><MessageCircle className="h-5 w-5" /></a>
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href={brand.facebook} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-primary"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">© {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</div>
    </footer>
  );
}
