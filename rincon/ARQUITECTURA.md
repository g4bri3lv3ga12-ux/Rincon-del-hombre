# 🏗️ Arquitectura del Proyecto

## Diagrama General

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENTE (BROWSER)                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ SITIO PÚBLICO (React Components)                     │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ Header │ Hero │ Productos │ Detalle │ Contacto      │  │
│  │ Footer │ Nosotros │ etc.                            │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ PANEL ADMIN (React Components - Protegido con JWT)  │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ Login → Dashboard → CRUD Productos/Categorías etc.  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────────────────────────────┐
        │ NEXT.JS SERVER (Node.js)                  │
        ├───────────────────────────────────────────┤
        │ • Middleware (Protección de rutas)        │
        │ • API Routes (Backend endpoints)          │
        │ • SSR (Server-side rendering)             │
        │ • Static generation                       │
        └───────────────────────────────────────────┘
                            ↓
                    ┌───────────────┐
                    │ MONGODB ATLAS │
                    │ (Base de datos)│
                    └───────────────┘
```

---

## Flujo de Datos

### 1. Página Pública (Lectura)

```
Usuario en navegador
    ↓
Solicita /productos
    ↓
Next.js Server
    ↓
getServerSideProps/fetch
    ↓
MongoDB (Lee productos)
    ↓
Renderiza HTML
    ↓
Envía al navegador
    ↓
React hidrata componentes
    ↓
Usuario ve página
```

### 2. Panel Admin - Login

```
Usuario en /admin/login
    ↓
Introduce usuario: "admin"
Introduce contraseña: "admin123"
    ↓
POST /api/auth/login
    ↓
Backend valida:
  - ¿Usuario existe en BD?
  - ¿Contraseña es correcta? (bcrypt.compare)
    ↓
SÍ → Genera JWT token
     (firmado con JWT_SECRET, 24h)
    ↓
Responde con token
    ↓
Cliente almacena en localStorage
    ↓
Redirige a /admin/dashboard
```

### 3. Panel Admin - Crear Producto

```
Admin hace clic en "Nuevo Producto"
    ↓
Se abre modal
Admin llena formulario:
  - Nombre: "Polo Premium"
  - Precio: 299.99
  - Categoría: "Polos"
    ↓
Hace clic en "Guardar"
    ↓
[Cliente envía JSON]
POST /api/products (con JWT en header)
    ↓
[Middleware valida JWT]
¿Token válido?
  - SÍ → Continúa
  - NO → Error 401
    ↓
Inserta en MongoDB
    ↓
Responde con confirmación
    ↓
Cliente actualiza tabla
    ↓
Muestra nuevo producto
```

### 4. Acceso Protegido a /admin

```
Usuario intenta acceder /admin/dashboard
    ↓
[Middleware ejecuta]
¿Es ruta /admin?
    ↓
¿Existe adminToken en cookie?
  - SÍ → Permite acceso
  - NO → Redirige a /admin/login
    ↓
Se renderiza página
```

---

## Stack Tecnológico Detallado

### Frontend (Cliente)

```
React 18
├── Components (Header, Footer, ProductCard)
├── Pages (Home, Productos, Admin, etc.)
├── Hooks (useState, useEffect, etc.)
├── Context (para estado global - opcional)
└── Tailwind CSS (estilos)
```

### Backend (Servidor)

```
Next.js 14 (App Router)
├── Middleware (JWT validation)
├── API Routes (/api/auth/login)
├── Server-side rendering (SSR)
├── Image Optimization
└── Static generation
```

### Base de Datos

```
MongoDB (NoSQL)
├── Collections:
│   ├── Admin
│   ├── Product
│   ├── Category
│   ├── Banner
│   ├── About
│   ├── Contact
│   └── ContactSubmission
├── Prisma ORM (TypeScript queries)
└── MongoDB Atlas (hosting en nube)
```

### Autenticación

```
JWT (JSON Web Token)
├── Generado en: /api/auth/login
├── Secreto: JWT_SECRET
├── Duración: 24 horas
├── Almacenado: localStorage + httpOnly cookie
└── Validado en: Middleware
```

---

## Componentes y Sus Responsabilidades

### Header
- Renderizar logo y navegación
- Menú responsive (móvil/desktop)
- Sticky position

### Footer
- Renderizar info de marca
- Links
- Redes sociales
- Copyright

### ProductCard
- Renderizar tarjeta de producto
- Mostrar precio y descuento
- Botones de acción
- Responsive

### ProductPage
- Cargar datos del producto
- Galería de imágenes
- Selectores (talla, color)
- Cantidad

### AdminLayout
- Sidebar navigation
- Protección con middleware
- Logout
- Layout responsive

### AdminProducts
- Tabla CRUD
- Modal de formulario
- Validación
- Confirmación delete

---

## Flujo de Autenticación Completo

```
┌─────────────────────────────────────────────────────────┐
│ 1. Usuario accede a /admin/login                        │
│                                                         │
│    [Middleware]                                         │
│    ¿Es /admin? SÍ                                      │
│    ¿Hay token? NO                                      │
│    ¿Es /admin/login? SÍ → Permite acceso              │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│ 2. Usuario introduce credenciales                       │
│    POST /api/auth/login                                 │
│    { username: "admin", password: "admin123" }         │
│                                                         │
│    [Backend]                                            │
│    1. Busca usuario en BD                              │
│    2. bcrypt.compare(password, hash)                   │
│    3. Genera JWT = sign(data, JWT_SECRET, 24h)        │
│    4. Devuelve { token }                               │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│ 3. Cliente almacena token                               │
│    localStorage.setItem('adminToken', token)            │
│    Cookie httpOnly también                              │
│                                                         │
│    Redirige a /admin/dashboard                         │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│ 4. Usuario accede a /admin/dashboard                    │
│                                                         │
│    [Middleware]                                         │
│    ¿Es /admin? SÍ                                      │
│    ¿Hay token en cookie? SÍ                            │
│    ¿Token es válido? SÍ → Permite acceso              │
│                                                         │
│    Se renderiza dashboard                              │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│ 5. Usuario crea producto                                │
│    POST /api/products                                   │
│    Headers: { Authorization: "Bearer <token>" }        │
│    Body: { name, price, ... }                          │
│                                                         │
│    [Backend]                                            │
│    1. Valida JWT en header                             │
│    2. ¿Token válido? SÍ → Continúa                    │
│    3. Inserta en MongoDB                               │
│    4. Devuelve confirmación                            │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│ 6. Usuario hace logout                                  │
│    Click en "Cerrar Sesión"                            │
│                                                         │
│    [Cliente]                                            │
│    1. localStorage.removeItem('adminToken')            │
│    2. document.cookie = "adminToken=; max-age=0"      │
│    3. Redirige a /admin/login                          │
│                                                         │
│    Vuelve a /admin/login (completa seguridad)         │
└─────────────────────────────────────────────────────────┘
```

---

## Ciclo de Vida de una Página Pública

```
1. Usuario entra en http://localhost:3000
   ↓
