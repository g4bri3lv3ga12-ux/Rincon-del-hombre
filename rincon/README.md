# Rincón del Hombre - Tienda Online Profesional

Página web completa y profesional para **Rincón del Hombre**, una tienda de ropa y accesorios masculinos premium. Incluye sitio público responsive, catálogo de productos y panel de administración privado.

## 🚀 Características

### Sitio Público
- **Inicio profesional** con hero section y llamadas a la acción
- **Catálogo de productos** con filtros por categoría
- **Página de detalle** de productos con galerías
- **Sección Nosotros** con información de la marca
- **Página de contacto** con formulario y redes sociales
- **Footer** completo con navegación
- **Responsive** 100% (móvil, tablet, desktop)
- **SEO optimizado** con meta tags y Open Graph

### Panel de Administración Privado
- **Autenticación segura** con JWT
- **Gestión de productos** (crear, editar, eliminar, activar/desactivar)
- **Gestión de categorías** (CRUD)
- **Gestión de banners** del inicio
- **Edición de texto** sección Nosotros
- **Dashboard** con estadísticas
- **Rutas protegidas** sin acceso público
- **Logout seguro**

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + Next.js 14 (App Router)
- **Estilos**: Tailwind CSS
- **Autenticación**: JWT
- **Base de Datos**: MongoDB con Prisma ORM
- **Backend**: Next.js API Routes
- **Lenguaje**: TypeScript
- **Iconos**: Lucide React

## 📋 Requisitos Previos

- Node.js 18+
- npm o yarn
- Cuenta en MongoDB Atlas (o MongoDB local)

## 🚀 Instalación

### 1. Clonar o descargar el proyecto

```bash
git clone <tu-repo> o descargar ZIP
cd rincon
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear archivo `.env.local` en la raíz (ya incluido con valores de ejemplo):

```env
# Base de datos
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/rincon?retryWrites=true&w=majority"

# Autenticación
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"

# JWT
JWT_SECRET="your-jwt-secret-change-this-in-production"

# Admin credentials
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="admin123"
```

**⚠️ Importante**: Cambiar `NEXTAUTH_SECRET` y `JWT_SECRET` en producción.

### 4. Conectar MongoDB

1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crear cluster gratuito
3. Obtener connection string
4. Actualizar `DATABASE_URL` en `.env.local`

### 5. Ejecutar migraciones de Prisma

```bash
npx prisma db push
npx prisma studio  # Opcional: interfaz visual para la BD
```

### 6. Ejecutar en desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## 🔐 Acceso al Panel de Administrador

**URL**: `http://localhost:3000/admin/login`

**Credenciales de prueba**:
- Usuario: `admin`
- Contraseña: `admin123`

⚠️ **IMPORTANTE**: Cambiar estas credenciales en producción.

## 📱 Estructura de Carpetas

```
rincon/
├── app/
│   ├── api/                    # API Routes (Backend)
│   │   └── auth/
│   │       └── login/          # Endpoint de login
│   ├── admin/                  # Panel de administrador (privado)
│   │   ├── layout.tsx
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── productos/
│   │   ├── categorias/
│   │   ├── banners/
│   │   └── nosotros/
│   ├── components/             # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── productos/              # Página de productos
│   │   ├── page.tsx
│   │   └── [slug]/            # Detalle de producto
│   ├── nosotros/              # Página Nosotros
│   ├── contacto/              # Página Contacto
│   ├── globals.css            # Estilos globales
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página de inicio
├── prisma/
│   └── schema.prisma          # Esquema de base de datos
├── middleware.ts              # Middleware de protección de rutas
├── .env.local                 # Variables de entorno
├── next.config.js             # Configuración Next.js
├── tailwind.config.ts         # Configuración Tailwind
├── tsconfig.json              # Configuración TypeScript
└── package.json
```

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Opción 2: Hostinger

1. Conectar repositorio Git
2. Configurar variables de entorno
3. Desplegar automáticamente

### Opción 3: Docker

```bash
# Construir imagen
docker build -t rincon .

# Ejecutar contenedor
docker run -p 3000:3000 rincon
```

## 🔐 Seguridad

- ✅ Autenticación JWT segura
- ✅ Protección de rutas privadas
- ✅ Middleware de validación
- ✅ Cookies HTTP-only
- ✅ Hash de contraseñas con bcrypt
- ✅ CORS configurado
- ✅ Variables de entorno protegidas

## 📊 Base de Datos

### Modelos principales:

- **Admin**: Usuario administrativo
- **Product**: Productos del catálogo
- **Category**: Categorías de productos
- **Banner**: Banners del inicio
- **About**: Información de la marca
- **Contact**: Datos de contacto
- **ContactSubmission**: Mensajes del formulario

Ver `prisma/schema.prisma` para detalles completos.

## 🎨 Personalización

### Cambiar colores:

Editar `tailwind.config.ts`:

```ts
colors: {
  primary: "#1a1a1a",      // Negro
  secondary: "#2d2d2d",    // Gris oscuro
  accent: "#d4af37",       // Dorado
  light: "#f5f5f5",        // Blanco roto
  beige: "#c9a876",        // Beige
}
```

### Cambiar tipografía:

En `app/layout.tsx`:

```tsx
import { Playfair_Display, Inter } from 'next/font/google';
```

## 🚀 Mejoras Futuras

- [ ] Carrito de compras
- [ ] Pasarela de pagos (Stripe/PayPal)
- [ ] Sistema de inventario
- [ ] Notificaciones por email
- [ ] Dashboard de análiticas
- [ ] Reseñas de clientes
- [ ] Integración con WhatsApp Business API

## 📞 Soporte

Para preguntas o problemas:
- WhatsApp: +52 1 555 555 5555
- Email: info@rincon.mx
- Instagram: @rinconbdo

## 📝 Licencia

© 2026 Rincón del Hombre. Todos los derechos reservados.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crear rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

**Desarrollado con ❤️ para Rincón del Hombre**
