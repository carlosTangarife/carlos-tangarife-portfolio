import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Tangarife | Senior Software Engineer & Cloud Architecture Expert",
  description: "11+ years building scalable solutions. Specialized in reducing technical debt and optimizing cloud infrastructure.",
  keywords: "software engineer, cloud architecture, AWS expert, React developer, .NET expert, technical debt reduction, Colombia, remote work, Carlos Tangarife",
  authors: [{ name: "Carlos Javier Tangarife Gil" }],
  openGraph: {
    type: "website",
    url: "https://carlostangarife.com",
    title: "Carlos Tangarife | Senior Software Engineer & Cloud Architecture Expert",
    description: "11+ years building scalable solutions. Specialized in reducing technical debt and optimizing cloud infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Tangarife | Senior Software Engineer",
    description: "11+ years building scalable solutions. Specialized in reducing technical debt and optimizing cloud infrastructure.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}