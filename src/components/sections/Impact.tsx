import { impacts } from "@/data/impacts";

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4">Measurable Results</span>
          <h2 className="text-4xl font-bold text-text-primary font-display mb-4">Impact & Achievements</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Quantifiable improvements that drive business value and technical excellence
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact) => (
            <div
              key={impact.id}
              className={`p-8 bg-bg-card border border-gold/10 rounded-lg transition-all hover:border-gold hover:shadow-gold-md hover:-translate-y-1 ${
                impact.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-gold/10 rounded-lg text-gold mb-6">
                <ImpactIcon id={impact.id} />
              </div>

              {/* Metric */}
              <div className="text-5xl font-bold text-gold font-display mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                {impact.metric}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-primary mb-3">{impact.title}</h3>

              {/* Description */}
              <p className="text-text-muted mb-6">{impact.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {impact.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs text-gold bg-gold/10 border border-gold/20 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactIcon({ id }: { id: string }) {
  const icons: Record<string, JSX.Element> = {
    "infrastructure-reduction": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    "performance-improvement": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    "technical-debt": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    "delivery-speed": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    "users-impacted": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    "code-coverage": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  };

  return icons[id] || null;
}