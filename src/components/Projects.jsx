import { Code2, Smartphone, Globe } from 'lucide-react'
import { projects } from '../utils/copy'

const icons = {
  Globe,
  Smartphone,
  Code2,
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-275 mx-auto">
        <div className="flex items-start gap-6 mb-12">
          <span className="text-accent font-mono text-sm pt-2">03</span>
          <h2 className="text-text-heading text-3xl font-serif font-normal relative">
            Proyectos
            <span className="absolute -bottom-2 left-0 w-14 h-0.5 bg-accent"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = icons[project.icon] || Globe
            return (
              <article 
                key={index} 
                className="bg-bg-secondary border border-border rounded-2xl p-7 flex flex-col hover:border-accent hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-linear-to-br from-accent to-accent-dark rounded-xl text-white shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-text-heading font-semibold text-lg">{project.name}</h3>
                    <span className="text-accent font-mono text-xs">{project.subtitle}</span>
                  </div>
                </div>
                
                <p className="text-text text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <ul className="grow list-none space-y-2 mb-4">
                  {project.details.map((detail, dIndex) => (
                    <li key={dIndex} className="text-text-secondary text-xs pl-4 relative">
                      <span className="absolute left-0 text-accent">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                
                <span className="font-mono text-xs text-text-secondary pt-4 border-t border-border">{project.period}</span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
