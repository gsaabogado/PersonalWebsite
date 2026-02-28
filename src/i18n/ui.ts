export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "nav.openMenu": "Open menu",

    // Hero
    "hero.chip": "Environmental Economist",
    "hero.title1": "Luis",
    "hero.title2": "Sarmiento",
    "hero.description": "I study how environmental quality shapes economic outcomes — from air pollution's effects on productivity and well-being to the design of energy systems for a sustainable future.",
    "hero.cta1": "View Research",
    "hero.cta2": "Download CV",

    // About
    "about.label": "About me",
    "about.title": "Bridging econometrics and energy policy",
    "about.p1": "I am a Postdoctoral Researcher at D-MTEC, ETH Zurich in Switzerland. My research sits at the intersection of applied econometrics and energy modeling.",
    "about.p2": "I use causal inference methods to study the effects of air pollution on human welfare — from court decisions in India to crime rates in Mexico City. I also design optimization and agent-based models to evaluate policies for decarbonizing energy systems.",
    "about.p3": "I hold a Ph.D. in Economics (Summa Cum Laude) from TU Berlin and have previously worked at the Bank of Mexico, CMCC Foundation, DIW Berlin, and the Hertie School of Governance.",

    // Research Highlights
    "research.label": "Research areas",
    "research.title": "What I study",
    "research.subtitle": "My work spans two complementary fields, using quantitative methods to address pressing environmental and energy challenges.",
    "research.explore": "Explore",

    // Stats
    "stats.publications": "Publications",
    "stats.conferences": "Conferences",
    "stats.yearsResearch": "Years of research",
    "stats.coAuthors": "Co-authors",

    // Recent Work
    "recent.label": "Recent publications",
    "recent.title": "Latest work",

    // CTA
    "cta.title": "Interested in collaborating?",
    "cta.subtitle": "I'm always open to discussing research ideas, potential collaborations, or speaking engagements. Feel free to get in touch.",
    "cta.button": "Get in Touch",

    // Footer
    "footer.tagline": "Environmental economist specializing in applied econometrics and energy modeling.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "Luis Sarmiento. All rights reserved.",

    // Research pages
    "research.heroTitle": "Research",
    "research.heroDesc": "Exploring the intersection of environmental quality, economic outcomes, and energy policy through rigorous quantitative methods.",
    "research.areas": "Research Areas",
    "research.topics": "topics",
    "research.viewPublications": "View publications",
    "research.published": "Published",
    "research.reviseResubmit": "Revise & Resubmit",
    "research.underReview": "Under Review",
    "research.workingPapers": "Working Papers",
    "research.backToResearch": "Back to Research",

    // CV page
    "cv.heroTitle": "Curriculum Vitae",
    "cv.heroDesc": "Academic background, professional experience, and research output.",
    "cv.download": "Download PDF",
    "cv.experience": "Professional Experience",
    "cv.education": "Education",
    "cv.publications": "Research",
    "cv.teaching": "Teaching",
    "cv.skills": "Technical Skills",
    "cv.languages": "Languages",
    "cv.skillsAndLanguages": "Skills & Languages",
    "cv.conferences": "Conferences",
    "cv.visitingScholar": "Visiting Scholar",
    "cv.visitingLectures": "Visiting Lectures",
    "cv.dissertation": "Thesis",
    "cv.level": "Level",

    // Publication card
    "pub.researchQuestion": "Research Question",
    "pub.keyFindings": "Key Findings",
    "pub.workingPaper": "Working paper",

    // Skill levels
    "skill.expert": "Expert",
    "skill.advanced": "Advanced",
    "skill.intermediate": "Intermediate",
    "skill.elementary": "Elementary",
    "skill.beginner": "Beginner",
    "lang.native": "Native / Fluent",
    "lang.advanced": "Advanced",
    "lang.intermediate": "Intermediate",
    "lang.elementary": "Elementary",
    "lang.basic": "Basic",

    // Publications page
    "publications.title": "Publications",
    "publications.description": "A complete list of my published research, papers under review, and working papers.",

    // Contact page
    "contact.heroTitle": "Contact",
    "contact.heroDesc": "I'd love to hear from you — whether about research collaborations, speaking invitations, or general inquiries.",
    "contact.formTitle": "Send a message",
    "contact.formDesc": "Fill out the form and I'll get back to you as soon as possible.",
    "contact.infoTitle": "Get in touch",
    "contact.infoDesc": "You can also reach me directly via email or social media.",
    "contact.form.name": "Full name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "you@example.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "What is this about?",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Your message...",
    "contact.form.submit": "Send message",
    "contact.form.success": "Message sent! I'll get back to you soon.",
    "contact.form.error": "There was an error. Please try again or email me directly.",
    "contact.info.email": "Email",
    "contact.info.location": "Location",
    "contact.info.locationValue": "Zurich, Switzerland",
    "contact.info.social": "Social",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.research": "Investigación",
    "nav.cv": "CV",
    "nav.contact": "Contacto",
    "nav.openMenu": "Abrir menú",

    // Hero
    "hero.chip": "Economista Ambiental",
    "hero.title1": "Luis",
    "hero.title2": "Sarmiento",
    "hero.description": "Estudio la relación entre nuestro medio ambiente y la economía — desde los efectos de la contaminación del aire en la productividad y el bienestar hasta el diseño de sistemas energéticos para un futuro sostenible.",
    "hero.cta1": "Ver investigación",
    "hero.cta2": "Descargar CV",

    // About
    "about.label": "Sobre mí",
    "about.title": "Conectando econometría, investigación ambiental y política energética",
    "about.p1": "Soy Investigador Postdoctoral en D-MTEC, ETH Zurich en Suiza. Mi investigación se encuentra en la intersección de la econometría aplicada y la modelación energética.",
    "about.p2": "Utilizo métodos de inferencia causal para estudiar los efectos de la contaminación del aire en el bienestar humano — desde decisiones judiciales en India hasta tasas de criminalidad en la Ciudad de México. También diseño modelos de optimización y basados en agentes para evaluar políticas de descarbonización de sistemas energéticos.",
    "about.p3": "Tengo un Doctorado en Economía (Summa Cum Laude) de la TU Berlin y he trabajado anteriormente en el Banco de México, la Fundación CMCC, el DIW Berlin y la Hertie School of Governance.",

    // Research Highlights
    "research.label": "Áreas de investigación",
    "research.title": "Lo que estudio",
    "research.subtitle": "Mi trabajo abarca dos campos complementarios, utilizando métodos cuantitativos para abordar desafíos ambientales y energéticos urgentes.",
    "research.explore": "Explorar",

    // Stats
    "stats.publications": "Publicaciones",
    "stats.conferences": "Conferencias",
    "stats.yearsResearch": "Años de investigación",
    "stats.coAuthors": "Coautores",

    // Recent Work
    "recent.label": "Publicaciones recientes",
    "recent.title": "Trabajo reciente",

    // CTA
    "cta.title": "¿Interesado en colaborar?",
    "cta.subtitle": "Siempre estoy abierto a discutir ideas de investigación, posibles colaboraciones o invitaciones a conferencias. No dudes en contactarme.",
    "cta.button": "Contactar",

    // Footer
    "footer.tagline": "Economista ambiental especializado en econometría aplicada y modelación energética.",
    "footer.quickLinks": "Enlaces rápidos",
    "footer.contact": "Contacto",
    "footer.rights": "Luis Sarmiento. Todos los derechos reservados.",

    // Research pages
    "research.heroTitle": "Investigación",
    "research.heroDesc": "Explorando la intersección entre calidad ambiental, resultados económicos y política energética a través de métodos cuantitativos rigurosos.",
    "research.areas": "Áreas de investigación",
    "research.topics": "temas",
    "research.viewPublications": "Ver publicaciones",
    "research.published": "Publicados",
    "research.reviseResubmit": "Revisar y reenviar",
    "research.underReview": "En revisión",
    "research.workingPapers": "Documentos de trabajo",
    "research.backToResearch": "Volver a investigación",

    // CV page
    "cv.heroTitle": "Currículum Vitae",
    "cv.heroDesc": "Formación académica, experiencia profesional y producción investigativa.",
    "cv.download": "Descargar PDF",
    "cv.experience": "Experiencia profesional",
    "cv.education": "Educación",
    "cv.publications": "Investigación",
    "cv.teaching": "Docencia",
    "cv.skills": "Habilidades técnicas",
    "cv.languages": "Idiomas",
    "cv.skillsAndLanguages": "Habilidades e idiomas",
    "cv.conferences": "Conferencias",
    "cv.visitingScholar": "Estancias de investigación",
    "cv.visitingLectures": "Clases como profesor invitado",
    "cv.dissertation": "Tesis",
    "cv.level": "Nivel",

    // Publication card
    "pub.researchQuestion": "Pregunta de investigación",
    "pub.keyFindings": "Hallazgos principales",
    "pub.workingPaper": "Documento de trabajo",

    // Skill levels
    "skill.expert": "Experto",
    "skill.advanced": "Avanzado",
    "skill.intermediate": "Intermedio",
    "skill.elementary": "Elemental",
    "skill.beginner": "Principiante",
    "lang.native": "Nativo / Fluido",
    "lang.advanced": "Avanzado",
    "lang.intermediate": "Intermedio",
    "lang.elementary": "Elemental",
    "lang.basic": "Básico",

    // Publications page
    "publications.title": "Publicaciones",
    "publications.description": "Una lista completa de mi investigación publicada, artículos en revisión y documentos de trabajo.",

    // Contact page
    "contact.heroTitle": "Contacto",
    "contact.heroDesc": "Me encantaría saber de ti — ya sea sobre colaboraciones de investigación, invitaciones a conferencias o consultas generales.",
    "contact.formTitle": "Enviar un mensaje",
    "contact.formDesc": "Completa el formulario y te responderé lo antes posible.",
    "contact.infoTitle": "Contacto directo",
    "contact.infoDesc": "También puedes contactarme directamente por correo electrónico o redes sociales.",
    "contact.form.name": "Nombre completo",
    "contact.form.namePlaceholder": "Tu nombre",
    "contact.form.email": "Correo electrónico",
    "contact.form.emailPlaceholder": "tu@ejemplo.com",
    "contact.form.subject": "Asunto",
    "contact.form.subjectPlaceholder": "¿De qué se trata?",
    "contact.form.message": "Mensaje",
    "contact.form.messagePlaceholder": "Tu mensaje...",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.success": "¡Mensaje enviado! Te responderé pronto.",
    "contact.form.error": "Hubo un error. Intenta de nuevo o escríbeme directamente.",
    "contact.info.email": "Correo",
    "contact.info.location": "Ubicación",
    "contact.info.locationValue": "Zúrich, Suiza",
    "contact.info.social": "Redes sociales",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];
