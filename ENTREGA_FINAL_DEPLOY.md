

# 🚀 Entrega Final DocTurn

## 1. Enlace del Repositorio GitHub

[https://github.com/oscarmatiasg/DocTurn](https://github.com/oscarmatiasg/DocTurn)

---

## 2. Enlaces de la Aplicación Publicada

- Frontend: https://docturn-frontend.vercel.app
- Admin: https://admin-docturn.vercel.app
- Backend: https://backend-docturn.vercel.app


---

## 3. Pasos seguidos para la publicación del sitio

### 3.1. Preparación y estructura del repositorio
- Código actualizado y funcional en GitHub.
- Estructura monorepo: `backend/`, `frontend/`, `admin/`.
- Variables de entorno configuradas en cada carpeta (`.env`).

### 3.2. Despliegue del Backend (Vercel)
1. Crear cuenta en [Vercel](https://vercel.com/).
2. Nuevo proyecto → Importar desde GitHub → Seleccionar carpeta `backend/`.
3. Configurar variables de entorno necesarias:
   - `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_SECRET_KEY`, etc.
4. Build Command: (dejar vacío o usar el que detecte Vercel por defecto)
5. Output Directory: (dejar vacío)
6. Deploy automático tras cada push a main.
7. Obtener la URL pública del backend: https://backend-docturn.vercel.app

### 3.3. Despliegue del Frontend y Admin (Vercel)
1. Nuevo proyecto → Importar desde GitHub → Seleccionar carpeta `frontend/`.
2. Configurar variable de entorno:
   - `VITE_BACKEND_URL=https://backend-docturn.vercel.app`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Repetir el proceso para la carpeta `admin/`.
6. Obtener los enlaces públicos de Vercel para frontend y admin.

### 3.4. Configuración de GitHub Actions / CI
- Se utiliza el workflow por defecto de Vercel para CI/CD:
  - Cada push a `main` dispara el build y despliegue automático en los tres servicios.
- No se requiere configuración manual adicional de GitHub Actions para este flujo (Vercel integra CI/CD automáticamente).

---

## 4. Verificación de Endpoints y APIs desplegadas

Para verificar que la API funciona correctamente en Vercel, la mayoría de los endpoints son de tipo POST y requieren herramientas como Postman, Insomnia o curl. Si se accede desde el navegador a un endpoint POST, se mostrará "Cannot GET ...", lo cual es normal.

### Endpoints públicos (GET)

- Listar doctores (público):
  - https://backend-docturn.vercel.app/api/doctor/list

### Endpoints protegidos o de tipo POST (usar Postman o curl)

- Registro de usuario:
  - POST a `https://backend-docturn.vercel.app/api/user/register`
  - Body (JSON):
    {
      "email": "test@mail.com",
      "password": "123456"
    }

- Login usuario:
  - POST a `https://backend-docturn.vercel.app/api/user/login`
  - Body (JSON):
    {
      "email": "test@mail.com",
      "password": "123456"
    }

- Login admin:
  - POST a `https://backend-docturn.vercel.app/api/admin/login`
  - Body (JSON):
    {
      "email": "admin@docturn.com",
      "password": "admin123"
    }

### Ejemplo de verificación con curl

```bash
curl -X POST https://backend-docturn.vercel.app/api/user/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@mail.com","password":"123456"}'
```

### Notas importantes

- Si se accede a un endpoint POST desde el navegador, se mostrará "Cannot GET ...". Esto es esperado.
- Para endpoints protegidos (perfil, turnos, dashboard), primero se debe hacer login y luego usar el token recibido en el header `Authorization`.

De esta forma, cualquier evaluador puede comprobar el funcionamiento real de la API desplegada en Vercel.

---

**¡Entrega lista para revisión!**
