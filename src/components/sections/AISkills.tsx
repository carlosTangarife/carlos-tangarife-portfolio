import { profile } from "@/data/profile";

export default function AISkills() {
  return (
    <section id="ai-skills" className="py-24 bg-bg-primary border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4">AI-Augmented Development</span>
          <h2 className="text-4xl font-bold text-text-primary font-display mb-4">Leveraging AI for Maximum Efficiency</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Pioneering the future of software development with AI-assisted workflows and modern methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Primary AI Tools */}
          <div className="p-8 bg-bg-card border border-gold/10 rounded-lg">
            <div className="text-4xl mb-6">🤖</div>
            <h3 className="text-xl font-semibold text-gold mb-4">AI Coding Assistants</h3>
            <div className="space-y-3">
              {profile.aiSkills.primary.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-text-primary">{skill}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mt-4">
              Expert in AI-powered development environments that accelerate delivery while maintaining code quality
            </p>
          </div>

          {/* AI Skills */}
          <div className="p-8 bg-bg-card border border-gold/10 rounded-lg">
            <div className="text-4xl mb-6">⚡</div>
            <h3 className="text-xl font-semibold text-gold mb-4">AI Capabilities</h3>
            <div className="space-y-3">
              {profile.aiSkills.secondary.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-text-primary">{skill}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mt-4">
              Leveraging LLMs for code generation, refactoring, documentation, and intelligent problem solving
            </p>
          </div>

          {/* Methodologies */}
          <div className="p-8 bg-bg-card border border-gold/10 rounded-lg">
            <div className="text-4xl mb-6">📋</div>
            <h3 className="text-xl font-semibold text-gold mb-4">Modern Methodologies</h3>
            <div className="space-y-3">
              {profile.aiSkills.methodologies.map((method) => (
                <div key={method} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-text-primary">{method}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mt-4">
              Structured development approaches enhanced by AI for consistent, scalable results
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-12 p-8 bg-gold/5 border border-gold/20 rounded-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">40%</div>
            <div className="text-text-primary font-semibold">Delivery Speed Increase</div>
            <div className="text-text-muted text-sm mt-2">
              Through AI-assisted development workflows and intelligent automation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}