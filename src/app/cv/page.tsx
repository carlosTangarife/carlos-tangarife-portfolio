"use client";

import { useState } from "react";
import { cvFormats, CVFormatId } from "@/data/cv-formats";
import { generatePDF } from "@/utils/pdf-generator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CVDownloadPage() {
  const [generatingId, setGeneratingId] = useState<CVFormatId | null>(null);

  const handleDownload = async (formatId: CVFormatId) => {
    setGeneratingId(formatId);
    try {
      // Small delay for UX feedback
      await new Promise((resolve) => setTimeout(resolve, 300));
      generatePDF(formatId);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setGeneratingId(null);
    }
  };

  // Download the original static PDF
  const handleDownloadOriginal = () => {
    const link = document.createElement('a');
    link.href = '/cv-carlos-tangarife-2026.pdf';
    link.download = 'carlos-tangarife-cv-2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Find the recommended format (first one)
  const recommended = cvFormats[0];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-primary py-20 px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Download My CV
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Choose the format that best fits your needs. All CVs are generated dynamically 
              with the most up-to-date information.
            </p>
          </div>

          {/* Original PDF - Most Complete */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-2 border-gold rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="text-5xl">📄</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-bold text-text-primary">Full Professional CV</h2>
                    <span className="px-2 py-1 bg-gold text-bg-primary text-xs font-semibold rounded">
                      MOST COMPLETE
                    </span>
                  </div>
                  <p className="text-text-secondary mb-4">
                    Complete version with all sections, projects, achievements, and detailed content. 
                    This is the most comprehensive version.
                  </p>
                  <button
                    onClick={handleDownloadOriginal}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-primary font-semibold rounded-lg hover:bg-gold-light hover:shadow-gold-glow transition-all"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Full CV
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Label for generated options */}
          <div className="mb-6">
            <p className="text-sm text-text-muted uppercase tracking-wide text-center">
              Or generate a tailored version
            </p>
          </div>

          {/* Recommended */}
          <div className="mb-10">
            <div className="bg-gold/10 border-2 border-gold rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="text-5xl">{recommended.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold text-text-primary">{recommended.name}</h2>
                  <span className="px-2 py-1 bg-gold text-bg-primary text-xs font-semibold rounded">
                    RECOMMENDED
                  </span>
                </div>
                <p className="text-text-secondary mb-4">{recommended.description}</p>
                <button
                  onClick={() => handleDownload(recommended.id as CVFormatId)}
                  disabled={generatingId !== null}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-primary font-semibold rounded-lg hover:bg-gold-light hover:shadow-gold-glow transition-all disabled:opacity-50"
                >
                  {generatingId === recommended.id ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download {recommended.name}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other formats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cvFormats.slice(1).map((format) => (
            <div
              key={format.id}
              className="bg-bg-card border border-gold/10 rounded-xl p-6 hover:border-gold/30 hover:shadow-gold-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{format.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {format.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-3">{format.description}</p>
                  <p className="text-xs text-gold mb-4">
                    For: {format.targetAudience}
                  </p>
                  <button
                    onClick={() => handleDownload(format.id as CVFormatId)}
                    disabled={generatingId !== null}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold font-medium rounded-lg hover:bg-gold hover:text-bg-primary transition-all disabled:opacity-50 text-sm"
                  >
                    {generatingId === format.id ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Generating...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            All CVs are generated dynamically with the latest information. 
            If you need a custom format, feel free to reach out.
          </p>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}