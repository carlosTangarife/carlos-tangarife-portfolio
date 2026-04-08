"use client";

import { useState } from "react";
import { cvFormats, CVFormatId } from "@/data/cv-formats";
import { generatePDF } from "@/utils/pdf-generator";

export default function CVDownloadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async (formatId: CVFormatId) => {
    setIsGenerating(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      generatePDF(formatId);
      setIsOpen(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
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
            onClick={() => !isGenerating && setIsOpen(false)}
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
                disabled={isGenerating}
                className="p-2 text-text-muted hover:text-gold transition-colors disabled:opacity-50"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

            {/* Loading State */}
            {isGenerating && (
              <div className="p-6 border-t border-gold/10 bg-gold/5">
                <div className="flex items-center justify-center gap-3 text-gold">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span className="font-medium">Generating PDF...</span>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="border-t border-gold/10 p-6 bg-bg-secondary/50">
              <p className="text-text-muted text-sm text-center">
                All CVs are generated dynamically with the latest information
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}