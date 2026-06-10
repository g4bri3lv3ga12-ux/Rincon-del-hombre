"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut, Home, Package, LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const admin = localStorage.getItem("adminName");

    if (!token) {
      router.push("/admin/login");
      return;
    }

    setIsAuthenticated(true);
    setAdminName(admin || "Admin");
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    document.cookie = "adminToken=; path=/; max-age=0";
    router.push("/admin/login");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 w-64 h-screen bg-primary text-white flex-col">
        <div className="p-6 border-b border-secondary">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
              R
            </div>
            <h1 className="text-xl font-serif font-bold">Rincón Admin</h1>
          </div>
          <p className="text-xs text-gray-400">Panel de Administración</p>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/admin/productos"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition"
          >
            <Package className="w-5 h-5" />
            Productos
          </Link>
          <Link
            href="/admin/categorias"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition"
          >
            <LayoutDashboard className="w-5 h-5" />
            Categorías
          </Link>
          <Link
            href="/admin/banners"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition"
          >
            <Home className="w-5 h-5" />
            Banners
          </Link>
          <Link
            href="/admin/nosotros"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition"
          >
            <Settings className="w-5 h-5" />
            Nosotros
          </Link>
        </nav>

        <div className="p-6 border-t border-secondary">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg w-full hover:bg-secondary transition text-red-400"
          >
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Bienvenido, {adminName}</h2>
          <button
            onClick={handleLogout}
            className="md:hidden flex items-center gap-2 text-red-500 hover:text-red-700"
          >
            <LogOut className="w-5 h-5" />
            Salir
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
