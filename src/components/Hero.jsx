import { MapPin, Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react'
import yoFoto from '../assets/yo.webp'
import cvPdf from '../assets/ElmerMuguerza-FS.pdf_2026_1_12.pdf'
import { personalInfo } from '../utils/copy'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_30%_20%,rgba(159,103,255,0.08)_0%,transparent_50%),radial_gradient(ellipse_at_70%_80%,rgba(123,79,217,0.06)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(159,103,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(159,103,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
        <div className="absolute w-100 h-100 rounded-full bg-[rgba(159,103,255,0.15)] blur-[80px] top-[10%] right-[10%] animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-75 h-75 rounded-full bg-[rgba(123,79,217,0.1)] blur-[80px] bottom-[20%] left-[10%] animate-[float_10s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* Grid: Photo on right for desktop, on top for mobile */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-275 w-full relative z-10">
        
        {/* Text Content - Left on desktop */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-accent font-mono text-xs sm:text-sm mb-1 sm:mb-2 tracking-widest animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
            Hola, soy
          </p>

          <h1 className="text-text-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-tight mb-4 sm:mb-5 md:mb-6 tracking-tight animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
            {personalInfo.name}
          </h1>

          <p className="text-text text-base sm:text-lg md:text-xl flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
            <span className="text-accent-light font-medium">{personalInfo.title}</span>
            <span className="text-border-light hidden sm:inline">|</span>
            <span className="font-mono text-xs sm:text-sm">{personalInfo.subtitle}</span>
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 text-text mb-6 sm:mb-8 md:mb-10 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.5s' }}>
            <MapPin size={16} />
            <span className="text-sm">{personalInfo.location}</span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.6s' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-bg-secondary border border-border rounded-lg text-text text-sm font-medium hover:bg-bg-tertiary hover:border-accent hover:text-text-heading transition-all hover:-translate-y-0.5"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-bg-secondary border border-border rounded-lg text-text text-sm font-medium hover:bg-bg-tertiary hover:border-accent hover:text-text-heading transition-all hover:-translate-y-0.5"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-bg-secondary border border-border rounded-lg text-text text-sm font-medium hover:bg-bg-tertiary hover:border-accent hover:text-text-heading transition-all hover:-translate-y-0.5"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>

            <a
              href={cvPdf}
              download="ElmerMuguerza-CV.pdf"
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-accent border border-accent rounded-lg text-white text-sm font-medium hover:bg-accent-dark transition-all hover:-translate-y-0.5"
            >
              <Download size={20} />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>

        {/* Photo - Right on desktop, first on mobile */}
        <div className="flex justify-center  order-1 md:order-2 mb-6 md:mb-0 animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-linear-to-br from-accent to-accent-dark rounded-full blur-lg opacity-50 scale-110"></div>
            <img
              src={yoFoto}
              alt={personalInfo.name}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-border shadow-2xl"
            />
          </div>
        </div>

      </div>

      <button
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-text hover:text-accent transition-colors animate-[fadeIn_0.6s_ease-out_forwards] opacity-0"
        style={{ animationDelay: '0.8s' }}
        onClick={scrollToAbout}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-[float_2s_ease-in-out_infinite]" />
      </button>
    </section>
  )
}
