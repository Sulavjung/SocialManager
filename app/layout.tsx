import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avisul - We help you create stunning websites effortlessly",
  description:
    "A modern full-stack template for building beautiful, accessible, and high-performance web applications",
  keywords: [
    "Next.js",
    "Shadcn UI",
    "Tailwind CSS",
    "Supabase",
    "React",
    "TypeScript",
    "Full-stack",
  ],
  authors: [{ name: "CodeLab Davis" }],
  creator: "CodeLab Davis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://next-shadcn-tailwind-supabase.vercel.app/",
    title: "Avisul - We help you create stunning websites effortlessly",
    description:
      "A modern full-stack template for building beautiful, accessible, and high-performance web applications",
    siteName: "Next.js + Shadcn UI + Tailwind + Supabase Template",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
