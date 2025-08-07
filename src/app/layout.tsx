import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/contexts/theme-context";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  title: "Tolulope Olonibua - Prompt Engineer & SaaS Developer",
  description: "Prompt Engineer & SaaS Developer specializing in AI-driven solutions. Building MVPs efficiently through intelligent prompt engineering and modern web technologies.",
  keywords: "Prompt Engineer, SaaS Developer, AI Integration, React, Next.js, TypeScript, MVP Development, AI-driven development, remote developer, software engineer",
  authors: [{ name: "Tolulope Olonibua" }],
  creator: "Tolulope Olonibua",
  publisher: "Tolulope Olonibua",
  openGraph: {
    title: "Tolulope Olonibua - Prompt Engineer & SaaS Developer",
    description: "Prompt Engineer & SaaS Developer specializing in AI-driven solutions and MVP development.",
    url: "https://tolulope.dev",
    siteName: "Tolulope Olonibua Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tolulope Olonibua - Prompt Engineer & SaaS Developer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolulope Olonibua - Software Engineer",
    description: "Senior Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="relative min-h-screen bg-background-primary text-text-primary">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}