import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junthau Hans William | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, ASP.NET Core, SQL Server, TypeScript, and scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "React",
    "ASP.NET Core",
    "TypeScript",
    "SQL Server",
    "Next.js",
    "Jakarta",
  ],
  authors: [{ name: "Junthau Hans William" }],
  openGraph: {
    title: "Junthau Hans William | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, ASP.NET Core, SQL Server, TypeScript, and scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junthau Hans William | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, ASP.NET Core, SQL Server, TypeScript, and scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-slate-900 dark:bg-[#09090b] dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
