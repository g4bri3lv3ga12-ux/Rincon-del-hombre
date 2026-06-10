"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Home, Layers, LogOut, Package, Settings, Tag } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: Home },
  { href: "/admin/productos", label: "Productos", icon: Package },
  { href: "/admin/categorias", label: "Categorías", icon: Tag },
  { href: "/admin/banners", label: "Banners", icon: Layers },
  { href: "/admin/nosotros", label: "Nosotros", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    if (pathname === "/admin/login") return;

    fetch("/api/auth/session")
      .then((res) => {
        if (!res.ok) throw new Error("No auth");
        return res.json();
      })
      .then((data) => setAdminName(data.admin?.username ?? "Admin"))
      .catch(() => router.push("/admin/login"));
  }, [pathname, router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col bg-primary text-white md:flex">
        <div className="border-b border-white/10 p-7">
          <div className="mb-2 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-accent font-black text-primary">R</div>
            <div>
              <h1 className="text-xl text-white">Rincón Admin</h1>
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">Privado</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2 p-5">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${active ? "bg-white text-primary" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <item.icon className="h-5 w-5" /> {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-5">
          <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-500/10">
            <LogOut className="h-5 w-5" /> Cerrar sesión
          </button>
        </div>
      </aside>

      <div className="md:ml-72">
        <header className="sticky top-0 z-30 border-b border-black/5 bg-white/80 px-5 py-4 backdrop-blur-xl md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Panel privado</p>
              <h2 className="text-xl font-bold text-primary">Bienvenido, {adminName}</h2>
            </div>
            <button onClick={handleLogout} className="btn-outline px-4 py-2 text-sm"><LogOut className="h-4 w-4" /> Salir</button>
          </div>
          <nav className="mt-4 flex gap-2 overflow-x-auto md:hidden">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full bg-light px-4 py-2 text-xs font-bold">{item.label}</Link>)}
          </nav>
        </header>
        <main className="p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
