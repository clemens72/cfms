import type { Metadata } from "next";
import { Montserrat, Arimo } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

// FONTS
const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});


export const metadata: Metadata = {
  title: "Columbus Folk Music Society | Homepage",
  description: "Official site for the Columbus Folk Music Society",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${arimo.variable} ${montserrat.variable}`}>
      <body>
        <NavBar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
