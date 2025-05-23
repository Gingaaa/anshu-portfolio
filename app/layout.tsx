import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Footer from "@/components/footer";
// import { ViewTransitions } from 'next-view-transitions'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://anshu-portfolio-three.vercel.app/'),
  title: "Anshu Kumar | Full-Stack Developer & Innovator",
  description: "Anshu Kumar, a skilled software developer, specializes in full stack and app development. Exploring new opportunities to contribute and innovate in tech.",
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ViewTransitions>
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 1.3 }}
    // >
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
            <Navbar />
          
            {children}
            <SpeedInsights />
            <Analytics />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    // </motion.div>
    // {/* </ViewTransitions> */}
  );
}
