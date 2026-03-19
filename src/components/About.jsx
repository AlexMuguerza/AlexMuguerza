import { about } from '../utils/copy'

export default function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-275 mx-auto">
        <div className="flex items-start gap-6 mb-12">
          <span className="text-accent font-mono text-sm pt-2">01</span>
          <h2 className="text-text-heading text-3xl font-serif font-normal relative">
            Acerca de Mí
            <span className="absolute -bottom-2 left-0 w-14 h-0.5 bg-accent"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="text-text space-y-5">
            {about.summary.map((paragraph, index) => (
              <p key={index}>
                {index === 0 && (
                  <>
                    Desarrollador Full Stack especializado en <strong className="text-accent-light">.NET Core y Flutter</strong>, {paragraph}
                  </>
                )}
                {index === 1 && (
                  <>
                    Experiencia en <strong className="text-accent-light">Clean Architecture, Onion Architecture, CQRS, Entity Framework, SQL Server, Firebase</strong>, {paragraph}
                  </>
                )}
                {index === 2 && paragraph}
              </p>
            ))}
          </div>
          
          <div className="flex flex-col gap-4">
            {about.stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-bg-secondary border border-border rounded-xl p-5 flex items-center gap-4 hover:border-accent hover:-translate-x-1 transition-all duration-300"
              >
                <span className="text-accent font-mono text-2xl font-bold">{stat.number}</span>
                <span className="text-text text-sm whitespace-pre-line">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
