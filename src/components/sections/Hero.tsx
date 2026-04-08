import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/30 rounded-full mb-12 animate-pulse-gold">
          <span className="w-2 h-2 bg-gold rounded-full animate-blink" />
          <span className="text-gold text-sm font-medium">{profile.availability}</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
          <span className="text-text-primary">{profile.title}</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            {profile.tagline}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          {profile.yearsExperience}+ years of proven excellence in Cloud Architecture, Full-Stack Development, and AI-Assisted Engineering. 
          Specialized in reducing technical debt by up to 70% while delivering scalable solutions for 3M+ users.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12 py-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold font-display">{profile.yearsExperience}+</div>
            <div className="text-sm text-text-muted uppercase tracking-wider mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold font-display">70%</div>
            <div className="text-sm text-text-muted uppercase tracking-wider mt-1">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold font-display">3M+</div>
            <div className="text-sm text-text-muted uppercase tracking-wider mt-1">Users Impacted</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-bg-primary font-semibold rounded-lg hover:bg-gold-light hover:shadow-gold-glow transition-all"
          >
            Start a Conversation
          </a>
          <a
            href="#impact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-bg-primary transition-all"
          >
            View My Impact
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold text-xs uppercase tracking-widest animate-bounce-scroll">
        <span>Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-gold rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}