import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "../components/UI/ClientLayoutWrapper";
import Footer from "../components/UI/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Excellence Group of Institutes",
  description: "Premier Technical Training in Ludhiana",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        <ClientLayoutWrapper>
          <div className="flex flex-col min-h-screen">
            {/* children represents the page content */}
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}