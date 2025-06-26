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
        "follow_us": "Follow Us",
        "mon_fri": "Mon - Fri, 8:00 - 18:00",
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
        "we_are_leader_in": "We Are Leader In",
        "creative_solution_1": "Creative & Innovative Digital Solution",
        "creative_solution_2": "Cutting-edge Technology Solutions",
        "creative_solution_3": "Digital Transformation Experts",
        "years_experience": "Years Experience",
        "10_years": "10 Years",
        "digital_solution": "Digital Solution With 10 Years Of Experience",
        "team_members": "Team Members",
        "satisfied_clients": "Satisfied Clients",
        "projects_done": "Projects Done",
        "creative_team": "We Are A Creative Team For Your Dream Project",
        "team_full_name_1": "Yosmara Puig Sánchez",
        "team_full_name_2": "Jose Perez Quevedo",
        "team_full_name_3": "Ariadna Rendón Artola",
        "team_designation_1": "Business Development Manager",
        "team_designation_2": "Software Engineer",
        "team_designation_3": "Data Analyst - Developer",
        "designation": "Designation",
        "why_choose_us": "Why Choose Us",
        "why_people_trust_us": "Why People Trust Us? Learn About Us!",
        "digital_marketing": "Digital Marketing",
        "seo_backlinks": "SEO & Backlinks",
        "design_development": "Design & Development",
        "our_projects": "Our Projects",
        "learn_more": "Learn More About Our Complete Projects",
        "ui_ux_design": "UI/UX Design",
        "digital_agency": "Digital agency website design and development",
        "if_you_have_any_query": "If You Have Any Query, Please Feel Free Contact Us",
        "contact_form_inactive": "The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes.",
        "your_name": "Your Name",
        "your_email": "Your Email",
        "subject": "Subject",
        "message": "Message",
        "send_message": "Send Message",
        "about": "About",
        "years_of_experience": "10 Years",
        "read_more": "Read More",
        "team_member_name": "Full Name",
        "team_member_role": "Designation",
        "previous": "Previous",
        "next": "Next",
        "testimonial_text": "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        "services_description": "We Focus On Making The Best In All Sectors",
        "ppc_advertising": "PPC Advertising",
        "what_our_clients_say": "What Our Clients Say!",
        "why_choose_us_description": "At EasyByte, we combine innovation, clarity, and a genuine commitment to those who trust us. Our way of working is based on simple yet powerful tech solutions designed to streamline processes, drive results, and adapt to what each client needs. They choose us because we understand that behind every digital challenge are people looking for concrete answers, honest dealings, and a hassle-free experience.",
        "about_us_description": " As part of our identity, the icon subtly integrates the binary for “simple,” reflecting our purpose to offer streamlined digital experiences—an element that invites people to discover what EasyByte is all about.",
        "about_us_description_2": "And we do this by combining clean code, intentional design, and a genuine curiosity to create tools that make people’s digital lives easier and more intuitive.",
        "page_not_found": "Page Not Found",
        "page_not_found_message": "We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?",
        "go_back_home": "Go Back Home",
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
        "follow_us": "Síguenos",
        "mon_fri": "Lun - Vie, 8:00 - 18:00",
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
        "we_are_leader_in": "Somos Líderes En",
        "creative_solution_1": "Soluciones Digitales Creativa e Innovadora",
        "creative_solution_2": "Soluciones Tecnológicas de Vanguardia",
        "creative_solution_3": "Transformación Digital",
        "years_experience": "Años de Experiencia",
        "10_years": "10 Años",
        "digital_solution": "Solución Digital Con 10 Años de Experiencia",
        "team_members": "Miembros del Equipo",
        "satisfied_clients": "Clientes Satisfechos",
        "projects_done": "Proyectos Completados",
        "creative_team": "Somos un equipo creativo para tu proyecto soñado",
        "team_full_name_1": "Yosmara Puig Sánchez",
        "team_full_name_2": "Jose Perez Quevedo",
        "team_full_name_3": "Ariadna Rendón Artola",
        "team_designation_1": "Business Development Manager",
        "team_designation_2": "Software Engineer",
        "team_designation_3": "Data Analyst - Developer",
        "designation": "Cargo",
        "why_choose_us": "¿Por Qué Elegirnos?",
        "why_people_trust_us": "¿Por qué la gente confía en nosotros? ¡Conócenos!",
        "digital_marketing": "Marketing Digital",
        "seo_backlinks": "SEO y Backlinks",
        "design_development": "Diseño y Desarrollo",
        "our_projects": "Nuestros Proyectos",
        "learn_more": "Conoce más sobre nuestros proyectos completados",
        "ui_ux_design": "Diseño UI/UX",
        "digital_agency": "Diseño y desarrollo de sitio web para agencia digital",
        "if_you_have_any_query": "Si tienes alguna consulta, no dudes en contactarnos",
        "contact_form_inactive": "El formulario de contacto está actualmente inactivo. Obtén un formulario funcional con Ajax y PHP en minutos.",
        "your_name": "Tu nombre",
        "your_email": "Tu email",
        "subject": "Asunto",
        "message": "Mensaje",
        "send_message": "Enviar Mensaje",
        "about": "Sobre Nosotros",
        "years_of_experience": "10 Años",
        "read_more": "Leer Más",
        "team_member_name": "Nombre Completo",
        "team_member_role": "Cargo",
        "previous": "Anterior",
        "next": "Siguiente",
        "testimonial_text": "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        "services_description": "Nos enfocamos en hacer lo mejor en todos los sectores",
        "ppc_advertising": "Publicidad PPC",
        "what_our_clients_say": "¡Lo que dicen nuestros clientes!",
        "why_choose_us_description": "En EasyByte combinamos innovación, claridad y compromiso real con quienes confían en nosotros. Nuestra forma de trabajar se basa en soluciones tecnológicas simples pero potentes, diseñadas para facilitar procesos, impulsar resultados y adaptarse a lo que cada cliente necesita. Nos eligen porque entendemos que detrás de cada reto digital hay personas buscando respuestas concretas, trato honesto y una experiencia sin complicaciones.",
        "about_us_description": "Como parte de nuestra identidad, el ícono integra sutilmente el binario para “simple”, reflejando nuestro propósito de ofrecer experiencias digitales simplificadas, un elemento que invita a las personas a descubrir de qué se trata EasyByte.",
        "about_us_description_2": "Y lo hacemos combinando código limpio, diseño intencionado y una genuina curiosidad por crear herramientas que faciliten y hagan más intuitivas las vidas digitales de las personas.",
        "page_not_found": "Página no encontrada",
        "page_not_found_message": "Lo sentimos, la página que has buscado no existe en nuestro sitio web. ¿Quizás ir a nuestra página de inicio o intentar usar una búsqueda?",
        "go_back_home": "Volver a Inicio",
    }
};

