import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahuleshwar.vercel.app"),
  title: `${personalInfo.name} | Software Engineer | Frontend Developer`,
  description: `Portfolio of ${personalInfo.name} — ${personalInfo.role} with 4 years of experience building modern web applications with React, Next.js, and TypeScript.`,
  keywords: [
    "Rahul Kumar Eshwar",
    "Rahul Eshwar",
    "Software Engineer",
    "Software Engineer II",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Hyderabad",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name} | Software Engineer`,
    description: `Portfolio of ${personalInfo.name} — ${personalInfo.role} specializing in frontend development with React and Next.js.`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Software Engineer`,
    description: `Portfolio of ${personalInfo.name} — ${personalInfo.role} specializing in frontend development.`,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              jobTitle: personalInfo.role,
              description: personalInfo.about,
              url: "https://rahuleshwar.vercel.app",
              email: "rahuleshwar98@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/in/rahul-kumar-eshwar/",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
