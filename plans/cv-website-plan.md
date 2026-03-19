# CV Website Implementation Plan

## Design Decisions (Confirmed)
- **Theme**: Purple/violet (existing template colors)
- **Layout**: Single-page with smooth scroll navigation
- **Hero**: Text-only with name and professional title

---

## Implementation Tasks

### 1. Update index.html
- Change title to "Elmer Alexis Muguerza - Full Stack Developer"
- Add meta description with professional summary
- Update language to Spanish (es)

### 2. Rebuild App.jsx
Create the following sections with all CV data:

**Navigation Bar**
- Fixed top navigation with smooth scroll links
- Links: Inicio, Acerca, Experiencia, Proyectos, Educación, Habilidades, Contacto

**Hero Section**
- Name: Elmer Alexis Muguerza Prieto
- Title: Desarrollador Full Stack (.NET Core & Flutter)
- Location: Perú
- Social links: GitHub, LinkedIn, Email

**Acerca (About)**
- Full professional summary extracted from PDF

**Experiencia (Experience)**
- INVADION SAC (July 2023 – present)
- Corporación Educativa Tecnológica Interactiva "Virgen de la Puerta" EIRL (Apr 2021 – July 2023)
- Each with bullet points of achievements

**Proyectos (Projects)**
- Tr4iner – Complete Platform
- OneCanal – Mobile App
- Tr4iner Platform for Trainers

**Educación (Education)**
- Universidad Nacional del Santa
- Bachiller in Ingeniería de Sistemas e Informática

**Habilidades (Skills)**
- Full Stack Development
- Architecture
- Backend & Data
- Mobile Development
- Integration & Cloud
- Tools
- Idiomas

**Contacto (Contact)**
- Email: e70205522@email.com
- Phone: 936 895 844
- LinkedIn link
- GitHub link

### 3. Style with App.css
- Keep existing purple/violet color scheme
- Add responsive breakpoints for mobile
- Style each section consistently
- Add hover effects for links
- Style skill tags/badges

### 4. Update index.css
- Keep theme variables
- Add section spacing utilities

---

## CV Data Summary

### Personal Info
- **Name**: Elmer Alexis Muguerza Prieto
- **Email**: e70205522@email.com
- **Phone**: 936 895 844
- **Location**: Perú
- **LinkedIn**: linkedin.com/in/elmer-alexis-muguerza-prieto
- **GitHub**: github.com/AlexMuguerza

### Professional Summary
Full Stack Developer specialized in .NET Core and Flutter, with solid experience in design, development and maintenance of mobile applications and scalable REST APIs in production environments.

### Experience
1. **INVADION SAC** - Full Stack Developer (.NET Core & Flutter)
   - July 2023 – present

2. **Corporación Educativa Tecnológica Interactiva "Virgen de la Puerta" EIRL**
   - Apr 2021 – July 2023

### Projects
- Tr4iner – Complete Platform (Mobile + Backend)
- OneCanal – Mobile App with Backend Integration
- Tr4iner Platform for Trainers (.NET Core)

### Education
- Universidad Nacional del Santa
- Bachiller in Ingeniería de Sistemas e Informática
- Jan 2018 – Jan 2025

### Skills
- **Full Stack**: .NET Core, C#, Flutter, Dart, APIs REST, MVC
- **Architecture**: Clean Architecture, Onion Architecture, CQRS, Unit of Work
- **Backend & Data**: Entity Framework, SQL Server
- **Mobile**: Flutter, Android, iOS
- **Cloud**: Firebase, Azure, AWS
- **Tools**: Git, GitHub, CI/CD, Agile/Scrum
- **Languages**: Spanish (Native), English (Basic)
