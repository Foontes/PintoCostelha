document.addEventListener("DOMContentLoaded", function () {
    const langMenu = document.querySelector(".lang-menu");
    const selectedLang = langMenu.querySelector(".selected-lang");
    const links = langMenu.querySelectorAll("ul li a");
  
    const langMap = {
      en: {
        name: "",
        flag: "../img/flags/england.png"
      },
      fr: {
        name: "",
        flag: "../img/flags/france.png"
      },
      es: {
        name: "",
        flag: "../img/flags/Spain.png"
      },
      pt: {
        name: "",
        flag: "../img/flags/portugal.png"
      }
    };

    function updateLanguage(langCode) {
        const lang = langMap[langCode] || langMap.pt;

        selectedLang.textContent = lang.name;
        selectedLang.style.setProperty('--flag-url', `url(${lang.flag})`);
    
        links.forEach(link => {
          if (link.className === langCode) {
            link.parentElement.style.display = "none";
          } else {
            link.parentElement.style.display = "flex";
          }
        });
    
        applyTranslations(langCode);
        localStorage.setItem("selectedLanguage", langCode);
    }
  
    const savedLang = localStorage.getItem("selectedLanguage");
    const browserLang = navigator.language.slice(0, 2); 
    const langToUse = savedLang || (langMap[browserLang] ? browserLang : "pt");
    updateLanguage(langToUse);

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const langCode = link.className;
        updateLanguage(langCode);
      });
    });
  });

function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
}

