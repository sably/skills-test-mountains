import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my skills test",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="relative">
          <Navbar simpleNav />
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
