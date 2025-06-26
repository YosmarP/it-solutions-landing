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
        "opening_hour_time": "Mon - Fri, 8:00 - 18:00",
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
        "opening_hour_time": "Lun - Vie, 8:00 - 18:00",
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
    },
    pt: {
        "home": "Início",
        "about_us": "Sobre Nós",
        "services": "Serviços",
        "projects": "Projetos",
        "pages": "Páginas",
        "features": "Características",
        "our_team": "Nossa Equipe",
        "testimonial": "Depoimentos",
        "404_page": "Página 404",
        "contact_us": "Contate-nos",
        "get_started": "Começar",
        "follow_us": "Siga-nos",
        "opening_hour_time": "Seg - Sex, 8:00 - 18:00",
        "opening_hour": "Horário de Funcionamento",
        "call_us": "Ligue para nós",
        "email_us": "Envie-nos um e-mail",
        "focus_sectors": "Focamo-nos em fazer o melhor em todos os setores",
        "what_clients_say": "O que nossos clientes dizem!",
        "client_name": "Nome do Cliente",
        "profession": "Profissão",
        "address": "Endereço",
        "quick_links": "Links Rápidos",
        "gallery": "Galeria",
        "newsletter": "Newsletter",
        "all_right_reserved": "Todos os direitos reservados",
        "designed_by": "Desenhado por",
        "your_site": "Seu Site",
        "company_name": "Nome da Empresa",
        "signup": "Registrar",
        "career": "Carreira",
        "terms": "Termos",
        "privacy": "Privacidade",
        "logo": "Logo",
        "menu": "MENU",
        "web_design": "Design Web",
        "app_development": "Desenvolvimento de Apps",
        "seo_optimization": "Otimização SEO",
        "our_services": "Nossos Serviços",
        "terms_condition": "Termos e Condições",
        "support": "Suporte",
        "newsletter_signup": "Registro na Newsletter",
        "copyright": "Todos os direitos reservados",
        "all_rights_reserved": "Todos os direitos reservados",
        "site_name": "Nome do seu Site",
        "newsletter_description": "Inscreva-se na nossa newsletter para as últimas atualizações e ofertas.",
        "we_are_leader_in": "Somos Líderes Em",
        "creative_solution_1": "Solução Digital Criativa e Inovadora",
        "creative_solution_2": "Soluções Tecnológicas de Ponta",
        "creative_solution_3": "Especialistas em Transformação Digital",
        "years_experience": "Anos de Experiência",
        "10_years": "10 Anos",
        "digital_solution": "Solução Digital Com 10 Anos de Experiência",
        "team_members": "Membros da Equipe",
        "satisfied_clients": "Clientes Satisfeitos",
        "projects_done": "Projetos Concluídos",
        "creative_team": "Somos uma equipe criativa para o seu projeto dos sonhos",
        "team_full_name_1": "Yosmara Puig Sánchez",
        "team_full_name_2": "Jose Perez Quevedo",
        "team_full_name_3": "Ariadna Rendón Artola",
        "team_designation_1": "Gerente de Desenv. de Negócios",
        "team_designation_2": "Engenheiro de Software",
        "team_designation_3": "Analista de Dados - Desenvolvedor",
        "designation": "Cargo",
        "why_choose_us": "Por Que Escolher-nos?",
        "why_people_trust_us": "Por que as pessoas confiam em nós? Conheça-nos!",
        "digital_marketing": "Marketing Digital",
        "seo_backlinks": "SEO & Backlinks",
        "design_development": "Design & Desenvolvimento",
        "our_projects": "Nossos Projetos",
        "learn_more": "Saiba mais sobre nossos projetos completos",
        "ui_ux_design": "Design UI/UX",
        "digital_agency": "Design e desenvolvimento de site para agência digital",
        "if_you_have_any_query": "Se tiver alguma dúvida, sinta-se à vontade para nos contactar",
        "contact_form_inactive": "O formulário de contato está atualmente inativo. Obtenha um formulário funcional com Ajax e PHP em minutos.",
        "your_name": "Seu nome",
        "your_email": "Seu email",
        "subject": "Assunto",
        "message": "Mensagem",
        "send_message": "Enviar Mensagem",
        "about": "Sobre",
        "years_of_experience": "10 Anos",
        "read_more": "Ler Mais",
        "team_member_name": "Nome Completo",
        "team_member_role": "Cargo",
        "previous": "Anterior",
        "next": "Próximo",
        "testimonial_text": "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        "services_description": "Focamo-nos em fazer o melhor em todos os setores",
        "ppc_advertising": "Publicidade PPC",
        "what_our_clients_say": "O que nossos clientes dizem!",
        "why_choose_us_description": "Na EasyByte, combinamos inovação, clareza e um compromisso genuíno com quem confia em nós. Nossa forma de trabalhar baseia-se em soluções tecnológicas simples mas poderosas, projetadas para simplificar processos, impulsionar resultados e adaptar-se às necessidades de cada cliente. Eles escolhem-nos porque entendemos que por trás de cada desafio digital há pessoas à procura de respostas concretas, relações honestas e uma experiência sem complicações.",
        "about_us_description": "Como parte da nossa identidade, o ícone integra subtilmente o binário para 'simples', refletindo nosso propósito de oferecer experiências digitais simplificadas - um elemento que convida as pessoas a descobrir o que é a EasyByte.",
        "about_us_description_2": "E fazemos isso combinando código limpo, design intencional e uma curiosidade genuína para criar ferramentas que tornam a vida digital das pessoas mais fácil e intuitiva.",
        "page_not_found": "Página não encontrada",
        "page_not_found_message": "Pedimos desculpa, a página que procura não existe no nosso site! Talvez queira ir para nossa página inicial ou tentar uma pesquisa?",
        "go_back_home": "Voltar para Início"
    },
    fr: {
        "home": "Accueil",
        "about_us": "À Propos",
        "services": "Services",
        "projects": "Projets",
        "pages": "Pages",
        "features": "Fonctionnalités",
        "our_team": "Notre Équipe",
        "testimonial": "Témoignages",
        "404_page": "Page 404",
        "contact_us": "Contactez-nous",
        "get_started": "Commencer",
        "follow_us": "Suivez-nous",
        "opening_hour_time": "Lun - Ven, 8:00 - 18:00",
        "opening_hour": "Heures d'Ouverture",
        "call_us": "Appelez-nous",
        "email_us": "Écrivez-nous",
        "focus_sectors": "Nous nous concentrons sur le meilleur dans tous les secteurs",
        "what_clients_say": "Ce que disent nos clients !",
        "client_name": "Nom du Client",
        "profession": "Profession",
        "address": "Adresse",
        "quick_links": "Liens Rapides",
        "gallery": "Galerie",
        "newsletter": "Newsletter",
        "all_right_reserved": "Tous droits réservés",
        "designed_by": "Conçu par",
        "your_site": "Votre Site",
        "company_name": "Nom de l'Entreprise",
        "signup": "S'inscrire",
        "career": "Carrière",
        "terms": "Conditions",
        "privacy": "Confidentialité",
        "logo": "Logo",
        "menu": "MENU",
        "web_design": "Design Web",
        "app_development": "Développement d'Applications",
        "seo_optimization": "Optimisation SEO",
        "our_services": "Nos Services",
        "terms_condition": "Conditions Générales",
        "support": "Support",
        "newsletter_signup": "Inscription à la Newsletter",
        "copyright": "Tous droits réservés",
        "all_rights_reserved": "Tous droits réservés",
        "site_name": "Nom de votre Site",
        "newsletter_description": "Abonnez-vous à notre newsletter pour les dernières mises à jour et offres.",
        "we_are_leader_in": "Nous Sommes Leader En",
        "creative_solution_1": "Solutions Numériques Créatives et Innovantes",
        "creative_solution_2": "Solutions Technologiques de Pointe",
        "creative_solution_3": "Experts en Transformation Numérique",
        "years_experience": "Années d'Expérience",
        "10_years": "10 Ans",
        "digital_solution": "Solution Numérique avec 10 Ans d'Expérience",
        "team_members": "Membres de l'Équipe",
        "satisfied_clients": "Clients Satisfaits",
        "projects_done": "Projets Réalisés",
        "creative_team": "Nous sommes une équipe créative pour votre projet de rêve",
        "team_full_name_1": "Yosmara Puig Sánchez",
        "team_full_name_2": "Jose Perez Quevedo",
        "team_full_name_3": "Ariadna Rendón Artola",
        "team_designation_1": "Responsable Développement Commercial",
        "team_designation_2": "Ingénieur Logiciel",
        "team_designation_3": "Analyste de Données - Développeur",
        "designation": "Fonction",
        "why_choose_us": "Pourquoi Nous Choisir ?",
        "why_people_trust_us": "Pourquoi les gens nous font confiance ? Apprenez à nous connaître !",
        "digital_marketing": "Marketing Digital",
        "seo_backlinks": "SEO & Backlinks",
        "design_development": "Conception & Développement",
        "our_projects": "Nos Projets",
        "learn_more": "En savoir plus sur nos projets complets",
        "ui_ux_design": "Design UI/UX",
        "digital_agency": "Conception et développement de site web pour agence digitale",
        "if_you_have_any_query": "Si vous avez des questions, n'hésitez pas à nous contacter",
        "contact_form_inactive": "Le formulaire de contact est actuellement inactif. Obtenez un formulaire fonctionnel avec Ajax et PHP en quelques minutes.",
        "your_name": "Votre nom",
        "your_email": "Votre email",
        "subject": "Sujet",
        "message": "Message",
        "send_message": "Envoyer le Message",
        "about": "À Propos",
        "years_of_experience": "10 Ans",
        "read_more": "Lire Plus",
        "team_member_name": "Nom Complet",
        "team_member_role": "Fonction",
        "previous": "Précédent",
        "next": "Suivant",
        "testimonial_text": "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        "services_description": "Nous nous concentrons sur le meilleur dans tous les secteurs",
        "ppc_advertising": "Publicité PPC",
        "what_our_clients_say": "Ce que disent nos clients !",
        "why_choose_us_description": "Chez EasyByte, nous combinons innovation, clarté et un engagement authentique envers ceux qui nous font confiance. Notre mode de fonctionnement repose sur des solutions technologiques simples mais puissantes, conçues pour simplifier les processus, générer des résultats et s'adapter aux besoins de chaque client. Ils nous choisissent parce que nous comprenons que derrière chaque défi numérique se cachent des personnes à la recherche de réponses concrètes, de relations honnêtes et d'une expérience sans tracas.",
        "about_us_description": "Dans le cadre de notre identité, l'icône intègre subtilement le binaire pour 'simple', reflétant notre objectif d'offrir des expériences numériques simplifiées - un élément qui invite les gens à découvrir ce qu'est EasyByte.",
        "about_us_description_2": "Et nous le faisons en combinant un code propre, un design intentionnel et une curiosité authentique pour créer des outils qui rendent la vie numérique des gens plus facile et plus intuitive.",
        "page_not_found": "Page non trouvée",
        "page_not_found_message": "Nous sommes désolés, la page que vous avez recherchée n'existe pas sur notre site ! Peut-être souhaitez-vous aller à notre page d'accueil ou essayer une recherche ?",
        "go_back_home": "Retour à l'accueil"
    },
    it: {
        "home": "Home",
        "about_us": "Chi Siamo",
        "services": "Servizi",
        "projects": "Progetti",
        "pages": "Pagine",
        "features": "Caratteristiche",
        "our_team": "Il Nostro Team",
        "testimonial": "Testimonianze",
        "404_page": "Pagina 404",
        "contact_us": "Contattaci",
        "get_started": "Inizia",
        "follow_us": "Seguici",
        "opening_hour_time": "Lun - Ven, 8:00 - 18:00",
        "opening_hour": "Orario di Apertura",
        "call_us": "Chiamaci",
        "email_us": "Scrivici",
        "focus_sectors": "Ci concentriamo sul meglio in tutti i settori",
        "what_clients_say": "Cosa dicono i nostri clienti!",
        "client_name": "Nome Cliente",
        "profession": "Professione",
        "address": "Indirizzo",
        "quick_links": "Link Rapidi",
        "gallery": "Galleria",
        "newsletter": "Newsletter",
        "all_right_reserved": "Tutti i diritti riservati",
        "designed_by": "Design by",
        "your_site": "Il Tuo Sito",
        "company_name": "Nome Azienda",
        "signup": "Registrati",
        "career": "Carriera",
        "terms": "Termini",
        "privacy": "Privacy",
        "logo": "Logo",
        "menu": "MENU",
        "web_design": "Web Design",
        "app_development": "Sviluppo App",
        "seo_optimization": "Ottimizzazione SEO",
        "our_services": "I Nostri Servizi",
        "terms_condition": "Termini & Condizioni",
        "support": "Supporto",
        "newsletter_signup": "Iscrizione alla Newsletter",
        "copyright": "Tutti i diritti riservati",
        "all_rights_reserved": "Tutti i diritti riservati",
        "site_name": "Nome del tuo Sito",
        "newsletter_description": "Iscriviti alla nostra newsletter per gli ultimi aggiornamenti e offerte.",
        "we_are_leader_in": "Siamo Leader In",
        "creative_solution_1": "Soluzioni Digitali Creative e Innovative",
        "creative_solution_2": "Soluzioni Tecnologiche all'Avanguardia",
        "creative_solution_3": "Esperti in Trasformazione Digitale",
        "years_experience": "Anni di Esperienza",
        "10_years": "10 Anni",
        "digital_solution": "Soluzione Digitale con 10 Anni di Esperienza",
        "team_members": "Membri del Team",
        "satisfied_clients": "Clienti Soddisfatti",
        "projects_done": "Progetti Completati",
        "creative_team": "Siamo un team creativo per il tuo progetto dei sogni",
        "team_full_name_1": "Yosmara Puig Sánchez",
        "team_full_name_2": "Jose Perez Quevedo",
        "team_full_name_3": "Ariadna Rendón Artola",
        "team_designation_1": "Responsabile Sviluppo Business",
        "team_designation_2": "Ingegnere del Software",
        "team_designation_3": "Analista Dati - Sviluppatore",
        "designation": "Posizione",
        "why_choose_us": "Perché Sceglierci",
        "why_people_trust_us": "Perché le persone si fidano di noi? Conosci la nostra storia!",
        "digital_marketing": "Marketing Digitale",
        "seo_backlinks": "SEO & Backlinks",
        "design_development": "Design & Sviluppo",
        "our_projects": "I Nostri Progetti",
        "learn_more": "Scopri di più sui nostri progetti completati",
        "ui_ux_design": "UI/UX Design",
        "digital_agency": "Progettazione e sviluppo sito web per agenzia digitale",
        "if_you_have_any_query": "Se hai domande, non esitare a contattarci",
        "contact_form_inactive": "Il modulo di contatto è attualmente inattivo. Ottieni un modulo funzionante con Ajax e PHP in pochi minuti.",
        "your_name": "Il tuo nome",
        "your_email": "La tua email",
        "subject": "Oggetto",
        "message": "Messaggio",
        "send_message": "Invia Messaggio",
        "about": "Chi Siamo",
        "years_of_experience": "10 Anni",
        "read_more": "Leggi di Più",
        "team_member_name": "Nome Completo",
        "team_member_role": "Posizione",
        "previous": "Precedente",
        "next": "Successivo",
        "testimonial_text": "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        "services_description": "Ci concentriamo sul meglio in tutti i settori",
        "ppc_advertising": "Pubblicità PPC",
        "what_our_clients_say": "Cosa dicono i nostri clienti!",
        "why_choose_us_description": "In EasyByte combiniamo innovazione, chiarezza e un impegno autentico verso chi si fida di noi. Il nostro modo di lavorare si basa su soluzioni tecnologiche semplici ma potenti, progettate per semplificare i processi, ottenere risultati e adattarsi alle esigenze di ogni cliente. Ci scelgono perché capiamo che dietro ogni sfida digitale ci sono persone alla ricerca di risposte concrete, relazioni oneste e un'esperienza senza problemi.",
        "about_us_description": "Come parte della nostra identità, l'icona integra sottilmente il binario per 'semplice', riflettendo il nostro scopo di offrire esperienze digitali semplificate - un elemento che invita le persone a scoprire cos'è EasyByte.",
        "about_us_description_2": "E lo facciamo combinando codice pulito, design intenzionale e una genuina curiosità per creare strumenti che rendano la vita digitale delle persone più facile e intuitiva.",
        "page_not_found": "Pagina non trovata",
        "page_not_found_message": "Spiacenti, la pagina che hai cercato non esiste nel nostro sito! Forse vuoi andare alla nostra home page o provare una ricerca?",
        "go_back_home": "Torna alla Home"
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
