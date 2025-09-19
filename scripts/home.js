// Variables globales
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let slideInterval;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    setupNavigation();
    checkUserSession();
});

// Configuración del slider
function initializeSlider() {
    startSlideInterval();
    
    // Event listeners para navegación del slider
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
}

// Cambiar slide
function changeSlide(direction) {
    clearInterval(slideInterval);
    
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
    
    startSlideInterval();
}

// Ir a slide específico
function currentSlide(slideIndex) {
    clearInterval(slideInterval);
    
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = slideIndex - 1;
    
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
    
    startSlideInterval();
}

// Iniciar intervalo automático del slider
function startSlideInterval() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Configuración de navegación
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Verificar sesión de usuario
function checkUserSession() {
    const user = localStorage.getItem('currentUser');
    const adminLink = document.getElementById('admin-link');
    
    if (user) {
        const userData = JSON.parse(user);
        if (userData.role === 'admin') {
            adminLink.style.display = 'block';
            adminLink.href = 'admin.html';
        }
    }
}

// Efectos de scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animaciones al hacer scroll
window.addEventListener('scroll', function() {
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        const featureTop = feature.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (featureTop < windowHeight - 100) {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }
    });
});

// Inicializar efectos de animación
document.querySelectorAll('.feature').forEach(feature => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(50px)';
    feature.style.transition = 'all 0.6s ease';
});