document.addEventListener("DOMContentLoaded", () => {
    // 1. Obtener el parámetro ID de la URL
    const params = new URLSearchParams(window.location.search);
    const serviceId = parseInt(params.get("id"));

    // 2. Buscar el servicio en la lista
    const servicio = serviciosData.find(s => s.id === serviceId);

    if (!servicio) {
        document.querySelector(".service-detail .container").innerHTML = `
            <h2>Servicio no encontrado</h2>
            <p>El servicio que buscas no existe o fue eliminado.</p>
        `;
        return;
    }

    // 3. Llenar los datos principales
    document.getElementById("service-title").textContent = servicio.nombre;
    document.getElementById("service-category").textContent = servicio.categoria;
    document.getElementById("service-price").textContent = servicio.precio;
    document.getElementById("service-image").src = servicio.imagen;
    document.getElementById("current-service-name").textContent = servicio.nombre;

    // Disponibilidad
    document.getElementById("service-availability").textContent =
    servicio.cantidad > 0
        ? `Disponible (${servicio.cantidad} en stock)`
        : "Agotado";

    // Descripción corta
    document.getElementById("service-description-short").textContent = servicio.descripcion;

    // Promoción
    const promoBadge = document.getElementById("promotion-badge");
    if (servicio.promocion) {
        promoBadge.style.display = "block";
    }

    // Descripción detallada
    document.getElementById("detailed-description").textContent = servicio.descripcionDetallada;

    // Lista de "Qué incluye este servicio"
    const incluyeList = document.getElementById("service-includes");
    incluyeList.innerHTML = "";
    if (servicio.caracteristicas && servicio.caracteristicas.length > 0) {
        servicio.caracteristicas.forEach(c => {
            const li = document.createElement("li");
            li.textContent = c;
            incluyeList.appendChild(li);
        });
    }

    // Características principales (grid)
    const featuresGrid = document.getElementById("features-grid");
    featuresGrid.innerHTML = "";
    if (servicio.caracteristicas) {
        servicio.caracteristicas.forEach(c => {
            const div = document.createElement("div");
            div.classList.add("feature-item");
            div.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h4>${c}</h4>
                <p>Incluido en este servicio</p>
            `;
            featuresGrid.appendChild(div);
        });
    }


    // Tabs (navegación entre pestañas)
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            tabPanels.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(`${btn.dataset.tab}-tab`).classList.add("active");
        });
    });
});

// --- Funciones de acción ---
function requestService() {
    alert("Has solicitado el servicio.");
}

function requestQuote() {
    alert("Has solicitado una cotización.");
}

function addToWishlist() {
    alert("Servicio agregado a tu lista de deseos.");
}
