// Base de datos de servicios (usando la misma estructura que servicios.js)
let serviciosData = [
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

// Variables globales
let currentEditingId = null;
let filteredServices = [...serviciosData];

// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    loadServices();
    updateStats();
    setupFilters();
    setupEventListeners();
});

// Configurar navegación
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

// Configurar filtros
function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const promotionFilter = document.getElementById('promotion-filter');
    
    searchInput.addEventListener('input', filterServices);
    categoryFilter.addEventListener('change', filterServices);
    promotionFilter.addEventListener('change', filterServices);
}

// Configurar event listeners
function setupEventListeners() {
    const serviceForm = document.getElementById('service-form');
    serviceForm.addEventListener('submit', handleFormSubmit);
}

// Cargar servicios en la tabla
function loadServices() {
    const tbody = document.getElementById('services-table-body');
    tbody.innerHTML = '';
    
    filteredServices.forEach(service => {
        const row = createServiceRow(service);
        tbody.appendChild(row);
    });
    
    // Animación de carga
    setTimeout(() => {
        document.querySelectorAll('.services-table tbody tr').forEach((row, index) => {
            setTimeout(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateX(0)';
            }, index * 50);
        });
    }, 100);
}

// Crear fila de servicio
function createServiceRow(service) {
    const row = document.createElement('tr');
    row.style.opacity = '0';
    row.style.transform = 'translateX(-20px)';
    row.style.transition = 'all 0.3s ease';
    
    row.innerHTML = `
        <td>${service.id}</td>
        <td>
            <img src="${service.imagen}" alt="${service.nombre}" class="service-image-thumb">
        </td>
        <td>
            <strong>${service.nombre}</strong>
        </td>
        <td>
            <span class="category-badge category-${service.categoria}">${service.categoria}</span>
        </td>
        <td class="price-cell">${service.precio}</td>
        <td class="quantity-cell">${service.cantidad}</td>
        <td>
            <span class="promotion-badge ${service.promocion ? 'promotion-active' : 'promotion-inactive'}">
                ${service.promocion ? 'Sí' : 'No'}
            </span>
        </td>
        <td>
            <div class="action-buttons">
                <button class="btn-action btn-edit" onclick="editService(${service.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-action btn-delete" onclick="confirmDeleteService(${service.id})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </td>
    `;
    
    return row;
}

// Filtrar servicios
function filterServices() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const promotionFilter = document.getElementById('promotion-filter').value;
    
    filteredServices = serviciosData.filter(service => {
        const matchesSearch = service.nombre.toLowerCase().includes(searchTerm) ||
                            service.descripcion.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || service.categoria === categoryFilter;
        const matchesPromotion = !promotionFilter || 
                                service.promocion.toString() === promotionFilter;
        
        return matchesSearch && matchesCategory && matchesPromotion;
    });
    
    loadServices();
}

// Actualizar estadísticas
function updateStats() {
    const totalServices = serviciosData.length;
    const activePromotions = serviciosData.filter(s => s.promocion).length;
    const categories = [...new Set(serviciosData.map(s => s.categoria))].length;
    
    document.getElementById('total-services').textContent = totalServices;
    document.getElementById('active-promotions').textContent = activePromotions;
    document.getElementById('categories-count').textContent = categories;
}

// Abrir modal para agregar servicio
function openAddServiceModal() {
    currentEditingId = null;
    document.getElementById('modal-title').textContent = 'Agregar Nuevo Servicio';
    document.getElementById('save-button').textContent = 'Guardar Servicio';
    document.getElementById('service-form').reset();
    document.getElementById('service-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Editar servicio
function editService(id) {
    const service = serviciosData.find(s => s.id === id);
    if (!service) return;
    
    currentEditingId = id;
    document.getElementById('modal-title').textContent = 'Editar Servicio';
    document.getElementById('save-button').textContent = 'Actualizar Servicio';
    
    // Llenar el formulario con los datos del servicio
    document.getElementById('service-name').value = service.nombre;
    document.getElementById('service-category').value = service.categoria;
    document.getElementById('service-price').value = service.precio;
    document.getElementById('service-quantity').value = service.cantidad;
    document.getElementById('service-image').value = service.imagen;
    document.getElementById('service-description').value = service.descripcion;
    document.getElementById('service-detailed-description').value = service.descripcionDetallada;
    document.getElementById('service-features').value = service.caracteristicas.join('\n');
    document.getElementById('service-promotion').checked = service.promocion;
    
    document.getElementById('service-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Cerrar modal de servicio
function closeServiceModal() {
    document.getElementById('service-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentEditingId = null;
}

// Manejar envío del formulario
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const caracteristicas = formData.get('caracteristicas').split('\n').filter(c => c.trim());
    
    const serviceData = {
        nombre: formData.get('nombre'),
        categoria: formData.get('categoria'),
        precio: formData.get('precio'),
        imagen: formData.get('imagen'),
        descripcion: formData.get('descripcion'),
        descripcionDetallada: formData.get('descripcionDetallada'),
        caracteristicas: caracteristicas,
        cantidad: parseInt(formData.get('cantidad')),
        promocion: formData.has('promocion')
    };
    
    if (currentEditingId) {
        updateService(currentEditingId, serviceData);
    } else {
        addService(serviceData);
    }
    
    closeServiceModal();
}

// Agregar nuevo servicio
function addService(serviceData) {
    const newId = Math.max(...serviciosData.map(s => s.id)) + 1;
    const newService = {
        id: newId,
        ...serviceData
    };
    
    serviciosData.push(newService);
    filteredServices = [...serviciosData];
    loadServices();
    updateStats();
    
    showNotification('Servicio agregado exitosamente', 'success');
}

// Actualizar servicio existente
function updateService(id, serviceData) {
    const index = serviciosData.findIndex(s => s.id === id);
    if (index !== -1) {
        serviciosData[index] = { ...serviciosData[index], ...serviceData };
        filterServices();
        updateStats();
        showNotification('Servicio actualizado exitosamente', 'success');
    }
}

// Confirmar eliminación de servicio
function confirmDeleteService(id) {
    const service = serviciosData.find(s => s.id === id);
    if (!service) return;
    
    document.getElementById('confirm-message').textContent = 
        `¿Estás seguro de que deseas eliminar el servicio "${service.nombre}"?`;
    
    document.getElementById('confirm-delete-btn').onclick = () => deleteService(id);
    document.getElementById('confirm-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Eliminar servicio
function deleteService(id) {
    const index = serviciosData.findIndex(s => s.id === id);
    if (index !== -1) {
        serviciosData.splice(index, 1);
        filterServices();
        updateStats();
        showNotification('Servicio eliminado exitosamente', 'success');
    }
    closeConfirmModal();
}

// Cerrar modal de confirmación
function closeConfirmModal() {
    document.getElementById('confirm-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Mostrar notificación
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : '#cce7ff'};
        color: ${type === 'success' ? '#155724' : '#004085'};
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10001;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Cerrar sesión
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Cerrar modales al hacer clic fuera
window.onclick = function(event) {
    const serviceModal = document.getElementById('service-modal');
    const confirmModal = document.getElementById('confirm-modal');
    
    if (event.target === serviceModal) {
        closeServiceModal();
    }
    if (event.target === confirmModal) {
        closeConfirmModal();
    }
}