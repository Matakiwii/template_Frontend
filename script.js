// Elementos del DOM
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

// Event Listeners para Navegación
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        navigateToSection(sectionId);
    });
});

// Función para navegar entre secciones
function navigateToSection(sectionId) {
    // Remover clase 'active' de todas las secciones y botones
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Agregar clase 'active' a la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Marcar el botón como activo
    const activeButton = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Scroll suave al inicio de la sección
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Agregar efecto de clic a las tarjetas de características
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(1.02)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Agregar efecto de clic a las imágenes de galería
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        showGalleryMessage(index + 1);
    });
});

// Función para mostrar mensaje al hacer clic en galería
function showGalleryMessage(imageNumber) {
    const messages = [
        '🚗 Vista Frontal - Los icónicos faros redondos del Mazda Demio',
        '🚗 Perfil Lateral - Líneas aerodinámicas y modernas para su época',
        '🚗 Interior - Diseño ergonómico y espacioso',
        '🚗 Motor - 1.3L o 1.5L de potencia y confiabilidad',
        '🚗 Diseño Trasero - Cola compacta y funcional',
        '🚗 Ruedas - Llantas apropiadas para este vehículo compacto'
    ];
    
    alert(messages[imageNumber - 1]);
}

// Inicializar con la primera sección activa
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚗 Sitio del Mazda Demio 1999 cargado correctamente');
    
    // Mostrar la sección inicial
    const initialSection = document.getElementById('inicio');
    const initialButton = document.querySelector('[data-section="inicio"]');
    
    if (initialSection) initialSection.classList.add('active');
    if (initialButton) initialButton.classList.add('active');
    
    // Agregar animación a los elementos
    animateOnScroll();
});

// Función para agregar animación cuando scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar todas las tarjetas
    const cards = document.querySelectorAll('.feature-card, .gallery-item, .specs-column');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
}

// Función para cambiar tema (bonus)
function toggleTheme() {
    const root = document.documentElement;
    const currentPrimary = getComputedStyle(root).getPropertyValue('--primary-color').trim();
    
    if (currentPrimary === '#d32f2f') {
        root.style.setProperty('--primary-color', '#1976d2');
        root.style.setProperty('--secondary-color', '#d32f2f');
        console.log('✨ Tema alternativo activado');
    } else {
        root.style.setProperty('--primary-color', '#d32f2f');
        root.style.setProperty('--secondary-color', '#1976d2');
        console.log('✨ Tema original restaurado');
    }
}

// Agregar información en consola
console.log('%c🏎️ Bienvenido al sitio del Mazda Demio 1999', 'color: #d32f2f; font-size: 20px; font-weight: bold;');
console.log('%cUsa las secciones de navegación para explorar más información', 'color: #1976d2; font-size: 14px;');
console.log('%cEscribe toggleTheme() en la consola para cambiar el tema de colores', 'color: #ffa726; font-size: 12px;');
