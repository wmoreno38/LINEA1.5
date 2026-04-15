# Línea 1.5 — Gestión de Riesgos Tecnológicos

Aplicación web para gestión de matrices de riesgos tecnológicos, controles y evidencias.

## 🚀 Despliegue rápido

### Opción 1: Vercel (recomendado para demo)
1. Sube esta carpeta a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
3. Clic en "New Project" → selecciona el repositorio
4. Framework: **Vite** (se detecta automático)
5. Clic en "Deploy"
6. En ~1 minuto tienes la URL de tu demo

### Opción 2: Azure Static Web Apps (ideal para integrar con AD)
```bash
# Instalar Azure CLI si no la tienes
npm install -g @azure/static-web-apps-cli

# Build
npm install
npm run build

# Deploy
swa deploy ./dist --env production
```

### Opción 3: Local
```bash
npm install
npm run dev
# Abre http://localhost:5173
```

## 🔐 Cuentas de prueba
- **admin** / admin123 (Administrador)
- **lider** / lider123 (Líder Técnico)

## 🏗️ Integración con Active Directory
El código está preparado para AD. Busca los comentarios `[AD-INTEGRATION]` en `src/App.jsx`.

Puntos de integración:
1. `authenticate()` → Reemplazar con llamada a Azure AD / LDAP
2. Login screen → Agregar botón "Iniciar con Active Directory"
3. Roles → Mapear grupos de AD a roles de la app

## 📋 Funcionalidades
- Multi-proyecto con búsqueda y filtros
- 33 controles de seguridad precargados (ISO 27001, ISO 27002, Circular SFC)
- Cuestionario control por control
- Gestión de evidencias con adjuntos (PDF, imágenes, Word, Excel)
- Previsualización de archivos con zoom
- Aprobación/rechazo de evidencias
- Dashboard con métricas y avance total
- Persistencia en localStorage (demo) / preparado para backend
