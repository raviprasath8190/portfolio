import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import MouseTracker from "@/components/mouse-tracker";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = IBM_Plex_Mono({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RaviPrasath Portfolio",
  description: "Skill:React, Next.js, ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col justify-center items-center py-12`}
      >
        <div className="max-w-[640px]  cssanimation sequence fadeInBottom">
          <Header />
          {children}
          <Footer />
        </div>
        <MouseTracker />
      </body>
    </html>
  );
}
