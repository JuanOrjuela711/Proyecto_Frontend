# NeoTec - Servicios Tecnológicos

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

## 📋 Descripción

NeoTec es una plataforma web estática que presenta los servicios tecnológicos de una empresa especializada en soluciones innovadoras. La plataforma incluye un sistema de administración para gestionar servicios, páginas informativas y un sistema de autenticación básico.

## ✨ Características

### 🏠 Páginas Principales
- **Inicio (Home)**: Página principal con slider dinámico, información de la empresa y características destacadas
- **Servicios**: Catálogo completo de servicios tecnológicos organizados por categorías
- **Detalle de Servicio**: Página detallada con información completa de cada servicio
- **Login**: Sistema de autenticación para administradores

### 🔧 Panel de Administración
- **Gestión de Servicios**: CRUD completo (Crear, Leer, Actualizar, Eliminar) de servicios
- **Estadísticas en Tiempo Real**: Dashboard con métricas de servicios, promociones y categorías
- **Filtros Avanzados**: Búsqueda por nombre, filtrado por categoría y estado de promoción
- **Interfaz Responsiva**: Diseño adaptativo para dispositivos móviles y desktop

### 🎨 Diseño y UX
- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones
- **Completamente Responsivo**: Optimizado para móviles, tablets y desktops
- **Navegación Intuitiva**: Menú hamburguesa en móviles y navegación clara
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos

### 🔐 Seguridad y Autenticación
- **Login de Administrador**: Credenciales fijas para acceso al panel admin
- **Sesión Persistente**: Uso de localStorage para mantener la sesión
- **Protección de Rutas**: Acceso condicional basado en estado de login

## 📁 Estructura del Proyecto

```
Proyecto Frontend/
├── Vistas/                          # Páginas HTML principales
│   ├── home.html                   # Página de inicio
│   ├── servicios.html              # Catálogo de servicios
│   ├── servicio-detalle.html       # Detalle individual de servicio
│   ├── login.html                  # Página de login/registro
│   └── Admin_servicios.html        # Panel de administración
├── styles/                         # Hojas de estilo CSS
│   ├── home.css
│   ├── servicios.css
│   ├── servicio-detalle.css
│   ├── login.css
│   └── Admin_servicios.css
├── scripts/                        # Scripts JavaScript
│   ├── auth.js                     # Gestión de autenticación y navbar
│   ├── home.js                     # Funcionalidad de la página home
│   ├── servicios.js                # Gestión del catálogo de servicios
│   ├── servicio-detalle.js         # Funcionalidad de detalle de servicio
│   ├── login.js                    # Lógica de login
│   └── Admin_servicios.js          # Funcionalidad del panel admin
├── Imagenes/                       # Recursos gráficos
│   ├── Desarrollo_web_completo.jpg
│   ├── Desarrollo_movil.jpg
│   ├── Consultoria_transformacion_digital.jpg
│   └── ... (otras imágenes de servicios)
└── README.md                       # Este archivo
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, pero recomendado para desarrollo)

### Instalación
1. **Clona el repositorio** (si aplica) o descarga los archivos
2. **Extrae los archivos** en tu directorio de trabajo
3. **Abre el proyecto** en tu editor de código favorito

### Ejecución
#### Opción 1: Abrir directamente en el navegador
```bash
# Navega al directorio del proyecto
cd "c:/Users/jjoo1/OneDrive/Documentos/Universidad/Frontend/Proyecto Frontend"

# Abre home.html en tu navegador
# En Windows: doble clic en home.html o arrastra a navegador
```

#### Opción 2: Usar un servidor local (recomendado)
```bash
# Si tienes Python instalado
python -m http.server 8000

# O con Node.js
npx http-server

# Luego abre http://localhost:8000/Vistas/home.html
```

## 📖 Uso

### Navegación General
1. **Inicio**: Explora la página principal con información de la empresa
2. **Servicios**: Navega por el catálogo completo de servicios disponibles
3. **Login**: Accede al panel de administración con credenciales de admin

### Credenciales de Administrador
```
Email: admin@neotec.com
Contraseña: 12345
```

### Gestión de Servicios (Panel Admin)
1. **Ver Servicios**: Lista completa con filtros de búsqueda
2. **Agregar Servicio**: Formulario completo para nuevos servicios
3. **Editar Servicio**: Modificación de servicios existentes
4. **Eliminar Servicio**: Confirmación antes de eliminación
5. **Estadísticas**: Dashboard con métricas actualizadas

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con Flexbox, Grid y animaciones
- **JavaScript (ES6+)**: Lógica interactiva y manipulación del DOM

### Librerías y Frameworks
- **Font Awesome 6.0.0**: Iconografía profesional
- **Google Fonts**: Tipografía moderna (implicita en CSS)

### Almacenamiento
- **localStorage**: Persistencia de sesión de usuario
- **Arrays JavaScript**: Base de datos en memoria para servicios

### Herramientas de Desarrollo
- **VS Code**: Editor recomendado
- **Chrome DevTools**: Debugging y testing
- **Responsively App**: Testing responsive (opcional)

## 🎯 Servicios Disponibles

La plataforma incluye 10 servicios tecnológicos categorizados:

### 💻 Desarrollo
- Desarrollo Web Completo
- Aplicación Móvil iOS/Android
- Sistema ERP Personalizado
- E-commerce Completo

### 🏢 Consultoría
- Consultoría en Transformación Digital
- Inteligencia Artificial y Machine Learning

### ☁️ Cloud
- Migración a la Nube (AWS/Azure)
- Infraestructura como Código

### 🔒 Seguridad
- Auditoría de Seguridad
- Ciberseguridad Empresarial

## 🔧 Funcionalidades Técnicas

### Sistema de Autenticación
- Login con credenciales fijas
- Sesión persistente con localStorage
- Navegación condicional basada en estado de login

### Gestión de Datos
- CRUD completo de servicios
- Filtros dinámicos (búsqueda, categoría, promoción)
- Estadísticas automáticas
- Validación de formularios

### Interfaz de Usuario
- Diseño responsive con breakpoints
- Animaciones CSS y JavaScript
- Modales para formularios
- Notificaciones toast
- Navegación móvil con hamburger menu

### Optimización
- Carga diferida de imágenes
- Animaciones escalonadas
- Transiciones suaves
- Código modular y reutilizable

## 🤝 Contribución

### Guías de Contribución
1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Estándares de Código
- **HTML**: Semántico y accesible
- **CSS**: BEM methodology sugerida
- **JavaScript**: ES6+, funciones arrow, const/let
- **Nombres**: En español para consistencia con el proyecto

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autor

**Juan José Orjuela Ortega**
- Proyecto desarrollado como parte del curso de Frontend
- Universidad Politecnico Grancolombiano - Carrera de Ingeniería de Sistemas


## 📞 Contacto

**NeoTec**
- **Email**: info@neotec.com
- **Teléfono**: +57 (1) 234-5678
- **Ubicación**: Bogotá, Colombia
- **Sitio Web**: [www.neotec.com](https://www.neotec.com)

---

⭐ **Si te gusta este proyecto, dale una estrella en GitHub!**
