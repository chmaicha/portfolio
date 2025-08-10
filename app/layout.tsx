import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaimae Aboulouafa — AI Engineer",
  description: "LLM Infrastructure · Generative AI · RAG · Cloud (GCP, AWS)",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0214] text-zinc-100`}
      >
        {/* global dark purple glow background */}
        <div className="min-h-screen bg-[radial-gradient(60rem_60rem_at_70%_-10%,rgba(124,58,237,0.20),transparent),radial-gradient(50rem_50rem_at_10%_10%,rgba(147,51,234,0.18),transparent)]">
          {children}
        </div>
      </body>
    </html>
  );
}
