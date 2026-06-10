# Guía de Despliegue en Vercel

## 1. Preparar el Proyecto

```bash
# Asegúrate de que todo esté commiteado en Git
git add .
git commit -m "Initial commit"
```

## 2. Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Crea un nuevo repositorio público
3. Sigue las instrucciones para push de código

```bash
git remote add origin https://github.com/tu-usuario/rincon.git
git branch -M main
git push -u origin main
```

## 3. Desplegar en Vercel

### Opción A: Desde Dashboard de Vercel

1. Ve a https://vercel.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "Import Project"
4. Selecciona tu repositorio
5. Configura las variables de entorno:

```
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/rincon?retryWrites=true&w=majority
NEXTAUTH_SECRET=tu-valor-aleatorio-seguro
NEXTAUTH_URL=https://tu-dominio.vercel.app
JWT_SECRET=tu-valor-aleatorio-seguro
```

6. Haz clic en "Deploy"

### Opción B: Con Vercel CLI

```bash
# Instalar CLI
npm i -g vercel

# Desplegar
vercel

# Desplegar en producción
vercel --prod
```

## 4. Configurar Dominio Personalizado

1. En Vercel Dashboard, ve a "Settings" > "Domains"
2. Agrega tu dominio personalizado
3. Sigue las instrucciones para configurar DNS
4. Vercel generará certificado SSL automáticamente

## 5. Variables de Entorno en Producción

⚠️ **Importante**: Cambiar estos valores en producción:

```
NEXTAUTH_SECRET=<generar-valor-fuerte>
JWT_SECRET=<generar-valor-fuerte>
ADMIN_USERNAME=<cambiar-a-tu-usuario>
ADMIN_PASSWORD=<cambiar-a-tu-contraseña-fuerte>
```

Para generar valores seguros:

```bash
# En Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 6. Conectar MongoDB Atlas

1. Ve a https://cloud.mongodb.com
2. Crea una cuenta gratuita
3. Crea un cluster
4. Obtén la connection string
5. Actualiza `DATABASE_URL` en Vercel

### Configurar IP Whitelist en MongoDB:

1. Security > Network Access
2. Haz clic en "Add IP Address"
3. Para Vercel, agrega: `0.0.0.0/0` (menos seguro) o usa lista estática de IPs

## 7. Despliegues Automáticos

Los despliegues ocurren automáticamente cuando:

- Haces push a la rama `main`
- Creas un Pull Request (preview deployment)

## 8. Monitorear Despliegue

1. Ve a Vercel Dashboard
2. Haz clic en tu proyecto
3. Ve a "Deployments" para ver el historial
4. Consulta "Functions" para ver logs del backend

## 9. Solucionar Problemas

### Error: Database Connection Failed

- Verificar `DATABASE_URL` en variables de entorno
- Verificar que MongoDB Atlas tiene Vercel IP en whitelist
- Ver logs en Vercel Functions

### Error: Build Failed

```bash
# Ver logs locales
npm run build

# Verificar dependencias
npm install
```

### Error: 500 en /admin/login

- Verificar que `JWT_SECRET` está configurado
- Revisar logs de Vercel Functions
- Verificar credenciales en `.env.local` vs valores en Vercel

## 10. Optimizaciones Post-Despliegue

### Habilitar Caché

Vercel lo hace automáticamente, pero puedes optimizar en `next.config.js`

### CDN y Imágenes

Las imágenes se optimizan automáticamente. Verificar que Next.js Image está siendo usado.

### Analytics

En Vercel Dashboard > Analytics para ver métricas de Core Web Vitals

## 11. SSL/TLS

Vercel proporciona certificados SSL gratuitos automáticamente.

## 12. Respaldos de Base de Datos

Con MongoDB Atlas gratuito:

- Backups automáticos cada 24 horas
- Retención de 7 días

Considera upgrade para mayor retención.

## Comandos Útiles

```bash
# Ver status de despliegue
vercel status

# Redeploy última versión
vercel --prod --force

# Ver logs en tiempo real
vercel logs <URL>

# Eliminar despliegue anterior
vercel remove <URL>
```

## Soporte

- Documentación Vercel: https://vercel.com/docs
- Documentación Next.js: https://nextjs.org/docs
- Documentación MongoDB: https://docs.mongodb.com
