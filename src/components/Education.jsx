import { GraduationCap, Calendar } from 'lucide-react'
import { education } from '../utils/copy'

export default function Education() {
  return (
    <section id="education" className="py-24 px-8 bg-bg">
      <div className="max-w-275 mx-auto">
        <div className="flex items-start gap-6 mb-12">
          <span className="text-accent font-mono text-sm pt-2">04</span>
          <h2 className="text-text-heading text-3xl font-serif font-normal relative">
            Educación
            <span className="absolute -bottom-2 left-0 w-14 h-0.5 bg-accent"></span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <article 
              key={index} 
              className="flex flex-col md:flex-row bg-bg-secondary border border-border rounded-2xl p-8  gap-6 hover:border-accent hover:translate-x-1 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-bg-tertiary border border-border rounded-xl text-accent shrink-0">
                <GraduationCap size={28} />
              </div>
              
              <div className="">
                <h3 className="text-text-heading font-semibold text-lg mb-1">{edu.degree}</h3>
                <span className="text-accent text-sm block mb-3">{edu.school}</span>
                
                <div className="flex gap-6 mb-3">
                  <span className="text-text text-sm flex items-center gap-1">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                  <span className="text-text text-sm">{edu.location}</span>
                </div>
                
                <p className="text-text text-sm leading-relaxed m-0">{edu.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
