"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AlertCircle, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Credenciales inválidas");
        return;
      }

      // Guardar token y datos del admin
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminName", data.admin.username);
      document.cookie = `adminToken=${data.token}; path=/;`;

      router.push("/admin/dashboard");
    } catch (err) {
      setError("Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-serif font-bold shadow-lg">
              R
            </div>
          </div>

          <h1 className="text-3xl font-serif font-bold text-center mb-2 text-primary">
            Rincón Admin
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Panel de Administración
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Username */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
                placeholder="admin"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-primary"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Verificando..." : "Iniciar Sesión"}
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-800">
              <strong>Credenciales de prueba:</strong>
              <br />
              Usuario: admin
              <br />
              Contraseña: admin123
            </p>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-primary transition">
              ← Volver a la tienda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
