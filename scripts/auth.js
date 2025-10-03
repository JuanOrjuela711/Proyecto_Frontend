document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.querySelector(".nav-menu");

    // Eliminar todo lo que haya dentro del menú para regenerarlo
    navMenu.innerHTML = "";

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        // Navbar cuando el usuario está logueado
        navMenu.innerHTML = `
            <li><a href="index.html">Inicio</a></li>
            <li><a href="servicios.html">Servicios</a></li>
            <li><a href="Admin_servicios.html">Admin Servicios</a></li>
            <li><a href="#" id="logout-btn">Cerrar Sesión</a></li>
        `;

        // Cerrar sesión
        document.getElementById("logout-btn").addEventListener("click", () => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "login.html";
        });

    } else {
        // Navbar cuando NO está logueado
        navMenu.innerHTML = `
            <li><a href="index.html">Inicio</a></li>
            <li><a href="servicios.html">Servicios</a></li>
            <li><a href="login.html">Login</a></li>
        `;
    }
});
