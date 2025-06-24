(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

// =====================
// Sistema de Traducción
// =====================

// Diccionario de traducciones
const translations = {
    en: {
        "home": "Home",
        "about_us": "About Us",
        "services": "Services",
        "projects": "Projects",
        "pages": "Pages",
        "features": "Features",
        "our_team": "Our Team",
        "testimonial": "Testimonial",
        "404_page": "404 Page",
        "contact_us": "Contact Us",
        "get_started": "Get Started",
        "opening_hour": "Opening Hour",
        "call_us": "Call Us",
        "email_us": "Email Us",
        "focus_sectors": "We Focus On Making The Best In All Sectors",
        "what_clients_say": "What Our Clients Say!",
        "client_name": "Client Name",
        "profession": "Profession",
        "address": "Address",
        "quick_links": "Quick Links",
        "gallery": "Gallery",
        "newsletter": "Newsletter",
        "all_right_reserved": "All Right Reserved",
        "designed_by": "Designed By",
        "your_site": "Your Site Name",
        "company_name": "Company Name",
        "signup": "SignUp",
        "career": "Career",
        "terms": "Terms",
        "privacy": "Privacy",
        "logo": "Logo",
        "menu": "MENU",
        "web_design": "Web Design",
        "app_development": "App Development",
        "seo_optimization": "SEO Optimization",
        "our_services": "Our Services",
        "terms_condition": "Terms & Condition",
        "support": "Support",
        "newsletter_signup": "Newsletter Signup",
        "copyright": "All Rights Reserved",
        "all_rights_reserved": "All Rights Reserved",
        "designed_by": "Designed By",
        "site_name": "Your Site Name",
        "newsletter_description": "Subscribe to our newsletter for the latest updates and offers.",
    },
    es: {
        "home": "Inicio",
        "about_us": "Sobre Nosotros",
        "services": "Servicios",
        "projects": "Proyectos",
        "pages": "Páginas",
        "features": "Características",
        "our_team": "Nuestro Equipo",
        "testimonial": "Testimonios",
        "404_page": "Página 404",
        "contact_us": "Contáctanos",
        "get_started": "Empezar",
        "opening_hour": "Horario de Apertura",
        "call_us": "Llámanos",
        "email_us": "Escríbenos",
        "focus_sectors": "Nos enfocamos en hacer lo mejor en todos los sectores",
        "what_clients_say": "¡Lo que dicen nuestros clientes!",
        "client_name": "Nombre del Cliente",
        "profession": "Profesión",
        "address": "Dirección",
        "quick_links": "Enlaces Rápidos",
        "gallery": "Galería",
        "newsletter": "Boletín",
        "all_right_reserved": "Todos los derechos reservados",
        "designed_by": "Diseñado por",
        "your_site": "Tu Sitio Web",
        "company_name": "Nombre de la Compañía",
        "signup": "Registrarse",
        "career": "Carrera",
        "terms": "Términos",
        "privacy": "Privacidad",
        "logo": "Logo",
        "menu": "MENÚ",
        "web_design": "Diseño Web",
        "app_development": "Desarrollo de Apps",
        "seo_optimization": "Optimización SEO",
        "our_services": "Nuestros Servicios",
        "terms_condition": "Términos y Condiciones",
        "support": "Soporte",
        "newsletter_signup": "Registro al Boletín",
        "copyright": "Todos los derechos reservados",
        "all_rights_reserved": "Todos los derechos reservados",
        "designed_by": "Diseñado por",
        "site_name": "Nombre de tu Sitio",
        "newsletter_description": "Suscríbete a nuestro boletín para recibir las últimas actualizaciones y ofertas.",
    }
};

// Función para aplicar traducciones
function applyTranslations(lang) {
    // Actualizar textos en elementos específicos
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar el selector de idioma
    document.getElementById('languageSelect').value = lang;
    
    // Guardar preferencia
    localStorage.setItem('language', lang);
}

// Inicializar traducciones
function initTranslation() {
    // Obtener idioma guardado o usar inglés por defecto
    const savedLang = localStorage.getItem('language') || 'en';
    applyTranslations(savedLang);
    
    // Configurar evento para cambiar idioma
    document.getElementById('languageSelect').addEventListener('change', function() {
        applyTranslations(this.value);
    });
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initTranslation);

// =====================
// Sistema de Traducción de Placeholders
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      placeholder_email: "Tu email"
    },
    en: {
      placeholder_email: "Your email"
    }
    // Agrega más idiomas aquí según necesites
  };

  const lang = "es"; // Aquí puedes detectar dinámicamente el idioma del usuario

  document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });
});
