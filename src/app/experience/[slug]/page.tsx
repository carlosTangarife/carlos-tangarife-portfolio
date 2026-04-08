import { Metadata } from "next";
import { experiences } from "@/data/experience";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

// Helper to create SEO-friendly slug
function createSlug(company: string, role: string): string {
  const cleanCompany = company.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const cleanRole = role.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  return `${cleanCompany}-${cleanRole}`;
}

// Generate static params for all experiences
export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: createSlug(exp.company, exp.role),
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const experience = experiences.find((exp) => createSlug(exp.company, exp.role) === slug);
  
  if (!experience) {
    return {
      title: "Experience Not Found | Carlos Tangarife",
    };
  }
  
  const title = `${experience.role} at ${experience.company} | Carlos Tangarife`;
  const description = experience.description;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: experience.period,
    },
  };
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const experience = experiences.find((exp) => createSlug(exp.company, exp.role) === slug);
  
  if (!experience) {
    notFound();
  }
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-primary pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/experience"
              className="text-gold text-sm hover:underline flex items-center gap-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to All Experience
            </Link>
          </nav>
          
          {/* Header */}
          <header className="mb-12">
            <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
              {experience.period}
            </div>
            <h1 className="text-4xl font-bold text-text-primary mb-2">
              {experience.role}
            </h1>
            <div className="text-xl text-gold mb-2">
              {experience.company}
            </div>
            {experience.client && (
              <div className="text-text-muted">
                Client: {experience.client}
              </div>
            )}
            <div className="text-text-muted mt-2">
              {experience.location}
            </div>
          </header>
          
          {/* Description */}
          <section className="mb-10">
            <p className="text-lg text-text-secondary leading-relaxed">
              {experience.description}
            </p>
          </section>
          
          {/* Key Achievements */}
          {experience.highlights && experience.highlights.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 pb-2 border-b border-gold/20">
                Key Achievements
              </h2>
              <ul className="space-y-4">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-gold font-bold mt-1">▹</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          
          {/* Projects */}
          {experience.projects && experience.projects.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-text-primary mb-6 pb-2 border-b border-gold/20">
                Projects
              </h2>
              <div className="space-y-6">
                {experience.projects.map((project, index) => (
                  <div 
                    key={index}
                    className="bg-bg-card border border-gold/10 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-bold text-gold mb-3">
                      {project.name}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {project.description}
                    </p>
                    
                    {project.highlights.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {project.highlights.map((h, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-text-muted text-sm">
                            <span className="text-gold mt-0.5">▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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
            </section>
          )}
          
          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6 pb-2 border-b border-gold/20">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-2 text-sm text-gold bg-gold/10 border border-gold/20 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
          
          {/* Other Experiences */}
          <section className="border-t border-gold/10 pt-10">
            <h2 className="text-xl font-bold text-text-primary mb-6">
              Other Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiences
                .filter((exp) => exp.id !== experience.id)
                .slice(0, 4)
                .map((exp) => (
                  <Link
                    key={exp.id}
                    href={`/experience/${createSlug(exp.company, exp.role)}`}
                    className="block p-4 bg-bg-card border border-gold/10 rounded-lg hover:border-gold transition-all"
                  >
                    <div className="text-gold text-sm mb-1">{exp.period}</div>
                    <div className="text-text-primary font-medium">{exp.role}</div>
                    <div className="text-text-muted text-sm">{exp.company}</div>
                  </Link>
                ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}