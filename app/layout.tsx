import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaimae Aboulouafa — AI Engineer",
  description: "LLM infrastructure, RAG systems, agents, and CI/CD for AI at scale.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Chaimae Aboulouafa — AI Engineer",
    description: "LLM infrastructure, RAG systems, agents, and CI/CD for AI at scale.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaimae Aboulouafa — AI Engineer",
    description: "LLM infrastructure, RAG, agents, CI/CD.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#0b0214]"}>{children}</body>
    </html>
  );
}
