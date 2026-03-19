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
  "Desarrollador Full Stack especializado en <strong class='text-accent-light'>.NET Core y Flutter</strong>, enfocado en crear aplicaciones escalables y listas para producción.",
  "Experiencia en arquitecturas limpias <strong class='text-accent-light'>(Clean Architecture, CQRS), desarrollo de APIs y apps móviles</strong> de alto rendimiento.",
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
      "Desarrollo de apps móviles multiplataforma (Android/iOS) con Flutter",
      "Construcción de APIs REST escalables con .NET Core",
      "Implementación de Clean Architecture, CQRS y Unit of Work",
      "Integración de Firebase (auth, notificaciones push)",
      "Optimización de rendimiento en backend con EF y SQL Server",
      "Autenticación y autorización con JWT, roles y permisos",
      "Participación en decisiones técnicas y mejora continua",
    ],
    tech: ["Flutter", "Dart", ".NET Core", "C#", "Entity Framework", "SQL Server", "Firebase", "Git", "Azure", "AWS"],
  },
  {
    company: "Corporación Educativa Tecnológica Interactiva 'Virgen de la Puerta' EIRL",
    role: "Desarrollador Full Stack (.NET Core & Flutter)",
    period: "Apr 2021 – July 2023",
    location: "Perú",
    highlights: [
      "Desarrollo de apps móviles desde cero con Flutter",
      "Creación de APIs REST para apps móviles y web",
      "Implementación de arquitecturas limpias y mantenibles",
      "Integración con Firebase y servicios externos",
      "Mantenimiento, soporte y despliegues en producción",
    ],
    tech: ["Flutter", "Dart", ".NET Core", "Entity Framework", "SQL Server", "Git"],
  },
]

export const projects = [
  {
    name: "Tr4iner",
    subtitle: "Plataforma Completa (Mobile + Backend)",
    period: "Jan 2023 – Present",
    description: "Plataforma fitness desarrollada end-to-end con app móvil, backend escalable y módulos inteligentes.",
    details: [
      "App móvil en Flutter optimizada para rendimiento y UX",
      "Backend en .NET Core con SQL Server",
      "Implementación de Clean Architecture y CQRS",
      "Autenticación segura con JWT, roles y permisos",
      "Integración de métricas, dashboards e IA",
      "Optimización continua de rendimiento",
    ],
  },
  {
    name: "OneCanal",
    subtitle: "Aplicación Móvil + Backend",
    period: "Jan 2023 – Present",
    description: "App fintech para adelanto de sueldo integrada con sistemas empresariales.",
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
      "APIs REST y controladores MVC en .NET Core",
      "Gestión de datos con EF y SQL Server",
      "Autenticación con JWT y control de acceso",
      "Integración con apps móviles",
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
