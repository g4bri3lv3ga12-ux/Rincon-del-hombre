"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">
              Rincón del Hombre
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Donde el estilo y la calidad se encuentran. Ropa y accesorios para
              hombres que buscan proyectar seguridad y presencia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-accent transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-300 hover:text-accent transition">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-accent transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <MessageCircle className="w-4 h-4" />
                <a
                  href="https://wa.me/5215555555555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@rincon.mx</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>México</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/rinconbdo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/rinconbdo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5215555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-primary transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} Rincón del Hombre. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/terminos" className="hover:text-accent transition">
                Términos
              </Link>
              <Link href="/privacidad" className="hover:text-accent transition">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
