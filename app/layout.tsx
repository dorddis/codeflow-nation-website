import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import PageTransition from "@/components/PageTransition";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#059669',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://codeflownation.com'),
  title: "CodeFlow | Enterprise Workflow Automation",
  description: "I build AI automation that eliminates the manual work your team shouldn't be doing. Custom pipelines for enterprise workflows. Human-in-the-loop. Production-grade.",
  keywords: "CodeFlow, enterprise automation, workflow automation, AI automation, custom SaaS, business process automation, employee efficiency",
  authors: [{ name: "Siddharth Rodrigues" }],
  alternates: {
    canonical: 'https://codeflownation.com',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "CodeFlow | Enterprise Workflow Automation",
    description: "I build AI automation that eliminates the manual work your team shouldn't be doing.",
    url: "https://codeflownation.com",
    siteName: "CodeFlow",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CodeFlow - Enterprise Workflow Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CodeFlow | Enterprise Workflow Automation",
    description: "I build AI automation that eliminates the manual work your team shouldn't be doing.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <PageTransition>
          {children}
        </PageTransition>
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
