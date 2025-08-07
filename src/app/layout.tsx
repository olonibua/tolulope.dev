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
  title: "Tolulope Olonibua - Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies. Building exceptional digital experiences with React, Next.js, and TypeScript.",
  keywords: "Full Stack Developer, React, Next.js, TypeScript, Web Development, Frontend, Backend, Remote Developer, UK Developer",
  authors: [{ name: "Tolulope Olonibua" }],
  creator: "Tolulope Olonibua",
  publisher: "Tolulope Olonibua",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/WhatsApp Image 2025-08-07 at 08.54.12.jpeg',
  },
  openGraph: {
    title: "Tolulope Olonibua - Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies. Building exceptional digital experiences with React, Next.js, and TypeScript.",
    url: "https://tolulope.dev",
    siteName: "Tolulope Olonibua Portfolio",
    images: [
      {
        url: "/WhatsApp Image 2025-08-07 at 08.54.12.jpeg",
        width: 400,
        height: 400,
        alt: "Tolulope Olonibua - Full Stack Developer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolulope Olonibua - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/WhatsApp Image 2025-08-07 at 08.54.12.jpeg"],
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