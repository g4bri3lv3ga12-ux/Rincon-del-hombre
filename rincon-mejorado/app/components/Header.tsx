"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, ShoppingBag, X } from "lucide-react";
import { brand, whatsappLink } from "@/app/lib/store-data";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const wa = whatsappLink("Hola, quiero información de Rincón del Hombre.");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fbfaf7]/85 backdrop-blur-xl">
      <nav className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-lg shadow-black/10">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <span className="block font-serif text-xl font-bold tracking-tight">Rincón</span>
            <span className="hidden text-[11px] uppercase tracking-[0.24em] text-accent sm:block">del Hombre</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-primary/75 transition hover:text-accent">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-sm">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-black/5 bg-[#fbfaf7] md:hidden">
          <div className="container-custom flex flex-col gap-2 py-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-2xl px-4 py-3 font-semibold hover:bg-light">
                {link.label}
              </Link>
            ))}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
              <MessageCircle className="h-4 w-4" /> Contactar por WhatsApp
            </a>
            <p className="pt-2 text-xs text-primary/45">{brand.location}</p>
          </div>
        </div>
      )}
    </header>
  );
}
