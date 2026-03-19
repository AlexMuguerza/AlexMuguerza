import { Code, Layers, Database, Smartphone, Cloud, Wrench, Languages } from 'lucide-react'
import { skills, languages } from '../utils/copy'

const icons = {
  Code,
  Layers,
  Database,
  Smartphone,
  Cloud,
  Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8">
      <div className="max-w-275 mx-auto">
        <div className="flex items-start gap-6 mb-12">
          <span className="text-accent font-mono text-sm pt-2">05</span>
          <h2 className="text-text-heading text-3xl font-serif font-normal relative">
            Habilidades
            <span className="absolute -bottom-2 left-0 w-14 h-0.5 bg-accent"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {skills.map((skillGroup, index) => {
            const IconComponent = icons[skillGroup.category.split(' ')[0]] || Code
            return (
              <div 
                key={index} 
                className="bg-bg-secondary border border-border rounded-xl p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <IconComponent size={20} />
                  <h3 className="text-text-heading font-semibold text-sm">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIndex) => (
                    <span 
                      key={sIndex} 
                      className="text-xs px-3 py-1.5 bg-bg-tertiary rounded text-text hover:bg-accent hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="bg-bg-secondary border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4 text-accent">
            <Languages size={20} />
            <h3 className="text-text-heading font-semibold text-sm">Idiomas</h3>
          </div>
          <div className="flex gap-8">
            {languages.map((lang, index) => (
              <span key={index} className="text-text text-sm">
                <strong className="text-text-heading">{lang.language}</strong> — {lang.level}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
