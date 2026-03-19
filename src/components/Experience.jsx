import { experience } from '../utils/copy'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 bg-bg">
      <div className="max-w-275 mx-auto">
        <div className="flex items-start gap-6 mb-12">
          <span className="text-accent font-mono text-sm pt-2">02</span>
          <h2 className="text-text-heading text-3xl font-serif font-normal relative">
            Experiencia
            <span className="absolute -bottom-2 left-0 w-14 h-0.5 bg-accent"></span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {experience.map((job, index) => (
            <article 
              key={index} 
              className="bg-bg-secondary border border-border rounded-2xl p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(159,103,255,0.1)] transition-all duration-300"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-text-heading text-lg font-semibold mb-1">{job.role}</h3>
                  <span className="text-accent text-sm">{job.company}</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-text block">{job.period}</span>
                  <span className="text-xs text-text">{job.location}</span>
                </div>
              </div>
              
              <ul className="list-none space-y-3 mb-6">
                {job.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-text text-sm pl-6 relative leading-relaxed">
                    <span className="absolute left-0 text-accent">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="font-mono text-xs px-3 py-1.5 bg-bg-tertiary border border-border rounded text-text hover:border-accent hover:text-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
