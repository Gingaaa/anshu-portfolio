import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/footer";
import CursorRevealBackground from "@/components/cursor-reveal-background";
import LeftSideSocials from "@/components/left-side-socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anshu-portfolio-three.vercel.app/"),
  title: "Anshu Kumar | Full-Stack Developer & Innovator",
  description:
    "Anshu Kumar, a skilled software developer, specializes in full stack and app development. Exploring new opportunities to contribute and innovate in tech.",
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CursorRevealBackground />
          <LeftSideSocials />
          <Navbar />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
