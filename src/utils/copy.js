// Datos del CV - Elmer Alexis Muguerza Prieto

export const personalInfo = {
  name: "Elmer Alexis Muguerza Prieto",
  title: "Desarrollador Full Stack",
  subtitle: ".NET Core & Flutter",
  location: "Perú",
  email: "e70205522@email.com",
  phone: "+51 936 895 844",
  github: "https://github.com/AlexMuguerza",
  linkedin: "https://linkedin.com/in/elmer-alexis-muguerza-prieto",
}

export const about = {
  summary: [
  "Desarrollador Full Stack especializado en .NET Core y Flutter, enfocado en crear aplicaciones escalables y listas para producción.",
  "Experiencia en arquitecturas limpias (Clean Architecture, CQRS) y desarrollo de APIs y apps móviles de alto rendimiento.",
  "Capacidad para desarrollar soluciones end-to-end, tomar decisiones técnicas y entregar productos alineados al negocio.",
],
  stats: [
    { number: "3+", label: "Años de\nExperiencia" },
    { number: "10+", label: "Proyectos\nEntregados" },
    { number: "5+", label: "Tecnologías\nClave" },
  ],
}

export const experience = [
  {
    company: "INVADION SAC",
    role: "Desarrollador Full Stack (.NET Core & Flutter)",
    period: "July 2023 – Present",
    location: "Perú",
    highlights: [
      "Desarrollo de aplicaciones móviles multiplataforma (Android e iOS) enfocadas en rendimiento, escalabilidad y experiencia de usuario",
      "Diseño y construcción de APIs REST robustas con .NET Core aplicando Clean Architecture y principios SOLID",
      "Implementación de patrones avanzados como CQRS y Unit of Work para mejorar mantenibilidad y escalabilidad",
      "Integración de Firebase (auth, push notifications) y servicios cloud para funcionalidades en tiempo real",
      "Optimización de consultas y rendimiento backend con Entity Framework y SQL Server",
      "Implementación de sistemas de autenticación y autorización seguros con JWT, roles y permisos",
      "Participación activa en decisiones técnicas y mejora continua del producto",
    ],
    tech: ["Flutter", "Dart", ".NET Core", "C#", "Entity Framework", "SQL Server", "Firebase", "Git", "Azure", "AWS"],
  },
  {
    company: "Corporación Educativa Tecnológica Interactiva 'Virgen de la Puerta' EIRL",
    role: "Desarrollador Full Stack (.NET Core & Flutter)",
    period: "Apr 2021 – July 2023",
    location: "Perú",
    highlights: [
      "Desarrollo de aplicaciones móviles desde cero con Flutter, llevándolas a producción",
      "Construcción de APIs REST para consumo por aplicaciones móviles y plataformas web",
      "Implementación de arquitecturas limpias que facilitaron la escalabilidad y mantenimiento",
      "Integración con Firebase y servicios externos para autenticación y notificaciones",
      "Soporte, mantenimiento evolutivo y despliegues continuos en producción",
    ],
    tech: ["Flutter", "Dart", ".NET Core", "Entity Framework", "SQL Server", "Git"],
  },
]

export const projects = [
  {
    name: "Tr4iner",
    subtitle: "Plataforma Completa (Mobile + Backend)",
    period: "Jan 2023 – Present",
    description: "Plataforma fitness completa desarrollada end-to-end, integrando aplicación móvil, backend escalable y funcionalidades inteligentes.",
    details: [
      "Desarrollo completo de la app móvil en Flutter con enfoque en UX y rendimiento",
      "Arquitectura backend robusta en .NET Core con SQL Server",
      "Implementación de Clean Architecture, CQRS y Unit of Work",
      "Sistema de autenticación seguro con JWT, roles y permisos",
      "Integración de módulos de IA, métricas y dashboards para usuarios",
      "Optimización continua de rendimiento y escalabilidad",
    ],
  },
  {
    name: "OneCanal",
    subtitle: "Aplicación Móvil + Integraciones Backend",
    period: "Jan 2023 – Present",
    description: "Aplicación fintech para adelanto de sueldo con integración a sistemas empresariales.",
    details: [
      "Desarrollo de app móvil en Flutter con autenticación y notificaciones push",
      "Integración segura con APIs backend y servicios empresariales",
      "Optimización de rendimiento y experiencia de usuario",
    ],
  },
  {
    name: "Tr4iner Plataforma para Entrenadores",
    subtitle: ".NET Core",
    period: "Jan 2023 – Present",
    description: "Dashboard web y backend para gestión de entrenadores y clientes.",
    details: [
      "Desarrollo de APIs REST y controladores MVC en .NET Core",
      "Gestión de datos con Entity Framework y SQL Server",
      "Sistema de autenticación y autorización con JWT",
      "Integración con apps móviles y servicios externos",
    ],
  },
]

export const education = [
  {
    degree: "Bachiller en Ingeniería de Sistemas e Informática",
    school: "Universidad Nacional del Santa",
    period: "Enero 2018 – Enero 2025",
    location: "Perú",
    description: "Formación en desarrollo de software, arquitectura de sistemas, bases de datos y metodologías ágiles, con enfoque práctico en construcción de soluciones tecnológicas.",
  },
]

export const skills = [
  {
    category: "Desarrollo Full Stack",
    items: [".NET Core", "C#", "Flutter", "Dart", "APIs REST", "MVC"],
  },
  {
    category: "Arquitectura",
    items: ["Clean Architecture", "Onion Architecture", "CQRS", "Unit of Work"],
  },
  {
    category: "Backend & Datos",
    items: ["Entity Framework", "SQL Server", "Optimización de consultas", "Diseño de modelos"],
  },
  {
    category: "Desarrollo Mobile",
    items: ["Flutter", "Android", "iOS", "UI responsiva", "Widgets personalizados"],
  },
  {
    category: "Cloud & Integraciones",
    items: ["Firebase", "Autenticación", "Notificaciones Push", "Azure", "AWS"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "CI/CD básico", "Agile/Scrum"],
  },
]

export const languages = [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "Básico" },
]

export const contact = [
  {
    label: "Email",
    value: "e70205522@email.com",
    href: "mailto:e70205522@email.com",
  },
  {
    label: "Teléfono",
    value: "+51 936 895 844",
    href: "tel:+51936895844",
  },
  {
    label: "LinkedIn",
    value: "/in/elmer-alexis-muguerza-prieto",
    href: "https://linkedin.com/in/elmer-alexis-muguerza-prieto",
  },
  {
    label: "GitHub",
    value: "/AlexMuguerza",
    href: "https://github.com/AlexMuguerza",
  },
]

export const navLinks = [
  { id: "about", label: "Acerca" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "education", label: "Educación" },
  { id: "skills", label: "Habilidades" },
  { id: "contact", label: "Contacto" },
]
