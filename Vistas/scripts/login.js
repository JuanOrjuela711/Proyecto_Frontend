// Credenciales fijas de administrador
const ADMIN_EMAIL = "admin@neotec.com";
const ADMIN_PASSWORD = "12345";

// Referencias a los formularios
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Mostrar / ocultar contraseña
function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("password-eye");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// Mostrar / ocultar contraseña registro
function toggleRegPassword() {
    const regPasswordField = document.getElementById("reg-password");
    const eyeIcon = document.getElementById("reg-password-eye");

    if (regPasswordField.type === "password") {
        regPasswordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        regPasswordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// Mostrar formulario de login y ocultar el de registro
function showLoginForm() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
}

// Capturar envío del formulario login
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Verificar credenciales
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Simula carga
        const btn = loginForm.querySelector(".login-btn");
        const spinner = btn.querySelector(".loading-spinner");
        const text = btn.querySelector(".btn-text");

        text.style.display = "none";
        spinner.style.display = "block";

        localStorage.setItem("isLoggedIn", "true"); // Guardar sesión
        
        setTimeout(() => {
            window.location.href = "Admin_servicios.html";
        }, 1200);
    } else {
        showError("Credenciales incorrectas. Intenta de nuevo.");
    }
});

// Función para mostrar mensaje de error
function showError(message) {
    let errorMsg = document.querySelector(".error-message");

    if (!errorMsg) {
        errorMsg = document.createElement("div");
        errorMsg.classList.add("error-message");
        errorMsg.style.color = "red";
        errorMsg.style.marginTop = "10px";
        errorMsg.style.textAlign = "center";
        loginForm.appendChild(errorMsg);
    }

    errorMsg.textContent = message;
}
