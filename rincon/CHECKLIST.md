# ✅ Checklist de Instalación y Verificación

## Pre-Instalación

- [ ] Node.js 18+ instalado (`node --version`)
- [ ] npm actualizado (`npm --version`)
- [ ] Git instalado (`git --version`)
- [ ] MongoDB Atlas cuenta creada (opcional, pero recomendado)
- [ ] VS Code abierto en la carpeta del proyecto

---

## Instalación Inicial

- [ ] Ejecutar `npm install`
- [ ] Verificar que no hay errores
- [ ] Esperar a que termine (puede tomar 2-3 minutos)

---

## Configuración de Entorno

- [ ] Copiar `.env.example` a `.env.local`
- [ ] Actualizar `DATABASE_URL`:
  - [ ] Si usas MongoDB local: `mongodb://localhost:27017/rincon`
  - [ ] Si usas MongoDB Atlas: obtén URL de https://cloud.mongodb.com
- [ ] Generar nuevo `NEXTAUTH_SECRET`:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
- [ ] Generar nuevo `JWT_SECRET`:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
- [ ] Actualizar `ADMIN_USERNAME` y `ADMIN_PASSWORD` (opcional para dev)
- [ ] Guardar cambios en `.env.local`

---

## Base de Datos

### Opción A: MongoDB Local (Docker)

- [ ] Docker instalado
- [ ] Ejecutar `docker-compose up -d`
- [ ] Esperar a que MongoDB inicie
- [ ] Verificar con `docker ps` (debe mostrar mongo)

### Opción B: MongoDB Atlas

- [ ] Crear cuenta en https://cloud.mongodb.com
- [ ] Crear cluster gratuito
- [ ] Crear usuario de BD
- [ ] Obtener connection string
- [ ] Actualizar `DATABASE_URL` en `.env.local`
- [ ] En Network Access, permitir acceso desde `0.0.0.0/0`

### Inicializar Prisma

- [ ] Ejecutar `npx prisma db push`
- [ ] Confirmar que dice "✓ Your database is now in sync"
- [ ] (Opcional) Ejecutar `npx prisma studio` para ver interfaz

---

## Desarrollo

- [ ] Ejecutar `npm run dev`
- [ ] Verificar que dice "Ready in X ms"
- [ ] Abrir navegador en `http://localhost:3000`
- [ ] Verificar que carga la página de inicio

---

## Verificación del Sitio Público

### Home (/)
- [ ] Carga correctamente
- [ ] Se ve el hero section
- [ ] Se ven productos destacados
- [ ] Botones funcionan
- [ ] Es responsive (ver en móvil)

### Nosotros (/nosotros)
- [ ] Carga correctamente
- [ ] Contiene información de marca
- [ ] Tiene sección de valores
- [ ] CTA funciona

### Productos (/productos)
- [ ] Carga correctamente
- [ ] Muestra catálogo
- [ ] Filtros funcionan
- [ ] Cards son responsive

### Detalle (/productos/polo-dry-fit-azul-marino)
- [ ] Carga correctamente
- [ ] Muestra imagen
- [ ] Selectores funcionan
- [ ] Botones funcionan

### Contacto (/contacto)
- [ ] Carga correctamente
- [ ] Formulario funciona
- [ ] Redes sociales visibles
- [ ] Links funcionan

### Footer
- [ ] Visible en todas las páginas
- [ ] Redes sociales funcionan
- [ ] Links funcionan

---

## Verificación del Panel Admin

### Login (/admin/login)

- [ ] Página accesible en `http://localhost:3000/admin/login`
- [ ] Formulario visible
- [ ] Mostrar/ocultar contraseña funciona
- [ ] Credenciales por defecto:
  - [ ] Usuario: `admin`
  - [ ] Contraseña: `admin123`
- [ ] Login exitoso redirige a dashboard
- [ ] Error login muestra mensaje

### Dashboard (/admin/dashboard)

- [ ] Accesible después de login
- [ ] Sidebar visible (en desktop)
- [ ] Estadísticas muestran números
- [ ] Acciones rápidas presentes
- [ ] Botón Logout funciona

### Productos (/admin/productos)

- [ ] Tabla carga con productos
- [ ] Botón "Nuevo Producto" funciona
- [ ] Modal de creación se abre
- [ ] Puedo llenar formulario
- [ ] Botón "Guardar" funciona
- [ ] Nuevo producto aparece en tabla
- [ ] Botón editar abre modal
- [ ] Puedo editar producto
- [ ] Toggle activo/inactivo funciona
- [ ] Botón eliminar funciona con confirmación

### Categorías (/admin/categorias)

- [ ] Grid carga con categorías
- [ ] Botón "Nueva Categoría" funciona
- [ ] Modal funciona
- [ ] Puedo crear categoría
- [ ] Puedo editar categoría
- [ ] Puedo eliminar categoría

### Banners (/admin/banners)