function getCurrentLanguage() {
    // 1. Verificar parámetro en URL
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) return langParam;
    
    // 2. Verificar localStorage
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && translations[savedLang]) return savedLang;
    
    // 3. Usar inglés por defecto
    return 'en';
}

// Función para aplicar traducciones
function applyTranslations(lang) {
    // Actualizar textos
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar selector
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = lang;
    
    // Guardar preferencia
    localStorage.setItem('selectedLanguage', lang);
    
    // Actualizar atributo lang del documento
    document.documentElement.lang = lang;
}

// Función para cambiar idioma
function changeLanguage(newLang) {
    if (!translations[newLang]) return;
    
    // Actualizar URL sin recargar si ya tiene parámetros
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.replaceState({}, '', url);
    
    // Aplicar traducciones
    applyTranslations(newLang);
}

// Inicializar sistema de traducción
function initTranslationSystem() {
    const lang = getCurrentLanguage();
    
    // Configurar selector
    const selector = document.getElementById('languageSelect');
    if (selector) {
        selector.value = lang;
        selector.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Aplicar traducciones
    applyTranslations(lang);
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initTranslationSystem);

// Sincronizar entre pestañas
window.addEventListener('storage', (event) => {
    if (event.key === 'selectedLanguage') {
        applyTranslations(event.newValue);
        const selector = document.getElementById('languageSelect');
        if (selector) selector.value = event.newValue;
    }
});

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
