import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Large 404 */}
          <div className="mb-8">
            <span className="text-[12rem] md:text-[16rem] font-bold text-gold/20 leading-none block">
              404
            </span>
          </div>
          
          {/* Content */}
          <div className="relative -mt-16 md:-mt-24">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-text-muted mb-8 max-w-md mx-auto">
              The page you're looking for seems to have wandered off. 
              Let's get you back on track.
            </p>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-primary font-semibold rounded-lg hover:bg-gold-light hover:shadow-gold-glow transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Back to Home
              </Link>
              
              <Link 
                href="/cv"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-bg-primary transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </Link>
            </div>
            
            {/* Quick Links */}
            <div className="mt-16 pt-8 border-t border-gold/10">
              <p className="text-sm text-text-muted mb-4">Or explore:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/experience" className="text-gold hover:underline">
                  Experience
                </Link>
                <span className="text-text-muted">·</span>
                <Link href="/experience/sombra-senior-software-engineer" className="text-gold hover:underline">
                  Latest Work
                </Link>
                <span className="text-text-muted">·</span>
                <Link href="/#contact" className="text-gold hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}