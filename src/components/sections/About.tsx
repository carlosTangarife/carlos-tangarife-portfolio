import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4">Who I Am</span>
          <h2 className="text-4xl font-bold text-text-primary font-display">
            Modernizing Legacy Systems, Accelerating Business Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-xl text-text-primary leading-relaxed">
              I'm a <strong className="text-gold">Senior Software Engineer</strong> from {profile.location}, with a proven track record 
              of transforming complex legacy systems into modern, scalable solutions for US-based companies.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My approach combines <strong className="text-text-primary">technical excellence</strong> with <strong className="text-text-primary">business understanding</strong>, 
              ensuring that solutions are not only functional but sustainable, scalable, and aligned with organizational goals.
            </p>

            {/* Philosophy */}
            <div className="mt-8 p-8 bg-bg-card border-l-4 border-gold rounded-lg">
              <h3 className="text-xl font-semibold text-gold mb-6">My Professional Philosophy</h3>
              <ul className="space-y-4">
                {profile.philosophy.map((item, index) => {
                  const [title, ...desc] = item.split(": ");
                  return (
                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                      <span className="text-gold font-bold">→</span>
                      <span>
                        <strong className="text-gold-light">{title}:</strong> {desc.join(": ")}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="space-y-6">
            <div className="p-8 bg-bg-card border border-gold/10 rounded-lg hover:border-gold hover:shadow-gold-md transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-gold mb-3">Core Expertise</h4>
              <p className="text-text-muted">
                Cloud Architecture (AWS, Azure), Full-Stack Development, DevOps/CI-CD, and Legacy System Modernization
              </p>
            </div>

            <div className="p-8 bg-bg-card border border-gold/10 rounded-lg hover:border-gold hover:shadow-gold-md transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold text-gold mb-3">Innovation Leader</h4>
              <p className="text-text-muted">
                Pioneering AI-assisted development using Cursor and ChatGPT, increasing delivery speed by 40%
              </p>
            </div>

            <div className="p-8 bg-bg-card border border-gold/10 rounded-lg hover:border-gold hover:shadow-gold-md transition-all">
              <div className="text-4xl mb-4">🌎</div>
              <h4 className="text-xl font-semibold text-gold mb-3">Global Impact</h4>
              <p className="text-text-muted">
                Delivered solutions for US companies serving millions of active users across multiple industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}