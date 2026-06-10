# Guía de Desarrollo Local

## Requisitos Previos

- Node.js 18+ (descargar desde https://nodejs.org/)
- Git
- MongoDB (local o Atlas)
- VS Code (recomendado)

## Instalación Inicial

### 1. Clonar el Proyecto

```bash
git clone https://github.com/tu-usuario/rincon.git
cd rincon
```

### 2. Instalar Dependencias

```bash
npm install
# o con yarn
yarn install
```

### 3. Configurar Variables de Entorno

```bash
# Copiar archivo de ejemplo
cp .env.example .env.local

# Editar .env.local con tus valores
```

### 4. MongoDB Local (Opcional)

Si no tienes MongoDB Atlas, usa la versión local:

```bash
# Con Docker (recomendado)
docker-compose up -d

# O instala MongoDB localmente desde:
# https://docs.mongodb.com/manual/installation/
```

### 5. Inicializar Base de Datos

```bash
# Aplicar esquema Prisma
npx prisma db push

# (Opcional) Abrir Prisma Studio para ver datos
npx prisma studio
```

## Desarrollo

### Iniciar servidor de desarrollo

```bash
npm run dev
# o con yarn
yarn dev
```

Abre http://localhost:3000 en tu navegador.

### Acceder al Panel de Administrador

1. Ve a http://localhost:3000/admin/login
2. Usa las credenciales de `.env.local`:
   - Usuario: `admin`
   - Contraseña: `admin123`

## Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor dev (hot reload)

# Build
npm run build            # Compila para producción
npm start                # Inicia servidor producción

# Base de Datos
npx prisma db push      # Aplica cambios al esquema
npx prisma studio      # Abre interfaz visual para BD
npx prisma generate    # Regenera cliente Prisma

# Linting
npm run lint            # Ejecuta ESLint
```

## Estructura de Carpetas

```
rincon/
├── app/
│   ├── api/             # API Routes (Backend)
│   ├── admin/           # Panel administrativo
│   ├── components/      # Componentes React
│   ├── (rutas públicas)/
│   ├── globals.css      # Estilos globales
│   └── layout.tsx       # Layout principal
├── prisma/
│   └── schema.prisma    # Esquema DB
├── public/              # Archivos estáticos
├── .env.local           # Variables locales (NO pushear)
├── next.config.js       # Config Next.js
├── tailwind.config.ts   # Config Tailwind
└── package.json
```

## Editar Productos

### Vía Panel Admin

1. Ve a http://localhost:3000/admin/dashboard
2. Haz clic en "Productos"
3. Crea/Edita/Elimina productos

### Vía Prisma Studio

```bash
npx prisma studio
# Interfaz visual en http://localhost:5555
```

## Crear Nuevo Componente

```bash
# En app/components/MiComponente.tsx

"use client";  // Si usa interactividad del cliente

export default function MiComponente() {
  return (
    <div className="...">
      {/* Tu código */}
    </div>
  );
}
```

## Crear Nueva Página

```bash
# Crear carpeta app/mi-pagina/
# Dentro crear page.tsx

export default function MiPagina() {
  return (
    <div>
      {/* Tu contenido */}
    </div>
  );
}

// Se accede automáticamente en /mi-pagina
```

## Debugging

### Console Logs en Servidor

```tsx
// Los logs aparecen en la terminal donde corres npm run dev
console.log("Esto se ve en servidor");
```

### Console Logs en Cliente

```tsx
"use client";

export default function MiComponente() {
  console.log("Esto se ve en DevTools del navegador");
  return <div />;
}
```

### VS Code Debugging

1. Instala extensión "Debugger for Chrome"
2. En `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "skipFiles": ["<node_internals>/**"],
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

## Hot Reload

- Cambios en archivos `.tsx`, `.css`, etc. se recargan automáticamente
- Si cambias `next.config.js` o `.env.local`, reinicia `npm run dev`

## Problemas Comunes

### "Cannot find module"

```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 already in use"

```bash
# Cambiar puerto
npm run dev -- -p 3001
```

### "Database connection failed"

1. Verifica que MongoDB está corriendo
2. Verifica `DATABASE_URL` en `.env.local`
3. Con MongoDB local: `mongodb://localhost:27017/rincon`

### "Build fails"

```bash
npm run build  # Ver errores específicos
npm run lint   # Verificar linting
```

## Mejorar el Desarrollo

### Extensiones VS Code Recomendadas

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- Thunder Client (para probar API)

### Configurar Prettier

```bash
npm install --save-dev prettier
echo '{"semi": true, "singleQuote": true}' > .prettierrc
```

## Git Workflow

```bash
# Crear rama para feature
git checkout -b feature/nueva-caracteristica

# Hacer cambios
git add .
git commit -m "Agregar nueva característica"

# Push a rama
git push origin feature/nueva-caracteristica

# Crear Pull Request en GitHub
```

## Performance

- Next.js optimiza automáticamente
- Las imágenes se optimizan con `<Image />`
- Código se divide automáticamente
- Los datos se cachean cuando es posible

## Testing (Opcional)

```bash
# Instalar Jest
npm install --save-dev jest @testing-library/react

# Crear archivo test
echo "..." > __tests__/MiComponente.test.tsx

# Ejecutar tests
npm test
```

## Deployment Local

```bash
# Build para producción
npm run build

# Probar el build
npm start
```

## Recursos Útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prisma](https://www.prisma.io/docs/)
- [MongoDB](https://docs.mongodb.com/)

## Soporte

Si tienes problemas:

1. Revisa los errores en la consola
2. Consulta la documentación oficial
3. Crea un issue en GitHub
4. Pregunta en el Discord de Next.js
