"use client";

import { experiences } from "@/data/experience";
import Link from "next/link";

// Helper to create SEO-friendly slug from company and role
function createSlug(company: string, role: string): string {
  const cleanCompany = company.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const cleanRole = role.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  return `${cleanCompany}-${cleanRole}`;
}

// Get only the 2 most recent experiences
const recentExperiences = experiences.slice(0, 2);

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4">Recent Work</span>
          <h2 className="text-4xl font-bold text-text-primary font-display">Experience Highlights</h2>
        </div>

        {/* Recent Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentExperiences.map((exp) => {
            const slug = createSlug(exp.company, exp.role);
            
            return (
              <div 
                key={exp.id} 
                className="bg-bg-card border border-gold/10 rounded-xl p-6 hover:border-gold hover:shadow-gold-md transition-all"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">{exp.role}</h3>
                  <div className="text-text-muted">
                    {exp.company}
                    {exp.client && <span> · {exp.client}</span>}
                  </div>
                </div>

                {/* Brief Teaser - First 2-3 sentences */}
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {exp.description}
                </p>

                {/* Key highlight */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="mb-4">
                    <p className="text-gold text-sm">
                      * {exp.highlights[0]}
                    </p>
                  </div>
                )}

                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.slice(0, 5).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs text-gold bg-gold/10 border border-gold/20 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 5 && (
                    <span className="px-2 py-1 text-xs text-text-muted">
                      +{exp.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <Link 
                  href={`/experience/${slug}`}
                  className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
                >
                  View Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-10 text-center">
          <Link 
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-bg-primary transition-all"
          >
            View All Experience
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}