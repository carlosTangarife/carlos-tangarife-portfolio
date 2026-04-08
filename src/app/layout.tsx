import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadataBase = new URL('https://carlostangarife.com');

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title} - ${profile.tagline}`,
  description: profile.summary,
  metadataBase,
  keywords: [
    "senior software engineer",
    "freelance software engineer",
    "contract software developer",
    "remote engineer",
    "AWS architect",
    "legacy modernization",
    "full-stack developer",
    "React TypeScript expert",
    ".NET Core architect",
    "cloud infrastructure",
    "technical lead",
    "contractor",
    "freelancer",
    profile.name,
    "Colombia",
    "Manizales",
  ].join(", "),
  authors: [{ name: profile.name }],
  
  // Open Graph for LinkedIn and social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carlostangarife.com",
    siteName: "Carlos Tangarife Portfolio",
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.title}`,
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    creator: "@carlostangarife",
    images: ["/og-image.png"],
  },
  
  // LinkedIn specific
  alternates: {
    canonical: "https://carlostangarife.com",
  },
  
  // Verification
  verification: {
    google: "google-site-verification-code",
  },
  
  // Icons
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.title,
              url: "https://carlostangarife.com",
              email: profile.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: profile.location,
                addressCountry: "CO",
              },
              sameAs: [
                profile.linkedin,
                profile.github,
              ],
              worksFor: {
                "@type": "Organization",
                name: "Sombra",
              },
              description: profile.summary,
              skills: profile.searchKeywords,
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}