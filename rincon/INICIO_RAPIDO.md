# ⚡ Inicio Rápido - Rincón del Hombre

## 🚀 En 5 minutos

### Paso 1: Instalar dependencias
```bash
npm install
```

### Paso 2: Configurar base de datos
```bash
# Si tienes MongoDB local o Docker
npx prisma db push

# Si tienes MongoDB Atlas
# 1. Actualiza DATABASE_URL en .env.local
# 2. Luego ejecuta:
npx prisma db push
```

### Paso 3: Iniciar servidor
```bash
npm run dev
```

### Paso 4: Abrir en navegador
```
http://localhost:3000
```

---

## 🔐 Acceder al Panel Admin

1. Ve a: `http://localhost:3000/admin/login`
2. Usuario: `admin`
3. Contraseña: `admin123`

---

## 📁 Archivos Importantes

| Archivo | Propósito |
|---------|-----------|
| `.env.local` | Variables de entorno (NO pushear a Git) |
| `prisma/schema.prisma` | Modelo de base de datos |
| `app/page.tsx` | Página de inicio |
| `app/admin/` | Panel de administrador |
| `README.md` | Documentación completa |

---

## 🐳 Usar con Docker

```bash
# Iniciar MongoDB + App
docker-compose up

# En otro terminal
npm run dev

# O todo junto (sin npm run dev)
docker-compose up
```

---

## 🌐 Desplegar a Producción

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel --prod
```

Ver `DEPLOY_VERCEL.md` para instrucciones completas.

---

## 📝 Editar Productos

### Opción 1: Panel Admin
1. Login en `/admin/login`
2. Ir a Productos
3. Crear/Editar/Eliminar

### Opción 2: Prisma Studio
```bash
npx prisma studio
```

---

## 🆘 Solucionar Problemas

### "npm: command not found"
- Instalar Node.js desde https://nodejs.org/

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### "Database connection failed"
- Verifica `DATABASE_URL` en `.env.local`
- Si usas MongoDB local: `mongodb://localhost:27017/rincon`
- Si usas Atlas: obtén URL desde https://cloud.mongodb.com

### "Build failed"
```bash
npm install
npm run build
npm run lint
```

---

## 📚 Documentación

- **README.md** - Guía completa
- **RESUMEN.md** - Qué incluye el proyecto
- **DESARROLLO_LOCAL.md** - Guía de desarrollo
- **DEPLOY_VERCEL.md** - Despliegue en Vercel

---

## ✅ Checklist Rápido

- [ ] `npm install` - Dependencias instaladas
- [ ] `.env.local` configurado
- [ ] `npx prisma db push` - BD lista
- [ ] `npm run dev` - Servidor corriendo
- [ ] `http://localhost:3000` - Funciona
- [ ] `http://localhost:3000/admin/login` - Admin funciona

---

## 🎯 Próximos Pasos

1. **Personalizar**: Cambiar colores, textos, imágenes
2. **Agregar productos**: Via panel admin
3. **Desplegar**: Seguir `DEPLOY_VERCEL.md`
4. **Optimizar**: SEO, Analytics, Pagos

---

## 📞 Soporte Rápido

```bash
# Ver version de Node
node --version

# Ver version de npm
npm --version

# Limpiar node_modules
rm -rf node_modules && npm install

# Build de producción
npm run build && npm start
```

---

**¡Listo! Tu tienda está lista para usar. 🚀**
