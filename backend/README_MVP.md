# 🏥 DocTurn Backend - MVP Version

## 🎯 Características del MVP

Esta versión MVP de DocTurn incluye las funcionalidades esenciales para un sistema de gestión de turnos médicos, enfocándose en la estabilidad y funcionalidad básica.

## ✅ Funcionalidades Incluidas

### 👤 Sistema de Usuarios
- ✅ Registro y autenticación
- ✅ Gestión de perfil con imágenes
- ✅ Reserva de turnos
- ✅ Historial de turnos
- ✅ Cancelación de turnos
- ✅ **Pagos simulados** (sin integración real)

### 👨‍⚕️ Sistema de Doctores
- ✅ Autenticación de doctores
- ✅ Dashboard con estadísticas básicas
- ✅ Gestión de turnos asignados
- ✅ Actualización de perfil
- ✅ Control de disponibilidad

### 👨‍💼 Sistema de Administración
- ✅ Panel de administración
- ✅ Gestión de doctores
- ✅ Supervisión de turnos
- ✅ Dashboard con métricas básicas

## 🚫 Funcionalidades NO Incluidas (Futuras Versiones)

- ❌ Integración real con pasarelas de pago (Stripe/Bancard)
- ❌ Sistema de notificaciones en tiempo real
- ❌ Sistema de reseñas y calificaciones
- ❌ Búsqueda avanzada con filtros complejos
- ❌ Historial médico detallado
- ❌ Reportes y estadísticas avanzadas
- ❌ Soporte multi-idioma

## 💳 Sistema de Pagos Simulado

Para el MVP, se implementó un sistema de pagos simulado que:

- ✅ Simula el proceso de pago con diferentes métodos
- ✅ Marca los turnos como "pagados" para testing
- ✅ Proporciona notificaciones de éxito/error
- ✅ Incluye delay simulado para realismo

### Métodos de Pago Simulados:
- **Cash**: Pago en efectivo en la consulta
- **Card**: Simulación de pago con tarjeta
- **Online**: Simulación de pago online

## 🔧 Configuración Simplificada

### Variables de Entorno Requeridas:
```env
# MongoDB (REQUERIDO)
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net

# JWT (REQUERIDO)
JWT_SECRET=tu_clave_secreta_jwt

# Admin (REQUERIDO)
ADMIN_EMAIL=admin@docturn.com
ADMIN_PASSWORD=admin123456

# Cloudinary (OPCIONAL - para imágenes)
CLOUDINARY_NAME=tu_cloudinary_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_SECRET_KEY=tu_secret_key

# Configuración básica
CURRENCY=USD
PORT=4000
```

## 🚀 Instalación Rápida

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# 3. Iniciar servidor
npm run server
```

## 📡 Endpoints API Disponibles

### Usuarios (`/api/user`)
- `POST /register` - Registro
- `POST /login` - Login
- `GET /profile` - Obtener perfil
- `POST /update-profile` - Actualizar perfil
- `POST /book-appointment` - Reservar turno
- `GET /appointments` - Listar turnos
- `POST /cancel-appointment` - Cancelar turno
- `POST /simulate-payment` - **Simular pago (MVP)**

### Doctores (`/api/doctor`)
- `POST /login` - Login doctor
- `GET /list` - Listar doctores
- `GET /appointments` - Turnos del doctor
- `GET /profile` - Perfil del doctor
- `POST /update-profile` - Actualizar perfil
- `POST /cancel-appointment` - Cancelar turno
- `POST /complete-appointment` - Completar turno
- `POST /change-availability` - Cambiar disponibilidad
- `GET /dashboard` - Dashboard doctor

### Admin (`/api/admin`)
- `POST /login` - Login admin
- `POST /add-doctor` - Agregar doctor
- `GET /all-doctors` - Listar doctores
- `GET /appointments` - Todos los turnos
- `POST /cancel-appointment` - Cancelar turno
- `POST /change-availability` - Cambiar disponibilidad
- `GET /dashboard` - Dashboard admin

## 🔄 Roadmap Futuro

### Versión 1.1
- Integración real con Stripe
- Sistema de notificaciones básico

### Versión 1.2
- Sistema de reseñas
- Búsqueda avanzada

### Versión 2.0
- Historial médico completo
- Reportes avanzados
- Multi-idioma

## 🎉 Estado Actual

**✅ MVP COMPLETO Y FUNCIONAL**

El backend está listo para producción con todas las funcionalidades esenciales implementadas y probadas.