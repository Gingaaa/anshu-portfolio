import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Anshu Kumar | Full-Stack Developer & Innovator",
  description: "Anshu Kumar, a skilled software developer, specializes in full stack and app development. Exploring new opportunities to contribute and innovate in tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderComponent />
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
