// Base de datos de servicios
const serviciosData = [
    {
        id: 1,
        nombre: "Desarrollo Web Completo",
        categoria: "desarrollo",
        precio: "$2,500",
        imagen: "../Imagenes/Desarrollo_web_completo.jpg",
        descripcion: "Desarrollo completo de aplicaciones web modernas con tecnologías de vanguardia.",
        caracteristicas: ["Responsive Design", "SEO Optimizado", "Panel de Administración", "Integración de APIs"],
        cantidad: 5,
        promocion: true,
        descripcionDetallada: "Servicio completo de desarrollo web que incluye diseño responsive, optimización SEO, panel de administración personalizado y integración con APIs externas. Utilizamos las últimas tecnologías como React, Node.js y bases de datos modernas."
    },
    {
        id: 2,
        nombre: "Aplicación Móvil iOS/Android",
        categoria: "desarrollo",
        precio: "$3,800",
        imagen: "../Imagenes/Desarrollo_movil.jpg",
        descripcion: "Desarrollo de aplicaciones móviles nativas para iOS y Android con diseño intuitivo.",
        caracteristicas: ["Diseño Nativo", "Push Notifications", "Offline Support", "App Store Deploy"],
        cantidad: 3,
        promocion: false,
        descripcionDetallada: "Creamos aplicaciones móviles nativas para iOS y Android con interfaz intuitiva, notificaciones push, soporte offline y asistencia completa para la publicación en las tiendas de aplicaciones."
    },
    {
        id: 3,
        nombre: "Consultoría en Transformación Digital",
        categoria: "consultoria",
        precio: "$1,200",
        imagen: "../Imagenes/Consultoria_transformacion_digital.jpg",
        descripcion: "Asesoría especializada para la transformación digital de tu empresa.",
        caracteristicas: ["Análisis de Procesos", "Plan de Migración", "Capacitación", "Seguimiento"],
        cantidad: 8,
        promocion: true,
        descripcionDetallada: "Servicio de consultoría integral para guiar a tu empresa en el proceso de transformación digital, incluyendo análisis de procesos actuales, plan de migración tecnológica y capacitación del personal."
    },
    {
        id: 4,
        nombre: "Migración a la Nube (AWS/Azure)",
        categoria: "cloud",
        precio: "$4,500",
        imagen: "../Imagenes/Migracion_nube.jpg",
        descripcion: "Migración completa de tu infraestructura a servicios en la nube.",
        caracteristicas: ["Setup AWS/Azure", "Backup Automático", "Escalabilidad", "Monitoreo 24/7"],
        cantidad: 2,
        promocion: false,
        descripcionDetallada: "Servicio completo de migración a la nube incluyendo configuración en AWS o Azure, implementación de backups automáticos, configuración de escalabilidad y monitoreo continuo 24/7."
    },
    {
        id: 5,
        nombre: "Auditoría de Seguridad",
        categoria: "seguridad",
        precio: "$1,800",
        imagen: "../Imagenes/Auditoria_seguridad.jpg",
        descripcion: "Evaluación completa de la seguridad de tus sistemas y datos.",
        caracteristicas: ["Pentesting", "Análisis de Vulnerabilidades", "Reporte Detallado", "Plan de Mejoras"],
        cantidad: 6,
        promocion: true,
        descripcionDetallada: "Auditoría exhaustiva de seguridad que incluye pentesting, análisis de vulnerabilidades, reporte detallado con hallazgos y plan de mejoras para fortalecer la seguridad de tus sistemas."
    },
    {
        id: 6,
        nombre: "Sistema ERP Personalizado",
        categoria: "desarrollo",
        precio: "$8,900",
        imagen: "../Imagenes/Sistema_ERP.jpg",
        descripcion: "Desarrollo de sistema ERP adaptado a las necesidades específicas de tu negocio.",
        caracteristicas: ["Módulos Personalizados", "Integración Contable", "Reportes Avanzados", "Multi-usuario"],
        cantidad: 1,
        promocion: false,
        descripcionDetallada: "Sistema ERP completo y personalizado que incluye módulos específicos para tu industria, integración contable, generación de reportes avanzados y soporte multi-usuario con diferentes niveles de acceso."
    },
    {
        id: 7,
        nombre: "Inteligencia Artificial y Machine Learning",
        categoria: "consultoria",
        precio: "$6,200",
        imagen: "../Imagenes/Inteligencia_Artificial.png",
        descripcion: "Implementación de soluciones de IA y ML para optimizar procesos empresariales.",
        caracteristicas: ["Análisis Predictivo", "Automatización", "Modelos Personalizados", "ROI Medible"],
        cantidad: 4,
        promocion: true,
        descripcionDetallada: "Implementamos soluciones de inteligencia artificial y machine learning personalizadas, incluyendo análisis predictivo, automatización de procesos, desarrollo de modelos específicos y métricas claras de ROI."
    },
    {
        id: 8,
        nombre: "E-commerce Completo",
        categoria: "desarrollo",
        precio: "$3,200",
        imagen: "../Imagenes/E-comerce.jpg",
        descripcion: "Plataforma de comercio electrónico completa con pasarelas de pago integradas.",
        caracteristicas: ["Catálogo de Productos", "Carrito de Compras", "Pagos Seguros", "Panel de Ventas"],
        cantidad: 7,
        promocion: false,
        descripcionDetallada: "Plataforma de e-commerce completa que incluye catálogo de productos, carrito de compras, integración con pasarelas de pago seguras y panel administrativo para gestión de ventas e inventario."
    },
    {
        id: 9,
        nombre: "Infraestructura como Código",
        categoria: "cloud",
        precio: "$2,800",
        imagen: "../Imagenes/Infraestructura.jpg",
        descripcion: "Automatización de infraestructura usando herramientas como Terraform y Ansible.",
        caracteristicas: ["Terraform", "Ansible", "CI/CD Pipeline", "Versionado"],
        cantidad: 3,
        promocion: false,
        descripcionDetallada: "Implementación de infraestructura como código utilizando Terraform y Ansible, incluyendo configuración de pipelines CI/CD y control de versiones para una gestión eficiente y reproducible."
    },
    {
        id: 10,
        nombre: "Ciberseguridad Empresarial",
        categoria: "seguridad",
        precio: "$4,100",
        imagen: "../Imagenes/Ciber-Seguridad-Empresa.png",
        descripcion: "Solución integral de ciberseguridad para proteger tu empresa de amenazas digitales.",
        caracteristicas: ["Firewall Avanzado", "Detección de Intrusos", "Backup Seguro", "Capacitación"],
        cantidad: 5,
        promocion: true,
        descripcionDetallada: "Solución completa de ciberseguridad que incluye firewall avanzado, sistema de detección de intrusos, backup seguro en la nube y programa de capacitación en seguridad para empleados."
    }
];


