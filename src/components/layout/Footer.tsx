import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-gold/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center gap-1 text-xl font-bold mb-2">
              <span className="text-text-primary">Carlos</span>
              <span className="text-gold">Tangarife</span>
            </Link>
            <p className="text-text-muted text-sm italic">
              Building software that speaks to both machines and humans
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()} Carlos Tangarife. All rights reserved.
            </p>
            <p className="text-text-dark text-xs mt-1">
              Designed & built with precision and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}