const translations = {
    en: {
      Home: "Home",
      Services: "Services",
      Contacts: "Contacts",
      pt: "Portuguese",
      en: "English",
      fr: "French",
      Navigation: "Navigation",
      
      AboutUs: "About Us",
      AboutUsText1: "Pinto & Costelha - Certified Accountants SP, Lda has been on the market since 1998, is based in Barroselas, Viana do Castelo and is dedicated to providing accounting, tax, and business management support services. With the experience accumulated over more than ",
      AboutUsText2: "years by its team of professionals, it has the capacity to support the sustained growth of its clients, with whom we have established unique relationships of proximity and trust.",
      
      YourServices: "Our Services",
      Contability: "Accounting",
      serviceTitle1: "WHAT WE OFFER",
      serviceTitle2: "ECONOMIC AND FINANCIAL CONSULTING",
      serviceTitle3: "HUMAN RESOURCES",
      serviceTitle4: "TAX CONSULTING AND ASSISTANCE",
      service1: "Your company's accounting is handled by competent professionals, with support and a high level of technical expertise.",
      service2: "Through a detailed analysis of each company, we provide management support suggestions and solutions tailored to each business area.",
      service3: "In one of the core areas of any business, we optimize, together with our clients, solutions tailored to their staff.",
      service4: "We support our clients in complying with the tax and declarative obligations inherent to any business area.",
      
      Address: "Address:",
      Phone: "Phone:",
      OpeningHours: "Opening Hours:",
      Time: "Monday to Friday: 9:00 AM — 6:00 PM",
      Licenses: "Licenses",
      tag: "Pinto&Costelha®",
      tag2: "All rights reserved.",
  
      Fonte: "Anivers Regular Font by Jos Buivenga",
      Fonte2: "Music by Patrick Patrikios",
      Available: "Available at",
      ClickHere: "Click here",

    },
    fr: {
      Home: "Accueil",
      Services: "Services",
      Contacts: "Contacts",
      pt: "Portugais",
      en: "Anglais",
      fr: "Français",
      Navigation: "Navigation",

      AboutUs: "À propos de nous",
      AboutUsText1: "Pinto & Costelha - Experts-Comptables Certifiés SP, Lda est présent sur le marché depuis 1998, est basé à Barroselas, Viana do Castelo, et se consacre à la prestation de services de comptabilité, de fiscalité et de soutien à la gestion d'entreprise. Avec l'expérience accumulée pendant plus de ",
      AboutUsText2: "ans par son équipe de professionnels, elle dispose des conditions nécessaires pour accompagner la croissance durable de ses clients, avec lesquels nous avons établi des relations uniques de proximité et de confiance.",
      
      YourServices: "Nos Services",
      Contability: "Comptabilité",
      serviceTitle1: "Ce que nous offrons",
      serviceTitle2: "CONSEIL ÉCONOMIQUE ET FINANCIER",
      serviceTitle3: "RESSOURCES HUMAINES",
      serviceTitle4: "CONSEIL ET ASSISTANCE FISCALE",
      service1: "La comptabilité de votre entreprise est assurée par des professionnels compétents, avec un accompagnement et un haut niveau d'expertise technique.",
      service2: "Grâce à une analyse approfondie de chaque entreprise, nous proposons des suggestions et des solutions de gestion adaptées à chaque secteur d'activité.",
      service3: "Dans l’un des domaines clés de toute entreprise, nous optimisons avec nos clients des solutions adaptées à leurs collaborateurs.",
      service4: "Nous aidons nos clients à respecter les obligations fiscales et déclaratives propres à chaque secteur d'activité.",
      
      Address: "Adresse :",
      Phone: "Téléphone :",
      OpeningHours: "Heures d'ouverture :",
      Time: "Lundi à Vendredi : 9h00 — 18h00",
      Licenses: "Licences",
      tag: "Pinto&Costelha®",
      tag2: "Tous droits réservés.",
  
      Fonte: "Police Anivers Regular par Jos Buivenga",
      Fonte2: "Musique de Patrick Patrikios",
      Available: "Disponible sur",
      ClickHere: "Cliquez ici",


    },
    es: {
      Home: "Inicio",
      Services: "Servicios",
      Contacts: "Contactos",
      pt: "Portugués",
      en: "Inglés",
      fr: "Francés",
      es: "Español",
      Navigation: "Navegación",

      AboutUs: "Sobre Nosotros",
      AboutUsText1: "Pinto & Costelha - Contables Certificados SP, Lda está en el mercado desde 1998, tiene su sede en Barroselas, Viana do Castelo y se dedica a prestar servicios de contabilidad, fiscalidad y apoyo a la gestión empresarial. Con la experiencia acumulada durante más de ",
      AboutUsText2: "años por su equipo de profesionales, tiene la capacidad de acompañar el crecimiento sostenido de sus clientes, con quienes hemos establecido relaciones únicas de cercanía y confianza.",
    
      YourServices: "Nuestros Servicios",
      Contability: "Contabilidad",
      serviceTitle1: "Lo que ofrecemos",
      serviceTitle2: "CONSULTORÍA ECONÓMICA Y FINANCIERA",
      serviceTitle3: "RECURSOS HUMANOS",
      serviceTitle4: "ASESORÍA Y ASISTENCIA FISCAL",
      service1: "La contabilidad de su empresa es realizada por profesionales competentes, con soporte y un alto nivel de conocimiento técnico.",
      service2: "A través del análisis detallado de cada empresa, presentamos sugerencias y soluciones de apoyo a la gestión, adaptadas a cada área de negocio.",
      service3: "En uno de los pilares fundamentales de cualquier negocio, optimizamos junto a nuestros clientes soluciones adaptadas a sus colaboradores.",
      service4: "Apoyamos a nuestros clientes en el cumplimiento de las obligaciones fiscales y declarativas inherentes a cualquier área de negocio.",
    
      Address: "Dirección:",
      Phone: "Teléfono:",
      OpeningHours: "Horário:",
      Time: "Lunes a Viernes: 9:00 — 18:00",
      Licenses: "Licencias",
      tag: "Pinto&Costelha®",
      tag2: "Todos los derechos reservados.",
  
      Fonte: "Fuente Anivers Regular por Jos Buivenga",
      Font2:"Música de Patrick Patrikios",
      Available: "Disponible en",
      ClickHere: "Haz clic aquí",

      
    },
    pt: {
      Home: "Início",
      Services: "Serviços",
      Contacts: "Contactos",
      pt: "Português",
      en: "Inglês",
      fr: "Francês",
      Navigation: "Navegação",

      AboutUs: "Sobre Nós",
      AboutUsText1: "A Pinto & Costelha – Contabilistas Certificados SP, Lda está no mercado desde 1998, tem sede em Barroselas, Viana do Castelo e dedica-se à prestação de serviços de contabilidade, fiscalidade e apoio à gestão de empresas. Com a experiência acumulada ao longo destes mais de ",
      AboutUsText2: "anos pela sua equipa de profissionais, dispõe de condições para acompanhar o crescimento sustentado dos seus clientes, com quem estabelecemos relações únicas de proximidade e confiança.",
      
      YourServices: "Os Nossos Serviços",
      Contability: "Contabilidade",
      serviceTitle1: "CONTABILIDADE",
      serviceTitle2: "CONSULTORIA ECONÓMICA E FINANCEIRA",
      serviceTitle3: "RECURSOS HUMANOS",
      serviceTitle4: "CONSULTORIA E ASSISTÊNCIA FISCAL",
      service1: "A contabilidade da sua empresa é executada por profissionais competentes, com suporte e elevado conhecimento técnico.",
      service2: "Através da análise estudada de cada empresa apresentamos sugestões e soluções de apoio à gestão, ajustadas a cada área de negócio.",
      service3: "Numa das áreas fundamentais de qualquer negócio, otimizamos com os nossos clientes, soluções ajustadas aos seus colaboradores.",
      service4: "Apoiamos os nossos clientes no cumprimento das obrigações declarativas e fiscais inerentes a qualquer área de negócio.",
      Services: "Serviços",

      Address: "Morada:",
      Phone: "Telefone:",
      OpeningHours: "Abertos:",
      Time: "Segunda a Sexta: 9h:00 — 18h:00",
      Licenses: "Licenças",
      tag: "Pinto&Costelha®",
      tag2: "Todos os direitos reservados.",

      Fonte: "Fonte Anivers Regular por Jos Buivenga",
      Font2:"Música de Patrick Patrikios",
      Available: "Disponivel em",
      ClickHere: "Clique aqui",

   
    }
};
