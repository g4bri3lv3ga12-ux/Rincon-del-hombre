"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-serif font-bold hidden sm:inline">
            Rincón
          </span>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium hover:text-accent transition">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-sm font-medium hover:text-accent transition">
            Nosotros
          </Link>
          <Link href="/productos" className="text-sm font-medium hover:text-accent transition">
            Productos
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-accent transition">
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-light rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-light border-t border-gray-100">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-accent transition"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="text-sm font-medium hover:text-accent transition"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/productos"
              className="text-sm font-medium hover:text-accent transition"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium hover:text-accent transition"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
