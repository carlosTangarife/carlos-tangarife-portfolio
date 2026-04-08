import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4">Technical Arsenal</span>
          <h2 className="text-4xl font-bold text-text-primary font-display mb-4">Skills & Technologies</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            A comprehensive toolkit built over 11+ years of hands-on experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 bg-bg-card border border-gold/10 rounded-lg hover:border-gold hover:shadow-gold-md transition-all hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-gold">{category.name}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 text-sm rounded border transition-all ${
                      skill.level === "expert"
                        ? "bg-gold/15 border-gold text-gold font-semibold"
                        : "bg-gold/5 border-gold/20 text-text-secondary hover:border-gold hover:text-gold-light"
                    }`}
                  >
                    {skill.name}
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