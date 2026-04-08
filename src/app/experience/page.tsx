import { Metadata } from "next";
import { experiences } from "@/data/experience";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Professional Experience | Carlos Tangarife",
  description: `Overview of ${profile.yearsExperience}+ years of experience building scalable solutions for US and European companies. Senior Software Engineer specializing in React, Angular, .NET Core, AWS, and cloud architecture.`,
};

// Helper to create SEO-friendly slug
function createSlug(company: string, role: string): string {
  const cleanCompany = company.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const cleanRole = role.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  return `${cleanCompany}-${cleanRole}`;
}

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-primary pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Professional Experience
            </h1>
            <p className="text-lg text-text-muted">
              {profile.yearsExperience}+ years building scalable solutions for US and European companies.
            </p>
          </header>

          {/* Experience List */}
          <div className="space-y-8">
            {experiences.map((exp) => {
              const slug = createSlug(exp.company, exp.role);
              
              return (
                <Link
                  key={exp.id}
                  href={`/experience/${slug}`}
                  className="block bg-bg-card border border-gold/10 rounded-xl p-6 hover:border-gold hover:shadow-gold-md transition-all"
                >
                  {/* Period */}
                  <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
                    {exp.period}
                  </div>
                  
                  {/* Role & Company */}
                  <h2 className="text-xl font-bold text-text-primary mb-1">
                    {exp.role}
                  </h2>
                  <div className="text-text-muted mb-3">
                    {exp.company}
                    {exp.client && <span> · {exp.client}</span>}
                  </div>
                  
                  {/* Brief Description */}
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {exp.description}
                  </p>
                  
                  {/* Technologies Preview */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 6).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs text-gold bg-gold/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 6 && (
                      <span className="text-xs text-text-muted">
                        +{exp.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}