- [ ] Lista carga con banners
- [ ] Thumbnails muestran imágenes
- [ ] Botón "Nuevo Banner" funciona
- [ ] Modal funciona
- [ ] Puedo crear banner
- [ ] Puedo editar banner
- [ ] Toggle activo/inactivo funciona
- [ ] Puedo eliminar banner

### Nosotros (/admin/nosotros)

- [ ] Carga correctamente
- [ ] Formularios están presentes
- [ ] Puedo editar campos
- [ ] Botón guardar funciona
- [ ] Preview muestra cambios
- [ ] Mensaje de éxito aparece

---

## Seguridad

- [ ] No puedo acceder a `/admin` sin login
  - Intenta `http://localhost:3000/admin/dashboard`
  - Debe redirigir a `/admin/login`

- [ ] Token se almacena en localStorage
  - Abre DevTools > Console
  - Ejecuta `localStorage.getItem('adminToken')`
  - Debe mostrar un JWT

- [ ] Logout funciona
  - Haz click en "Cerrar sesión"
  - Debe redirigir a `/admin/login`
  - localStorage debe estar vacío

- [ ] Recarga la página después de logout
  - Intenta volver a `/admin/dashboard`
  - Debe redirigir a login

---

## Responsividad

Verificar en móvil (Chrome DevTools):

- [ ] **iPhone 12 (390x844)**
  - Header se adapta ✓
  - Menu es desplegable ✓
  - Productos en grid 1-2 columnas ✓
  - Botones legibles ✓
  - Footer stacked ✓

- [ ] **iPad (768x1024)**
  - Layout es 2-3 columnas ✓
  - Navegación visible ✓
  - Contenido legible ✓

- [ ] **Desktop (1920x1080)**
  - Layout completo ✓
  - Sidebar del admin funciona ✓
  - Tablas visibles ✓

---

## Performance

- [ ] Página carga en menos de 3 segundos (verificar en DevTools Network)
- [ ] No hay errores en Console
- [ ] Lighthouse score > 80 (opcional)
  - Abrir DevTools > Lighthouse
  - Ejecutar Auditoría
  - Anotar scores

---

## Estilos y Diseño

- [ ] Colores son correctos (Negro, Gris, Dorado)
- [ ] Tipografía es elegante (Playfair Display + Inter)
- [ ] Spacing es consistente
- [ ] Animaciones son suaves
- [ ] No hay elementos rotos o desalineados
- [ ] Fuentes cargan correctamente

---

## SEO

- [ ] Meta title correcto en `<head>`
- [ ] Meta description presente
- [ ] OG tags presentes
  - Abre DevTools > Elements
  - Busca `og:title`, `og:description`
  - Deben estar presentes

---

## Errores Comunes

Si encuentras estos errores, aquí están las soluciones:

### Error: "Cannot GET /admin"
✅ Solución: Middleware redirige a login automáticamente (normal)

### Error: "MongoDB connection failed"
✅ Solución: Verificar `DATABASE_URL` en `.env.local`

### Error: "Database is already in sync"
✅ Solución: Normal, significa que el schema ya está aplicado

### Error: "Port 3000 already in use"
✅ Solución: `npm run dev -- -p 3001`

### Error: "Cannot find module 'lucide-react'"
✅ Solución: Ejecutar `npm install`

### Página en blanco
✅ Solución: Abrir DevTools Console para ver error específico

---

## Comando de Prueba Rápida

```bash
# Ejecutar todo esto en secuencia
npm install                 # Instalar deps
npx prisma db push         # Inicializar BD
npm run dev                # Iniciar servidor
# En otro terminal:
npx prisma studio         # Ver BD visualmente
```

---

## Verificación Final

Si todos estos checkmarks están ✅, el proyecto está 100% funcional:

- [ ] Sitio público funciona en todas las páginas
- [ ] Panel admin funciona (login, CRUD)
- [ ] Seguridad está en lugar (rutas protegidas)
- [ ] Base de datos conectada
- [ ] Estilos correctos
- [ ] Responsive en móvil/tablet/desktop
- [ ] Sin errores en consola
- [ ] Animaciones suaves
- [ ] Formularios funcionan

---

## Siguiente Paso

Una vez todo funciona:

1. **Personalización**
   - [ ] Cambiar colores en `tailwind.config.ts`
   - [ ] Agregar productos reales
   - [ ] Subir imágenes reales

2. **Despliegue**
   - [ ] Crear repositorio en GitHub
   - [ ] Push de código
   - [ ] Conectar a Vercel
   - [ ] Desplegar en producción

3. **Post-Despliegue**
   - [ ] Cambiar credenciales admin
   - [ ] Generar nuevos secrets
   - [ ] Configurar dominio personalizado
   - [ ] Agregar SSL certificate

---

**Si todo está marcado, ¡tu tienda está lista! 🚀**

Tiempo estimado: 15-30 minutos
