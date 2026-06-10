"use client";

import { useEffect, useState } from "react";
import {
  Package,
  Users,
  TrendingUp,
  ShoppingCart,
  BarChart3,
} from "lucide-react";

interface DashboardStats {
  totalProducts: number;
  totalCategories: number;
  totalSales: number;
  revenue: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalCategories: 0,
    totalSales: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de estadísticas
    setTimeout(() => {
      setStats({
        totalProducts: 24,
        totalCategories: 4,
        totalSales: 156,
        revenue: 45678.50,
      });
      setLoading(false);
    }, 500);
  }, []);

  const StatCard = ({
    icon: Icon,
    title,
    value,
    color,
  }: {
    icon: any;
    title: string;
    value: string | number;
    color: string;
  }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-primary mt-2">{value}</p>
        </div>
        <div className={`p-4 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-primary mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600">
          Bienvenido al panel de administración. Aquí puedes gestionar tu tienda.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Package}
          title="Productos"
          value={stats.totalProducts}
          color="bg-blue-500"
        />
        <StatCard
          icon={BarChart3}
          title="Categorías"
          value={stats.totalCategories}
          color="bg-purple-500"
        />
        <StatCard
          icon={ShoppingCart}
          title="Ventas"
          value={stats.totalSales}
          color="bg-green-500"
        />
        <StatCard
          icon={TrendingUp}
          title="Ingresos"
          value={`$${stats.revenue.toFixed(2)}`}
          color="bg-orange-500"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-xl font-bold text-primary mb-6">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/admin/productos?action=nuevo"
            className="p-4 border-2 border-primary rounded-lg hover:bg-light transition text-center"
          >
            <Package className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-bold">Nuevo Producto</p>
            <p className="text-sm text-gray-600">Agregar nuevo artículo</p>
          </a>

          <a
            href="/admin/categorias"
            className="p-4 border-2 border-primary rounded-lg hover:bg-light transition text-center"
          >
            <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-bold">Categorías</p>
            <p className="text-sm text-gray-600">Administrar categorías</p>
          </a>

          <a
            href="/admin/banners"
            className="p-4 border-2 border-primary rounded-lg hover:bg-light transition text-center"
          >
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="font-bold">Banners</p>
            <p className="text-sm text-gray-600">Editar banners</p>
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-xl font-bold text-primary mb-6">Información</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-900">Última actualización</p>
            <p className="text-sm text-blue-800">
              Tienes 24 productos activos en la tienda
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-green-900">Sistema</p>
            <p className="text-sm text-green-800">
              Todo funciona correctamente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
