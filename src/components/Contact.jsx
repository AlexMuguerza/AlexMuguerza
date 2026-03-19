import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { contact } from '../utils/copy'

const icons = {
  Email: Mail,
  Teléfono: Phone,
  LinkedIn: Linkedin,
  GitHub: Github,
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 bg-linear-to-b from-bg to-bg-secondary">
      <div className="max-w-275 mx-auto">
        <div className="flex items-start gap-6 mb-12">
          <span className="text-accent font-mono text-sm pt-2">06</span>
          <h2 className="text-text-heading text-3xl font-serif font-normal relative">
            Contacto
            <span className="absolute -bottom-2 left-0 w-14 h-0.5 bg-accent"></span>
          </h2>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-text text-lg max-w-md mx-auto">
            ¿Interesado en trabajar juntos? ¡Contáctame y trabajemos en algo increíble!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2  gap-4 max-w-225 mx-auto">
          {contact.map((item, index) => {
            const IconComponent = icons[item.label] || Mail
            return (
              <a 
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg border border-border rounded-xl p-5 flex items-center gap-4 hover:border-accent hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-bg-secondary rounded-xl text-accent shrink-0">
                  <IconComponent size={24} />
                </div>
                <div className="grow min-w-0">
                  <span className="text-text-secondary text-xs uppercase tracking-wider block">{item.label}</span>
                  <span className="text-text-heading text-sm truncate block">{item.value}</span>
                </div>
                <ArrowUpRight size={16} className="text-text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