// Configuración de navegación
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}


// Renderizar servicios
function renderServices() {
    const container = document.getElementById('services-container');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    serviciosData.forEach(service => {
        const serviceCard = createServiceCard(service);
        container.appendChild(serviceCard);
    });
    
    // Agregar animaciones
    setTimeout(() => {
        document.querySelectorAll('.service-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
        <div class="service-image">
            <img src="${service.imagen}" alt="${service.nombre}">
            ${service.promocion ? `<span class="service-badge">Promo</span>` : ''}
        </div>
        <div class="service-info">
            <span class="service-category">${service.categoria}</span>
            <h3 class="service-title">${service.nombre}</h3>
            <p class="service-price">${service.precio}</p>
            <div class="service-actions">
                <button class="btn-primary" onclick="viewServiceDetail(${service.id})">Ver Detalles</button>
            </div>
        </div>
    `;
    return card;
}



// Ver detalle del servicio
function viewServiceDetail(id) {
    window.location.href = `servicio-detalle.html?id=${id}`;
}

// Solicitar cotización
function requestQuote(serviceId) {
    const service = serviciosData.find(s => s.id === serviceId);
    
    if (service) {
        alert(`Cotización solicitada para: ${service.nombre}\n\nNos pondremos en contacto contigo pronto.`);
    }
}

// Verificar sesión de usuario
function checkUserSession() {
    const user = localStorage.getItem('currentUser');
    const adminLink = document.getElementById('admin-link');
    
    if (user && adminLink) {
        const userData = JSON.parse(user);
        if (userData.role === 'admin') {
            adminLink.style.display = 'block';
            adminLink.href = 'admin.html';
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    checkUserSession();
    renderServices();
  });