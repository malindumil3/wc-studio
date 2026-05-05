import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WC Studio | Capturing Moments, Creating Memories",
  description: "Premier videography and photography studio in Sri Lanka by Methul Asmina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-brand-orange selection:text-white`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
