# DocTurn 🩺

**Proyecto Final - Bootcamp MERN de Programando+ (CIRD)**

DocTurn es una aplicación web de agendamiento de citas médicas en línea, desarrollada como proyecto final del bootcamp MERN de Programando+, impulsado por el CIRD.

## 🚀 Descripción

DocTurn permite a los usuarios:

- Registrarse e iniciar sesión como paciente o médico
- Explorar médicos disponibles y agendar turnos según especialidad, horario o ubicación
- Gestionar sus citas desde un panel personalizado

Los médicos, a su vez, podrán administrar su disponibilidad, ver turnos asignados y gestionar sus pacientes.

---

## 🖥️ Funcionalidades principales

- **Inicio de sesión y registro**
  - Login y registro con validaciones
  - Recuperación de contraseña

- **Pantalla principal con navegación**
  - Buscar médicos
  - Ver turnos
  - Perfil del usuario

- **Listado de médicos**
  - Tarjetas con foto, especialidad y botón "Agendar"
  - Filtros por especialidad, ubicación y horario

- **Agendamiento de turnos**
  - Selección de fecha y hora
  - Confirmación y almacenamiento en MongoDB

- **Panel de usuario (paciente)**
  - Historial de turnos y edición de perfil

- **Panel de médico**
  - Administración de disponibilidad y citas agendadas

- **(Opcional) Panel de administración**
  - Gestión de usuarios y generación de reportes

---

## 🛠️ Stack Tecnológico (MERN)

- **Frontend:** React.js + React Router
- **Backend:** Node.js + Express.js
- **Base de datos:** MongoDB (MongoDB Atlas)
- **Control de versiones:** Git y GitHub

---

## 📁 Repositorio

[🔗 Enlace al repositorio en GitHub](https://github.com/oscarmatiasg/DocTurn)  

---

💡 *DocTurn busca facilitar el acceso a servicios médicos de forma rápida, segura y eficiente.*

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