2. Next.js procesa:
   - Verifica middleware (no es /admin, permite)
   - Ejecuta getStaticProps (si existe)
   - Renderiza React component (SSR)
   - Envía HTML
   ↓
3. Cliente recibe HTML
   ↓
4. React hidrata (toma control)
   ↓
5. useEffect ejecuta (si existen):
   - fetch productos
   - fetch categorías
   - setState para actualizar
   ↓
6. Página interactiva
```

---

## Ciclo de Vida del Panel Admin

```
1. Usuario accede /admin/login
   ↓
2. Middleware valida (no tiene token, permite login)
   ↓
3. Se renderiza formulario
   ↓
4. Usuario introduce credenciales
   ↓
5. POST /api/auth/login
   ↓
6. Backend genera JWT
   ↓
7. Cliente almacena token
   ↓
8. Redirige a /admin/dashboard
   ↓
9. Middleware valida token (OK, permite)
   ↓
10. Layout Admin se renderiza (con sidebar)
    ↓
11. Dashboard carga estadísticas
    ↓
12. Usuario interactúa (CRUD operaciones)
    ↓
13. Cada operación:
    - Envía request con JWT
    - Backend valida JWT
    - Ejecuta en BD
    - Devuelve respuesta
    - Cliente actualiza UI
```

---

## Error Handling

### Errores de Autenticación

```
Intenta sin token a /admin/dashboard
    ↓
Middleware detecta (sin token)
    ↓
Redirige a /admin/login
```

### Errores de API

```
POST /api/products con JWT inválido
    ↓
Backend: jwt.verify falla
    ↓
Devuelve 401 Unauthorized
    ↓
Cliente (opcional) puede redirigir a login
```

### Errores de BD

```
Inserta producto pero BD caída
    ↓
MongoDB error
    ↓
Backend catch error
    ↓
Devuelve 500 Internal Error
    ↓
Cliente muestra error
```

---

## Optimizaciones Incluidas

### Frontend
- Code splitting automático
- Image optimization
- CSS minification
- Static generation donde es posible

### Backend
- Middleware antes de cada request
- JWT cachea autenticación
- Queries optimizadas con Prisma
- Error handling completo

### Database
- Indexes en campos clave (id, slug)
- Relaciones definidas (FK)
- Validación de schema
- Timestamps automáticos

### Despliegue
- Vercel CDN
- Edge caching
- Serverless functions
- Auto-scaling

---

## Seguridad en Capas

```
Capa 1: Middleware
└─ Valida rutas, redirige si no autenticado

Capa 2: API Authentication
└─ Valida JWT en cada request

Capa 3: Password Hashing
└─ bcrypt hash + salt

Capa 4: HTTPS/SSL
└─ Encriptación en tránsito (Vercel)

Capa 5: CORS
└─ Restricción de orígenes (Next.js)

Capa 6: Environment Variables
└─ Secrets no expuestos
```

---

## Escalabilidad Futura

```
Actual:
  Client ← → Server ← → MongoDB

Futura (con carrito + pagos):
  Client ← → Server ← → MongoDB
              ↓
           Stripe API
              ↓
           Queue (Redis)
              ↓
           Email Service
```

---

## Monitoreo y Debugging

### Logs Cliente
```javascript
console.log() → DevTools Console
```

### Logs Servidor
```javascript
console.log() → Terminal donde corre `npm run dev`
```

### Base de Datos
```bash
npx prisma studio  # Interfaz visual
```

### Errores
```
Cualquier error aparece en:
- DevTools Console (cliente)
- Terminal (servidor)
- Prisma Studio (BD)
```

---

**Arquitectura escalable, segura y lista para producción.**
