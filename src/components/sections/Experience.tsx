import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4">Professional Journey</span>
          <h2 className="text-4xl font-bold text-text-primary font-display">Experience Timeline</h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/30 to-gold/10" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Marker */}
                <div className="absolute -left-[36px] md:-left-[52px] top-0 w-3 h-3 bg-gold rounded-full border-4 border-bg-secondary shadow-lg" />

                {/* Content */}
                <div className="bg-bg-card border border-gold/10 rounded-lg p-8 hover:border-gold hover:shadow-gold-md transition-all">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">{exp.period}</div>
                    <h3 className="text-2xl font-bold text-text-primary mb-1">{exp.role}</h3>
                    <div className="text-text-muted">
                      {exp.company}
                      {exp.client && <span> · Client: {exp.client}</span>}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3 text-text-muted">
                          <span className="text-gold font-bold mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Projects (if any) */}
                  {exp.projects && exp.projects.map((project) => (
                    <div key={project.name} className="mt-6 pt-6 border-t border-gold/10">
                      <h4 className="text-lg font-semibold text-gold-light mb-3">{project.name}</h4>
                      <p className="text-text-muted text-sm mb-4">{project.description}</p>
                      <ul className="space-y-2 mb-4">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3 text-text-muted text-sm">
                            <span className="text-gold mt-0.5">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs text-gold bg-gold/10 border border-gold/20 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gold/10">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs text-gold bg-gold/10 border border-gold/20 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}