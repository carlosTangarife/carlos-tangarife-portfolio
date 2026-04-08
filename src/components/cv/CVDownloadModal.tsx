"use client";

import { useState } from "react";
import { cvFormats, CVFormatId } from "@/data/cv-formats";
import { downloadCV } from "@/utils/cv-generator";

export default function CVDownloadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async (formatId: CVFormatId) => {
    setIsGenerating(true);
    try {
      // Small delay for UX
      await new Promise((resolve) => setTimeout(resolve, 300));
      downloadCV(formatId);
      setIsOpen(false);
    } catch (error) {
      console.error("Error generating CV:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* Download Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-primary font-semibold rounded-lg hover:bg-gold-light hover:shadow-gold-glow transition-all"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download CV
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-bg-card border border-gold/20 rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-bg-card border-b border-gold/10 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-text-primary font-display">Download CV</h2>
                <p className="text-text-muted mt-1">Choose the format that best fits your needs</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-text-muted hover:text-gold transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Format Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {cvFormats.map((format) => (
                <button
                  key={format.id}
                  onClick={() => handleDownload(format.id as CVFormatId)}
                  disabled={isGenerating}
                  className="group text-left p-6 bg-bg-secondary border border-gold/10 rounded-xl hover:border-gold hover:shadow-gold-md transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{format.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-gold transition-colors">
                        {format.name}
                      </h3>
                      <p className="text-sm text-text-muted mt-1">{format.description}</p>
                      <p className="text-xs text-gold mt-2">For: {format.targetAudience}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gold/10 p-6 bg-bg-secondary/50">
              <p className="text-text-muted text-sm text-center">
                CVs are downloaded in Markdown format. Open in any text editor or convert to PDF.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}